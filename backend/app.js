import express from 'express';
import ErrorHandler from './middleware/error.middleware.js';
import connectDB from './config/db.js';
import routes from './routes/userRoutes.js';

const PORT = process.env.PORT || 8000;
const app = express();

app
  .use(express.urlencoded({ extended: true }))
  .use(express.json())
  .use('/api', routes)
  .use(ErrorHandler);

connectDB();

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
