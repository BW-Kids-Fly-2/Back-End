const knex = require("knex");
const config = require("../knexfile.js");

const environment = process.env.DB_ENV || "development";
// const environment = "production";

const db = knex(config[environment]);
module.exports = db;
