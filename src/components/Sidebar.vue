<template>
    <div v-show="sidebarVisible" class="sidebar">
      <ul>
        <!-- Home Link -->
        <li>
          <router-link to="/" class="sidebar-link" @click="closeSidebar">Home</router-link>
        </li>
  
        <!-- Conditional links based on login status -->
        <li v-if="!isLoggedIn">
          <router-link to="/login" class="sidebar-link" @click="closeSidebar">Login</router-link>
        </li>
        <li v-if="!isLoggedIn">
          <router-link to="/signup" class="sidebar-link" @click="closeSidebar">Sign Up</router-link>
        </li>
  
        <li v-if="isLoggedIn">
          <router-link to="/dashboard" class="sidebar-link" @click="closeSidebar">Dashboard</router-link>
        </li>
  
        <li v-if="isLoggedIn">
          <button @click="logout" class="sidebar-link logout-btn">Logout</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      sidebarVisible: {
        type: Boolean,
        default: false
      }
    },
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
        const token = localStorage.getItem('access_token');
        this.isLoggedIn = !!token;
      },
      closeSidebar() {
        this.$emit('toggle-sidebar', false);
      },
      logout() {
        localStorage.removeItem('access_token');
        this.isLoggedIn = false;
        this.$router.push('/'); // Redirect to home after logging out
      }
    }
  };
  </script>
  
  <style scoped>
  .sidebar {
    background-color: #3b9f61;
    color: white;
    width: 250px;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9999;
    padding-top: 50px;
  }
  
  .sidebar ul {
    list-style: none;
    padding: 0;
  }
  
  .sidebar-link {
    display: block;
    padding: 1rem;
    color: white;
    text-decoration: none;
  }
  
  .sidebar-link:hover {
    background-color: #2c7a47;
    text-decoration: underline;
  }
  
  .logout-btn {
    background-color: #f44336;
    color: white;
    border: none;
    padding: 1rem;
    width: 100%;
  }
  
  .logout-btn:hover {
    background-color: #d32f2f;
  }
  </style>
  