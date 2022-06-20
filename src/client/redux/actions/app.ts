import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../../services/api';
import * as localStorageSession from '../../utils/localStorageSession';

export const init = createAsyncThunk('app/init', async () => {
  const auth = localStorageSession.getAuth();
  const user = auth?.user;
  return { user };
});
