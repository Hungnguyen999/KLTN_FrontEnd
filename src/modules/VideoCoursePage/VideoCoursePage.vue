<template>
  <div>
    <div v-if="!userStudentCourseLessonLoading" class="row">
      <div class="col-8">
        <div class="video-container">
          <b-embed
            :src="videoURL + '/'+userStudentCourseLessonList.course_id +'/' +userCurrentVideoLesson.lesson_id+'.mp4'"
            type="iframe"
            aspect="16by9"
            allowfullscreen
          ></b-embed>
        </div>
        <div class="lesson-container">
          <v-tabs class="tab-bars" active-class="tab-active">
            <v-tab @click="overview = true; comment = false; announce = false">Tổng quan</v-tab>
            <v-tab @click="overview = false; comment = true; announce = false">Nhận xét</v-tab>
            <v-tab @click="overview = false; comment = false; announce = true">Thông báo</v-tab>
          </v-tabs>
          <div class="tab-content-container">
            <OverviewTab :avatarURL="avatarURL" v-if="overview"></OverviewTab>
            <CommentTab v-if="comment"></CommentTab>
            <AnnounceTab v-if="announce"></AnnounceTab>
          </div>
        </div>
      </div>
      <div class="col-4">
        <div class="video-list-container">
          <div>
            <span style="font-size: 18px">
              <b>Nội dung khóa học:</b>
            </span>
          </div>
          <div
            v-for="(lesson, i) in userStudentCourseLessonList.lessons"
            :key="i"
            style="margin: 0.5rem 0"
          >
            <VideoItem :lesson="lesson"></VideoItem>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="text-center">
      <v-progress-circular indeterminate size="100" style="margin: 10rem"></v-progress-circular>
    </div>
  </div>
</template>
<script>
import OverviewTab from "../../components/OverviewTab/OverviewTab";
import CommentTab from "../../components/CommentTab/CommentTab";
import AnnounceTab from "../../components/AnnouncementTab/AnnouncementTab";
import VideoItem from "../../components/VideoItem/VideoItem";
import apiConfig from "../../API/api.json";
import { mapGetters } from "vuex";
export default {
  components: { OverviewTab, CommentTab, AnnounceTab, VideoItem },
  created() {
    this.$store.commit("ShowHeaderUser");
    this.$store.commit("ShowFooterUser");
    this.$store
      .dispatch("userGetStudentLesson", this.$route.params.id)
      .then(response => {
        if (response.data.RequestSuccess === false) {
          this.$router.push({ name: "not-found-page" });
        } else {
          this.$store.commit(
            "user_set_current_video_link",
            this.userStudentCourseLessonList.lessons[0]
          );
            this.$store.dispatch('userGetCommentStudentLesson', this.userStudentCourseLessonList.lessons[0].lesson_id)
          if (this.userStudentCourseLessonList.instructor.social_id != 0) {
            this.avatarURL = this.userStudentCourseLessonList.instructor.avatar;
          } else {
            let user_id = this.userStudentCourseLessonList.instructor.user_id;
            this.avatarURL =
              apiConfig.avatarURL + "/" + user_id + "/avatar.png";
          }
        }
      });
  },
  data() {
    return {
      overview: true,
      comment: false,
      announce: false,
      fakeLength: 5,
      avatarURL: "",
      videoURL: apiConfig.videoURL
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
.video-container {
  padding: 0 0rem 0rem 2rem;
}
.lesson-container {
  background-color: white;
  margin: 0rem 0rem 1rem 2rem;
  .tab-bars {
    color: black;
    border-bottom: 1px solid silver;
  }
}
div {
  .video-list-container {
    overflow-y: scroll;
    position: sticky;
    top: 0; /* required */
    height: 30rem; //28.5rem;
    border: 1px solid #ece8e8;
    margin: 0;
    margin-right: 1rem;
    padding: 1rem;
    border-radius: 5px;
    .button-container {
      width: 100%;
      text-align: center;
      button {
        margin: 0.5rem 0 0 0;
      }
      button:focus {
        outline: 0px !important;
        -webkit-appearance: none;
        box-shadow: none !important;
      }
    }
  }
}
</style>