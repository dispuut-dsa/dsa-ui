import Vue from 'vue'
import App from './App.vue'
import AsyncComputed from 'vue-async-computed'
import router from './router'
import store from './store'
import { BootstrapVue } from 'bootstrap-vue'

Vue.config.productionTip = false

Vue.use(AsyncComputed)

Vue.use(BootstrapVue)
import '@/assets/scss/bootstrap.scss'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
