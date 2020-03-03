import Vue from 'vue'
import App from './view/Index.vue'
import router from './router.js'
import Axios from 'axios'
import {BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import { store } from './store/store.js'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import Slick from 'vue-slick';
import Agile from 'vue-agile';
Vue.use(VueSweetalert2)
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.use(Slick)
Vue.use(Agile)


import '../node_modules/slick-carousel/slick/slick.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
window.$ = require('jquery')
window.JQuery = require('jquery')



Vue.prototype.$http = Axios


Vue.config.productionTip = false
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')