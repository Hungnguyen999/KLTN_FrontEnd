<template>
  <div style="position: relative;">
    <Header :show="showHeader"></Header>
    <router-view></router-view>
    <AutoAnswer></AutoAnswer>
    <Footer v-if="false"></Footer>
  </div>
</template>
<script>
import Header from "./Header/Header";
import Footer from "./Footer/Footer"
import AutoAnswer from "../components/AutoAnswer/AutoAnswer"
import { CommonService } from "../service/common.service.js";
var commonService = new CommonService();
export default {
  components: { Header, AutoAnswer, Footer },
  data() {
    return {
      showHeader: null,
    }
  },
  created() {
    if (localStorage.token) {
      this.$store.dispatch("userInfo").then(response => {
        if (response.data.errorToken == true) {
          commonService.checkErrorToken(this, response.data.msg);
        } else {
          localStorage.token = response.data.token;
        }
      });
    }
  },
  updated() {
    if(this.$route.name == 'my-page') {
      this.showHeader = true
    } else this.showHeader = null
  }
};
</script>