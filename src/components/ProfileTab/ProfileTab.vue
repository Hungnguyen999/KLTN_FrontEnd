<template>
  <div>
    <v-tab-item value="profile-tab">
      <button class="btn btn-danger">Lưu</button>
      <div class="row" style="margin-right: 1rem">
        <div class="col-6">
          <div v-html="editAccount.profile" class="profile-container"></div>
        </div>
        <div class="col-6">
          <VueEditor :editorOptions="editorSettings" v-model="editAccount.profile" style="height: 29rem;width: 100%"></VueEditor>
        </div>
      </div>
    </v-tab-item>
  </div>
</template>
<script>
import { VueEditor } from "vue2-editor";
export default {
  components: { VueEditor },
  props: ["account"],
  watch: {
    account(newVal) {
      this.editAccount = newVal;
    }
  },
  data() {
    return {
      editAccount: {},
      editorSettings: {
        modules: {
          imageDrop: true,
          imageResize: {}
        }
      }
    };
  }
};
</script>
<style lang="scss" scoped>
@import "~vue2-editor/dist/vue2-editor.css";
@import "~quill/dist/quill.core.css";
@import "~quill/dist/quill.bubble.css";
@import "~quill/dist/quill.snow.css";
.profile-container {
  width: 100%;
  padding: 1rem;
  border: 1px solid;
  word-break: break-all;
}
</style>