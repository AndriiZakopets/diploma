import React from 'react';
import { Link, generatePath } from 'react-router-dom';
import * as routes from '../../constants/routes';
import styles from './MovieCard.module.scss';

type Props = {
  movie;
};

function MovieCard({ movie }: Props) {
  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <Link to={generatePath(routes.movie, { id: movie.id })}>
          <img
            alt={movie.title}
            style={{ width: '100%', minHeight: '100%' }}
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/original${movie.poster_path}`
                : 'https://user-images.githubusercontent.com/47315479/81145216-7fbd8700-8f7e-11ea-9d49-bd5fb4a888f1.png'
            }
          />
        </Link>
        <div className={styles.year}>{movie.release_date.split('-')[0]}</div>
      </div>
      <div className={styles.title}>
        <span>{movie.title}</span>
        <div>{movie.vote_average * 10}%</div>
      </div>
    </div>
  );
}

export default MovieCard;
