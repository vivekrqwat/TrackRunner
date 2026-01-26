import { io } from 'socket.io-client';
const Url='http://localhost:4000';


export const socket = io("http://localhost:3000", {
  transports: ["websocket"],
});