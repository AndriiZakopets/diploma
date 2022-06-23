import React from 'react';
import { useSelector } from '../redux';
import { useParams } from 'react-router-dom';
import * as api from '../services/api';
import Review from '../components/Review/Review';
import CommentBox from '../components/CommentBox/CommentBox';
import CircularProgressWithLabel from '../components/CircularProgressWithLabel';

import styles from './Movie.module.scss';

function Movie() {
  const user = useSelector((state) => state.app.user);
  let { id } = useParams();
  const [movie, setMovie] = React.useState(null);
  const [reviews, setReviews] = React.useState([]);
  const releaseYear = React.useMemo(
    () => movie?.release_date.split('-')[0],
    [movie]
  );

  React.useEffect(() => {
    api.getMovie(id).then(setMovie);
    api.getMovieReviews(id).then(setReviews);
  }, [id]);

  const onCommentSubmit = (content: string) => {
    api.createMovieReview(id, content).then((data) =>
      setReviews((prev) => {
        console.log(data);
        return [{ ...data, isNew: true }, ...prev];
      })
    );
  };

  if (!movie)
    return (
      <div
        style={{
          display: 'flex',
          fontSize: 20,
          marginTop: '150px',
          width: '100%',
          justifyContent: 'center',
        }}
      >
        Movie with given id is not found
      </div>
    );

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
                  <CircularProgressWithLabel value={movie.vote_average * 10} />
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
      {user && <CommentBox user={user} onSubmit={onCommentSubmit} />}
      <div className={styles.reviews}>
        {reviews.map((review) => (
          <Review review={review} key={review.id} />
        ))}
      </div>
    </div>
  );
}

export default Movie;
