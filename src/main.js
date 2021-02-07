import Vue from 'vue'
import App from './App.vue'
import router from './router'

import firebase from 'firebase'
import '@/assets/css/tailwind.css'

Vue.config.productionTip = false

// Colocar aqui Api key generado con firebase

// ------------------------------------------

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
