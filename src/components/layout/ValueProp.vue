<template>
  <section id="features" class="value-prop">
    <div class="container">
      <h2 class="section-title">Why Choose Our <span class="accent">Smart Kiosk</span></h2>
      
      <div class="props-grid">
        <div v-for="prop in valueProps" :key="prop.title" class="prop-card">
          <div class="prop-icon">{{ prop.icon }}</div>
          <h3>{{ prop.title }}</h3>
          <p>{{ prop.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { bmcData } from '../../data/bmcData'

export default {
  name: 'ValueProp',
  data() {
    return {
      valueProps: bmcData.valueProps
    }
  }
}
</script>

<style scoped>
.value-prop {
  padding: var(--spacing-xl) 0;
  background: var(--white);
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
  margin-bottom: var(--spacing-lg);
}

.section-title .accent {
  color: var(--primary-red);
  font-family: var(--font-secondary);
}

.props-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-lg);
}

.prop-card {
  text-align: center;
  padding: var(--spacing-lg);
  background: var(--white);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
  transition: transform var(--transition-fast);
}

.prop-card:hover {
  transform: translateY(-10px);
}

.prop-icon {
  font-size: 3rem;
  margin-bottom: var(--spacing-md);
}

.prop-card h3 {
  color: var(--text-dark);
  margin-bottom: var(--spacing-sm);
  font-size: 1.5rem;
}

.prop-card p {
  color: var(--text-light);
  line-height: 1.6;
}

@media (max-width: 768px) {
  .props-grid {
    grid-template-columns: 1fr;
  }
}
</style>