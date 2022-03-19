import express from 'express';
import morgan from 'morgan'; // eslint-disable-line import/no-extraneous-dependencies
import cors from 'cors';
// const router = require('./router.ts')
const PORT = 4000;

const app = express();

app.use(cors());
app.use(morgan('short'));
app.use(express.json());
// app.use(router)

app.get('/', (req, res) => {
  res.send('hi hi😇😇😇😇😇');
});

app.listen(PORT, () => {
  console.log(`🚀🚀🚀 Server up and listening on http://localhost:${PORT}!🚀🚀🚀`); // eslint-disable-line
});
