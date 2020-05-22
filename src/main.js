import Vue from 'vue'

import App from './App.vue'
import router from './router.js'
import Axios from 'axios'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import { store } from './store/store.js'
import VueSweetalert2 from 'vue-sweetalert2';
import VueCoreVideoPlayer from 'vue-core-video-player'
import 'jquery'

import 'sweetalert2/dist/sweetalert2.min.css';
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import Slick from 'vue-slick';
import vuetify from './plugins/vuetify.js'
import { VueContext } from 'vue-context';
import { BSidebar } from 'bootstrap-vue'
import { BIcon } from 'bootstrap-vue'
Vue.component('b-icon', BIcon)
Vue.component('b-sidebar', BSidebar)
Vue.use(VueCoreVideoPlayer, {
  lang: {
    dashboard: {
      btn: {
        play: "Play",
        pause: "Pause",
        fullscreen: "Full Screen",
        exitFullscreen: "Exit Full Screen",
        mute: "Mute",
        unmute: "Unmute",
        back: "Back",
        pip: "Picture-in-Picture"
      },
      settings: {
        autoplay: "Autoplay",
        loop: "Loop",
        speed: "Speed",
        resolution: "Resolution"
      }
    },
    layers: {
      error: {
        title: "(O_O)?  Error!",
        "2404": "Video Source Not Found",
        "2502": "Media Network Error",
        "2503": "Video Cannot DECODE",
        "2504": "Video Cannot Play!"
      },
      loading: {
        msg: "Loading ..."
      }
    }
  }
});
Vue.use(VueSweetalert2)
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.use(Slick)
Vue.use(VueContext )
import '../node_modules/slick-carousel/slick/slick.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
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