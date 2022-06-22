import express from 'express';
import * as handlers from './handlers';
import * as validators from './validators';
import { requiredAuth } from '../../middlewares';

const router = express.Router();

router.get('/movies', handlers.getMovies);
router.get('/movies/:movieId', handlers.getMovie);
router.get('/movies/:movieId/reviews', handlers.getMovieReviews);
router.post(
  '/movies/:movieId/reviews',
  requiredAuth,
  validators.createReview,
  handlers.createReview
);

export default router;
