const express = require('express');
const dbConnect=require('./config/db');
const User=require('./models/user.model')

const app=express();


app.use(express.json());



//get api using findbyone

app.get("/feed",async(req,res)=>{
    const name=req.body?._id;
    console.log(name);
    if(!name){
        res.status(400).send("Please provide a name");
    }


    try {
        const user=await User.find({}
        );
        



        if(!user){
            res.status(404).send("User not found");
        }
        else{
            console.log(user);
            res.send(user);
        }
        
    } catch (error) {
        res.status(404).send("Something went wrong");
        
    }
    
})


//signup api

app.post("/user/signup",async(req,res)=>{
    //fetch fields from the body
    try{
   //new user
   const newUser=new User(req.body);
   console.log(newUser);
   if(!newUser){
    throw new Error("User not found");
   }


   
    //save to db
    await newUser.save();
    res.send(newUser); 
   }
   catch(err){
    res.status(400).send(err);
   }
    
})

//delete user
app.delete("/user/delete",async(req,res)=>{
    try{

        const userid= req.body.userId;

        if(!userid){
            res.status(404).send("can't find userid");

        }
        await User.findByIdAndDelete(userid);
        res.send("user deleted successfully")
    }
    catch(err){
        res.status(400).send(err);
       }
})


//upate user
app.patch("/user/update",async(req,res)=>{
    try{
        const userid=req.body.userId;
        const data=req.body;
        if(!userid){
            res.status(400).send("Not found userid");
        }
        await User.findByIdAndUpdate(userid,data);
        res.send("User upadted successfully!!");

    }
    catch(err){
        res.status(400).send(err);
       }
})


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



//error handling


// app.get('/getuserdata', (req, res) => {
//     throw new Error("chawliii marr dii hai yaarrr!!");
//     res.send("get api call");
// });
// app.use("/",(err,req,res,next) => {
//     res.status(501).send(err.message);
// })







// const {AdminMw,UserMw}=require('./middlewares/auth.js');


// app.use('/admin',AdminMw);

// app.get("/admin/chakka",(req, res, next) => {
//     res.send("admin chakka p request aii thi...")
// })

// //Http methods routes testing
// app.get("/user",UserMw,(req,res)=>{
//     res.send({
//         name: "John Doe",
//         age: 25,
//         city: "New York"
//     })
// });

// app.post("/user/login", (req,res)=>{
//     res.send("login api call");
// })

// app.post("/user",UserMw,(req,res)=>{
//     res.send("post api call");
// });

// app.patch("/user",UserMw,(req,res)=>{
//     res.send("patch api call");
// });

// app.delete("/user",UserMw,(req,res)=>{
//     res.send("delete api call");
// });

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

