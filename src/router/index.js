import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import QuemSomos from '../pages/QuemSomos.vue';
import Cultos from '../pages/Cultos.vue';
import Dizimo from '../pages/Dizimo.vue';
import Cursos from '../pages/Cursos.vue';
import Contato from '../pages/Contato.vue';

const router = createRouter({
  mode: "hash", 
  routes: [
    { path: '/', name: 'Home', component: Home },
    { path: '/quemSomos', name: 'QuemSomos', component: QuemSomos },
    { path: '/cultos', name: 'Cultos', component: Cultos },
    { path: '/dizimo', name: 'Dizimo', component: Dizimo },
    { path: '/cursos', name: 'Cursos', component: Cursos },
    { path: '/contato', name: 'Contato', component: Contato },
  ],
});

export default router;
