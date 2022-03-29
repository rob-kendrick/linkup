// Imports
import express from 'express';
import morgan from 'morgan'; // eslint-disable-line import/no-extraneous-dependencies
import cors from 'cors';
// eslint-disable-next-line
import { Server } from "socket.io";
import { createServer } from 'http';
import router from './routes/index';
// import prisma from './db';

const corsConfig = {
  // REMOVE-START
  origin: 'http://localhost:3000',
  credentials: true,
  // REMOVE-END
};

const PORT = 4000;

const app = express();

interface ServerToClientEvents {
  basicEmit: (userId: number, eventId: number, msg: string) => void;
}
interface ClientToServerEvents {
  emitMsgFromClient: (userId: number, eventId: number, msg: string) => void;
  joinRoom: (userId: number, eventId: number) => void;
  leaveRoom: (userId: number, eventId: number) => void;
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

httpServer.listen(PORT, () => {
  console.log(`🚀🚀🚀 Server up and listening on http://localhost:${PORT} ! 🚀🚀🚀`); // eslint-disable-line
});
