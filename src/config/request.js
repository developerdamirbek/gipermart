import axios from 'axios';
import { loadState } from '../lib/storage';

const env = import.meta.env;

const request = axios.create({ baseURL: env.VITE_URL});

request.interceptors.request.use(
  (config) => {
    const token = loadState("user");
    config.headers = {
      ...config.headers,
      Authorization: `Bearer ${token?.accessToken}`
    };
    return config;
  },
  (error) => Promise.reject(error)
);

request.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      window.location.pathname = '/';
    }
    return Promise.reject(error);
  }
);

export { request };