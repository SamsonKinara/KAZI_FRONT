<template>
    <div class="signup-page">
      
      <main class="signup-content">
        <section class="signup-form">
          <h2>Sign Up to KAZI HUB</h2>
  
          <form @submit.prevent="handleSignup">
            <div class="input-group">
              <label for="name">Full Name</label>
              <input
                type="text"
                id="name"
                v-model="name"
                placeholder="Enter your full name"
                required
              />
            </div>
  
            <div class="input-group">
              <label for="email">Email</label>
              <input
                type="email"
                id="email"
                v-model="email"
                placeholder="Enter your email"
                required
              />
            </div>
  
            <div class="input-group">
              <label for="password">Password</label>
              <input
                type="password"
                id="password"
                v-model="password"
                placeholder="Enter your password"
                required
              />
            </div>
  
            <button type="submit" :disabled="loading">
              {{ loading ? 'Signing up...' : 'Sign Up' }}
            </button>
          </form>
  
          <p class="error-message" v-if="errorMessage">{{ errorMessage }}</p>
          <p class="login-link">
            Already have an account? <router-link to="/login">Login</router-link>
          </p>
        </section>
      </main>
  
      <footer>
        <p>&copy; 2025 KAZI HUB | All Rights Reserved</p>
      </footer>
    </div>
  </template>
  
  <script>
  // Import Axios for making HTTP requests
  import axios from 'axios';
  
  export default {
    data() {
      return {
        name: '',
        email: '',
        password: '',
        loading: false,
        errorMessage: '',
      };
    },
    methods: {
      async handleSignup() {
        this.loading = true;
        this.errorMessage = '';
  
        try {
          const response = await axios.post('http://localhost:8000/api/signup', {
            name: this.name,
            email: this.email,
            password: this.password,
          });
  
          // Handle the response (for example, redirect to login or home)
          this.$router.push('/login');  // Redirect to login page after successful signup
        } catch (error) {
          console.error('Signup error:', error);
          // Better error handling
          if (error.response && error.response.data) {
            this.errorMessage = error.response.data.message || 'Signup failed. Please try again.';
          } else {
            this.errorMessage = 'An unexpected error occurred. Please try again later.';
          }
        } finally {
          this.loading = false;
        }
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add styles for your signup page */
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap');
  
  .signup-page {
    font-family: 'Poppins', sans-serif;
    background-color: #f7f7f7;
    min-height: 100vh;
    color: #333;
    display: flex;
    flex-direction: column;
  }
  
  .navbar {
    display: flex;
    justify-content: space-between;
    padding: 1rem 2rem;
    background-color: #3b9f61;
  }
  
  .logo {
    font-size: 1.8rem;
    font-weight: 600;
    color: white;
  }
  
  .nav-link {
    margin-left: 1rem;
    color: white;
    font-weight: 500;
    text-decoration: none;
  }
  
  .nav-link:hover {
    text-decoration: underline;
  }
  
  .signup-content {
    max-width: 1200px;
    margin: 3rem auto;
    padding: 0 1rem;
  }
  
  .signup-form {
    background-color: white;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    max-width: 400px;
    margin: 0 auto;
  }
  
  .signup-form h2 {
    font-size: 2rem;
    text-align: center;
    margin-bottom: 1rem;
  }
  
  .input-group {
    margin-bottom: 1rem;
  }
  
  .input-group label {
    display: block;
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }
  
  .input-group input {
    width: 100%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 6px;
    font-size: 1rem;
    outline: none;
    transition: border-color 0.3s ease;
  }
  
  .input-group input:focus {
    border-color: #4caf50;
    box-shadow: 0 0 8px rgba(76, 175, 80, 0.4);
  }
  
  button {
    width: 100%;
    padding: 14px;
    background-color: #4caf50;
    color: white;
    font-size: 1.2rem;
    border: none;
    border-radius: 6px;
    cursor: pointer;
  }
  
  button:disabled {
    background-color: #aaa;
    cursor: not-allowed;
  }
  
  button:hover:not(:disabled) {
    background-color: #388e3c;
  }
  
  .error-message {
    color: red;
    font-size: 1rem;
    margin-bottom: 10px;
    text-align: center;
  }
  
  .login-link {
    text-align: center;
    font-size: 0.95rem;
  }
  
  .login-link a {
    color: #4caf50;
    text-decoration: none;
    font-weight: bold;
  }
  
  .login-link a:hover {
    text-decoration: underline;
  }
  
  footer {
    text-align: center;
    padding: 1rem;
    background-color: #388e3c;
    color: white;
    font-size: 0.9rem;
  }
  </style>
  