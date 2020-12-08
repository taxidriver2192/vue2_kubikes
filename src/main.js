import Vue from 'vue'
import App from './App.vue'
import vueGeolocation from 'vue-browser-geolocation'

Vue.config.productionTip = false

Vue.use(vueGeolocation)

new Vue({
  render: h => h(App),
}).$mount('#app')
