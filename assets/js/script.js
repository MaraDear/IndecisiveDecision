var testRun = function () {       //searchWords, State, limit, date posted
  const settings = {
    async: true,
    crossDomain: true,
    url: "https://job-search4.p.rapidapi.com/monster/search?query=Web%20Developer&state=FL&page=1",
    method: "GET",
    headers: {
      "X-RapidAPI-Host": "job-search4.p.rapidapi.com",
      "X-RapidAPI-Key": "a47223a291mshf91d27790097d04p161a1bjsn84991a8e3226",
    },
  };

  $.ajax(settings).done(function (response) {
    console.log(response);
  });
};
testRun();
