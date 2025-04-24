// src/axios.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000/api', // ✅ Laravel API endpoint
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
});

// ✅ Automatically attach Bearer token to requests
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('access_token'); // Match your login/register usage
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// ✅ Handle 401 Unauthorized globally
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      localStorage.removeItem('access_token'); // Match token name
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default api;
