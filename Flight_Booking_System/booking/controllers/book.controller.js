const Booking = require('../models/booking.model')

exports.book=(req,res,next)=>{
    const flights = req.body.flights;
    const user = req.body.user;

    const booking = new Booking({
        booking_id:`${flights.flight_name}-${flights.date}`,
        amount:`${flights.noofpassengers*flights.fare}`,
        flights:flights,
        user:user
    })
    booking.save()
    .then(data => {
        console.log("inside");
        res.send(data);
    })
    .catch(err=>{
        res.status(500).json({
            error:err
        })
    })
}
