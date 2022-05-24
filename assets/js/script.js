// --- Indecisive Decisions--- //
// **************************** //


////---------Global variables-----------////

//--------Button variables-----------//
var startBtnGet = document.getElementById("startBtn");
var clearBtnGet = document.getElementById("clearBtn");
// might need for answers if they are buttons 
var nextBtnGet = document.getElementById("nextBtn");
var tryAgainBtnGet = document.getElementById("tryAgainBtn");


//--------Section variables-----------//
var section1Area = document.querySelector(".section1");
var movieResultArea = document.querySelector(".movieResult");
var bookResultArea = document.querySelector(".bookResult");
var answersArea = document.querySelector(".answers");
var headerArea = document.querySelector(".header");

//--------Item and Object variables-----------//
var i = 0;
var categoryPick;

var bookResult = {
  title:"",
subtitle:"",
author:"",
info:"",
link:"",
image:"",
};
var movieResult = {
  title: "",
  subtitle: "",
  starring: "",
  info: "",
  link: "",
  image: "",
};
var otherResult = "";

//--------Array variables-----------//

// get answers Array from local storage
var answers;
var LSanswers = JSON.parse(localStorage.getItem("answers"));
if (LSanswers) {
  answers = LSanswers;
} else {
  answers = [];
}

// get previous results Array to avoid repeat from local storage //NTH if time
var prevResults;
var LSprevResults = JSON.parse(localStorage.getItem("prevResults"));
if (LSprevResults) {
  prevResults = LSprevResults;
} else {
  prevResults = [];
}

//questions array 
//will need updating just placeholders for now
const questions = [
  {
    question: "Pick a Color",
    a: "Blue",
    b: "Red",
    c: "Yellow",
    d: "Green",
  },
  {
    question: "Pick a Princess",
    a: "Nala",
    b: "Jasmine",
    c: "Cinderella",
    d: "Tiana",
  },
];




////--------------functions-----------------////


// load first question on start button 
var startBtnFunc = function(){
  // hide show areas 
  headerArea.textContent = questions[0].question;
  answersArea.textContent = questions[0].a;

}

//Next question button function if doing 1 per page, otherwise a submit answers btn
var nextBtnFunc = function(){
  i++
  if (i < questions.length) {
    headerArea.textContent = questions[i].question;
    answersArea.textContent = questions[i].a;
    //edit to how we want to do answers part. will depend on one at a time or multiple form
  } else {
    resultsPage();
  }
}

// get input from questions 
var getInput = function(){

  //add to answers array to push to local storage for future use
}

// determine results types from questions 
var resultTypeFunc = function(){
  //i.e. based on results they need a sad result
categoryPick = "InTheBlues"  
//replace later with code for results input equals type X to send to get results functions
}

//get apis linked
var bookAPI = function(){

}

var movieAPI = function () {

};

var otherAPI = function () {

};


//get Book result
var bookResultFunc =  function(){
// populate bookResult object 
};

//get movie result
var movieResultFunc = function () {
// populate movieResult object 
};

//get advice or other 
var otherResultFunc = function () {
//populate otherResult variable
};

//results display
var resultsPage =  function(){
  // hide show areas
  //change header and btns
  headerArea.classList = "header justify-content-center";
  headerArea.textContent = "Your Plans Are ...";
  //get bookResult info
  //get movieResult info
  //get otherResult info
}


// clear all answers button -- clear local storage
function clearAnswers() {
  // hide show areas?
  localStorage.clear();
  location.reload();
}

// Try Again button -- send to beginning //NTH if time shuffles a new suggestion
function tryAgainFunc() {
  // hide show areas?
  location.reload();
}

////----------event listeners----------////
nextBtnGet.addEventListener("click", nextBtnFunc);
clearBtnGet.addEventListener("click", clearAnswers);
tryAgainBtnGet.addEventListener("click", tryAgainFunc);
startBtnGet.addEventListener("click", startBtnFunc);