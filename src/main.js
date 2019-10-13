import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import VueRouter from 'vue-router'
import Routes from './routes'

Vue.use(VueRouter)

Vue.config.productionTip = false

new Vue({
  router: Routes,
  render: h => h(App),
}).$mount('#app')
