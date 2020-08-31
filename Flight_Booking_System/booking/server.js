const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./models");

const app = express();

var corsOptions = {
  origin: "http://localhost:8005"
};

app.use(cors(corsOptions));

db.mongoose
  .connect('mongodb+srv://sim_05:test@cluster0.hptsx.mongodb.net/Flight_db?retryWrites=true&w=majority', {
    useNewUrlParser: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to Search application." });
  });

  require('./routes/booking.route')(app);
  
  // set port, listen for requests
  const PORT = process.env.PORT || 8004;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
  });
  