// --- Indecisive Decisions--- //
// **************************** //

////---------Global variables-----------////

//--------Button variables-----------//
var startBtnGet = document.getElementById("startBtn");
var clearBtnGet = document.getElementById("clearBtn");
// might need for answers if they are buttons
var nextBtn1Get = document.getElementById("nextBtn1");
var tryAgainBtnGet = document.getElementById("tryAgainBtn");
var startOverBtnGet = document.getElementById("startOverBtn");
var surpriseMeBtnGet = document.getElementById("surpriseMeBtn");
var startNavBtnGet = document.getElementById("startNavBtn");
var surpriseNavBtnGet = document.getElementById("surpriseMeNavBtn");

//--------Section variables-----------//
var section1Area = document.querySelector(".section1");
var formInputArea = document.querySelector(".formResultsArea");
var resultsSectionArea = document.querySelector(".resultsSection");
var headerArea = document.querySelector(".headerCon");
var answerArea = document.querySelector(".answers");
//initial onload hide show of sections
//section1Area.style.display = "none";
formInputArea.style.display = "none";
resultsSectionArea.style.display = "none";
var errorMsgArea = document.getElementById("error");

//--------Item and Object variables-----------//
var i;
var categoryPick = [];
var movieCodes = [];

var c = 0; //constant for testing

//--------Array variables-----------//

// get answers Array from local storage
var answers = [];
var LSAnswers = JSON.parse(localStorage.getItem("answers"));
if (LSAnswers) {
  answers = LSAnswers;
} else {
  answers = [];
}

// fixed answers array
var moodAnswers = [];

////--------------functions-----------------////

//get a random number to pick one of the books/movies in the array between 0 and 30
//update if need a different range for movies than books
var get_c = function () {
  //random number coding
  c = Math.floor(Math.random() * 30);
  // console.log(c);
};
get_c();
window.scrollTo(0, 0);
// loads fixed preference form on start button
var startBtnFunc = function () {
  // hide show areas;show input form page from html
  resultsSectionArea.style.display = "none";
  formInputArea.style.display = "block";
  section1Area.style.display = "none";
  errorMsgArea.textContent = "";
  window.scrollTo(0, 400);
  // populate questionwith answers from local storage if there are any
  ////need to get working
  // for (i = 0; i < questions.length; i++) {
  //   var ii = i + 1;

  // if (answers) {
  //   var answerUse = answers[i];
  //   console.log(answerUse);
  //   if (answerUse === a) {
  //     //console.log("test");
  //     inputEl.checked = true;
  //   } else {
  //     // console.log("nope");
  //     inputEl.checked = false;
  //   }
  //   answerUse = "";
  // }
  // }
};

//Next button function save answers from input form and display first mood question
var nextBtnFunc1 = function () {
  //run get answers func
  getmoodAnswers();
  getAnswers();
  //warn if missing any answers
  ////need to add
};

// get input from fixed questions
var getmoodAnswers = function () {
  //add to answers array to determine category pick
  for (i = 0; i < 3; i++) {
    var ii = i + 1;
    var answerOptions = document.querySelectorAll(
      'input[name="Preference' + ii + '"]'
    );
    //console.log(answerOptions);
    for (var a = 0; a < 4; a++) {
      var answerA = answerOptions[a].checked;
      if (answerA == true) {
        var answerNow = a;
      }
    }
    //error if no answer
    if (answerNow) {
      //populate answers array
      moodAnswers[i] = answerNow;
    } else {
      errorMsgArea.textContent = "must select one answer";
    }
  }
  //console.log(moodAnswers);
  /////fix moodanswers to work
  //add to answers array to push to local storage for future use
  // move answers from form to replace local storage
  //warn if missing any answers
  //add in if any blank then this, other wise error msg
  errorMsgArea.textContent = "";
};

