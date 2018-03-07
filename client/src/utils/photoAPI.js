import axios from "axios";

var movie = "matrix";
// create the query for the URL
var queryURL = "https://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=40e9cece";

// Creating an AJAX call for the specific movie button being clicked

axios.get(queryURL)
    .then(response => console.log(response));


// $.ajax({
//     url: queryURL,
//     method: "GET"
// }).done(function(response) {
//     console.log(response);
// });
