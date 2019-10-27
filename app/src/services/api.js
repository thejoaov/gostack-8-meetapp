import axios from 'axios';

const api = axios.create({
  baseURL: __DEV__
    ? 'http://192.168.18.9:3333'
    : 'https://backend-meetapp.herokuapp.com',
});

export default api;
