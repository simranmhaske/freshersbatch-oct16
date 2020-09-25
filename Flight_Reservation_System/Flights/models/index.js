/**
 * 
 * Defining Mongoose
 * 
 */
const dbConfig = require('../config/db.config');

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.flights = require("./flight.model.js")(mongoose);

module.exports = db;