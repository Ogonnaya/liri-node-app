// Linking dotenv file
require("dotenv").config();

var fs = require("fs");
var axios = require("axios)");

var keys = require("./keys.js");

// Linking spotify keys and api
var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);

// Setting index for user inputs
var userInput = process.argv[2];
var userQuestion = process.argv[3];

// Setting functions for user commands
function userCommand(userInput, userQuestion) {
  switch (userInput) {
    case "concert-this":
      concertThis();
      break;
    case "spotify-this-song":
      spotifyThisSong();
      break;
    case "movie-this":
      movieThis();
      break;
    case "do-what-it-says":
      doWhatItSays();
      break;
    default:
      console.log("I don't understand");
      break;
  }
}

function concertThis() {

};

function spotifyThisSong() {

};

function movieThis() {

};

function doWhatItSays() {

};
