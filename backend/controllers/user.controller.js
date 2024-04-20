import { User } from '../models/User.js';
import {
  comparePassword,
  generateAccessToken,
  generateRefreshToken,
} from '../services/auth.service.js';

export const registerUser = async (req, res, next) => {
  const { firstName, lastName, email, password, confirmPassword } = req.body;

  const userExists = await User.findOne({ email });
  if (userExists) {
    const error = new Error('User already exists. Please login');
    error.status = 400;
    return next(error);
  }

  if (password !== confirmPassword) {
    const error = new Error('Passwords do not match');
    error.status = 400;
    return next(error);
  }

  try {
    const user = await User.create({
      firstName,
      lastName,
      email,
      password,
    });

    res.status(200).json({ message: 'User registered successfully' });
  } catch (error) {
    next(error);
  }
};

export const loginUser = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      const error = new Error('User does not exist. Please register');
      error.status = 400;
      return next(error);
    }

    if (!comparePassword(password, user.password)) {
      const error = new Error('The provided credentials are invalid');
      error.status = 400;
      return next(error);
    }

    const accessToken = generateAccessToken(user._id);
    const refreshToken = generateRefreshToken(user._id);

    res
      .status(200)
      .json({ message: 'Login successful', accessToken, refreshToken });
  } catch (error) {
    next(error);
  }
};

import jwt from 'jsonwebtoken';

export const refreshAccessToken = async (req, res) => {
  const { refreshToken } = req.body;
  jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => {
    if (err) {
      // Refresh token is invalid or expired
      return res.status(401).json({ message: 'Unauthorized' });
    }
    // Generate a new access token
    const accessToken = jwt.sign(
      { userId: decoded.userId },
      process.env.ACCESS_TOKEN_SECRET,
      {
        expiresIn: '1d',
      }
    );
    res.status(200).json({ accessToken });
  });
};
