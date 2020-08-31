module.exports = mongoose => {
    const Flight = mongoose.model(
      "flight",
      mongoose.Schema(
        {
          flight_name:{type:String, required:true},
          from: String,
          to: String,
          date:Date,
          departuretime:String,
          arrivaltime:String,
          fare:Number,
          noofpassengers:Number

        },
      )
    );
  
    return Flight;
  };