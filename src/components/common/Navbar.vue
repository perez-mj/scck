<template>
  <nav class="navbar">
    <div class="nav-container">
      <div class="logo">
        <h1>Red Ribbon<span class="accent">Kiosk</span></h1>
      </div>
      
      <div class="nav-links">
        <a href="#features">Features</a>
        <a href="#how-it-works">How It Works</a>
        <a href="#bmc">Business Model</a>
        <a href="#contact" class="nav-cta">Visit Us</a>
      </div>
      
      <button class="mobile-menu" @click="toggleMenu" v-if="isMobile">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      isMobile: window.innerWidth <= 768,
      menuOpen: false
    }
  },
  mounted() {
    window.addEventListener('resize', this.handleResize)
  },
  unmounted() {
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    handleResize() {
      this.isMobile = window.innerWidth <= 768
    },
    toggleMenu() {
      this.menuOpen = !this.menuOpen
    }
  }
}
</script>

<style scoped>
.navbar {
  background: var(--white);
  box-shadow: var(--shadow-sm);
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: var(--spacing-sm) var(--spacing-md);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo h1 {
  font-family: var(--font-secondary);
  font-size: 1.5rem;
  color: var(--text-dark);
}

.logo .accent {
  color: var(--primary-red);
  margin-left: 4px;
}

.nav-links {
  display: flex;
  gap: var(--spacing-md);
  align-items: center;
}

.nav-links a {
  color: var(--text-dark);
  text-decoration: none;
  font-weight: 500;
  transition: color var(--transition-fast);
}

.nav-links a:hover {
  color: var(--primary-red);
}

.nav-cta {
  background: var(--primary-red);
  color: var(--white) !important;
  padding: var(--spacing-xs) var(--spacing-md);
  border-radius: var(--radius-md);
  transition: background var(--transition-fast) !important;
}

.nav-cta:hover {
  background: var(--primary-red-dark);
}

.mobile-menu {
  display: none;
  flex-direction: column;
  gap: 6px;
  background: none;
  border: none;
  cursor: pointer;
}

.mobile-menu span {
  width: 30px;
  height: 3px;
  background: var(--text-dark);
  border-radius: 3px;
}

@media (max-width: 768px) {
  .mobile-menu {
    display: flex;
  }
  
  .nav-links {
    display: none;
  }
}
</style>