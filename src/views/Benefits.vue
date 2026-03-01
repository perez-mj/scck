<!-- src/views/Benefits.vue -->
<template>
  <section class="benefits-section">
    <v-container>
      <h2 class="section-title">
        {{ benefitsData.title }} <span class="accent">{{ benefitsData.titleAccent }}</span>
      </h2>
      <p class="section-subtitle">{{ benefitsData.subtitle }}</p>
      
      <v-row>
        <v-col
          v-for="(category, index) in benefitsData.categories"
          :key="index"
          cols="12"
          md="4"
        >
          <v-card class="benefit-category" elevation="0">
            <div class="category-header">
              <v-icon size="48" color="primary">{{ category.icon }}</v-icon>
              <h3>{{ category.title }}</h3>
            </div>
            
            <div class="benefit-list">
              <div v-for="(benefit, idx) in category.benefits" :key="idx" class="benefit-item">
                <v-icon color="success" size="small">mdi-check-circle</v-icon>
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
import { benefitsData } from '@/data/sugarstack'
</script>

<style scoped>
.benefits-section {
  padding: var(--spacing-xl) 0;
  background: var(--white);
}

.benefit-category {
  padding: var(--spacing-lg);
  border-radius: var(--radius-lg);
  height: 100%;
  background: var(--white);
  border: 1px solid rgba(0,0,0,0.05);
  transition: all var(--transition-fast);
}

.benefit-category:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-lg);
}

.category-header {
  text-align: center;
  margin-bottom: var(--spacing-lg);
}

.category-header h3 {
  font-size: 1.5rem;
  color: var(--text-dark);
  margin-top: var(--spacing-sm);
}

.benefit-list {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
}

.benefit-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;
  border-radius: var(--radius-sm);
  transition: background var(--transition-fast);
}

.benefit-item:hover {
  background: var(--secondary-cream);
}
</style>