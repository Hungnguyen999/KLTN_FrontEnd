<template>
  <div>
    <v-tab-item value="profile-tab">
      <button class="btn btn-danger">Lưu</button>
      <div style="margin-right: 2rem;">
        <div style="max-width: 100%;" v-html="account.profile" class="profile-container"></div>

        <VueEditor v-model="account.profile" style="height: 29rem;width: 100%"></VueEditor>
      </div>
    </v-tab-item>
  </div>
</template>
<script>
export default {
  mounted() {
    let vm = this;
  },
  props: ["account"],
  watch: {
    account(newVal) {
      this.account = newVal;
    }
  },
  data() {
    return {
      editor: null
    };
  }
};
</script>
<style lang="scss" scoped>
.profile-container {
  width: 100%;
  padding: 1rem;
  border: 1px solid;
  word-break: break-all;
}
</style>