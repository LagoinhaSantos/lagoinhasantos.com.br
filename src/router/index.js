import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import QuemSomos from '../pages/QuemSomos.vue';
import Cultos from '../pages/Cultos.vue';
import Dizimo from '../pages/Dizimo.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/QuemSomos', name: 'QuemSomos', component: QuemSomos },
  { path: '/Cultos', name: 'Cultos', component: Cultos },
  { path: '/Dizimo', name: 'Dizimo', component: Dizimo },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
