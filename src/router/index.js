import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import QuemSomos from '../pages/QuemSomos.vue';
import Cultos from '../pages/Cultos.vue';
import Dizimo from '../pages/Dizimo.vue';
import Cursos from '../pages/Cursos.vue';
import Contato from '../pages/Contato.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), 
  routes: [
    { path: '/', name: 'Home', component: Home },
    { path: '/QuemSomos', name: 'QuemSomos', component: QuemSomos },
    { path: '/Cultos', name: 'Cultos', component: Cultos },
    { path: '/Dizimo', name: 'Dizimo', component: Dizimo },
    { path: '/Cursos', name: 'Cursos', component: Cursos },
    { path: '/Contato', name: 'Contato', component: Contato },
  ],
});

export default router;
