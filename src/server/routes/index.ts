import { Router } from 'express';
import authRouter from './auth';
import accountRouter from './account';
import publicRouter from './publicRouter';

const router = Router();

router.use('/', publicRouter);
router.use('/api/auth', authRouter);
router.use('/api/account', accountRouter);

export default router;
