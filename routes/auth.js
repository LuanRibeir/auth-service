const express = require("express");
const router = express.Router();

// Require controller modules.
const auth_controller = require("../database/controllers/authController");

// Require middlewares.
const checkToken_middleware = require("./middlewares/checkToken");

/// AUTH ROUTES ///

/* GET public route. */
router.get("/", auth_controller.auth_index);

/* GET private route. */
router.get(
  "/user/:id",
  checkToken_middleware,
  auth_controller.auth_index_private,
);

// POST request for creating Auth.
router.post("/create", auth_controller.auth_create_post);

// POST request for login Auth.
router.post("/login", auth_controller.auth_login_post);

module.exports = router;
