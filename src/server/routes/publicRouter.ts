import express, { Router } from 'express';
import path from 'path';
const buildDir = path.join(process.cwd() + '/build');

const router = Router();

router.use(express.static(buildDir));

router.get('/*', (req, res) => {
  res.sendFile(path.join(buildDir, 'index.html'));
});

export default router;
