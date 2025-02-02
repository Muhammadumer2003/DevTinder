const express = require('express');
const dbConnect=require('./config/db');
const cookieParser = require('cookie-parser');
const cors=require('cors');

const http=require('http');




const app=express();


//global middlewares
app.use(cors({
    origin: 'http://localhost:5173', // allow requests from this origin
    credentials: true, // allow sending cookies over HTTP requests,
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'], // Include PATCH
  allowedHeaders: ['Content-Type', 'Authorization'], 
}))
app.use(express.json());
app.use(cookieParser());


//routers

const authRouter=require('./router/auth.js');
const profileRouter=require('./router/profile.js');
const requestRouter=require('./router/requests.js');
const allRouter=require('./router/all.js');
const initializedsocket = require('./utils/socket.js');



app.use('/',authRouter);
app.use('/',profileRouter);
app.use('/',requestRouter);
app.use('/',allRouter);

const server=http.createServer(app);
const io = initializedsocket(server);









//db connection logic
dbConnect().then(()=>{
    console.log("Connected to db");
    server.listen(3000,()=>{
        console.log("server is running on : 3000");;
    });



}).catch((err)=>{
    console.error("Failed to connect to db",err);
    process.exit(1);  //exit the app with error code 1
 });
