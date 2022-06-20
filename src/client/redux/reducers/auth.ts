import { createSlice } from '@reduxjs/toolkit';
import * as actions from '../actions';

interface AuthState {
  isLoading: boolean;
  error: string | null;
}

const initialState = {
  isLoading: false,
  error: null,
} as AuthState;

const appSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(actions.auth.reset, () => ({
        ...initialState,
      }))
      .addCase(actions.auth.login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(actions.auth.login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(actions.auth.login.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(actions.auth.signup.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(actions.auth.signup.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(actions.auth.signup.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default appSlice.reducer;
