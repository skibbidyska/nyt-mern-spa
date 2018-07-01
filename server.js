const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const PORT = 8080;

const articles = require("./routes/api/articles");

const app = express();

//Body Parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Db config
const db = require("./config/keys").mongoURI;

//connect to MongoDb
mongoose.connect(db)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));


//routes


app.use("/api/articles", articles);


app.listen(PORT, () => console.log(`Listneing on PORT: ${PORT}`));