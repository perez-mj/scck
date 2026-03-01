<template>
  <div id="app">
    <Navbar />
    <main>
      <HeroSection />
      <ValueProp />
      <BmcSection />
      <CtaSection />
    </main>
    <Footer />
  </div>
</template>

<script>
import Navbar from './components/common/Navbar.vue'
import Footer from './components/common/Footer.vue'
import HeroSection from './components/layout/HeroSection.vue'
import ValueProp from './components/layout/ValueProp.vue'
import BmcSection from './components/layout/BmcSection.vue'
import CtaSection from './components/layout/CtaSection.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Footer,
    HeroSection,
    ValueProp,
    BmcSection,
    CtaSection
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap');
@import './style/variable.css';

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: var(--font-primary);
  color: var(--text-dark);
  line-height: 1.6;
}

section {
  scroll-margin-top: 80px;
}
</style>