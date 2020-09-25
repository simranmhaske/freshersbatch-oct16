/**
 * 
 * This Mongoose Model represents the Flights collection in the mongoDb database
 * 
 * */
module.exports = mongoose => {
    const Flight = mongoose.model(
      "flight",
      mongoose.Schema(
        {
          flight_name:{type:String, required:true},
          from: {type:String, required:true},
          to: {type:String, required:true},
          date:{type:Date, required:true},
          departuretime:{type:String,required:true},
          arrivaltime:{type:String,required:true},
          fare:{type:Number,required:true},
          noofpassengers:{type:Number}

        },
      )
    );
  
    return Flight;
  };