import axios from 'axios';
import authHeader from './authHeader';

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

export const login = (values) => {
  return axios.post('/api/auth/login', values);
};

export const signUp = (values) => {
  return axios.post('/api/auth/signup', values);
};