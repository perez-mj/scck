<template>
  <section id="how-it-works" class="how-it-works">
    <div class="container">
      <h2 class="section-title">How It <span class="accent">Works</span></h2>
      
      <div class="steps">
        <div v-for="(step, index) in steps" :key="index" class="step">
          <div class="step-number">{{ index + 1 }}</div>
          <div class="step-content">
            <h3>{{ step.title }}</h3>
            <p>{{ step.description }}</p>
          </div>
          <div class="step-arrow" v-if="index < steps.length - 1">→</div>
        </div>
      </div>
      
      <div class="demo-video">
        <div class="video-placeholder">
          <div class="play-button">▶</div>
          <p>Watch how easy it is to design your cake</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HowItWorks',
  data() {
    return {
      steps: [
        {
          title: 'Choose Your Base',
          description: 'Select your cake size, flavor, and shape from our premium options'
        },
        {
          title: 'Customize Design',
          description: 'Use the touchscreen to add icing, toppings, and personal messages'
        },
        {
          title: 'Preview in 3D',
          description: 'See your design come to life with real-time 3D visualization'
        },
        {
          title: 'Order & Pickup',
          description: 'Get your QR stub, pay at counter, and pick up your perfect cake'
        }
      ]
    }
  }
}
</script>

<style scoped>
.how-it-works {
  padding: var(--spacing-xl) 0;
  background: var(--white);
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

.steps {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-xl);
}

.step {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  position: relative;
}

.step-number {
  width: 50px;
  height: 50px;
  background: var(--primary-red);
  color: var(--white);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 700;
  flex-shrink: 0;
}

.step-content {
  flex: 1;
}

.step-content h3 {
  color: var(--text-dark);
  margin-bottom: 4px;
  font-size: 1.3rem;
}

.step-content p {
  color: var(--text-light);
}

.step-arrow {
  font-size: 2rem;
  color: var(--primary-red);
  margin: 0 var(--spacing-sm);
}

.demo-video {
  max-width: 800px;
  margin: 0 auto;
}

.video-placeholder {
  background: linear-gradient(135deg, var(--secondary-cream), var(--gray-bg));
  border-radius: var(--radius-lg);
  padding: var(--spacing-xl);
  text-align: center;
  cursor: pointer;
  transition: transform var(--transition-fast);
}

.video-placeholder:hover {
  transform: scale(1.02);
}

.play-button {
  width: 80px;
  height: 80px;
  background: var(--primary-red);
  color: var(--white);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  margin: 0 auto var(--spacing-md);
  animation: pulse 2s infinite;
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

@media (max-width: 768px) {
  .step {
    flex-direction: column;
    text-align: center;
  }
  
  .step-arrow {
    transform: rotate(90deg);
    margin: var(--spacing-sm) 0;
  }
  
  .section-title {
    font-size: 2rem;
  }
}
</style>