<template>
  <div>
    <button
      class="btn btn-primary btn-sm"
      @click="dialog = true"
    >Nhóm tin nhắn mới</button>
    <v-dialog v-model="dialog">assd</v-dialog>
  </div>
</template>
<script>
export default {
    data() {
        return {
            dialog: false
        }
    }
};
</script>
<style scoped>
</style>