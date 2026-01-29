import {Server } from "socket.io";

const initsocket = (httpserver) =>{
    const io = new Server(httpserver ,{
        cors:{
            origin :"*",
        }
    });
    io.on("connection",(socket)=>{
        console.log("✅ Frontend connected via socket:", socket.id);
    })
}

export default initsocket;