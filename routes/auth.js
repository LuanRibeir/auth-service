const express = require("express");
const router = express.Router();

/// AUTH ROUTES ///

/* GET public route. */
router.get("/", function (req, res, next) {
  res.status(200).json({ msg: "API publica" });
});

module.exports = router;
