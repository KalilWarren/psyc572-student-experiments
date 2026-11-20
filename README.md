# PSYC 572 / LING 505 student experiments, online

Student PsychoPy experiments, hosted on GitHub Pages, saving data to OSF through
[DataPipe](https://pipe.jspsych.org). One folder per experiment. No Pavlovia needed.

Each experiment's link is `https://<user>.github.io/<repo>/<folder>/`.

## Experiments

| Folder | Study |
|---|---|
| `study-01` | Semantic vs. rhyme priming in lexical decision |
| `study-02` | Transposed-letter nonwords in lexical decision |
| `study-03` | Emotional valence and concreteness in lexical decision |
| `study-04` | Artificial grammar learning and gaming experience |
| `study-05` | Emotional word categorisation with coloured words |

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
     "save_incomplete": false,
     "save_before": "debrief"
   }
   ```

   `title` is what participants see in the browser tab and on the start dialog, so keep it
   from giving away the hypothesis. `save_incomplete` decides what happens when a participant presses Escape:
   `false` discards their data (use this when the consent screen promises that), `true`
   uploads what they did so far. `save_before` is optional: it names the routine (in the
   main flow, outside any loop) that the upload happens just before. Leave it out and the
   upload happens before the last routine. Set it to the first debriefing screen when
   there are several, but never to anything earlier than a survey or other screen whose
   answers you need: whatever that routine and the ones after it record is not in the file.
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
- The upload happens just before the `save_before` routine (see above), normally the
  debriefing, and the participant sees "Saving your data" for a moment. If that upload fails it is tried
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
- The instruction, consent, and debriefing text boxes were half the screen tall and the
  browser cut off whatever did not fit (including "Press SPACE to continue"). They are
  now 0.9 of the screen tall with a letter height of 0.035 instead of 0.05. The wording
  is unchanged.
- The student's DataPipe Code component is disabled.

**study-03** (valence and concreteness)
- The Code component that samples 40 trials from each of the six word conditions and 240
  nonwords was Python only. It now has an equivalent JavaScript side.
- The instruction text boxes were too small for their text, which the browser cut off.
  They are now 1.2 x 0.9 of the screen height, with a letter height of 0.04 for the
  longer texts.
- The student's DataPipe Code component is disabled.

**study-04** (artificial grammar learning)
- The last survey question (`q4_2`, "How often do you play online video games?") had no
  keyboard, so the experiment could never get past it. It now accepts a, b, c, or d and
  stores the answer as `q4_2Resp.keys`.
- `corrAns` in the conditions files was upper case (`C`, `N`) while the keys are lower
  case, so every response was scored incorrect. The online files use lower case.
- The conditions files are renamed `practice.xlsx` and `conditions.xlsx` and contain only
  the `string` and `corrAns` columns (the originals had note columns without headers).
- The background colour was written as `(r, g, b)`, which the JavaScript export turns into
  black. It is now `[r, g, b]`, the same light blue as on the desktop.
- Text boxes resized as in study-03. The student's DataPipe Code component is disabled.

**study-05** (emotional word categorisation)
- The loops read `practice.xlsx` and `conditions.xlsx` from the folder instead of a
  `Research/` subfolder. The stray note column is dropped and one blank `letterColor`
  (the word "thigh") is set to white.
- Both keyboards scored every response against a fixed answer of `1`. They now use the
  `corrAns` column.
- The code that stops the practice loop after 20 trials had no JavaScript side, and the
  code meant to stop the main loop after 130 trials named the practice loop, so the main
  loop would have run all 3,152 words. Both now work, online and on the desktop.
- The End screen said "press SPACEBAR to end" but had no keyboard, so the experiment
  never finished. It now has one. The placeholder line "(insert adorable puppy pic)" is
  removed.
- The routine `Welcome_` is renamed `Welcome`: the trailing underscore makes PsychoPy
  write JavaScript that crashes on start.
- Text boxes resized as in study-03.

## Things `build.py` cannot catch

Check these by running the built experiment to the end once and reading the data file.

- Text cut off in Textbox components (the browser clips text to the box; the desktop
  does not).
- A screen with no way to leave it (no keyboard and no duration).
- A routine or loop name ending in an underscore.
- A colour written with round brackets, `$(r, g, b)`: use square brackets.
- `corrAns` values that do not match the allowed keys exactly, including case.

## Privacy

This repo is public. It holds experiments, never data: `.gitignore` excludes `data/`,
`.psydat`, and `.log` files. Keep it that way.
