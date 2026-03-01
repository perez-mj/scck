<!-- src/components/common/Footer.vue -->
<template>
  <v-footer class="footer" padless>
    <v-container>
      <v-row>
        <v-col cols="12" md="4">
          <div class="footer-about">
            <h3 class="footer-title">{{ footerData.about.title }}</h3>
            <p class="footer-description">{{ footerData.about.description }}</p>
          </div>
        </v-col>
        
        <v-col cols="12" md="4">
          <h3 class="footer-title">Quick Links</h3>
          <div class="footer-links">
            <a v-for="link in footerData.quickLinks" :key="link.text" :href="link.link">
              {{ link.text }}
            </a>
          </div>
        </v-col>
        
        <v-col cols="12" md="4">
          <h3 class="footer-title">Contact Us</h3>
          <div class="footer-contact">
            <div v-for="(info, index) in footerData.contactInfo" :key="index" class="contact-item">
              <v-icon size="small" color="primary">{{ info.icon }}</v-icon>
              <span>{{ info.text }}</span>
            </div>
          </div>
          
          <div class="footer-social">
            <v-btn
              v-for="(social, index) in footerData.socialLinks"
              :key="index"
              :href="social.link"
              icon
              variant="text"
              class="social-btn"
            >
              <v-icon>{{ social.icon }}</v-icon>
            </v-btn>
          </div>
        </v-col>
      </v-row>
      
      <v-divider class="my-4"></v-divider>
      
      <div class="footer-bottom">
        <p>{{ footerData.copyright }}</p>
      </div>
    </v-container>
  </v-footer>
</template>

<script setup>
import { footerData } from '@/data/sugarstack'
</script>

<style scoped>
.footer {
  background: var(--text-dark) !important;
  color: var(--white);
  padding: var(--spacing-xl) 0 var(--spacing-md);
}

.footer-title {
  color: var(--white);
  font-size: 1.3rem;
  margin-bottom: var(--spacing-md);
  font-family: var(--font-secondary);
}

.footer-description {
  color: rgba(255,255,255,0.7);
  line-height: 1.8;
}

.footer-links {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
}

.footer-links a {
  color: rgba(255,255,255,0.7);
  text-decoration: none;
  transition: color var(--transition-fast);
}

.footer-links a:hover {
  color: var(--primary-red);
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: var(--spacing-sm);
  color: rgba(255,255,255,0.7);
}

.footer-social {
  display: flex;
  gap: var(--spacing-xs);
  margin-top: var(--spacing-md);
}

.social-btn {
  color: rgba(255,255,255,0.7) !important;
}

.social-btn:hover {
  color: var(--primary-red) !important;
  background: rgba(255,255,255,0.1) !important;
}

.footer-bottom {
  text-align: center;
  color: rgba(255,255,255,0.5);
  font-size: 0.9rem;
}

:deep(.v-divider) {
  border-color: rgba(255,255,255,0.1) !important;
}
</style>