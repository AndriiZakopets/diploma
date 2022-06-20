import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../../services/api';

export const search = createAsyncThunk('movies/search', async (props: any) => {
  const { query, page } = props;
  const { data } =
    query.length > 0
      ? await api.tmdbGet('/search/movie', { page, query })
      : await api.tmdbGet('/movie/popular', { page });
  return {
    movies: data.results,
    page,
  };
});

export const init = createAsyncThunk('movies/init', async () => {
  const page = 1;
  const { data } = await api.tmdbGet('/movie/popular', { page });
  return {
    movies: data.results,
    page,
  };
});
