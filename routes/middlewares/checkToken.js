const jwt = require("jsonwebtoken");

// Set up .env
require("dotenv").config();

// Token Middleware
function checkToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ msg: "Acesso negado!" });
  }

  try {
    const secret = process.env.SECRET;
    console.log(secret);
    console.log(token);

    jwt.verify(token, secret);

    next();
  } catch (error) {
    res.status(400).json({ msg: "Token inválido." });
  }
}

module.exports = checkToken;
