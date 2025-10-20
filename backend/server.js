import express from 'express';
import cors from 'cors';

// app configuration

const app = express();
const PORT = 7000;

// middlewares
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('API is Working..');
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
})