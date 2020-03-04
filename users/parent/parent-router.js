const router = require("express").Router();

const Parent = require("./parent-model.js");
const Flights = require("../../flight/flight-model.js");
const Trips = require("../../trip/trip-model.js");
const Auth = require("../../auth/authenticate-middleware");

router.get("/", Auth, (req, res) => {
  const id = req.user.id;

  Parent.findById(id)
    .then(user => {
      res.json(user);
    })
    .catch(err => res.send(err));
});

router.put("/", Auth, (req, res) => {
  const changes = req.body;
  const id = req.user.id;

  Parent.edit(id, changes)
    .then(info => {
      if (info) {
        res.status(200).json({ info: changes });
      } else {
        res.status(404).json({ message: "Error getting user info" });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: "Error updating user info" });
    });
});

router.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const user = await Parent.findById(id);
    if (user) {
      const deleted = await Parent.remove(id);
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: "Error locating id." });
    }
  } catch {
    res
      .status(500)
      .json({ message: "There was an error deleting your account." });
  }
});

router.get("/myTrips", Auth, (req, res) => {
  const { id } = req.user;

  Trips.findTripsByParentId(id)
    .then(trip => {
      console.log(trip);
      res.status(200).json(trip);
    })
    .catch(err => res.send(err));
});

router.get("/myTrips/:id", Auth, (req, res) => {
  const { id } = req.params;
  const userId = req.user.id;

  if (id !== userId) {
    console.log(id);
    Trips.findTripsByTripId(id)
      .then(flight => {
        res.json(flight);
      })
      .catch(err => {
        console.log(err);
        res.status(404).json(err.message);
      });
  } else {
    res.status(500).json({ err: "message" });
  }
});

router.put("/myTrips/:id", Auth, (req, res) => {
  const changes = req.body;
  const { id } = req.params;

  Trips.edit(id, changes)
    .then(info => {
      if (info) {
        res.status(200).json({ info: changes });
      } else {
        res.status(404).json({ message: "Error finding trip" });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: "Error updating trip info" });
    });
});

router.post("/myTrips", (req, res) => {
  let newTrip = req.body;
  Trips.add(newTrip)
    .then(trip => {
      res.status(201).json(trip);
    })
    .catch(err => {
      res
        .status(500)
        .json({ message: "There was an error adding a new trip." });
    });
});

router.delete("/myTrips/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const trip = await Trips.findById(id);
    if (trip) {
      const deleted = await Trips.remove(id);
      res.status(200).json(trip);
    } else {
      res.status(404).json({ message: "That user trip does not exist." });
    }
  } catch {
    res.status(500).json({ message: "There was an error deleting that trip." });
  }
});

router.get("/myFlights", Auth, (req, res) => {
  const id = req.user.id;

  Flights.findFlightsByParentId(id)
    .then(flight => {
      res.status(200).json(flight);
    })
    .catch(err =>
      res.status(500).json({ message: "There was an error with the server." })
    );
});

router.get("/myFlights/:id", Auth, (req, res) => {
  const { id } = req.params;

  Flights.findFlightsByFlightId(id)
    .then(flight => {
      res.json(flight);
    })
    .catch(err => res.send(err));
});

router.put("/myFlights/:id", Auth, (req, res) => {
  const changes = req.body;
  const { id } = req.params;

  Flights.edit(id, changes)
    .then(info => {
      if (info) {
        res.status(200).json({ info: changes });
      } else {
        res.status(404).json({ message: "Error getting user info" });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: "Error updating user info" });
    });
});

router.post("/myFlights", (req, res) => {
  let newFlight = req.body;

  Flights.add(newFlight)
    .then(flight => {
      res.status(201).json(flight);
    })
    .catch(err => {
      res
        .status(500)
        .json({ message: "There was an error adding a new flight." });
    });
});

router.delete("/myFlights/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const flight = await Flights.findById(id);
    if (flight) {
      const deleted = await Flights.remove(id);
      res.status(200).json(flight);
    } else {
      res.status(404).json({ message: "That user flight does not exist." });
    }
  } catch {
    res
      .status(500)
      .json({ message: "There was an error deleting that flight." });
  }
});

module.exports = router;
