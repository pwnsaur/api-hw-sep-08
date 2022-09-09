import express from 'express';
import mongoose from 'mongoose';
import blogRouter from './routes/blogRouter.js';
import dotenv from 'dotenv';

const app = express();
const port = 3000;

dotenv.config();

app.use(express.json());

const connectionToDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log('connection successfull!');
  } catch (error) {
    throw error;
  }
};

app.use('/api', blogRouter);

app.listen(port, () => {
  connectionToDB();
  console.log(`serving @ ${port}`);
});
