# PSYC 572 / LING 505 student experiments, online

Student PsychoPy experiments, hosted on GitHub Pages, saving data to OSF through
[DataPipe](https://pipe.jspsych.org). One folder per experiment. No Pavlovia needed.

Each experiment's link is `https://<user>.github.io/<repo>/<folder>/`.

## Experiments

| Folder | Study |
|---|---|
| `study-01` | Semantic vs. rhyme priming in lexical decision |
| `study-02` | Transposed-letter nonwords in lexical decision |

## Adding an experiment

1. **Copy** the student's `.psyexp` and its conditions files into a new folder here.
   Name the folder `study-NN`: it becomes the public URL, so it must not name the student
   or hint at the hypothesis. Add a line to the table below.
   Do not copy `data/`, `.psydat`, `.log`, or `_lastrun.py` files.
2. **Make it self-contained.** Open the `.psyexp` in Builder and check that every loop's
   conditions file (and any image or sound) is a plain filename inside the folder, not a
   path into someone's Downloads.
3. **Remove the student's own saving code.** If there is a Code component that posts to
   `pipe.jspsych.org`, disable it. Saving is added automatically (see below).
4. **Create the DataPipe experiment.** On pipe.jspsych.org: New Experiment, pick the OSF
   project the data should go to, switch on "Enable data collection", and copy the
   Experiment ID.
5. **Add `experiment.json`** to the folder:

   ```json
   {
     "title": "Word recognition study",
     "datapipe_id": "PASTE_THE_ID_HERE",
     "save_incomplete": false
   }
   ```

   `title` is what participants see in the browser tab and on the start dialog, so keep it
   from giving away the hypothesis. `save_incomplete` decides what happens when a participant presses Escape:
   `false` discards their data (use this when the consent screen promises that), `true`
   uploads what they did so far.
6. **Build and test:** `python3 build.py`, then `python3 -m http.server` in this folder and
   open `http://localhost:8000/<folder>/`. Run it to the end and check that the file
   arrives in OSF.
7. **Publish:** `git add -A && git commit -m "Add <folder>" && git push`. The page is live
   in about a minute.

After any later edit to a `.psyexp`, conditions file, or `experiment.json`, run
`python3 build.py` again and push.

## What `build.py` does

It needs the PsychoPy app in `/Applications` (v2026.2.2, matching `lib/`). For each folder
with an `experiment.json` it:

- compiles the `.psyexp` to JavaScript, the same as Builder's "Export HTML";
- stops with an explanation if the experiment cannot work online: Python code that
  PsychoPy could not translate to JavaScript, sizes in `deg` or `cm` units, a conditions file outside the folder, a
  leftover DataPipe snippet, or a JavaScript syntax error;
- adds the DataPipe saving from `shared/datapipe.js` and writes `experiment.js` and
  `index.html`.

`experiment.js`, each `index.html`, and the top-level `index.html` are generated. Do not
edit them by hand.

## How the data is saved

- The data is uploaded as one CSV per participant, named
  `<participant>_<expName>_<date>.csv`, with the same columns PsychoPy writes locally.
- The upload happens right after the last trial loop, before the debriefing screens, and
  the participant sees "Saving your data" for a moment. If that upload fails it is tried
  again when the experiment ends.
- If it still fails, or `datapipe_id` is empty, the browser downloads the CSV to the
  participant's computer instead, so the data is not lost.
- Every time the page is opened it gets a new random 8-character participant code
  (for example `K7QM2XRD`). The start dialog shows it, but it cannot be edited, and a
  `?participant=` in the link is ignored. Reloading the page gives a new code. No names
  are collected.

## What was changed from the students' originals

The originals are kept untouched outside this repo. These copies differ as follows.

**study-01** (semantic vs. rhyme priming)
- The loops read `practice.xlsx` and `conditions.xlsx` from the folder instead of
  absolute paths on the student's computer.
- The student's DataPipe Code component (still set to `YOUR_ID`) is disabled.
- The fixation cross was 0.5 degrees of visual angle. Degrees do not exist online and
  the export turned it into half the screen height, so it is now set in `height` units at
  0.03 (3% of the screen height), about the size it had on the desktop.

**study-02** (transposed-letter lexical decision)
- The Code component that samples 245 real, 70 TL, and 60 pseudoword trials was Python
  only. It now has an equivalent JavaScript side, so it runs in a browser.
- The practice and main keyboard components now store whether each response was
  correct, and `practiceconditions.csv` gained a `corrAns` column for that.
- The experiment is named `tl_lexical_decision` instead of `untitled`.
- The student's DataPipe Code component is disabled.

## Privacy

This repo is public. It holds experiments, never data: `.gitignore` excludes `data/`,
`.psydat`, and `.log` files. Keep it that way.
