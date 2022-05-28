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
var i;
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
  //add to answers array to determine category pick
  for (i = 0; i < 3; i++) {
    var ii = i + 1;
    var answerOptions = document.querySelectorAll(
      'input[name="Preference' + ii + '"]'
    );
    console.log(answerOptions);
    for (var a = 0; a < 4; a++) {
      var answerA = answerOptions[a].checked;
      if (answerA == true) {
        var answerNow = a;
      }
    }
    //error if no answer
    if (answerNow == null) {
      errorMsgArea.textContent = "must select one answer";
    } else {
      //populate answers array
      fixedAnswers[i] = answerNow;
    }
  }
  console.log(fixedAnswers);
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
  // reset radio buttons
  // for (var a = 0; a < questions[i].answers.length; a++) {
  //   answerOptions[a].checked = false;
  // }
  //populate question
  // answerArea.innerHTML = "";
  for (i = 0; i < questions.length; i++) {
    var ii = i + 1;
    headerArea.textContent = "continued"; //something better here. lol
    var questCon = document.createElement("h3");
    questCon.innerHTML = questions[i].question;
    answerArea.append(questCon);
    for (var a = 0; a < questions[i].answers.length; a++) {
      var inputConEl = document.createElement("div");
      inputConEl.classList = "eachAnswerContainer";
      inputConEl.innerHTML = questions[i].answers[a];
      answerArea.append(inputConEl);
      var inputEl = document.createElement("input");
      inputEl.setAttribute("type", "radio");
      inputEl.setAttribute("name", "mood" + ii);
      inputEl.setAttribute("id", "q" + i + "a" + a + "radio");
      inputEl.classList = "radios answerBlock";
      inputConEl.append(inputEl);
    }
    //warn if missing any answers
    ////need to add
  }
};

// get input from mood question
var getAnswers = function () {
  //add to answers array to determine category pick
  for (i = 0; i < questions.length; i++) {
    var ii = i + 1;
    var answerOptions = document.querySelectorAll(
      'input[name="mood' + ii + '"]'
    );
    for (var a = 0; a < questions[i].answers.length; a++) {
      var answerA = answerOptions[a].checked;
      if (answerA == true) {
        var answerNow = a;
      }
    }
    //error if no answer
    if (answerNow == null) {
      errorMsgArea.textContent = "must select one answer";
    } else {
      //populate answers array
      answers[i] = answerNow;
    }
  }
  //run figure out results type function
  resultTypeFunc();
};

//Next mood question button function, end of questions go to resultTypeFunc
var nextBtnFunc2 = function () {
  //get answer from previous mood question
  getAnswers();
};

// determine results types from questions
var resultTypeFunc = function () {
  categoryPick = [];
  /////(Replace with real answers) just constants for testing
  var genre;
  var ratingMovie;
  var ratingBook; // MATURE, not-mature
  var dateMood; //not certain on words to carry over
  var keywords;
  ///////add this results means this answer for category pick array section
  // fixedAnswers[0] //use these 3 to make keywords
  switch (answers[0]) {
    case 0:
      keywords = "comedy";
      break;
    case 1:
      keywords = "tragedy";
      break;
    case 2:
      keywords = "mystery";
      break;
    case 3:
      keywords = "nature";
      break;
  }
  // fixedAnswers[1]
  switch (answers[1]) {
    case 0:
      genre = "comedy";
      break;
    case 1:
      genre = "tragedy";
      break;
    case 2:
      genre = "mystery";
      break;
    case 3:
      genre = "nature";
      break;
  }
  // fixedAnswers[2]
  switch (answers[2]) {
    case 0:
      genre = "comedy";
      break;
    case 1:
      genre = "tragedy";
      break;
    case 2:
      genre = "mystery";
      break;
    case 3:
      genre = "nature";
      break;
  }

  // answers[0] pick genre
  switch (answers[3]) {
    case 0:
      genre = "comedy";
      break;
    case 1:
      genre = "tragedy";
      break;
    case 2:
      genre = "mystery";
      break;
    case 3:
      genre = "nature";
      break;
  }
  // answers[1] pick rating/maturity
  switch (answers[4]) {
    case 0:
      ratingBook = "not-mature";
      ratingMovie = "PG";
      break;
    case 1:
      ratingBook = "not-mature";
      ratingMovie = "PG-13";
      break;
    case 2:
      ratingBook = "MATURE";
      ratingMovie = "R";
      break;
  }
  // answers[2] pick release date
  switch (answers[5]) {
    case 0:
      dateMood = "classic";
      break;
    case 1:
      dateMood = "1970-2020";
      break;
    case 2:
      dateMood = "new_release";
      break;
  }
  // pass genre, rating, dateMood, keywords
  ////add code to combine keywords into one string for searching
  categoryPick = [keywords, genre, ratingMovie, ratingBook, dateMood];
  //results functions
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
  //API to collect a set of book details based on cateogory pick provided
  var apiLocUrl =
    "https://www.googleapis.com/books/v1/volumes?q=" +
    categoryPick[0] +
    "&maxResults=30&maturityRating=projection=lite&orderBy=newest&maxAllowedMaturityRating=" +
    categoryPick[3] +
    "&key=AIzaSyDu-39j_DJyfyXYR2lSvUZmIG_hIJ7DFHA";

  fetch(apiLocUrl)
    .then(function (response) {
      // if request was successful
      //console.log(response);
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
  // for reference array inputs categoryPick = [keywords,genre,ratingMovie,ratingBook,dateMood];
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

//create a randomized results page and skip the questions
var surpriseMeBtnFunc = function () {
  // for reference array inputs categoryPick = [keywords,genre,ratingMovie,ratingBook,dateMood];
  // update to whatever
  categoryPick = ["best_seller", "fiction", "PG-13", "not-mature", "modern"];
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
