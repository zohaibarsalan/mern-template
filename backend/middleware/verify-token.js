import jwt from 'jsonwebtoken';

export const verifyAccessToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  if (authHeader && authHeader.startsWith('Bearer ')) {
    const accessToken = authHeader.split(' ')[1];
    jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
      if (err) {
        // Token is invalid or expired
        if (err.name === 'TokenExpiredError') {
          return res.status(401).json({ message: 'Token expired' });
        } else {
          return res.status(401).json({ message: 'Unauthorized' });
        }
      }
      req.user = decoded;
      next();
    });
  } else {
    // No Authorization header or incorrect format
    return res.status(401).json({ message: 'Unauthorized' });
  }
};
