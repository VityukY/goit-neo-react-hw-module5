import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReviewCard from "../ReviewCard/ReviewCard";
import reviewsApi from '../../apis/movie-reviews-api';
import styles from './MovieReviews.module.css';
import { Discuss } from 'react-loader-spinner';

export default function Reviews() {
   const { id } = useParams();
   const [reviews, updateReviews] = useState([]);
   const [isLoading, updateLoading] = useState(false);
   const [hasFetched, updateHasFetched] = useState(false);

   useEffect(() => {
      async function getReviews(id) {
         try {
            updateLoading(true);
            const data = await reviewsApi(id);
            updateReviews(data);
         } catch {
            console.log('error');
         } finally {
            updateLoading(false);
            updateHasFetched(true); // Mark the request as completed
         }
      }
      getReviews(id);
   }, [id]);

   return (
      <>
         {isLoading && <Discuss />}
         
         {!isLoading && (
            <>
               {hasFetched && (
                  <h2 className={styles.reviewsTitle}>
                     {reviews.length > 0 ? "Reviews" : "No reviews provided by archive"}
                  </h2>
               )}
               {reviews.length > 0 && (
                  <ul className={styles.reviewsList}>
                     {reviews.map((review) => (
                        <li className={styles.reviewsListItem} key={review.id}>
                           <ReviewCard review={review} />
                        </li>
                     ))}
                  </ul>
               )}
            </>
         )}
      </>
   );
}
