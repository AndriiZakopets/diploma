import React from 'react';
import { useParams } from 'react-router-dom';
import * as api from '../services/api';
import Review from '../components/Review/Review';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import styles from './Movie.module.scss';

function Movie() {
  let { id } = useParams();
  const [movie, setMovie] = React.useState(null);
  const [reviews, setReviews] = React.useState(null);
  const releaseYear = React.useMemo(
    () => movie?.release_date.split('-')[0],
    [movie]
  );
  React.useEffect(() => {
    api.tmdbGet(`/movie/${id}`).then(({ data }) => {
      setMovie(data);
    });
    api.tmdbGet(`/movie/${id}/reviews`).then(({ data }) => {
      setReviews(data.results);
    });
  }, []);
  console.log(reviews);

  if (!movie || !reviews) return null;

  return (
    <div className={styles.container}>
      <div
        className={styles.headerContainer}
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
        }}
      >
        <div
          style={{
            paddingTop: 50,
            backgroundImage:
              'linear-gradient(to right, rgba(31.5, 10.5, 10.5, 1) 150px, rgba(31.5, 10.5, 10.5, 0.84) 100%)',
          }}
        >
          <div className={styles.header}>
            <div className={styles.poster}>
              <img
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                alt=""
              />
            </div>
            <div className={styles.content}>
              <div className={styles.title}>
                <h2>
                  {movie.title}{' '}
                  <span className={styles.releaseDate}>({releaseYear})</span>
                </h2>
              </div>
              <div className={styles.score}>
                <div>
                  <CircularProgressbar
                    background
                    styles={buildStyles({
                      backgroundColor: '#081c22',
                      textColor: 'white',
                      pathColor: '#21d07a',
                      trailColor: '#204529',
                    })}
                    value={movie.vote_average * 10}
                    text={`${Math.floor(movie.vote_average * 10)}%`}
                  />
                </div>
                <span>User Score</span>
              </div>
              <div className={styles.info}>
                <div className={styles.tagline}>{movie.tagline}</div>
                <div className={styles.overviewHeading}>Overview</div>
                <div className={styles.overview}>{movie.overview}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.reviews}>
        {reviews.map((review) => (
          <Review review={review} key={review.id} />
        ))}
      </div>
    </div>
  );
}

export default Movie;
