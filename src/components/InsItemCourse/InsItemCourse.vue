<template>
  <div class="my-container">
    <router-link :to="{name: 'ins-lesson-page', query: {course_id: course.course_id}}">
      <div
        class="row"
        style="border: 1px solid #ece8e8;margin-bottom: 1rem"
        @mouseover="isHover = true"
        @mouseleave="isHover = false"
        :class="{'hoverClass' : isHover}"
      >
        <div class="col-2 needHover">
          <img
            style="width: 100%; height: 10rem"
            :style="isHover ? 'opacity: 0.4' : 'oppacity: 1'"
            :src="imageURL+'/'+course.course_id+'/'+course.course_id+'.png'"
          />
        </div>
        <div class="col-10">
          <div class="row needHover">
            <div class="col-7">
              <div>
                <b>{{course.name}}</b>
              </div>
              <br />
              <div style="position: absolute;font-size: 13px;bottom: 1rem;">
                <span v-if="course.public == false">
                  <span>
                    <b style="color: red;">Chưa công khai</b>
                  </span>
                  /
                  <span>Đã công khai</span>
                </span>
                <span v-else>
                  <span>Chưa công khai</span>
                  /
                  <span>
                    <b style="color: red;">Đã công khai</b>
                  </span>
                </span>
              </div>
            </div>
          </div>
          <h4 class="text-center my-hover-text" v-if="isHover">Chi tiết khóa học</h4>
        </div>
      </div>
    </router-link>
  </div>
</template>
<script>
import apiConfig from "../../API/api.json";
export default {
  props: ["course", "loading"],
  data() {
    return {
      isHover: false,
      imageURL: apiConfig.imageURL
    };
  }
};
</script>
<style lang="scss" scoped>
.my-container {
  opacity: 1;
  width: 100%;
  background: rgb(255, 253, 253);
  a {
    text-decoration: none;
    color: black;
  }
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
        .col-5 {
          padding: 0;
        }
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
  background-color: white;
  color: #959a9e;
}
</style>