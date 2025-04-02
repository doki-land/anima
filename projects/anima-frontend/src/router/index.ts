import {createRouter, createWebHistory} from 'vue-router'
import Home from '@/pages/Home.vue';
import Video from '@/pages/Video.vue';
import Posts from '@/pages/Posts.vue';
import Characters from '@/pages/Characters.vue';
import Pricing from '@/pages/Pricing.vue';

const routes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/video',
        component: Video,
    },
    {
        path: '/posts',
        component: Posts,
    },
    {
        path: '/characters',
        component: Characters,
    },
    {
        path: '/pricing',
        component: Pricing,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
