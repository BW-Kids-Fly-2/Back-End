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
  res.send("KidsFly is spinning up...please wait!");
});

server.get("/api", (req, res) => {
  res.send("/api is spinning up...please wait!");
});

server.get("/api/flights", (req, res) => {
  res.send("To infinity!...And beyond!!!");
});

server.get("/api/trips", (req, res) => {
  res.send("Ooops, nothing to see here!");
});

server.get("/api/auth", (req, res) => {
  res.send("/api/auth is spinning up...please wait!");
});

server.get("/api/users", (req, res) => {
  res.send("/api/users is spinning up...please wait!");
});

server.get("/api/users/assistant", (req, res) => {
  res.send("/api/users/assistant is spinning up...please wait!");
});

server.get("/api/users/parent", (req, res) => {
  res.send("/api/users/parent is spinning up...please wait!");
});

module.exports = server;
