import axios from 'axios';
const page = 1;

async function searchMovieApi(query) {
  const options = {
    method: 'GET',
    url: `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=${page}&api_key=cc2b187a687443d043073ffc1cc5231d`,
    headers: {
      accept: 'application/json',
    },
  };
  // 'async' is correctly placed here
  try {
    const response = await axios.request(options); // Await the API call
    return response.data.results; // Return the data
  } catch (error) {
    console.error('Error fetching trending movies:', error); // Handle errors
    throw error; // Re-throw the error for further handling if necessary
  }
}

export default searchMovieApi;
