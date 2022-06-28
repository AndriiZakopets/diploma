import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import User from '../../models/User';
import type { User as UserType } from 'shared/types';
import { HASH, JWT_SECRET } from '../../config';

const createToken = (user: UserType) => {
  const token = jwt.sign({ userId: user.id }, JWT_SECRET, {
    expiresIn: '1d',
  });

  return token;
};
bug
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user: any = await User.findOne({ email });

    if (!user) {
      return res
        .status(400)
        .send({ error: 'Invalid username, email or password' });
    }

    const isPasswordMatch = await bcrypt.compare(password, user.passwordHash);

    if (!isPasswordMatch) {
      return res.status(400).send({
        error: 'Invalid username, email or password',
      });
    }

    const token = createToken(user);

    res.send({ token, user: user.accountView() });
  } catch (err) {
    res.sendStatus(500);
  }
};

export const signup = async (req: any, res: any) => {
  try {
    const { email, username, password } = req.body;

    const candidateEmail = await User.findOne({ email });
    const candidateUsername = await User.findOne({ username });

    if (candidateEmail) {
      return res.status(400).send({ error: 'Email is already used' });
    }

    if (candidateUsername) {
      return res.status(400).send({ error: 'Username is already used' });
    }

    const passwordHash = await bcrypt.hash(password, HASH.bcrypt.saltRounds);

    const user: any = await User.create({
      username,
      passwordHash,
      email,
    });

    const token = createToken(user);

    res.status(201).send({ token, user: user.accountView() });
  } catch (err) {
    res.sendStatus(500);
  }
};
