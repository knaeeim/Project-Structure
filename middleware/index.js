exports.apiKey = ((req, res, next) =>{
    if(req.query.apiKey != "12345"){
        res.status(401);
        res.json({
            "Message": "Your Requested Key is not valid",
            "Comment": "Please enter a valid Key and Try again"
        })
    }else{
        next();
    }
});