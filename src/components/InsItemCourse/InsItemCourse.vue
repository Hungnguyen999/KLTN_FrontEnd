<template>
  <div class="my-container">
    <div
      class="row"
      style="border: 1px solid #ece8e8;margin-bottom: 1rem"
      @mouseover="isHover = true"
      @mouseleave="isHover = false"
    >
      <div class="col-2">
        <img
          style="width: 100%;max-height: 10rem;height: 10rem"
          :style="isHover ? 'opacity: 0.4' : 'oppacity: 1'"
          :src="imageURL+'/'+course.course_id+'/'+course.course_id+'.png'"
        />
      </div>
      <div class="col-10">
        <div class="row">
          <div class="col-6">
            <h5>
              <router-link
                style="text-decoration: none;color: black;"
                :to="{name: 'ins-lesson-page', query: {course_id: course.course_id}}"
              >{{course.name}}</router-link>
            </h5>
          </div>
          <div class="col-6">
            <div class="row">
              <div class="col-4" style="padding-top: 0">
                <router-link :to="{name: 'ins-lesson-page', query: {course_id: course.course_id}}">
                  <b>Video</b>
                </router-link>
              </div>
              <div class="col-4" style="padding-top: 0">
                <a style="cursor:pointer" @click="itemDialog = true">
                  <b>Chi tiết</b>
                </a>
              </div>
              <div class="col-4" style="padding-top: 0">
                <v-switch
                  style="margin-top:-0.3rem;width: 5rem;float:right"
                  v-model="publicCourse"
                  label="public"
                  @change="userPublicOrUnPublicCourse"
                  :loading="userPublicCourseLoading"
                ></v-switch>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <v-dialog v-model="itemDialog" width="1300">
      <v-card>
        <v-card-title>
          <h2>{{course.name}}</h2>
        </v-card-title>
        <hr />
        <div class="row" style="margin: 1rem 2rem">
          <div class="col-9">
            <div>
              <h5>
                <strong>Kiến thức đạt được qua khóa học:</strong>
              </h5>
              <ul style="margin-top: 0.5rem" class="row">
                <li
                  class="col-6"
                  style="margin: 0.5rem 0;padding-left: 0"
                  v-for="(what,index) in course.what_you_learn"
                  :key="index"
                >{{what.learn}}</li>
              </ul>
            </div>

            <div>
              <h5>
                <strong>Thuộc các lĩnh vực:&nbsp;</strong>
                <span
                  style="font-size: 16px"
                  v-for="(topic,index) in course.topics_enable"
                  :key="index"
                >
                  <span v-if="index > 0">,&nbsp;</span>
                  <a style="cursor: pointer;">#{{topic.name}}</a>
                </span>
              </h5>
            </div>
            <div>
              <h5 style="margin: 1rem 0">
                <strong>Giá tiền:</strong>
                <span style="color:red;" v-if="course.price_tier.priceTier_id != 0">
                  {{course.price_tier.priceTier.toLocaleString("it-IT", {
                  style: "currency",
                  currency: "VND"
                  })}}
                </span>
                <span style="color:red;" v-else>&nbsp;Free</span>
              </h5>
            </div>
            <div>
              <h5 style="margin-bottom: 0.5rem">
                <strong>Trạng thái:&nbsp;</strong>
                <span v-if="course.public==1">Đang kích hoạt (public)</span>
                <span v-else>Chưa kích hoạt (unpublic)</span>
              </h5>
            </div>
          </div>
          <div class="col-3">
            <img
              style="width: 100%;height: 10rem"
              :style="isHover ? 'opacity: 0.4' : 'oppacity: 1'"
              :src="imageURL+'/'+course.course_id+'/'+course.course_id+'.png'"
            />
          </div>
        </div>
        <hr />
        <v-card-actions style="padding-right: 3rem">
          <v-spacer></v-spacer>
          <v-btn color="primary" @click="itemDialog = false">Trở về</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
import apiConfig from "../../API/api.json";
import { mapGetters } from "vuex";
import { CommonService } from "../../service/common.service.js";
var commonService = new CommonService();
export default {
  created() {
    if (this.course.public == 1) this.publicCourse = true;
    else this.publicCourse = false;
  },
  props: ["course", "loading"],
  data() {
    return {
      isHover: false,
      imageURL: apiConfig.imageURL,
      itemDialog: false,
      publicCourse: false
    };
  },
  methods: {
    selectCourse() {
      this.$emit("selectCourse", this.course);
    },
    userPublicOrUnPublicCourse() {
      this.$swal.showLoading()
      this.$store
        .dispatch("userPublicOrUnPublicCourse", this.course.course_id)
        .then(response => {
          if (response.data.errorToken === true) {
            commonService.checkErrorToken(this, response.data.msg);
          } else {
            if(response.data.RequestSuccess === true) {
              this.$swal({
                icon: 'success',
                title: response.data.msg
              })
            }
          }
        });
    }
  },
  computed: {
    ...mapGetters({
      userPublicCourseList: "userPublicCourseList",
      userPublicCourseLoading: "userPublicCourseLoading"
    })
  }
};
</script>
<style lang="scss" scoped>
.my-container {
  opacity: 1;
  width: 100%;
  background: rgb(255, 253, 253);
  .row {
    min-height: 6rem;
    .col-2 {
      padding: 0;
      img {
        width: 100%;
        height: 100%;
        min-height: 5rem;
      }
    }
    .col-11 {
      padding: 0;
      position: relative;
      .row {
        margin: 0;
        position: relative;
      }
      .my-hover-text {
        position: absolute;
        top: 40%;
        width: 100%;
        text-align: center;
        color: blue;
      }
    }
  }
}
.hoverClass {
  background-color: whitesmoke;
}
</style>