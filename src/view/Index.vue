<template>
  <div>
    <Header></Header>
    <router-view></router-view>
  </div>
</template>
<script>
import Header from "./Header/Header";
import { CommonService } from "../service/common.service.js";
var commonService = new CommonService();
export default {
  components: { Header },
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
  }
};
</script>