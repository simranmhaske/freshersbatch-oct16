module.exports = app => {
    const bookings = require('../controllers/book.controller');
  
    var router = require("express").Router();
  
    router.post("/", bookings.book);
  
    app.use('/api/book', router);
  };