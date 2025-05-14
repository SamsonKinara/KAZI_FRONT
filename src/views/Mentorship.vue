<template>
    <div class="mentorship-page">
      <!-- Hero Section -->
      <section class="hero">
        <div class="hero-content">
          <h1>Mentorship</h1>
          <p>Get guidance from industry professionals and take your career to the next level.</p>
        </div>
      </section>
  
      <!-- Mentorship Programs -->
      <section class="mentorship-programs">
        <h2>Our Mentorship Programs</h2>
        <div class="programs-grid">
          <div class="program-card" v-for="program in mentorshipPrograms" :key="program.id">
            <h3>{{ program.title }}</h3>
            <p>{{ program.description }}</p>
            <router-link :to="'/dashboard'">Sign Up</router-link>
          </div>
        </div>
      </section>
  
      <!-- Testimonials Section -->
      <section class="testimonials">
        <h2>What Our Mentees Say</h2>
        <div class="testimonial-grid">
          <div class="testimonial-card" v-for="testimonial in testimonials" :key="testimonial.id">
            <p>"{{ testimonial.quote }}"</p>
            <p>- {{ testimonial.name }}</p>
          </div>
        </div>
      </section>
  
      <!-- Footer -->
      <footer>
        <p>&copy; 2025 KAZI HUB | Empowering youth with guidance</p>
      </footer>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        mentorshipPrograms: [
          {
            id: 1,
            title: 'Web Development Mentorship',
            description: 'Get paired with an experienced web developer to learn the ins and outs of front-end and back-end development.'
          },
          {
            id: 2,
            title: 'Graphic Design Mentorship',
            description: 'Learn how to create stunning designs from seasoned graphic designers and expand your creative skills.'
          },
          {
            id: 3,
            title: 'Marketing Mentorship',
            description: 'Dive deep into digital marketing strategies and enhance your knowledge with hands-on experience.'
          }
        ],
        testimonials: [
          {
            id: 1,
            quote: 'This mentorship helped me land my first job as a web developer!',
            name: 'John Doe'
          },
          {
            id: 2,
            quote: 'I gained so many valuable insights from my mentor. It was truly life-changing.',
            name: 'Jane Smith'
          }
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  /* Mentorship Page Styles */
  .mentorship-page {
    font-family: 'Poppins', sans-serif;
    background-color: #f7f7f7;
    color: #333;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
  
  /* Hero Section */
  .hero {
    background: linear-gradient(135deg, #3b9f61, #2c7a4b);
    color: white;
    text-align: center;
    padding: 4rem 2rem;
  }
  
  .hero-content h1 {
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 1rem;
  }
  
  .hero-content p {
    font-size: 1.3rem;
    max-width: 600px;
    margin: 0 auto 2rem;
  }
  
  /* Mentorship Programs Section */
  .mentorship-programs {
    padding: 3rem 1rem;
    max-width: 1200px;
    margin: 0 auto;
    text-align: center;
  }
  
  .mentorship-programs h2 {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    color: #2c3e50;
  }
  
  .programs-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 2rem;
  }
  
  .program-card {
    background-color: white;
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.06);
    transition: transform 0.2s ease;
  }
  
  .program-card:hover {
    transform: translateY(-5px);
  }
  
  .program-card h3 {
    font-size: 1.5rem;
    color: #388e3c;
    margin-bottom: 1rem;
  }
  
  .program-card p {
    font-size: 1rem;
    color: #555;
  }
  
  .program-card a {
    display: inline-block;
    margin-top: 1rem;
    padding: 0.5rem 1rem;
    background-color: #4caf50;
    color: white;
    text-decoration: none;
    border-radius: 5px;
  }
  
  .program-card a:hover {
    background-color: #45a049;
  }
  
  /* Testimonials Section */
  .testimonials {
    padding: 3rem 1rem;
    background-color: #f0f0f0;
    text-align: center;
  }
  
  .testimonials h2 {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    color: #2c3e50;
  }
  
  .testimonial-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 2rem;
  }
  
  .testimonial-card {
    background-color: white;
    padding: 1.5rem;
    border-radius: 10px;
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.06);
  }
  
  .testimonial-card p {
    font-size: 1rem;
    color: #555;
    margin-bottom: 1rem;
  }
  
  .testimonial-card p:last-child {
    font-style: italic;
    color: #388e3c;
  }
  
  /* Footer */
  footer {
    margin-top: auto;
    background-color: #388e3c;
    color: white;
    text-align: center;
    padding: 1.5rem;
    font-size: 0.95rem;
  }
  </style>
  