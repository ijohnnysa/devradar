import axios from 'axios';

const api = axios.create({
  baseURL: 'https://devradar-ijohnnysa.herokuapp.com',
});

export default api;
