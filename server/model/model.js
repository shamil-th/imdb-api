const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    movieId: {
        type: Number,
        required: true
    },
    moviePoster: {
        type: String
    },
    title: {
        type: String,
        required: true
    },
    releaseDate: {
        type: String
    },
    rating: {
        type: Number
    }
})

const Watchlist = mongoose.model('watchlist', schema);
module.exports = Watchlist;