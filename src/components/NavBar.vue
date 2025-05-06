<template>
  <header class="navbar">
    <div class="logo">KAZI HUB</div>
    
    <!-- Hamburger Menu (Only visible on small screens) -->
    <button class="hamburger" @click="toggleSidebar" v-if="isMobile">
      ☰
    </button>

    <!-- Navigation links (Visible on larger screens) -->
    <nav v-if="!isMobile || sidebarOpen">
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
      isMobile: false,  // Flag to check if screen size is small
      sidebarOpen: false,  // Track sidebar state
    };
  },
  created() {
    this.checkLoginStatus();
    this.checkMobileScreenSize();
    window.addEventListener('resize', this.checkMobileScreenSize);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.checkMobileScreenSize);
  },
  methods: {
    checkLoginStatus() {
      const token = localStorage.getItem('access_token');
      if (token) {
        this.isLoggedIn = true;
      }
    },
    toggleSidebar() {
      this.sidebarOpen = !this.sidebarOpen;  // Toggle the sidebar visibility
      this.$emit('toggle-sidebar', this.sidebarOpen);  // Emit the event to update parent
    },
    checkMobileScreenSize() {
      this.isMobile = window.innerWidth <= 768;  // Set isMobile flag
      if (!this.isMobile) {
        this.sidebarOpen = false;  // Close sidebar when on larger screens
      }
    },
    logout() {
      localStorage.removeItem('access_token');
      this.isLoggedIn = false;
      this.$router.push('/');  // Redirect to home after logging out
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

/* Hamburger button */
.hamburger {
  display: none;
  font-size: 2rem;
  background: none;
  border: none;
  color: white;
  cursor: pointer;
}

@media (max-width: 768px) {
  .hamburger {
    display: block;
  }

  nav {
    display: none; /* Hide navigation links on small screens */
  }

  nav.open {
    display: block; /* Show navigation links when sidebar is open */
  }
}
</style>
