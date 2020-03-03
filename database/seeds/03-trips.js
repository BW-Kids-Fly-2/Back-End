exports.seed = function(knex) {
  // Deletes ALL existing entries
  return (
    knex("trips")
      // .del()
      .then(function() {
        // Inserts seed entries
        return knex("trips").insert([
          {
            id: 1,
            trips_parent_id: 1,
            // trips_assistant_id: 1,
            trip_name: "Trip to the edge of the galaxy.",
            kids_traveling: 2,
            checked_bags: 3,
            carryon_bags: 3,
            carseats: 1,
            strollers: 1,
            notes: "They've gone plaid!"
          },
          {
            id: 2,
            trips_parent_id: 2,
            // trips_assistant_id: 2,
            trip_name: "Trip to Spaceball One",
            kids_traveling: 3,
            checked_bags: 5,
            carryon_bags: 5,
            carseats: 2,
            strollers: 2,
            notes:
              "There's only one person I know that would give me the raspberry!"
          },
          {
            id: 3,
            trips_parent_id: 3,
            // trips_assistant_id: null,
            trip_name: "Trip to Druidia",
            kids_traveling: 2,
            checked_bags: 3,
            carryon_bags: 3,
            carseats: 1,
            strollers: 1,
            notes: "Just what I needed... a Druish princess."
          },
          {
            id: 4,
            trips_parent_id: 1,
            // trips_assistant_id: null,
            trip_name: "Going to see Yogurt",
            kids_traveling: 1,
            checked_bags: 2,
            carryon_bags: 2,
            carseats: 1,
            strollers: 1,
            notes: "Use the schwartz, Lonestar."
          }
        ]);
      })
  );
};
