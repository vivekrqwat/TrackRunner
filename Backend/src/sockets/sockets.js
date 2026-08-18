import {Server } from "socket.io";

const initsocket = (httpserver) =>{
    console.log("connec")
    const io = new Server(httpserver ,{
        cors:{
            origin :"*",
        }
    });
    io.on("connection",(socket)=>{
        console.log("✅ Frontend connected via socket:", socket.id);

        socket.on("send-loaction",({latitude,longitude})=>{
            console.log("key",longitude,latitude)
        })
    })
    
}

export default initsocket;