import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './Layout/Layout';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import Movies from '../pages/Movies';
import Movie from '../pages/Movie';
import { useDispatch, actions } from '../redux';
import * as routes from '../constants/routes';

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(actions.app.init());
  }, [dispatch]);

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate to={routes.movies} />} />
        <Route path={routes.movies} element={<Movies />} />
        <Route path={routes.movie} element={<Movie />} />
        <Route path={routes.login} element={<Login />} />
        <Route path={routes.signUp} element={<SignUp />} />
      </Routes>
    </Layout>
  );
}

export default App;
