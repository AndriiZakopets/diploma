import { createSlice } from '@reduxjs/toolkit';
import * as actions from '../actions';
import type { User } from '../../../shared/types';

interface MoviesState {
  movies;
  page: number;
  totalPages: number;
  isLoading: boolean;
}

const initialState = {
  movies: [],
  page: 0,
  totalPages: 1,
  isLoading: false,
} as MoviesState;

const appSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(actions.movies.search.pending, (state, action: any) => {
        state.isLoading = true;
      })
      .addCase(actions.movies.search.fulfilled, (state, action: any) => {
        state.isLoading = false;
        state.totalPages = action.payload.data.totalPages;
        state.page = action.payload.data.page;
        const shouldClearOld = action.payload.shouldClearOld;

        if (shouldClearOld) {
          state.movies = action.payload.data.movies;
        } else {
          state.movies = [...state.movies, ...action.payload.data.movies];
        }
      })
      .addCase(actions.movies.search.rejected, (state, action: any) => {
        state.isLoading = false;
        state.movies = [];
      });
  },
});

export default appSlice.reducer;
