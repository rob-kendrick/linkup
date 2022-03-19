import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('😇😇😇😇😇');
});

app.listen(4000, () => {
  console.log('🚀😘🚀The application is listening on port localhost 4000!🚀🚀🚀');
});
