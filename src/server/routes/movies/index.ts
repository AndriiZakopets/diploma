import express from 'express';
import axios from 'axios';

const router = express.Router();

router.get('/movies', (req, res) => {
  const page = req.query.page;
});

export default router;
