const db = require("../models");
const Flight = db.flights;

exports.create = (req, res) => {
    
    // Create a Flight
  const flight = new Flight({
    flight_name:req.body.flight_name,
    from: req.body.from,
    to: req.body.to,
    date: new Date(req.body.date),
    departuretime: req.body.departuretime,
    arrivaltime:req.body.arrivaltime,
    fare:req.body.fare
  });

  // Save Flight in the database
  flight
    .save(flight)
    .then(data => {
      res.status(201)
      res.send(data);
    })
    .catch(err => {
      res.status(400).send({
        message:
          err.message || "Some error occurred while creating the Flight."
      });
    });
};
//*******************RETRIEVING ALL FLIGHTS WITH CONDITION********************** */
exports.findAll = (req, res) => {
  const flight_name = req.query.flight_name;
  var condition = flight_name ? { flight_name: { $regex: new RegExp(flight_name), $options: "i" } } : {};

  Flight.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Flights."
      });
    });
};
//*******************REREIVING A FLIGHT BY ID**************** */
exports.findOne = (req, res) => {
  const id = req.params.id;

  Flight.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Flight with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Flight with id=" + id });
    });
};
//*******************UPDATING A FLIGHT*********************** */
exports.update = (req, res) => {
    if (!req.body) {
      return res.status(400).send({
        message: "Data to update can not be empty!"
      });
    }
  
    const id = req.params.id;
  
    Flight.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot update Flight with id=${id}. Maybe Tutorial was not found!`
          });
        } else res.send({ message: "Flight was updated successfully." });
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Flight with id=" + id
        });
      });
  };
  //*******************DELETING A FLIGHT************************** */
  exports.delete = (req, res) => {
    const id = req.params.id;
  
    Flight.findByIdAndRemove(id)
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot delete Flight with id=${id}. Maybe Flight was not found!`
          });
        } else {
          res.send({
            message: "Flight was deleted successfully!"
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Flight with id=" + id
        });
      });
  };
  //**************DELETING ALL FLIGHTS********************* */
  exports.deleteAll = (req, res) => {
    Flight.deleteMany({})
      .then(data => {
        res.send({
          message: `${data.deletedCount} Flights were deleted successfully!`
        });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all Flights."
        });
      });
  };