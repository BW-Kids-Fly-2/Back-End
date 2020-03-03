exports.up = function(knex) {
  return knex.schema.createTable("trips", tbl => {
    tbl.increments();

    tbl
      .integer("trips_parent_id", 10)
      .unsigned() // << forces integer to be positive
      .notNullable()
      .references("id") // < which column is being referenced?
      .inTable("parent") // << reference the column above in which table?
      .onUpdate("CASCADE")
      .onDelete("CASCADE");

    tbl
      .integer("trips_assistant_id", 10)
      .unsigned() // << forces integer to be positive
      // .notNullable()
      .references("id") // < which column is being referenced?
      .inTable("assistant") // << reference the column above in which table?
      .onUpdate("CASCADE")
      .onDelete("CASCADE");

    tbl.text("trip_name", 128).notNullable();

    tbl.integer("kids_traveling", 3).notNullable();

    tbl.integer("checked_bags", 3);

    tbl.integer("carryon_bags", 3);

    tbl.integer("carseats", 3);

    tbl.integer("strollers", 3);

    tbl.text("notes", 300);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("trips");
};
