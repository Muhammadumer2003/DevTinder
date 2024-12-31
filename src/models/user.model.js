const mongoose = require('mongoose');

const userSchema =  new mongoose.Schema({
    firstName:{
        type:String,
      
    },
    lastName:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    gender:{
        type:String,
        enum:['Male', 'Female', 'Other'],
        required:true
    }
});

 const User = mongoose.model('User', userSchema);
 module.exports = User;