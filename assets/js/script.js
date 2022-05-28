// --- Indecisive Decisions--- //
// **************************** //

////---------Global variables-----------////

//--------Button variables-----------//
var startBtnGet = document.getElementById("startBtn");
var clearBtnGet = document.getElementById("clearBtn");
// might need for answers if they are buttons
var nextBtn1Get = document.getElementById("nextBtn1");
var nextBtn2Get = document.getElementById("nextBtn2");
var tryAgainBtnGet = document.getElementById("tryAgainBtn");
var startOverBtnGet = document.getElementById("startOverBtn");
var surpriseMeBtnGet = document.getElementById("surpriseMeBtn");

//--------Section variables-----------//
var section1Area = document.querySelector(".section1");
var answerAreaArea = document.querySelector(".answerArea");
var formInputArea = document.querySelector(".formResultsArea");
var resultsSectionArea = document.querySelector(".resultsSection");
var headerArea = document.querySelector(".header");
var answerArea = document.querySelector(".answers");
//initial onload hide show of sections
//section1Area.style.display = "none";
formInputArea.style.display = "none";
resultsSectionArea.style.display = "none";
answerAreaArea.style.display = "none";
var errorMsgArea = document.querySelector("#error");

//--------Item and Object variables-----------//
var i = 0;
var categoryPick = [];

var c = 0; //constant for testing

//might not need the objects if we place info into the appropriate spots inside the functions
// var bookResult = {
//   title: "",
//   subtitle: "",
//   author: "",
//   info: "",
//   link: "",
//   image: "",
// };
// var movieResult = {
//   title: "",
//   subtitle: "",
//   starring: "",
//   info: "",
//   link: "",
//   image: "",
// };
// var otherResult = "";

//--------Array variables-----------//

// get answers Array from local storage
var fixedAnswers = [];
var LSfixedAnswers = JSON.parse(localStorage.getItem("fixedAnswers"));
if (LSfixedAnswers) {
  fixedAnswers = LSfixedAnswers;
} else {
  fixedAnswers = [];
}

// Mood answers array
var answers = [];

// mood questions array
const questions = [
  {
    question: "Tell us how you are feeling",
    answers: ["Elated", "Sad", "Confused", "Tired"],
  },
  {
    question: "How mature are you feeling today?",
    answers: [
      "Just a babe",
      "I'm a pretty cool cat",
      "Don't let any kids in here",
    ],
  },
  {
    question: "Which best represents your current mentality",
    answers: ["Classic", "Nastalgic ", "Modern"],
  },
];

////--------------functions-----------------////

//get a random number to pick one of the books/movies in the array between 0 and 30
//update if need a different range for movies than books
var get_c = function () {
  //random number coding
  c = Math.floor(Math.random() * 30);
  console.log(c);
};
get_c();

// loads fixed preference form on start button
var startBtnFunc = function () {
  // hide show areas;show input form page from html
  resultsSectionArea.style.display = "none";
  answerAreaArea.style.display = "none";
  section1Area.style.display = "none";
  formInputArea.style.display = "block";
  errorMsgArea.textContent = "";
  //// populate with answers from local storage if there are any
};

// get input from fixed questions
var getfixedAnswers = function () {
  //add to answers array to push to local storage for future use
  // move answers from form to replace local storage
  //warn if missing any answers
  //add in if any blank then this, other wise error msg
  errorMsgArea.textContent = "";
};

//Next button function save answers from input form and display first mood question
var nextBtnFunc1 = function () {
  //run get answers func
  getfixedAnswers();
  //hide and show for mood questions page 1
  section1Area.style.display = "none";
  resultsSectionArea.style.display = "none";
  formInputArea.style.display = "none";
  answerAreaArea.style.display = "block";
  i = 0;
  //populate mood questions page 1
  headerArea.textContent = questions[i].question;
  for (var a = 0; a < questions[i].answers.length; a++) {
    inputConEl = document.createElement("div");
    inputConEl.classList = "eachAnswerContainer";
    inputConEl.innerHTML = questions[i].answers[a];
    answerArea.append(inputConEl);
    inputEl = document.createElement("input");
    inputEl.setAttribute("type", "radio");
    inputEl.setAttribute("name", "answerRadio");
    inputEl.setAttribute("id", "q" + i + "a" + a + "radio");
    inputEl.classList = "radios answerBlock";
    inputConEl.append(inputEl);
  }
};

