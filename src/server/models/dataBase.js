import mongoose from 'mongoose';

export const connectDb = () => {
  return mongoose.connect(process.env.DATABASE_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
};
