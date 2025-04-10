<template>
    <div class="register-page">
      <header>
        <h1>Create Account</h1>
      </header>
  
      <main>
        <section class="register-form">
          <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
  
          <form @submit.prevent="handleRegister">
            <div class="input-group">
              <label for="name">Full Name</label>
              <input
                type="text"
                id="name"
                v-model="name"
                placeholder="Enter your name"
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
                placeholder="Enter a password"
                required
                minlength="6"
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
                minlength="6"
              />
            </div>
  
            <button type="submit" :disabled="loading">Register</button>
          </form>
  
          <div v-if="loading" class="loading-spinner">Registering...</div>
  
          <p class="login-link">
            Already have an account?
            <router-link to="/">Login</router-link>
          </p>
        </section>
      </main>
  
      <footer>
        <p>&copy; 2025 KAZI HUB | All Rights Reserved</p>
      </footer>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
        errorMessage: '',
        loading: false,
      };
    },
    methods: {
      async handleRegister() {
        this.loading = true;
        this.errorMessage = '';
  
        try {
          await axios.get('http://localhost:8000/sanctum/csrf-cookie', {
            withCredentials: true,
          });
  
          const response = await axios.post(
            'http://localhost:8000/register',
            {
              name: this.name,
              email: this.email,
              password: this.password,
              password_confirmation: this.password_confirmation,
            },
            {
              withCredentials: true,
            }
          );
  
          console.log('✅ Registered:', response.data);
          this.$router.push('/dashboard');
        } catch (error) {
          console.error('❌ Registration error:', error);
          this.errorMessage =
            error.response?.data?.message || 'Registration failed.';
        } finally {
          this.loading = false;
        }
      },
    },
  };
  </script>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Julius+Sans+One&display=swap');
  
  .register-page {
    font-family: 'Julius Sans One', sans-serif;
    background-color: #0b8f36;
    min-height: 100vh;
    padding: 40px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  
  header h1 {
    color: white;
    font-size: 2.2rem;
    margin-bottom: 30px;
  }
  
  .register-form {
    background-color: white;
    padding: 25px;
    border-radius: 10px;
    width: 100%;
    max-width: 400px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }
  
  .input-group {
    margin-bottom: 15px;
    text-align: left;
  }
  
  .input-group label {
    display: block;
    font-size: 0.95rem;
    margin-bottom: 6px;
    color: #333;
  }
  
  .input-group input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 6px;
    font-size: 1rem;
    outline: none;
  }
  
  .input-group input:focus {
    border-color: #0b8f36;
    box-shadow: 0 0 5px rgba(11, 143, 54, 0.4);
  }
  
  button {
    width: 100%;
    padding: 12px;
    background-color: #0b8f36;
    color: white;
    font-size: 1.1rem;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    transition: background 0.3s ease;
  }
  
  button:disabled {
    background-color: #aaa;
    cursor: not-allowed;
  }
  
  button:hover {
    background-color: #0a7030;
  }
  
  .error-message {
    color: red;
    font-size: 0.9rem;
    margin-bottom: 10px;
    font-weight: bold;
  }
  
  .loading-spinner {
    color: #333;
    margin-top: 10px;
  }
  
  .login-link {
    margin-top: 15px;
    font-size: 0.95rem;
    text-align: center;
  }
  
  .login-link a {
    color: #0b8f36;
    text-decoration: none;
    font-weight: bold;
  }
  
  .login-link a:hover {
    text-decoration: underline;
  }
  
  footer {
    margin-top: 30px;
    color: white;
    font-size: 0.85rem;
    text-align: center;
  }
  </style>
  