import { Schema, model } from 'mongoose';

const userSchema = new Schema({
  fullName: {
    type: String,
  },
  email: {
    type: String,
  },
  mobile: {
    type: String,
  },
  city: {
    type: String,
  },
});
const UserModel = model('User', userSchema);
export default UserModel;
