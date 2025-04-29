<template>
  <header class="navbar">
    <div class="logo">KAZI HUB</div>
    <nav>
      <router-link to="/" class="nav-link">Home</router-link>
      <router-link v-if="!isLoggedIn" to="/login" class="nav-link">Login</router-link>
      <router-link v-if="!isLoggedIn" to="/signup" class="nav-link">Sign Up</router-link>
      <router-link v-if="isLoggedIn" to="/dashboard" class="nav-link">Dashboard</router-link>
      <button v-if="isLoggedIn" @click="logout" class="nav-link">Logout</button>
    </nav>
  </header>
</template>

<script>

export default {
  data() {
    return {
      isLoggedIn: false,
    };
  },
  created() {
    this.checkLoginStatus();
  },
  methods: {
    checkLoginStatus() {
      // Check if the user is logged in (check if access token exists)
      const token = localStorage.getItem('access_token');
      if (token) {
        this.isLoggedIn = true;
      }
    },
    logout() {
      // Remove the token and log out the user
      localStorage.removeItem('access_token');
      this.isLoggedIn = false;
      this.$router.push('/'); // Redirect to home after logging out
    }
  },
};
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
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

button {
  margin-left: 1rem;
  padding: 0.5rem 1rem;
  background-color: #f44336;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #d32f2f;
}
</style>
