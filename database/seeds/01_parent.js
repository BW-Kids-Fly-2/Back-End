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
            email: "test1@test.com",
            password: bcrypt.hashSync("pass", 3),
            first_name: "First",
            last_name: "Test",
            address: "Test Address",
            phone: "123456789",
            p_home_airport: "JFK"
          },
          {
            id: 2,
            email: "test2@test.com",
            password: bcrypt.hashSync("pass", 3),
            first_name: "Second",
            last_name: "Test",
            address: "Second Test Address ",
            phone: "456789123",
            p_home_airport: "JRT"
          }
        ]);
      })
  );
};
