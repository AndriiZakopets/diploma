import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../../services/api';

export const search = createAsyncThunk('movies/search', async (props: any) => {
  const { shouldClearOld = true, query = '', page = 1 } = props;
  const data = await api.getMovies({ page, query });
  return { data, shouldClearOld };
});
