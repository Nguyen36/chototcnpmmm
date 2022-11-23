import axios from 'axios';

const apiDev = 'http://localhost:8000/';

const baseURL =  apiDev;

const axiosClient = axios.create({
    baseURL,
    withCredentials: false,
    headers: {
        'Content-Type': 'application/json',
    },
});

export default axiosClient;
