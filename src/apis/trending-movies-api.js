import axios from 'axios';

const apiKey = 'cc2b187a687443d043073ffc1cc5231d';
const page = 1;
const baseUrl =
  'https://api.themoviedb.org/3/trending/movie/day?language=en-US';
const options = {
  method: 'GET',
  url: `${baseUrl}&api_key=${apiKey}&page=${page}`,
  headers: {
    accept: 'application/json',
  },
};

async function trendsMovie() {
  // 'async' is correctly placed here
  try {
    const response = await axios.request(options); // Await the API call
    console.log('response :>> ', response);
    return response.data.results; // Return the data
  } catch (error) {
    console.error('Error fetching trending movies:', error); // Handle errors
    throw error; // Re-throw the error for further handling if necessary
  }
}

export default trendsMovie;
