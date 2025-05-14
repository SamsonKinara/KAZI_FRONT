<template>
    <div class="contact-page">
      <h2>Contact Us</h2>
      <p>If you have any questions or feedback, feel free to reach out!</p>
  
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="name">Your Name</label>
          <input v-model="name" id="name" type="text" required />
        </div>
  
        <div class="form-group">
          <label for="email">Your Email</label>
          <input v-model="email" id="email" type="email" required />
        </div>
  
        <div class="form-group">
          <label for="message">Message</label>
          <textarea v-model="message" id="message" rows="5" required></textarea>
        </div>
  
        <button type="submit">Send Message</button>
      </form>
  
      <p v-if="successMessage" class="success">{{ successMessage }}</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        name: '',
        email: '',
        message: '',
        successMessage: '',
      };
    },
    methods: {
      submitForm() {
        this.successMessage = "Thanks for contacting us!";
        this.name = '';
        this.email = '';
        this.message = '';
      },
    },
  };
  </script>
  
  <style scoped>
  .contact-page {
    max-width: 600px;
    margin: 2rem auto;
    padding: 2rem;
    background: white;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    font-family: 'Poppins', sans-serif;
  }
  
  .contact-page h2 {
    text-align: center;
    margin-bottom: 1rem;
    color: #4caf50;
  }
  
  .form-group {
    margin-bottom: 1.5rem;
  }
  
  label {
    display: block;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }
  
  input, textarea {
    width: 100%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 6px;
    font-size: 1rem;
  }
  
  button {
    background-color: #4caf50;
    color: white;
    padding: 12px 24px;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-size: 1rem;
  }
  
  button:hover {
    background-color: #388e3c;
  }
  
  .success {
    margin-top: 1rem;
    color: green;
    font-weight: bold;
    text-align: center;
  }
  </style>
  