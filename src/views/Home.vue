<template>
  <div class="home-page">
    <!-- Main Content -->
    <main class="home-content">
      <section class="hero">
        <h2>Welcome to KAZI HUB</h2>
        <p>Find amazing job opportunities or post your service needs. Let's build your career!</p>
        <input
          type="text"
          v-model="searchQuery"
          placeholder="Search jobs..."
          @input="searchJobs"
        />
      </section>

      <!-- Job Categories -->
      <section class="job-categories">
        <h3>Explore Job Categories</h3>
        <div class="categories">
          <div class="category" v-for="category in categories" :key="category.id">
            <h4>{{ category.name }}</h4>
            <p>{{ category.description }}</p>
          </div>
        </div>
      </section>

      <!-- Featured Jobs -->
      <section class="featured-jobs">
        <h3>Featured Jobs</h3>
        <div class="jobs">
          <div class="job-card" v-for="job in featuredJobs" :key="job.id">
            <h4>{{ job.title }}</h4>
            <p>{{ job.description }}</p>
            <router-link :to="'/job/' + job.id" class="job-link">View Details</router-link>
          </div>
        </div>
      </section>
    </main>

    <!-- Footer -->
    <footer>
      <p>&copy; 2025 KAZI HUB | All Rights Reserved</p>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: '',
      categories: [
        { id: 1, name: 'Web Development', description: 'Build and develop websites and apps.' },
        { id: 2, name: 'Graphic Design', description: 'Create logos, marketing materials, and more.' },
        { id: 3, name: 'Marketing', description: 'Digital marketing, SEO, and advertising services.' }
      ],
      featuredJobs: [
        { id: 1, title: 'Build a website', description: 'We need a web developer to build a responsive website.' },
        { id: 2, title: 'Design a logo', description: 'Looking for a logo design for a new tech startup.' },
        { id: 3, title: 'Social Media Marketing', description: 'Help manage and grow our social media presence.' }
      ]
    };
  },
  methods: {
    searchJobs() {
      console.log('Searching for:', this.searchQuery);
      // Implement search functionality here
    }
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap');

.home-page {
  font-family: 'Poppins', sans-serif;
  background-color: #f7f7f7;
  min-height: 100vh;
  color: #333;
  display: flex;
  flex-direction: column;
}

.home-content {
  max-width: 1200px;
  margin: 3rem auto;
  padding: 0 1rem;
}

.hero {
  text-align: center;
  background-color: #388e3c;
  padding: 2rem 1rem;
  border-radius: 8px;
  color: white;
}

.hero h2 {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
}

.hero p {
  font-size: 1.2rem;
  margin-bottom: 1rem;
}

.hero input {
  padding: 1rem;
  font-size: 1rem;
  border-radius: 5px;
  border: none;
  width: 100%;
  max-width: 600px;
  margin-top: 1rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.job-categories,
.featured-jobs {
  margin-top: 3rem;
}

.job-categories h3,
.featured-jobs h3 {
  font-size: 2rem;
  color: #333;
  margin-bottom: 1.5rem;
}

.categories {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
}

.category {
  background-color: #ffffff;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.category:hover {
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
}

.category h4 {
  font-size: 1.4rem;
  color: #2c3e50;
}

.category p {
  font-size: 1rem;
  color: #7f8c8d;
}

.jobs {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
}

.job-card {
  background-color: #ffffff;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.job-card:hover {
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
}

.job-card h4 {
  font-size: 1.4rem;
  color: #2c3e50;
}

.job-card p {
  font-size: 1rem;
  color: #7f8c8d;
}

.job-link {
  display: inline-block;
  margin-top: 1rem;
  color: #4caf50;
  font-weight: 600;
  text-decoration: none;
}

.job-link:hover {
  text-decoration: underline;
}

footer {
  text-align: center;
  padding: 1rem;
  background-color: #388e3c;
  color: white;
  font-size: 0.9rem;
}
</style>