// get input from mood question
var getAnswers = function (i) {
  //add to answers array to determine category pick
  var answerOptions = document.querySelectorAll('input[name="answerRadio"]');
  console.log(answerOptions);
  for (var a = 0; a < questions[i].answers.length; a++) {
    var answerA = document.getElementById(
      "id",
      "q" + i + "a" + a + "radio"
    ).checked;
    if (answerA == true) {
      answerNow = a;
    }
  }
  //error if no answer
  if (answerNow == null) {
    errorMsgArea.textContent = "must select one answer";
  } else {
    //populate answers array
    answers[i] = answerNow;
    // reset radio buttons
    for (var a = 0; a < questions[i].answers.length; a++) {
      var answerA = document.getElementById("id", "q" + i + "a" + a + "radio");
      answerA.checked = false;
    }
  }
};

//Next mood question button function, end of questions go to resultTypeFunc
var nextBtnFunc2 = function () {
  //get answer from previous mood question
  getAnswers(i);
  i++;
  //populate question
  headerArea.textContent = questions[i].question;
  if (i < questions.length) {
    for (var a = 0; a < questions[i].answers.length; a++) {
      inputConEl = document.createElement("div");
      inputConEl.classList = "eachAnswerContainer";
      inputConEl.innerHTML = questions[i].answers[a];
      answerArea.append(inputConEl);
      inputEl = document.createElement("input");
      inputEl.setAttribute("type", "radio");
      inputEl.setAttribute("name", "answerRadio");
      inputEl.setAttribute("id", "q" + i + "a" + a + "radio");
      inputEl.classList = "radios answerBlock";
      inputConEl.append(inputEl);
    }
    //warn if missing any answers
  } else {
    //run figure out results type function
    resultTypeFunc();
  }
};

// determine results types from questions
var resultTypeFunc = function () {
  // fixedAnswers[0] pick
  // fixedAnswers[1] pick
  // fixedAnswers[2] pick

  // answers[0] pick genre
  // answers[1] pick rating/maturity
  // answers[2] pick release date

  //i.e. based on results they need a sad result
  //look into if want to include genre or multiple keywords
  // pass genre, rating, dateRange, keywords
  /////(Replace with real answers)
  var genre = "comedy";
  var rating = "PG-13";
  var dateMood = "Modern";
  var Keyword1 = "flowers";
  var Keyword2 = "western";
  categoryPick = [genre, rating, dateMood, Keyword1, Keyword2];
  //replace later with code for results input equals type X to send to get results functions
  resultsPage(categoryPick);
};

//---------results display.--------------------///
var resultsPage = function (categoryPick) {
  // hide show areas
  section1Area.style.display = "none";
  resultsSectionArea.style.display = "block";
  answerAreaArea.style.display = "none";
  formInputArea.style.display = "none";
  //change header
  headerArea.classList = "header justify-content-center";
  headerArea.textContent = "Your Plans Are ...";
  //get bookResult info
  bookAPI(categoryPick);
  //get movieResult info
  movieAPI(categoryPick);
  //get otherResult info
  otherAPI();
};

//---------get apis linked--------------------//

//-----book API--------//
var bookAPI = function (categoryPick) {
  //decide where to insert this link

  //API to collect a set of book details based on cateogory pick provided
  //try to add country=US
  var apiLocUrl =
    "https://www.googleapis.com/books/v1/volumes?q=" +
    categoryPick +
    "&maxResults=30&projection=lite&orderBy=newest&key=AIzaSyDu-39j_DJyfyXYR2lSvUZmIG_hIJ7DFHA";
  fetch(apiLocUrl)
    .then(function (response) {
      // if request was successful
      console.log(response);
      if (response.ok) {
        response.json().then(function (bookData) {
          // console.log(data);
          console.log(bookData);
          bookResultFunc(bookData);
        });
      } else {
        alert("Error: books api Not Found");
      }
    })
    .catch(function (error) {
      alert("Unable to connect to books api");
    });
};

