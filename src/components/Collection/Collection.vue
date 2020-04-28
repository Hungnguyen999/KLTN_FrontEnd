<template>
  <div class="my-conatiner">
    <v-tabs style="width: 100%;">
      <v-tab
        @click="changeCategory(category)"
        v-for="(category, index) in guestCategoryTopCourseList"
        :key="index"
      >{{category.name}}</v-tab>
    </v-tabs>

    <v-app style="padding-top: 1rem;height: 20rem">
      <div id="itemCollection" class="carousel slide" data-ride="carousel" style="width: 100%;">
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
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import Item from "../Item/Item";
export default {
  components: { Item },
  created() {
    this.$store.dispatch("guestGetCategoryWithTopCourse").then(() => {
      this.topCourseList = this.guestCategoryTopCourseList[0].topCourseList;
      this.handleTopCourseList();
    });
  },
  data() {
    return {
      categorySelected: {},
      topCourseList: [],
      perSlide: 3,
      courseList: []
    };
  },
  methods: {
    next() {
      $("#itemCollection").carousel("next");
    },
    back() {
      $("#itemCollection").carousel("prev");
    },
    changeCategory(category) {
      this.categorySelected = category;
      this.topCourseList = category.topCourseList;
      //console.log(category.topCourseList);
      this.handleTopCourseList();
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
      //console.log(courseList);
      this.courseList = courseList;
    }
  },
  computed: {
    ...mapGetters({
      guestCategoryTopCourseList: "guestCategoryTopCourseList",
      guestCategoryTopCourseLoading: "guestCategoryTopCourseLoading"
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