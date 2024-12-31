const mongoose = require('mongoose')



const dbConnect=async()=>{
    //connect to mongodb
    await mongoose.connect("mongodb+srv://umerabbasi2003:U1m2e3r4@devtinder.ej66n.mongodb.net/?retryWrites=true&w=majority&appName=DevTinder");

}

module.exports=dbConnect;