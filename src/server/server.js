import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import useRoutes from './routes/user';
import { connectDb } from './models/dataBase';

const app = express();
app.use(express.json());
app.use(cors());
app.use(useRoutes);

connectDb()
  .then(() => console.log('MongoDB has connected'))
  .catch(err => console.log(`Error:${err.message}`))
  .then(() => app.listen(process.env.PORT))
  .then(() => console.log(`Server has been started:${process.env.PORT}`))
  .catch(err => console.log(`Error:${err.message}`));
