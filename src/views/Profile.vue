<template>
    <div class="profile-page">
      <div class="profile-container">
        <div class="profile-card">
          <img :src="user.profile_picture" alt="Profile Picture" class="profile-picture" />
          <h2>{{ user.name }}</h2>
          <p class="email">{{ user.email }}</p>
          <p class="bio">"{{ user.bio }}"</p>
  
          <div class="info-grid">
            <div>
              <h4>📞 Phone</h4>
              <p>{{ user.phone }}</p>
            </div>
            <div>
              <h4>📍 Location</h4>
              <p>{{ user.location }}</p>
            </div>
          </div>
  
          <router-link to="/setup-profile" class="edit-button">Edit Profile</router-link>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        user: {
          name: '',
          email: '',
          bio: '',
          phone: '',
          location: '',
          profile_picture: '',
        },
      };
    },
    async created() {
      try {
        const response = await axios.get(`${process.env.APP_API_URL}/api/user`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('access_token')}`,
          },
        });
        this.user = response.data;
      } catch (error) {
        console.error('Error fetching user profile:', error);
      }
    },
  };
  </script>
  
  <style scoped>
  .profile-page {
    background-color: #f5f7fa;
    min-height: 100vh;
    padding: 3rem 1rem;
    font-family: 'Poppins', sans-serif;
  }
  
  .profile-container {
    max-width: 800px;
    margin: 0 auto;
  }
  
  .profile-card {
    background: white;
    padding: 2rem;
    border-radius: 16px;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
    text-align: center;
  }
  
  .profile-picture {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 1rem;
    border: 4px solid #4caf50;
  }
  
  h2 {
    font-size: 1.8rem;
    margin: 0.5rem 0;
    color: #333;
  }
  
  .email {
    color: #666;
    margin-bottom: 1rem;
  }
  
  .bio {
    font-style: italic;
    color: #555;
    margin-bottom: 2rem;
  }
  
  .info-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    margin-bottom: 2rem;
    text-align: left;
  }
  
  .info-grid h4 {
    color: #3b9f61;
    margin-bottom: 0.3rem;
  }
  
  .info-grid p {
    color: #333;
    font-weight: 500;
  }
  
  .edit-button {
    display: inline-block;
    background-color: #4caf50;
    color: white;
    padding: 0.75rem 1.5rem;
    border-radius: 8px;
    text-decoration: none;
    transition: background-color 0.3s ease;
  }
  
  .edit-button:hover {
    background-color: #388e3c;
  }
  </style>
  