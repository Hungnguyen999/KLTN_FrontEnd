<template>
  <div>
    <a @click="changeLesson()" :ref="'link_'+lesson.lesson_id" class="video-item-container">
      <div class="row" :class="{'active' : lesson.lesson_id == userCurrentVideoLesson.lesson_id}">
        <div class="col-3">
          <v-icon size="60" style="width: 80%;height: 80%;margin-top: 0.4rem">mdi-play-circle</v-icon>
        </div>
        <div class="col-9" style="padding-left:0">
          <div style="margin-top: 0.7rem">
            <span class="title">
              <strong>{{summaryTitle(lesson.title)}}</strong>
            </span>
          </div>
          <div>
            <span class="duration">
              <v-icon size="20">mdi-play-circle</v-icon>
              {{lesson.duration}}
            </span>
          </div>
        </div>
      </div>
    </a>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  props: ["lesson"],
  methods: {
    summaryTitle(str) {
      if (str.length > 30) {
        return str.slice(0, 30) + "...";
      } else return str;
    },
    changeLesson() {
      this.$store.commit("user_set_current_video_link", this.lesson);
      this.$store.dispatch('userGetCommentStudentLesson', this.lesson.lesson_id)
    }
  },
  computed: {
    ...mapGetters({
      userCurrentVideoLesson: "userCurrentVideoLesson"
    })
  }
};
</script>
<style lang="scss" scoped>
.active {
  border-radius: 5px;
  background-color: #e9f9f3;
  &:hover {
    border-radius: 5px;
    background-color: #e9f9f3 !important;
  }
}
.video-item-container {
  font-family: open sans, helvetica neue, Helvetica, Arial, sans-serif;
  color: black;
  text-decoration: none;
  cursor: pointer;
  .row {
    height: 4rem;
    border-bottom: 1px solid rgb(238, 234, 234);
    &:hover {
      background-color: #ece8e8;
    }
    margin: 0;
    .col-3 {
      padding: 0;
      img {
        width: 100%;
        height: 5rem;
      }
    }
    .col-9 {
      padding: 0 1rem;
      .title {
        font-size: 14px;
      }
      .duration {
        font-size: 12px;
      }
    }
  }
}
</style>