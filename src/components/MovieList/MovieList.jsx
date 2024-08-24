import { Link, useLocation } from 'react-router-dom';
import styles from './MovieList.module.css'
export default function MovieList({ movieList }) {
   const location = useLocation()
   return <>
      <ul className={styles.MovieList}>
         {movieList.map((movie) => {
            return <Link to={`/movies/${movie.id}`} key={movie.id} state={location} >
               <li className={styles.moviesListItem}>
                  <h4 className={styles.mobieTitle} >{movie.title}</h4>
            
                  <img className={styles.movieListPoster} src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} alt="" />
               </li>
            </Link>
         })}
   </ul>
   </>
   
}

