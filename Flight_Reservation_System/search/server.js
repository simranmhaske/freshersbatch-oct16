/**
 * 
 * Imports
 * 
 */
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");//mechanism that allows restricted resources on a web page to be requested from another domain 
const db = require("./models");

const app = express();

/*******************SWAGGER IMPLEMENTATION STARTS********* */
const swaggerjsdoc=require('swagger-jsdoc');
const swaggerUI=require('swagger-ui-express')

const swaggeroptions={
  swaggerDefinition:{
    info:{
      title:"Search Details",
      description:"Searching a Flight",
      contact:{
        name:"Flight Reservation System",
      },
      servers:["http://localhost:8003"]
    }
  },
  apis:["./routes/search.route.js"],
}

const swaggerDocs=swaggerjsdoc(swaggeroptions);
app.use('/api-docs',swaggerUI.serve, swaggerUI.setup(swaggerDocs));
/*******************SWAGGER IMPLEMENTATION ENDS********* */

var corsOptions = {
  origin: "http://localhost:8005"
};

app.use(cors(corsOptions));

db.mongoose
  .connect('mongodb+srv://sim_05:test@cluster0.hptsx.mongodb.net/Flight_db?retryWrites=true&w=majority', {
    useNewUrlParser: true,useUnifiedTopology: true
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

  require('./routes/search.route')(app);
  
  // set port, listen for requests
  const PORT = process.env.PORT || 8003;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
  });
  