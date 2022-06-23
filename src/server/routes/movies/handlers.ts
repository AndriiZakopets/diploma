import axios from 'axios';
import { Request, Response } from 'express';

import User from '../../models/User';
import Review from '../../models/Review';
import { TMDB_API_KEY } from '../../config';

export const getMovies = async (req: Request, res: Response) => {
  try {
    const page = req.query.page ?? 1;
    const query = (req.query.query as string) ?? '';

    const path = query.length > 0 ? '/search/movie' : '/movie/popular';
    const { data } = await axios.get(`https://api.themoviedb.org/3${path}`, {
      params: {
        api_key: TMDB_API_KEY,
        page,
        query,
      },
    });

    res.json({
      movies: data.results,
      page: data.page,
      totalPages: data.total_pages,
    });
  } catch (err) {
    res.sendStatus(500);
  }
};

export const getMovie = async (req: Request, res: Response) => {
  try {
    const movieId = req.params.movieId;

    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}`,
      {
        params: {
          api_key: TMDB_API_KEY,
        },
      }
    );

    res.json(data);
  } catch (err) {
    res.sendStatus(500);
  }
};

async function getReviewAuthor(authorId) {
  const user = await User.findById(authorId);
  return user?.username || 'Deleted user';
}

export const getMovieReviews = async (req: Request, res: Response) => {
  try {
    const movieId = req.params.movieId;

    const rawReviews = await Review.find({ movieId }).sort('-createdAt');
    const reviews = await Promise.all(
      rawReviews.map(async (review) => {
        const author = await getReviewAuthor(review.authorId);

        return {
          author,
          id: review.id,
          content: review.content,
          createdAt: review.createdAt,
        };
      })
    );

    res.json(reviews);
  } catch (err) {
    res.sendStatus(500);
  }
};

export const createReview = async (req, res) => {
  try {
    const movieId = req.params.movieId;
    const content = req.body.content;
    const userId = req.userId;

    const review: any = await Review.create({
      authorId: userId,
      movieId,
      content,
    });
    const author = await getReviewAuthor(review.authorId);

    res.json({
      author,
      id: review.id,
      content: review.content,
      createdAt: review.createdAt,
    });
  } catch (err) {
    res.sendStatus(500);
  }
};
