import express from 'express';

const router = express.Router();

router.post('/public/signup', (req, res) => {
  const { firstName, lastName, email, password, confirmPassword } = req.body;

  console.log(req.header('Content-Type'));
  console.log(req.header('Authorization'));
  console.log(firstName, lastName, email, password, confirmPassword);

  res.status(200).json({ message: 'Works' });
});

export default router;
