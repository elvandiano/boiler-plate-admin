import Vue from 'vue'
import store from './store'
import App from './App.vue'
import router from './router'
import './assets/main.scss'
import BootstrapVue from 'bootstrap-vue'

Vue.config.productionTip = false

Vue.use(BootstrapVue)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
