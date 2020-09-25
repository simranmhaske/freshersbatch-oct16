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
          from: {type:String, required:true},
          to: {type:String, required:true},
          date:{type:Date, required:true},
        },
      )
    );
    return Flight;
  };