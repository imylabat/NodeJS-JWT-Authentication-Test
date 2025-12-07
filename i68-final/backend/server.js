// server.js
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();

// Connect to MongoDB
connectDB(process.env.MONGO_URI);

// CORS (safe for deployment)
app.use(
  cors({
    origin: "http://localhost:5174",
    methods: "*",
    allowedHeaders: "*",
  })
);



app.use(express.json());

// Routes
app.use("/api/login", require("./routes/auth"));
app.use("/api/chart", require("./routes/charts"));

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
