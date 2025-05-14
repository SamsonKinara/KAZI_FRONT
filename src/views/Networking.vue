<template>
    <div class="networking-page">
      <h1>Networking Opportunities</h1>
      <p>Explore various networking events and community programs designed to connect you with professionals and other youth.</p>
  
      <div class="events">
        <div class="event-card">
          <h2>Career Networking Event</h2>
          <p>Join our career networking event where you can meet recruiters, professionals, and peers.</p>
          <button @click="registerForEvent">Register Now</button>
        </div>
        <div class="event-card">
          <h2>Online Webinar</h2>
          <p>Attend our online webinar on professional growth and career development strategies.</p>
          <button @click="registerForEvent">Register Now</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "Networking",
    methods: {
      registerForEvent() {
        alert("You have successfully registered for the event!");
      },
    },
  };
  </script>
  
  <style scoped>
  .networking-page {
    font-family: 'Poppins', sans-serif;
    color: #333;
    background-color: #f8f8f8;
    min-height: 100vh;
    padding: 2rem;
  }
  
  h1 {
    font-size: 2.5rem;
    text-align: center;
    margin-bottom: 2rem;
    color: #388e3c;
  }
  
  p {
    font-size: 1.2rem;
    text-align: center;
    margin-bottom: 2rem;
    color: #555;
  }
  
  .events {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
  
  .event-card {
    background-color: white;
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.06);
    text-align: center;
    transition: transform 0.2s ease;
  }
  
  .event-card:hover {
    transform: translateY(-5px);
  }
  
  .event-card h2 {
    font-size: 1.8rem;
    color: #388e3c;
    margin-bottom: 1rem;
  }
  
  .event-card p {
    font-size: 1rem;
    color: #555;
  }
  
  button {
    padding: 0.7rem 1.5rem;
    background-color: #3b9f61;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-weight: 600;
  }
  
  button:hover {
    background-color: #2c7a4b;
  }
  </style>
  