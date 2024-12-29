const express = require('express');
const app=express();

app.use("/test/1",(req,res)=>{
    res.send("test/2////")
})
app.use("/test",(req,res)=>{
    res.send("test p request aii thi...")
})

app.use("/hello",(req,res)=>{
    res.send("Hello World");
})
app.use("/",(req,res)=>{
    res.send("sabko handle kryga.....")
});
app.listen(3000,()=>{
    console.log("server is running on : 3000");;
});
