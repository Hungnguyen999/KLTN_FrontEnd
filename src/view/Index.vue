<template>
  <div>
    <Header :show="showHeader" v-if="!lolSkin"></Header>
    <router-view></router-view>
  </div>
</template>
<script>
import Header from "./Header/Header";
import { CommonService } from "../service/common.service.js";
var commonService = new CommonService();
export default {
  components: { Header },
  data() {
    return {
      lolSkin: false,
      showHeader: null,
    }
  },
  created() {
    this.$route.name == 'skin-page' || this.$route.name =='download-skin-page' ? this.lolSkin = true : this.lolSkin = false
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