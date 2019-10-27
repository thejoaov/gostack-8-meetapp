import axios from 'axios';

const api = axios.create({
  baseURL: __DEV__
    ? 'http://localhost:3333'
    : 'https://backend-meetapp.herokuapp.com',
});

export default api;
