/***************** 
 * Agl Task *
 *****************/

import { core, data, sound, util, visual, hardware } from '../lib/psychojs-2026.2.2.js';
import { createDataPipe, lockParticipantCode } from '../shared/datapipe.js?v=30087dd572';
const { PsychoJS } = core;
const { TrialHandler, MultiStairHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'AGL Task';  // from the Builder filename that created this script
let expInfo = {
    'participant': `${util.pad(Number.parseFloat(util.randint(0, 999999)).toFixed(0), 6)}`,
    'session': '001',
    'age': '',
};
let PILOTING = util.getUrlParameters().has('__pilotToken');

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: false
});

// Unique, uneditable participant code, added by build.py:
const participantCode = lockParticipantCode(expInfo);

// DataPipe saving, added by build.py:
const dataPipe = createDataPipe(psychoJS, {
  experimentID: "",
  expName: expName,
  expInfo: expInfo,
  saveIncomplete: false,
  next: Scheduler.Event.NEXT,
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0.0588, 0.6157, 0.9608]),
  units: 'height',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'fill',
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: "Letter pattern study"
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); },flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(letterRoutineBegin());
flowScheduler.add(letterRoutineEachFrame());
flowScheduler.add(letterRoutineEnd());
flowScheduler.add(letter2RoutineBegin());
flowScheduler.add(letter2RoutineEachFrame());
flowScheduler.add(letter2RoutineEnd());
flowScheduler.add(letter4RoutineBegin());
flowScheduler.add(letter4RoutineEachFrame());
flowScheduler.add(letter4RoutineEnd());
flowScheduler.add(letter5RoutineBegin());
flowScheduler.add(letter5RoutineEachFrame());
flowScheduler.add(letter5RoutineEnd());
flowScheduler.add(letter7RoutineBegin());
flowScheduler.add(letter7RoutineEachFrame());
flowScheduler.add(letter7RoutineEnd());
flowScheduler.add(letter8RoutineBegin());
flowScheduler.add(letter8RoutineEachFrame());
flowScheduler.add(letter8RoutineEnd());
flowScheduler.add(welcomeRoutineBegin());
flowScheduler.add(welcomeRoutineEachFrame());
flowScheduler.add(welcomeRoutineEnd());
flowScheduler.add(welcome2RoutineBegin());
flowScheduler.add(welcome2RoutineEachFrame());
flowScheduler.add(welcome2RoutineEnd());
flowScheduler.add(practiceIntroRoutineBegin());
flowScheduler.add(practiceIntroRoutineEachFrame());
flowScheduler.add(practiceIntroRoutineEnd());
const practrialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(practrialsLoopBegin(practrialsLoopScheduler));
flowScheduler.add(practrialsLoopScheduler);
flowScheduler.add(practrialsLoopEnd);


flowScheduler.add(AGL_introRoutineBegin());
flowScheduler.add(AGL_introRoutineEachFrame());
flowScheduler.add(AGL_introRoutineEnd());
flowScheduler.add(AGL_intro_2RoutineBegin());
flowScheduler.add(AGL_intro_2RoutineEachFrame());
flowScheduler.add(AGL_intro_2RoutineEnd());
const loopsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(loopsLoopBegin(loopsLoopScheduler));
flowScheduler.add(loopsLoopScheduler);
flowScheduler.add(loopsLoopEnd);


flowScheduler.add(surveyIntroRoutineBegin());
flowScheduler.add(surveyIntroRoutineEachFrame());
flowScheduler.add(surveyIntroRoutineEnd());
flowScheduler.add(survey2RoutineBegin());
flowScheduler.add(survey2RoutineEachFrame());
flowScheduler.add(survey2RoutineEnd());
flowScheduler.add(survey_3RoutineBegin());
flowScheduler.add(survey_3RoutineEachFrame());
flowScheduler.add(survey_3RoutineEnd());
flowScheduler.add(q4_2RoutineBegin());
flowScheduler.add(q4_2RoutineEachFrame());
flowScheduler.add(q4_2RoutineEnd());
flowScheduler.add(dataPipe.saveStep);  // added by build.py
flowScheduler.add(debriefRoutineBegin());
flowScheduler.add(debriefRoutineEachFrame());
flowScheduler.add(debriefRoutineEnd());
flowScheduler.add(debrief_2RoutineBegin());
flowScheduler.add(debrief_2RoutineEachFrame());
flowScheduler.add(debrief_2RoutineEnd());
flowScheduler.add(farewellRoutineBegin());
flowScheduler.add(farewellRoutineEachFrame());
flowScheduler.add(farewellRoutineEnd());
flowScheduler.add(quitPsychoJS, 'Thank you for your patience.', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, 'Thank you for your patience.', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': 'practice.xlsx', 'path': 'practice.xlsx'},
    {'name': 'conditions.xlsx', 'path': 'conditions.xlsx'},
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.INFO);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2026.2.2';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  expInfo['participant'] = participantCode;  // added by build.py
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + ((((("data/" + expInfo["participant"]) + "_") + expName) + "_") + expInfo["date"]));
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}


