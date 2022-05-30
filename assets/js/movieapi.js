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
    switch (moodAnswers[0]) {
      case 0:
        keywords = "joy";
        movieKeyword = "comedy";
        break;
      case 1:
        keywords = "tears";
        movieKeyword = "drama";
        break;
      case 2:
        keywords = "mystery";
        movieKeyword = "suspense";
        break;
      case 3:
        keywords = "nature";
        movieKeyword = "documentary";
        break;
    }
    console.log("moodAnswers[0] variable is:  " + moodAnswers[0]);
    // moodAnswers[1]
    switch (moodAnswers[1]) {
      case 0:
        genre = "suspense";
        break;
      case 1:
        genre = "comedy";
        break;
      case 2:
        genre = "classic";
        break;
      case 3:
        genre = "love";
        break;
    }
    // moodAnswers[2]
    switch (moodAnswers[2]) {
      case 0:
        keywords += "_adventure";
        break;
      case 1:
        keywords += "_hilarious";
        break;
      case 2:
        keywords += "_family";
        break;
      case 3:
        keywords += "_happy";
        break;
    }
  
    // answers[0] pick genre
    switch (answers[0]) {
      case 0:
        genre += "_action";
        break;
      case 1:
        genre += "_comedy";
        break;
      case 2:
        genre += "_drama";
        break;
      case 3:
        genre += "_nature";
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
        break;
      case 1:
        dateMood = "retro";
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

var resultsPage = function (categoryPick) {
    // hide show areas
    section1Area.style.display = "none";
    resultsSectionArea.style.display = "block";
    formInputArea.style.display = "none";
    //change header
  
    headerArea.textContent = "Your Plans Are ...";
    //get bookResult info
    // bookAPI(categoryPick);
    //get movieResult info
    movieAPI(categoryPick);
    //get otherResult info
    // otherAPI();
  };
  