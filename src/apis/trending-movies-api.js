import axios from 'axios';

const apiKey = 'cc2b187a687443d043073ffc1cc5231d';
const page = 1;
const baseUrl =
  'https://api.themoviedb.org/3/trending/movie/day?include_adult=false&language=en-US';
const options = {
  method: 'GET',
  url: `${baseUrl}&api_key=${apiKey}&page=${page}`,
  headers: {
    accept: 'application/json',
  },
};

async function trendsMovie() {

  try {
    const response = await axios.request(options); 
    return response.data.results; 
  } catch (error) {
    console.error('Error fetching trending movies:', error);
    throw error; 
  }
}

export default trendsMovie;
