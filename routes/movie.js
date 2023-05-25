const express = require("express"); 
let router = express.Router(); 
const { top_rated, movie_detail, new_rating, remove_rating } = require("../controller/movie"); 

const { requiredJSON } = require("../middleware/movie");


router.get("/top_rated", top_rated); 

router.get("/movie_details", movie_detail ); 

router.get("/new_rating", requiredJSON, new_rating); 

router.get("/remove_rating", requiredJSON, remove_rating); 






module.exports=router;