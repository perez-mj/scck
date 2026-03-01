<!-- src/views/Bmc.vue -->
<template>
  <section id="bmc" class="bmc-section">
    <v-container>
      <h2 class="section-title">
        {{ businessModelData.title }} <span class="accent">{{ businessModelData.titleAccent }}</span>
      </h2>
      <p class="section-subtitle">{{ businessModelData.subtitle }}</p>
      
      <v-row>
        <v-col cols="12">
          <v-card class="bmc-grid" elevation="0">
            <!-- Customer Segments -->
            <div class="grid-item customer-segments">
              <h3 class="grid-title">
                <v-icon color="primary">mdi-account-group</v-icon>
                Customer Segments
              </h3>
              <div v-for="(item, index) in businessModelData.bmc.customerSegments" :key="index" class="grid-content-item">
                <v-icon size="small" color="primary">{{ item.icon }}</v-icon>
                <div>
                  <strong>{{ item.title }}</strong>
                  <p>{{ item.description }}</p>
                </div>
              </div>
            </div>
            
            <!-- Value Propositions -->
            <div class="grid-item value-propositions">
              <h3 class="grid-title">
                <v-icon color="primary">mdi-gift</v-icon>
                Value Propositions
              </h3>
              <div v-for="(item, index) in businessModelData.bmc.valuePropositions" :key="index" class="grid-content-item">
                <v-icon size="small" color="primary">{{ item.icon }}</v-icon>
                <div>
                  <strong>{{ item.title }}</strong>
                  <p>{{ item.description }}</p>
                </div>
              </div>
            </div>
            
            <!-- Channels -->
            <div class="grid-item channels">
              <h3 class="grid-title">
                <v-icon color="primary">mdi-routes</v-icon>
                Channels
              </h3>
              <div v-for="(item, index) in businessModelData.bmc.channels" :key="index" class="grid-content-item">
                <v-icon size="small" color="primary">mdi-check-circle</v-icon>
                <span>{{ item }}</span>
              </div>
            </div>
            
            <!-- Customer Relationships -->
            <div class="grid-item relationships">
              <h3 class="grid-title">
                <v-icon color="primary">mdi-heart</v-icon>
                Customer Relationships
              </h3>
              <div v-for="(item, index) in businessModelData.bmc.customerRelationships" :key="index" class="grid-content-item">
                <v-icon size="small" color="primary">mdi-check-circle</v-icon>
                <span>{{ item }}</span>
              </div>
            </div>
            
            <!-- Revenue Streams -->
            <div class="grid-item revenue">
              <h3 class="grid-title">
                <v-icon color="primary">mdi-cash-multiple</v-icon>
                Revenue Streams
              </h3>
              <div v-for="(item, index) in businessModelData.bmc.revenueStreams" :key="index" class="grid-content-item">
                <v-icon size="small" color="success">mdi-trending-up</v-icon>
                <div class="revenue-item">
                  <span>{{ item.item }}</span>
                  <span class="revenue-margin">{{ item.margin }}</span>
                </div>
              </div>
            </div>
            
            <!-- Key Resources -->
            <div class="grid-item resources">
              <h3 class="grid-title">
                <v-icon color="primary">mdi-package-variant</v-icon>
                Key Resources
              </h3>
              <div v-for="(item, index) in businessModelData.bmc.keyResources" :key="index" class="grid-content-item">
                <v-icon size="small" color="primary">mdi-check-circle</v-icon>
                <span>{{ item }}</span>
              </div>
            </div>
            
            <!-- Key Activities -->
            <div class="grid-item activities">
              <h3 class="grid-title">
                <v-icon color="primary">mdi-chart-line</v-icon>
                Key Activities
              </h3>
              <div v-for="(item, index) in businessModelData.bmc.keyActivities" :key="index" class="grid-content-item">
                <v-icon size="small" color="primary">mdi-check-circle</v-icon>
                <span>{{ item }}</span>
              </div>
            </div>
            
            <!-- Key Partnerships -->
            <div class="grid-item partnerships">
              <h3 class="grid-title">
                <v-icon color="primary">mdi-handshake</v-icon>
                Key Partnerships
              </h3>
              <div v-for="(item, index) in businessModelData.bmc.keyPartnerships" :key="index" class="grid-content-item">
                <v-icon size="small" color="primary">mdi-check-circle</v-icon>
                <span>{{ item }}</span>
              </div>
            </div>
            
            <!-- Cost Structure -->
            <div class="grid-item costs">
              <h3 class="grid-title">
                <v-icon color="primary">mdi-chart-pie</v-icon>
                Cost Structure
              </h3>
              <div v-for="(item, index) in businessModelData.bmc.costStructure" :key="index" class="grid-content-item">
                <v-icon size="small" color="primary">mdi-check-circle</v-icon>
                <span>{{ item }}</span>
              </div>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup>
import { businessModelData } from '@/data/sugarstack'
</script>

<style scoped>
.bmc-section {
  padding: var(--spacing-xl) 0;
  background: var(--white);
}

.bmc-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
  gap: 1px;
  background: rgba(0,0,0,0.05);
  border: 1px solid rgba(0,0,0,0.05);
  border-radius: var(--radius-lg);
  overflow: hidden;
}

.grid-item {
  background: var(--white);
  padding: var(--spacing-md);
  min-height: 200px;
}

/* Grid positioning */
.customer-segments {
  grid-column: 1 / 2;
  grid-row: 1 / 3;
}

.value-propositions {
  grid-column: 2 / 4;
  grid-row: 1 / 2;
}

.channels {
  grid-column: 4 / 5;
  grid-row: 1 / 2;
}

.relationships {
  grid-column: 4 / 5;
  grid-row: 2 / 3;
}

.revenue {
  grid-column: 1 / 2;
  grid-row: 3 / 4;
}

.resources {
  grid-column: 2 / 3;
  grid-row: 2 / 3;
}

.activities {
  grid-column: 3 / 4;
  grid-row: 2 / 3;
}

.partnerships {
  grid-column: 2 / 4;
  grid-row: 3 / 4;
}

.costs {
  grid-column: 4 / 5;
  grid-row: 3 / 4;
}

.grid-title {
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--text-dark);
  margin-bottom: var(--spacing-md);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding-bottom: var(--spacing-xs);
  border-bottom: 2px solid var(--primary-red);
}

.grid-content-item {
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  margin-bottom: var(--spacing-sm);
  font-size: 0.95rem;
}

.grid-content-item p {
  margin: 0;
  color: var(--text-light);
  font-size: 0.85rem;
}

.revenue-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.revenue-margin {
  background: var(--secondary-cream);
  color: var(--primary-red);
  padding: 2px 8px;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 600;
}

@media (max-width: 960px) {
  .bmc-grid {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
  }
  
  .grid-item {
    grid-column: 1 / 2 !important;
    grid-row: auto !important;
  }
}
</style>