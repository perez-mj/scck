<!-- src/views/Home.vue -->
<template>
  <section class="hero-section">
    <v-container>
      <v-row align="center" justify="space-between">
        <v-col cols="12" md="6">
          <div class="hero-content">
            <h1 class="hero-title">
              {{ heroData.title }}<br>
              <span class="accent">{{ heroData.titleAccent }}</span>
            </h1>
            
            <p class="hero-subtitle">{{ heroData.subtitle }}</p>
            <p class="hero-description">{{ heroData.description }}</p>
            
            <div class="hero-features">
              <div v-for="(feature, index) in heroData.features" :key="index" class="feature-chip">
                <v-icon size="small" color="primary">{{ feature.icon }}</v-icon>
                <span>{{ feature.text }}</span>
              </div>
            </div>
            
            <div class="hero-buttons">
              <v-btn
                color="primary"
                size="x-large"
                class="hero-btn"
                @click="scrollToContact"
              >
                {{ heroData.ctaPrimary }}
              </v-btn>
              <v-btn
                variant="outlined"
                size="x-large"
                class="hero-btn"
                href="#how-it-works"
              >
                {{ heroData.ctaSecondary }}
              </v-btn>
            </div>
            
            <div class="hero-stats">
              <div v-for="(stat, index) in heroData.stats" :key="index" class="stat-item">
                <span class="stat-value">{{ stat.value }}</span>
                <span class="stat-label">{{ stat.label }}</span>
              </div>
            </div>
          </div>
        </v-col>
        
        <v-col cols="12" md="6">
          <div class="hero-visual">
            <div class="kiosk-container">
              <div class="kiosk-screen">
                <div class="cake-preview">
                  <div class="cake">
                    <div class="cake-layer cake-layer-1"></div>
                    <div class="cake-layer cake-layer-2"></div>
                    <div class="cake-layer cake-layer-3"></div>
                    <div class="cake-topper">
                      <span class="candle">🕯️</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="kiosk-base"></div>
              <div class="kiosk-stand"></div>
              
              <div class="floating-badge badge-1">
                <v-icon color="primary">mdi-touch</v-icon>
                <span>Touch to Start</span>
              </div>
              <div class="floating-badge badge-2">
                <v-icon color="primary">mdi-cube-scan</v-icon>
                <span>3D Preview</span>
              </div>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup>
import { heroData } from '@/data/sugarstack'

const scrollToContact = () => {
  const contactSection = document.querySelector('#contact')
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<style scoped>
.hero-section {
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: linear-gradient(135deg, var(--white) 0%, var(--secondary-cream) 100%);
  padding: var(--spacing-xl) 0;
  margin-top: 64px;
}

.hero-content {
  max-width: 600px;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 700;
  color: var(--text-dark);
  line-height: 1.2;
  margin-bottom: var(--spacing-sm);
}

.hero-title .accent {
  color: var(--primary-red);
  font-family: var(--font-secondary);
  font-size: 4rem;
  display: inline-block;
}

.hero-subtitle {
  font-size: 1.5rem;
  font-weight: 500;
  color: var(--primary-red);
  margin-bottom: var(--spacing-sm);
}

.hero-description {
  font-size: 1.1rem;
  color: var(--text-light);
  margin-bottom: var(--spacing-md);
  line-height: 1.8;
}

.hero-features {
  display: flex;
  gap: var(--spacing-sm);
  flex-wrap: wrap;
  margin-bottom: var(--spacing-lg);
}

.feature-chip {
  background: var(--white);
  padding: 0.5rem 1rem;
  border-radius: 30px;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  box-shadow: var(--shadow-sm);
  border: 1px solid rgba(0,0,0,0.05);
}

.hero-buttons {
  display: flex;
  gap: var(--spacing-sm);
  margin-bottom: var(--spacing-lg);
}

.hero-btn {
  text-transform: none;
  font-weight: 600;
  border-radius: var(--radius-md);
}

.hero-stats {
  display: flex;
  gap: var(--spacing-lg);
}

.stat-item {
  display: flex;
  flex-direction: column;
}

.stat-value {
  font-size: 2rem;
  font-weight: 700;
  color: var(--primary-red);
}

.stat-label {
  color: var(--text-light);
  font-size: 0.9rem;
}

/* Kiosk Visual */
.hero-visual {
  display: flex;
  justify-content: center;
  align-items: center;
}

.kiosk-container {
  position: relative;
  width: 350px;
}

.kiosk-screen {
  background: #1a1a1a;
  border-radius: 30px;
  padding: 20px;
  box-shadow: var(--shadow-lg);
  border: 8px solid #333;
  position: relative;
  z-index: 2;
}

.cake-preview {
  background: linear-gradient(135deg, var(--secondary-cream), var(--white));
  border-radius: 20px;
  padding: 40px 20px;
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.cake {
  position: relative;
  width: 200px;
  height: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
}

.cake-layer {
  width: 100%;
  border-radius: 20px;
  margin-bottom: 5px;
  animation: float 3s ease-in-out infinite;
}

.cake-layer-1 {
  height: 80px;
  background: linear-gradient(135deg, #8B4513, #5D3A1A);
  box-shadow: 0 4px 0 #4A2C0F;
}

.cake-layer-2 {
  height: 70px;
  background: linear-gradient(135deg, #A0522D, #6B3E1E);
  box-shadow: 0 4px 0 #4A2C0F;
  animation-delay: 0.2s;
}

.cake-layer-3 {
  height: 60px;
  background: linear-gradient(135deg, #CD853F, #8B4513);
  box-shadow: 0 4px 0 #5D3A1A;
  animation-delay: 0.4s;
}

.cake-topper {
  position: absolute;
  top: -20px;
}

.candle {
  font-size: 2rem;
  animation: flicker 1s ease-in-out infinite;
}

.kiosk-base {
  height: 20px;
  background: #444;
  border-radius: 0 0 10px 10px;
  width: 90%;
  margin: 0 auto;
}

.kiosk-stand {
  height: 60px;
  width: 150px;
  background: linear-gradient(135deg, #666, #444);
  margin: 0 auto;
  border-radius: 0 0 20px 20px;
}

.floating-badge {
  position: absolute;
  background: var(--white);
  padding: 0.75rem 1.5rem;
  border-radius: 40px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  box-shadow: var(--shadow-lg);
  animation: float 3s ease-in-out infinite;
}

.badge-1 {
  top: 20%;
  left: -30px;
}

.badge-2 {
  bottom: 30%;
  right: -30px;
  animation-delay: 1s;
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

@keyframes flicker {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.8; }
}

@media (max-width: 960px) {
  .hero-title {
    font-size: 2.5rem;
  }
  
  .hero-title .accent {
    font-size: 3rem;
  }
  
  .hero-stats {
    gap: var(--spacing-md);
  }
  
  .floating-badge {
    display: none;
  }
}
</style>