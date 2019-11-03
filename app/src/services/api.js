import axios from 'axios';

const development = axios.create({
  baseURL: 'http://localhost:3333',
});

const production = axios.create({
  baseURL: 'http://157.245.214.25:3331',
});

export default __DEV__ ? development : production;
