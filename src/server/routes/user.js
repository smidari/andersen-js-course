import Router from 'express';
import UserModel from '../models/userModel';

const router = Router();

// GET
router.get('/api/users', async (req, res) => {
  const users = await UserModel.find({});
  res.status(200).json(users);
});

// POST
router.post('/api/users', (req, res) => {
  const user = new UserModel();
  user.fullName = req.body.fullName;
  user.email = req.body.email;
  user.mobile = req.body.mobile;
  user.city = req.body.city;
  user.save();
  res.status(201).json(user);
});

// DELETE
router.delete('/api/users/:id', (req, res) => {
  UserModel.findByIdAndRemove(req.params.id, err => {
    if (!err) {
      console.log('User is deleted');
    } else {
      console.log(`Error in user delete: ${err.message}`);
    }
  });
  res.status(200).json({ message: 'User is deleted' });
});

// PUT
router.put('/api/users/:id', req => {
  UserModel.updateOne({ _id: req.params.id }, req.body, { new: true }, err => {
    if (!err) {
      console.log('User was changed');
    } else {
      console.log(`Error in user delete: ${err.message}`);
    }
  });
});

export default router;
