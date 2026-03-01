<template>
  <section class="hero">
    <div class="hero-container">
      <div class="hero-content">
        <h1>Design Your Perfect Cake</h1>
        <h2>with Red Ribbon's <span class="highlight">Smart Kiosk</span></h2>
        <p class="hero-description">
          Experience the future of cake customization in Calapan City. 
          Visualize your design in real-time and skip the queue.
        </p>
        
        <div class="hero-cta">
          <Button variant="primary" size="large">Try the Kiosk</Button>
          <Button variant="secondary" size="large">Watch Demo</Button>
        </div>
        
        <div class="stats-grid">
          <div class="stat-item" v-for="stat in stats" :key="stat.label">
            <h3>{{ stat.number }}</h3>
            <p>{{ stat.label }}</p>
          </div>
        </div>
      </div>
      
      <div class="hero-image">
        <div class="kiosk-mockup">
          <div class="screen">
            <div class="cake-preview">
              <div class="cake-layer"></div>
              <div class="cake-layer"></div>
              <div class="cake-layer"></div>
            </div>
          </div>
          <div class="kiosk-base"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Button from '../common/Button.vue'
import { bmcData } from '../../data/bmcData'

export default {
  name: 'HeroSection',
  components: {
    Button
  },
  data() {
    return {
      stats: bmcData.stats
    }
  }
}
</script>

<style scoped>
.hero {
  background: linear-gradient(135deg, var(--secondary-cream) 0%, var(--white) 100%);
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding-top: 80px;
}

.hero-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: var(--spacing-xl) var(--spacing-md);
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-lg);
  align-items: center;
}

.hero-content h1 {
  font-size: 3rem;
  line-height: 1.2;
  color: var(--text-dark);
  margin-bottom: var(--spacing-xs);
}

.hero-content h2 {
  font-size: 2.5rem;
  color: var(--text-light);
  margin-bottom: var(--spacing-md);
}

.highlight {
  color: var(--primary-red);
  font-family: var(--font-secondary);
}

.hero-description {
  font-size: 1.2rem;
  color: var(--text-light);
  margin-bottom: var(--spacing-lg);
  line-height: 1.6;
}

.hero-cta {
  display: flex;
  gap: var(--spacing-sm);
  margin-bottom: var(--spacing-lg);
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--spacing-md);
}

.stat-item h3 {
  font-size: 2rem;
  color: var(--primary-red);
  font-weight: 700;
}

.stat-item p {
  color: var(--text-light);
  font-size: 0.9rem;
}

.hero-image {
  display: flex;
  justify-content: center;
  align-items: center;
}

.kiosk-mockup {
  width: 300px;
  perspective: 1000px;
}

.screen {
  background: #2C3E50;
  border-radius: 20px 20px 0 0;
  padding: 20px;
  transform: rotateY(-10deg) rotateX(5deg);
  box-shadow: var(--shadow-lg);
}

.cake-preview {
  background: linear-gradient(135deg, var(--secondary-cream), var(--white));
  border-radius: 10px;
  padding: 30px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.cake-layer {
  width: 150px;
  height: 30px;
  background: #D2691E;
  border-radius: 10px;
  position: relative;
}

.cake-layer:first-child {
  background: #F4A460;
}

.cake-layer:last-child {
  background: #8B4513;
}

.cake-layer::after {
  content: '';
  position: absolute;
  top: 5px;
  left: 10px;
  right: 10px;
  height: 3px;
  background: rgba(255,255,255,0.3);
  border-radius: 2px;
}

.kiosk-base {
  height: 50px;
  background: #34495E;
  border-radius: 0 0 20px 20px;
  transform: rotateY(-10deg) rotateX(5deg);
  box-shadow: var(--shadow-md);
}

@media (max-width: 768px) {
  .hero-container {
    grid-template-columns: 1fr;
    text-align: center;
  }
  
  .hero-content h1 {
    font-size: 2.5rem;
  }
  
  .hero-content h2 {
    font-size: 2rem;
  }
  
  .hero-cta {
    justify-content: center;
  }
  
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>