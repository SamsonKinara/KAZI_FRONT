<template>
    <div class="jobs-page">
      <h1 class="title">💼 Job Opportunities</h1>
      <p class="intro">
        Welcome to the KAZI HUB Job Board! Explore exciting job listings curated for young professionals,
        recent graduates, and career changers. Our goal is to connect you with meaningful work opportunities.
      </p>
  
      <div class="job-list">
        <div class="job-card" v-for="(job, index) in jobs" :key="index">
          <h2 class="job-title">{{ job.title }}</h2>
          <p class="job-company">🏢 {{ job.company }}</p>
          <p class="job-location">📍 {{ job.location }}</p>
          <p class="job-description">{{ job.description }}</p>
          <button class="apply-button">Apply Now</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "Jobs",
    data() {
      return {
        jobs: [
          {
            title: "Junior Frontend Developer",
            company: "GreenTech Innovations",
            location: "Nairobi, Kenya",
            description:
              "Join a growing team working on sustainable tech solutions. Knowledge of Vue.js and Tailwind preferred.",
          },
          {
            title: "Marketing Assistant",
            company: "Bluewave Digital",
            location: "Remote",
            description:
              "Help craft and deliver digital campaigns. Great for fresh graduates with a passion for storytelling.",
          },
          {
            title: "Customer Support Intern",
            company: "Zuri Connect",
            location: "Mombasa, Kenya",
            description:
              "Support clients and gain experience in tech-based customer service. Includes mentorship.",
          },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .jobs-page {
    padding: 2rem;
    max-width: 1000px;
    margin: 0 auto;
  }
  
  .title {
    font-size: 2rem;
    color: #3b9f61;
    margin-bottom: 1rem;
    font-weight: bold;
    text-align: center;
  }
  
  .intro {
    font-size: 1.1rem;
    color: #333;
    margin-bottom: 2rem;
    text-align: center;
  }
  
  .job-list {
    display: grid;
    gap: 1.5rem;
  }
  
  .job-card {
    background-color: #f9f9f9;
    border-left: 5px solid #3b9f61;
    padding: 1.5rem;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
  }
  
  .job-title {
    font-size: 1.3rem;
    font-weight: 600;
    color: #222;
    margin-bottom: 0.3rem;
  }
  
  .job-company,
  .job-location,
  .job-description {
    color: #555;
    margin-bottom: 0.5rem;
  }
  
  .apply-button {
    background-color: #3b9f61;
    color: white;
    border: none;
    padding: 0.6rem 1.2rem;
    border-radius: 5px;
    font-weight: bold;
    cursor: pointer;
    margin-top: 0.5rem;
  }
  
  .apply-button:hover {
    background-color: #368752;
  }
  </style>
  