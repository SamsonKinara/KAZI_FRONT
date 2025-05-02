// src/axios.js
import axios from 'axios';

// Create an Axios instance with default configurations
const api = axios.create({
  baseURL: 'http://localhost:8000/api', // Laravel API endpoint
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
});

// Automatically attach the Bearer token to every request
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('access_token'); // Retrieve the token from localStorage
    if (token) {
      config.headers.Authorization = `Bearer ${token}`; // Attach the token if available
    }
    return config; // Return the modified config
  },
  (error) => {
    return Promise.reject(error); // Handle any request errors
  }
);

// Handle 401 Unauthorized error globally
api.interceptors.response.use(
  (response) => response, // If response is okay, just return it
  (error) => {
    if (error.response && error.response.status === 401) {
      localStorage.removeItem('access_token'); // Remove token from localStorage on unauthorized
      window.location.href = '/login'; // Redirect to login page
    }
    return Promise.reject(error); // Return the error for further handling
  }
);

// Function to manually log out by revoking the token
export const logout = async () => {
  try {
    await api.post('/logout'); // Call the logout endpoint
    localStorage.removeItem('access_token'); // Remove the token from localStorage
    window.location.href = '/login'; // Redirect to login page
  } catch (error) {
    console.error('Logout failed:', error);
  }
};

// Export the Axios instance to use it throughout your application
export default api;
