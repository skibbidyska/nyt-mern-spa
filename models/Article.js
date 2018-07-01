const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ArticleSchema = new Schema ({
  title: {
    type: String,
    required: true
  },
  date: {
    type: Date
  },
  url: {
    type: String,
    required: true
  }
});

module.exports = Article = mongoose.model("articles", ArticleSchema);