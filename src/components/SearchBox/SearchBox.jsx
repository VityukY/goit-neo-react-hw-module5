import toast, { Toaster } from "react-hot-toast";
import styles from './SearchBox.module.css'

export default function SearchBox({updateQuery}) {
   
   async function searchMovie(e) {
      e.preventDefault()
      if(e.target.query.value == '') {
         toast.error('Empty query is not allowed');
         
         return
      }
      updateQuery(e.target.query.value);
      e.target.query.value = '';      
   }
   return (
      <>
         <Toaster />
         <form className={styles.form} onSubmit={searchMovie}>
            <input className={styles.inputField} type="text" name="query" placeholder="Search..."/>
            <button className={styles.button} type="submit">Search</button>
         </form>
         

      </>
   );
}
