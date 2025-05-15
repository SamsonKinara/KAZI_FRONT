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
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('@/views/Contact.vue'),
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/AboutUs.vue'),
  },
  {
    path: '/jobs',
    name: 'Jobs', 
    component: () => import('@/views/Jobs.vue'),
  },
  {
    path: '/skills',
    name: 'Skills',
    component: () => import('@/views/Skills.vue')
  },
  {
    path: '/Mentorship',
    name: 'Mentorship',
    component: () => import('@/views/Mentorship.vue')
  },
  { 
    path: '/Networking',
    name: 'Networking',
    component: () => import('@/views/Networking.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('@/views/Profile.vue'),
    meta: { requiresAuth: true },
  },
  {
    path: '/setup-profile',
    name: 'SetupProfile',
    component: () => import('@/views/SetupProfile.vue'),
    meta: { requiresAuth: true },
  }
  
  
  
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
