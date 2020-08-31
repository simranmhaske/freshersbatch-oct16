module.exports = app => {
    const flights = require("../controllers/search.controller.js");
  
    var router = require("express").Router();
  
    router.post("/", flights.search);
  
    app.use('/api/search', router);
  };