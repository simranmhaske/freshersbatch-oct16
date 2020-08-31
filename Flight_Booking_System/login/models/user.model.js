const mongoose = require('mongoose');

const User = mongoose.model(
    "User",
    new mongoose.Schema({
        username:String,
        firstname:String,
        lastname:String,
        email:String,
        password:String,
        gender:String,
        roles:[{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Role"//this type of reference is called as Reference Data Models
        }]
    })
);
module.exports=User;