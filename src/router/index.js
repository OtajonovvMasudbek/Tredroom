import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/index.vue'
import Membership from '@/views/membership.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/membership',
    name: 'Membership',
    component: Membership
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
