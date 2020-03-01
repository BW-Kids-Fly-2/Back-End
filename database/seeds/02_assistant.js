const bcrypt = require("bcryptjs");
// pass = bcrypt.hashSync("pass", 3);
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return (
    knex("assistant")
      // .del()
      .then(function() {
        // Inserts seed entries
        return knex("assistant").insert([
          {
            id: 1,
            email: "assistant1@test.com",
            password: bcrypt.hashSync("pass", 3),
            first_name: "First",
            last_name: "Assistant",
            phone: "437895345394",
            a_home_airport: "SUN",
            available: false
          },
          {
            id: 2,
            email: "assistant2@test.com",
            password: bcrypt.hashSync("pass", 3),
            first_name: "Second",
            last_name: "Assistant",
            phone: "438947393",
            a_home_airport: "DRU",
            available: false
          }
        ]);
      })
  );
};
