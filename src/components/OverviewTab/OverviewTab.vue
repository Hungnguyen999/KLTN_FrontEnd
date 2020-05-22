<template>
  <div>
    <div class="overview-container">
      <div class="lesson-overview-container">
        <div>
          <a
            style="font-size: 11pt;"
            class="hash-tag"
            href="#"
            v-for="(topic,index) in userStudentCourseLessonList.topics_enable"
            :key="index"
          >#{{topic.name}}</a>
        </div>
        <div style="margin-top:0.3rem">
          <h3>
            <b>{{userCurrentVideoLesson.title}}</b>
          </h3>
        </div>
        <hr />
        <h3>
          <strong>{{userStudentCourseLessonList.name}}&nbsp;</strong>
        </h3>
        <i>(Mô tả toàn khóa học)</i>
        <div
          class="description"
          v-html="userStudentCourseLessonList.description"
          :class="{'miniContent' : !descriptionMore}"
          style="margin-top: 0.5rem;font-size: 13pt;"
        ></div>

        <div style="padding: 1rem" class="text-center">
          <a
            class="more-description"
            @click="descriptionMore = true"
            v-if="!descriptionMore"
          >Xem thêm</a>
        </div>
        <hr />
      </div>
      <div>
        <div class="course-overview-container">
          <div>
            <h3>
              <b>Về toàn khóa học</b>
            </h3>
            <div class="row">
              <div class="col-3">
                <div>
                  <span>
                    Số bài giảng:
                    <b>{{userStudentCourseLessonList.lessons.length}}</b>
                  </span>
                </div>
                <div>
                  <span>
                    Tổng học viên:
                    <b>{{userStudentCourseLessonList.totalStudent}}</b>
                  </span>
                </div>
              </div>
              <div class="col-3">
                <div>
                  <span>
                    Tổng thời gian:
                    <b>{{userStudentCourseLessonList.totalTime}}</b>
                  </span>
                </div>
                <div>
                  <span>
                    Tổng lượt thích:
                    <b>{{userStudentCourseLessonList.totalLike}}</b>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <hr />
        </div>

        <div class="instructor-overview-container">
          <h3>Tóm tắt về tác giả</h3>
          <div class="row">
            <div class="col-3">Tác giả</div>
            <div class="col-9">
              <div class="row">
                <div class="col-2">
                  <img :src="avatarURL" />
                </div>
                <div class="col-9" style="padding-top: 0">
                  <router-link to="google">
                    <div>{{userStudentCourseLessonList.instructor.name}}</div>
                    <div>
                      <StarRating
                        :rating="4.3"
                        :increment="0.01"
                        :rounded-corners="true"
                        :star-points="[23,2, 14,17, 0,19, 10,34, 7,50, 23,43, 38,50, 36,34, 46,19, 31,17]"
                        :star-size="20"
                        :show-rating="false"
                        :read-only="true"
                      ></StarRating>
                    </div>
                  </router-link>
                </div>
              </div>
              <div
                class="description"
                :class="{'miniContent' : !authorMore}"
                v-html="userStudentCourseLessonList.instructor.profile"
              ></div>

              <div class="text-center" style="padding: 1rem">
                <a class="more-description" @click="authorMore = true" v-if="!authorMore">Xem thêm</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import StarRating from "../../../node_modules/vue-star-rating/src/star-rating";

import apiConfig from "../../API/api.json";
import { mapGetters } from "vuex";
export default {
  components: { StarRating },
  props: ["avatarURL"],
  data() {
    return {
      seeMore: false,
      descriptionMore: false,
      authorMore: false
    };
  },
  computed: {
    ...mapGetters({
      userStudentCourseLessonList: "userStudentCourseLessonList",
      userStudentCourseLessonLoading: "userStudentCourseLessonLoading",
      userCurrentVideoLesson: "userCurrentVideoLesson"
    })
  }
};
</script>
<style lang="scss" scoped>
.description {
  text-align: justify;
}
.more-description {
  margin: 2rem 0 !important;
  color: #007bff;
  cursor: pointer;
}
.miniContent {
  height: 10rem;
  overflow: hidden;
}
.overview-container {
  font-family: open sans, helvetica neue, Helvetica, Arial, sans-serif;
  text-align: left;
  font-size: 16px;
  width: 100%;
  color: #29303b;
  padding: 1rem;
  padding-right: 0;
  .lesson-overview-container {
    .hash-tag {
      margin-bottom: 0;
      margin-right: 1rem;
      word-break: break-all;
    }
  }
  .course-overview-container {
    margin-top: 1rem;
    .row {
      margin: 0.5rem 0;
      .col-3 {
        padding: 0;
        div {
          margin: 0.5rem 0;
        }
      }
    }
  }
  .instructor-overview-container {
    img {
      margin-top: -1rem;
      border-radius: 50%;
      width: 4rem;
      height: 4rem;
    }
  }
}
</style>