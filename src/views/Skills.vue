<template>
    <div class="skills-page">
      <!-- Header -->
      <section class="skills-hero">
        <h1>Skills Development</h1>
        <p>Grow your career with in-demand skills and free learning resources.</p>
      </section>
  
      <!-- Categories -->
      <section class="skills-categories">
        <h2>Explore Categories</h2>
        <div class="category-grid">
          <div class="category-card" v-for="(category, index) in categories" :key="index">
            <h3>{{ category.name }}</h3>
            <p>{{ category.description }}</p>
            <router-link :to="category.link" class="explore-btn">Explore</router-link>
          </div>
        </div>
      </section>
  
      <!-- Call To Action -->
      <section class="skills-cta">
        <h2>Ready to Level Up?</h2>
        <p>Start your learning journey today and unlock new career opportunities.</p>
        <router-link to="/dashboard" class="cta-btn">Go to Dashboard</router-link>
      </section>
    </div>
  </template>
  
  <script>
  export default {
    name: "Skills",
    data() {
      return {
        categories: [
          {
            name: "Web Development",
            description: "Learn HTML, CSS, JavaScript, and popular frameworks like Vue, React.",
            link: "/skills/web-development",
          },
          {
            name: "Graphic Design",
            description: "Master tools like Figma, Canva, Photoshop and boost your design skills.",
            link: "/skills/graphic-design",
          },
          {
            name: "Entrepreneurship",
            description: "Learn how to build, launch, and grow your own business ideas.",
            link: "/skills/entrepreneurship",
          },
          {
            name: "Digital Marketing",
            description: "Understand SEO, content creation, social media strategies, and analytics.",
            link: "/skills/digital-marketing",
          },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .skills-page {
    font-family: 'Poppins', sans-serif;
    background-color: #f9f9f9;
    color: #333;
  }
  
  /* Hero */
  .skills-hero {
    background: linear-gradient(135deg, #3b9f61, #2c7a4b);
    color: white;
    text-align: center;
    padding: 4rem 2rem;
  }
  
  .skills-hero h1 {
    font-size: 2.8rem;
    font-weight: 700;
  }
  
  .skills-hero p {
    font-size: 1.2rem;
    margin-top: 1rem;
  }
  
  /* Categories */
  .skills-categories {
    padding: 3rem 1.5rem;
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .skills-categories h2 {
    font-size: 2rem;
    text-align: center;
    margin-bottom: 2rem;
  }
  
  .category-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 2rem;
  }
  
  .category-card {
    background: white;
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.05);
    transition: transform 0.2s;
    text-align: center;
  }
  
  .category-card:hover {
    transform: translateY(-5px);
  }
  
  .category-card h3 {
    color: #3b9f61;
    margin-bottom: 0.5rem;
  }
  
  .category-card p {
    font-size: 0.95rem;
    margin-bottom: 1rem;
  }
  
  .explore-btn {
    text-decoration: none;
    background-color: #3b9f61;
    color: white;
    padding: 0.5rem 1.2rem;
    border-radius: 25px;
    font-weight: 500;
    transition: background-color 0.3s;
  }
  
  .explore-btn:hover {
    background-color: #2c7a4b;
  }
  
  /* CTA */
  .skills-cta {
    background-color: #e8f5e9;
    padding: 3rem 1.5rem;
    text-align: center;
  }
  
  .skills-cta h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
  
  .skills-cta p {
    font-size: 1.1rem;
    margin-bottom: 1.5rem;
  }
  
  .cta-btn {
    background-color: #3b9f61;
    color: white;
    padding: 0.75rem 2rem;
    border-radius: 30px;
    text-decoration: none;
    font-weight: 600;
  }
  
  .cta-btn:hover {
    background-color: #2c7a4b;
  }
  </style>
  