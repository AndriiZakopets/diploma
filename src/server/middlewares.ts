import jwt from 'jsonwebtoken';
import { JWT_SECRET } from './config';

export const requiredAuth = async (req: any, res: any, next: any) => {
  let token = req.headers['x-access-token'] as string;

  if (!token) {
    return res.status(403).send({
      message: 'No token provided',
    });
  }

  const decoded: any = jwt.decode(token);

  jwt.verify(token, JWT_SECRET, (err) => {
    if (err) {
      return res.status(401).send({
        message: 'Unauthorized',
      });
    }
    req.userId = decoded.userId;
    next();
  });
};
