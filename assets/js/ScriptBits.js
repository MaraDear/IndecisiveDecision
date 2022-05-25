
//   //GBS_insertPreviewButtonLink(identifiers, opt_options)
//   GBS_insertPreviewButtonPopup("ISBN:0738531367");
//   GBS_insertEmbeddedViewer(identifier, opt_width, opt_height);

// <html>
//   <head>
//     <script src="https://apis.google.com/js/api.js"></script>
//     <script>
//       vfunction start() {
//         // Initializes the client with the API key and the Translate API.
//         gapi.client.init({
//           'apiKey': 'YOUR_API_KEY',
//           'discoveryDocs': ['https://www.googleapis.com/discovery/v1/apis/translate/v2/rest'],
//         }).then(function() {
//           // Executes an API request, and returns a Promise.
//           // The method name `language.translations.list` comes from the API discovery.
//           return gapi.client.language.translations.list({
//             q: 'hello world',
//             source: 'en',
//             target: 'de',
//           });
//         }).then(function(response) {
//           console.log(response.result.data.translations[0].translatedText);
//         }, function(reason) {
//           console.log('Error: ' + reason.result.error.message);
//         });
//       };

//       // Loads the JavaScript client library and invokes `start` afterwards.
//       gapi.load('client', start);
//     </script>
//   </head>
//   <body>
//     <div id="results"></div>
//   </body>
// </html>





// var apiKey = 'AIzaSyAdjHPT5Pb7Nu56WJ_nlrMGOAgUAtKjiPM';

//       function handleClientLoad() {
//           gapi.load('client', initClient);
//       }

//       function initClient() {
//         gapi.client.init({
//           apiKey: apiKey,
//           discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/urlshortener/v1/rest']
//         }).then(showInputs)
//       }

//       function showInputs() {
//         document.getElementById('requestFields').style.display = '';
//       }

//       function makeRequest() {
//         function writeResponse(resp) {
//           var responseText;
//           if (resp.code && resp.data[0].debugInfo == 'QuotaState: BLOCKED') {
//             responseText = 'Invalid API key provided. Please replace the "apiKey" value with your own.';
//           } else {
//             responseText = 'Short URL ' + shortUrl + ' expands to ' + resp.longUrl;
//           }
//           var infoDiv = document.getElementById('info');
//           infoDiv.innerHTML = '';
//           infoDiv.appendChild(document.createTextNode(responseText));
//         }

//         var shortUrl = document.getElementById('shortUrl').value;
//         var request = gapi.client.urlshortener.url.get({
//           'shortUrl': shortUrl
//         });
//         request.execute(writeResponse);
//       }
//     </script>
//     <script async defer src="https://apis.google.com/js/api.js"
//       onload="this.onload=function(){};handleClientLoad();"
//       onreadystatechange="if (this.readyState === 'complete') this.onload();">
//     </script>
//   </head>
//   <body>
//     <p>Enter a short URL and click "Expand URL" to get the full URL.</p>
//     <div id="requestFields" style="display:none;">
//       <label for="shortUrl">Short URL </label>
//       <input id="shortUrl" type="text" value="http://goo.gl/fbsS" />
//       <button onclick="makeRequest();">
//         Expand URL
//       </button>
//     </div>
//     <div style="margin-top:0.5em;"><span id="info">Results</span></div>
//   </body>
// </html>


// https://books.google.com/ebooks?id=buc0AAAAMAAJ&dq=holmes&as_brr=4&source=webstore_bookcard

// GET https://www.googleapis.com/books/v1/volumes?q=flowers&maxResults=10&projection=lite&orderBy=newest&key=yourAPIKey
// subject isbn intitle
// startIndex 
// maxResults 
// printType=books

// https://www.googleapis.com/books/v1/volumes?q=search+terms

// https://www.googleapis.com/books/v1/volumes/volumeId


//     <script type="text/javascript" src="//www.google.com/books/jsapi.js"></script>
//     <script type="text/javascript">
//       google.books.load();

//       function initialize() {
//         var viewer = new google.books.DefaultViewer(document.getElementById('viewerCanvas'));
//         viewer.load('ISBN:0738531367');
//       }

//       google.books.setOnLoadCallback(initialize);
//     </script>



// <script type="text/javascript" src="//www.google.com/books/jsapi.js"></script>
//       function openBookByTitle(title) {
//         showCanvas(false);
//         showStatus('Searching for ' + title + '...');
//         beginSearch(title);
//       }

//       function beginSearch(query) {
//         // Dynamically load the search results in JavaScript,
//         // using the Books API
//         // Once loaded, handleResults is automatically called with
//         // the result set
//         var script = document.createElement("script");
//         // We might need to supply a key for this or else we might run into
//         // quota limits.
//         script.src = 'https://www.googleapis.com/books/v1/volumes?q='
//           + encodeURIComponent(query) + '&filter=partial'
//           + '&callback=handleResults';
//         script.type = "text/javascript";
//         document.getElementsByTagName("head")[0].appendChild(script);
//       }

//       function handleResults(root) {
//         // Find the identifier of the first embeddable match
//         // If none found, report an error
//         var entries = root.items || [];

//         for (var i = 0; i < entries.length; ++i) {
//           var entry = entries[i];
//           var isEmbeddable = entry.accessInfo.embeddable;
//           var identifier = entry.id;

//           if (isEmbeddable) {
//             loadBook(identifier);
//             return;
//           }
//         }

//         showStatus('Could not find a match');
//       }

//       function loadBook(identifier) {
//         // Load the Embedded Viewer API, calling showBook when it's ready
//         var callbackFn = function() { showBook(identifier); };
//         google.books.load({ "callback" : callbackFn });
//       }

//       function showBook(identifier) {
//         // We have the book ID, API is loaded, now just show it
//         var canvas = document.getElementById('viewerCanvas');
//         viewer = new google.books.DefaultViewer(canvas);
//         viewer.load(identifier);

//         showCanvas(true);
//         showStatus('');
//       }

//       function showCanvas(showing) {
//         var canvasDiv = document.getElementById('viewerCanvas');
//         canvasDiv.style.display =  (showing) ? 'block' : 'none';
//       }

//       function showStatus(string) {
//         var statusDiv = document.getElementById('viewerStatus');
//         var showing = !(string == null || string.length == 0);
//         if (statusDiv.firstChild) {
//           statusDiv.removeChild(statusDiv.firstChild);
//         }
//         statusDiv.appendChild(document.createTextNode((showing) ? string : ''));
//         statusDiv.style.display =  (showing) ? 'block' : 'none';
//       }
// <form name="inputForm" onsubmit="openBookByTitle(this.query.value); return false;" method="get">
//       <input type="text" size="30" name="query" value="Pride and Prejudice">
//       <input type="submit" value="Go!">
//     </form>
//     <div id="viewerStatus" style="padding: 5px; background-color: rgb(238, 238, 238); display: block;">Searching for Pride and Prejudice...</div>
//       <div id="viewerCanvas" style="width: 500px; height: 400px; display: none"></div>
//     <script>openBookByTitle('Pride and Prejudice');</script>

