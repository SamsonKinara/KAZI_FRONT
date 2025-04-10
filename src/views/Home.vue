<template>
  <div class="login-page">
    <header class="navbar">
      <div class="logo">KAZI HUB</div>
      <nav>
        <router-link to="/" class="nav-link">Login</router-link>
        <router-link to="/login" class="nav-link active">Home</router-link>
        <router-link to="/signup" class="nav-link">Sign Up</router-link>
      </nav>
    </header>

    <main class="login-form">
      <h1>Welcome Back</h1>
      <p>Please log in to your account</p>

      <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>

      <form @submit.prevent="handleLogin">
        <div class="form-group">
          <label for="email">Email</label>
          <input
            type="email"
            id="email"
            v-model="username"
            placeholder="Enter your email"
            required
          />
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input
            type="password"
            id="password"
            v-model="password"
            placeholder="Enter your password"
            required
            minlength="6"
          />
        </div>

        <button type="submit" :disabled="loading">
          {{ loading ? "Logging in..." : "Login" }}
        </button>
      </form>
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
      username: '',
      password: '',
      errorMessage: '',
      loading: false,
    };
  },
  methods: {
    async handleLogin() {
      this.loading = true;
      this.errorMessage = '';

      try {
        await axios.get('http://localhost:8000/sanctum/csrf-cookie', {
          withCredentials: true,
        });

        const response = await axios.post(
          'http://localhost:8000/login',
          {
            email: this.username,
            password: this.password,
          },
          {
            withCredentials: true,
          }
        );

        console.log('✅ Logged in:', response.data);
        this.$router.push('/dashboard');
      } catch (error) {
        console.error('❌ Login error:', error);
        this.errorMessage =
          error.response?.data?.message || 'Login failed. Please try again.';
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Julius+Sans+One&display=swap');

.login-page {
  font-family: 'Julius Sans One', sans-serif;
  background-color: #4caf50;
  min-height: 100vh;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.navbar {
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  background-color: #388e3c;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
}

.nav-link {
  margin-left: 1rem;
  color: white;
  text-decoration: none;
}

.nav-link:hover,
.nav-link.active {
  text-decoration: underline;
}

.login-form {
  background-color: white;
  color: #333;
  max-width: 400px;
  margin: 5rem auto;
  padding: 2rem;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.login-form h1 {
  margin-bottom: 0.5rem;
}

.login-form p {
  margin-bottom: 1.5rem;
}

.form-group {
  text-align: left;
  margin-bottom: 1rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
}

.form-group input {
  width: 100%;
  padding: 0.75rem;
  border-radius: 5px;
  border: 1px solid #ccc;
}

button {
  width: 100%;
  padding: 0.75rem;
  background-color: #4caf50;
  color: white;
  border: none;
  font-size: 1rem;
  border-radius: 5px;
  cursor: pointer;
}

button:disabled {
  background-color: #a5d6a7;
  cursor: not-allowed;
}

.error-message {
  color: red;
  font-size: 0.9rem;
  margin-bottom: 1rem;
  font-weight: bold;
}

footer {
  text-align: center;
  padding: 1rem;
  font-size: 0.9rem;
}
</style>
