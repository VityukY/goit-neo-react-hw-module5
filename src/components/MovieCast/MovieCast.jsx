import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import castApi from '../../apis/movie-cast-api';
import CastCard from "../CastCard/CastCard";
import styles from './MovieCast.module.css';
import { Discuss } from 'react-loader-spinner';

export default function MovieCast() {
   const { id } = useParams();
   const [cast, updateCast] = useState(null);
   const [isLoading, updateLoading] = useState(false);
   const [hasFetched, updateHasFetched] = useState(false);

   useEffect(() => {
      async function getCast(id) {
         try {
            updateLoading(true);
            const data = await castApi(id);
            updateCast(data);
         } catch {
            console.log('error');
         } finally {
            updateLoading(false);
            updateHasFetched(true);  // Mark the request as completed
         }
      }
      getCast(id);
   }, [id]);

   return (
      <>
         {isLoading && <Discuss />}
         
         {!isLoading && (
            <>
               {hasFetched && (
                  <h2>{cast && cast.length > 0 ? "Cast" : "Cast doesn't provided by archive"}</h2>
               )}
               {cast && cast.length > 0 && (
                  <ul className={styles.castList}>
                     {cast.map((actor) => (
                        <li className={styles.castCard} key={actor.id}>
                           <CastCard actor={actor} />
                        </li>
                     ))}
                  </ul>
               )}
            </>
         )}
      </>
   );
}
