<template>
  <div id="app">
    <!-- Constant Navbar -->
    <Navbar />
    
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
};
</script>

<style>
/* Global styles (if any) can go here */
#app {
  font-family: 'Poppins', sans-serif;
  margin: 0;
  padding: 0;
}
</style>
