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
import api from '@/axios';

export default {
  setup() {
    const user = ref(null);
    const router = useRouter();

    onMounted(async () => {
      const token = localStorage.getItem('auth_token');
      if (!token) {
        router.push('/login');
        return;
      }

      try {
        const response = await api.get('/user');
        user.value = response.data;
      } catch (error) {
        console.error('🚫 Not authenticated:', error);
        localStorage.removeItem('auth_token');
        router.push('/login');
      }
    });

    const handleLogout = async () => {
      try {
        await api.post('/logout');
        localStorage.removeItem('auth_token');
        router.push('/login');
      } catch (error) {
        console.error('Logout failed:', error);
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
