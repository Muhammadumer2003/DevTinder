const express=require('express');

const chatRouter=express.router;


chatRouter.get("/chat/:trargetUserId",UserMw,async(req,res)=>{
 try {
       const sender=req.user._id;
       const reciever=req.params;
   
       let chatdekhbhai=await Chat.findOne({
           participants:{$all:[sender,reciever]}
   
       }).populate({
        path:"messages.sender",
        select:"firstName lastName "
       });
   
       if(!chatdekhbhai){
           chatdekhbhai=await new Chat({
               paticipants:[sender,reciever],
               messages:[]
           });
   
           await Chat.save(chatdekhbhai)
       };
   
       res.send({
           message:"Got chat",
          data:chatdekhbhai
           
       })
 } catch (error) {
    res.send({data:error.message});
    
 }
 });


module.exports=chatRouter;

