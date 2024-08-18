import mobieDetails from '../../apis/movie-details-api.js'
import { Link } from 'react-router-dom';
export default function MovieList({ movieList }) {
   return <>
      <ul>
         {movieList.map((movie) => {
            return <Link key={movie.id} to={movie.id}>
               <li onClick={()=>{mobieDetails(movie.id)}} >
               {movie.title}
               <br />
               <img src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} alt="" />
               
            </li>
            </Link>
         })}
   </ul>
   </>
   
}

