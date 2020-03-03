exports.up = function(knex) {
  return knex.schema.createTable("flight_info", tbl => {
    tbl.increments();

    tbl
      .integer("flight_info_assistant_id_dep", 10)
      .unsigned() // << forces integer to be positive
      // .notNullable()
      .references("id") // < which column is being referenced?
      .inTable("assistant") // << reference the column above in which table?
      .onUpdate("CASCADE")
      .onDelete("CASCADE");

    tbl
      .integer("flight_info_assistant_id_arr", 10)
      .unsigned() // << forces integer to be positive
      // .notNullable()
      .references("id") // < which column is being referenced?
      .inTable("assistant") // << reference the column above in which table?
      .onUpdate("CASCADE")
      .onDelete("CASCADE");

    tbl
      .integer("flight_info_parent_id", 10)
      .unsigned() // << forces integer to be positive
      .notNullable()
      .references("id") // < which column is being referenced?
      .inTable("parent") // << reference the column above in which table?
      .onUpdate("CASCADE")
      .onDelete("CASCADE");

    tbl
      .integer("flight_info_trips_id", 10)
      .unsigned() // << forces integer to be positive
      .notNullable()
      .references("id") // < which column is being referenced?
      .inTable("trips") // << reference the column above in which table?
      .onUpdate("CASCADE")
      .onDelete("CASCADE");

    tbl.string("dep_airport", 128).notNullable();
    tbl.string("arr_airport", 128).notNullable();

    tbl.string("airline", 128).notNullable();

    tbl.integer("dep_flight_num", 10).notNullable();
    tbl.integer("arr_flight_num", 10).notNullable();

    tbl.time("dep_time").notNullable();
    tbl.time("arr_time").notNullable();

    tbl.boolean("help_req_at_dep").defaultTo(0);
    tbl.boolean("help_req_at_arr").defaultTo(0);

    tbl.boolean("asst_sched_dep_airport").defaultTo(0);
    tbl.boolean("asst_sched_arr_airport").defaultTo(0);

    tbl.boolean("arrived_dep_airport").defaultTo(0);
    tbl.boolean("arrived_arr_airport").defaultTo(0);

    tbl.boolean("en_route_dep_airport").defaultTo(0);
    tbl.boolean("en_route_arr_airport").defaultTo(0);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("flight_info");
};
