import axios from 'axios';
import authHeader from './authHeader';
import type { Review } from '../../shared/types';

const authorizedAxios = axios.create();

authorizedAxios.interceptors.request.use(async function (config) {
  return {
    ...config,
    headers: {
      ...config.headers,
      ...authHeader(),
    },
  };
});

export const login = async (values) => {
  const { data } = await axios.post('/api/auth/login', values);
  return data;
};

export const signUp = async (values) => {
  const { data } = await axios.post('/api/auth/signup', values);
  return data;
};

export const getMovies = async (params) => {
  const { data } = await axios.get('/api/movies/', { params });
  return data;
};

export const getMovie = async (movieId) => {
  const { data } = await axios.get(`/api/movies/${movieId}`);
  return data;
};

export const getMovieReviews = async (movieId): Promise<Review[]> => {
  const { data } = await axios.get(`/api/movies/${movieId}/reviews`);
  return data;
};

export const createMovieReview = async (
  movieId,
  content: string
): Promise<Review> => {
  const { data } = await authorizedAxios.post(
    `/api/movies/${movieId}/reviews`,
    {
      content,
    }
  );
  return data;
};
