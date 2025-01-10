const express = require('express');
const dbConnect=require('./config/db');
const cookieParser = require('cookie-parser');



const app=express();


//global middlewares
app.use(express.json());
app.use(cookieParser());


//routers

const authRouter=require('./router/auth.js');
const profileRouter=require('./router/profile.js');
const requestRouter=require('./router/requests.js');

app.use('/',authRouter);
app.use('/',profileRouter);
app.use('/',requestRouter);



//db connection logic
dbConnect().then(()=>{
    console.log("Connected to db");
    app.listen(3000,()=>{
        console.log("server is running on : 3000");;
    });



}).catch((err)=>{
    console.error("Failed to connect to db",err);
    process.exit(1);  //exit the app with error code 1
 });
