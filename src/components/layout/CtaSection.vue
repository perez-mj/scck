<template>
  <section id="contact" class="cta-section">
    <div class="container">
      <div class="cta-content">
        <h2>Ready to Design Your <span class="accent">Perfect Cake?</span></h2>
        <p>Visit our Calapan City branch and experience the future of cake customization</p>
        
        <div class="cta-features">
          <div class="feature">
            <span class="feature-icon">📍</span>
            <div>
              <h4>Location</h4>
              <p>Red Ribbon Calapan City, Oriental Mindoro</p>
            </div>
          </div>
          
          <div class="feature">
            <span class="feature-icon">🕒</span>
            <div>
              <h4>Store Hours</h4>
              <p>Monday - Sunday: 8:00 AM - 9:00 PM</p>
            </div>
          </div>
          
          <div class="feature">
            <span class="feature-icon">📞</span>
            <div>
              <h4>Contact</h4>
              <p>(043) 123-4567</p>
            </div>
          </div>
        </div>
        
        <div class="cta-buttons">
          <Button variant="primary" size="large">Visit Our Store</Button>
          <Button variant="outline" size="large">Learn More</Button>
        </div>
        
        <div class="social-proof">
          <p class="review-count">⭐ 4.8 ★★★★★ (500+ reviews)</p>
          <div class="avatars">
            <div class="avatar" v-for="n in 5" :key="n">👤</div>
          </div>
          <p class="review-text">"The kiosk made designing my daughter's birthday cake so easy! No more guessing how it will look."</p>
          <p class="review-author">- Maria S., Calapan City</p>
        </div>
      </div>
      
      <div class="cta-image">
        <div class="store-front">
          <div class="store-sign">Red Ribbon</div>
          <div class="store-window">
            <div class="kiosk-indicator">
              <span class="pulse"></span>
              <span>Smart Kiosk Available</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Button from '../common/Button.vue'

export default {
  name: 'CtaSection',
  components: {
    Button
  }
}
</script>

<style scoped>
.cta-section {
  padding: var(--spacing-xl) 0;
  background: linear-gradient(135deg, var(--primary-red) 0%, var(--primary-red-dark) 100%);
  color: var(--white);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-md);
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-lg);
  align-items: center;
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

.cta-content > p {
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

/* Override button styles for this section */
:deep(.btn-primary) {
  background: var(--white);
  color: var(--primary-red);
}

:deep(.btn-outline) {
  border-color: var(--white);
  color: var(--white);
}

:deep(.btn-outline:hover) {
  background: rgba(255,255,255,0.1);
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
  width: 40px;
  height: 40px;
  background: var(--accent-gold);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
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

.cta-image {
  display: flex;
  justify-content: center;
  align-items: center;
}

.store-front {
  width: 300px;
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
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;
}

.kiosk-indicator {
  text-align: center;
  background: var(--white);
  padding: var(--spacing-md);
  border-radius: var(--radius-md);
  color: var(--text-dark);
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

@media (max-width: 768px) {
  .container {
    grid-template-columns: 1fr;
    text-align: center;
  }
  
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
  
  .cta-image {
    order: -1;
  }
}
</style>