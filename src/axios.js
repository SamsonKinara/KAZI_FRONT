import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000', // Your Laravel backend
  withCredentials: true, // Required for Sanctum cookies
});

export default api;
