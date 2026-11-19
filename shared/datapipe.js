// Saves a PsychoJS experiment's data to OSF through DataPipe (https://pipe.jspsych.org).
//
// build.py wires this into every experiment, so the .psyexp files need no saving
// code of their own. The data is uploaded twice-over safe:
//   1. right after the last trial loop, before any debriefing screens, so a
//      participant who closes the tab during the debriefing still counts;
//   2. again when the experiment quits, but only if step 1 did not succeed.
// If the upload fails (or no DataPipe ID is set), PsychoJS falls back to its
// normal behaviour of downloading the CSV in the participant's browser.

const ENDPOINT = 'https://pipe.jspsych.org/api/data/';
const TIMEOUT_MS = 20000;

function csvCell(value) {
  if (value === undefined || value === null) return '';
  const text = typeof value === 'object' ? JSON.stringify(value) : String(value);
  return /[",\n\r]/.test(text) ? '"' + text.replace(/"/g, '""') + '"' : text;
}

// One row per data-file entry, one column per variable, like PsychoPy's own CSV.
function toCSV(rows, extraInfo) {
  const columns = [];
  const seen = new Set();
  const add = (key) => { if (!seen.has(key)) { seen.add(key); columns.push(key); } };
  rows.forEach((row) => Object.keys(row).forEach(add));
  Object.keys(extraInfo).forEach(add);
  const lines = [columns.map(csvCell).join(',')];
  rows.forEach((row) => {
    lines.push(columns.map((key) => csvCell(key in row ? row[key] : extraInfo[key])).join(','));
  });
  return lines.join('\n') + '\n';
}

function showMessage(text) {
  const box = document.createElement('div');
  box.textContent = text;
  box.style.cssText = 'position:fixed;inset:0;display:flex;align-items:center;justify-content:center;' +
    'background:#808080;color:#fff;font:24px sans-serif;z-index:10000;';
  document.body.appendChild(box);
  return box;
}

// Gives this page load its own participant code and stops it being changed.
// The code is 8 characters drawn with the browser's cryptographic random generator
// from 31 letters and digits (no 0/O, 1/I/L), so about 850 billion possibilities:
// two participants getting the same code is not a practical concern. Reloading the
// page gives a new code. The start dialog shows the code but the box is read-only,
// and build.py re-applies it after the dialog and after URL parameters are read, so
// neither typing nor "?participant=..." in the link can replace it.
export function lockParticipantCode(expInfo) {
  const alphabet = '23456789ABCDEFGHJKMNPQRSTUVWXYZ';
  const limit = 256 - (256 % alphabet.length);   // reject bytes that would bias the draw
  let code = '';
  while (code.length < 8) {
    const byte = crypto.getRandomValues(new Uint8Array(1))[0];
    if (byte < limit) code += alphabet[byte % alphabet.length];
  }
  expInfo['participant'] = code;

  const lockField = () => {
    const input = document.querySelector('input[name="participant"]');
    if (input && !input.readOnly) {
      input.value = code;
      input.readOnly = true;
      input.tabIndex = -1;
      input.style.cssText += 'background:#e9e9e9;color:#555;cursor:not-allowed;';
    }
  };
  new MutationObserver(lockField).observe(document.documentElement, { childList: true, subtree: true });
  lockField();
  return code;
}

export function createDataPipe(psychoJS, { experimentID, expName, expInfo, saveIncomplete, next }) {
  let saved = false;
  const configured = Boolean(experimentID) && experimentID !== 'YOUR_ID';

  async function upload() {
    if (saved) return true;
    if (!configured) {
      console.warn('[DataPipe] No experiment ID set: data will not be uploaded.');
      return false;
    }
    const rows = psychoJS.experiment._trialsData;
    if (!rows || rows.length === 0) return false;
    const extraInfo = psychoJS.experiment.extraInfo || expInfo;
    const filename = [expInfo['participant'], expName, expInfo['date']]
      .join('_').replace(/[^A-Za-z0-9_.-]/g, '-') + '.csv';
    const message = showMessage('Saving your data. Please wait a moment…');
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);
    try {
      const response = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: '*/*' },
        body: JSON.stringify({ experimentID, filename, data: toCSV(rows, extraInfo) }),
        signal: controller.signal,
      });
      if (!response.ok) throw new Error('HTTP ' + response.status + ' ' + (await response.text()));
      saved = true;
      console.log('[DataPipe] Saved ' + filename);
    } catch (error) {
      console.error('[DataPipe] Upload failed:', error);
    } finally {
      clearTimeout(timer);
      message.remove();
    }
    return saved;
  }

  return {
    // Scheduled in the flow right after the last trial loop.
    saveStep: async () => {
      await upload();
      return next;
    },
    // Called from quitPsychoJS. isCompleted is false when the participant pressed Escape.
    saveOnQuit: async (isCompleted) => {
      if (isCompleted || saveIncomplete) await upload();
      // Uploaded, or deliberately discarded: do not also download a CSV to the participant.
      if (saved || (configured && !isCompleted && !saveIncomplete)) psychoJS._saveResults = false;
    },
  };
}
