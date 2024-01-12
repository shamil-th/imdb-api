const Watchlist = require('../model/model');

exports.create = (req,res) => {

    const newWatchlist = req.body;
    console.log("new watchlist",newWatchlist);

    const watchlist = new Watchlist({
        movieId : req.body.movieId,
        moviePoster : req.body.moviePoster,
        title : req.body.title,
        releaseDate : req.body.releaseDate,
        rating : req.body.rating
    })
    watchlist
    .save(watchlist)
    .then(data => {
        res.send(data)
    }).catch(err => {
        res.status(500).send({
            message:err.message || "Some error occured during operation"
        })
    })
}

// get all watchlisted movies
exports.find = (req,res) => {
    Watchlist.find()
    .then(watchlist => {
        res.send(watchlist.reverse())
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "error occured while retriving data"
        });
    });
}

exports.delete = (req,res) => {
    const id = req.params.id;

    Watchlist.findByIdAndDelete(id)
    .then(data => {
        if(!data){
            res.status(404).send({ message: `cannot removie movie with id ${id}`})
        }
        else{
            res.send({
                message: "movie removed from watchlist"
            })
        }
    }).catch(err => {
        res.status(500).send({
            message : "could not remove movie from watchlist" + err
        });
    });
}