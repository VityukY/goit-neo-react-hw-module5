import axios from 'axios';
const page = 1;

async function reviewsApi(id) {
  const options = {
    method: 'GET',
    url: `https://api.themoviedb.org/3/movie/${id}/reviews?include_adult=false&language=en-US&page=${page}&api_key=cc2b187a687443d043073ffc1cc5231d`,
    headers: {
      accept: 'application/json',
    },
  };
  try {
    const response = await axios.request(options); 
    return response.data.results; 
  } catch (error) {
    console.error('Error fetching trending movies:', error);
    throw error; 
  }
}

export default reviewsApi;
