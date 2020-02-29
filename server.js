// --- DEPPENDENCIES
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

// --- ROUTER

// --- SERVER
const server = express();

// --- MIDDLEWARE
server.use(express.json());
server.use(helmet());
server.use(cors());

server.get("/", (req, res) => {
  res.send("Welcome to KidsFly API!");
});

module.exports = server;
