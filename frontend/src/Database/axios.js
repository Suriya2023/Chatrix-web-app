import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://chatrix-web-app.onrender.com',
  withCredentials: true,
});
