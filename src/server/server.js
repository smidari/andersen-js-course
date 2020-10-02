import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import useRoutes from './routes/user';

const app = express();
app.use(express.json());
app.use(cors());
app.use(useRoutes);

const connectDb = () => {
  return mongoose.connect('mongodb+srv://admin:1q2w3e4r@cluster0.zbshu.mongodb.net/users', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
};

connectDb()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Server has been started:${process.env.PORT}`);
    });
  })
  .catch(err => console.log(`Error:${err.message}`));
