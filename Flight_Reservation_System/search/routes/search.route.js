/**
 * 
 * Setting up the Routes
 * 
 */
module.exports = app => {
    const flights = require("../controllers/search.controller.js");
    var router = require("express").Router();
  
     /**
* @swagger
* /api/search:
*   post:
*     tags:
*       — Search
*     summary: This should search a Flight according to the requirement. 
*     description: This is where you can search a Flight.
*     consumes:
*       — application/json
*     responses: 
*       200:
*         description: Recieves back flight details with flight name.
*/
    //Searching an existing flight
    router.post("/", flights.search);
  
    app.use('/api/search', router);
  };