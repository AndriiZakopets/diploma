import jwt from 'jsonwebtoken';
import { JWT_SECRET } from './config';

export const requiredAuth = async (req: any, res: any, next: any) => {
  let token = req.headers['x-access-token'] as string;

  if (!token) {
    return res.status(403).send({
      message: 'No token provided',
    });
  }

  jwt.verify(token, JWT_SECRET, (err, decoded: any) => {
    if (err) {
      return res.status(401).send({
        message: 'Unauthorized',
      });
    }
    req.userId = decoded.id;
    next();
  });
};
