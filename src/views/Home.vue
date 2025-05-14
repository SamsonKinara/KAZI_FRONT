<template>
  <div class="home-page">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <h1>KAZI HUB</h1>
        <p>Your gateway to decent work and economic growth. Connect, learn, and grow your career today.</p>

        <router-link
          v-if="!isAuthenticated"
          to="/signup"
          class="cta-button"
        >
          Get Started
        </router-link>

        <router-link
          v-else
          to="/dashboard"
          class="cta-button"
        >
          Go to Dashboard
        </router-link>
      </div>
    </section>

    <!-- What We Offer -->
    <section class="features">
      <h2>What We Offer</h2>
      <div class="feature-grid">
        <div class="feature-card">
          <h3>Job Board</h3>
          <p>Discover job opportunities tailored for youth and graduates across various industries.</p>
        </div>
        <div class="feature-card">
          <h3>Skills Development</h3>
          <p>Access learning resources to grow your skills in web development, design, and more.</p>
        </div>
        <div class="feature-card">
          <h3>Mentorship</h3>
          <p>Connect with professionals and mentors to guide your career journey.</p>
        </div>
        <div class="feature-card">
          <h3>Networking</h3>
          <p>Engage with other youth through community programs and events.</p>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer>
      <p>&copy; 2025 KAZI HUB | Empowering youth for a better future</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: "Home",
  computed: {
    isAuthenticated() {
      return !!localStorage.getItem("access_token");
// Adjust if you use a different storage key
    }
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap');

.home-page {
  font-family: 'Poppins', sans-serif;
  color: #333;
  background-color: #f8f8f8;
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

.cta-button {
  background-color: white;
  color: #3b9f61;
  font-weight: 600;
  padding: 0.75rem 1.5rem;
  border-radius: 30px;
  text-decoration: none;
  transition: 0.3s ease;
}

.cta-button:hover {
  background-color: #f0f0f0;
}

/* Features Section */
.features {
  padding: 3rem 1rem;
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
}

.features h2 {
  font-size: 2.2rem;
  margin-bottom: 2rem;
  color: #2c3e50;
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
}

.feature-card {
  background-color: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.06);
  transition: transform 0.2s ease;
}

.feature-card:hover {
  transform: translateY(-5px);
}

.feature-card h3 {
  font-size: 1.5rem;
  color: #388e3c;
  margin-bottom: 1rem;
}

.feature-card p {
  font-size: 1rem;
  color: #555;
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