// {
//   "kind": "books#volumes",
//   "totalItems": 3347,
//   "items": [
//     {
//       "kind": "books#volume",
//       "id": "be2XOQ2sB_EC",
//       "etag": "w1Vanzi9LGo",
//       "selfLink": "https://content-books.googleapis.com/books/v1/volumes/be2XOQ2sB_EC",
//       "volumeInfo": {
//         "title": "Cooked",
//         "subtitle": "A Natural History of Transformation",
//         "authors": [
//           "Michael Pollan"
//         ],
//         "publisher": "Penguin UK",
//         "publishedDate": "2013-04-23",
//         "description": "THE INSPIRATION FOR THE NEW NETFLIX SERIES 'It's not often that a life-changing book falls into one's lap ... Yet Michael Pollan's Cooked is one of them.' SundayTelegraph 'This is a love song to old, slow kitchen skills at their delicious best' Kathryn Huges, GUARDIAN BOOKS OF THE YEAR The New York Times Top Five Bestseller - Michael Pollan's uniquely enjoyable quest to understand the transformative magic of cooking Michael Pollan's Cooked takes us back to basics and first principles: cooking with fire, with water, with air and with earth. Meeting cooks from all over the world, who share their wisdom and stories, Pollan shows how cooking is at the heart of our culture and that when it gets down to it, it also fundamentally shapes our lives. Filled with fascinating facts and curious, mouthwatering tales from cast of eccentrics, Cooked explores the deepest mysteries of how and why we cook.",
//         "industryIdentifiers": [
//           {
//             "type": "ISBN_13",
//             "identifier": "9780141975634"
//           },
//           {
//             "type": "ISBN_10",
//             "identifier": "0141975636"
//           }
//         ],
//         "readingModes": {
//           "text": true,
//           "image": false
//         },
//         "pageCount": 480,
//         "printType": "BOOK",
//         "categories": [
//           "Technology & Engineering"
//         ],
//         "averageRating": 4,
//         "ratingsCount": 33,
//         "maturityRating": "NOT_MATURE",
//         "allowAnonLogging": true,
//         "contentVersion": "1.13.14.0.preview.2",
//         "panelizationSummary": {
//           "containsEpubBubbles": false,
//           "containsImageBubbles": false
//         },
//         "imageLinks": {
//           "smallThumbnail": "http://books.google.com/books/content?id=be2XOQ2sB_EC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
//           "thumbnail": "http://books.google.com/books/content?id=be2XOQ2sB_EC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
//         },
//         "language": "en",
//         "previewLink": "http://books.google.com/books?id=be2XOQ2sB_EC&printsec=frontcover&dq=cooking&hl=&as_ebook=1&cd=1&source=gbs_api",
//         "infoLink": "http://books.google.com/books?id=be2XOQ2sB_EC&dq=cooking&hl=&as_ebook=1&source=gbs_api",
//         "canonicalVolumeLink": "https://books.google.com/books/about/Cooked.html?hl=&id=be2XOQ2sB_EC"
//       },
//       "saleInfo": {
//         "country": "US",
//         "saleability": "NOT_FOR_SALE",
//         "isEbook": false
//       },
//       "accessInfo": {
//         "country": "US",
//         "viewability": "PARTIAL",
//         "embeddable": true,
//         "publicDomain": false,
//         "textToSpeechPermission": "ALLOWED",
//         "epub": {
//           "isAvailable": true,
//           "acsTokenLink": "http://books.google.com/books/download/Cooked-sample-epub.acsm?id=be2XOQ2sB_EC&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
//         },
//         "pdf": {
//           "isAvailable": false
//         },
//         "webReaderLink": "http://play.google.com/books/reader?id=be2XOQ2sB_EC&hl=&as_ebook=1&printsec=frontcover&source=gbs_api",
//         "accessViewStatus": "SAMPLE",
//         "quoteSharingAllowed": false
//       },
//       "searchInfo": {
//         "textSnippet": "&#39; SundayTelegraph &#39;This is a love song to old, slow kitchen skills at their delicious best&#39; Kathryn Huges, GUARDIAN BOOKS OF THE YEAR The New York Times Top Five Bestseller - Michael Pollan&#39;s uniquely enjoyable quest to understand the ..."
//       }
//     },
//     {
//       "kind": "books#volume",
//       "id": "Tsv0DwAAQBAJ",
//       "etag": "JVHE6Ogd3Xo",
//       "selfLink": "https://content-books.googleapis.com/books/v1/volumes/Tsv0DwAAQBAJ",
//       "volumeInfo": {
//         "title": "Cook This Book",
//         "subtitle": "Techniques That Teach and Recipes to Repeat: A Cookbook",
//         "authors": [
//           "Molly Baz"
//         ],
//         "publisher": "Clarkson Potter",
//         "publishedDate": "2021-04-20",
//         "description": "NEW YORK TIMES BESTSELLER • A thoroughly modern guide to becoming a better, faster, more creative cook, featuring fun, flavorful recipes anyone can make. NAMED ONE OF THE BEST COOKBOOKS OF THE YEAR BY TASTE OF HOME • “Surprising no one, Molly has written a book as smart, stylish, and entertaining as she is.”—Carla Lalli Music, author of Where Cooking Begins If you seek out, celebrate, and obsess over good food but lack the skills and confidence necessary to make it at home, you’ve just won a ticket to a life filled with supreme deliciousness. Cook This Book is a new kind of foundational cookbook from Molly Baz, who’s here to teach you absolutely everything she knows and equip you with the tools to become a better, more efficient cook. Molly breaks the essentials of cooking down to clear and uncomplicated recipes that deliver big flavor with little effort and a side of education, including dishes like Pastrami Roast Chicken with Schmaltzy Onions and Dill, Chorizo and Chickpea Carbonara, and of course, her signature Cae Sal. But this is not your average cookbook. More than a collection of recipes, Cook This Book teaches you the invaluable superpower of improvisation though visually compelling lessons on such topics as the importance of salt and how to balance flavor, giving you all the tools necessary to make food taste great every time. Throughout, you’ll encounter dozens of QR codes, accessed through the camera app on your smartphone, that link to short technique-driven videos hosted by Molly to help illuminate some of the trickier skills. As Molly says, “Cooking is really fun, I swear. You simply need to set yourself up for success to truly enjoy it.” Cook This Book will help you do just that, inspiring a new generation to find joy in the kitchen and take pride in putting a home-cooked meal on the table, all with the unbridled fun and spirit that only Molly could inspire.",
//         "industryIdentifiers": [
//           {
//             "type": "ISBN_13",
//             "identifier": "9780593138281"
//           },
//           {
//             "type": "ISBN_10",
//             "identifier": "0593138287"
//           }
//         ],
//         "readingModes": {
//           "text": true,
//           "image": false
//         },
//         "pageCount": 320,
//         "printType": "BOOK",
//         "categories": [
//           "Cooking"
//         ],
//         "maturityRating": "NOT_MATURE",
//         "allowAnonLogging": true,
//         "contentVersion": "1.7.4.0.preview.2",
//         "panelizationSummary": {
//           "containsEpubBubbles": false,
//           "containsImageBubbles": false
//         },
//         "imageLinks": {
//           "smallThumbnail": "http://books.google.com/books/content?id=Tsv0DwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
//           "thumbnail": "http://books.google.com/books/content?id=Tsv0DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
//         },
//         "language": "en",
//         "previewLink": "http://books.google.com/books?id=Tsv0DwAAQBAJ&printsec=frontcover&dq=cooking&hl=&as_ebook=1&cd=2&source=gbs_api",
//         "infoLink": "https://play.google.com/store/books/details?id=Tsv0DwAAQBAJ&source=gbs_api",
//         "canonicalVolumeLink": "https://play.google.com/store/books/details?id=Tsv0DwAAQBAJ"
//       },
//       "saleInfo": {
//         "country": "US",
//         "saleability": "FOR_SALE",
//         "isEbook": true,
//         "listPrice": {
//           "amount": 13.99,
//           "currencyCode": "USD"
//         },
//         "retailPrice": {
//           "amount": 13.99,
//           "currencyCode": "USD"
//         },
//         "buyLink": "https://play.google.com/store/books/details?id=Tsv0DwAAQBAJ&rdid=book-Tsv0DwAAQBAJ&rdot=1&source=gbs_api",
//         "offers": [
//           {
//             "finskyOfferType": 1,
//             "listPrice": {
//               "amountInMicros": 13990000,
//               "currencyCode": "USD"
//             },
//             "retailPrice": {
//               "amountInMicros": 13990000,
//               "currencyCode": "USD"
//             },
//             "giftable": true
//           }
//         ]
//       },
//       "accessInfo": {
//         "country": "US",
//         "viewability": "PARTIAL",
//         "embeddable": true,
//         "publicDomain": false,
//         "textToSpeechPermission": "ALLOWED",
//         "epub": {
//           "isAvailable": true,
//           "acsTokenLink": "http://books.google.com/books/download/Cook_This_Book-sample-epub.acsm?id=Tsv0DwAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
//         },
//         "pdf": {
//           "isAvailable": false
//         },
//         "webReaderLink": "http://play.google.com/books/reader?id=Tsv0DwAAQBAJ&hl=&as_ebook=1&printsec=frontcover&source=gbs_api",
//         "accessViewStatus": "SAMPLE",
//         "quoteSharingAllowed": false
//       },
//       "searchInfo": {
//         "textSnippet": "Cook This Book is a new kind of foundational cookbook from Molly Baz, who’s here to teach you absolutely everything she knows and equip you with the tools to become a better, more efficient cook."
//       }
//     },
//     {
//       "kind": "books#volume",
//       "id": "E0aKDwAAQBAJ",
//       "etag": "ldaenaR+G6E",
//       "selfLink": "https://content-books.googleapis.com/books/v1/volumes/E0aKDwAAQBAJ",
//       "volumeInfo": {
//         "title": "The Ultimate Cooking for One Cookbook",
//         "subtitle": "175 Super Easy Recipes Made Just for You",
//         "authors": [
//           "Joanie Zisk"
//         ],
//         "publisher": "Simon and Schuster",
//         "publishedDate": "2019-12-03",
//         "description": "175 single-serving recipes for every solo chef who just wants a satisfying and delicious home-cooked meal for themselves. Cooking for one is harder than it seems and it can leave anyone wanting to make a healthy, tasty meal either throwing out extra helpings or watching expensive ingredients expire. But it’s possible to prepare single-serving recipes that are full of flavor, easy to make, and economical if you have the right guide. The Ultimate Cooking for One Cookbook allows you to make a fresh, delicious, home-cooked meal for one without creating a week’s worth of leftovers or leaving an abundance of unused fresh ingredients that quickly go to waste. Each of the 175 single-serving recipes are quick and simple to make and save you both time and money. And while the ingredients are common, the results are anything but. In addition to flavorful meals, this cookbook includes clever ideas of how to reduce food waste and source single servings of fresh ingredients. With The Ultimate Cooking for One Cookbook, cooking solo never needs to be boring (or overwhelming) again whether you live alone or are just looking for a filling and enjoyable meal for yourself.",
//         "industryIdentifiers": [
//           {
//             "type": "ISBN_13",
//             "identifier": "9781507211397"
//           },
//           {
//             "type": "ISBN_10",
//             "identifier": "1507211392"
//           }
//         ],
//         "readingModes": {
//           "text": true,
//           "image": false
//         },
//         "pageCount": 224,
//         "printType": "BOOK",
//         "categories": [
//           "Cooking"
//         ],
//         "maturityRating": "NOT_MATURE",
//         "allowAnonLogging": true,
//         "contentVersion": "1.6.5.0.preview.2",
//         "panelizationSummary": {
//           "containsEpubBubbles": false,
//           "containsImageBubbles": false
//         },
//         "imageLinks": {
//           "smallThumbnail": "http://books.google.com/books/content?id=E0aKDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
//           "thumbnail": "http://books.google.com/books/content?id=E0aKDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
//         },
//         "language": "en",
//         "previewLink": "http://books.google.com/books?id=E0aKDwAAQBAJ&pg=PA1&dq=cooking&hl=&as_ebook=1&cd=3&source=gbs_api",
//         "infoLink": "https://play.google.com/store/books/details?id=E0aKDwAAQBAJ&source=gbs_api",
//         "canonicalVolumeLink": "https://play.google.com/store/books/details?id=E0aKDwAAQBAJ"
//       },
//       "saleInfo": {
//         "country": "US",
//         "saleability": "FOR_SALE",
//         "isEbook": true,
//         "listPrice": {
//           "amount": 14.99,
//           "currencyCode": "USD"
//         },
//         "retailPrice": {
//           "amount": 14.99,
//           "currencyCode": "USD"
//         },
//         "buyLink": "https://play.google.com/store/books/details?id=E0aKDwAAQBAJ&rdid=book-E0aKDwAAQBAJ&rdot=1&source=gbs_api",
//         "offers": [
//           {
//             "finskyOfferType": 1,
//             "listPrice": {
//               "amountInMicros": 14990000,
//               "currencyCode": "USD"
//             },
//             "retailPrice": {
//               "amountInMicros": 14990000,
//               "currencyCode": "USD"
//             },
//             "giftable": true
//           }
//         ]
//       },
//       "accessInfo": {
//         "country": "US",
//         "viewability": "PARTIAL",
//         "embeddable": true,
//         "publicDomain": false,
//         "textToSpeechPermission": "ALLOWED_FOR_ACCESSIBILITY",
//         "epub": {
//           "isAvailable": true,
//           "acsTokenLink": "http://books.google.com/books/download/The_Ultimate_Cooking_for_One_Cookbook-sample-epub.acsm?id=E0aKDwAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
//         },
//         "pdf": {
//           "isAvailable": false
//         },
//         "webReaderLink": "http://play.google.com/books/reader?id=E0aKDwAAQBAJ&hl=&as_ebook=1&printsec=frontcover&source=gbs_api",
//         "accessViewStatus": "SAMPLE",
//         "quoteSharingAllowed": false
//       },
//       "searchInfo": {
//         "textSnippet": "But it’s possible to prepare single-serving recipes that are full of flavor, easy to make, and economical if you have the right guide."
//       }
//     },
//     {
//       "kind": "books#volume",
//       "id": "VIdKCgAAQBAJ",
//       "etag": "BAYsbqIW1OI",
//       "selfLink": "https://content-books.googleapis.com/books/v1/volumes/VIdKCgAAQBAJ",
//       "volumeInfo": {
//         "title": "The Complete Cooking for Two Cookbook",
//         "subtitle": "650 Recipes for Everything You'll Ever Want to Make",
//         "authors": [
//           "America's Test Kitchen"
//         ],
//         "publisher": "America's Test Kitchen",
//         "publishedDate": "2014-04-01",
//         "description": "50 Recipes for EVERYTHING You'll Ever Want to Make. Because smaller families shouldn't have to rely on recipes built for four or six, America's Test Kitchen has reengineered 650 of our best recipes to serve just two. Over the years we've discovered that scaling down a recipe isn't as simple as cutting the ingredients in half—cooking times, temperatures, and equipment need to be adapted as well. This comprehensive cookbook takes the guesswork out of cooking for two so you can be sure that anything you want to make—from Classic Beef Stew to Lasagna to a mini batch of Fudgy Brownies or a Fluffy Yellow Layer Cake—will come out right (and perfectly proportioned) every time. We'll also give you options when you're short on time. 150 recipes, including Chicken Saltimbocca and Pan-Seared Rib-Eye Steaks with Sweet-Tart Red Wine Sauce, can be on the table in 30 minutes or less. For those times when you want healthier fare, we've provided more than 100 recipes labeled \"Light\" such as Provencal Vegetable Soup and Poached Shrimp Salad with Avocado and Grapefruit, each with nutritional information listed in an easy-to-read chart in the back of the book. And we include chapters on for-two slow cooking, grilling, and baking pies, quick breads, cakes, and cookies. A 25-page manual teaches the basics of cooking for two, including clever shopping strategies to reduce waste, smart storage tricks help extend freshness of key ingredients, and our picks for the most useful kitchen equipment for any two-person household.",
//         "industryIdentifiers": [
//           {
//             "type": "ISBN_13",
//             "identifier": "9781940352039"
//           },
//           {
//             "type": "ISBN_10",
//             "identifier": "1940352037"
//           }
//         ],
//         "readingModes": {
//           "text": true,
//           "image": true
//         },
//         "pageCount": 440,
//         "printType": "BOOK",
//         "categories": [
//           "Cooking"
//         ],
//         "averageRating": 4.5,
//         "ratingsCount": 3,
//         "maturityRating": "NOT_MATURE",
//         "allowAnonLogging": true,
//         "contentVersion": "1.5.5.0.preview.3",
//         "panelizationSummary": {
//           "containsEpubBubbles": false,
//           "containsImageBubbles": false
//         },
//         "imageLinks": {
//           "smallThumbnail": "http://books.google.com/books/content?id=VIdKCgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
//           "thumbnail": "http://books.google.com/books/content?id=VIdKCgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
//         },
//         "language": "en",
//         "previewLink": "http://books.google.com/books?id=VIdKCgAAQBAJ&pg=PA1&dq=cooking&hl=&as_ebook=1&cd=4&source=gbs_api",
//         "infoLink": "https://play.google.com/store/books/details?id=VIdKCgAAQBAJ&source=gbs_api",
//         "canonicalVolumeLink": "https://play.google.com/store/books/details?id=VIdKCgAAQBAJ"
//       },
//       "saleInfo": {
//         "country": "US",
//         "saleability": "FOR_SALE",
//         "isEbook": true,
//         "listPrice": {
//           "amount": 17.99,
//           "currencyCode": "USD"
//         },
//         "retailPrice": {
//           "amount": 17.99,
//           "currencyCode": "USD"
//         },
//         "buyLink": "https://play.google.com/store/books/details?id=VIdKCgAAQBAJ&rdid=book-VIdKCgAAQBAJ&rdot=1&source=gbs_api",
//         "offers": [
//           {
//             "finskyOfferType": 1,
//             "listPrice": {
//               "amountInMicros": 17990000,
//               "currencyCode": "USD"
//             },
//             "retailPrice": {
//               "amountInMicros": 17990000,
//               "currencyCode": "USD"
//             },
//             "giftable": true
//           }
//         ]
//       },
//       "accessInfo": {
//         "country": "US",
//         "viewability": "PARTIAL",
//         "embeddable": true,
//         "publicDomain": false,
//         "textToSpeechPermission": "ALLOWED",
//         "epub": {
//           "isAvailable": true,
//           "acsTokenLink": "http://books.google.com/books/download/The_Complete_Cooking_for_Two_Cookbook-sample-epub.acsm?id=VIdKCgAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
//         },
//         "pdf": {
//           "isAvailable": true,
//           "acsTokenLink": "http://books.google.com/books/download/The_Complete_Cooking_for_Two_Cookbook-sample-pdf.acsm?id=VIdKCgAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
//         },
//         "webReaderLink": "http://play.google.com/books/reader?id=VIdKCgAAQBAJ&hl=&as_ebook=1&printsec=frontcover&source=gbs_api",
//         "accessViewStatus": "SAMPLE",
//         "quoteSharingAllowed": false
//       },
//       "searchInfo": {
//         "textSnippet": "For those times when you want healthier fare, we&#39;ve provided more than 100 recipes labeled &quot;Light&quot; such as Provencal Vegetable Soup and Poached Shrimp Salad with Avocado and Grapefruit, each with nutritional information listed in an easy-to ..."
//       }
//     },
//     {
//       "kind": "books#volume",
//       "id": "NV5xDwAAQBAJ",
//       "etag": "v10eoq/haNQ",
//       "selfLink": "https://content-books.googleapis.com/books/v1/volumes/NV5xDwAAQBAJ",
//       "volumeInfo": {
//         "title": "From Crook to Cook",
//         "subtitle": "Platinum Recipes from Tha Boss Dogg's Kitchen",
//         "authors": [
//           "Snoop Dogg"
//         ],
//         "publisher": "Chronicle Books",
//         "publishedDate": "2018-10-23",
//         "description": "Welcome to tha Boss Dogg's Kitchen The first cookbook and recipe book from Tha Dogg: You've seen Snoop work his culinary magic on VH1's Emmy-nominated Martha and Snoop's Potluck Dinner Party, and now, Tha Dogg's up in your kitchen...with his first cookbook. Recipe book that delivers 50 recipes straight from Snoop's own collection: Snoop's cookbook features OG staples like Baked Mac & Cheese and Fried Bologna Sandwiches with Chips, and new takes on classic weeknight faves like Soft Flour Tacos and Easy Orange Chicken. And it don't stop...Snoop's giving a taste of the high life with remixes on upper echelon fare such as Lobster Thermidor and Filet Mignon. But we gotta keep it G with those favorite munchies too, ya know? From chewy Starbursts to those glorious Frito BBQ Twists, you should have an arsenal of snacks that'll satisfy. And of course, no party is complete without that Gin and Juice and other platinum ways to entertain. If you're a fan of celebrity cookbooks such as Bob's Burgers, Magnolia Table Cookbook, Margaritaville cookbook, or the Gilmore Girls Eat Like a Gilmore; the Doggfather's got you covered – complete with epic stories and behind-the-scenes photos that bring his masterpieces to life.",
//         "industryIdentifiers": [
//           {
//             "type": "ISBN_13",
//             "identifier": "9781452180861"
//           },
//           {
//             "type": "ISBN_10",
//             "identifier": "1452180865"
//           }
//         ],
//         "readingModes": {
//           "text": true,
//           "image": true
//         },
//         "pageCount": 160,
//         "printType": "BOOK",
//         "categories": [
//           "Cooking"
//         ],
//         "averageRating": 5,
//         "ratingsCount": 1,
//         "maturityRating": "NOT_MATURE",
//         "allowAnonLogging": true,
//         "contentVersion": "1.6.5.0.preview.3",
//         "panelizationSummary": {
//           "containsEpubBubbles": false,
//           "containsImageBubbles": false
//         },
//         "imageLinks": {
//           "smallThumbnail": "http://books.google.com/books/content?id=NV5xDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
//           "thumbnail": "http://books.google.com/books/content?id=NV5xDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
//         },
//         "language": "en",
//         "previewLink": "http://books.google.com/books?id=NV5xDwAAQBAJ&printsec=frontcover&dq=cooking&hl=&as_ebook=1&cd=5&source=gbs_api",
//         "infoLink": "https://play.google.com/store/books/details?id=NV5xDwAAQBAJ&source=gbs_api",
//         "canonicalVolumeLink": "https://play.google.com/store/books/details?id=NV5xDwAAQBAJ"
//       },
//       "saleInfo": {
//         "country": "US",
//         "saleability": "FOR_SALE",
//         "isEbook": true,
//         "listPrice": {
//           "amount": 15.99,
//           "currencyCode": "USD"
//         },
//         "retailPrice": {
//           "amount": 9.99,
//           "currencyCode": "USD"
//         },
//         "buyLink": "https://play.google.com/store/books/details?id=NV5xDwAAQBAJ&rdid=book-NV5xDwAAQBAJ&rdot=1&source=gbs_api",
//         "offers": [
//           {
//             "finskyOfferType": 1,
//             "listPrice": {
//               "amountInMicros": 15990000,
//               "currencyCode": "USD"
//             },
//             "retailPrice": {
//               "amountInMicros": 9990000,
//               "currencyCode": "USD"
//             },
//             "giftable": true
//           }
//         ]
//       },
//       "accessInfo": {
//         "country": "US",
//         "viewability": "PARTIAL",
//         "embeddable": true,
//         "publicDomain": false,
//         "textToSpeechPermission": "ALLOWED",
//         "epub": {
//           "isAvailable": true,
//           "acsTokenLink": "http://books.google.com/books/download/From_Crook_to_Cook-sample-epub.acsm?id=NV5xDwAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
//         },
//         "pdf": {
//           "isAvailable": true,
//           "acsTokenLink": "http://books.google.com/books/download/From_Crook_to_Cook-sample-pdf.acsm?id=NV5xDwAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
//         },
//         "webReaderLink": "http://play.google.com/books/reader?id=NV5xDwAAQBAJ&hl=&as_ebook=1&printsec=frontcover&source=gbs_api",
//         "accessViewStatus": "SAMPLE",
//         "quoteSharingAllowed": false
//       },
//       "searchInfo": {
//         "textSnippet": "Welcome to tha Boss Dogg&#39;s Kitchen The first cookbook and recipe book from Tha Dogg: You&#39;ve seen Snoop work his culinary magic on VH1&#39;s Emmy-nominated Martha and Snoop&#39;s Potluck Dinner Party, and now, Tha Dogg&#39;s up in your kitchen...with ..."
//       }
//     },
//     {
//       "kind": "books#volume",
//       "id": "rx7WDwAAQBAJ",
//       "etag": "nkqaxoYP4uA",
//       "selfLink": "https://content-books.googleapis.com/books/v1/volumes/rx7WDwAAQBAJ",
//       "volumeInfo": {
//         "title": "Science and Cooking: Physics Meets Food, From Homemade to Haute Cuisine",
//         "authors": [
//           "Michael Brenner",
//           "Pia Sörensen",
//           "David Weitz"
//         ],
//         "publisher": "W. W. Norton & Company",
//         "publishedDate": "2020-10-20",
//         "description": "Based on the popular Harvard University and edX course, Science and Cooking explores the scientific basis of why recipes work. The spectacular culinary creations of modern cuisine are the stuff of countless articles and social media feeds. But to a scientist they are also perfect pedagogical explorations into the basic scientific principles of cooking. In Science and Cooking, Harvard professors Michael Brenner, Pia Sörensen, and David Weitz bring the classroom to your kitchen to teach the physics and chemistry underlying every recipe. Why do we knead bread? What determines the temperature at which we cook a steak, or the amount of time our chocolate chip cookies spend in the oven? Science and Cooking answers these questions and more through hands-on experiments and recipes from renowned chefs such as Christina Tosi, Joanne Chang, and Wylie Dufresne, all beautifully illustrated in full color. With engaging introductions from revolutionary chefs and collaborators Ferran Adria and José Andrés, Science and Cooking will change the way you approach both subjects—in your kitchen and beyond.",
//         "industryIdentifiers": [
//           {
//             "type": "ISBN_13",
//             "identifier": "9780393634938"
//           },
//           {
//             "type": "ISBN_10",
//             "identifier": "0393634930"
//           }
//         ],
//         "readingModes": {
//           "text": true,
//           "image": false
//         },
//         "pageCount": 320,
//         "printType": "BOOK",
//         "categories": [
//           "Science"
//         ],
//         "averageRating": 3,
//         "ratingsCount": 1,
//         "maturityRating": "NOT_MATURE",
//         "allowAnonLogging": true,
//         "contentVersion": "1.1.1.0.preview.2",
//         "panelizationSummary": {
//           "containsEpubBubbles": false,
//           "containsImageBubbles": false
//         },
//         "imageLinks": {
//           "smallThumbnail": "http://books.google.com/books/content?id=rx7WDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
//           "thumbnail": "http://books.google.com/books/content?id=rx7WDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
//         },
//         "language": "en",
//         "previewLink": "http://books.google.com/books?id=rx7WDwAAQBAJ&pg=PP1&dq=cooking&hl=&as_ebook=1&cd=6&source=gbs_api",
//         "infoLink": "https://play.google.com/store/books/details?id=rx7WDwAAQBAJ&source=gbs_api",
//         "canonicalVolumeLink": "https://play.google.com/store/books/details?id=rx7WDwAAQBAJ"
//       },
//       "saleInfo": {
//         "country": "US",
//         "saleability": "FOR_SALE",
//         "isEbook": true,
//         "listPrice": {
//           "amount": 29.73,
//           "currencyCode": "USD"
//         },
//         "retailPrice": {
//           "amount": 16.05,
//           "currencyCode": "USD"
//         },
//         "buyLink": "https://play.google.com/store/books/details?id=rx7WDwAAQBAJ&rdid=book-rx7WDwAAQBAJ&rdot=1&source=gbs_api",
//         "offers": [
//           {
//             "finskyOfferType": 1,
//             "listPrice": {
//               "amountInMicros": 29730000,
//               "currencyCode": "USD"
//             },
//             "retailPrice": {
//               "amountInMicros": 16050000,
//               "currencyCode": "USD"
//             },
//             "giftable": true
//           }
//         ]
//       },
//       "accessInfo": {
//         "country": "US",
//         "viewability": "PARTIAL",
//         "embeddable": true,
//         "publicDomain": false,
//         "textToSpeechPermission": "ALLOWED",
//         "epub": {
//           "isAvailable": true,
//           "acsTokenLink": "http://books.google.com/books/download/Science_and_Cooking_Physics_Meets_Food_F-sample-epub.acsm?id=rx7WDwAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
//         },
//         "pdf": {
//           "isAvailable": false
//         },
//         "webReaderLink": "http://play.google.com/books/reader?id=rx7WDwAAQBAJ&hl=&as_ebook=1&printsec=frontcover&source=gbs_api",
//         "accessViewStatus": "SAMPLE",
//         "quoteSharingAllowed": false
//       },
//       "searchInfo": {
//         "textSnippet": "In Science and Cooking, Harvard professors Michael Brenner, Pia Sörensen, and David Weitz bring the classroom to your kitchen to teach the physics and chemistry underlying every recipe. Why do we knead bread?"
//       }
//     },
//     {
//       "kind": "books#volume",
//       "id": "ukkVAwAAQBAJ",
//       "etag": "V4W/c74uDnU",
//       "selfLink": "https://content-books.googleapis.com/books/v1/volumes/ukkVAwAAQBAJ",
//       "volumeInfo": {
//         "title": "Mastering the Art of French Cooking",
//         "authors": [
//           "Julia Child"
//         ],
//         "publisher": "Рипол Классик",
//         "publishedDate": "1976",
//         "description": "Anyone can cook in the French manner anywhere, wrote Mesdames Beck, Bertholle, and Child, with the right instruction. And here is the book that, for forty years, has been teaching Americans how.Mastering the Art of French Cooking is for both seasoned cooks and beginners who love good food and long to reproduce at home the savory delights of the classic cuisine, from the historic Gallic masterpieces to the seemingly artless perfection of a dish of spring-green peas. This beautiful book, with more than one hundred instructive illustrations, is revolutionary in its approach because: It leads the cook infallibly from the buying and handling of raw ingredients, through each essential step of a recipe, to the final creation of a delicate confection. It breaks down the classic cuisine into a logical sequence of themes and variations rather than presenting an endless and diffuse catalogue of recipes; the focus is on key recipes that form the backbone of French cookery and lend themselves to an infinite number of elaborations bound to increase anyone s culinary repertoire.",
//         "industryIdentifiers": [
//           {
//             "type": "ISBN_13",
//             "identifier": "9785879620764"
//           },
//           {
//             "type": "ISBN_10",
//             "identifier": "587962076X"
//           }
//         ],
//         "readingModes": {
//           "text": false,
//           "image": true
//         },
//         "printType": "BOOK",
//         "categories": [
//           "Cooking"
//         ],
//         "averageRating": 4.5,
//         "ratingsCount": 25,
//         "maturityRating": "NOT_MATURE",
//         "allowAnonLogging": true,
//         "contentVersion": "0.0.1.0.preview.1",
//         "panelizationSummary": {
//           "containsEpubBubbles": false,
//           "containsImageBubbles": false
//         },
//         "imageLinks": {
//           "smallThumbnail": "http://books.google.com/books/content?id=ukkVAwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
//           "thumbnail": "http://books.google.com/books/content?id=ukkVAwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
//         },
//         "language": "en",
//         "previewLink": "http://books.google.com/books?id=ukkVAwAAQBAJ&printsec=frontcover&dq=cooking&hl=&as_ebook=1&cd=7&source=gbs_api",
//         "infoLink": "https://play.google.com/store/books/details?id=ukkVAwAAQBAJ&source=gbs_api",
//         "canonicalVolumeLink": "https://play.google.com/store/books/details?id=ukkVAwAAQBAJ"
//       },
//       "saleInfo": {
//         "country": "US",
//         "saleability": "FOR_SALE",
//         "isEbook": true,
//         "listPrice": {
//           "amount": 8.18,
//           "currencyCode": "USD"
//         },
//         "retailPrice": {
//           "amount": 8.18,
//           "currencyCode": "USD"
//         },
//         "buyLink": "https://play.google.com/store/books/details?id=ukkVAwAAQBAJ&rdid=book-ukkVAwAAQBAJ&rdot=1&source=gbs_api",
//         "offers": [
//           {
//             "finskyOfferType": 1,
//             "listPrice": {
//               "amountInMicros": 8180000,
//               "currencyCode": "USD"
//             },
//             "retailPrice": {
//               "amountInMicros": 8180000,
//               "currencyCode": "USD"
//             },
//             "giftable": true
//           }
//         ]
//       },
//       "accessInfo": {
//         "country": "US",
//         "viewability": "PARTIAL",
//         "embeddable": true,
//         "publicDomain": false,
//         "textToSpeechPermission": "ALLOWED",
//         "epub": {
//           "isAvailable": false
//         },
//         "pdf": {
//           "isAvailable": true,
//           "acsTokenLink": "http://books.google.com/books/download/Mastering_the_Art_of_French_Cooking-sample-pdf.acsm?id=ukkVAwAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
//         },
//         "webReaderLink": "http://play.google.com/books/reader?id=ukkVAwAAQBAJ&hl=&as_ebook=1&printsec=frontcover&source=gbs_api",
//         "accessViewStatus": "SAMPLE",
//         "quoteSharingAllowed": false
//       },
//       "searchInfo": {
//         "textSnippet": "And here is the book that, for forty years, has been teaching Americans how.Mastering the Art of French Cooking is for both seasoned cooks and beginners who love good food and long to reproduce at home the savory delights of the classic ..."
//       }
//     },
//     {
//       "kind": "books#volume",
//       "id": "JCiMDAAAQBAJ",
//       "etag": "UlXf03Moqo0",
//       "selfLink": "https://content-books.googleapis.com/books/v1/volumes/JCiMDAAAQBAJ",
//       "volumeInfo": {
//         "title": "Salt, Fat, Acid, Heat",
//         "subtitle": "Mastering the Elements of Good Cooking",
//         "authors": [
//           "Samin Nosrat"
//         ],
//         "publisher": "Simon and Schuster",
//         "publishedDate": "2017-04-25",
//         "description": "Now a Netflix series! New York Times Bestseller and Winner of the 2018 James Beard Award for Best General Cookbook and multiple IACP Cookbook Awards Named one of the Best Books of 2017 by: NPR, BuzzFeed, The Atlantic, The Washington Post, Chicago Tribune, Rachel Ray Every Day, San Francisco Chronicle, Vice Munchies, Elle.com, Glamour, Eater, Newsday, Minneapolis Star Tribune, The Seattle Times, Tampa Bay Times, Tasting Table, Modern Farmer, Publishers Weekly, and more. A visionary new master class in cooking that distills decades of professional experience into just four simple elements, from the woman declared “America’s next great cooking teacher” by Alice Waters. In the tradition of The Joy of Cooking and How to Cook Everything comes Salt, Fat, Acid, Heat, an ambitious new approach to cooking by a major new culinary voice. Chef and writer Samin Nosrat has taught everyone from professional chefs to middle school kids to author Michael Pollan to cook using her revolutionary, yet simple, philosophy. Master the use of just four elements—Salt, which enhances flavor; Fat, which delivers flavor and generates texture; Acid, which balances flavor; and Heat, which ultimately determines the texture of food—and anything you cook will be delicious. By explaining the hows and whys of good cooking, Salt, Fat, Acid, Heat will teach and inspire a new generation of cooks how to confidently make better decisions in the kitchen and cook delicious meals with any ingredients, anywhere, at any time. Echoing Samin’s own journey from culinary novice to award-winning chef, Salt, Fat Acid, Heat immediately bridges the gap between home and professional kitchens. With charming narrative, illustrated walkthroughs, and a lighthearted approach to kitchen science, Samin demystifies the four elements of good cooking for everyone. Refer to the canon of 100 essential recipes—and dozens of variations—to put the lessons into practice and make bright, balanced vinaigrettes, perfectly caramelized roast vegetables, tender braised meats, and light, flaky pastry doughs. Featuring 150 illustrations and infographics that reveal an atlas to the world of flavor by renowned illustrator Wendy MacNaughton, Salt, Fat, Acid, Heat will be your compass in the kitchen. Destined to be a classic, it just might be the last cookbook you’ll ever need. With a foreword by Michael Pollan.",
//         "industryIdentifiers": [
//           {
//             "type": "ISBN_13",
//             "identifier": "9781476753850"
//           },
//           {
//             "type": "ISBN_10",
//             "identifier": "1476753857"
//           }
//         ],
//         "readingModes": {
//           "text": true,
//           "image": false
//         },
//         "pageCount": 480,
//         "printType": "BOOK",
//         "categories": [
//           "Cooking"
//         ],
//         "averageRating": 4,
//         "ratingsCount": 7,
//         "maturityRating": "NOT_MATURE",
//         "allowAnonLogging": true,
//         "contentVersion": "1.18.14.0.preview.2",
//         "panelizationSummary": {
//           "containsEpubBubbles": false,
//           "containsImageBubbles": false
//         },
//         "imageLinks": {
//           "smallThumbnail": "http://books.google.com/books/content?id=JCiMDAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
//           "thumbnail": "http://books.google.com/books/content?id=JCiMDAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
//         },
//         "language": "en",
//         "previewLink": "http://books.google.com/books?id=JCiMDAAAQBAJ&printsec=frontcover&dq=cooking&hl=&as_ebook=1&cd=8&source=gbs_api",
//         "infoLink": "https://play.google.com/store/books/details?id=JCiMDAAAQBAJ&source=gbs_api",
//         "canonicalVolumeLink": "https://play.google.com/store/books/details?id=JCiMDAAAQBAJ"
//       },
//       "saleInfo": {
//         "country": "US",
//         "saleability": "FOR_SALE",
//         "isEbook": true,
//         "listPrice": {
//           "amount": 19.99,
//           "currencyCode": "USD"
//         },
//         "retailPrice": {
//           "amount": 19.99,
//           "currencyCode": "USD"
//         },
//         "buyLink": "https://play.google.com/store/books/details?id=JCiMDAAAQBAJ&rdid=book-JCiMDAAAQBAJ&rdot=1&source=gbs_api",
//         "offers": [
//           {
//             "finskyOfferType": 1,
//             "listPrice": {
//               "amountInMicros": 19990000,
//               "currencyCode": "USD"
//             },
//             "retailPrice": {
//               "amountInMicros": 19990000,
//               "currencyCode": "USD"
//             },
//             "giftable": true
//           }
//         ]
//       },
//       "accessInfo": {
//         "country": "US",
//         "viewability": "PARTIAL",
//         "embeddable": true,
//         "publicDomain": false,
//         "textToSpeechPermission": "ALLOWED_FOR_ACCESSIBILITY",
//         "epub": {
//           "isAvailable": true,
//           "acsTokenLink": "http://books.google.com/books/download/Salt_Fat_Acid_Heat-sample-epub.acsm?id=JCiMDAAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
//         },
//         "pdf": {
//           "isAvailable": false
//         },
//         "webReaderLink": "http://play.google.com/books/reader?id=JCiMDAAAQBAJ&hl=&as_ebook=1&printsec=frontcover&source=gbs_api",
//         "accessViewStatus": "SAMPLE",
//         "quoteSharingAllowed": false
//       },
//       "searchInfo": {
//         "textSnippet": "New York Times Bestseller and Winner of the 2018 James Beard Award for Best General Cookbook and multiple IACP Cookbook Awards Named one of the Best Books of 2017 by: NPR, BuzzFeed, The Atlantic, The Washington Post, Chicago Tribune, Rachel ..."
//       }
//     },
//     {
//       "kind": "books#volume",
//       "id": "zcDQDwAAQBAJ",
//       "etag": "fVZS1EFn3ig",
//       "selfLink": "https://content-books.googleapis.com/books/v1/volumes/zcDQDwAAQBAJ",
//       "volumeInfo": {
//         "title": "Cooking for One",
//         "subtitle": "Scaled Recipes, No-Waste Solutions, and Time-Saving Tips",
//         "authors": [
//           "America's Test Kitchen"
//         ],
//         "publisher": "America's Test Kitchen",
//         "publishedDate": "2020-09-01",
//         "description": "Discover the joy of cooking for yourself with more than 160 perfectly portioned, easy-to-execute recipes, flexible ingredient lists to accommodate your pantry, and ideas for improvising to your taste. Taking care to prepare a meal for yourself is a different experience than cooking for others. It can be a fun, casual, and (of course) delicious affair, but there are challenges, from avoiding a fridge full of half-used ingredients to ending up with leftovers that become boring after the third reheat. Cooking for One helps you make cooking for yourself special without becoming a chore with unfussy yet utterly appealing meals that rely on ingredients you already have on hand, like Garam Masala Pork Chop with Couscous and Spinach and Weeknight Chicken Cacciatore. Don't have exactly the right ingredients? Never fear--with a \"Kitchen Improv\" box on every page, we offer ideas for altering the dish so it works for you. And for those weeks you didn't make it to the supermarket, we use a \"Pantry Recipe\" icon to clearly mark recipes that rely entirely on our checklist for a well-stocked pantry. We show you when it's worth making two servings (but never more) with our \"Makes Leftovers\" icon, and suggest how to transform those leftovers into a whole new meal. (We love our Spice-Rubbed Flank Steak with Celery Root and Lime Yogurt Sauce served over arugula as a hearty salad the next day.) Ingredients themselves often lead you to another exciting meal--when you're left with half an eggplant from Simple Ratatouille, we direct you to Broiled Eggplant with Honey-Lemon Vinaigrette as the perfect way to use it up. And if the thought of a sink full of dishes keeps you out of the kitchen, there are plenty of appealing one-pan dinners like Sheet Pan Sausages with Sweet Potatoes, Broccoli Rabe, and Mustard-Chive Butter or Couscous with Shrimp, Cilantro, and Garlic Chips that are here to save the day.",
//         "industryIdentifiers": [
//           {
//             "type": "ISBN_13",
//             "identifier": "9781948703291"
//           },
//           {
//             "type": "ISBN_10",
//             "identifier": "1948703297"
//           }
//         ],
//         "readingModes": {
//           "text": true,
//           "image": true
//         },
//         "pageCount": 352,
//         "printType": "BOOK",
//         "categories": [
//           "Cooking"
//         ],
//         "averageRating": 5,
//         "ratingsCount": 1,
//         "maturityRating": "NOT_MATURE",
//         "allowAnonLogging": true,
//         "contentVersion": "1.2.2.0.preview.3",
//         "panelizationSummary": {
//           "containsEpubBubbles": false,
//           "containsImageBubbles": false
//         },
//         "imageLinks": {
//           "smallThumbnail": "http://books.google.com/books/content?id=zcDQDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
//           "thumbnail": "http://books.google.com/books/content?id=zcDQDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
//         },
//         "language": "en",
//         "previewLink": "http://books.google.com/books?id=zcDQDwAAQBAJ&printsec=frontcover&dq=cooking&hl=&as_ebook=1&cd=9&source=gbs_api",
//         "infoLink": "https://play.google.com/store/books/details?id=zcDQDwAAQBAJ&source=gbs_api",
//         "canonicalVolumeLink": "https://play.google.com/store/books/details?id=zcDQDwAAQBAJ"
//       },
//       "saleInfo": {
//         "country": "US",
//         "saleability": "FOR_SALE",
//         "isEbook": true,
//         "listPrice": {
//           "amount": 17.99,
//           "currencyCode": "USD"
//         },
//         "retailPrice": {
//           "amount": 17.99,
//           "currencyCode": "USD"
//         },
//         "buyLink": "https://play.google.com/store/books/details?id=zcDQDwAAQBAJ&rdid=book-zcDQDwAAQBAJ&rdot=1&source=gbs_api",
//         "offers": [
//           {
//             "finskyOfferType": 1,
//             "listPrice": {
//               "amountInMicros": 17990000,
//               "currencyCode": "USD"
//             },
//             "retailPrice": {
//               "amountInMicros": 17990000,
//               "currencyCode": "USD"
//             },
//             "giftable": true
//           }
//         ]
//       },
//       "accessInfo": {
//         "country": "US",
//         "viewability": "PARTIAL",
//         "embeddable": true,
//         "publicDomain": false,
//         "textToSpeechPermission": "ALLOWED",
//         "epub": {
//           "isAvailable": true,
//           "acsTokenLink": "http://books.google.com/books/download/Cooking_for_One-sample-epub.acsm?id=zcDQDwAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
//         },
//         "pdf": {
//           "isAvailable": true,
//           "acsTokenLink": "http://books.google.com/books/download/Cooking_for_One-sample-pdf.acsm?id=zcDQDwAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
//         },
//         "webReaderLink": "http://play.google.com/books/reader?id=zcDQDwAAQBAJ&hl=&as_ebook=1&printsec=frontcover&source=gbs_api",
//         "accessViewStatus": "SAMPLE",
//         "quoteSharingAllowed": false
//       },
//       "searchInfo": {
//         "textSnippet": "Cooking for One helps you make cooking for yourself special without becoming a chore with unfussy yet utterly appealing meals that rely on ingredients you already have on hand, like Garam Masala Pork Chop with Couscous and Spinach and ..."
//       }
//     },
//     {
//       "kind": "books#volume",
//       "id": "9Efw2S_NekYC",
//       "etag": "SnOw19UUn5k",
//       "selfLink": "https://content-books.googleapis.com/books/v1/volumes/9Efw2S_NekYC",
//       "volumeInfo": {
//         "title": "The Art of Cooking",
//         "subtitle": "The First Modern Cookery Book",
//         "authors": [
//           "Maestro Martino of Como"
//         ],
//         "publisher": "Univ of California Press",
//         "publishedDate": "2005-01-03",
//         "description": "Maestro Martino of Como has been called the first celebrity chef, and his extraordinary treatise on Renaissance cookery, The Art of Cooking, is the first known culinary guide to specify ingredients, cooking times and techniques, utensils, and amounts. This vibrant document is also essential to understanding the forms of conviviality developed in Central Italy during the Renaissance, as well as their sociopolitical implications. In addition to the original text, this first complete English translation of the work includes a historical essay by Luigi Ballerini and fifty modernized recipes by acclaimed Italian chef Stefania Barzini. The Art of Cooking, unlike the culinary manuals of the time, is a true gastronomic lexicon, surprisingly like a modern cookbook in identifying the quantity and kinds of ingredients in each dish, the proper procedure for cooking them, and the time required, as well as including many of the secrets of a culinary expert. In his lively introduction, Luigi Ballerini places Maestro Martino in the complicated context of his time and place and guides the reader through the complexities of Italian and papal politics. Stefania Barzini's modernized recipes that follow the text bring the tastes of the original dishes into line with modern tastes. Her knowledgeable explanations of how she has adapted the recipes to the contemporary palate are models of their kind and will inspire readers to recreate these classic dishes in their own kitchens. Jeremy Parzen's translation is the first to gather the entire corpus of Martino's legacy.",
//         "industryIdentifiers": [
//           {
//             "type": "ISBN_10",
//             "identifier": "0520928318"
//           },
//           {
//             "type": "ISBN_13",
//             "identifier": "9780520928312"
//           }
//         ],
//         "readingModes": {
//           "text": true,
//           "image": true
//         },
//         "pageCount": 216,
//         "printType": "BOOK",
//         "categories": [
//           "Cooking"
//         ],
//         "averageRating": 3,
//         "ratingsCount": 2,
//         "maturityRating": "NOT_MATURE",
//         "allowAnonLogging": true,
//         "contentVersion": "0.1.3.0.preview.3",
//         "panelizationSummary": {
//           "containsEpubBubbles": false,
//           "containsImageBubbles": false
//         },
//         "imageLinks": {
//           "smallThumbnail": "http://books.google.com/books/content?id=9Efw2S_NekYC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
//           "thumbnail": "http://books.google.com/books/content?id=9Efw2S_NekYC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
//         },
//         "language": "en",
//         "previewLink": "http://books.google.com/books?id=9Efw2S_NekYC&printsec=frontcover&dq=cooking&hl=&as_ebook=1&cd=10&source=gbs_api",
//         "infoLink": "https://play.google.com/store/books/details?id=9Efw2S_NekYC&source=gbs_api",
//         "canonicalVolumeLink": "https://play.google.com/store/books/details?id=9Efw2S_NekYC"
//       },
//       "saleInfo": {
//         "country": "US",
//         "saleability": "FOR_SALE",
//         "isEbook": true,
//         "listPrice": {
//           "amount": 38.95,
//           "currencyCode": "USD"
//         },
//         "retailPrice": {
//           "amount": 38.95,
//           "currencyCode": "USD"
//         },
//         "buyLink": "https://play.google.com/store/books/details?id=9Efw2S_NekYC&rdid=book-9Efw2S_NekYC&rdot=1&source=gbs_api",
//         "offers": [
//           {
//             "finskyOfferType": 1,
//             "listPrice": {
//               "amountInMicros": 38950000,
//               "currencyCode": "USD"
//             },
//             "retailPrice": {
//               "amountInMicros": 38950000,
//               "currencyCode": "USD"
//             },
//             "giftable": true
//           }
//         ]
//       },
//       "accessInfo": {
//         "country": "US",
//         "viewability": "PARTIAL",
//         "embeddable": true,
//         "publicDomain": false,
//         "textToSpeechPermission": "ALLOWED",
//         "epub": {
//           "isAvailable": true,
//           "acsTokenLink": "http://books.google.com/books/download/The_Art_of_Cooking-sample-epub.acsm?id=9Efw2S_NekYC&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
//         },
//         "pdf": {
//           "isAvailable": true,
//           "acsTokenLink": "http://books.google.com/books/download/The_Art_of_Cooking-sample-pdf.acsm?id=9Efw2S_NekYC&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
//         },
//         "webReaderLink": "http://play.google.com/books/reader?id=9Efw2S_NekYC&hl=&as_ebook=1&printsec=frontcover&source=gbs_api",
//         "accessViewStatus": "SAMPLE",
//         "quoteSharingAllowed": false
//       },
//       "searchInfo": {
//         "textSnippet": "The Art of Cooking, unlike the culinary manuals of the time, is a true gastronomic lexicon, surprisingly like a modern cookbook in identifying the quantity and kinds of ingredients in each dish, the proper procedure for cooking them, and ..."
//       }
//     }
//   ]
// }
