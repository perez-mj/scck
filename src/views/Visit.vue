<!-- src/views/Visit.vue -->
<template>
  <div class="visit-page">
    <section class="visit-hero">
      <v-container>
        <h1 class="section-title">
          {{ ctaData.title }} <span class="accent">{{ ctaData.titleAccent }}</span>
        </h1>
        <p class="section-subtitle">{{ ctaData.subtitle }}</p>
      </v-container>
    </section>

    <section class="map-section">
      <v-container>
        <v-row>
          <v-col cols="12" lg="8">
            <div class="map-container">
              <iframe
                :src="siteConfig.mapEmbedUrl"
                width="100%"
                height="450"
                style="border:0; border-radius: var(--radius-lg);"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </v-col>
          
          <v-col cols="12" lg="4">
            <div class="store-info-card">
              <h2>Store Information</h2>
              
              <div v-for="(info, index) in ctaData.storeInfo" :key="index" class="info-item">
                <v-icon color="primary" size="24">{{ info.icon }}</v-icon>
                <div>
                  <h3>{{ info.title }}</h3>
                  <p>{{ info.description }}</p>
                </div>
              </div>
              
              <div class="action-buttons">
                <v-btn
                  color="primary"
                  size="large"
                  block
                  class="mb-3"
                  href="https://maps.google.com/?q=Red+Ribbon+Calapan"
                  target="_blank"
                >
                  <v-icon left>mdi-directions</v-icon>
                  Get Directions
                </v-btn>
                <v-btn
                  variant="outlined"
                  size="large"
                  block
                  href="tel:+63431234567"
                >
                  <v-icon left>mdi-phone</v-icon>
                  Call Now
                </v-btn>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <section class="social-proof-section">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" md="8">
            <div class="social-proof-card">
              <div class="rating">
                <span class="rating-value">{{ ctaData.socialProof.rating }}</span>
                <v-icon color="accent" v-for="n in 5" :key="n">mdi-star</v-icon>
                <span class="review-count">({{ ctaData.socialProof.reviewCount }}+ reviews)</span>
              </div>
              
              <div class="review">
                <v-icon color="primary" size="40">mdi-format-quote-open</v-icon>
                <p class="review-text">{{ ctaData.socialProof.reviewText }}</p>
                <p class="review-author">- {{ ctaData.socialProof.reviewAuthor }}</p>
              </div>
              
              <div class="avatars">
                <v-avatar v-for="n in 5" :key="n" size="48" color="secondary" class="avatar">
                  <span>👤</span>
                </v-avatar>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <section class="nearby-section">
      <v-container>
        <h2 class="text-center mb-5">What's Nearby</h2>
        <v-row>
          <v-col cols="12" md="4" v-for="(place, index) in nearbyPlaces" :key="index">
            <v-card class="nearby-card" elevation="0">
              <v-icon size="32" color="primary">{{ place.icon }}</v-icon>
              <h3>{{ place.name }}</h3>
              <p>{{ place.distance }}</p>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </div>
</template>

<script setup>
import { ctaData, siteConfig } from '@/data/sugarstack'

const nearbyPlaces = [
  { icon: 'mdi-parking', name: 'Public Parking', distance: '2 min walk' },
  { icon: 'mdi-bank', name: 'Banks', distance: '5 min walk' },
  { icon: 'mdi-shopping', name: 'Shopping Mall', distance: '10 min walk' }
]
</script>

<style scoped>
.visit-page {
  margin-top: 64px;
}

.visit-hero {
  padding: var(--spacing-xl) 0;
  background: linear-gradient(135deg, var(--secondary-cream), var(--white));
}

.map-section {
  padding: var(--spacing-xl) 0;
}

.map-container {
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-lg);
}

.store-info-card {
  background: var(--white);
  padding: var(--spacing-lg);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
  height: 100%;
}

.store-info-card h2 {
  font-size: 1.5rem;
  color: var(--text-dark);
  margin-bottom: var(--spacing-lg);
}

.info-item {
  display: flex;
  gap: var(--spacing-sm);
  margin-bottom: var(--spacing-md);
  padding-bottom: var(--spacing-md);
  border-bottom: 1px solid rgba(0,0,0,0.05);
}

.info-item:last-child {
  border-bottom: none;
}

.info-item h3 {
  font-size: 1rem;
  color: var(--text-dark);
  margin-bottom: 4px;
}

.info-item p {
  color: var(--text-light);
  font-size: 0.95rem;
}

.action-buttons {
  margin-top: var(--spacing-lg);
}

.social-proof-section {
  padding: var(--spacing-xl) 0;
  background: var(--gray-bg);
}

.social-proof-card {
  background: var(--white);
  padding: var(--spacing-xl);
  border-radius: var(--radius-lg);
  text-align: center;
  box-shadow: var(--shadow-md);
}

.rating {
  margin-bottom: var(--spacing-lg);
}

.rating-value {
  font-size: 3rem;
  font-weight: 700;
  color: var(--primary-red);
  margin-right: var(--spacing-sm);
}

.review-count {
  color: var(--text-light);
  margin-left: var(--spacing-sm);
}

.review {
  max-width: 600px;
  margin: 0 auto var(--spacing-lg);
}

.review-text {
  font-size: 1.2rem;
  font-style: italic;
  color: var(--text-dark);
  margin: var(--spacing-sm) 0;
}

.review-author {
  color: var(--text-light);
  font-weight: 600;
}

.avatars {
  display: flex;
  justify-content: center;
  gap: var(--spacing-xs);
}

.avatar {
  border: 2px solid var(--primary-red);
}

.nearby-section {
  padding: var(--spacing-xl) 0;
}

.nearby-card {
  padding: var(--spacing-lg);
  text-align: center;
  border-radius: var(--radius-lg);
  height: 100%;
  transition: all var(--transition-fast);
}

.nearby-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-lg);
}

.nearby-card h3 {
  margin: var(--spacing-sm) 0;
  color: var(--text-dark);
}

.nearby-card p {
  color: var(--text-light);
}
</style>