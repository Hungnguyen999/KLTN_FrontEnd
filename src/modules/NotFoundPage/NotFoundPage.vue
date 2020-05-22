<template>
  <div style="margin: 3rem">
    <div class="text-center">
      <img src="../../assets/404.png" style="width: 40%;" />
      <h4>
        <router-link :to="{name: 'home-page-guest'}">Bấm vào đây để về trang chủ</router-link>
      </h4>
    </div>
  </div>
</template>
<script>
export default {
  created() {
    this.$store.commit("HideHeaderUser");
    this.$store.commit("HideFooterUser");
    this.$store.commit("HideAutoAnswer");
  },
  data() {
    return {
      styleImage: "background-image: url('../../assets/404.jpg');"
    };
  }
};
</script>
<style lang="scss" scoped>
</style>