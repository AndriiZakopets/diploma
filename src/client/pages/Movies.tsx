import React, { useEffect, useCallback } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import InfiniteScroll from 'react-infinite-scroller';
import { useDispatch, useSelector, actions } from '../redux';
import styles from './Movies.module.scss';
import MoviesGrid from '../components/MovieCard/MoviesGrid';
import useDebounce from 'client/hooks/useDebounce';

type Props = {};

function Movies({}: Props) {
  const dispatch = useDispatch();
  const [inputQuery, setInputQuery] = React.useState('');
  const query = useDebounce(inputQuery, 300);
  const page = useSelector((state) => state.movies.page);
  const movies = useSelector((state) => state.movies.movies);
  const totalPages = useSelector((state) => state.movies.totalPages);
  const isLoading = useSelector((state) => state.movies.isLoading);

  const handleSearch = useCallback(() => {
    dispatch(actions.movies.search({ query, page: 1 }));
  }, [dispatch, query]);

  useEffect(() => {
    handleSearch();
  }, [handleSearch]);

  const loadFunc = () => {
    if (isLoading === false && page > 0) {
      dispatch(
        actions.movies.search({
          shouldClearOld: false,
          query,
          page: page + 1,
        })
      );
    }
  };

  return (
    <div className={styles.container}>
      <div>
        <input
          placeholder="Search"
          value={inputQuery}
          onChange={(e) => setInputQuery(e.target.value)}
        />
      </div>
      <InfiniteScroll
        pageStart={1}
        loadMore={loadFunc}
        hasMore={totalPages > page}
        loader={
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              margin: '32px 0',
            }}
          >
            <CircularProgress color="secondary" />
          </div>
        }
      >
        <MoviesGrid movies={movies} />
      </InfiniteScroll>
    </div>
  );
}

export default Movies;
