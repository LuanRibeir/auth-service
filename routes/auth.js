const express = require("express");
const router = express.Router();

/// AUTH ROUTES ///

/* GET public route. */
router.get("/", auth_controller.auth_index);

module.exports = router;
