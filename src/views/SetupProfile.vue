<template>
    <div class="setup-page">
      <div class="setup-container">
        <div class="setup-card">
          <h2>Set Up Your Profile</h2>
  
          <form @submit.prevent="handleSubmit">
            <div class="input-group">
              <label for="bio">Bio</label>
              <textarea
                id="bio"
                v-model="form.bio"
                placeholder="Tell us about yourself..."
                rows="4"
                required
              ></textarea>
            </div>
  
            <div class="input-group">
              <label for="phone">Phone</label>
              <input
                id="phone"
                v-model="form.phone"
                type="text"
                placeholder="Enter phone number"
                required
              />
            </div>
  
            <div class="input-group">
              <label for="location">Location</label>
              <input
                id="location"
                v-model="form.location"
                type="text"
                placeholder="Enter your location"
                required
              />
            </div>
  
            <div class="input-group">
              <label for="profile_picture">Profile Picture URL</label>
              <input
                id="profile_picture"
                v-model="form.profile_picture"
                type="url"
                placeholder="https://example.com/photo.jpg"
                required
              />
            </div>
  
            <button type="submit" :disabled="loading">
              {{ loading ? "Saving..." : "Save Profile" }}
            </button>
          </form>
  
          <p class="error-message" v-if="error">{{ error }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    data() {
      return {
        form: {
          bio: "",
          phone: "",
          location: "",
          profile_picture: "",
        },
        loading: false,
        error: "",
      };
    },
    async created() {
      // Fetch existing profile and prefill form if available
      try {
        const token = localStorage.getItem("access_token");
        if (!token) return;
  
        const response = await axios.get("http://localhost:8000/api/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
  
        this.form = {
          bio: response.data.bio || "",
          phone: response.data.phone || "",
          location: response.data.location || "",
          profile_picture: response.data.profile_picture || "",
        };
      } catch (error) {
        // Do nothing if profile doesn't exist yet or error occurs
      }
    },
    methods: {
      async handleSubmit() {
        this.loading = true;
        this.error = "";
  
        try {
          const token = localStorage.getItem("access_token");
          if (!token) {
            this.error = "You must be logged in to update your profile.";
            this.loading = false;
            return;
          }
  
          const response = await axios.post(
            "http://localhost:8000/api/profile",
            this.form,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
  
          if (response.status === 200) {
            this.$router.push("/profile");
          }
        } catch (err) {
          if (
            err.response &&
            err.response.data &&
            err.response.data.message
          ) {
            this.error = err.response.data.message;
          } else {
            this.error = "Failed to update profile. Please try again.";
          }
        } finally {
          this.loading = false;
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .setup-page {
    background-color: #f4f7fa;
    min-height: 100vh;
    padding: 3rem 1rem;
    font-family: "Poppins", sans-serif;
  }
  
  .setup-container {
    max-width: 600px;
    margin: 0 auto;
  }
  
  .setup-card {
    background: white;
    padding: 2rem;
    border-radius: 16px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  }
  
  h2 {
    font-size: 1.8rem;
    color: #333;
    text-align: center;
    margin-bottom: 2rem;
  }
  
  .input-group {
    margin-bottom: 1.5rem;
  }
  
  label {
    display: block;
    font-weight: 500;
    margin-bottom: 0.5rem;
    color: #444;
  }
  
  input,
  textarea {
    width: 100%;
    padding: 0.75rem 1rem;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 8px;
    outline: none;
    transition: border-color 0.2s;
  }
  
  input:focus,
  textarea:focus {
    border-color: #4caf50;
    box-shadow: 0 0 6px rgba(76, 175, 80, 0.3);
  }
  
  button {
    width: 100%;
    padding: 0.9rem;
    background-color: #4caf50;
    color: white;
    font-size: 1.1rem;
    font-weight: 600;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    transition: background-color 0.2s ease;
  }
  
  button:hover:not(:disabled) {
    background-color: #388e3c;
  }
  
  button:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
  
  .error-message {
    color: red;
    font-size: 0.95rem;
    text-align: center;
    margin-top: 1rem;
  }
  </style>
  