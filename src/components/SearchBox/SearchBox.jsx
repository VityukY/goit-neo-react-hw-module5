import {useState, useEffect} from 'react'
import searchMovieApi from '../../apis/search-movie-api'
import MovieList from '../MovieList/MovieList';


export default function SearchBox() {
   const [query, updateQuery] = useState('')
   const [movieList, setMovieList] = useState([]);

   const addMovies = (newMovies) => {
      setMovieList(() => {
      return [...newMovies];
    });
  }; 
   useEffect(() => {
      if (query == '') {
        return
     }
    const fetchMovies = async () => {
      try {
        const data = await searchMovieApi(query);  // Fetch movie data
        addMovies(data || []);
      } catch (error) {
        console.error('Error fetching movies:', error); // Handle any errors
        setMovieList([]);  // Ensure movieList is set to an empty array in case of error
      }
    };

    fetchMovies();  // Call the async function to fetch movies
  }, [query]);  // Empty dependency array ensures this runs only once on mount

   
   async function searchMovie(e) {
      e.preventDefault()
      updateQuery(e.target.query.value)
   }
   return (
      <>
         <form onSubmit={searchMovie}>
            <input type="text" name="query" placeholder="Search..." />
            <button type="submit">Search</button>
         </form>
         {movieList.length > 0 && <MovieList movieList={movieList} />}

      </>
   );
}
