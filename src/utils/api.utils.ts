import axios from 'axios';

axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL!;

axios.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error)
);

export const axiosInstance = axios;
