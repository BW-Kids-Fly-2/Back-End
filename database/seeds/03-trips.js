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
            trips_assistant_id: 1,
            trip_name: "Mars",
            kids_traveling: 2,
            checked_bags: 3,
            carryon_bags: 3,
            carseats: 1,
            strollers: 1,
            notes: "Test notes!!!"
          },
          {
            id: 2,
            trips_parent_id: 2,
            trips_assistant_id: 2,
            trip_name: "Venus",
            kids_traveling: 3,
            checked_bags: 5,
            carryon_bags: 5,
            carseats: 2,
            strollers: 2,
            notes: "Test notes!!!"
          }
        ]);
      })
  );
};
