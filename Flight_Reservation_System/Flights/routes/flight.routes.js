/**
 * 
 * Setting up the Routes
 * 
 */
module.exports = app => {
    const flights = require("../controllers/flight.controller.js");
    var router = require("express").Router();


  /**
* @swagger
* /api/flights:
*   post:
*     tags:
*       — Flights
*     summary: This should create a new Flight. 
*     description: This is where you can create a ne Flight.
*     consumes:
*       — application/json
*     responses: 
*       200:
*         description: Recieves back flight details with flight name.
*/

    // Creating a new Flight
    router.post("/", flights.create);

     /**
* @swagger
* /api/flights:
*   get:
*     tags:
*       — Flights
*     summary: This should retieve all the Flights.
*     description: This is where you can retrieve all the Flights.
*     consumes:
*       — application/json
*     responses: 
*       200:
*         description: Recieves back flight details with flight name.
*/
  
    // Retreiving all Flights
    router.get("/", flights.findAll);

 /**
* @swagger
* /api/flights/5f476e55b1a294bf7406d420:
*   get:
*     tags:
*       — Flights
*     summary: This should retrieve a Flight by ID.
*     description: This is where you can retrieve a Flight by ID.
*     consumes:
*       — application/json
*     responses: 
*       200:
*         description: Recieves back a flight details with flight name.
*/

    // Retrieve a single Tutorial with id
    router.get("/:id", flights.findOne);
 
    /**
* @swagger
* /api/flights/5f476e55b1a294bf7406d420:
*   put:
*     tags:
*       — Flights
*     summary: This should update an existing Flight.
*     description: This is where you can update a Flight.
*     consumes:
*       — application/json
*     responses: 
*       200:
*         description: Recieves back an updated flight details with flight name.
*/

    // Update a Flight with id
    router.put("/:id", flights.update);

    /**
* @swagger
* /api/flights/5f476e55b1a294bf7406d420:
*   delete:
*     tags:
*       — Flights
*     summary: This should delete a Flight by ID.
*     description: This is where you can delete a Flight by ID.
*     consumes:
*       — application/json
*     responses: 
*       200:
*         description: Deletes the flight details with flight name.
*/

    // Delete a Flight with id
    router.delete("/:id", flights.delete);

    /**
* @swagger
* /api/flights:
*   delete:
*     tags:
*       — Flights
*     summary: This should delete all the Flights.
*     description: This is where you can delete all the Flights.
*     consumes:
*       — application/json
*     responses: 
*       200:
*         description: Deletes all the flight details with flight name.
*/

    //Delete all Flights
    router.delete("/", flights.deleteAll);
    app.use('/api/flights', router);
  };