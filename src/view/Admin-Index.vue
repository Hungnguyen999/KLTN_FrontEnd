<template>
  <div>
    <Header v-if="!loadHide"></Header>
    <router-view></router-view>
    <Footer v-if="!loadHide"></Footer>
  </div>
</template>
<script>
import Header from "./Admin-Header/Header";
import Footer from "./Admin-Footer/Footer";
import { mapGetters } from "vuex";
export default {
  components: { Header, Footer },
  data() {
    return {
      isAdminPage: false
    };
  },
  computed: {
    ...mapGetters({
      loadHide: "loadHide"
    }),
    loadFlag() {
      return this.isAdminPage;
    }
  }
};
</script>