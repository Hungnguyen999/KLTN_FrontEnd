<template>
  <div>
    <v-tab-item value="course-tab">
      <div style="margin-right: 2rem;">
        <div class="row" v-if="userStudentCourseLoading">
          <div class="col-3" v-for="i in 4" :key="i">
            <v-skeleton-loader type="card"></v-skeleton-loader>
          </div>
        </div>
        <div class="row" v-else>
          <div class="col-3" v-for="(course, index) in userStudentCourseList" :key="index">
            <ItemMyPage :course="course"></ItemMyPage>
          </div>
        </div>
      </div>
    </v-tab-item>
  </div>
</template>
<script>
import ItemMyPage from "../ItemMyPage/ItemMyPage";
import { mapGetters } from "vuex";
export default {
  components: { ItemMyPage },
  props: ["account"],
  watch: {
    account(newVal) {
      this.account = newVal;
    }
  },
  created() {
    this.$store.dispatch("userGetStudentCourse");
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      userStudentCourseList: "userStudentCourseList",
      userStudentCourseLoading: "userStudentCourseLoading"
    })
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