// Imports
import express from 'express';
import morgan from 'morgan'; // eslint-disable-line import/no-extraneous-dependencies
import cors from 'cors';
// eslint-disable-next-line
import { Server } from "socket.io";
import { createServer } from 'http';
import router from './routes/index';
// import prisma from './db';
const http = require('http');
const socketio = require('socket.io');

const corsConfig = {
  // REMOVE-START
  origin: 'http://localhost:3000',
  credentials: true,
  // REMOVE-END
};

const PORT = 4000;

const app = express();

// io.on('connection', (socket:any) => {
// //   console.log('SOCKET IO!');
// //   // socket.on('hello', () => {
// //   //   // ...
// //   // });
// //   // socket.emit('user connected');
// });

interface ServerToClientEvents {
  basicEmit: (msg: string) => void;
}
interface ClientToServerEvents {
  emitMsgFromClient: (userId: number, eventId: number, msg: string) => void;
}

app.use(cors());
app.use(morgan('short'));
app.use(express.json());
app.use('/', router);
const httpServer = createServer(app);
const io = new Server<ClientToServerEvents, ServerToClientEvents>(httpServer, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
  },
});

io.on('connection', (socket) => {
  console.log('SOCKET');
  socket.emit('basicEmit', 'msg1');
  socket.on('emitMsgFromClient', (userId, eventId, msg) => {
    console.log(userId, eventId, msg);
  });
});

httpServer.listen(PORT, () => {
  console.log(`🚀🚀🚀 Server up and listening on http://localhost:${PORT} ! 🚀🚀🚀`); // eslint-disable-line
});
