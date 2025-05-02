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
  
            <div class="input-group">
              <label for="password_confirmation">Confirm Password</label>
              <input
                type="password"
                id="password_confirmation"
                v-model="password_confirmation"
                placeholder="Confirm your password"
                required
              />
            </div>
  
            <button type="submit" :disabled="loading">
              {{ loading ? 'Signing up...' : 'Sign Up' }}
            </button>
          </form>
  
          <p class="error-message" v-if="errorMessage">{{ errorMessage }}</p>
          <p class="login-link">
            Already have an account?
            <router-link to="/login">Login</router-link>
          </p>
        </section>
      </main>
  
      <footer>
        <p>&copy; 2025 KAZI HUB | All Rights Reserved</p>
      </footer>
    </div>
  </template>
  
  <script>
  import api from '@/axios';
  
  export default {
    data() {
      return {
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
        loading: false,
        errorMessage: '',
      };
    },
    methods: {
      async handleSignup() {
        this.loading = true;
        this.errorMessage = '';
  
        try {
          // Step 1: Register
          await api.post('/register', {
            name: this.name,
            email: this.email,
            password: this.password,
            password_confirmation: this.password_confirmation,
          });
  
          // Step 2: Login immediately after registration
          const loginResponse = await api.post('/login', {
            email: this.email,
            password: this.password,
          });
  
          const token = loginResponse.data.token;
          localStorage.setItem('access_token', token);
  
          // Step 3: Redirect to profile setup
          this.$router.push('/profile-setup');
        } catch (error) {
          if (error.response && error.response.data) {
            this.errorMessage =
              error.response.data.message || 'Signup failed. Please try again.';
          } else {
            this.errorMessage = 'An unexpected error occurred.';
          }
        } finally {
          this.loading = false;
        }
      },
    },
  };
  </script>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap');
  
  .signup-page {
    font-family: 'Poppins', sans-serif;
    background-color: #f7f7f7;
    min-height: 100vh;
    color: #333;
    display: flex;
    flex-direction: column;
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
  