import { useParams } from "react-router-dom";

export default function MovieDetailsPage() {
   const { id } = useParams()
   console.log('id :>> ', id);
   return <><h1>movie datails</h1></>
}