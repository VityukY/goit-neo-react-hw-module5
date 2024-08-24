import styles from './ReviewCard.module.css'

export default function Review({ review }) {
   return <>
      <h3 className={styles.reviewAuthor} >{review.author}</h3>
      <p className={styles.reviewText}> {review.content}</p>
   </>
}