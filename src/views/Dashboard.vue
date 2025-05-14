<template>
  <div class="dashboard-page">
    <!-- Header -->
    <header class="dashboard-header">
      <h1>Welcome back, {{ user?.name || 'Kazi User' }} 👋</h1>
      <p>Your career hub is ready.</p>
    </header>

    <!-- Loading & Error -->
    <p v-if="loading" class="loading-message">Loading your dashboard...</p>
    <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>

    <!-- Dashboard Content -->
    <div v-if="!loading && !errorMessage" class="dashboard-content">
      <section class="stats-grid">
        <div class="stat-card">
          <h3>Jobs Posted</h3>
          <p>12</p>
        </div>
        <div class="stat-card">
          <h3>Applications</h3>
          <p>34</p>
        </div>
        <div class="stat-card">
          <h3>Messages</h3>
          <p>5</p>
        </div>
      </section>

      <section class="dashboard-links">
        <router-link to="/profile" class="dashboard-link">👤 Profile</router-link>
        <router-link to="/marketplace" class="dashboard-link">🛒 Marketplace</router-link>
        <router-link to="/messages" class="dashboard-link">✉️ Messages</router-link>
      </section>
    </div>

    <!-- Footer -->
    <footer class="dashboard-footer">
      <p>&copy; 2025 KAZI HUB — All Rights Reserved</p>
    </footer>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      user: null,
      errorMessage: '',
      loading: true,
    };
  },
  mounted() {
    const token = localStorage.getItem('access_token');
    if (!token) {
      this.errorMessage = 'You are not logged in.';
      this.loading = false;
      return;
    }

    axios.get('http://127.0.0.1:8000/api/user', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        this.user = res.data;
      })
      .catch((err) => {
        console.error(err);
        this.errorMessage = 'This part is still under construction.';
      })
      .finally(() => {
        this.loading = false;
      });
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap');

.dashboard-page {
  font-family: 'Poppins', sans-serif;
  background: #f5f5f5;
  padding: 2rem;
  min-height: 100vh;
  color: #333;
}

.dashboard-header {
  text-align: center;
  margin-bottom: 2rem;
}

.dashboard-header h1 {
  font-size: 2rem;
  color: #388e3c;
}

.dashboard-header p {
  color: #777;
  font-size: 1rem;
}

.loading-message,
.error-message {
  text-align: center;
  font-size: 1rem;
  margin: 1rem 0;
}

.error-message {
  color: red;
}

.stats-grid {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
}

.stat-card {
  background: #fff;
  padding: 1.5rem;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  width: 180px;
  transition: 0.3s;
}

.stat-card:hover {
  transform: translateY(-4px);
}

.stat-card h3 {
  font-size: 1rem;
  color: #555;
  margin-bottom: 0.5rem;
}

.stat-card p {
  font-size: 1.5rem;
  font-weight: bold;
  color: #4caf50;
}

.dashboard-links {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.dashboard-link {
  background: #4caf50;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  text-decoration: none;
  font-weight: bold;
  transition: background-color 0.3s;
}

.dashboard-link:hover {
  background-color: #388e3c;
}

.dashboard-footer {
  text-align: center;
  margin-top: 3rem;
  font-size: 0.9rem;
  color: #999;
}
</style>
