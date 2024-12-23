import express from 'express';
import cors from 'cors';
import reviewRoutes from './routes/reviewRoutes.js';

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use('/api/reviews', reviewRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});