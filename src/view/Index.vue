<template>
  <div style="position: relative;">
    <Header v-if="!hideHeader" :show="showHeader"></Header>
    <router-view></router-view>
    <AutoAnswer v-if="!guestHideAutoAnswer"></AutoAnswer>
    <Footer v-if="!hideFooter"></Footer>
  </div>
</template>
<script>
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import AutoAnswer from "../components/AutoAnswer/AutoAnswer";
import apiConfig from "../API/api.json";
import { mapGetters } from "vuex";
import { CommonService } from "../service/common.service.js";
var commonService = new CommonService();
export default {
  components: { Header, AutoAnswer, Footer },
  data() {
    return {
      showHeader: null
    };
  },
  computed: {
    ...mapGetters({
      hideHeader: "hideHeader",
      hideFooter: "hideFooter",
      guestHideAutoAnswer: "guestHideAutoAnswer"
    })
  },
  created() {
    this.checkLogin();
  },
  methods: {
    checkCookie() {
      let cookies = document.cookie.split(";");
      for (let i = 0; i < cookies.length; i++) {
        if (cookies[i].includes("token")) {
          let token = cookies[i].split("=")[1];
          console.log("here", token);
          localStorage.token = token;

          console.log(i);
          break;
        }
      }
      this.checkLogin();
    },
    checkLogin() {
      let vm = this;
      if (this.$route.query.token) {
        localStorage.token = this.$route.query.token;
        window.history.pushState({}, document.title, this.$route.path)
      }
      setTimeout(function() {
        if (localStorage.token) {
          vm.$store.dispatch("userInfo").then(response => {
            if (response.data.errorToken == true) {
              commonService.checkErrorToken(vm, response.data.msg);
            } else {
              localStorage.token = response.data.token;
            }
          });
        }
      }, 100);
    }
  },
  updated() {
    if (this.$route.name == "my-page") {
      this.showHeader = true;
    } else this.showHeader = null;
  }
};
</script>