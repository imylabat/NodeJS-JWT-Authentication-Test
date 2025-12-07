// models/ChartData.js
const mongoose = require("mongoose");

const ChartDataSchema = new mongoose.Schema({
  key: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  data: {
    labels: [String],
    values: [Number]
  },
  source: { type: String, required: true }
});

module.exports = mongoose.model("ChartData", ChartDataSchema);
