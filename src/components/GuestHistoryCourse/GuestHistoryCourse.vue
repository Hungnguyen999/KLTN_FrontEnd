<template>
  <div class="my-conatiner">
    <!--
        <v-app style="padding-top: 1rem;height: 20rem">
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
                <Item :course="course"></Item>
              </div>
            </div>
          </div>
          <div
            v-if="guestCategoryTopCourseLoading"
            class="carousel-item"
            :class="{'active' : guestCategoryTopCourseLoading}"
          >
            <div class="my-row" style="width: 100%;">
              <div class="item" v-for="(index) in 5" :key="index">
                <v-skeleton-loader type="card"></v-skeleton-loader>
              </div>
            </div>
          </div>
        </div>
        <v-btn dark style="position: absolute;top: 7rem;left: -1.5rem" fab @click="back()">Back</v-btn>
        <v-btn dark style="position: absolute;top: 7rem;right: -1.5rem" fab @click="next()">Next</v-btn>
      </div>
    </v-app>
    -->
    count: 
    {{historyCourseList.length}}
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  created() {
    if(localStorage.historyCourseList) {
        this.historyCourseList = JSON.parse(localStorage.historyCourseList)
    }
  },
  data() {
    return {
      perSlide: 3,
      historyCourseList: []
    };
  },
  methods: {
    next() {
      $("#historyCollection").carousel("next");
    },
    back() {
      $("#historyCollection").carousel("prev");
    },
    handleTopCourseList() {
      let courseList = [];
      let indexCourseList = 0;
      courseList[indexCourseList] = {};
      courseList[indexCourseList].slide = [];
      for (let i = 0; i < this.topCourseList.length; i++) {
        if (i % this.perSlide == 0 && i != 0) {
          indexCourseList++;
          courseList[indexCourseList] = {};
          courseList[indexCourseList].slide = [];
        }
        courseList[indexCourseList].slide.push(this.topCourseList[i]);
      }
      this.courseList = courseList;
    }
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