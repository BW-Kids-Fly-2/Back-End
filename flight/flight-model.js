const db = require("../database/db-config.js");

module.exports = {
  add,
  find,
  findFlightsByParentId,
  findFlightsImWorking,
  findFlightsNeedingHelp,
  findFlightsByFlightId,
  findById,
  remove,
  edit,
  editFlightAddAssistant
};

function find() {
  return db("flight_info");
}

function findFlightsByParentId(filter) {
  return db("flight_info").where("flight_info_parent_id", filter);
}

function findFlightsImWorking(filter) {
  return db("flight_info as f")
    .where("flight_info_assistant_id_dep", filter)
    .orWhere("flight_info_assistant_id_arr", filter)
    .join("trips as t", "f.flight_info_trips_id", "t.id")
    .select(
      "t.trips_parent_id",
      "f.dep_airport",
      "f.arr_airport",
      "f.airline",
      "f.dep_flight_num",
      "f.arr_flight_num",
      "f.dep_time",
      "f.arr_time",
      "t.kids_traveling",
      "t.checked_bags",
      "t.carryon_bags",
      "t.carseats",
      "t.strollers",
      "t.notes"
    );
}

function findFlightsNeedingHelp() {
  return db("flight_info as f")
    .join("trips as t", "f.flight_info_trips_id", "t.id")
    .select(
      "f.id",
      "f.flight_info_assistant_id_dep",
      "f.flight_info_assistant_id_arr",
      "f.dep_airport",
      "f.arr_airport",
      "f.airline",
      "f.dep_flight_num",
      "f.arr_flight_num",
      "f.dep_time",
      "f.arr_time",
      "t.kids_traveling",
      "t.checked_bags",
      "t.carryon_bags",
      "t.carseats",
      "t.strollers",
      "t.notes",
      "f.help_req_at_dep",
      "f.help_req_at_arr",
      "f.asst_sched_dep_airport",
      "f.asst_sched_arr_airport"
    )
    .where("f.flight_info_assistant_id_dep", 0)
    .orWhere("f.flight_info_assistant_id_arr", 0)
    .orWhere("f.asst_sched_dep_airport", 0)
    .orWhere("f.asst_sched_arr_airport", 0);
}

function findById(id) {
  return db("flight_info")
    .where({ id })
    .first();
}

function findFlightsByFlightId(id) {
  return db("flight_info")
    .where({ id })
    .first();
}

async function add(flight) {
  const [id] = await db("flight_info").insert(flight, "id");

  return findById(id);
}

function remove(id) {
  return db("flight_info")
    .where("id", id)
    .del();
}

//UPDATE flight to add assistant
function editFlightAddAssistant(id, changes) {
  return db("flight_info as f")
    .where({ id })
    .update(changes);
}

//UPDATE flight info
function edit(id, changes) {
  return db("flight_info as f")
    .where({ id })
    .update(changes);
}
