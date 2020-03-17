import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
import Axios from 'axios'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import { store } from './store/store.js'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import Slick from 'vue-slick';
import Agile from 'vue-agile';
import vuetify from './plugins/vuetify.js'
import { VueContext } from 'vue-context';

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
import '../node_modules/vue-context/dist/css/vue-context.css';
Vue.prototype.$http = Axios


Vue.config.productionTip = false
new Vue({
  render: h => h(App),
  components: {
    VueContext
  },
  router,
  store,
  vuetify
}).$mount('#app')