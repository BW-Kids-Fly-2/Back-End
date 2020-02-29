const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const Auth = require("./auth-model.js");
const { jwtSecret } = require("./secret");

// --- REGISTER
router.post("/register-parent", (req, res) => {
  let parent = req.body;
  // hash the password
  const hash = bcrypt.hashSync(parent.password, 3);
  parent.password = hash;

  Auth.addParent(parent)
    .then(newParent => {
      res.status(201).json(newParent);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: "There was an error with the server." });
    });
});

module.exports = router;
