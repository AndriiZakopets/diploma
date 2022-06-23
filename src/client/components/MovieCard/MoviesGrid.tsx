import React from 'react';
import MovieCard from './MovieCard';
import styles from './MovieCard.module.scss';

function MoviesGrid({ movies }) {
  return (
    <div className={styles.grid}>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default MoviesGrid;
