const express = require('express');

const app=express();
const {AdminMw,UserMw}=require('./middlewares/auth.js');


app.use('/admin',AdminMw);

app.get("/admin/chakka",(req, res, next) => {
    res.send("admin chakka p request aii thi...")
})

//Http methods routes testing
app.get("/user",UserMw,(req,res)=>{
    res.send({
        name: "John Doe",
        age: 25,
        city: "New York"
    })
});

app.post("/user/login", (req,res)=>{
    res.send("login api call");
})

app.post("/user",UserMw,(req,res)=>{
    res.send("post api call");
});

app.patch("/user",UserMw,(req,res)=>{
    res.send("patch api call");
});

app.delete("/user",UserMw,(req,res)=>{
    res.send("delete api call");
});

//route testing
// app.use("/test/1",(req,res)=>{
//     res.send("test/2////")
// })
// app.use("/test",(req,res)=>{
//     res.send("test p request aii thi...")
// })

// app.use("/hello",(req,res)=>{
//     res.send("Hello World");
// })
// app.use("/",(req,res)=>{
//     res.send("sabko handle kryga.....")
// });
app.listen(3000,()=>{
    console.log("server is running on : 3000");;
});
