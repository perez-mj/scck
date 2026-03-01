<!-- src/components/common/Navbar.vue -->
<template>
  <v-app-bar app color="white" elevation="2" class="navbar">
    <v-container class="d-flex align-center justify-space-between">
      <div class="logo">
        <h1>{{ siteConfig.name }}<span class="accent">{{ siteConfig.tagline }}</span></h1>
      </div>
      
      <div class="nav-links d-none d-md-flex">
        <v-btn variant="text" to="/home" class="nav-link">Home</v-btn>
        <v-btn variant="text" to="/features" class="nav-link">Features</v-btn>
        <v-btn variant="text" to="/benefits" class="nav-link">Benefits</v-btn>
        <v-btn variant="text" to="/how-it-works" class="nav-link">How It Works</v-btn>
        <v-btn variant="text" to="/bmc" class="nav-link">Business Model</v-btn>
        <v-btn color="primary" to="/visit" class="nav-cta">Visit Us</v-btn>
      </div>
      
      <v-btn
        icon
        class="d-md-none"
        @click="drawer = !drawer"
      >
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-container>
  </v-app-bar>

  <v-navigation-drawer
    v-model="drawer"
    location="right"
    temporary
    class="d-md-none"
  >
    <v-list>
      <v-list-item href="#features" @click="drawer = false">
        <v-list-item-title>Features</v-list-item-title>
      </v-list-item>
      <v-list-item href="#how-it-works" @click="drawer = false">
        <v-list-item-title>How It Works</v-list-item-title>
      </v-list-item>
      <v-list-item href="#bmc" @click="drawer = false">
        <v-list-item-title>Business Model</v-list-item-title>
      </v-list-item>
      <v-list-item href="#contact" @click="drawer = false" color="primary">
        <v-list-item-title>Visit Us</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
import { ref } from 'vue'
import { siteConfig } from '@/data/sugarstack'

const drawer = ref(false)
</script>

<style scoped>
.navbar {
  border-bottom: 1px solid rgba(0,0,0,0.05);
}

.logo h1 {
  font-family: var(--font-primary);
  font-size: 1.5rem;
  color: var(--text-dark);
  margin: 0;
  font-weight: 700;
}

.logo .accent {
  color: var(--primary-red);
  margin-left: 4px;
  font-family: var(--font-secondary);
  font-weight: 600;
}

.nav-link {
  color: var(--text-dark) !important;
  font-weight: 500;
  text-transform: none;
  letter-spacing: normal;
}

.nav-link:hover {
  color: var(--primary-red) !important;
  background: transparent !important;
}

.nav-cta {
  background: var(--primary-red) !important;
  color: white !important;
  text-transform: none;
  border-radius: var(--radius-md);
  padding: 0 20px;
}

.nav-cta:hover {
  background: var(--primary-red-dark) !important;
}

:deep(.v-btn--variant-text) {
  opacity: 1;
}
</style>