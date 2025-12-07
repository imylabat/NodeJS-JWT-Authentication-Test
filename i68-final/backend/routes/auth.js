// routes/auth.js
const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();

router.post("/", (req, res) => {
  const { username, password } = req.body;

  // Hardcoded per assignment rules
  if (username !== "isaac" || password !== "isaac") {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const token = jwt.sign(
    { user: "isaac" },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );

  return res.json({ token });
});

module.exports = router;
