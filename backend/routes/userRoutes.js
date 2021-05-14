import express from 'express';
import protect from '../middleware/authMiddleware.js';

import {
  authUser,
  registerUser,
  getUserProfile,
  updateUserProfile,
} from '../controller/userController.js';

const router = express.Router();

router.post('/login', authUser);
router.post('/', registerUser);
router.get('/profile', protect, getUserProfile);
router.put('/profile', protect, updateUserProfile);

export default router;
