const jwt = require("jsonwebtoken");

const { jwtSecret } = require("./secret.js");

module.exports = (req, res, next) => {
  const token = req.headers.authorization;

  if (token) {
    jwt.verify(token, jwtSecret, (err, decodedToken) => {
      if (err) {
        res.status(401).json({ message: "Must be an authorized user" });
      } else {
        req.user = decodedToken;
      }
      next();
    });
  } else {
    res.status(401).json({ message: "Must be an authorized user" });
  }
};
