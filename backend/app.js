import express from 'express';
import { errorHandler } from './middleware/error-handler.js';
import connectDB from './config/db.js';
import routes from './routes/user.route.js';
import { notFoundHandler } from './middleware/not-found.js';

const PORT = process.env.PORT || 8000;
const app = express();

app
  .use(express.urlencoded({ extended: true }))
  .use(express.json())
  .use('/api', routes)
  .use(notFoundHandler)
  .use(errorHandler);

connectDB();

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
