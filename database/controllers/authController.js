const User = require("../models/user");
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Set up .env
require("dotenv").config();

// Display public index
exports.auth_index = asyncHandler(async (req, res, next) => {
  res.status(200).json({ msg: "API publica" });
});
// Display auth create form on Post.
exports.auth_create_post = asyncHandler(async (req, res, next) => {
  const { name, email, password, confirmpassword } = await req.body;

  // Validations
  if (!name) {
    // No results.
    return res.status(422).json({ msg: "Nome é obrigatório!" });
  }
  if (!email) {
    // No results.
    return res.status(422).json({ msg: "Email é obrigatório!" });
  }
  if (!password) {
    // No results.
    return res.status(422).json({ msg: "Senha é obrigatório!" });
  }

  if (password !== confirmpassword) {
    return res.status(422).json({ msg: "As senha não conferem!" });
  }

  // Check if user exits.
  const userExists = await User.findOne({ email: email });
  if (userExists) {
    return res
      .status(422)
      .json({ msg: "Email já cadastrado. Ultilize outro email!" });
  }

  // Create password.
  const salt = await bcrypt.genSalt(12);
  const passwordHash = await bcrypt.hash(password, salt);

  // Create user.
  const user = new User({
    name,
    email,
    password: passwordHash,
  });

  try {
    await user.save();

    res.status(201).json({ msg: "Usuário criado com sucesso!" });
  } catch (err) {
    res.status(500).json({ msg: "Erro no servidor!" });
  }
});
