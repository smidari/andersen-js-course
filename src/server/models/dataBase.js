import mongoose from 'mongoose';

// eslint-disable-next-line no-unused-vars
const connectDb = () => {
  return mongoose.connect(process.env.DATABASE_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
};