// get input from second questions
var getAnswers = function () {
  //add to answers array to determine category pick
  // var answerNow = "";
  // for (i = 0; i < 3; i++) {
  //   var ii = i + 1;
  //   var answerOptions = document.querySelectorAll(
  //     'input[name="answer' + ii + '"]'
  //   );
  //   console.log("139");
  //   var aa;
  //   if ((i = 0)) {
  //     aa = 4;
  //   } else {
  //     aa = 3;
  //   }
  //   for (var a = 0; a < aa; a++) {
  //     var answerA = answerOptions[a].checked;
  //     if (answerA == true) {
  //       answerNow = a;
  //     }
  //   }
  //   //console.log(answerNow);
  //   //error if no answer
  //   if (answerNow == null) {
  //     errorMsgArea.textContent = "must select one answer";
  //   } else {
  //     //populate answers array
  //     answers[i] = answerNow;
  //   }
  //console.log(answers);
  answers[(1, 1, 1)];
  // }
  localStorage.setItem("answers", JSON.stringify(answers));
  //run figure out results type function
  resultTypeFunc();
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
  // moodAnswers[0] //use these 3 to make keywords
  // answers[0] pick genre
  switch (answers[0]) {
    case 0:
      keywords = "joy";
      movieCodes[0] = 28;
      break;
    case 1:
      keywords = "tears";
      movieCodes[0] = 28;
      break;
    case 2:
      keywords = "mystery";
      movieCodes[0] = 28;
      break;
    case 3:
      keywords = "nature";
      movieCodes[0] = 28;
      break;
  }

  // moodAnswers[1]
  switch (moodAnswers[1]) {
    case 0:
      genre = "suspense";
      movieCodes[1] = 28;
      break;
    case 1:
      genre = "comedy";
      movieCodes[1] = 28;
      break;
    case 2:
      genre = "classic";
      movieCodes[1] = 28;
      break;
    case 3:
      genre = "love";
      movieCodes[1] = 28;
      break;
  }
  // moodAnswers[2]
  switch (moodAnswers[2]) {
    case 0:
      keywords += "_adventure";
      movieCodes[2] = 28;
      break;
    case 1:
      keywords += "_hilarious";
      movieCodes[2] = 28;
      break;
    case 2:
      keywords += "_family";
      movieCodes[2] = 28;
      break;
    case 3:
      keywords += "_happy";
      movieCodes[2] = 28;
      break;
  }

  // moodAnswers[0] pick genre
  switch (moodAnswers[0]) {
    case 0:
      genre += "_action";
      movieCodes[3] = 28;
      break;
    case 1:
      genre += "_comedy";
      movieCodes[3] = 28;
      break;
    case 2:
      genre += "_drama";
      movieCodes[3] = 28;
      break;
    case 3:
      genre += "_nature";
      movieCodes[3] = 28;
      break;
  }
  // answers[1] pick rating/maturity
  switch (answers[1]) {
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
  switch (answers[2]) {
    case 0:
      dateMood = "classic";
      movieCodes[4] = 28;
      break;
    case 1:
      dateMood = "retro";
      movieCodes[4] = 28;
      break;
    case 2:
      dateMood = "new_release";
      movieCodes[4] = 28;
      break;
  }
  // pass genre, rating, dateMood, keywords
  ////add code to combine keywords into one string for searching
  categoryPick = [keywords, genre, ratingMovie, ratingBook, dateMood];
  // console.log(movieCodes);

  //results functions
  resultsPage(categoryPick, movieCodes);
};

//---------results display.--------------------///
var resultsPage = function (categoryPick, movieCodes) {
  // hide show areas
  section1Area.style.display = "none";
  resultsSectionArea.style.display = "block";
  formInputArea.style.display = "none";
  //change header
  window.scrollTo(0, 400);
  headerArea.textContent = "Your Plans Are ...";
  //get bookResult info
  bookAPI(categoryPick);
  //get movieResult info
  movieAPI(categoryPick, movieCodes); //categoryPick[3] is movie rating
  //get otherResult info
  otherAPI();
};

//---------get apis linked--------------------//
// //-----movie API--------//
var movieAPI = function (categoryPick, movieCodes) {
  //   //random number coding
  //   m = Math.floor(Math.random() * 5);
  //   //console.log(m);
  //   var genreType = movieCodes[m];
  //   //// categoryPick[3]=movie rating
  //   // var apiMovieUrl = "/";
  //   // fetch(apiMovieUrl)
  //   //   .then(function (response) {
  //   //     // if request was successful
  //   //     //console.log(response);
  //   //     if (response.ok) {
  //   //       response.json().then(function (otherData) {
  //   //         //console.log(otherData);
  //   //         otherResultFunc(movieData);
  //   //       });
  //   //     } else {
  //   //       alert("Error: Movie api Not Found");
  //   //     }
  //   //   })
  //   //   .catch(function (error) {
  //   //     alert("Unable to connect to movie api");
  //   //   });
  //   ////phil is working on
  //   ////movieResultFunc(movieData);
};

// document.querySelector("#nextBtn1").addEventListener("click", searchGenre);

//get movie result
var movieResultFunc = function (movieData) {
  // populate movieResult object
};

//-----book API--------//
var bookAPI = function (categoryPick) {
  //API to collect a set of book details based on cateogory pick provided
  var apiLocUrl =
    "https://www.googleapis.com/books/v1/volumes?q=" +
    categoryPick[0] +
    "&subject:" +
    categoryPick[1] +
    "&maxResults=30&orderBy=newest&maxAllowedMaturityRating=" +
    categoryPick[3] +
    "&key=AIzaSyDu-39j_DJyfyXYR2lSvUZmIG_hIJ7DFHA";

  bookFetch(apiLocUrl, categoryPick);
  console.log(apiLocUrl);
};

//-----get book results
var bookFetch = function (apiLocUrl) {
  var redo;
  fetch(apiLocUrl)
    .then(function (response) {
      // if request was successful
      //console.log(response);
      if (response.ok) {
        response.json().then(function (bookData) {
          if (bookData.length < 30) {
            if (redo === 1) {
              bookData = [];
              document.querySelector(".bookResult").innerHTML = "";
              return;
            } else {
              apiLocUrl =
                "https://www.googleapis.com/books/v1/volumes?q=subject:" +
                categoryPick[1] +
                "&maxResults=30&orderBy=newest&maxAllowedMaturityRating=" +
                categoryPick[3] +
                "&key=AIzaSyDu-39j_DJyfyXYR2lSvUZmIG_hIJ7DFHA";
              apiLocUrl = bookFetch(apiLocUrl);
              redo = 1;
            }
          }
          redo = 0;
          //console.log(bookData);
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

// var movieAPI = function () {
// let tmdbKey = "483e17e3930801f2012e0e7c7f4fb86e";
// let baseURL = "https://api.themoviedb.org/3/";
// let configData = null;
// let baseImageURL = null;
// let url = "".concat(baseURL, "configuration?api_key=", tmdbKey);
// fetch(url)
//   .then((result) => {
//     return result.json();
//   })
//   .then((data) => {
//     baseImageURL = data.images.secure_base_url;
//     configData = data.images;
//     console.log("config:", data);
//     console.log("config fetched");
//     runSearch("Jaws");
//   })
//   .catch(function (err) {
//     alert(err);
//   });
// };

let runSearch = function (keyword) {
  // let url = "".concat(
  //   baseURL,
  //   "search/movie?api_key=",
  //   tmdbKey,
  //   "&query=",
  //   keyword
  // );
  // fetch(url)
  //   .then((result) => result.json())
  //   .then((data) => {
  //     document.getElementById("SET ELEMENT HERE").innerHTML = JSON.stringify(
  //       data,
  //       null,
  //       4
  //     );
  //   });
};

//get Book result
var bookResultFunc = function (bookData) {
  //console.log(bookData);
  //   populate bookResult  //display info in appropriate locations
  /////book google books link ---- if we want to redirect or can change to pop up box
  //if there is not data for that c then try again until there is
  if (c > bookData.items.length - 1) {
    tryAgainFunc();
  } else {
    document
      .getElementById("bookResultLink1")
      .setAttribute("href", bookData.items[c].volumeInfo.canonicalVolumeLink);
    document
      .getElementById("bookResultLink2")
      .setAttribute("href", bookData.items[c].volumeInfo.canonicalVolumeLink);
    //title
    var bookTitle = bookData.items[c].volumeInfo.title;
    document.getElementById("bookTitle").textContent = bookTitle;
    //author
    if (!bookData.items[c].volumeInfo.authors[0]) {
      var bookAuthor = "";
    } else {
      var bookAuthor = bookData.items[c].volumeInfo.authors[0];
    }
    document.getElementById("bookAuthor").textContent = bookAuthor;
    //summary
    ////figure out how to cut off summary if more than # lines
    if (!bookData.items[c].volumeInfo.description) {
      var bookInfo = "";
    } else {
      var bookInfo = bookData.items[c].volumeInfo.description;
    }
    document.getElementById("bookInfo").textContent = bookInfo;
    //book thumbnail URL
    // if (!bookData.items[c].volumeInfo.imageLinks.smallThumbnail) {
    //   document.getElementById("bookImage").innerHTML = "";
    // } else {
    var bookThumbnail = bookData.items[c].volumeInfo.imageLinks.smallThumbnail;
    var bookThumbnailGet = document.getElementById("bookImage");
    bookThumbnailGet.setAttribute("src", bookThumbnail);
    bookThumbnailGet.setAttribute("height", "50px");
    bookThumbnailGet.setAttribute("alt", bookTitle);
    // }
  }
};

//-----advice API--------//
var otherAPI = function () {
  //API to collect an advice slip
  var apiLocUrl = "https://api.adviceslip.com/advice";
  fetch(apiLocUrl)
    .then(function (response) {
      // if request was successful
      //console.log(response);
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
  var cc = c / 3;
  var keywordsPick = [
    "best-seller",
    "friends",
    "war",
    "garden",
    "mystery",
    "man",
    "story",
    "witch",
    "old",
    "house",
  ];
  var genrePick = [
    "comedy",
    "drama",
    "suspense",
    "action",
    "romance",
    "fiction",
    "non-fiction",
    "family",
    "classic",
    "western",
  ];
  categoryPick = [
    keywordsPick[cc],
    genrePick[cc],
    "PG-13",
    "not-mature",
    "modern",
  ];
  movieCodes = [28, 30, 31, 10, 13]; //populate with better options
  resultsPage(categoryPick, movieCodes);
};

// clear all answers button -- clear local storage
function clearAnswers() {
  //clear then reload form input page
  localStorage.clear();
  startBtnFunc();
}

// Try Again button -- shuffles a new suggestion from already existing arrays
function tryAgainFunc() {
  //create new random c number
  get_c();
  //give new suggestions without resetting category pick
  resultsPage(categoryPick, movieCodes);
}

function startOver() {
  location.reload();
}

////----------event listeners----------////
nextBtn1Get.addEventListener("click", nextBtnFunc1);
clearBtnGet.addEventListener("click", clearAnswers);
tryAgainBtnGet.addEventListener("click", tryAgainFunc);
startBtnGet.addEventListener("click", startBtnFunc);
surpriseMeBtnGet.addEventListener("click", surpriseMeBtnFunc);
startNavBtnGet.addEventListener("click", startBtnFunc);
surpriseNavBtnGet.addEventListener("click", surpriseMeBtnFunc);
