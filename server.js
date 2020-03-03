// --- DEPPENDENCIES
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

// --- IMPORT ROUTER
const authRouter = require("./auth/auth-router");
const parentRouter = require("./users/parent/parent-router.js");
const assistantRouter = require("./users/assistant/assistant-router.js");
const flightRouter = require("./flight/flight-router.js");
const tripsRouter = require("./trip/trip-router.js");

// --- SERVER
const server = express();

// --- MIDDLEWARE
server.use(express.json());
server.use(helmet());
server.use(cors());

// --- USE ROUTERS
server.use("/api/auth", authRouter);
server.use("/api/users/parent", parentRouter);
server.use("/api/users/assistant", assistantRouter);
server.use("/api/flights", flightRouter);
server.use("/api/trips", tripsRouter);

// --- GET REQUESTS
server.get("/", (req, res) => {
  res.send("Welcome to KidsFly API!");
});

server.get("/api/users", (req, res) => {
  res.send("/api/users is getting ready!");
});

server.get("/api/users/parent", (req, res) => {
  res.send("/api/users/parent is getting ready!");
});

module.exports = server;
