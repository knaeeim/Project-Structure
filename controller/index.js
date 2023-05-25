const movie = require("../data/movie"); 


exports.test = (req, res, next) =>{
    res.json({
        "Message": "Welcome to the Movie Page"
    })
}


exports.most_populer = (req, res, next) =>{
    let page = req.query.page;
    if(page == undefined){
        page = 1;
    }

    let result = movie.filter( movie =>{
        return movie.most_popular
    })

    const indexToStart = (page -1) * 5;
    const end = page * 5;
    result = result.slice(indexToStart, end)

    res.json({
        page,
        result
    })
}



