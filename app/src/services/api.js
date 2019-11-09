import axios from 'axios';

const development = axios.create({
  baseURL: 'http://localhost:3333',
});

const production = axios.create({
  baseURL: 'https://thejoaov.tech',
});

export default __DEV__ ? development : production;
