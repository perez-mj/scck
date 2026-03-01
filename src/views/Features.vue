<!-- src/views/Features.vue -->
<template>
  <section id="features" class="features-section">
    <v-container>
      <h2 class="section-title">
        {{ featuresData.title }} <span class="accent">{{ featuresData.titleAccent }}</span>
      </h2>
      <p class="section-subtitle">{{ featuresData.subtitle }}</p>
      
      <v-row>
        <v-col
          v-for="(feature, index) in featuresData.features"
          :key="index"
          cols="12"
          md="6"
          lg="4"
        >
          <v-card class="feature-card" elevation="0">
            <div class="feature-icon-wrapper">
              <v-icon size="40" color="primary">{{ feature.icon }}</v-icon>
            </div>
            
            <h3 class="feature-title">{{ feature.title }}</h3>
            <p class="feature-description">{{ feature.description }}</p>
            
            <div class="feature-benefits">
              <div v-for="(benefit, idx) in feature.benefits" :key="idx" class="benefit-item">
                <v-icon size="small" color="success">mdi-check-circle</v-icon>
                <span>{{ benefit }}</span>
              </div>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup>
import { featuresData } from '@/data/sugarstack'
</script>

<style scoped>
.features-section {
  padding: var(--spacing-xl) 0;
  background: var(--white);
}

.feature-card {
  padding: var(--spacing-lg);
  border-radius: var(--radius-lg);
  background: var(--white);
  border: 1px solid rgba(0,0,0,0.05);
  transition: all var(--transition-fast);
  height: 100%;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-lg);
  border-color: transparent;
}

.feature-icon-wrapper {
  width: 80px;
  height: 80px;
  background: var(--secondary-cream);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: var(--spacing-md);
}

.feature-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--text-dark);
  margin-bottom: var(--spacing-sm);
}

.feature-description {
  color: var(--text-light);
  margin-bottom: var(--spacing-md);
  line-height: 1.6;
}

.feature-benefits {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.benefit-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--text-dark);
  font-size: 0.95rem;
}
</style>