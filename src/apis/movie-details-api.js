import axios from 'axios';

const apiKey = 'cc2b187a687443d043073ffc1cc5231d';
const baseUrl = 'https://api.themoviedb.org/3/movie/';

async function movieDetails(movieId) {
  const options = {
    method: 'GET',
    url: `${baseUrl}${movieId}?api_key=${apiKey}&include_adult=false`,
    headers: {
      accept: 'application/json',
    },
  };


  try {
    const response = await axios.request(options); 
    return response.data;
  } catch (error) {
    console.error('Error fetching trending movies:', error); 
    throw error; 
  }
}

export default movieDetails;
