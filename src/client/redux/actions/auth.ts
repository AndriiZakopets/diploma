import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../../services/api';
import * as localStorageSession from '../../utils/localStorageSession';

export const login = createAsyncThunk('auth/login', async (values: any) => {
  try {
    const data = await api.login(values);
    localStorageSession.setAuth(data);

    return data;
  } catch (e) {
    throw new Error(e.response.data.error);
  }
});

export const signup = createAsyncThunk('auth/signup', async (values: any) => {
  try {
    const data = await api.signUp(values);
    localStorageSession.setAuth(data);

    return data;
  } catch (e) {
    throw new Error(e.response.data.error);
  }
});

export const logout = createAsyncThunk('auth/logout', async () => {
  localStorageSession.removeAuth();
});

export const reset = createAction('auth/reset');
