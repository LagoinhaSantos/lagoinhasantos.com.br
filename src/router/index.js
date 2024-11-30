// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'; // Correct import syntax
import Home from '../pages/Home.vue';
import QuemSomos from '../pages/QuemSomos.vue';
import Cultos from '../pages/Cultos.vue';
import Dizimo from '../pages/Dizimo.vue';
import Cursos from '../pages/Cursos.vue';
import Contato from '../pages/Contato.vue';
import Privacidade from '../pages/Privacidade.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/quemSomos', name: 'QuemSomos', component: QuemSomos },
  { path: '/cultos', name: 'Cultos', component: Cultos },
  { path: '/dizimo', name: 'Dizimo', component: Dizimo },
  { path: '/cursos', name: 'Cursos', component: Cursos },
  { path: '/contato', name: 'Contato', component: Contato },
  { path: '/privacidade', name: 'Privacidade', component: Privacidade }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
