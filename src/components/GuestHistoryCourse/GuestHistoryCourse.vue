<template>
  <div class="my-conatiner">
    <h3>Lịch sử đã xem</h3>
    <v-app style="padding-top: 1rem;height: 23rem;margin-bottom: 1rem;">
      <div id="historyCollection" class="carousel slide" data-ride="carousel" style="width: 100%;">
        <div class="carousel-inner">
          <div
            class="carousel-item"
            :class="{'active' : index == 0}"
            v-for="(temp, index) in courseList"
            :key="index"
          >
            <div class="my-row" style="width: 100%;">
              <div class="item" v-for="(course, indexc) in temp.slide" :key="indexc">
                  <Item v-on:openLoginModal="openLoginModal" :course="course"></Item>
              </div>
            </div>
          </div>
        </div>
        <v-btn style="position: absolute;top: 7rem;left: -1.5rem" fab @click="back()">
          <v-icon size="2rem">mdi-chevron-left</v-icon>
        </v-btn>
        <v-btn style="position: absolute;top: 7rem;right: -1.5rem" fab @click="next()">
          <v-icon size="2rem">mdi-chevron-right</v-icon>
        </v-btn>
      </div>
    </v-app>
    <button v-b-modal.login-modal ref="openTemp" id="openTemp"></button>
  </div>
</template>
<script>
import Item from "../Item/Item.vue"
import { mapGetters } from "vuex";
export default {
  components: {Item},
  data() {
    return {
      perSlide: 5,
      courseList: []
    };
  },
  created() {
    let vm = this
    this.$store.commit('updateHistoryCourseList')
    setTimeout(function() {
      vm.handleHistoryCourseList()
    }, 100)
  },
  methods: {
    next() {
      $("#historyCollection").carousel("next");
    },
    back() {
      $("#historyCollection").carousel("prev");
    },
    handleHistoryCourseList() {
      let courseList = [];
      let indexCourseList = 0;
      courseList[indexCourseList] = {};
      courseList[indexCourseList].slide = [];
      for (let i = 0; i < this.historyCourseList.length; i++) {
        if (i % this.perSlide == 0 && i != 0) {
          indexCourseList++;
          courseList[indexCourseList] = {};
          courseList[indexCourseList].slide = [];
        }
        courseList[indexCourseList].slide.push(this.historyCourseList[i]);
      }
      this.courseList = courseList;
    },
    openLoginModal() {
      document.getElementById('openTemp').click()
    }
  },
  computed: {
    ...mapGetters({
      historyCourseList: 'historyCourseList'
    })
  }
};
</script>
<style lang="scss" scoped>
.my-row {
  display: grid;
  height: 100%;
  grid-template-columns: 20% 20% 20% 20% 20%;
  .item {
    width: 100%;
    height: 100%;
    padding: 0.5rem;
  }
}
.my-conatiner {
  width: 90%;
  margin: 1rem 5%;
}
</style>