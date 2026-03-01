// src/main.js
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'

// Custom styles
import './styles/variables.css'

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        colors: {
          primary: '#E31837',
          secondary: '#FFF5E6',
          accent: '#FFD700',
          success: '#4CAF50',
          warning: '#FFC107',
          error: '#FF5252',
          info: '#2196F3',
        }
      }
    }
  }
})

createApp(App)
  .use(router)
  .use(vuetify)
  .mount('#app')