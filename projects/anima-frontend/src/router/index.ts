import {createRouter, createWebHistory} from 'vue-router'
import Home from '@/pages/Home.vue';
import World from "@/pages/World.vue";
import Avatar from "@/pages/Avatar.vue";
import Group from "@/pages/Group.vue";


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: Home,
        },
        {
            path: '/w/:world_id',
            component: World,
        },
        {
            path: '/g/:group_id',
            component: Group,
        },
        {
            path: '/a/:avatar_id',
            component: Avatar,
        },
    ],
});

export default router;
