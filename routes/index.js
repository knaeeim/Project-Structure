const express = require("express"); 
let router = express.Router(); 
const { most_populer, test } = require("../controller/index");


router.get("/", test)

router.get("/most_populer", most_populer)


module.exports=router;

