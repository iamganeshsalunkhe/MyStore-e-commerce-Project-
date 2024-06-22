const express = require("express");
const router = express.Router();

// Placeholder route for testing
router.get("/", (req, res) => {
  res.send("Category route");
});

module.exports = router;
