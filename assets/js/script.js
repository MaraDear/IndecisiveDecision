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
var surpriseMeBtnGet = document.getElementById("surpriseMeBtn");

//--------Section variables-----------//
var section1Area = document.querySelector(".section1");
var movieResultArea = document.querySelector(".movieResult");
var bookResultArea = document.querySelector(".bookResult");
var otherAreaArea = document.querySelector(".otherArea");
var answersArea = document.querySelector(".answers");
var headerArea = document.querySelector(".header");

//--------Item and Object variables-----------//
var i = 0;
var categoryPick;

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

//get a random number to pick one of the books/movies in the array between 0 and 30
//update if need a different range for movies than books
var get_c = function () {
  //random number coding
  c = Math.floor(Math.random() * 30);
};
get_c();

// loads fixed preference form on start button
var startBtnFunc = function () {
  // hide show areas;show input form page from html
  // populate with answers from local storage if there are any
};

//Next question button function if doing 1 per page, otherwise a submit answers btn
var nextBtnFunc1 = function () {
  //run get answers func
  getfixedAnswers();

  //hide and show for mood questions page 1
};

//Next question button function if doing 1 per page, otherwise a submit answers btn
var nextBtnFunc2 = function () {
  //populate questions //redo to form or modal if 1 page only
  //if 1 page then getAnswers function, otherwise add to answers array as we go through here if then
  if (i < questions.length) {
    headerArea.textContent = questions[i].question;
    answersArea.textContent = questions[i].a;
    i++;
    //warn if missing any answers
  } else {
    //run figure out results type function
    resultTypeFunc(categoryPick);
  }
};

// get input from fixed questions
var getfixedAnswers = function () {
  //add to answers array to push to local storage for future use
  // move answers from form to replace local storage
  //warn if missing any answers
};

// get input from mood questions
var getAnswers = function () {
  //add to answers array to determine category pick
  //warn if missing any answers
};

// determine results types from questions
var resultTypeFunc = function () {
  //i.e. based on results they need a sad result
  //look into if want to include genre or multiple keywords
  categoryPick = "InTheBlues";
  //replace later with code for results input equals type X to send to get results functions
  resultsPage(categoryPick);
};

//---------get apis linked--------------------//
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

          console.log(bookData.items[0]);

          //information we need from selected google books object
          //display info in appropriate locations

          //book google books link ---- if we want to redirect or can change to pop up box
          // var bookGoogleLink = bookData.items[c].volumeInfo.canonicalVolumeLink;
          document
            .getElementById("bookResultLink")
            .setAttribute(
              "href",
              bookData.items[c].volumeInfo.canonicalVolumeLink
            );
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
          var bookThumbnailGet = document.getElementById("bookImage");
          var bookThumbnail =
            bookData.items[c].volumeInfo.imageLinks.smallThumbnail;
          //var bookThumbnailEl = document.createElement("img");
          bookThumbnailGet.setAttribute("src", bookThumbnail);
          bookThumbnailGet.setAttribute("height", "50px");
          bookThumbnailGet.setAttribute("alt", bookTitle);
        });
      } else {
        alert("Error: books api Not Found");
      }
    })
    .catch(function (error) {
      alert("Unable to connect to books api");
    });
};

var movieAPI = function (categoryPick) {};

var otherAPI = function () {
  //API to collect an advice slip
  //try to add country=US
  var apiLocUrl = "https://api.adviceslip.com/advice";
  fetch(apiLocUrl)
    .then(function (response) {
      // if request was successful
      console.log(response);
      if (response.ok) {
        response.json().then(function (otherData) {
          console.log(otherData);

          // console.log(otherData.items[0]);

          //random advice slip, might need a card displayed or switch to image if can get that ---- if we want to redirect
          // var otherAreaArea = bookData.items[c].volumeInfo.canonicalVolumeLink;
          // console.log(otherAreaArea);
        });
      } else {
        alert("Error: Advice api Not Found");
      }
    })
    .catch(function (error) {
      alert("Unable to connect to Advice api");
    });
};

// I don't think we'll need anymore- combined //get Book result
// var bookResultFunc = function () {
//   // populate bookResult object
// };

// // I don't think we'll need anymore- combined //get movie result
// var movieResultFunc = function () {
//   // populate movieResult object
// };

// // I don't think we'll need anymore-//get advice or other
// var otherResultFunc = function () {
//populate otherResult variable
// };

//results display.
var resultsPage = function (categoryPick) {
  // hide show areas
  //change header and btns
  headerArea.classList = "header justify-content-center";
  headerArea.textContent = "Your Plans Are ...";
  //get bookResult info
  bookAPI(categoryPick);
  //get movieResult info
  movieAPI(categoryPick);
  //get otherResult info
  otherAPI();
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

// Try Again button -- shuffles a new suggestion from already existing arrays
function tryAgainFunc() {
  //create new random c number
  get_c();
  categoryPick = "trending"; //update to whatever
  resultsPage(categoryPick);
  //location.reload();
}

////----------event listeners----------////
nextBtn1Get.addEventListener("click", nextBtnFunc1);
nextBtn2Get.addEventListener("click", nextBtnFunc2);
clearBtnGet.addEventListener("click", clearAnswers);
tryAgainBtnGet.addEventListener("click", tryAgainFunc);
startBtnGet.addEventListener("click", startBtnFunc);
surpriseMeBtnGet.addEventListener("click", surpriseMeBtnFunc);
