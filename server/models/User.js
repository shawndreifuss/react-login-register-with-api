const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    fullName: {    
        type: String,
        required: true,
        trim:true,
        min: 3,
        max: 50,
    },
    username: { 
        type: String,
        required: true,
        trim:true,
        min: 3,
        max: 20,
    },
    email: {
        type: String,
        required: true,
         unique: true,
        trim:true,
        max: 50,
    },
    password: {
        type: String,
        required: true,
        trim:true,
        min: 6,
        
    },
    profileImg: {
        type: String,
        default: "",
    },
},
{
    toJSON: {
      virtuals: true,
      timestamp: true,
    },
    id: false,
  }
);





module.exports = mongoose.model("User", UserSchema)