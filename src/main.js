import Vue from 'vue'
import App from './App.vue'
import 'whatwg-fetch'  //Fetch polyfill for IE


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
