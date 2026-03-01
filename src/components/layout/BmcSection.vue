<template>
  <section id="bmc" class="bmc-section">
    <div class="container">
      <h2 class="section-title">Business <span class="accent">Model Canvas</span></h2>
      
      <div class="bmc-grid">
        <!-- Left Side -->
        <div class="bmc-column left">
          <!-- Key Partners -->
          <div class="bmc-card partners">
            <h3><span class="icon">🤝</span> Key Partners</h3>
            <ul>
              <li v-for="partner in bmcData.keyPartners" :key="partner">{{ partner }}</li>
            </ul>
          </div>
          
          <!-- Key Activities -->
          <div class="bmc-card activities">
            <h3><span class="icon">⚡</span> Key Activities</h3>
            <ul>
              <li v-for="activity in bmcData.keyActivities" :key="activity">{{ activity }}</li>
            </ul>
          </div>
          
          <!-- Key Resources -->
          <div class="bmc-card resources">
            <h3><span class="icon">📦</span> Key Resources</h3>
            <ul>
              <li v-for="resource in bmcData.keyResources" :key="resource">{{ resource }}</li>
            </ul>
          </div>
        </div>
        
        <!-- Center - Value Proposition -->
        <div class="bmc-column center">
          <div class="bmc-card value-prop-card">
            <h3><span class="icon">💎</span> Value Propositions</h3>
            <div class="value-items">
              <div v-for="prop in bmcData.valueProps" :key="prop.title" class="value-item">
                <span class="value-icon">{{ prop.icon }}</span>
                <div>
                  <h4>{{ prop.title }}</h4>
                  <p>{{ prop.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Right Side -->
        <div class="bmc-column right">
          <!-- Customer Relationships -->
          <div class="bmc-card relationships">
            <h3><span class="icon">❤️</span> Customer Relationships</h3>
            <ul>
              <li v-for="rel in bmcData.relationship" :key="rel">{{ rel }}</li>
            </ul>
          </div>
          
          <!-- Channels -->
          <div class="bmc-card channels">
            <h3><span class="icon">📢</span> Channels</h3>
            <ul>
              <li v-for="channel in bmcData.channels" :key="channel.name">
                <span class="channel-icon">{{ channel.icon }}</span>
                {{ channel.name }}
              </li>
            </ul>
          </div>
          
          <!-- Customer Segments -->
          <div class="bmc-card segments">
            <h3><span class="icon">👥</span> Customer Segments</h3>
            <ul>
              <li v-for="segment in bmcData.customerSegments" :key="segment">{{ segment }}</li>
            </ul>
          </div>
        </div>
      </div>
      
      <!-- Bottom Row - Cost & Revenue -->
      <div class="bmc-bottom">
        <!-- Cost Structure -->
        <div class="bmc-card cost">
          <h3><span class="icon">💰</span> Cost Structure</h3>
          <ul>
            <li v-for="cost in bmcData.costStructure" :key="cost">{{ cost }}</li>
          </ul>
        </div>
        
        <!-- Revenue Streams -->
        <div class="bmc-card revenue">
          <h3><span class="icon">📈</span> Revenue Streams</h3>
          <ul>
            <li v-for="revenue in bmcData.revenueStreams" :key="revenue">{{ revenue }}</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { bmcData } from '../../data/bmcData'

export default {
  name: 'BmcSection',
  data() {
    return {
      bmcData
    }
  }
}
</script>

<style scoped>
.bmc-section {
  padding: var(--spacing-xl) 0;
  background: var(--gray-bg);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-md);
}

.section-title {
  text-align: center;
  font-size: 2.5rem;
  color: var(--text-dark);
  margin-bottom: var(--spacing-lg);
}

.section-title .accent {
  color: var(--primary-red);
  font-family: var(--font-secondary);
}

.bmc-grid {
  display: grid;
  grid-template-columns: 1fr 1.5fr 1fr;
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-md);
}

.bmc-column {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}

.bmc-card {
  background: var(--white);
  border-radius: var(--radius-md);
  padding: var(--spacing-md);
  box-shadow: var(--shadow-sm);
  transition: transform var(--transition-fast), box-shadow var(--transition-fast);
}

.bmc-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-lg);
}

.bmc-card h3 {
  color: var(--primary-red);
  margin-bottom: var(--spacing-sm);
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  gap: 8px;
  border-bottom: 2px solid var(--secondary-cream);
  padding-bottom: var(--spacing-xs);
}

.icon {
  font-size: 1.5rem;
}

.bmc-card ul {
  list-style: none;
  padding: 0;
}

.bmc-card li {
  padding: var(--spacing-xs) 0;
  color: var(--text-light);
  font-size: 0.95rem;
  display: flex;
  align-items: center;
  gap: 8px;
  border-bottom: 1px dashed var(--gray-bg);
}

.bmc-card li:last-child {
  border-bottom: none;
}

/* Value Proposition specific */
.value-items {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
}

.value-item {
  display: flex;
  gap: var(--spacing-sm);
  align-items: flex-start;
  padding: var(--spacing-xs);
  border-radius: var(--radius-sm);
  transition: background var(--transition-fast);
}

.value-item:hover {
  background: var(--secondary-cream);
}

.value-icon {
  font-size: 2rem;
  min-width: 40px;
}

.value-item h4 {
  color: var(--text-dark);
  font-size: 1rem;
  margin-bottom: 4px;
}

.value-item p {
  color: var(--text-light);
  font-size: 0.9rem;
  line-height: 1.4;
}

/* Bottom row */
.bmc-bottom {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-md);
  margin-top: var(--spacing-md);
}

.cost, .revenue {
  flex: 1;
}

.channel-icon {
  font-size: 1.2rem;
  min-width: 24px;
}

/* Responsive */
@media (max-width: 968px) {
  .bmc-grid {
    grid-template-columns: 1fr;
  }
  
  .bmc-bottom {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .section-title {
    font-size: 2rem;
  }
  
  .bmc-card {
    padding: var(--spacing-sm);
  }
}
</style>