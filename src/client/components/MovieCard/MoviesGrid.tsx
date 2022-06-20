import React from 'react';
import MovieCard from './MovieCard';
import styles from './MovieCard.module.scss';
import { useSelector } from '../../redux';

type Props = {};

function MoviesGrid({}: Props) {
  const movies = useSelector((state) => state.movies.movies);
  return (
    <div className={styles.grid}>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default MoviesGrid;
