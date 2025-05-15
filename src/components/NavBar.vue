<template>
  <header class="navbar">
    <div class="left-section">
      <!-- Hamburger Menu -->
      <button class="hamburger" @click="toggleDrawer">☰</button>
      <div class="logo">KAZI HUB</div>
    </div>

    <!-- Top Nav Links -->
    <nav class="nav-links" :class="{ open: drawerOpen }">
      <router-link to="/" class="nav-link">Home</router-link>
      <router-link v-if="!isLoggedIn" to="/login" class="nav-link">Login</router-link>
      <router-link v-if="!isLoggedIn" to="/signup" class="nav-link">Sign Up</router-link>
      <router-link v-if="isLoggedIn" to="/dashboard" class="nav-link">Dashboard</router-link>
      <button v-if="isLoggedIn" @click="logout" class="logout-button">Logout</button>
    </nav>

    <!-- Side Drawer -->
    <div class="side-drawer" :class="{ open: drawerOpen }">
      <button class="close-drawer" @click="toggleDrawer">✕</button>
      <router-link to="/" class="drawer-link" @click="toggleDrawer">🏠 Home</router-link>
      <router-link to="/contact" class="drawer-link" @click="toggleDrawer">📞 Contact Us</router-link>
      <router-link to="/about" class="drawer-link" @click="toggleDrawer">📝 About Us</router-link>
      <router-link to="/jobs" class="drawer-link" @click="toggleDrawer">💼 Jobs</router-link>
      <router-link to="/skills" class="drawer-link">📚 Skills</router-link>
      <router-link to="/mentorship" class="drawer-link" @click="toggleDrawer">👥 Mentorship</router-link> 
      <router-link to="/networking" class="drawer-link" @click="toggleDrawer">🔗 Networking</router-link> 
      <router-link v-if="isLoggedIn" to="/profile" class="drawer-link" @click="toggleDrawer">👤 Profile</router-link>
    </div>

    <!-- Overlay -->
    <div v-if="drawerOpen" class="overlay" @click="toggleDrawer"></div>
  </header>
</template>


<script>
export default {
  data() {
    return {
      isLoggedIn: false,
      drawerOpen: false,  // Track side drawer state
    };
  },
  created() {
    this.checkLoginStatus();
  },
  methods: {
    checkLoginStatus() {
      const token = localStorage.getItem('access_token');
      this.isLoggedIn = !!token;
    },
    toggleDrawer() {
      this.drawerOpen = !this.drawerOpen;  // Toggle the drawer visibility
    },
    logout() {
      localStorage.removeItem('access_token');
      this.isLoggedIn = false;
      this.$router.push('/');  // Redirect to the homepage after logging out
    },
  },
};
</script>

<style scoped>
/* Navbar and layout styles */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #3b9f61;
}

.left-section {
  display: flex;
  align-items: center;
}

.logo {
  font-size: 1.8rem;
  font-weight: 600;
  color: white;
  margin-left: 10px;
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

.logout-button {
  margin-left: 1rem;
  padding: 0.5rem 1rem;
  background-color: #f44336;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.logout-button:hover {
  background-color: #d32f2f;
}

/* Hamburger menu (always visible on all screen sizes) */
.hamburger {
  font-size: 2rem;
  background: none;
  border: none;
  color: white;
  cursor: pointer;
}

@media (max-width: 768px) {
  .nav-links {
    display: none; /* Hide navigation links on small screens */
  }

  .nav-links.open {
    display: block; /* Show navigation links when side drawer is open */
  }
}

/* Side Drawer */
.side-drawer {
  position: fixed;
  top: 0;
  left: -250px;
  width: 250px;
  height: 100%;
  background-color: #3b9f61;
  display: flex;
  flex-direction: column;
  padding-top: 3rem;
  transition: left 0.3s ease;
  z-index: 10;
}

.side-drawer.open {
  left: 0;
}

.side-drawer .close-drawer {
  font-size: 2rem;
  color: white;
  background: none;
  border: none;
  margin-left: auto;
  margin-right: 1rem;
  cursor: pointer;
}

.drawer-link {
  color: white;
  font-size: 1.3rem;
  text-decoration: none;
  padding: 1rem 2rem;
}

.drawer-link:hover {
  background-color: #4caf50;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 5;
}
</style>
