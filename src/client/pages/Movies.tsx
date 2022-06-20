import React from 'react';
import { useDispatch, useSelector, actions } from '../redux';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import styles from './Movies.module.scss';
import MoviesGrid from '../components/MovieCard/MoviesGrid';

type Props = {};

function Movies({}: Props) {
  const dispatch = useDispatch();
  const [query, setQuery] = React.useState('');

  React.useEffect(() => {
    dispatch(actions.movies.init());
  }, []);

  const handleLoad = () => {
    dispatch(actions.movies.search({ query, page: 1 }));
  };

  return (
    <div className={styles.container}>
      <div>
        <input
          color="secondary"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={handleLoad}>Search</button>
      </div>
      <MoviesGrid />
    </div>
  );
}

export default Movies;
