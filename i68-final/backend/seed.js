// seed.js
require("dotenv").config();
const mongoose = require("mongoose");
const ChartData = require("./models/ChartData");

mongoose.connect(process.env.MONGO_URI).then(async () => {
  console.log("Mongo connected. Seeding...");

  await ChartData.deleteMany({});

  await ChartData.insertMany([
    {
      key: "summary",
      title: "AI Diagnostics Adoption (Last 6 Months)",
      data: {
        labels: ["January", "February", "March", "April", "May", "June"],
        values: [12, 19, 25, 33, 38, 45]
      },
      source: "YOUR_ARTICLE_URL"
    },
    {
      key: "reports",
      title: "Hospital Savings Due to AI Screening Tools",
      data: {
        labels: ["Hospital A", "Hospital B", "Hospital C", "Hospital D"],
        values: [15000, 22000, 18000, 27000]
      },
      source: "YOUR_ARTICLE_URL"
    }
  ]);

  console.log("Seeding complete.");
  process.exit(0);
});
