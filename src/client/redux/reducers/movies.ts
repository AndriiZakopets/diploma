import { createSlice } from '@reduxjs/toolkit';
import * as actions from '../actions';
import type { User } from '../../../shared/types';

interface MoviesState {
  movies;
  page: number;
  isLoading: boolean;
}

const initialState = {
  movies: [],
  page: 1,
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
        state.movies = action.payload.movies;
      })
      .addCase(actions.movies.search.rejected, (state, action: any) => {
        state.isLoading = false;
        state.movies = [];
      })
      .addCase(actions.movies.init.pending, (state, action: any) => {
        state.isLoading = true;
      })
      .addCase(actions.movies.init.fulfilled, (state, action: any) => {
        state.isLoading = false;
        state.movies = action.payload.movies;
      })
      .addCase(actions.movies.init.rejected, (state, action: any) => {
        state.isLoading = false;
        state.movies = [];
      });
  },
});

export default appSlice.reducer;
