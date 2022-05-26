// --- Indecisive Decisions--- //
// **************************** //

////---------Global variables-----------////

//--------Button variables-----------//
var startBtnGet = document.getElementById("startBtn");
var clearBtnGet = document.getElementById("clearBtn");
// might need for answers if they are buttons
var nextBtnGet = document.getElementById("nextBtn");
var tryAgainBtnGet = document.getElementById("tryAgainBtn");
var surpriseMeBtnGet = document.getElementById("surpriseMeBtn");

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
  title: "",
  subtitle: "",
  author: "",
  info: "",
  link: "",
  image: "",
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
var fixedAnswers = [];
var LSfixedAnswers = JSON.parse(localStorage.getItem("fixedAnswers"));
if (LSfixedAnswers) {
  fixedAnswers = LSfixedAnswers;
} else {
  fixedAnswers = [];
}

// get answers Array from local storage
var answers = [];
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
var startBtnFunc = function () {
  // hide show areas
  // show input form page from html and populate with answers from local storage if there are any
};

var setLocalStorage = function () {
  // move answers from form to replace local storage
};

//Next question button function if doing 1 per page, otherwise a submit answers btn
var nextBtnFunc = function () {
//run get answers func

//run figure out results type function
  resultTypeFunc()
  if (i < questions.length) {
    headerArea.textContent = questions[i].question;
    answersArea.textContent = questions[i].a;
    i++;
    //edit to how we want to do answers part. will depend on one at a time or multiple form
  } else {
    resultsPage(categoryPick);
  }
};

// get input from questions
var getInput = function () {
  //add to answers array to push to local storage for future use
};

// determine results types from questions
var resultTypeFunc = function () {
  //i.e. based on results they need a sad result
  //look into if want to include genre or multiple keywords
  categoryPick = "InTheBlues";
  //replace later with code for results input equals type X to send to get results functions
};

//get apis linked
var bookAPI = function (categoryPick) {
  //decide where to put this button

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

          //get a random number to pick one of the books in the array between 0 and 30

          var c = 0; //constant for testing
          console.log(bookData.items[0]);

          //information we need from selected google books object
          //display info in appropriate locations
          //book preview link ---if we want to have an in page pop up
          // var bookLink = bookData.items[c].volumeInfo.previewlink;
          // console.log(bookLink);
          //book google books link ---- if we want to redirect
          var bookGoogleLink = bookData.items[c].volumeInfo.canonicalVolumeLink;
          console.log(bookGoogleLink);
          //title
          var bookTitle = bookData.items[c].volumeInfo.title;
          console.log(bookTitle);
          document.getElementById("bookTitle").textContent = bookTitle;
          //author
          var bookAuthor = bookData.items[c].volumeInfo.authors[0];
          document.getElementById("bookAuthor").textContent = bookAuthor;
          //summary
          var bookInfo = bookData.items[c].volumeInfo.description;
          document.getElementById("bookInfo").textContent = bookInfo;
          //book thumbnail URL
          var bookThumbnail = bookData.items[c].volumeInfoimagelinks.smallThumbnail;
          bookThumbnailGet = document.getElementById("bookImage");
          bookThumbnailGet.setattribute(Href, bookThumbnail);
          console.log(bookThumbnailGet.setattribute(Href, bookThumbnail));

          // document.getElementById("bookImage").textContent = info1;

          // getWeatherLocation(lat, lon);
        });
      } else {
        alert("Error: books api Not Found");
      }
    })
    .catch(function (error) {
      alert("Unable to connect to books api");
    });
};

//GBS_insertPreviewButtonLink(identifiers, opt_options)
// var GBS_PreviewBtn = document.querySelector("#bookInfo");
// GBS_PreviewBtn.addEventListener("click", bookAPI("flowers")); //constant for testing purposes, will be determined by responses to questions

var movieAPI = function (categoryPick) {};

var otherAPI = function (categoryPick) {};

//get Book result
var bookResultFunc = function () {
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
var resultsPage = function (categoryPick) {
  // hide show areas
  //change header and btns
  headerArea.classList = "header justify-content-center";
  headerArea.textContent = "Your Plans Are ...";
  //get bookResult info
  bookAPI(categoryPick);
  //get movieResult info
  //get otherResult info
};

var surpriseMeBtnFunc = function () {
  //add in to create a randomized results page and skip the questions
};

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
nextBtnGet.addEventListener("click", nextBtnFunc(categoryPick));
clearBtnGet.addEventListener("click", clearAnswers);
tryAgainBtnGet.addEventListener("click", tryAgainFunc);
startBtnGet.addEventListener("click", startBtnFunc);
surpriseMeBtnGet.addEventListener("click", surpriseMeBtnFunc);
