import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import Signup from '@/views/Signup.vue';

import Marketplace from '../views/Marketplace.vue';
import JobDetails from '../views/JobDetails.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/login', name: 'Login', component: Login },
  { path: '/signup', name: 'Signup', component: Signup },
  { path: '/marketplace', name: 'Marketplace', component: Marketplace },
  { path: '/job/:id', name: 'JobDetails', component: JobDetails }
];


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), // Updated for better compatibility with Vite
  routes,
});

export default router;
