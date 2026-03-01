<template>
  <button 
    :class="['btn', `btn-${variant}`, `btn-${size}`]"
    :disabled="disabled"
    @click="$emit('click')"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    variant: {
      type: String,
      default: 'primary',
      validator: (value) => ['primary', 'secondary', 'outline'].includes(value)
    },
    size: {
      type: String,
      default: 'medium',
      validator: (value) => ['small', 'medium', 'large'].includes(value)
    },
    disabled: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
.btn {
  border: none;
  border-radius: var(--radius-md);
  font-weight: 600;
  cursor: pointer;
  transition: all var(--transition-fast);
  font-family: var(--font-primary);
}

.btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

/* Variants */
.btn-primary {
  background: var(--primary-red);
  color: var(--white);
}

.btn-primary:hover:not(:disabled) {
  background: var(--primary-red-dark);
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}

.btn-secondary {
  background: var(--white);
  color: var(--primary-red);
  border: 2px solid var(--primary-red);
}

.btn-secondary:hover:not(:disabled) {
  background: var(--secondary-cream);
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}

.btn-outline {
  background: transparent;
  color: var(--text-dark);
  border: 2px solid var(--text-light);
}

.btn-outline:hover:not(:disabled) {
  border-color: var(--primary-red);
  color: var(--primary-red);
}

/* Sizes */
.btn-small {
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
}

.btn-medium {
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
}

.btn-large {
  padding: 1rem 2rem;
  font-size: 1.125rem;
}
</style>