import { Router } from 'express';
import authRouter from './auth';
import accountRouter from './account';
import moviesRouter from './movies';
import publicRouter from './publicRouter';

const router = Router();

router.use('/api/auth', authRouter);
router.use('/api/account', accountRouter);
router.use('/api/movies', moviesRouter);
router.use('/', publicRouter);

export default router;
