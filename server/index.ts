// Imports
import express from 'express';
import morgan from 'morgan'; // eslint-disable-line import/no-extraneous-dependencies
import cors from 'cors';
// eslint-disable-next-line
import router from './routes/index';
//import prisma from './db';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const PORT = 4000;

const app = express();

app.use(cors());
app.use(morgan('short'));
app.use(express.json());
app.use('/', router);


app.listen(PORT, () => {
  console.log(`🚀🚀🚀 Server up and listening on http://localhost:${PORT} ! 🚀🚀🚀`); // eslint-disable-line
});
