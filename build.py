#!/usr/bin/env python3
"""Build every experiment in this folder for GitHub Pages.

    python3 build.py              # build all experiments
    python3 build.py <folder>     # build one

An experiment is any folder here that contains an experiment.json. For each one,
this script compiles the .psyexp to JavaScript with the installed PsychoPy app,
wires in DataPipe saving (shared/datapipe.js), and writes experiment.js and
index.html next to the .psyexp. It then rewrites the top-level index.html.

Nothing here needs editing when a new experiment is added: see README.md.
"""
import html
import json
import os
import re
import shutil
import subprocess
import sys
import tempfile
from pathlib import Path

ROOT = Path(__file__).resolve().parent
PSYCHOPY = Path("/Applications/PsychoPy.app/Contents")
LIB = "psychojs-2026.2.2"   # the PsychoJS files in lib/; must match the PsychoPy version


def fail(msg):
    sys.exit(f"ERROR: {msg}")


def replace_once(text, pattern, repl, what, last=False):
    """Regex-replace exactly one match (or the last one), or stop with a clear error."""
    matches = list(re.finditer(pattern, text))
    if not matches or (len(matches) > 1 and not last):
        fail(f"expected one place to {what}, found {len(matches)}. "
             "PsychoPy's JS output may have changed; update build.py.")
    m = matches[-1]
    return text[:m.start()] + m.expand(repl) + text[m.end():]


def compile_js(psyexp):
    """Compile a .psyexp to JS in a temp copy of its folder, return the JS text."""
    res = PSYCHOPY / "Resources"
    pylib = res / "lib" / "python3.11"
    env = dict(os.environ, PYTHONHOME=str(res), PYTHONPATH=f"{pylib}:{pylib / 'lib-dynload'}")
    with tempfile.TemporaryDirectory() as tmp:
        work = Path(tmp) / "exp"
        shutil.copytree(psyexp.parent, work)
        out = work / "compiled.js"
        run = subprocess.run(
            [str(PSYCHOPY / "MacOS" / "python"), "-m", "psychopy.scripts.psyexpCompile",
             str(work / psyexp.name), "-o", str(out)],
            env=env, capture_output=True, text=True)
        if not out.exists():
            fail(f"PsychoPy could not compile {psyexp.name}:\n{run.stdout}\n{run.stderr}")
        return out.read_text(encoding="utf-8-sig")


def check_syntax(js_file):
    """Catch JavaScript syntax errors (e.g. in hand-written Code components) with node."""
    node = shutil.which("node")
    if not node:
        return
    with tempfile.TemporaryDirectory() as tmp:
        copy = Path(tmp) / "experiment.mjs"
        shutil.copy(js_file, copy)
        run = subprocess.run([node, "--check", str(copy)], capture_output=True, text=True)
        if run.returncode:
            fail(f"{js_file.parent.name}: experiment.js has a syntax error:\n{run.stderr}")


