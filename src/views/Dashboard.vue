<template>
  <div class="dashboard">
    <h2>Welcome to your Dashboard</h2>
    <p v-if="user">You are logged in as {{ user.name }} ({{ user.email }})</p>
    <button @click="handleLogout">Logout</button>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';

export default {
  setup() {
    const user = ref(null);
    const router = useRouter();

    // On mount, check token and fetch user info
    onMounted(async () => {
      const token = localStorage.getItem('access_token'); // 🔄 Updated to match login
      if (!token) {
        router.push('/login');
        return;
      }

      // Set token header globally
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      try {
        const response = await axios.get('http://localhost:8000/api/user');
        user.value = response.data;
      } catch (error) {
        console.error('❌ Token invalid or expired:', error);
        localStorage.removeItem('access_token');
        router.push('/login');
      }
    });

    // Logout handler
    const handleLogout = async () => {
      try {
        await axios.post('http://localhost:8000/api/logout');
      } catch (error) {
        console.error('Logout request failed:', error);
      } finally {
        localStorage.removeItem('access_token');
        router.push('/login');
      }
    };

    return {
      user,
      handleLogout,
    };
  },
};
</script>

<style scoped>
.dashboard {
  text-align: center;
  margin-top: 100px;
}

button {
  background-color: #0b8f36;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 1rem;
  border-radius: 6px;
  cursor: pointer;
}

button:hover {
  background-color: #0a7030;
}
</style>
