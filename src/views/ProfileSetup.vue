
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
              v-model.trim="bio"
              placeholder="Tell us about yourself"
              rows="4"
              required
            ></textarea>
          </div>

          <div class="input-group">
            <label for="phone">Phone</label>
            <input
              type="tel"
              id="phone"
              v-model.trim="phone"
              placeholder="Enter your phone number"
              required
            />
          </div>

          <div class="input-group">
            <label for="location">Location</label>
            <input
              type="text"
              id="location"
              v-model.trim="location"
              placeholder="Enter your location"
              required
            />
          </div>

          <div class="input-group">
            <label for="profile_picture">Profile Picture URL</label>
            <input
              type="url"
              id="profile_picture"
              v-model.trim="profile_picture"
              placeholder="https://yourimage.com/pic.jpg"
              required
            />
          </div>

          <button type="submit" :disabled="loading">
            {{ loading ? 'Saving Profile...' : 'Save Profile' }}
          </button>

          <p class="error-message" v-if="errorMessage">{{ errorMessage }}</p>
          <p class="success-message" v-if="successMessage">{{ successMessage }}</p>
        </form>
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
      successMessage: '',
    };
  },
  methods: {
    async handleProfileUpdate() {
      this.loading = true;
      this.errorMessage = '';
      this.successMessage = '';

      try {
        const response = await axios.post(
          `${process.env.APP_API_URL}/api/profile-setup`,
          {
            bio: this.bio,
            phone: this.phone,
            location: this.location,
            profile_picture: this.profile_picture,
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('access_token')}`,
            },
          }
        );

        if (response.status === 200) {
          this.successMessage = 'Profile updated successfully!';
          setTimeout(() => this.$router.push('/dashboard'), 1000);
        }
      } catch (error) {
        if (error.response && error.response.data?.message) {
          this.errorMessage = error.response.data.message;
        } else {
          this.errorMessage = 'An error occurred while updating your profile.';
        }
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>

<style scoped>
/* Profile Setup Page Styles */
.profile-setup-page {
  font-family: 'Poppins', sans-serif;
  background-color: #f7f7f7;
  min-height: 100vh;
  color: #333;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.profile-setup-content {
  max-width: 1200px;
  margin: 3rem auto;
  padding: 0 1rem;
  flex: 1;
}

.profile-setup-form {
  background-color: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  max-width: 500px;
  margin: 0 auto;
}

.profile-setup-form h2 {
  font-size: 2rem;
  text-align: center;
  margin-bottom: 1.5rem;
}

.input-group {
  margin-bottom: 1.2rem;
}

.input-group label {
  display: block;
  font-size: 1rem;
  margin-bottom: 0.5rem;
  font-weight: 500;
}

.input-group input,
.input-group textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
}

.input-group input:focus,
.input-group textarea:focus {
  border-color: #4caf50;
  box-shadow: 0 0 6px rgba(76, 175, 80, 0.4);
  outline: none;
}

button {
  width: 100%;
  padding: 14px;
  background-color: #4caf50;
  color: white;
  font-size: 1.1rem;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s ease;
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
  font-size: 0.95rem;
  text-align: center;
  margin-top: 1rem;
}

.success-message {
  color: green;
  font-size: 0.95rem;
  text-align: center;
  margin-top: 1rem;
}

footer {
  text-align: center;
  padding: 1rem;
  background-color: #388e3c;
  color: white;
  font-size: 0.9rem;
}
</style>
