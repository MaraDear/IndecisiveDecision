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

// get previous results Array to avoid repeat from local storage
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

// get input from questions 
var getInput = function(){

  //add to answers array to push to local storage for future use
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
//change header and btns
//get bookResult info
//get movieResult info
//get otherResult info
}


// clear all answers button -- clear local storage
function clearAnswers() {
  localStorage.clear();
  location.reload();
}

////----------event listeners----------////
nextBtnGet.addEventListener("click", nextBtnFunc);
clearBtnGet.addEventListener("click", clearAnswers);