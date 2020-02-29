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

// --- LOGIN
router.post("/login-parent", (req, res) => {
  let { email, password } = req.body;

  Auth.findParent(email, password)
    .first()
    .then(parent => {
      console.log(parent);
      if (parent && bcrypt.compareSync(password, parent.password)) {
        const token = signToken(parent);
        res.status(200).json({ token });
      } else {
        res.status(401).json({ message: "Invalid Credentials" });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: "There was an error with the server." });
    });
});

// --- TOKEN
function signToken(user) {
  const payload = {
    id: user.id,
    email: user.email
  };

  const options = {
    expiresIn: "8h"
  };
  return jwt.sign(payload, jwtSecret, options);
}

module.exports = router;
