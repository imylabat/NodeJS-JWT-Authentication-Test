// routes/charts.js
const express = require("express");
const router = express.Router();
const authenticateToken = require("../middleware/jwtAuth");
const ChartData = require("../models/ChartData");

// GET charts by key (summary or reports)
router.get("/:id", authenticateToken, async (req, res) => {
  try {
    const chart = await ChartData.findOne({ key: req.params.id });

    if (!chart) {
      return res.status(404).json({ message: "Chart not found" });
    }

    return res.json({
      title: chart.title,
      labels: chart.data.labels,
      values: chart.data.values,
      source: chart.source,
    });
  } catch (err) {
    return res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