var letterClock;
var letter1Resp;
var letter1Text;
var letter2Clock;
var letter2Text;
var letter2Resp;
var letter4Clock;
var letter4Text;
var letter4Resp;
var letter5Clock;
var letterResp5;
var letter5Resp;
var letter7Clock;
var letter7Resp;
var key_resp_2;
var letter8Clock;
var text_2;
var key_resp_5;
var welcomeClock;
var welcomeResp;
var welcomeText;
var welcome2Clock;
var welcome2Resp;
var welcome2Text;
var practiceIntroClock;
var pracIntroresp;
var pracIntrotext;
var practiceTrialClock;
var practText;
var AGL_introClock;
var taskIntroresp;
var taskIntrotext;
var AGL_intro_2Clock;
var taskIntro2text;
var taskIntro2resp;
var AGL_trialsClock;
var AGLtrials;
var AGLtrialsResp;
var surveyIntroClock;
var sIntroresp;
var sIntrotext;
var survey2Clock;
var q2;
var q2Resp;
var survey_3Clock;
var q3;
var q3Resp;
var q4_2Clock;
var q4Text;
var q4_2Resp;
var debriefClock;
var debriefResp;
var debriefTexxt;
var debrief_2Clock;
var debrief2Text;
var debrief2Resp;
var farewellClock;
var farewellText;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "letter"
  letterClock = new util.Clock();
  letter1Resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  letter1Text = new visual.TextStim({
    win: psychoJS.window,
    name: 'letter1Text',
    text: 'Dear Participant,\n\nMy name is Omolola Shomefun. I am an undergraduate student in the Psychology Department at the University of South Carolina. I am conducting a research study as part of the requirements of my degree in Psychology, and I would like to invite you to participate. \n\nPress *space* to continue.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  // Initialize components for Routine "letter2"
  letter2Clock = new util.Clock();
  letter2Text = new visual.TextStim({
    win: psychoJS.window,
    name: 'letter2Text',
    text: 'I am studying how well people are in understanding patterns in language.  If you decide to participate, you will be asked to view strings of words that vary in length, determine if they follow a pattern, and complete a two-question survey after completing the trials. \n\nPress *space* to continue.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  letter2Resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "letter4"
  letter4Clock = new util.Clock();
  letter4Text = new visual.TextStim({
    win: psychoJS.window,
    name: 'letter4Text',
    text: 'Although we have described the general nature of the tasks that you will be asked to perform during this study, the full intent and purpose of the study cannot be explained because doing so would bias the study results.  \n\nPress *space* to continue.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  letter4Resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "letter5"
  letter5Clock = new util.Clock();
  letterResp5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'letterResp5',
    text: 'Participation is confidential.  Study information will be kept in a secure location at the University of South Carolina.  The results of the study may be published or presented at professional meetings, but your identity will not be revealed. \n\nPlease press *space* to continue.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  letter5Resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "letter7"
  letter7Clock = new util.Clock();
  letter7Resp = new visual.TextStim({
    win: psychoJS.window,
    name: 'letter7Resp',
    text: 'I am happy to answer any questions you have about the study.  You may contact me at omolola@email.sc.edu or my faculty advisor, Kalil Warren, at knwarren@email.sc.edu. \n\nThank you for your consideration.  If you would like to participate, please press *space* to continue to the practice segment. When you are done, please wait to be exited out of the program.\n\nPress *space* to continue.\n',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "letter8"
  letter8Clock = new util.Clock();
  text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_2',
    text: 'With kind regards,\nOmolola Shomefun\nomolola@email.sc.edu\nKalil Warren\nknwarren@email.sc.edu\n\nPress *space* to continue.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_5 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "welcome"
  welcomeClock = new util.Clock();
  welcomeResp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  welcomeText = new visual.TextStim({
    win: psychoJS.window,
    name: 'welcomeText',
    text: '**Welcome!**\n\nIn this experiment, you will be tasked to identify the correct pattern based on a random string of letters. None of these strings are based on real words and are not meant to follow standard grammar rules of any language.\n\nIf you believe that a string *is* congruent with the pattern, press the *C* key.\n\nIf you believe that a string *is not* congruent with the pattern, press the *N* key.\n\n\nPress *space* to continue*',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  // Initialize components for Routine "welcome2"
  welcome2Clock = new util.Clock();
  welcome2Resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  welcome2Text = new visual.TextStim({
    win: psychoJS.window,
    name: 'welcome2Text',
    text: 'The total time of this experiment should be about 10-12 minutes. \n\nYou will be given 5 seconds per word shown to provide an answer.\n\nPlease note that it is your right to end your participation at any moment. If you wish to leave the experiment, press the escape key.\n\n\nPress *space* to continue.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  // Initialize components for Routine "practiceIntro"
  practiceIntroClock = new util.Clock();
  pracIntroresp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  pracIntrotext = new visual.TextStim({
    win: psychoJS.window,
    name: 'pracIntrotext',
    text: 'Now begins the training segment of this experiment.\n\nYou will be shown 50 strings of letters, each appearing for half a second at a time.\n\nEach string follows the pattern, but you must try to identify it.\n\nWhen you are ready, please press *space* to begin the training trials.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  // Initialize components for Routine "practiceTrial"
  practiceTrialClock = new util.Clock();
  practText = new visual.TextBox({
    win: psychoJS.window,
    name: 'practText',
    text: '',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [0, 0], 
    draggable: false,
    letterHeight: 0.05,
    lineSpacing: 1.0,
    size: [0.5, 0.5],  units: undefined, 
    ori: 0.0,
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    formattingSyntax: 'md',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: 0.0 
  });
  
  // Initialize components for Routine "AGL_intro"
  AGL_introClock = new util.Clock();
  taskIntroresp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  taskIntrotext = new visual.TextStim({
    win: psychoJS.window,
    name: 'taskIntrotext',
    text: 'You have completed the practice trials!\n\nNow, you will be shown 60 unique strings of words. \n\nAs a reminder:\nPress *C* if you believe the string follows the pattern.\nPress *N* if you believe the string does not follow the pattern.\n\nPress *space* to continue.\n',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  // Initialize components for Routine "AGL_intro_2"
  AGL_intro_2Clock = new util.Clock();
  taskIntro2text = new visual.TextStim({
    win: psychoJS.window,
    name: 'taskIntro2text',
    text: 'Again, if you wish to not continue, you may press the escape key to leave the experiment.\n\nOnce you are ready, you may press *space* to begin the experiment.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  taskIntro2resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "AGL_trials"
  AGL_trialsClock = new util.Clock();
  AGLtrials = new visual.TextBox({
    win: psychoJS.window,
    name: 'AGLtrials',
    text: '',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [0, 0], 
    draggable: false,
    letterHeight: 0.05,
    lineSpacing: 1.0,
    size: [0.5, 0.5],  units: undefined, 
    ori: 0.0,
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    formattingSyntax: 'md',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: 0.0 
  });
  
  AGLtrialsResp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "surveyIntro"
  surveyIntroClock = new util.Clock();
  sIntroresp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  sIntrotext = new visual.TextStim({
    win: psychoJS.window,
    name: 'sIntrotext',
    text: 'You have completed all 30 trials. \n\nYou will now be asked 2 multiple-choice survey questions.\n\n\nPress *space* to continue.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  // Initialize components for Routine "survey2"
  survey2Clock = new util.Clock();
  q2 = new visual.TextBox({
    win: psychoJS.window,
    name: 'q2',
    text: 'Do you play online video games that allow for real-time communication among players?\n\nA. Yes\n\nB. No',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [0, 0], 
    draggable: false,
    letterHeight: 0.05,
    lineSpacing: 1.0,
    size: [1.2, 0.9],  units: undefined, 
    ori: 0.0,
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    formattingSyntax: 'md',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'top-left',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: 0.0 
  });
  
  q2Resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "survey_3"
  survey_3Clock = new util.Clock();
  q3 = new visual.TextBox({
    win: psychoJS.window,
    name: 'q3',
    text: 'How familiar are you with gaming slang/acronyms?\n\nA. No at all familiar\n\nB. Somewhat not familiar\n\nC. Somewhat familiar\n\nD. Very familiar',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [0, 0], 
    draggable: false,
    letterHeight: 0.05,
    lineSpacing: 1.0,
    size: [1.2, 0.9],  units: undefined, 
    ori: 0.0,
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    formattingSyntax: 'md',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'top-left',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: 0.0 
  });
  
  q3Resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "q4_2"
  q4_2Clock = new util.Clock();
  q4Text = new visual.TextBox({
    win: psychoJS.window,
    name: 'q4Text',
    text: 'How often do you play online video games?\n\nA. Daily\n\nB. Weekly\n\nC. Monthly\n\nD. Rarely or Never',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [0, 0], 
    draggable: false,
    letterHeight: 0.05,
    lineSpacing: 1.0,
    size: [1.2, 0.9],  units: undefined, 
    ori: 0.0,
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    formattingSyntax: 'md',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: 0.0 
  });
  
  q4_2Resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "debrief"
  debriefClock = new util.Clock();
  debriefResp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  debriefTexxt = new visual.TextStim({
    win: psychoJS.window,
    name: 'debriefTexxt',
    text: 'Thank you for completing this experiment. \n\nThe true intended purpose of this study was to see if gamers or non-gamers are better at identifying language patterns. My hypothesis is that those who do identify as gamers would have higher accuracy in figuring out language patterns, tested by the Artificial Grammar Learning Task (the experiment you just completed). To prevent potential bias issues, I withheld this information until now.\n\nPress *space* to continue.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  // Initialize components for Routine "debrief_2"
  debrief_2Clock = new util.Clock();
  debrief2Text = new visual.TextStim({
    win: psychoJS.window,
    name: 'debrief2Text',
    text: 'Please take time for a mental break. If you have any questions, you may contact me at omolola@email.sc.edu, or my faculty advisor at knwarren@email.sc.edu. \n\nPress *space* to continue.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  debrief2Resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "farewell"
  farewellClock = new util.Clock();
  farewellText = new visual.TextBox({
    win: psychoJS.window,
    name: 'farewellText',
    text: 'Thank you again for your participation!\n\n\nYou will be exited out of this window momentarily.',
    placeholder: 'Type here...',
    font: 'Arial',
    pos: [0, 0], 
    draggable: false,
    letterHeight: 0.05,
    lineSpacing: 1.0,
    size: [1.2, 0.9],  units: undefined, 
    ori: 0.0,
    color: 'white', colorSpace: 'rgb',
    fillColor: undefined, borderColor: undefined,
    languageStyle: 'LTR',
    formattingSyntax: 'md',
    bold: false, italic: false,
    opacity: undefined,
    padding: 0.0,
    alignment: 'center',
    overflow: 'visible',
    editable: false,
    multiline: true,
    anchor: 'center',
    depth: 0.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var routineForceEnded;
var letterMaxDurationReached;
var _letter1Resp_allKeys;
var letterMaxDuration;
var letterComponents;
function letterRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'letter' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    letterClock.reset();
    routineTimer.reset();
    letterMaxDurationReached = false;
    // update component parameters for each repeat
    letter1Resp.keys = undefined;
    letter1Resp.rt = undefined;
    _letter1Resp_allKeys = [];
    psychoJS.experiment.addData('letter.started', globalClock.getTime());
    letterMaxDuration = null
    // keep track of which components have finished
    letterComponents = [];
    letterComponents.push(letter1Resp);
    letterComponents.push(letter1Text);
    
    for (const thisComponent of letterComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function letterRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'letter' ---
    // get current time
    t = letterClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *letter1Resp* updates
    if (t >= 0.0 && letter1Resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      letter1Resp.tStart = t;  // (not accounting for frame time here)
      letter1Resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { letter1Resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { letter1Resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { letter1Resp.clearEvents(); });
    }
    
    // if letter1Resp is active this frame...
    if (letter1Resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = letter1Resp.getKeys({
        keyList: typeof 'space' === 'string' ? ['space'] : 'space', 
        waitRelease: false
      });
      _letter1Resp_allKeys = _letter1Resp_allKeys.concat(theseKeys);
      if (_letter1Resp_allKeys.length > 0) {
        letter1Resp.keys = _letter1Resp_allKeys[_letter1Resp_allKeys.length - 1].name;  // just the last key pressed
        letter1Resp.rt = _letter1Resp_allKeys[_letter1Resp_allKeys.length - 1].rt;
        letter1Resp.duration = _letter1Resp_allKeys[_letter1Resp_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *letter1Text* updates
    if (t >= 0.0 && letter1Text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      letter1Text.tStart = t;  // (not accounting for frame time here)
      letter1Text.frameNStart = frameN;  // exact frame index
      
      letter1Text.setAutoDraw(true);
    }
    
    
    // if letter1Text is active this frame...
    if (letter1Text.status === PsychoJS.Status.STARTED) {
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of letterComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function letterRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'letter' ---
    for (const thisComponent of letterComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('letter.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(letter1Resp.corr, level);
    }
    psychoJS.experiment.addData('letter1Resp.keys', letter1Resp.keys);
    if (typeof letter1Resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('letter1Resp.rt', letter1Resp.rt);
        psychoJS.experiment.addData('letter1Resp.duration', letter1Resp.duration);
        routineTimer.reset();
        }
    
    letter1Resp.stop();
    // the Routine "letter" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var letter2MaxDurationReached;
var _letter2Resp_allKeys;
var letter2MaxDuration;
var letter2Components;
function letter2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'letter2' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    letter2Clock.reset();
    routineTimer.reset();
    letter2MaxDurationReached = false;
    // update component parameters for each repeat
    letter2Resp.keys = undefined;
    letter2Resp.rt = undefined;
    _letter2Resp_allKeys = [];
    psychoJS.experiment.addData('letter2.started', globalClock.getTime());
    letter2MaxDuration = null
    // keep track of which components have finished
    letter2Components = [];
    letter2Components.push(letter2Text);
    letter2Components.push(letter2Resp);
    
    for (const thisComponent of letter2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function letter2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'letter2' ---
    // get current time
    t = letter2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *letter2Text* updates
    if (t >= 0.0 && letter2Text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      letter2Text.tStart = t;  // (not accounting for frame time here)
      letter2Text.frameNStart = frameN;  // exact frame index
      
      letter2Text.setAutoDraw(true);
    }
    
    
    // if letter2Text is active this frame...
    if (letter2Text.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *letter2Resp* updates
    if (t >= 0.0 && letter2Resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      letter2Resp.tStart = t;  // (not accounting for frame time here)
      letter2Resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { letter2Resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { letter2Resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { letter2Resp.clearEvents(); });
    }
    
    // if letter2Resp is active this frame...
    if (letter2Resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = letter2Resp.getKeys({
        keyList: typeof 'space' === 'string' ? ['space'] : 'space', 
        waitRelease: false
      });
      _letter2Resp_allKeys = _letter2Resp_allKeys.concat(theseKeys);
      if (_letter2Resp_allKeys.length > 0) {
        letter2Resp.keys = _letter2Resp_allKeys[_letter2Resp_allKeys.length - 1].name;  // just the last key pressed
        letter2Resp.rt = _letter2Resp_allKeys[_letter2Resp_allKeys.length - 1].rt;
        letter2Resp.duration = _letter2Resp_allKeys[_letter2Resp_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of letter2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function letter2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'letter2' ---
    for (const thisComponent of letter2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('letter2.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(letter2Resp.corr, level);
    }
    psychoJS.experiment.addData('letter2Resp.keys', letter2Resp.keys);
    if (typeof letter2Resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('letter2Resp.rt', letter2Resp.rt);
        psychoJS.experiment.addData('letter2Resp.duration', letter2Resp.duration);
        routineTimer.reset();
        }
    
    letter2Resp.stop();
    // the Routine "letter2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var letter4MaxDurationReached;
var _letter4Resp_allKeys;
var letter4MaxDuration;
var letter4Components;
function letter4RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'letter4' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    letter4Clock.reset();
    routineTimer.reset();
    letter4MaxDurationReached = false;
    // update component parameters for each repeat
    letter4Resp.keys = undefined;
    letter4Resp.rt = undefined;
    _letter4Resp_allKeys = [];
    psychoJS.experiment.addData('letter4.started', globalClock.getTime());
    letter4MaxDuration = null
    // keep track of which components have finished
    letter4Components = [];
    letter4Components.push(letter4Text);
    letter4Components.push(letter4Resp);
    
    for (const thisComponent of letter4Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function letter4RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'letter4' ---
    // get current time
    t = letter4Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *letter4Text* updates
    if (t >= 0.0 && letter4Text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      letter4Text.tStart = t;  // (not accounting for frame time here)
      letter4Text.frameNStart = frameN;  // exact frame index
      
      letter4Text.setAutoDraw(true);
    }
    
    
    // if letter4Text is active this frame...
    if (letter4Text.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *letter4Resp* updates
    if (t >= 0.0 && letter4Resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      letter4Resp.tStart = t;  // (not accounting for frame time here)
      letter4Resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { letter4Resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { letter4Resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { letter4Resp.clearEvents(); });
    }
    
    // if letter4Resp is active this frame...
    if (letter4Resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = letter4Resp.getKeys({
        keyList: typeof 'space' === 'string' ? ['space'] : 'space', 
        waitRelease: false
      });
      _letter4Resp_allKeys = _letter4Resp_allKeys.concat(theseKeys);
      if (_letter4Resp_allKeys.length > 0) {
        letter4Resp.keys = _letter4Resp_allKeys[_letter4Resp_allKeys.length - 1].name;  // just the last key pressed
        letter4Resp.rt = _letter4Resp_allKeys[_letter4Resp_allKeys.length - 1].rt;
        letter4Resp.duration = _letter4Resp_allKeys[_letter4Resp_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of letter4Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function letter4RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'letter4' ---
    for (const thisComponent of letter4Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('letter4.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(letter4Resp.corr, level);
    }
    psychoJS.experiment.addData('letter4Resp.keys', letter4Resp.keys);
    if (typeof letter4Resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('letter4Resp.rt', letter4Resp.rt);
        psychoJS.experiment.addData('letter4Resp.duration', letter4Resp.duration);
        routineTimer.reset();
        }
    
    letter4Resp.stop();
    // the Routine "letter4" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var letter5MaxDurationReached;
var _letter5Resp_allKeys;
var letter5MaxDuration;
var letter5Components;
function letter5RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'letter5' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    letter5Clock.reset();
    routineTimer.reset();
    letter5MaxDurationReached = false;
    // update component parameters for each repeat
    letter5Resp.keys = undefined;
    letter5Resp.rt = undefined;
    _letter5Resp_allKeys = [];
    psychoJS.experiment.addData('letter5.started', globalClock.getTime());
    letter5MaxDuration = null
    // keep track of which components have finished
    letter5Components = [];
    letter5Components.push(letterResp5);
    letter5Components.push(letter5Resp);
    
    for (const thisComponent of letter5Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function letter5RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'letter5' ---
    // get current time
    t = letter5Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *letterResp5* updates
    if (t >= 0.0 && letterResp5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      letterResp5.tStart = t;  // (not accounting for frame time here)
      letterResp5.frameNStart = frameN;  // exact frame index
      
      letterResp5.setAutoDraw(true);
    }
    
    
    // if letterResp5 is active this frame...
    if (letterResp5.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *letter5Resp* updates
    if (t >= 0.0 && letter5Resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      letter5Resp.tStart = t;  // (not accounting for frame time here)
      letter5Resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { letter5Resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { letter5Resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { letter5Resp.clearEvents(); });
    }
    
    // if letter5Resp is active this frame...
    if (letter5Resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = letter5Resp.getKeys({
        keyList: typeof 'space' === 'string' ? ['space'] : 'space', 
        waitRelease: false
      });
      _letter5Resp_allKeys = _letter5Resp_allKeys.concat(theseKeys);
      if (_letter5Resp_allKeys.length > 0) {
        letter5Resp.keys = _letter5Resp_allKeys[_letter5Resp_allKeys.length - 1].name;  // just the last key pressed
        letter5Resp.rt = _letter5Resp_allKeys[_letter5Resp_allKeys.length - 1].rt;
        letter5Resp.duration = _letter5Resp_allKeys[_letter5Resp_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of letter5Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function letter5RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'letter5' ---
    for (const thisComponent of letter5Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('letter5.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(letter5Resp.corr, level);
    }
    psychoJS.experiment.addData('letter5Resp.keys', letter5Resp.keys);
    if (typeof letter5Resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('letter5Resp.rt', letter5Resp.rt);
        psychoJS.experiment.addData('letter5Resp.duration', letter5Resp.duration);
        routineTimer.reset();
        }
    
    letter5Resp.stop();
    // the Routine "letter5" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var letter7MaxDurationReached;
var _key_resp_2_allKeys;
var letter7MaxDuration;
var letter7Components;
function letter7RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'letter7' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    letter7Clock.reset();
    routineTimer.reset();
    letter7MaxDurationReached = false;
    // update component parameters for each repeat
    key_resp_2.keys = undefined;
    key_resp_2.rt = undefined;
    _key_resp_2_allKeys = [];
    psychoJS.experiment.addData('letter7.started', globalClock.getTime());
    letter7MaxDuration = null
    // keep track of which components have finished
    letter7Components = [];
    letter7Components.push(letter7Resp);
    letter7Components.push(key_resp_2);
    
    for (const thisComponent of letter7Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function letter7RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'letter7' ---
    // get current time
    t = letter7Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *letter7Resp* updates
    if (t >= 0.0 && letter7Resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      letter7Resp.tStart = t;  // (not accounting for frame time here)
      letter7Resp.frameNStart = frameN;  // exact frame index
      
      letter7Resp.setAutoDraw(true);
    }
    
    
    // if letter7Resp is active this frame...
    if (letter7Resp.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *key_resp_2* updates
    if (t >= 0.0 && key_resp_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_2.tStart = t;  // (not accounting for frame time here)
      key_resp_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.clearEvents(); });
    }
    
    // if key_resp_2 is active this frame...
    if (key_resp_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_2.getKeys({
        keyList: typeof 'space' === 'string' ? ['space'] : 'space', 
        waitRelease: false
      });
      _key_resp_2_allKeys = _key_resp_2_allKeys.concat(theseKeys);
      if (_key_resp_2_allKeys.length > 0) {
        key_resp_2.keys = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].name;  // just the last key pressed
        key_resp_2.rt = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].rt;
        key_resp_2.duration = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of letter7Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function letter7RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'letter7' ---
    for (const thisComponent of letter7Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('letter7.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_2.corr, level);
    }
    psychoJS.experiment.addData('key_resp_2.keys', key_resp_2.keys);
    if (typeof key_resp_2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_2.rt', key_resp_2.rt);
        psychoJS.experiment.addData('key_resp_2.duration', key_resp_2.duration);
        routineTimer.reset();
        }
    
    key_resp_2.stop();
    // the Routine "letter7" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var letter8MaxDurationReached;
var _key_resp_5_allKeys;
var letter8MaxDuration;
var letter8Components;
function letter8RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'letter8' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    letter8Clock.reset();
    routineTimer.reset();
    letter8MaxDurationReached = false;
    // update component parameters for each repeat
    key_resp_5.keys = undefined;
    key_resp_5.rt = undefined;
    _key_resp_5_allKeys = [];
    psychoJS.experiment.addData('letter8.started', globalClock.getTime());
    letter8MaxDuration = null
    // keep track of which components have finished
    letter8Components = [];
    letter8Components.push(text_2);
    letter8Components.push(key_resp_5);
    
    for (const thisComponent of letter8Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function letter8RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'letter8' ---
    // get current time
    t = letter8Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_2* updates
    if (t >= 0.0 && text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_2.tStart = t;  // (not accounting for frame time here)
      text_2.frameNStart = frameN;  // exact frame index
      
      text_2.setAutoDraw(true);
    }
    
    
    // if text_2 is active this frame...
    if (text_2.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *key_resp_5* updates
    if (t >= 0.0 && key_resp_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_5.tStart = t;  // (not accounting for frame time here)
      key_resp_5.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_5.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_5.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_5.clearEvents(); });
    }
    
    // if key_resp_5 is active this frame...
    if (key_resp_5.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_5.getKeys({
        keyList: typeof 'space' === 'string' ? ['space'] : 'space', 
        waitRelease: false
      });
      _key_resp_5_allKeys = _key_resp_5_allKeys.concat(theseKeys);
      if (_key_resp_5_allKeys.length > 0) {
        key_resp_5.keys = _key_resp_5_allKeys[_key_resp_5_allKeys.length - 1].name;  // just the last key pressed
        key_resp_5.rt = _key_resp_5_allKeys[_key_resp_5_allKeys.length - 1].rt;
        key_resp_5.duration = _key_resp_5_allKeys[_key_resp_5_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of letter8Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function letter8RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'letter8' ---
    for (const thisComponent of letter8Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('letter8.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(key_resp_5.corr, level);
    }
    psychoJS.experiment.addData('key_resp_5.keys', key_resp_5.keys);
    if (typeof key_resp_5.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_5.rt', key_resp_5.rt);
        psychoJS.experiment.addData('key_resp_5.duration', key_resp_5.duration);
        routineTimer.reset();
        }
    
    key_resp_5.stop();
    // the Routine "letter8" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var welcomeMaxDurationReached;
var _welcomeResp_allKeys;
var welcomeMaxDuration;
var welcomeComponents;
function welcomeRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'welcome' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    welcomeClock.reset();
    routineTimer.reset();
    welcomeMaxDurationReached = false;
    // update component parameters for each repeat
    welcomeResp.keys = undefined;
    welcomeResp.rt = undefined;
    _welcomeResp_allKeys = [];
    psychoJS.experiment.addData('welcome.started', globalClock.getTime());
    welcomeMaxDuration = null
    // keep track of which components have finished
    welcomeComponents = [];
    welcomeComponents.push(welcomeResp);
    welcomeComponents.push(welcomeText);
    
    for (const thisComponent of welcomeComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function welcomeRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'welcome' ---
    // get current time
    t = welcomeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *welcomeResp* updates
    if (t >= 0.0 && welcomeResp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      welcomeResp.tStart = t;  // (not accounting for frame time here)
      welcomeResp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { welcomeResp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { welcomeResp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { welcomeResp.clearEvents(); });
    }
    
    // if welcomeResp is active this frame...
    if (welcomeResp.status === PsychoJS.Status.STARTED) {
      let theseKeys = welcomeResp.getKeys({
        keyList: typeof 'space' === 'string' ? ['space'] : 'space', 
        waitRelease: false
      });
      _welcomeResp_allKeys = _welcomeResp_allKeys.concat(theseKeys);
      if (_welcomeResp_allKeys.length > 0) {
        welcomeResp.keys = _welcomeResp_allKeys[_welcomeResp_allKeys.length - 1].name;  // just the last key pressed
        welcomeResp.rt = _welcomeResp_allKeys[_welcomeResp_allKeys.length - 1].rt;
        welcomeResp.duration = _welcomeResp_allKeys[_welcomeResp_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *welcomeText* updates
    if (t >= 0.0 && welcomeText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      welcomeText.tStart = t;  // (not accounting for frame time here)
      welcomeText.frameNStart = frameN;  // exact frame index
      
      welcomeText.setAutoDraw(true);
    }
    
    
    // if welcomeText is active this frame...
    if (welcomeText.status === PsychoJS.Status.STARTED) {
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of welcomeComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function welcomeRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'welcome' ---
    for (const thisComponent of welcomeComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('welcome.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(welcomeResp.corr, level);
    }
    psychoJS.experiment.addData('welcomeResp.keys', welcomeResp.keys);
    if (typeof welcomeResp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('welcomeResp.rt', welcomeResp.rt);
        psychoJS.experiment.addData('welcomeResp.duration', welcomeResp.duration);
        routineTimer.reset();
        }
    
    welcomeResp.stop();
    // the Routine "welcome" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var welcome2MaxDurationReached;
var _welcome2Resp_allKeys;
var welcome2MaxDuration;
var welcome2Components;
function welcome2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'welcome2' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    welcome2Clock.reset();
    routineTimer.reset();
    welcome2MaxDurationReached = false;
    // update component parameters for each repeat
    welcome2Resp.keys = undefined;
    welcome2Resp.rt = undefined;
    _welcome2Resp_allKeys = [];
    psychoJS.experiment.addData('welcome2.started', globalClock.getTime());
    welcome2MaxDuration = null
    // keep track of which components have finished
    welcome2Components = [];
    welcome2Components.push(welcome2Resp);
    welcome2Components.push(welcome2Text);
    
    for (const thisComponent of welcome2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function welcome2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'welcome2' ---
    // get current time
    t = welcome2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *welcome2Resp* updates
    if (t >= 0.0 && welcome2Resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      welcome2Resp.tStart = t;  // (not accounting for frame time here)
      welcome2Resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { welcome2Resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { welcome2Resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { welcome2Resp.clearEvents(); });
    }
    
    // if welcome2Resp is active this frame...
    if (welcome2Resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = welcome2Resp.getKeys({
        keyList: typeof 'space' === 'string' ? ['space'] : 'space', 
        waitRelease: false
      });
      _welcome2Resp_allKeys = _welcome2Resp_allKeys.concat(theseKeys);
      if (_welcome2Resp_allKeys.length > 0) {
        welcome2Resp.keys = _welcome2Resp_allKeys[_welcome2Resp_allKeys.length - 1].name;  // just the last key pressed
        welcome2Resp.rt = _welcome2Resp_allKeys[_welcome2Resp_allKeys.length - 1].rt;
        welcome2Resp.duration = _welcome2Resp_allKeys[_welcome2Resp_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *welcome2Text* updates
    if (t >= 0.0 && welcome2Text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      welcome2Text.tStart = t;  // (not accounting for frame time here)
      welcome2Text.frameNStart = frameN;  // exact frame index
      
      welcome2Text.setAutoDraw(true);
    }
    
    
    // if welcome2Text is active this frame...
    if (welcome2Text.status === PsychoJS.Status.STARTED) {
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of welcome2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function welcome2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'welcome2' ---
    for (const thisComponent of welcome2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('welcome2.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(welcome2Resp.corr, level);
    }
    psychoJS.experiment.addData('welcome2Resp.keys', welcome2Resp.keys);
    if (typeof welcome2Resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('welcome2Resp.rt', welcome2Resp.rt);
        psychoJS.experiment.addData('welcome2Resp.duration', welcome2Resp.duration);
        routineTimer.reset();
        }
    
    welcome2Resp.stop();
    // the Routine "welcome2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var practiceIntroMaxDurationReached;
var _pracIntroresp_allKeys;
var practiceIntroMaxDuration;
var practiceIntroComponents;
function practiceIntroRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'practiceIntro' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    practiceIntroClock.reset();
    routineTimer.reset();
    practiceIntroMaxDurationReached = false;
    // update component parameters for each repeat
    pracIntroresp.keys = undefined;
    pracIntroresp.rt = undefined;
    _pracIntroresp_allKeys = [];
    psychoJS.experiment.addData('practiceIntro.started', globalClock.getTime());
    practiceIntroMaxDuration = null
    // keep track of which components have finished
    practiceIntroComponents = [];
    practiceIntroComponents.push(pracIntroresp);
    practiceIntroComponents.push(pracIntrotext);
    
    for (const thisComponent of practiceIntroComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function practiceIntroRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'practiceIntro' ---
    // get current time
    t = practiceIntroClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *pracIntroresp* updates
    if (t >= 0.0 && pracIntroresp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      pracIntroresp.tStart = t;  // (not accounting for frame time here)
      pracIntroresp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { pracIntroresp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { pracIntroresp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { pracIntroresp.clearEvents(); });
    }
    
    // if pracIntroresp is active this frame...
    if (pracIntroresp.status === PsychoJS.Status.STARTED) {
      let theseKeys = pracIntroresp.getKeys({
        keyList: typeof 'space' === 'string' ? ['space'] : 'space', 
        waitRelease: false
      });
      _pracIntroresp_allKeys = _pracIntroresp_allKeys.concat(theseKeys);
      if (_pracIntroresp_allKeys.length > 0) {
        pracIntroresp.keys = _pracIntroresp_allKeys[_pracIntroresp_allKeys.length - 1].name;  // just the last key pressed
        pracIntroresp.rt = _pracIntroresp_allKeys[_pracIntroresp_allKeys.length - 1].rt;
        pracIntroresp.duration = _pracIntroresp_allKeys[_pracIntroresp_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *pracIntrotext* updates
    if (t >= 0.0 && pracIntrotext.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      pracIntrotext.tStart = t;  // (not accounting for frame time here)
      pracIntrotext.frameNStart = frameN;  // exact frame index
      
      pracIntrotext.setAutoDraw(true);
    }
    
    
    // if pracIntrotext is active this frame...
    if (pracIntrotext.status === PsychoJS.Status.STARTED) {
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of practiceIntroComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function practiceIntroRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'practiceIntro' ---
    for (const thisComponent of practiceIntroComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('practiceIntro.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(pracIntroresp.corr, level);
    }
    psychoJS.experiment.addData('pracIntroresp.keys', pracIntroresp.keys);
    if (typeof pracIntroresp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('pracIntroresp.rt', pracIntroresp.rt);
        psychoJS.experiment.addData('pracIntroresp.duration', pracIntroresp.duration);
        routineTimer.reset();
        }
    
    pracIntroresp.stop();
    // the Routine "practiceIntro" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var practrials;
function practrialsLoopBegin(practrialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    practrials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 2, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'practice.xlsx',
      seed: undefined, name: 'practrials'
    });
    psychoJS.experiment.addLoop(practrials); // add the loop to the experiment
    currentLoop = practrials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisPractrial of practrials) {
      snapshot = practrials.getSnapshot();
      practrialsLoopScheduler.add(importConditions(snapshot));
      practrialsLoopScheduler.add(practiceTrialRoutineBegin(snapshot));
      practrialsLoopScheduler.add(practiceTrialRoutineEachFrame());
      practrialsLoopScheduler.add(practiceTrialRoutineEnd(snapshot));
      practrialsLoopScheduler.add(practrialsLoopEndIteration(practrialsLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function practrialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(practrials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function practrialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var loops;
function loopsLoopBegin(loopsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    loops = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'conditions.xlsx',
      seed: undefined, name: 'loops'
    });
    psychoJS.experiment.addLoop(loops); // add the loop to the experiment
    currentLoop = loops;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisLoop of loops) {
      snapshot = loops.getSnapshot();
      loopsLoopScheduler.add(importConditions(snapshot));
      loopsLoopScheduler.add(AGL_trialsRoutineBegin(snapshot));
      loopsLoopScheduler.add(AGL_trialsRoutineEachFrame());
      loopsLoopScheduler.add(AGL_trialsRoutineEnd(snapshot));
      loopsLoopScheduler.add(loopsLoopEndIteration(loopsLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function loopsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(loops);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function loopsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var practiceTrialMaxDurationReached;
var practiceTrialMaxDuration;
var practiceTrialComponents;
function practiceTrialRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'practiceTrial' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    practiceTrialClock.reset(routineTimer.getTime());
    routineTimer.add(0.500000);
    practiceTrialMaxDurationReached = false;
    // update component parameters for each repeat
    practText.setText(string);
    psychoJS.experiment.addData('practiceTrial.started', globalClock.getTime());
    practiceTrialMaxDuration = null
    // keep track of which components have finished
    practiceTrialComponents = [];
    practiceTrialComponents.push(practText);
    
    for (const thisComponent of practiceTrialComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function practiceTrialRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'practiceTrial' ---
    // get current time
    t = practiceTrialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *practText* updates
    if (t >= 0.0 && practText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      practText.tStart = t;  // (not accounting for frame time here)
      practText.frameNStart = frameN;  // exact frame index
      
      practText.setAutoDraw(true);
    }
    
    
    // if practText is active this frame...
    if (practText.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (practText.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      practText.tStop = t;  // not accounting for scr refresh
      practText.frameNStop = frameN;  // exact frame index
      // update status
      practText.status = PsychoJS.Status.FINISHED;
      practText.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of practiceTrialComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function practiceTrialRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'practiceTrial' ---
    for (const thisComponent of practiceTrialComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('practiceTrial.stopped', globalClock.getTime());
    if (routineForceEnded) {
        routineTimer.reset();} else if (practiceTrialMaxDurationReached) {
        practiceTrialClock.add(practiceTrialMaxDuration);
    } else {
        practiceTrialClock.add(0.500000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var AGL_introMaxDurationReached;
var _taskIntroresp_allKeys;
var AGL_introMaxDuration;
var AGL_introComponents;
function AGL_introRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'AGL_intro' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    AGL_introClock.reset();
    routineTimer.reset();
    AGL_introMaxDurationReached = false;
    // update component parameters for each repeat
    taskIntroresp.keys = undefined;
    taskIntroresp.rt = undefined;
    _taskIntroresp_allKeys = [];
    psychoJS.experiment.addData('AGL_intro.started', globalClock.getTime());
    AGL_introMaxDuration = null
    // keep track of which components have finished
    AGL_introComponents = [];
    AGL_introComponents.push(taskIntroresp);
    AGL_introComponents.push(taskIntrotext);
    
    for (const thisComponent of AGL_introComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function AGL_introRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'AGL_intro' ---
    // get current time
    t = AGL_introClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *taskIntroresp* updates
    if (t >= 0.0 && taskIntroresp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      taskIntroresp.tStart = t;  // (not accounting for frame time here)
      taskIntroresp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { taskIntroresp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { taskIntroresp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { taskIntroresp.clearEvents(); });
    }
    
    // if taskIntroresp is active this frame...
    if (taskIntroresp.status === PsychoJS.Status.STARTED) {
      let theseKeys = taskIntroresp.getKeys({
        keyList: typeof 'space' === 'string' ? ['space'] : 'space', 
        waitRelease: false
      });
      _taskIntroresp_allKeys = _taskIntroresp_allKeys.concat(theseKeys);
      if (_taskIntroresp_allKeys.length > 0) {
        taskIntroresp.keys = _taskIntroresp_allKeys[_taskIntroresp_allKeys.length - 1].name;  // just the last key pressed
        taskIntroresp.rt = _taskIntroresp_allKeys[_taskIntroresp_allKeys.length - 1].rt;
        taskIntroresp.duration = _taskIntroresp_allKeys[_taskIntroresp_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *taskIntrotext* updates
    if (t >= 0.0 && taskIntrotext.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      taskIntrotext.tStart = t;  // (not accounting for frame time here)
      taskIntrotext.frameNStart = frameN;  // exact frame index
      
      taskIntrotext.setAutoDraw(true);
    }
    
    
    // if taskIntrotext is active this frame...
    if (taskIntrotext.status === PsychoJS.Status.STARTED) {
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of AGL_introComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function AGL_introRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'AGL_intro' ---
    for (const thisComponent of AGL_introComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('AGL_intro.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(taskIntroresp.corr, level);
    }
    psychoJS.experiment.addData('taskIntroresp.keys', taskIntroresp.keys);
    if (typeof taskIntroresp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('taskIntroresp.rt', taskIntroresp.rt);
        psychoJS.experiment.addData('taskIntroresp.duration', taskIntroresp.duration);
        routineTimer.reset();
        }
    
    taskIntroresp.stop();
    // the Routine "AGL_intro" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var AGL_intro_2MaxDurationReached;
var _taskIntro2resp_allKeys;
var AGL_intro_2MaxDuration;
var AGL_intro_2Components;
function AGL_intro_2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'AGL_intro_2' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    AGL_intro_2Clock.reset();
    routineTimer.reset();
    AGL_intro_2MaxDurationReached = false;
    // update component parameters for each repeat
    taskIntro2resp.keys = undefined;
    taskIntro2resp.rt = undefined;
    _taskIntro2resp_allKeys = [];
    psychoJS.experiment.addData('AGL_intro_2.started', globalClock.getTime());
    AGL_intro_2MaxDuration = null
    // keep track of which components have finished
    AGL_intro_2Components = [];
    AGL_intro_2Components.push(taskIntro2text);
    AGL_intro_2Components.push(taskIntro2resp);
    
    for (const thisComponent of AGL_intro_2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function AGL_intro_2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'AGL_intro_2' ---
    // get current time
    t = AGL_intro_2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *taskIntro2text* updates
    if (t >= 0.0 && taskIntro2text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      taskIntro2text.tStart = t;  // (not accounting for frame time here)
      taskIntro2text.frameNStart = frameN;  // exact frame index
      
      taskIntro2text.setAutoDraw(true);
    }
    
    
    // if taskIntro2text is active this frame...
    if (taskIntro2text.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *taskIntro2resp* updates
    if (t >= 0.0 && taskIntro2resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      taskIntro2resp.tStart = t;  // (not accounting for frame time here)
      taskIntro2resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { taskIntro2resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { taskIntro2resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { taskIntro2resp.clearEvents(); });
    }
    
    // if taskIntro2resp is active this frame...
    if (taskIntro2resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = taskIntro2resp.getKeys({
        keyList: typeof 'space' === 'string' ? ['space'] : 'space', 
        waitRelease: false
      });
      _taskIntro2resp_allKeys = _taskIntro2resp_allKeys.concat(theseKeys);
      if (_taskIntro2resp_allKeys.length > 0) {
        taskIntro2resp.keys = _taskIntro2resp_allKeys[_taskIntro2resp_allKeys.length - 1].name;  // just the last key pressed
        taskIntro2resp.rt = _taskIntro2resp_allKeys[_taskIntro2resp_allKeys.length - 1].rt;
        taskIntro2resp.duration = _taskIntro2resp_allKeys[_taskIntro2resp_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of AGL_intro_2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function AGL_intro_2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'AGL_intro_2' ---
    for (const thisComponent of AGL_intro_2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('AGL_intro_2.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(taskIntro2resp.corr, level);
    }
    psychoJS.experiment.addData('taskIntro2resp.keys', taskIntro2resp.keys);
    if (typeof taskIntro2resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('taskIntro2resp.rt', taskIntro2resp.rt);
        psychoJS.experiment.addData('taskIntro2resp.duration', taskIntro2resp.duration);
        routineTimer.reset();
        }
    
    taskIntro2resp.stop();
    // the Routine "AGL_intro_2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var AGL_trialsMaxDurationReached;
var _AGLtrialsResp_allKeys;
var AGL_trialsMaxDuration;
var AGL_trialsComponents;
function AGL_trialsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'AGL_trials' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    AGL_trialsClock.reset();
    routineTimer.reset();
    AGL_trialsMaxDurationReached = false;
    // update component parameters for each repeat
    AGLtrials.setText(string);
    AGLtrialsResp.keys = undefined;
    AGLtrialsResp.rt = undefined;
    _AGLtrialsResp_allKeys = [];
    psychoJS.experiment.addData('AGL_trials.started', globalClock.getTime());
    AGL_trialsMaxDuration = null
    // keep track of which components have finished
    AGL_trialsComponents = [];
    AGL_trialsComponents.push(AGLtrials);
    AGL_trialsComponents.push(AGLtrialsResp);
    
    for (const thisComponent of AGL_trialsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function AGL_trialsRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'AGL_trials' ---
    // get current time
    t = AGL_trialsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *AGLtrials* updates
    if (t >= 0.0 && AGLtrials.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      AGLtrials.tStart = t;  // (not accounting for frame time here)
      AGLtrials.frameNStart = frameN;  // exact frame index
      
      AGLtrials.setAutoDraw(true);
    }
    
    
    // if AGLtrials is active this frame...
    if (AGLtrials.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *AGLtrialsResp* updates
    if (t >= 0.0 && AGLtrialsResp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      AGLtrialsResp.tStart = t;  // (not accounting for frame time here)
      AGLtrialsResp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { AGLtrialsResp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { AGLtrialsResp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { AGLtrialsResp.clearEvents(); });
    }
    
    // if AGLtrialsResp is active this frame...
    if (AGLtrialsResp.status === PsychoJS.Status.STARTED) {
      let theseKeys = AGLtrialsResp.getKeys({
        keyList: typeof ['c','n'] === 'string' ? [['c','n']] : ['c','n'], 
        waitRelease: false
      });
      _AGLtrialsResp_allKeys = _AGLtrialsResp_allKeys.concat(theseKeys);
      if (_AGLtrialsResp_allKeys.length > 0) {
        AGLtrialsResp.keys = _AGLtrialsResp_allKeys[_AGLtrialsResp_allKeys.length - 1].name;  // just the last key pressed
        AGLtrialsResp.rt = _AGLtrialsResp_allKeys[_AGLtrialsResp_allKeys.length - 1].rt;
        AGLtrialsResp.duration = _AGLtrialsResp_allKeys[_AGLtrialsResp_allKeys.length - 1].duration;
        // was this correct?
        if (AGLtrialsResp.keys == corrAns) {
            AGLtrialsResp.corr = 1;
        } else {
            AGLtrialsResp.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of AGL_trialsComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function AGL_trialsRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'AGL_trials' ---
    for (const thisComponent of AGL_trialsComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('AGL_trials.stopped', globalClock.getTime());
    // was no response the correct answer?!
    if (AGLtrialsResp.keys === undefined) {
      if (['None','none',undefined].includes(corrAns)) {
         AGLtrialsResp.corr = 1;  // correct non-response
      } else {
         AGLtrialsResp.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(AGLtrialsResp.corr, level);
    }
    psychoJS.experiment.addData('AGLtrialsResp.keys', AGLtrialsResp.keys);
    psychoJS.experiment.addData('AGLtrialsResp.corr', AGLtrialsResp.corr);
    if (typeof AGLtrialsResp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('AGLtrialsResp.rt', AGLtrialsResp.rt);
        psychoJS.experiment.addData('AGLtrialsResp.duration', AGLtrialsResp.duration);
        routineTimer.reset();
        }
    
    AGLtrialsResp.stop();
    // the Routine "AGL_trials" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var surveyIntroMaxDurationReached;
var _sIntroresp_allKeys;
var surveyIntroMaxDuration;
var surveyIntroComponents;
function surveyIntroRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'surveyIntro' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    surveyIntroClock.reset();
    routineTimer.reset();
    surveyIntroMaxDurationReached = false;
    // update component parameters for each repeat
    sIntroresp.keys = undefined;
    sIntroresp.rt = undefined;
    _sIntroresp_allKeys = [];
    psychoJS.experiment.addData('surveyIntro.started', globalClock.getTime());
    surveyIntroMaxDuration = null
    // keep track of which components have finished
    surveyIntroComponents = [];
    surveyIntroComponents.push(sIntroresp);
    surveyIntroComponents.push(sIntrotext);
    
    for (const thisComponent of surveyIntroComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function surveyIntroRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'surveyIntro' ---
    // get current time
    t = surveyIntroClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *sIntroresp* updates
    if (t >= 0.0 && sIntroresp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sIntroresp.tStart = t;  // (not accounting for frame time here)
      sIntroresp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { sIntroresp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { sIntroresp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { sIntroresp.clearEvents(); });
    }
    
    // if sIntroresp is active this frame...
    if (sIntroresp.status === PsychoJS.Status.STARTED) {
      let theseKeys = sIntroresp.getKeys({
        keyList: typeof 'space' === 'string' ? ['space'] : 'space', 
        waitRelease: false
      });
      _sIntroresp_allKeys = _sIntroresp_allKeys.concat(theseKeys);
      if (_sIntroresp_allKeys.length > 0) {
        sIntroresp.keys = _sIntroresp_allKeys[_sIntroresp_allKeys.length - 1].name;  // just the last key pressed
        sIntroresp.rt = _sIntroresp_allKeys[_sIntroresp_allKeys.length - 1].rt;
        sIntroresp.duration = _sIntroresp_allKeys[_sIntroresp_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *sIntrotext* updates
    if (t >= 0.0 && sIntrotext.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sIntrotext.tStart = t;  // (not accounting for frame time here)
      sIntrotext.frameNStart = frameN;  // exact frame index
      
      sIntrotext.setAutoDraw(true);
    }
    
    
    // if sIntrotext is active this frame...
    if (sIntrotext.status === PsychoJS.Status.STARTED) {
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of surveyIntroComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function surveyIntroRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'surveyIntro' ---
    for (const thisComponent of surveyIntroComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('surveyIntro.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(sIntroresp.corr, level);
    }
    psychoJS.experiment.addData('sIntroresp.keys', sIntroresp.keys);
    if (typeof sIntroresp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('sIntroresp.rt', sIntroresp.rt);
        psychoJS.experiment.addData('sIntroresp.duration', sIntroresp.duration);
        routineTimer.reset();
        }
    
    sIntroresp.stop();
    // the Routine "surveyIntro" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var survey2MaxDurationReached;
var _q2Resp_allKeys;
var survey2MaxDuration;
var survey2Components;
function survey2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'survey2' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    survey2Clock.reset();
    routineTimer.reset();
    survey2MaxDurationReached = false;
    // update component parameters for each repeat
    q2Resp.keys = undefined;
    q2Resp.rt = undefined;
    _q2Resp_allKeys = [];
    psychoJS.experiment.addData('survey2.started', globalClock.getTime());
    survey2MaxDuration = null
    // keep track of which components have finished
    survey2Components = [];
    survey2Components.push(q2);
    survey2Components.push(q2Resp);
    
    for (const thisComponent of survey2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function survey2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'survey2' ---
    // get current time
    t = survey2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *q2* updates
    if (t >= 0.0 && q2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      q2.tStart = t;  // (not accounting for frame time here)
      q2.frameNStart = frameN;  // exact frame index
      
      q2.setAutoDraw(true);
    }
    
    
    // if q2 is active this frame...
    if (q2.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *q2Resp* updates
    if (t >= 0.0 && q2Resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      q2Resp.tStart = t;  // (not accounting for frame time here)
      q2Resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { q2Resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { q2Resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { q2Resp.clearEvents(); });
    }
    
    // if q2Resp is active this frame...
    if (q2Resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = q2Resp.getKeys({
        keyList: typeof ['a','b'] === 'string' ? [['a','b']] : ['a','b'], 
        waitRelease: false
      });
      _q2Resp_allKeys = _q2Resp_allKeys.concat(theseKeys);
      if (_q2Resp_allKeys.length > 0) {
        q2Resp.keys = _q2Resp_allKeys[_q2Resp_allKeys.length - 1].name;  // just the last key pressed
        q2Resp.rt = _q2Resp_allKeys[_q2Resp_allKeys.length - 1].rt;
        q2Resp.duration = _q2Resp_allKeys[_q2Resp_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of survey2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function survey2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'survey2' ---
    for (const thisComponent of survey2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('survey2.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(q2Resp.corr, level);
    }
    psychoJS.experiment.addData('q2Resp.keys', q2Resp.keys);
    if (typeof q2Resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('q2Resp.rt', q2Resp.rt);
        psychoJS.experiment.addData('q2Resp.duration', q2Resp.duration);
        routineTimer.reset();
        }
    
    q2Resp.stop();
    // the Routine "survey2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var survey_3MaxDurationReached;
var _q3Resp_allKeys;
var survey_3MaxDuration;
var survey_3Components;
function survey_3RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'survey_3' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    survey_3Clock.reset();
    routineTimer.reset();
    survey_3MaxDurationReached = false;
    // update component parameters for each repeat
    q3Resp.keys = undefined;
    q3Resp.rt = undefined;
    _q3Resp_allKeys = [];
    psychoJS.experiment.addData('survey_3.started', globalClock.getTime());
    survey_3MaxDuration = null
    // keep track of which components have finished
    survey_3Components = [];
    survey_3Components.push(q3);
    survey_3Components.push(q3Resp);
    
    for (const thisComponent of survey_3Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function survey_3RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'survey_3' ---
    // get current time
    t = survey_3Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *q3* updates
    if (t >= 0.0 && q3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      q3.tStart = t;  // (not accounting for frame time here)
      q3.frameNStart = frameN;  // exact frame index
      
      q3.setAutoDraw(true);
    }
    
    
    // if q3 is active this frame...
    if (q3.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *q3Resp* updates
    if (t >= 0.0 && q3Resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      q3Resp.tStart = t;  // (not accounting for frame time here)
      q3Resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { q3Resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { q3Resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { q3Resp.clearEvents(); });
    }
    
    // if q3Resp is active this frame...
    if (q3Resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = q3Resp.getKeys({
        keyList: typeof ['a','b','c','d'] === 'string' ? [['a','b','c','d']] : ['a','b','c','d'], 
        waitRelease: false
      });
      _q3Resp_allKeys = _q3Resp_allKeys.concat(theseKeys);
      if (_q3Resp_allKeys.length > 0) {
        q3Resp.keys = _q3Resp_allKeys[_q3Resp_allKeys.length - 1].name;  // just the last key pressed
        q3Resp.rt = _q3Resp_allKeys[_q3Resp_allKeys.length - 1].rt;
        q3Resp.duration = _q3Resp_allKeys[_q3Resp_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of survey_3Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function survey_3RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'survey_3' ---
    for (const thisComponent of survey_3Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('survey_3.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(q3Resp.corr, level);
    }
    psychoJS.experiment.addData('q3Resp.keys', q3Resp.keys);
    if (typeof q3Resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('q3Resp.rt', q3Resp.rt);
        psychoJS.experiment.addData('q3Resp.duration', q3Resp.duration);
        routineTimer.reset();
        }
    
    q3Resp.stop();
    // the Routine "survey_3" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var q4_2MaxDurationReached;
var _q4_2Resp_allKeys;
var q4_2MaxDuration;
var q4_2Components;
function q4_2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'q4_2' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    q4_2Clock.reset();
    routineTimer.reset();
    q4_2MaxDurationReached = false;
    // update component parameters for each repeat
    q4_2Resp.keys = undefined;
    q4_2Resp.rt = undefined;
    _q4_2Resp_allKeys = [];
    psychoJS.experiment.addData('q4_2.started', globalClock.getTime());
    q4_2MaxDuration = null
    // keep track of which components have finished
    q4_2Components = [];
    q4_2Components.push(q4Text);
    q4_2Components.push(q4_2Resp);
    
    for (const thisComponent of q4_2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function q4_2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'q4_2' ---
    // get current time
    t = q4_2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *q4Text* updates
    if (t >= 0.0 && q4Text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      q4Text.tStart = t;  // (not accounting for frame time here)
      q4Text.frameNStart = frameN;  // exact frame index
      
      q4Text.setAutoDraw(true);
    }
    
    
    // if q4Text is active this frame...
    if (q4Text.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *q4_2Resp* updates
    if (t >= 0.0 && q4_2Resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      q4_2Resp.tStart = t;  // (not accounting for frame time here)
      q4_2Resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { q4_2Resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { q4_2Resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { q4_2Resp.clearEvents(); });
    }
    
    // if q4_2Resp is active this frame...
    if (q4_2Resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = q4_2Resp.getKeys({
        keyList: typeof ['a','b','c','d'] === 'string' ? [['a','b','c','d']] : ['a','b','c','d'], 
        waitRelease: false
      });
      _q4_2Resp_allKeys = _q4_2Resp_allKeys.concat(theseKeys);
      if (_q4_2Resp_allKeys.length > 0) {
        q4_2Resp.keys = _q4_2Resp_allKeys[_q4_2Resp_allKeys.length - 1].name;  // just the last key pressed
        q4_2Resp.rt = _q4_2Resp_allKeys[_q4_2Resp_allKeys.length - 1].rt;
        q4_2Resp.duration = _q4_2Resp_allKeys[_q4_2Resp_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of q4_2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function q4_2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'q4_2' ---
    for (const thisComponent of q4_2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('q4_2.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(q4_2Resp.corr, level);
    }
    psychoJS.experiment.addData('q4_2Resp.keys', q4_2Resp.keys);
    if (typeof q4_2Resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('q4_2Resp.rt', q4_2Resp.rt);
        psychoJS.experiment.addData('q4_2Resp.duration', q4_2Resp.duration);
        routineTimer.reset();
        }
    
    q4_2Resp.stop();
    // the Routine "q4_2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var debriefMaxDurationReached;
var _debriefResp_allKeys;
var debriefMaxDuration;
var debriefComponents;
function debriefRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'debrief' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    debriefClock.reset();
    routineTimer.reset();
    debriefMaxDurationReached = false;
    // update component parameters for each repeat
    debriefResp.keys = undefined;
    debriefResp.rt = undefined;
    _debriefResp_allKeys = [];
    psychoJS.experiment.addData('debrief.started', globalClock.getTime());
    debriefMaxDuration = null
    // keep track of which components have finished
    debriefComponents = [];
    debriefComponents.push(debriefResp);
    debriefComponents.push(debriefTexxt);
    
    for (const thisComponent of debriefComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function debriefRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'debrief' ---
    // get current time
    t = debriefClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *debriefResp* updates
    if (t >= 0.0 && debriefResp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      debriefResp.tStart = t;  // (not accounting for frame time here)
      debriefResp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { debriefResp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { debriefResp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { debriefResp.clearEvents(); });
    }
    
    // if debriefResp is active this frame...
    if (debriefResp.status === PsychoJS.Status.STARTED) {
      let theseKeys = debriefResp.getKeys({
        keyList: typeof 'space' === 'string' ? ['space'] : 'space', 
        waitRelease: false
      });
      _debriefResp_allKeys = _debriefResp_allKeys.concat(theseKeys);
      if (_debriefResp_allKeys.length > 0) {
        debriefResp.keys = _debriefResp_allKeys[_debriefResp_allKeys.length - 1].name;  // just the last key pressed
        debriefResp.rt = _debriefResp_allKeys[_debriefResp_allKeys.length - 1].rt;
        debriefResp.duration = _debriefResp_allKeys[_debriefResp_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *debriefTexxt* updates
    if (t >= 0.0 && debriefTexxt.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      debriefTexxt.tStart = t;  // (not accounting for frame time here)
      debriefTexxt.frameNStart = frameN;  // exact frame index
      
      debriefTexxt.setAutoDraw(true);
    }
    
    
    // if debriefTexxt is active this frame...
    if (debriefTexxt.status === PsychoJS.Status.STARTED) {
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of debriefComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function debriefRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'debrief' ---
    for (const thisComponent of debriefComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('debrief.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(debriefResp.corr, level);
    }
    psychoJS.experiment.addData('debriefResp.keys', debriefResp.keys);
    if (typeof debriefResp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('debriefResp.rt', debriefResp.rt);
        psychoJS.experiment.addData('debriefResp.duration', debriefResp.duration);
        routineTimer.reset();
        }
    
    debriefResp.stop();
    // the Routine "debrief" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var debrief_2MaxDurationReached;
var _debrief2Resp_allKeys;
var debrief_2MaxDuration;
var debrief_2Components;
function debrief_2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'debrief_2' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    debrief_2Clock.reset();
    routineTimer.reset();
    debrief_2MaxDurationReached = false;
    // update component parameters for each repeat
    debrief2Resp.keys = undefined;
    debrief2Resp.rt = undefined;
    _debrief2Resp_allKeys = [];
    psychoJS.experiment.addData('debrief_2.started', globalClock.getTime());
    debrief_2MaxDuration = null
    // keep track of which components have finished
    debrief_2Components = [];
    debrief_2Components.push(debrief2Text);
    debrief_2Components.push(debrief2Resp);
    
    for (const thisComponent of debrief_2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function debrief_2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'debrief_2' ---
    // get current time
    t = debrief_2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *debrief2Text* updates
    if (t >= 0.0 && debrief2Text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      debrief2Text.tStart = t;  // (not accounting for frame time here)
      debrief2Text.frameNStart = frameN;  // exact frame index
      
      debrief2Text.setAutoDraw(true);
    }
    
    
    // if debrief2Text is active this frame...
    if (debrief2Text.status === PsychoJS.Status.STARTED) {
    }
    
    
    // *debrief2Resp* updates
    if (t >= 0.0 && debrief2Resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      debrief2Resp.tStart = t;  // (not accounting for frame time here)
      debrief2Resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { debrief2Resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { debrief2Resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { debrief2Resp.clearEvents(); });
    }
    
    // if debrief2Resp is active this frame...
    if (debrief2Resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = debrief2Resp.getKeys({
        keyList: typeof 'space' === 'string' ? ['space'] : 'space', 
        waitRelease: false
      });
      _debrief2Resp_allKeys = _debrief2Resp_allKeys.concat(theseKeys);
      if (_debrief2Resp_allKeys.length > 0) {
        debrief2Resp.keys = _debrief2Resp_allKeys[_debrief2Resp_allKeys.length - 1].name;  // just the last key pressed
        debrief2Resp.rt = _debrief2Resp_allKeys[_debrief2Resp_allKeys.length - 1].rt;
        debrief2Resp.duration = _debrief2Resp_allKeys[_debrief2Resp_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of debrief_2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function debrief_2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'debrief_2' ---
    for (const thisComponent of debrief_2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('debrief_2.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(debrief2Resp.corr, level);
    }
    psychoJS.experiment.addData('debrief2Resp.keys', debrief2Resp.keys);
    if (typeof debrief2Resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('debrief2Resp.rt', debrief2Resp.rt);
        psychoJS.experiment.addData('debrief2Resp.duration', debrief2Resp.duration);
        routineTimer.reset();
        }
    
    debrief2Resp.stop();
    // the Routine "debrief_2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var farewellMaxDurationReached;
var farewellMaxDuration;
var farewellComponents;
function farewellRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'farewell' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // keep track of whether this Routine was forcibly ended
    routineForceEnded = false;
    farewellClock.reset(routineTimer.getTime());
    routineTimer.add(5.000000);
    farewellMaxDurationReached = false;
    // update component parameters for each repeat
    psychoJS.experiment.addData('farewell.started', globalClock.getTime());
    farewellMaxDuration = null
    // keep track of which components have finished
    farewellComponents = [];
    farewellComponents.push(farewellText);
    
    for (const thisComponent of farewellComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function farewellRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'farewell' ---
    // get current time
    t = farewellClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *farewellText* updates
    if (t >= 0.0 && farewellText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      farewellText.tStart = t;  // (not accounting for frame time here)
      farewellText.frameNStart = frameN;  // exact frame index
      
      farewellText.setAutoDraw(true);
    }
    
    
    // if farewellText is active this frame...
    if (farewellText.status === PsychoJS.Status.STARTED) {
    }
    
    frameRemains = 0.0 + 5.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (farewellText.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      // keep track of stop time/frame for later
      farewellText.tStop = t;  // not accounting for scr refresh
      farewellText.frameNStop = frameN;  // exact frame index
      // update status
      farewellText.status = PsychoJS.Status.FINISHED;
      farewellText.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      routineForceEnded = true;
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of farewellComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function farewellRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'farewell' ---
    for (const thisComponent of farewellComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('farewell.stopped', globalClock.getTime());
    if (routineForceEnded) {
        routineTimer.reset();} else if (farewellMaxDurationReached) {
        farewellClock.add(farewellMaxDuration);
    } else {
        farewellClock.add(5.000000);
    }
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  await dataPipe.saveOnQuit(isCompleted);  // added by build.py
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
