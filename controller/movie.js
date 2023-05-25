const movieDetails = require("../data/movieDetails"); 

exports.top_rated = (req, res, next) => {
    const page = req.query.page; 
    if( page == undefined){
        page = 1; 
    }

    let result = movieDetails.sort((a,b) => {
        return b.vote_average - a.vote_average;
    })

    const indexToStart = (page -1) * 20; 
    const indexToEnd = page * 20 
    res.json(result.slice(indexToStart, indexToEnd));
    
}

exports.movie_details = (req, res, next) =>{
    const movieId = req.params.movieId; 
    const result = movieDetails.find(movie => {
        return movie.id == Number(movieId); 
    });
    if(result == undefined){
        res.json({
            "msg": "Movie Id is not found"
        });
    }else{
        res.json(result);
    }
}

exports.new_rating = (req, res, next) => {
    const movieId =req.params.movieId;
    console.log(movieId);
    const userRating = req.body.value;
    if( userRating < 0.5 || userRating > 10){
        res.json({
            "msg": " Rating Must be within 0.5 to 10"
        })
    }else{
        res.json({
            "msg": "Thank you for submitting the rating",
            "status": 200
        })
    }
}

exports.remove_rating = (req, res, next) => {
    const movieId = req.params.movieId; 
    res.json({
        "msg" : "Rating deleted"
    })
}