import express from 'express';
import * as handlers from './handlers';
import * as validators from './validators';
import { requiredAuth } from '../../middlewares';

const router = express.Router();

router.get('/', handlers.getMovies);
router.get('/:movieId', handlers.getMovie);
router.get('/:movieId/reviews', handlers.getMovieReviews);
router.post(
  '/:movieId/reviews',
  requiredAuth,
  validators.createReview,
  handlers.createReview
);

export default router;
