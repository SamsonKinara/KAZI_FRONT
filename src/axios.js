// src/axios.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000/api', // ✅ use /api prefix for token-based routes
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('auth_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

export default api;
