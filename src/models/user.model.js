const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt=require('jsonwebtoken')

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

userSchema.methods.validateJwt=async function(ispassword){
    const user=this;
    const jwtSigned=await bcrypt.compare(ispassword,user.password);
    if(!jwtSigned){
        throw new Error("Invalid credentials");
    }
    return true;

}

userSchema.methods.getJwt=async function(){
    const user=this;
    const token=jwt.sign({_id:user._id},"umer1234");
    return token;

}

 const User = mongoose.model('User', userSchema);
 module.exports = User;