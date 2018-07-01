const express = require("express");
const router = express.Router();
const axios = require("axios");


router.get("/test", (req,res) => res.json({msg: "Worked"}));


router.get("/search", (req, res) => {
  axios
    .get("https://api.nytimes.com/svc/search/v2/articlesearch.json", {
      "api-key": " ba2d21139acb46ffa8d93649a3ec7c33"
    })
});

module.exports = router;