const bcrypt = require("bcryptjs");

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return (
    knex("parent")
      // .del()
      .then(function() {
        // Inserts seed entries
        return knex("parent").insert([
          {
            id: 1,
            email: "parent1@test.com",
            password: bcrypt.hashSync("pass", 3),
            first_name: "First",
            last_name: "Parent",
            address: "First Test Address",
            phone: "123456789",
            p_home_airport: "JFK"
          },
          {
            id: 2,
            email: "parent2@test.com",
            password: bcrypt.hashSync("pass", 3),
            first_name: "Second",
            last_name: "Parent",
            address: "Second Test Address ",
            phone: "456789123",
            p_home_airport: "JRT"
          }
        ]);
      })
  );
};
