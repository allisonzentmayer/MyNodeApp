const express = require('express');
const app = express();
const tmdb = require('./src/tmdb');
const cors = require('cors');

// allowing undefined to accept calls from browser
const whitelist = ['http://localhost:3000', undefined]
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error(`Not allowed by CORS: ${origin}`))
    }
  }
}

app.use(cors(corsOptions))

app.get('/movies/popular', (req, res) => {
    console.log("Getting popular movies")
    tmdb.getPopularMovies((data, err) => { 
        if (err) return res.status(500).send(err);       
        res.status(200).send(data);
    });
});

app.get('/images/:imagePath', (req, res) => {
    console.log("Getting image")
    tmdb.getMovieImage(req.params.imagePath, (data, err) => { 
        if (err) return res.status(500).send(err);       
        res.status(200).send(data);
    });
});

app.get('/movies/:movieId/details', (req, res) => {
    console.log("Getting movie details")
    tmdb.getMovieDetails(req.params.movieId, (data, err) => { 
        if (err) return res.status(500).send(err);       
        res.status(200).send(data);
    });
});

app.get('/movies/search', (req, res) => {
    console.log("Searching movies")
    tmdb.searchMovies(req.query.searchString, (data, err) => { 
        if (err) return res.status(500).send(err);       
        res.status(200).send(data);
    });
});

app.get('/movies/:movieId/credits', (req, res) => {
    console.log("Getting movie credits")
    tmdb.getMovieCredits(req.params.movieId, (data, err) => { 
        if (err) return res.status(500).send(err);   
        res.status(200).send(data);
    });
});

// export PORT=8080
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`listening on port ${port}`));