const db = require("../database/db-config.js");

module.exports = {
  add,
  find,
  findTripsByParentId,
  findTripsByTripId,
  findByUser,
  findById,
  remove,
  edit
};

function find() {
  return db("trips");
}

function findTripsByParentId(filter) {
  return db("trips").where("trips_parent_id", filter);
}

function findByUser(filter) {
  return db("trips").where("trips.email", filter);
}

function findById(id) {
  return db("trips")
    .where({ id })
    .first();
}

function findTripsByTripId(id) {
  return db("trips")
    .where({ id })
    .first();
}

async function add(user) {
  const [id] = await db("trips").insert(user, "id");

  return findById(id);
}

function remove(id) {
  return db("trips")
    .where("id", id)
    .del();
}

function edit(id, changes) {
  return db("trips")
    .where({ id })
    .update(changes);
}
