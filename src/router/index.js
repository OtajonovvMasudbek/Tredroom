import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/index.vue'
import Membership from '@/views/membership.vue'
import Products from '@/views/products.vue'
import Contact from '@/views/contact.vue'
import Services from '@/views/services.vue'
import Page from '@/views/page.vue'

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
    path: '/page',
    name: 'Page',
    component: Page
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/services',
    name: 'Services',
    component: Services
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
