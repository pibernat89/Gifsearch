import axios from 'axios';

const API_KEY = 'l56nkLqF6mRBdJOvpf8gLOwZxdHoxTQq';

export const searchGifs = async (query) => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=${API_KEY}`;
  const response = await axios.get(url);
  return response.data.data;
};