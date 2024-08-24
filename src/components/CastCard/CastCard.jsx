import styles from './CastCard.module.css'
export default function CastCard({actor}) {
   return <>
   <p className={styles.actorName}>{actor.name}</p>
   <img className={styles.actorPhoto} src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`} alt="" />
   </>
}