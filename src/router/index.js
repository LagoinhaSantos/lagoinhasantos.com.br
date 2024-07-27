import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../pages/Home.vue')
    },
    {
        path: '/quem-somos',
        name: 'QuemSomos',
        component: () => import('../pages/QuemSomos.vue')
    },
    {
        path: '/cultos',
        name: 'Cultos',
        component: () => import('../pages/Cultos.vue')
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;