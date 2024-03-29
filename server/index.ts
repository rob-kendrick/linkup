// Imports
import express from 'express';
import morgan from 'morgan'; // eslint-disable-line import/no-extraneous-dependencies
import cors from 'cors';
// eslint-disable-next-line
import { Server } from "socket.io";
import { createServer } from 'http';
import router from './routes/index';
// import prisma from './db';
import type { ServerToClientEvents, ClientToServerEvents } from './SocketTypes';

const {
  SOCKET_PORT, SERVER_URL, SERVER_PORT, SOCKET_URL,
} = process.env;

const corsConfig = {
  // REMOVE-START
  origin: SERVER_URL,
  credentials: true,
  // REMOVE-END
};

const app = express();
// app.use(cors(corsConfig));
app.use(cors());
app.use(morgan('short'));
app.use(express.json());
const httpServer = createServer(app);
const io = new Server<ClientToServerEvents, ServerToClientEvents>(httpServer, {
  cors: {
    // origin: SOCKET_URL,
    origin: '*',
    methods: ['GET', 'POST'],
  },
});

io.on('connection', (socket) => {
  socket.on('joinRoom', (userId, eventId) => {
    socket.join(String(eventId));
  });
  socket.on('emitMsgFromClient', (userId, eventId, msg) => {
    io.in(String(eventId)).emit('basicEmit', userId, eventId, msg);
  });

  socket.on('leaveRoom', (userId, eventId) => {
    socket.leave(String(eventId));
  });
});

app.use('/', router);

httpServer.listen(SERVER_PORT, () => {
  console.log(`🚀🚀🚀 Server up and listening on ${SERVER_URL} ! 🚀🚀🚀`); // eslint-disable-line
});

export default io;
