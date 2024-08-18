import { Link } from 'react-router-dom';
export default function MovieList({ movieList }) {
   return <>
      <ul>
         {movieList.map((movie) => {
            return <Link to={`${movie.id}`} key={movie.id} >
               <li >
               {movie.title}
               <br />
               <img src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} alt="" />
               
            </li>
            </Link>
         })}
   </ul>
   </>
   
}

