# LIRI Bot

LIRI is a language interpretation and recognition interface that will search Spotify for songs, Bands in Town for concerts, and OMDB for movies. It takes in parameters in the command line node app and gives you back data.

## Getting Started

### Instructions

#### LIRI uses the following commands:

- concert-this
- spotify-this-song
- movie-this
- do-what-it-says

#### What Each Command Should Do

```
node liri.js concert-this <artist/band name here>
```

This will search the Bands in Town Artist Events API for an artist or band. It will return the following information.

- Name of the venue
- Venue location
- Date of the Event (use moment to format this as "MM/DD/YYYY")

```
node liri.js spotify-this-song <song name here>
```

This shows the following information about the song you provided.

- Artist(s)
- The song's name
- A preview link of the song from Spotify
- The album that the song is from

If no song is provided then the song will default to "The Sign" by Ace of Base.

```
node liri.js movie-this <movie name here>
```

This will output the following information to your terminal/bash window:

- Title of the movie.
- Year the movie came out.
- IMDB Rating of the movie.
- Rotten Tomatoes Rating of the movie.
- Country where the movie was produced.
- Language of the movie.
- Plot of the movie.
- Actors in the movie.

If no movie is provided, the output wil default to the movie 'Mr. Nobody.'

```
node liri.js do-what-it-says
```

Using the `fs` Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.

- It should run `spotify-this-song` for "I Want it That Way," as follows the text in `random.txt`.
- Edit the text in random.txt to test out the feature for movie-this and concert-this.

```
Demo
```

[LIRI Bot Demo](https://github.com/Ogonnaya/liri-node-app/blob/master/liri-bot-demo.mov?raw=true)

## Built With

- Node.js
- Javascript

### NPM Packages

To retrieve the data that will power this app, you'll need to send requests using the the following node packages:

- [Node Spotify API](https://www.npmjs.com/package/node-spotify-api)
- [Axios](https://www.npmjs.com/package/axios)
- [OMDB API](http://www.omdbapi.com)
- [Bands in Town API](http://www.artists.bandsintown.com/bandsintown-api)
- [Moment](https://www.npmjs.com/package/moment)
- [DotEnv](https://www.npmjs.com/package/dotenv)

## Author

- **[Ogonnaya Oshagbemi](https://github.com/Ogonnaya)**
