const express= require('express');
const User=require('../models/user.model');
const bcrypt=require('bcrypt');
const {validateUser}=require('../utils/validate');


const authRouter=express.Router();



//signup
authRouter.post("/user/signup",async(req,res)=>{
    //fetch fields from the body
    try{
        //validate user
        validateUser(req);


        const {firstName,lastName,password,age,gender} = req.body;

        // Encrypt password

        const hashpassword=await bcrypt.hash(password,10);
        console.log(hashpassword);

       
   //new user
   const newUser=new User({
    firstName,
    lastName,
    password:hashpassword,
    age,
    gender
   });
   console.log(newUser);
   if(!newUser){
    throw new Error("User not found");
   }


   
    //save to db
    await newUser.save();
    res.send(newUser); 
   }
   catch(err){
    res.status(400).send(
        "Something went wrong"
    );
   }
    
});



//login

authRouter.post("/user/login",async(req,res)=>{
    try{
        //frontend data fetching

        const {firstName,lastName,password}=req.body;
        console.log(firstName);

        //check if user exist
        const user=await User.findOne({firstName});
        console.log(user);
        if(!user){
            throw new Error("Invalid credentials");
        }
        const isvalidpassword = await user.validateJwt(password); 
        console.log(isvalidpassword);
       
        if(!isvalidpassword){
            throw new Error("Invalid credentials");
        }
        else{


            //create jwt token


            //send in cookie
            const token=await user.getJwt();
            console.log(token);
            res.cookie("token",token,{httpOnly:true,maxAge:1000*60*60});
            
            res.send(user);
        }
    }
    catch(err){
        res.status(400).send("something went wrong"+err);
   
    }
});


//logout

authRouter.post('/user/logout',(req,res)=>{

    //clear the cookies that sent to the client
    res.clearCookie('token');
    //sending the response to verify that the user is logged out
    res.send('Logged Out');
})










module.exports= authRouter;