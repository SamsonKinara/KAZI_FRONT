<template>
    <div class="job-details">
      <h2>{{ job.title }}</h2>
      <p>{{ job.description }}</p>
      <p><strong>Category:</strong> {{ job.category?.name }}</p>
      <p><strong>Posted by:</strong> {{ job.user?.name }}</p>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        job: null
      };
    },
    mounted() {
      const jobId = this.$route.params.id;
      this.getJobDetails(jobId);
    },
    methods: {
      async getJobDetails(id) {
        const response = await axios.get(`http://localhost:8000/api/marketplace/job/${id}`);
        this.job = response.data;
      }
    }
  };
  </script>
  
  <style scoped>
  /* Add your styles here */
  </style>
  