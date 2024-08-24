import { useEffect, useState } from 'react';
import trendsMovie from '../../apis/trending-movies-api.js';
import MovieList from '../../components/MovieList/MovieList.jsx';
import {Discuss} from 'react-loader-spinner'

export default function HomePage() {
  const [isLoading, updateLoading] = useState(false)
  const [movieList, setMovieList] = useState([]);
   const addMovies = (newMovies) => {
      setMovieList(() => {
      return [...newMovies];
    });
  }; 
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        updateLoading(true)
        const data = await trendsMovie();  // Fetch movie data
        addMovies(data || []);
      } catch (error) {
        console.error('Error fetching movies:', error); // Handle any errors
        setMovieList([]);  // Ensure movieList is set to an empty array in case of error
      }finally {
        updateLoading(false)
      }
    };

    fetchMovies();  // Call the async function to fetch movies
  }, []);  // Empty dependency array ensures this runs only once on mount

  return (
    <>
      {isLoading&& <Discuss/>}
      {movieList.length > 0 && <MovieList movieList={movieList} />}
    </>
  );
}