//get Book result
var bookResultFunc = function (bookData) {
  //   populate bookResult  //display info in appropriate locations
  /////book google books link ---- if we want to redirect or can change to pop up box
  // var bookGoogleLink = bookData.items[c].volumeInfo.canonicalVolumeLink;
  document
    .getElementById("bookResultLink1")
    .setAttribute("href", bookData.items[c].volumeInfo.canonicalVolumeLink);
  document
    .getElementById("bookResultLink2")
    .setAttribute("href", bookData.items[c].volumeInfo.canonicalVolumeLink);
  //title
  var bookTitle = bookData.items[c].volumeInfo.title;
  console.log(bookTitle);
  document.getElementById("bookTitle").textContent = bookTitle;
  //author
  var bookAuthor = bookData.items[c].volumeInfo.authors[0];
  document.getElementById("bookAuthor").textContent = bookAuthor;
  //summary
  ////figure out how to cut off summary if more than # lines
  var bookInfo = bookData.items[c].volumeInfo.description;
  document.getElementById("bookInfo").textContent = bookInfo;
  //book thumbnail URL
  var bookThumbnailGet = document.getElementById("bookImage");
  var bookThumbnail = bookData.items[c].volumeInfo.imageLinks.smallThumbnail;
  //var bookThumbnailEl = document.createElement("img");
  bookThumbnailGet.setAttribute("src", bookThumbnail);
  bookThumbnailGet.setAttribute("height", "50px");
  bookThumbnailGet.setAttribute("alt", bookTitle);
};

//-----movie API--------//
var movieAPI = function (categoryPick) {
  ////phil is working on
  ////movieResultFunc(movieData);
};

//get movie result
var movieResultFunc = function (movieData) {
  // populate movieResult object
};

//-----advice API--------//
var otherAPI = function () {
  //API to collect an advice slip
  var apiLocUrl = "https://api.adviceslip.com/advice";
  fetch(apiLocUrl)
    .then(function (response) {
      // if request was successful
      console.log(response);
      if (response.ok) {
        response.json().then(function (otherData) {
          //console.log(otherData);
          otherResultFunc(otherData);
        });
      } else {
        alert("Error: Advice api Not Found");
      }
    })
    .catch(function (error) {
      alert("Unable to connect to Advice api");
    });
};

//get advice or other
var otherResultFunc = function (otherData) {
  //populate otherResult variable
  //random advice slip, might need a card displayed or switch to image if can get that ---- if we want to redirect
  document.getElementById("adviceSlipArea").textContent = otherData.slip.advice;
  // var otherAreaArea = otherData.slip.advice;
};

//------Misc buttons--------//
var surpriseMeBtnFunc = function () {
  //add in to create a randomized results page and skip the questions
  // //create new random c number//don't need I think
  categoryPick = "best seller"; //update to whatever
  resultsPage(categoryPick);
};

// clear all answers button -- clear local storage
function clearAnswers() {
  //clear then reload form input page
  localStorage.clear();
  startBtnFunc;
}

// Try Again button -- shuffles a new suggestion from already existing arrays
function tryAgainFunc() {
  //create new random c number
  get_c();
  //give new suggestions without resetting category pick
  resultsPage(categoryPick);
}

function startOver() {
  location.reload();
}

////----------event listeners----------////
nextBtn1Get.addEventListener("click", nextBtnFunc1);
nextBtn2Get.addEventListener("click", nextBtnFunc2);
clearBtnGet.addEventListener("click", clearAnswers);
tryAgainBtnGet.addEventListener("click", tryAgainFunc);
startOverBtnGet.addEventListener("click", startOver);
startBtnGet.addEventListener("click", startBtnFunc);
surpriseMeBtnGet.addEventListener("click", surpriseMeBtnFunc);
