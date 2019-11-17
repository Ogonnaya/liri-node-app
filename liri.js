// Linking dotenv file
require("dotenv").config();

// Requiring npm packages and apis
var fs = require("fs");
var axios = require("axios"); // Axios for OMDB & Bands in Town
var moment = require("moment"); // Moment for Bands in Town
var keys = require("./keys.js"); // Spotify Keys
var Spotify = require("node-spotify-api"); // Spotify API
var spotify = new Spotify(keys.spotify);

// Setting indexes for user inputs
var userCommand = process.argv[2];
var userInput = process.argv.splice(3, process.argv.length).join(" ");

// Setting up switch statements for commands
function userQuery(userCommand, userInput) {
  switch (userCommand) {
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
      console.log(
        "I don't understand.  Please type one of these commands:\n" +
          "'node liri.js concert-this': to search your favorite artist concerts\n" +
          "'node liri.js spotify-this-song': to search your favorite song\n" +
          "'node liri.js movie-this': to search your favorite movie \n" +
          "'node liri.js do-what-it-says': using command from random.txt \n"
      );
      break;
  }
}
userQuery(userCommand, userInput);

// Setting functions for user commands

// concert-this
function concertThis() {
  var artist = userInput;
  if (!artist) {
    artist = "Taylor Swift";
  }
  var url =
    "https://rest.bandsintown.com/artists/" +
    artist +
    "/events?app_id=codingbootcamp";

  axios.get(url).then(function(response) {
    // console.log(response.data)
    for (var i = 0; i < response.data.length; i++) {
      console.log("Artist: " + artist);
      console.log(
        "Concert Time: " +
          moment(response.data[i].datetime, "YYYY-MM-DDTHH:mm:ss").format(
            "MM/DD/YYYY, h:mm A"
          )
      );
      console.log(
        "Concert Location: " +
          response.data[i].venue.city +
          ", " +
          response.data[i].venue.region +
          ", " +
          response.data[i].venue.country
      );
      console.log("Concert Venue: " + response.data[i].venue.name);
      console.log("--------------------------------------------------");
    }
  });
}

// spotify-this-song
function spotifyThisSong() {
  var song = userInput;
  if (!song) {
    song = "the sign Ace of Base";
  }
  spotify.search({ type: "track", query: song }, function(err, data) {
    if (err) {
      return console.log("Error occurred: " + err);
    }

    //   console.log(data.tracks.items[0]);
    console.log(
      "\n---------------------\nSong Name: " + data.tracks.items[0].name
    );
    console.log("Artist(s) Name: " + data.tracks.items[0].artists[0].name);
    console.log("Album Name: " + data.tracks.items[0].album.name);
    //   data.tracks.items[0].artists.forEach(artist => {
    //       console.log(artist.name)
    //   })
    console.log(
      "Preview URL: " + data.tracks.items[0].preview_url + "\n---------------\n"
    );
  });
}

// movie-this
function movieThis() {
  var movie = userInput;
  if (!movie) {
    movie = "Mr. Nobody";
  }
  var url =
    "http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy";
  axios.get(url).then(function(response) {
    // console.log(response.data)
    console.log("--------------------------\n");
    console.log("Movie Title: " + response.data.Title);
    console.log("Year: " + response.data.Year);
    console.log("IMDB Rating: " + response.data.imdbRating);
    console.log("Rotten Tomatoes: " + response.data.Ratings[1].Value);
    console.log("Country: " + response.data.Country);
    console.log("Language: " + response.data.Language);
    console.log("Plot: " + response.data.Plot);
    console.log("Actors: " + response.data.Actors);
    console.log("\n--------------------------\n");
  });
}

// do-what-it-says
function doWhatItSays() {
  fs.readFile("random.txt", "utf8", function(error, data) {
    //Return error if error occurs.
    if (error) {
      return console.log(error);
    }

    // Then split it by commas (to make it more readable)
    var dataArr = data.split(",");

    //Set pararmeters for do-what-it-says
    userCommand = dataArr[0];
    userInput = dataArr[1];
    userQuery(userCommand, userInput);
  });
}


