<!-- src/views/HowItWorks.vue -->
<template>
  <section id="how-it-works" class="how-it-works-section">
    <v-container>
      <h2 class="section-title">
        {{ howItWorksData.title }} <span class="accent">{{ howItWorksData.titleAccent }}</span>
      </h2>
      <p class="section-subtitle">{{ howItWorksData.subtitle }}</p>
      
      <v-row class="steps-container">
        <v-col
          v-for="(step, index) in howItWorksData.steps"
          :key="index"
          cols="12"
          md="6"
          lg="3"
        >
          <div class="step-card">
            <div class="step-number">{{ index + 1 }}</div>
            <div class="step-icon-wrapper">
              <v-icon size="48" color="primary">{{ step.icon }}</v-icon>
            </div>
            <h3 class="step-title">{{ step.title }}</h3>
            <p class="step-description">{{ step.description }}</p>
            
            <div class="step-details">
              <div v-for="(detail, idx) in step.details" :key="idx" class="detail-item">
                <v-icon size="small" color="primary">mdi-check</v-icon>
                <span>{{ detail }}</span>
              </div>
            </div>
          </div>
        </v-col>
      </v-row>
      
      <div class="demo-video">
        <v-card class="video-card" elevation="0">
          <div class="video-placeholder">
            <div class="play-button">
              <v-icon size="48" color="white">mdi-play</v-icon>
            </div>
            <p>{{ howItWorksData.demoVideo.title }}</p>
            <span class="video-duration">{{ howItWorksData.demoVideo.duration }}</span>
          </div>
        </v-card>
      </div>
    </v-container>
  </section>
</template>

<script setup>
import { howItWorksData } from '@/data/sugarstack'
</script>

<style scoped>
.how-it-works-section {
  padding: var(--spacing-xl) 0;
  background: var(--gray-bg);
}

.steps-container {
  margin-bottom: var(--spacing-xl);
}

.step-card {
  background: var(--white);
  padding: var(--spacing-lg);
  border-radius: var(--radius-lg);
  position: relative;
  height: 100%;
  transition: all var(--transition-fast);
  border: 1px solid rgba(0,0,0,0.05);
}

.step-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-lg);
}

.step-number {
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 3rem;
  font-weight: 700;
  color: var(--primary-red);
  opacity: 0.2;
  line-height: 1;
}

.step-icon-wrapper {
  width: 80px;
  height: 80px;
  background: var(--secondary-cream);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: var(--spacing-md);
}

.step-title {
  font-size: 1.3rem;
  font-weight: 600;
  color: var(--text-dark);
  margin-bottom: var(--spacing-sm);
}

.step-description {
  color: var(--text-light);
  margin-bottom: var(--spacing-md);
  line-height: 1.6;
}

.step-details {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.detail-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  color: var(--text-dark);
}

.demo-video {
  max-width: 800px;
  margin: 0 auto;
}

.video-card {
  background: transparent !important;
}

.video-placeholder {
  background: linear-gradient(135deg, var(--secondary-cream), var(--white));
  border-radius: var(--radius-lg);
  padding: var(--spacing-xl);
  text-align: center;
  cursor: pointer;
  transition: all var(--transition-fast);
  border: 2px dashed var(--primary-red);
  min-height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-md);
}

.video-placeholder:hover {
  transform: scale(1.02);
  background: linear-gradient(135deg, var(--white), var(--secondary-cream));
}

.play-button {
  width: 80px;
  height: 80px;
  background: var(--primary-red);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: pulse 2s infinite;
}

.video-duration {
  background: var(--primary-red);
  color: var(--white);
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.9rem;
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 rgba(227, 24, 55, 0.7);
  }
  70% {
    box-shadow: 0 0 0 20px rgba(227, 24, 55, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(227, 24, 55, 0);
  }
}
</style>