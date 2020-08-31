const mongoose = require('mongoose');
const Schema=mongoose.Schema;

const bookingSchema=new Schema({
    booking_id:{
        type:String
    },
    amount:{
        type:Number
    },
    user:{},
    flights:{}
})
module.exports=mongoose.model('Booking',bookingSchema)
