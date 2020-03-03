exports.seed = function(knex) {
  // Deletes ALL existing entries
  return (
    knex("flight_info")
      // .del()
      .then(function() {
        // Inserts seed entries
        return knex("flight_info").insert([
          {
            id: 1,
            flight_info_assistant_id_dep: 1,
            flight_info_assistant_id_arr: null,

            flight_info_parent_id: 1,
            flight_info_trips_id: 1,

            dep_airport: "JFK",
            arr_airport: "MIA",

            airline: "Spaceball Air",

            dep_flight_num: "1234",
            arr_flight_num: "1212",

            dep_time: "06:55",
            arr_time: "14:40",

            help_req_at_dep: true,
            help_req_at_arr: false,

            asst_sched_dep_airport: true,
            asst_sched_arr_airport: false,

            arrived_dep_airport: false,
            arrived_arr_airport: false,

            en_route_dep_airport: true,
            en_route_arr_airport: false
          },
          {
            id: 2,
            flight_info_assistant_id_dep: 1,
            flight_info_assistant_id_arr: 2,

            flight_info_parent_id: 2,
            flight_info_trips_id: 2,

            dep_airport: "JFK",
            arr_airport: "MIA",

            airline: "Air Druidia",

            dep_flight_num: "1234",
            arr_flight_num: "1212",

            dep_time: "10:30",
            arr_time: "13:21",

            help_req_at_dep: true,
            help_req_at_arr: false,

            asst_sched_dep_airport: true,
            asst_sched_arr_airport: false,

            arrived_dep_airport: false,
            arrived_arr_airport: false,

            en_route_dep_airport: true,
            en_route_arr_airport: false
          },
          {
            id: 3,
            flight_info_assistant_id_dep: null,
            flight_info_assistant_id_arr: null,

            flight_info_parent_id: 3,
            flight_info_trips_id: 3,

            dep_airport: "JFK",
            arr_airport: "MIA",

            airline: "Spaceball Air",

            dep_flight_num: "1234",
            arr_flight_num: "1212",

            dep_time: "08:30",
            arr_time: "11:54",

            help_req_at_dep: true,
            help_req_at_arr: false,

            asst_sched_dep_airport: true,
            asst_sched_arr_airport: false,

            arrived_dep_airport: false,
            arrived_arr_airport: false,

            en_route_dep_airport: true,
            en_route_arr_airport: false
          },
          {
            id: 4,
            flight_info_assistant_id_dep: null,
            flight_info_assistant_id_arr: null,

            flight_info_parent_id: 3,
            flight_info_trips_id: 3,

            dep_airport: "JFK",
            arr_airport: "MIA",

            airline: "Spaceball Air",

            dep_flight_num: "1234",
            arr_flight_num: "1212",

            dep_time: "15:30",
            arr_time: "18:21",

            help_req_at_dep: true,
            help_req_at_arr: false,

            asst_sched_dep_airport: true,
            asst_sched_arr_airport: false,

            arrived_dep_airport: false,
            arrived_arr_airport: false,

            en_route_dep_airport: true,
            en_route_arr_airport: false
          }
        ]);
      })
  );
};
