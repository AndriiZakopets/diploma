import { createSlice } from '@reduxjs/toolkit';
import * as actions from '../actions';
import type { User } from '../../../shared/types';

interface AppState {
  user: User | null;
}

const initialState = {
  user: null,
} as AppState;

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(actions.auth.login.fulfilled, (state, action: any) => {
        state.user = action.payload.user;
      })
      .addCase(actions.auth.signup.fulfilled, (state, action: any) => {
        state.user = action.payload.user;
      })
      .addCase(actions.app.init.fulfilled, (state, action: any) => {
        state.user = action.payload.user;
      })
      .addCase(actions.auth.logout.fulfilled, (state, action) => {
        state.user = null;
      });
  },
});

export default appSlice.reducer;
