import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '@/pages/Home.vue'
import World from '@/pages/World.vue'
import Avatar from '@/pages/Avatar.vue'
import Group from '@/pages/Group.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/w/:world_id',
    name: 'World',
    component: World
  },
  {
    path: '/a/:avtar_id',
    name: 'Avatar',
    component: Avatar
  },
  {
    path: '/g/:group_id',
    name: 'Group',
    component: Group
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
