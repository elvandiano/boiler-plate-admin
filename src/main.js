import Vue from 'vue'
import store from './store'
import App from './App.vue'
import router from './router'
import './assets/main.scss'
import BootstrapVue from 'bootstrap-vue'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(Loading)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
