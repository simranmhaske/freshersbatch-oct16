/**
 * 
 * Setting up the Routes
 * 
 */
module.exports = app => {
    const bookings = require('../controllers/book.controller');
  
    var router = require("express").Router();

     /**
* @swagger
* /api/book:
*   get:
*     tags:
*       — Booking
*     summary: This should display all the bookings. 
*     description: This is where you can view all bookings.
*     consumes:
*       — application/json
*     responses: 
*       200:
*         description: Recieves all the booking.
*/
    router.get("/",bookings.findAll)

 /**
* @swagger
* /api/book:
*   post:
*     tags:
*       — Booking
*     summary: This should create a new Booking. 
*     description: This is where you can create a new Booking.
*     consumes:
*       — application/json
*     responses: 
*       200:
*         description: Recieves back a booking Id.
*/
    router.post("/", bookings.book);
 /**
* @swagger
* /api/book/5f4e974e657a36c554c6b557:
*   delete:
*     tags:
*       — Booking
*     summary: This should delete a booking by ID.
*     description: This is where you can delete a booking by ID.
*     consumes:
*       — application/json
*     responses: 
*       200:
*         description: Deletes the booking.
*/
    router.delete("/:id", bookings.cancel);
 /**
* @swagger
* /api/book/5f4e958637f16a1da5c953fa:
*   get:
*     tags:
*       — Booking
*     summary: This should retrieve a Booking by ID.
*     description: This is where you can retrieve a Booking by ID.
*     consumes:
*       — application/json
*     responses: 
*       200:
*         description: Deletes a booking by Id.
*/
    router.get("/:id", bookings.search);
  
    app.use('/api/book', router);
  };