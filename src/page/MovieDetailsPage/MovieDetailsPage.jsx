import { useEffect, useState, useRef, Suspense } from 'react';
import movieDetails from '../../apis/movie-details-api'
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import styles from './MovieDetailsPage.module.css'
import {Discuss} from 'react-loader-spinner'


export default function MovieDetailsPage() {
   const [isLoading, updateLoading] =useState(false)
   const [movie, movieDetailsUpdate] = useState({})
   const { id } = useParams()
   const location = useLocation()
   const locationObj = useRef(location.state ?? '/')
   useEffect(() => {
      async function getMovieDetails(id) {
         try{
            updateLoading(true)
            const data = await movieDetails(id);
            movieDetailsUpdate(data);
         } catch (error) {
               console.log('error :>> ', error);
         } finally {
            updateLoading(false)
         }
   }
      getMovieDetails(id);
   },[id])
   return <>
   <div className={styles.detailsContainer}>
      <Link  className={styles.goBackButton} to={locationObj.current}>go back</Link>
      {isLoading&& <Discuss/>}
      {movie.title != '' && <><h2 className={styles.movieTitle}>{movie.title}</h2>
         <img className={styles.moviePoster} src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt="" />
         <p className={styles.movieDiscription}>{movie.overview}</p>
         </>}
      <ul className={styles.subNav}>
         <Link className={styles.castLink} to='cast'> cast </Link>
         <Link className={styles.reviewLink} to='reviews' > reviews </Link>
      </ul>
      </div>
      <Suspense fallback={<Discuss/>}>
         <Outlet/>
      </Suspense></>
   
}