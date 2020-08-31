module.exports = mongoose => {
    const Flight = mongoose.model(
      "flight",
      mongoose.Schema(
        {
          from: String,
          to: String,
          date:Date
        },
      )
    );
  
    return Flight;
  };