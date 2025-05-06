import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
import ProfileSetup from '../views/ProfileSetup.vue'; // Import ProfileSetup
import Dashboard from '../views/Dashboard.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/signup',
    name: 'Register',
    component: Register,
  },
  {
    path: '/profile-setup',
    name: 'ProfileSetup',
    component: () => import('../views/ProfileSetup.vue'),
  },
  
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,  // Removed lazy load for now to test
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('access_token');
  const authRequired = ['/dashboard', '/profile-setup'];

  if (authRequired.includes(to.path) && !token) {
    next('/login');
  } else {
    next();
  }
});
  

export default router;
