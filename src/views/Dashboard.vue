<template>
    <div class="dashboard">
      <h2>Welcome to your Dashboard</h2>
      <p>You are logged in!</p>
      <button @click="handleLogout">Logout</button>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    async created() {
      try {
        await axios.get('http://localhost:8000/api/user', { withCredentials: true });
      } catch (error) {
        // If user is not authenticated, redirect to login
        this.$router.push('/');
      }
    },
    methods: {
      async handleLogout() {
        await axios.post('http://localhost:8000/logout', {}, { withCredentials: true });
        this.$router.push('/');
      }
    }
  };
  </script>
  