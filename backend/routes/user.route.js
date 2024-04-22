import express from 'express';
import {
  loginUser,
  refreshAccessToken,
  registerUser,
} from '../controllers/user.controller.js';
import { getUsers } from '../controllers/test.controller.js';
import { verifyAccessToken } from '../middleware/verify-token.js';

const router = express.Router();

router.post('/public/signup', registerUser);
router.post('/public/login', loginUser);
router.post('/public/refresh', refreshAccessToken);

router.get('/private/users', verifyAccessToken, getUsers);

export default router;
