# LIRI Bot

LIRI is a language interpretation and recognition interface that will search Spotify for songs, Bands in Town for concerts, and OMDB for movies. It takes in parameters in the command line node app and gives you back data.

## Getting Started

### Installing

### Instructions

#### LIRI uses the following commands:

- concert-this
- spotify-this-song
- movie-this
- do-what-it-says

#### What Each Command Should Do

```
'node liri.js concert-this <artist/band name here>' will search the Bands in Town Artist Events API for an artist or band.  It will return the following information.
* Name of the venue
* Venue location
* Date of the Event (use moment to format this as "MM/DD/YYYY")
```

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

- **[Ogonnaya Oshagbemi](https://github.com/PurpleBooth)**

## Acknowledgements
