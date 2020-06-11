import { SERVER_ADDRESS } from 'react-native-dotenv';

import axios from 'axios';

const api = axios.create({
    baseURL: `http://${SERVER_ADDRESS}`,
});

export default api;
