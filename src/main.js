// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import 'fullpage.js/vendors/scrolloverflow'
// import 'fullpage.js/dist/fullpage.min.css'
// import './fullpage.scrollHorizontally.min'
// import VueFullPage from 'vue-fullpage.js'
// import Reveal from 'reveal.js'
// import 'reveal.js/css/reset.css'

Vue.config.productionTip = false
// Vue.use(Reveal)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
