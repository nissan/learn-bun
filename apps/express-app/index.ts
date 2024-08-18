import express from 'express';

const app = express();
const port = 8000;

app.get('/', (req, res) => {
  res.send('Hello via Bun and Express!');
});

app.listen(port, () => {
  console.log(`Bun server running on http://localhost:${port}`);
});