import {API_HOST} from '@env';
import axios from 'axios';

const service = axios.create({
  baseURL: API_HOST,
});

export {service};
