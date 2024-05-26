import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    { path: '', name: 'home', component: () => import('@/views/Home.vue') },
    {
        path: '/about',
        name: 'about',
        component: () => import('@/views/About.vue'),
    },
    {
        path: '/services',
        name: 'services',
        component: () => import('@/views/Services.vue'),
    },
    {
        path: '/team',
        name: 'team',
        component: () => import('@/views/Team.vue'),
    },
    {
        path: '/blog',
        name: 'blog',
        component: () => import('@/views/Blog.vue'),
    },
    {
        path: '/contact',
        name: 'contact',
        component: () => import('@/views/Contact.vue'),
    },
];

const router = createRouter({
    routes,
    history: createWebHistory(),
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { left: 0, top: 0 }
        }
    }
});

export default router;