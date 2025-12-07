const mongoose = require('mongoose');

const ArticleSchema = new mongoose.Schema({
  title: String,
  url: String,
  summary: String,
  technical: String
});

module.exports = mongoose.model('Article', ArticleSchema);
