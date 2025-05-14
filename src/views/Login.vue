<template>
  <div class="login-page">
    <main class="login-content">
      <section class="login-form">
        <h2>Login to KAZI HUB</h2>

        <form @submit.prevent="handleLogin">
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
            {{ loading ? 'Logging in...' : 'Login' }}
          </button>
        </form>

        <p class="error-message" v-if="errorMessage">{{ errorMessage }}</p>
        <p class="signup-link">
          Don't have an account?
          <router-link to="/signup">Sign up</router-link>
        </p>
      </section>
    </main>

    <footer>
      <p>&copy; 2025 KAZI HUB | All Rights Reserved</p>
    </footer>
  </div>
</template>

<script>
import axios from 'axios'; // ✅ Make sure this is here

export default {
  data() {
    return {
      email: '',
      password: '',
      loading: false,
      errorMessage: '',
    };
  },
  methods: {
    async handleLogin() {
      this.loading = true;
      this.errorMessage = '';

      try {
        const response = await axios.post('http://127.0.0.1:8000/api/login', {
          email: this.email,
          password: this.password,
        }, {
          headers: {
            Accept: 'application/json',
          }
        });

        const token = response.data.token;

        if (token) {
          localStorage.setItem('access_token', token);
          axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
          this.$router.push('/dashboard');
        } else {
          throw new Error('No token returned from login response.');
        }
      } catch (error) {
        this.errorMessage =
          error.response?.data?.message || 'Login failed. Please check your credentials.';
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap');

.login-page {
  font-family: 'Poppins', sans-serif;
  background-color: #f7f7f7;
  min-height: 100vh;
  color: #333;
  display: flex;
  flex-direction: column;
}

.login-content {
  max-width: 1200px;
  margin: 3rem auto;
  padding: 0 1rem;
}

.login-form {
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  margin: 0 auto;
}

.login-form h2 {
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

.signup-link {
  text-align: center;
  font-size: 0.95rem;
}

.signup-link a {
  color: #4caf50;
  text-decoration: none;
  font-weight: bold;
}

.signup-link a:hover {
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
