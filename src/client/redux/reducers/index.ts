import { combineReducers } from 'redux';
import authReducer from './auth';
import appReducer from './app';
import moviesReducer from './movies';

const rootReducer = combineReducers({
  auth: authReducer,
  app: appReducer,
  movies: moviesReducer,
});

export default rootReducer;
