const express= require('express');
const bodyParser=require('body-parser');
const dbConfig = require('../login/config/db.config');
const db= require('./models');
const cors = require("cors");

var corsOptions = {
  origin: "http://localhost:8005"
};

//'mongodb://localhost:27017/Login_db'

const Role = db.role;

db.mongoose.connect('mongodb+srv://sim_05:test@cluster0.hptsx.mongodb.net/Flight_db?retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(() => {
    console.log("Successfully connected to MongoDB.");
    initial();
  })
  .catch(err => {
    console.error("Connection error", err);
    process.exit();
  });

  function initial() {
    Role.estimatedDocumentCount((err, count) => {
      if (!err && count === 0) {
        new Role({
          name: "user"
        }).save(err => {
          if (err) {
            console.log("error", err);
          }
  
          console.log("added 'user' to roles collection");
        });
        new Role({
            name: "admin"
          }).save(err => {
            if (err) {
              console.log("error", err);
            }
    
            console.log("added 'admin' to roles collection");
          });
        }
      });
    }


const app = express();
app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to Login application." });
  });

require('./routes/auth.routes')(app);
require('./routes/user.routes')(app);

  // set port, listen for requests
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
