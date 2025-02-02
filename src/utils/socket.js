const { Server } = require("socket.io");


const initializedsocket= (server)=>{

    const io=new Server(server,{
        cors: {
            origin: "http://localhost:5173",
            methods: ["GET", "POST"],
            credentials: true
        }
    });

    io.on("connection",(socket)=>{
        console.log("A user connected");

        socket.on("joinchat",({userId,targetUserId})=>{

            console.log("userId: " + userId)
            console.log("targetUserId: " + targetUserId)
            const roomId=[userId,targetUserId].sort().join("_");
           
            socket.join(roomId)
        });
        socket.on("sendMessage",({firstName,
            userId,
            targetUserId,
            text})=>{
                const roomId=[userId,targetUserId].sort().join("_");
                console.log(firstName+ ": " + text)
                io.to(roomId).emit("ReceivedMessages",{firstName,text})
            });
        socket.on("disconnect",()=>{
            console.log("User disconnected");
        });

    })

    return io;
}

module.exports=initializedsocket;