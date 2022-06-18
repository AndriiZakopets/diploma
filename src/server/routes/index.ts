import { Router } from 'express';
import apiRouter from './apiRouter';
import publicRouter from './publicRouter';

const router = Router();

router.use('/', publicRouter);
router.use('/api', apiRouter);

export default router;
