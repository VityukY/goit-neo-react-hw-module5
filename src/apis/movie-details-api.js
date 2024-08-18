import axios from 'axios';

const apiKey = 'cc2b187a687443d043073ffc1cc5231d';
const baseUrl = 'https://api.themoviedb.org/3/movie/';

async function movieDetails(movieId) {
  const options = {
    method: 'GET',
    url: `${baseUrl}550?api_key=${apiKey}&movie-id=${movieId}`,
    headers: {
      accept: 'application/json',
    },
  };

  // 'async' is correctly placed here
  try {
    const response = await axios.request(options); // Await the API call
    return response.data; // Return the data
  } catch (error) {
    console.error('Error fetching trending movies:', error); // Handle errors
    throw error; // Re-throw the error for further handling if necessary
  }
}

export default movieDetails;
