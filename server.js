const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const PORT = 8080;

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.get("/", (req, res) => {
  return res.sendFile(path.join(__dirname, 'public', './src/index.js'));
});

app.listen(PORT, () => {
  console.log(`Listening on PORT: ${PORT}.`);
});