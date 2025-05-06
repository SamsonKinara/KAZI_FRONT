<template>
  <div id="app">
    <!-- Constant Navbar -->
    <Navbar @toggle-sidebar="toggleSidebar" />

    <!-- Sidebar (Visible on small screens when hamburger is clicked) -->
    <div v-if="sidebarOpen" class="sidebar">
      <router-link to="/" class="sidebar-link">Home</router-link>
      <router-link to="/login" class="sidebar-link" v-if="!isLoggedIn">Login</router-link>
      <router-link to="/signup" class="sidebar-link" v-if="!isLoggedIn">Sign Up</router-link>
      <router-link to="/dashboard" class="sidebar-link" v-if="isLoggedIn">Dashboard</router-link>
      <button v-if="isLoggedIn" @click="logout" class="sidebar-link">Logout</button>
    </div>

    <!-- Page content will change here -->
    <router-view />
  </div>
</template>

<script>
import Navbar from '@/components/NavBar.vue';

export default {
  components: {
    Navbar,
  },
  data() {
    return {
      sidebarOpen: false,
      isLoggedIn: false,
    };
  },
  created() {
    this.checkLoginStatus();
  },
  methods: {
    checkLoginStatus() {
      const token = localStorage.getItem('access_token');
      if (token) {
        this.isLoggedIn = true;
      }
    },
    toggleSidebar(isOpen) {
      this.sidebarOpen = isOpen;
    },
    logout() {
      localStorage.removeItem('access_token');
      this.isLoggedIn = false;
      this.$router.push('/');  // Redirect to home after logging out
    }
  },
};
</script>

<style>
#app {
  font-family: 'Poppins', sans-serif;
  margin: 0;
  padding: 0;
}

/* Sidebar Styles */
.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  width: 250px;
  height: 100%;
  background-color: #3b9f61;
  padding: 20px;
  z-index: 100;
  display: flex;
  flex-direction: column;
  transform: translateX(-250px);
  transition: transform 0.3s ease-in-out;
}

.sidebar-link {
  color: white;
  font-weight: 500;
  text-decoration: none;
  margin-bottom: 1rem;
}

.sidebar-link:hover {
  text-decoration: underline;
}

/* Sidebar visibility when open */
.sidebar.open {
  transform: translateX(0);
}

/* Overlay for larger screens */
@media (min-width: 768px) {
  .sidebar {
    display: none; /* Hide sidebar on larger screens */
  }
}
</style>
