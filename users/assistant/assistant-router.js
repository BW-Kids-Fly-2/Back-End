const router = require("express").Router();

const Assistant = require("./assistant-model.js");
const Flights = require("../../flight/flight-model.js");
const Auth = require("../../auth/authenticate-middleware");

router.get("/", Auth, (req, res) => {
  const id = req.user.id;

  Assistant.findById(id)
    .then(user => {
      res.json(user);
    })
    .catch(err => res.send(err));
});

router.put("/", Auth, (req, res) => {
  const changes = req.body;
  const id = req.user.id;

  Assistant.edit(id, changes)
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
    const user = await Assistant.findById(id);
    if (user) {
      const deleted = await Assistant.remove(id);
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

router.get("/availableFlights", Auth, (req, res) => {
  Flights.findFlightsNeedingHelp()
    .then(flight => {
      res.json(flight);
    })
    .catch(err => {
      console.log(err);
      res
        .status(500)
        .json({ message: "Error locating flights needing assistance" });
    });
});

router.get("/myFlights", Auth, (req, res) => {
  const id = req.user.id;

  Flights.findFlightsImWorking(id)
    .then(flight => {
      res.json(flight);
    })
    .catch(err => res.send(err));
});

router.put("/helpWithFlight/:id", Auth, (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  Flights.findById(id)
    .then(flight => {
      if (flight) {
        Flights.editFlightAddAssistant(id, changes)
          .then(updated => {
            //need to run a get request to display updated data
            res.status(203).json({ message: "information updated" });
          })
          .catch(err => {
            res.status(500).json(err.message);
          });
      } else {
        res
          .status(404)
          .json({ message: "Could not find flight with given id" });
      }
    })
    .catch(error => {
      res.status(500).json(error.message);
    });
});

module.exports = router;
