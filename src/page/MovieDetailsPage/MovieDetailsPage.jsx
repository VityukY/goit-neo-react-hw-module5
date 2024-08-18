import { useState } from 'react';
import movieDetails from '../../apis/movie-details-api'
import { useParams } from "react-router-dom";

export default function MovieDetailsPage() {
   const [movie, movieDetailsUpdate] = useState({})
   const { id } = useParams()

   useState(() => {
      async function getMovieDetails(id) {
         const data = await movieDetails(id);
         movieDetailsUpdate (data)
      }
      getMovieDetails(id)
   },[])


   return <>
      {movie.length>0 && <h1>{movie.title}</h1>}

   </>
}