<template>
  <div class="my-conatiner">
    <v-tabs style="width: 92%; margin: 5%;margin-top: 1rem">
      <v-tab
        @click="changeCategory(category)"
        v-for="(category, index) in guestCategoryTopCourseList"
        :key="index"
      >{{category.name}}</v-tab>
    </v-tabs>
    <v-app class="my-container" style="margin-top: -3.5rem;height: 20rem;">
      <v-carousel hide-delimiters style="height: 20rem;width: 90%;margin: 0 5%">
        <v-carousel-item
          v-for="(temp, index) in courseList"
          :key="index"
          style="width: 100%;height:100%"
        >
          <div class="my-row" style="width: 100%;">
            <div class="item" v-for="(course, indexc) in temp.slide" :key="indexc">
              <Item :course="course"></Item>
            </div>
          </div>
        </v-carousel-item>
      </v-carousel>
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
      perSlide: 5,
      courseList: []
    };
  },
  methods: {
    changeCategory(category) {
      this.categorySelected = category;
      this.topCourseList = category.topCourseList;
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
        } else {
          courseList[indexCourseList].slide.push(this.topCourseList[i]);
        }
      }
      console.log(courseList);
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
</style>