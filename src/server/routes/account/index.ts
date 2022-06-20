import express from 'express';
import * as handlers from './handlers';
import * as validators from './validators';
import { requiredAuth } from '../../middlewares';

const router = express.Router();

router.get('/user', requiredAuth, handlers.getAccount);
router.put(
  '/user',
  requiredAuth,
  validators.updateAccount,
  handlers.updateAccount
);

export default router;
