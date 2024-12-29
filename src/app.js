const express = require('express');
const app=express();



app.use("/user",(req,res)=>{
    res.send("wah bawa gg!!!");
})
//Http methods routes testing
app.get("/user",(req,res)=>{
    res.send({
        name: "John Doe",
        age: 25,
        city: "New York"
    })
});

app.post("/user",(req,res)=>{
    res.send("post api call");
});

app.patch("/user",(req,res)=>{
    res.send("patch api call");
});

app.delete("/user",(req,res)=>{
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
