import axios from 'axios';

const service = axios.create({
  baseURL: 'http://192.168.0.103:3333/',
});

export {service};
