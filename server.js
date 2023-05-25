const express = require('express');
const helmet = require('helmet');
const app = express(); 
require("dotenv").config(); 
const moviePage = require("./routes/index");
const movieDetails = require("./routes/movie");

const people = require("./routes/search");
const { apiKey } = require("./middleware/index");


const port = process.env.PORT||3000;
app.use(express.static('Public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(helmet());
app.use(apiKey);



app.use("/", moviePage); 
app.use("/movie", movieDetails); 
app.use("/search", people); 


app.listen(port, () => {
    console.log(`Server listening on ${port}`);
});

