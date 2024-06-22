const express = require("express");
const router = express.Router();

// Placeholder route for testing
router.get("/", (req, res) => {
  res.send("Product route");
});

module.exports = router;
