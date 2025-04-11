<template>
  <div class="login-page">
    <header>
      <h1>Welcome Back</h1>
    </header>

    <main>
      <section class="login-form">
        <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>

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

          <button type="submit" :disabled="loading">Login</button>
        </form>

        <div v-if="loading" class="loading-spinner">Logging in...</div>

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
import api from '@/axios';

export default {
  data() {
    return {
      email: '',
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
        const response = await api.post('/login', {
          email: this.email,
          password: this.password,
        });

        const token = response.data.token;
        localStorage.setItem('auth_token', token);
        api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

        console.log('✅ Logged in:', response.data);
        this.$router.push('/dashboard');
      } catch (error) {
        console.error('❌ Login error:', error);
        this.errorMessage = error.response?.data?.message || 'Login failed.';
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

.login-form {
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

.signup-link {
  margin-top: 15px;
  font-size: 0.95rem;
  text-align: center;
}

.signup-link a {
  color: #0b8f36;
  text-decoration: none;
  font-weight: bold;
}

.signup-link a:hover {
  text-decoration: underline;
}

footer {
  margin-top: 30px;
  color: white;
  font-size: 0.85rem;
  text-align: center;
}
</style>
