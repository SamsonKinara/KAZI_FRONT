<template>
    <div class="marketplace">
      <header>
        <h2>Marketplace</h2>
        <input v-model="searchQuery" placeholder="Search jobs..." @input="searchJobs">
      </header>
  
      <section v-if="categories.length">
        <h3>Categories</h3>
        <div class="categories">
          <div v-for="category in categories" :key="category.id" class="category">
            <h4>{{ category.name }}</h4>
          </div>
        </div>
      </section>
  
      <section>
        <h3>Job Listings</h3>
        <div v-if="jobs.length">
          <div v-for="job in jobs" :key="job.id" class="job-card">
            <h4>{{ job.title }}</h4>
            <p>{{ job.description }}</p>
            <router-link :to="'/job/' + job.id">View Details</router-link>
          </div>
        </div>
        <div v-else>No jobs available</div>
      </section>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        jobs: [],
        categories: [],
        searchQuery: ''
      };
    },
    mounted() {
      this.getCategories();
      this.getJobs();
    },
    methods: {
      async getCategories() {
        const response = await axios.get('http://localhost:8000/api/marketplace/categories');
        this.categories = response.data;
      },
      async getJobs() {
        const response = await axios.get('http://localhost:8000/api/marketplace/jobs');
        this.jobs = response.data.data;
      },
      async searchJobs() {
        if (this.searchQuery) {
          const response = await axios.get('http://localhost:8000/api/marketplace/jobs', {
            params: { search: this.searchQuery }
          });
          this.jobs = response.data.data;
        } else {
          this.getJobs();
        }
      }
    }
  };
  </script>
  
  <style scoped>
  /* Add your styles here */
  </style>
  