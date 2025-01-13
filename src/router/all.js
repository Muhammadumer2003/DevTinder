const express=require('express');
const { UserMw } = require('../middlewares/auth');
const ConnectionRequest = require('../models/request.model');
const allRouter=express.Router();

allRouter.get('user/getPendingRequests',UserMw,async(req,res)=>{
    try{
        const loggedInuser=req.user;
        const pendingRequests=await ConnectionRequest({
            reciever:loggedInuser._id,
            status:"interested"
        }).populate("User", "firstName lastName");
        console.log(pendingRequests);
        if(!pendingRequests){
            throw new Error("Unable to fetch data");
        }

        res.status(201).json({
            message:"Got all requests",
            data:{
                pendingRequests
            }

        })


    }
    catch(error){
        res.status(500).send({message:error.message});
    }
})


module.exports=allRouter;