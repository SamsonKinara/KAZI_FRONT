import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// Material-Design-Icons
import '@mdi/font/css/materialdesignicons.css'

// Drawer Store
import { useDrawerStore } from './stores/drawer'

// Axios (global config)
import axios from 'axios'

// Set default Axios base URL and auth token if available
axios.defaults.baseURL = 'http://localhost:8000/api';
const token = localStorage.getItem('access_token');
if (token) {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

const app = createApp(App);

const vuetify = createVuetify({
  components,
  directives,
});

app.use(createPinia());
app.use(router);
app.use(vuetify);

// Global access to drawer store
app.config.globalProperties.$drawerStore = useDrawerStore();

app.mount('#app');
