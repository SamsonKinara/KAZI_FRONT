<template>
  <div class="home-container">
    <header class="header">
      <h1 class="title">Kazi Hub</h1>
      <nav class="nav-links">
        <router-link to="/" class="nav-link">Login</router-link>
        <router-link to="/login" class="nav-link">Home</router-link>
        <router-link to="/signup" class="nav-link">Sign Up</router-link>
      </nav>
    </header>

    <main class="hero-section">
      <div class="hero-content">
        <h2 class="hero-title">Connecting You to Opportunities</h2>
        <p class="hero-subtitle">
          Discover jobs, projects, and freelance gigs all in one place.
        </p>
        <div class="hero-buttons">
          <router-link to="/signup" class="btn btn-primary">Get Started</router-link>
        
        </div>
      </div>
    </main>

    <footer class="footer">
      <p>&copy; 2025 Kazi Hub. All rights reserved.</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'Home',
};
</script>

<style scoped>
.home-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #4caf50; /* plain green */
  color: white;
  font-family: 'Julius Sans One', sans-serif;

}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  background-color: rgba(0, 0, 0, 0.2);
}

.title {
  font-size: 2rem;
  font-weight: bold;
}

.nav-links {
  display: flex;
  gap: 20px;
}

.nav-link {
  color: white;
  font-weight: 500;
  text-decoration: none;
  transition: color 0.3s;
}

.nav-link:hover {
  color: #ffd700;
}

.hero-section {
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 60px 20px;
  text-align: center;
}

.hero-content {
  max-width: 600px;
}

.hero-title {
  font-size: 2.5rem;
  margin-bottom: 20px;
  font-weight: bold;
}

.hero-subtitle {
  font-size: 1.2rem;
  margin-bottom: 30px;
  line-height: 1.5;
}

.hero-buttons {
  display: flex;
  gap: 20px;
  justify-content: center;
}

.btn {
  padding: 12px 24px;
  font-size: 1rem;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 600;
  transition: background-color 0.3s;
}

.btn-primary {
  background-color: white;
  color: #0ea56f;
}

.btn-primary:hover {
  background-color: #f0f0f0;
}

.btn-secondary {
  background-color: transparent;
  border: 2px solid white;
  color: white;
}

.btn-secondary:hover {
  background-color: rgba(255, 255, 255, 0.2);
}

.footer {
  text-align: center;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.2);
  font-size: 0.9rem;
}
</style>
