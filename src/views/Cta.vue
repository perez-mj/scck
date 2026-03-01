<!-- src/views/Cta.vue -->
<template>
  <section id="contact" class="cta-section">
    <v-container>
      <v-row align="center">
        <v-col cols="12" md="6">
          <div class="cta-content">
            <h2>{{ ctaData.title }} <span class="accent">{{ ctaData.titleAccent }}</span></h2>
            <p class="cta-subtitle">{{ ctaData.subtitle }}</p>
            
            <div class="cta-features">
              <div v-for="(feature, index) in ctaData.features" :key="index" class="feature">
                <span class="feature-icon">{{ feature.icon }}</span>
                <div>
                  <h4>{{ feature.title }}</h4>
                  <p>{{ feature.description }}</p>
                </div>
              </div>
            </div>
            
            <div class="cta-buttons">
              <v-btn
                v-for="(button, index) in ctaData.buttons"
                :key="index"
                :color="button.variant === 'primary' ? 'primary' : undefined"
                :variant="button.variant === 'outline' ? 'outlined' : 'flat'"
                size="x-large"
                class="cta-btn"
              >
                {{ button.text }}
              </v-btn>
            </div>
            
            <div class="social-proof">
              <p class="review-count">
                ⭐ {{ ctaData.socialProof.rating }} ★★★★★ ({{ ctaData.socialProof.reviewCount }}+ reviews)
              </p>
              <div class="avatars">
                <v-avatar v-for="n in 5" :key="n" size="40" color="accent" class="avatar">
                  <span>👤</span>
                </v-avatar>
              </div>
              <p class="review-text">"{{ ctaData.socialProof.reviewText }}"</p>
              <p class="review-author">- {{ ctaData.socialProof.reviewAuthor }}</p>
            </div>
          </div>
        </v-col>
        
        <v-col cols="12" md="6">
          <div class="cta-visual">
            <div class="store-front">
              <div class="store-sign">Red Ribbon</div>
              <div class="store-window">
                <div class="kiosk-indicator">
                  <span class="pulse"></span>
                  <span>Smart Kiosk Available</span>
                </div>
                <div class="cake-display">
                  <div class="mini-cake" v-for="n in 3" :key="n"></div>
                </div>
              </div>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup>
import { ctaData } from '@/data/sugarstack'
</script>

<style scoped>
.cta-section {
  padding: var(--spacing-xl) 0;
  background: linear-gradient(135deg, var(--primary-red) 0%, var(--primary-red-dark) 100%);
  color: var(--white);
}

.cta-content h2 {
  font-size: 2.5rem;
  margin-bottom: var(--spacing-sm);
  line-height: 1.2;
}

.cta-content .accent {
  color: var(--accent-gold);
  font-family: var(--font-secondary);
}

.cta-subtitle {
  font-size: 1.2rem;
  margin-bottom: var(--spacing-lg);
  opacity: 0.9;
}

.cta-features {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-lg);
}

.feature {
  display: flex;
  gap: var(--spacing-sm);
  align-items: flex-start;
}

.feature-icon {
  font-size: 2rem;
  background: rgba(255,255,255,0.2);
  padding: 10px;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.feature h4 {
  font-size: 1.1rem;
  margin-bottom: 4px;
}

.feature p {
  opacity: 0.9;
}

.cta-buttons {
  display: flex;
  gap: var(--spacing-sm);
  margin-bottom: var(--spacing-lg);
}

.cta-btn {
  text-transform: none;
  font-weight: 600;
  border-radius: var(--radius-md);
}

.cta-btn.v-btn--variant-flat {
  background: var(--white) !important;
  color: var(--primary-red) !important;
}

.cta-btn.v-btn--variant-outlined {
  border-color: var(--white) !important;
  color: var(--white) !important;
}

.cta-btn.v-btn--variant-outlined:hover {
  background: rgba(255,255,255,0.1) !important;
}

.social-proof {
  text-align: center;
  padding: var(--spacing-md);
  background: rgba(255,255,255,0.1);
  border-radius: var(--radius-lg);
}

.review-count {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: var(--spacing-xs);
}

.avatars {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-bottom: var(--spacing-sm);
}

.avatar {
  background: var(--accent-gold) !important;
  border: 2px solid var(--white);
}

.review-text {
  font-style: italic;
  margin-bottom: var(--spacing-xs);
  font-size: 1rem;
}

.review-author {
  font-weight: 600;
  font-size: 0.9rem;
  opacity: 0.9;
}

.cta-visual {
  display: flex;
  justify-content: center;
  align-items: center;
}

.store-front {
  width: 100%;
  max-width: 350px;
  background: #2C3E50;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: var(--shadow-lg);
}

.store-sign {
  background: var(--primary-red);
  color: var(--white);
  text-align: center;
  padding: var(--spacing-md);
  font-size: 2rem;
  font-weight: 700;
  font-family: var(--font-secondary);
}

.store-window {
  background: #34495E;
  padding: var(--spacing-lg);
  min-height: 250px;
  position: relative;
}

.kiosk-indicator {
  text-align: center;
  background: var(--white);
  padding: var(--spacing-sm);
  border-radius: var(--radius-md);
  color: var(--text-dark);
  margin-bottom: var(--spacing-md);
}

.pulse {
  display: inline-block;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #2ECC71;
  margin-right: 8px;
  animation: pulse 2s infinite;
}

.cake-display {
  display: flex;
  justify-content: center;
  gap: var(--spacing-sm);
  margin-top: var(--spacing-md);
}

.mini-cake {
  width: 50px;
  height: 60px;
  background: linear-gradient(135deg, #8B4513, #5D3A1A);
  border-radius: 10px 10px 5px 5px;
  position: relative;
  animation: float 3s ease-in-out infinite;
}

.mini-cake:nth-child(2) {
  animation-delay: 0.5s;
  height: 70px;
}

.mini-cake:nth-child(3) {
  animation-delay: 1s;
}

.mini-cake::before {
  content: '';
  position: absolute;
  top: -5px;
  left: 0;
  right: 0;
  height: 5px;
  background: rgba(255,255,255,0.3);
  border-radius: 5px 5px 0 0;
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 rgba(46, 204, 113, 0.7);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(46, 204, 113, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(46, 204, 113, 0);
  }
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

@media (max-width: 960px) {
  .cta-content h2 {
    font-size: 2rem;
  }
  
  .feature {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  
  .cta-buttons {
    flex-direction: column;
  }
  
  .cta-visual {
    margin-top: var(--spacing-lg);
  }
}
</style>