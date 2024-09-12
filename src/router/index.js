import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/index.vue'
import Membership from '@/views/membership.vue'
import Products from '@/views/products.vue'
import Contact from '@/views/contact.vue'

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
  },
  {
    path: '/products',
    name: 'Products',
    component: Products
  }, 
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
