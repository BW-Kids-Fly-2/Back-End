// --- DEPPENDENCIES
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

// --- IMPORT ROUTER
const authRouter = require("./auth/auth-router");

// --- SERVER
const server = express();

// --- MIDDLEWARE
server.use(express.json());
server.use(helmet());
server.use(cors());

server.use("/api/auth", authRouter);

server.get("/", (req, res) => {
  res.send("Welcome to KidsFly API!");
});

server.get("/api/users", (req, res) => {
  res.send("/api/users is spinning up...please wait!");
});

module.exports = server;