def build(folder):
    cfg = json.loads((folder / "experiment.json").read_text())
    psyexps = list(folder.glob("*.psyexp"))
    if len(psyexps) != 1:
        fail(f"{folder.name}: expected exactly one .psyexp, found {len(psyexps)}")
    js = compile_js(psyexps[0])

    # Things that cannot work online, caught here instead of in a participant's browser.
    if "Syntax Error: Fix Python code" in js:
        fail(f"{folder.name}: a Code component has Python that PsychoPy could not translate "
             "to JavaScript. Open it in Builder and write the JS side by hand.")
    if "pipe.jspsych.org" in js:
        fail(f"{folder.name}: the .psyexp has its own DataPipe code. Disable that Code "
             "component; saving is added by this script.")
    for path in re.findall(r"'path': '([^']*)'", js):
        if path.startswith(("/", "..")) or not (folder / path).exists():
            fail(f"{folder.name}: resource '{path}' is not inside the experiment folder. "
                 "Copy it in and point the loop/component at the relative filename.")

    exp_id = cfg.get("datapipe_id", "")
    js = replace_once(js, rf"'\./lib/{re.escape(LIB)}\.js';",
                      f"'../lib/{LIB}.js';\nimport {{ createDataPipe, lockParticipantCode }} from '../shared/datapipe.js';",
                      "import the DataPipe module")
    js = replace_once(js, r"(const psychoJS = new PsychoJS\(\{[^}]*\}\);)",
                      "\\1\n\n// Unique, uneditable participant code, added by build.py:\n"
                      "const participantCode = lockParticipantCode(expInfo);\n"
                      "\n// DataPipe saving, added by build.py:\n"
                      "const dataPipe = createDataPipe(psychoJS, {\n"
                      f"  experimentID: {json.dumps(exp_id)},\n"
                      "  expName: expName,\n  expInfo: expInfo,\n"
                      f"  saveIncomplete: {json.dumps(bool(cfg.get('save_incomplete', False)))},\n"
                      "  next: Scheduler.Event.NEXT,\n});",
                      "create the DataPipe saver")
    js = re.sub(r"(const psychoJS = new PsychoJS\(\{\s*debug: )true", r"\1false", js)
    # The start dialog's title is the Builder experiment name, which often gives away
    # the manipulation (e.g. "SemanticsvsRhymes"). Show the neutral title instead.
    js = replace_once(js, r"(  dictionary: expInfo,\n  title: )expName",
                      "\\1" + json.dumps(cfg["title"]).replace("\\", "\\\\"), "set the dialog title")
    js = replace_once(js, r"(\n  util\.addInfoFromUrl\(expInfo\);)",
                      "\\1\n  expInfo['participant'] = participantCode;  // added by build.py",
                      "re-apply the participant code")
    if re.search(r"flowScheduler\.add\(\w+LoopEnd\);", js):
        js = replace_once(js, r"(flowScheduler\.add\(\w+LoopEnd\);)",
                          "\\1\nflowScheduler.add(dataPipe.saveStep);  // added by build.py",
                          "save after the last loop", last=True)
    js = replace_once(js, r"(\n  psychoJS\.window\.close\(\);\n  psychoJS\.quit\()",
                      "\n  await dataPipe.saveOnQuit(isCompleted);  // added by build.py\\1",
                      "save on quit")
    (folder / "experiment.js").write_text(js, encoding="utf-8")
    check_syntax(folder / "experiment.js")

    title = html.escape(cfg["title"])
    (folder / "index.html").write_text(f"""<!doctype html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
    <meta name="robots" content="noindex">
    <title>{title}</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/jquery-ui-dist@1.12.1/jquery-ui.min.css">
    <link rel="stylesheet" href="../lib/{LIB}.css">
  </head>
  <body>
    <div id="root"></div>
    <script src="https://cdn.jsdelivr.net/npm/jquery@3.6.0/dist/jquery.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/jquery-ui-dist@1.12.1/jquery-ui.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/preloadjs@1.0.1/lib/preloadjs.min.js"></script>
    <script src="./experiment.js" type="module"></script>
  </body>
</html>
""", encoding="utf-8")
    note = "" if exp_id else "   (no datapipe_id yet: data will NOT be uploaded)"
    print(f"built {folder.name}{note}")
    return cfg["title"]


def main():
    if not (PSYCHOPY / "MacOS" / "python").exists():
        fail(f"PsychoPy not found at {PSYCHOPY.parent}")
    only = [a.rstrip("/") for a in sys.argv[1:]]
    folders = sorted(p.parent for p in ROOT.glob("*/experiment.json"))
    for name in only:
        if name not in [f.name for f in folders]:
            fail(f"no experiment folder named '{name}'")
    for folder in folders:
        if not only or folder.name in only:
            build(folder)
    items = "\n".join(
        f'      <li><a href="{f.name}/">{html.escape(json.loads((f / "experiment.json").read_text())["title"])}</a></li>'
        for f in folders)
    (ROOT / "index.html").write_text(f"""<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="robots" content="noindex">
    <title>PSYC 572 / LING 505 student experiments</title>
    <style>body{{font:18px/1.5 system-ui,sans-serif;max-width:40em;margin:3em auto;padding:0 1em}}</style>
  </head>
  <body>
    <h1>PSYC 572 / LING 505 student experiments</h1>
    <p>Each experiment needs a computer with a keyboard and takes over the full screen.</p>
    <ul>
{items}
    </ul>
  </body>
</html>
""", encoding="utf-8")


if __name__ == "__main__":
    main()
