import axios from 'axios';

const development = axios.create({
  baseURL: 'http://localhost:3333',
});

const production = axios.create({
  baseURL: 'https://backend-meetapp.herokuapp.com',
});

export default __DEV__ ? development : production;
