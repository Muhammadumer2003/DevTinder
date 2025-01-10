const express=require('express');
const requestRouter = express.Router();

requestRouter.post('/request', (req,res)=>{
    res.send("request ja rahi hai jani!!");
})

module.exports=requestRouter;