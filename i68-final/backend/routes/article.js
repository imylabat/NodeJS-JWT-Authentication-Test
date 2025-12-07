const express = require('express');
const Article = require('../models/Article');
const jwtAuth = require('../middleware/jwtAuth');

const router = express.Router();

router.get('/', jwtAuth, async (req, res) => {
  try {
    const article = await Article.findOne({});
    res.json(article);
  } catch (err) {
    res.status(500).json({ error: 'Server error fetching article.' });
  }
});

module.exports = router;
