import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import SearchBox from '../../components/SearchBox/SearchBox';
import searchMovieApi from '../../apis/search-movie-api.js';
import MovieList from '../../components/MovieList/MovieList';
import styles from './MoviePage.module.css';
import { Discuss } from 'react-loader-spinner';

export default function MoviePage() {
  const [moviesList, setMoviesList] = useState([]);
  const [isLoading, updateLoading] = useState(false);
  const [params, setParams] = useSearchParams();
  const query = params.get('query') ?? '';

  const addMovies = (newMovies) => {
    setMoviesList(newMovies);
  };

  useEffect(() => {
    if (query === '') {
      return;
    }

    const fetchMovies = async () => {
      try {
        updateLoading(true);
        const data = await searchMovieApi(query); // Fetch movie data
        addMovies(data || []);
      } catch (error) {
        console.error('Error fetching movies:', error); // Handle any errors
        addMovies([]); // Ensure movieList is set to an empty array in case of error
      } finally {
        updateLoading(false);
      }
    };

    fetchMovies(); // Call the async function to fetch movies
  }, [query]);

  return (
    <>
      <h1 className={styles.titleMovies}>Searching movie page</h1>
      <SearchBox updateQuery={(query) => setParams({ query })} />
      {isLoading && <Discuss />}
      {!isLoading && moviesList.length === 0 && query !== '' && (
        <h2>{`No results found for ${query}. Please try another search.`}</h2>
      )}
      {moviesList.length > 0 && <MovieList movieList={moviesList} />}
    </>
  );
}
