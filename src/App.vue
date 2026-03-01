<!-- src/App.vue -->
<template>
  <v-app>
    <Navbar />
    <!-- Menu page needs special handling -->
    <component :is="currentComponent" />
    <Footer />
  </v-app>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

import Navbar from './components/common/Navbar.vue'
import Footer from './components/common/Footer.vue'

import Home from '@/views/Home.vue'
import Benefits from '@/views/Benefits.vue'
import Features from '@/views/Features.vue'
import About from '@/views/About.vue'
import Visit from '@/views/Visit.vue'
import HowItWorks from '@/views/HowItWorks.vue'
import Bmc from '@/views/Bmc.vue'

const route = useRoute()

const currentComponent = computed(() => {
  switch (route.name) {
    case 'Benefits':
      return Benefits
    case 'Features':
      return Features
    case 'About':
      return About
    case 'Visit':
      return Visit
    case 'HowItWorks':
      return HowItWorks
    case 'BusinessModel':
      return Bmc
    default:
      return Home
  }
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap');
@import './styles/variables.css';

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.v-application {
  font-family: var(--font-primary) !important;
  background: var(--white) !important;
}

section {
  scroll-margin-top: 80px;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-md);
}

.section-title {
  text-align: center;
  font-size: 2.5rem;
  color: var(--text-dark);
  margin-bottom: var(--spacing-sm);
  font-family: var(--font-primary);
  font-weight: 700;
}

.section-title .accent {
  color: var(--primary-red);
  font-family: var(--font-secondary);
  font-style: italic;
}

.section-subtitle {
  text-align: center;
  color: var(--text-light);
  font-size: 1.2rem;
  max-width: 700px;
  margin: 0 auto var(--spacing-lg);
}

@media (max-width: 768px) {
  .section-title {
    font-size: 2rem;
  }
  
  .section-subtitle {
    font-size: 1rem;
  }
}
</style>