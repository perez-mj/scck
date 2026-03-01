<!-- src/views/About.vue -->
<template>
  <div class="about-page">
    <section class="about-hero">
      <v-container>
        <h1 class="section-title">
          {{ aboutData.title }} <span class="accent">{{ aboutData.titleAccent }}</span>
        </h1>
        <p class="section-subtitle">{{ aboutData.subtitle }}</p>
      </v-container>
    </section>

    <section class="about-story">
      <v-container>
        <v-row align="center">
          <v-col cols="12" md="6">
            <div class="story-content">
              <h2>Our Story</h2>
              <p>{{ aboutData.description }}</p>
              
              <div class="mission-vision">
                <div class="mission">
                  <v-icon size="48" color="primary">mdi-bullseye</v-icon>
                  <h3>Our Mission</h3>
                  <p>{{ aboutData.mission }}</p>
                </div>
                <div class="vision">
                  <v-icon size="48" color="primary">mdi-eye</v-icon>
                  <h3>Our Vision</h3>
                  <p>{{ aboutData.vision }}</p>
                </div>
              </div>
            </div>
          </v-col>
          
          <v-col cols="12" md="6">
            <div class="history-timeline">
              <h3>Our Journey</h3>
              <div v-for="(item, index) in aboutData.history" :key="index" class="timeline-item">
                <div class="timeline-year">{{ item.year }}</div>
                <div class="timeline-event">{{ item.event }}</div>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <section class="about-values">
      <v-container>
        <h2 class="text-center mb-5">Our Core Values</h2>
        <v-row>
          <v-col v-for="(value, index) in aboutData.values" :key="index" cols="12" md="3">
            <v-card class="value-card" elevation="0">
              <v-icon size="48" color="primary">{{ value.icon }}</v-icon>
              <h3>{{ value.title }}</h3>
              <p>{{ value.description }}</p>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </div>
</template>

<script setup>
import { aboutData } from '@/data/sugarstack'
</script>

<style scoped>
.about-page {
  margin-top: 64px;
}

.about-hero {
  padding: var(--spacing-xl) 0;
  background: linear-gradient(135deg, var(--secondary-cream), var(--white));
}

.about-story {
  padding: var(--spacing-xl) 0;
}

.story-content h2 {
  font-size: 2rem;
  color: var(--text-dark);
  margin-bottom: var(--spacing-md);
}

.story-content p {
  color: var(--text-light);
  line-height: 1.8;
  margin-bottom: var(--spacing-lg);
}

.mission-vision {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-md);
}

.mission, .vision {
  padding: var(--spacing-md);
  background: var(--gray-bg);
  border-radius: var(--radius-lg);
  text-align: center;
}

.mission h3, .vision h3 {
  margin: var(--spacing-sm) 0;
  color: var(--text-dark);
}

.mission p, .vision p {
  color: var(--text-light);
  font-size: 0.95rem;
}

.history-timeline {
  padding: var(--spacing-lg);
  background: var(--white);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
}

.history-timeline h3 {
  font-size: 1.5rem;
  margin-bottom: var(--spacing-lg);
  color: var(--text-dark);
}

.timeline-item {
  display: flex;
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-md);
  padding-bottom: var(--spacing-md);
  border-bottom: 1px dashed rgba(0,0,0,0.1);
}

.timeline-item:last-child {
  border-bottom: none;
}

.timeline-year {
  font-weight: 700;
  color: var(--primary-red);
  min-width: 80px;
}

.timeline-event {
  color: var(--text-light);
}

.about-values {
  padding: var(--spacing-xl) 0;
  background: var(--gray-bg);
}

.value-card {
  padding: var(--spacing-lg);
  text-align: center;
  border-radius: var(--radius-lg);
  height: 100%;
  transition: all var(--transition-fast);
}

.value-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-lg);
}

.value-card h3 {
  margin: var(--spacing-sm) 0;
  color: var(--text-dark);
}

.value-card p {
  color: var(--text-light);
  font-size: 0.95rem;
}

@media (max-width: 768px) {
  .mission-vision {
    grid-template-columns: 1fr;
  }
}
</style>