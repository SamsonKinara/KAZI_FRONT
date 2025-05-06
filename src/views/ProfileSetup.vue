<template>
    <div class="profile-setup-page">
      <main class="profile-setup-content">
        <section class="profile-setup-form">
          <h2>Complete Your Profile</h2>
  
          <form @submit.prevent="handleProfileUpdate">
            <div class="input-group">
              <label for="bio">Bio</label>
              <textarea
                id="bio"
                v-model="bio"
                placeholder="Tell us about yourself"
                rows="4"
              ></textarea>
            </div>
  
            <div class="input-group">
              <label for="phone">Phone</label>
              <input
                type="text"
                id="phone"
                v-model="phone"
                placeholder="Enter your phone number"
              />
            </div>
  
            <div class="input-group">
              <label for="location">Location</label>
              <input
                type="text"
                id="location"
                v-model="location"
                placeholder="Enter your location"
              />
            </div>
  
            <div class="input-group">
              <label for="profile_picture">Profile Picture URL</label>
              <input
                type="url"
                id="profile_picture"
                v-model="profile_picture"
                placeholder="Enter your profile picture URL"
              />
            </div>
  
            <button type="submit" :disabled="loading">
              {{ loading ? 'Updating Profile...' : 'Save Profile' }}
            </button>
          </form>
  
          <p class="error-message" v-if="errorMessage">{{ errorMessage }}</p>
        </section>
      </main>
  
      <footer>
        <p>&copy; 2025 KAZI HUB | All Rights Reserved</p>
      </footer>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        bio: '',
        phone: '',
        location: '',
        profile_picture: '',
        loading: false,
        errorMessage: '',
      };
    },
    methods: {
      async handleProfileUpdate() {
        this.loading = true;
        this.errorMessage = '';
  
        try {
          const response = await axios.put(
            `${process.env.APP_API_URL}/api/profile`, 
            {
              bio: this.bio,
              phone: this.phone,
              location: this.location,
              profile_picture: this.profile_picture
            },
            {
              headers: {
                Authorization: `Bearer ${localStorage.getItem('access_token')}`,
              },
            }
          );
  
          // Redirect to the dashboard or another page
          this.$router.push('/dashboard');
        } catch (error) {
          console.error('Profile update error:', error);
          this.errorMessage = error.response?.data?.message || 'An unexpected error occurred. Please try again.';
        } finally {
          this.loading = false;
        }
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add your custom styles here */
  .profile-setup-page {
    font-family: 'Poppins', sans-serif;
    background-color: #f7f7f7;
    min-height: 100vh;
    color: #333;
    display: flex;
    flex-direction: column;
  }
  
  .profile-setup-content {
    max-width: 1200px;
    margin: 3rem auto;
    padding: 0 1rem;
  }
  
  .profile-setup-form {
    background-color: white;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    max-width: 500px;
    margin: 0 auto;
  }
  
  .profile-setup-form h2 {
    font-size: 2rem;
    text-align: center;
    margin-bottom: 1rem;
  }
  
  .input-group {
    margin-bottom: 1rem;
  }
  
  .input-group label {
    display: block;
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }
  
  .input-group input,
  .input-group textarea {
    width: 100%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 6px;
    font-size: 1rem;
    outline: none;
    transition: border-color 0.3s ease;
  }
  
  .input-group input:focus,
  .input-group textarea:focus {
    border-color: #4caf50;
    box-shadow: 0 0 8px rgba(76, 175, 80, 0.4);
  }
  
  button {
    width: 100%;
    padding: 14px;
    background-color: #4caf50;
    color: white;
    font-size: 1.2rem;
    border: none;
    border-radius: 6px;
    cursor: pointer;
  }
  
  button:disabled {
    background-color: #aaa;
    cursor: not-allowed;
  }
  
  button:hover:not(:disabled) {
    background-color: #388e3c;
  }
  
  .error-message {
    color: red;
    font-size: 1rem;
    margin-bottom: 10px;
    text-align: center;
  }
  
  footer {
    text-align: center;
    padding: 1rem;
    background-color: #388e3c;
    color: white;
    font-size: 0.9rem;
  }
  </style>
  