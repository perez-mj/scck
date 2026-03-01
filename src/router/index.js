// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'

// Import views
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Benefits from '@/views/Benefits.vue'
import Features from '@/views/Features.vue'
import HowItWorks from '@/views/HowItWorks.vue'
import BusinessModel from '@/views/Bmc.vue'
import VisitView from '@/views/Visit.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { title: 'Home - Red Ribbon Smart Kiosk' }
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: { title: 'About Us - Red Ribbon Smart Kiosk' }
  },
  {
    path: '/benefits',
    name: 'Benefits',
    component: Benefits,
    meta: { title: 'Benefits - Red Ribbon Smart Kiosk' }
  },
  {
    path: '/features',
    name: 'Features',
    component: Features,
    meta: { title: 'Features - Red Ribbon Smart Kiosk' }
  },
  {
    path: '/how-it-works',
    name: 'HowItWorks',
    component: HowItWorks,
    meta: { title: 'How It Works - Red Ribbon Smart Kiosk' }
  },
  {
    path: '/bmc',
    name: 'BusinessModel',
    component: BusinessModel,
    meta: { title: 'Business Model - Red Ribbon Smart Kiosk' }
  },
  {
    path: '/visit',
    name: 'Visit',
    component: VisitView,
    meta: { title: 'Visit Us - Red Ribbon Smart Kiosk' }
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

// Update document title
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'Red Ribbon Smart Cake Customization Kiosk'
  next()
})

export default router