module.exports = app => {
    const flights = require("../controllers/flight.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Flight
    router.post("/", flights.create);
  
    // Retrieve all Flight
    router.get("/", flights.findAll);

    // Retrieve a single Tutorial with id
    router.get("/:id", flights.findOne);
  
    // Update a Flight with id
    router.put("/:id", flights.update);
  
    // Delete a Flight with id
    router.delete("/:id", flights.delete);
  
    //Delete all Flights
    router.delete("/", flights.deleteAll);
  
    app.use('/api/flights', router);
  };