<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-grid">
        <!-- Brand Column -->
        <div class="footer-col brand">
          <h3>Red Ribbon<span class="accent">Kiosk</span></h3>
          <p>Revolutionizing cake customization in Calapan City through smart technology and interactive design.</p>
          <div class="social-links">
            <a href="#" class="social-link">📘</a>
            <a href="#" class="social-link">📷</a>
            <a href="#" class="social-link">🐦</a>
            <a href="#" class="social-link">📱</a>
          </div>
        </div>
        
        <!-- Quick Links -->
        <div class="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#features">Features</a></li>
            <li><a href="#how-it-works">How It Works</a></li>
            <li><a href="#bmc">Business Model</a></li>
            <li><a href="#contact">Visit Us</a></li>
          </ul>
        </div>
        
        <!-- Business Hours -->
        <div class="footer-col">
          <h4>Store Hours</h4>
          <ul class="hours">
            <li><span>Monday - Friday:</span> 8:00 AM - 9:00 PM</li>
            <li><span>Saturday:</span> 8:00 AM - 10:00 PM</li>
            <li><span>Sunday:</span> 9:00 AM - 8:00 PM</li>
            <li><span>Holidays:</span> 9:00 AM - 6:00 PM</li>
          </ul>
        </div>
        
        <!-- Contact Info -->
        <div class="footer-col">
          <h4>Contact Us</h4>
          <ul class="contact">
            <li>📍 Red Ribbon Calapan City</li>
            <li>📞 (043) 123-4567</li>
            <li>✉️ calapan@redribbon.com</li>
            <li>🌐 www.redribbon.com.ph</li>
          </ul>
        </div>
      </div>
      
      <!-- BMC Summary Strip -->
      <div class="bmc-strip">
        <div class="bmc-item" v-for="item in bmcSummary" :key="item.label">
          <span class="bmc-icon">{{ item.icon }}</span>
          <div class="bmc-text">
            <strong>{{ item.label }}</strong>
            <span>{{ item.value }}</span>
          </div>
        </div>
      </div>
      
      <!-- Copyright -->
      <div class="copyright">
        <p>&copy; 2026 Red Ribbon Smart Kiosk - Calapan City. All rights reserved.</p>
        <p class="credit">Designed for Oriental Mindoro's digital future</p>
      </div>
    </div>
  </footer>
</template>

<script>
import { bmcData } from '../../data/bmcData'

export default {
  name: 'Footer',
  data() {
    return {
      bmcSummary: [
        { icon: '👥', label: 'Serving', value: 'Calapan City' },
        { icon: '💰', label: 'Revenue', value: 'Premium Add-ons' },
        { icon: '🤝', label: 'Partners', value: '3 Key Partners' },
        { icon: '📱', label: 'Channel', value: 'In-Store Kiosk' }
      ]
    }
  }
}
</script>

<style scoped>
.footer {
  background: var(--text-dark);
  color: var(--white);
  padding: var(--spacing-xl) 0 var(--spacing-md);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-md);
}

.footer-grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1.5fr 1.5fr;
  gap: var(--spacing-lg);
  margin-bottom: var(--spacing-lg);
}

.footer-col h3 {
  font-size: 1.8rem;
  margin-bottom: var(--spacing-sm);
  font-family: var(--font-secondary);
}

.footer-col .accent {
  color: var(--primary-red);
  margin-left: 4px;
}

.footer-col h4 {
  color: var(--primary-red);
  margin-bottom: var(--spacing-sm);
  font-size: 1.2rem;
}

.footer-col p {
  color: rgba(255,255,255,0.7);
  line-height: 1.6;
  margin-bottom: var(--spacing-md);
}

.footer-col ul {
  list-style: none;
  padding: 0;
}

.footer-col li {
  margin-bottom: var(--spacing-xs);
}

.footer-col a {
  color: rgba(255,255,255,0.7);
  text-decoration: none;
  transition: color var(--transition-fast);
}

.footer-col a:hover {
  color: var(--primary-red);
}

.hours li, .contact li {
  color: rgba(255,255,255,0.7);
  font-size: 0.95rem;
}

.hours span {
  color: var(--white);
  font-weight: 600;
  display: inline-block;
  min-width: 100px;
}

.social-links {
  display: flex;
  gap: var(--spacing-sm);
}

.social-link {
  width: 40px;
  height: 40px;
  background: rgba(255,255,255,0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: var(--white);
  font-size: 1.2rem;
  transition: all var(--transition-fast);
}

.social-link:hover {
  background: var(--primary-red);
  transform: translateY(-3px);
}

/* BMC Strip */
.bmc-strip {
  display: flex;
  justify-content: space-around;
  padding: var(--spacing-md) 0;
  border-top: 1px solid rgba(255,255,255,0.1);
  border-bottom: 1px solid rgba(255,255,255,0.1);
  margin-bottom: var(--spacing-md);
}

.bmc-item {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
}

.bmc-icon {
  font-size: 2rem;
}

.bmc-text {
  display: flex;
  flex-direction: column;
}

.bmc-text strong {
  color: var(--white);
  font-size: 0.9rem;
}

.bmc-text span {
  color: var(--primary-red);
  font-size: 0.85rem;
}

/* Copyright */
.copyright {
  text-align: center;
  color: rgba(255,255,255,0.5);
  font-size: 0.9rem;
}

.copyright p {
  margin: 5px 0;
}

.credit {
  color: rgba(255,255,255,0.3);
  font-size: 0.8rem;
}

/* Responsive */
@media (max-width: 968px) {
  .footer-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .footer-grid {
    grid-template-columns: 1fr;
  }
  
  .bmc-strip {
    flex-direction: column;
    gap: var(--spacing-sm);
    align-items: center;
    text-align: center;
  }
  
  .bmc-item {
    width: 100%;
    justify-content: center;
  }
}
</style>