const request = require('request');

const baseQueryParams = `api_key=5d5f2a6e153c3735c24f24d5d47069e1&language=en-US`;
const baseUrl = `https://api.themoviedb.org/3`;
const baseImageUrl = 'https://image.tmdb.org/t/p';

module.exports.getPopularMovies = (callback) => {
    const popularMoviesUrl = `${baseUrl}/movie/popular?api_key=5d5f2a6e153c3735c24f24d5d47069e1&language=en-US&page=1';
    "/v3QyboWRoA4O9RbcsqH8tJMe8EB.jpg`;
    request(popularMoviesUrl, function(error, response, body) {
        if (!error && response.statusCode == 200) {
            result = body;  
            return callback(result, false);
        } else {            
            return callback(null, error);;
        }
    });
}

module.exports.getMovieImage = (imagePath, callback) => {
    const width = 'w200';
    const imageUrl = `${baseImageUrl}/${width}/${imagePath}`;
    const requestSettings = {
        url: imageUrl,
        method: 'GET',
        encoding: null
    };
    request(requestSettings, function(error, response, body) {
        if (!error && response.statusCode == 200) {
            result = body;  
            return callback(result, false);
        } else {            
            return callback(null, error);;
        }
    })
};

module.exports.getMovieDetails = (movieId, callback) => {
    const url = `${baseUrl}/movie/${movieId}?${baseQueryParams}`
    
    request(url, function(error, response, body) {
        if (!error && response.statusCode == 200) {
            result = body;
            return callback(result, false);
        } else {            
            return callback(null, error);;
        }
    })
}

module.exports.searchMovies = (searchString, callback) => {
    const url = `${baseUrl}/search/movie?${baseQueryParams}&query=${searchString}&page=1&include_adult=false`
    request(url, function(error, response, body) {
        if (!error && response.statusCode == 200) {
            result = body;
            return callback(result, false);
        } else {            
            return callback(null, error);;
        }
    })
}

module.exports.getMovieCredits = (movieId, callback) => {
    const url = `${baseUrl}/movie/${movieId}/credits?${baseQueryParams}`
    
    request(url, function(error, response, body) {
        if (!error && response.statusCode == 200) {
            result = body;
            return callback(result, false);
        } else {            
            return callback(null, error);;
        }
    })
}
