const mongoose = require('mongoose');


const messageSchema=new mongoose.Schema({
    sender:{
        type:mongoose.Types.ObjectId,
        ref:User,
        required:true
    },
   
    text:{
        type:String,
        required:true

    }

},{timestamps:true})

const chatSchema=new mongoose.Schema({
    paticipants:[{
        type:mongoose.types.ObjectId,
        ref:User,
        required:true
    }],
    messages:[messageSchema]

},{
    timestamps:true
});

const chat=mongoose.model("Chat",chatSchema);
modeule.exports=chat;