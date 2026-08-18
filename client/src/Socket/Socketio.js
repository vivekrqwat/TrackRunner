import { io } from 'socket.io-client';
const Url='http://localhost:4000';


export const socket = io("http://localhost:8000", {

   transports: ['websocket', 'polling'],
  reconnection: true,
  reconnectionDelay: 1000,
  reconnectionAttempts: 5
});
