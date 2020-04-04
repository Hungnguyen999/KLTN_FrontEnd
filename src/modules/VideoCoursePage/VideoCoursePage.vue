<template>
  <div>
    <div class="row">
      <div class="col-8">
        <div class="video-container">
          <b-embed
            type="iframe"
            aspect="16by9"
            src="http://localhost:8000/uploads/videos/vinh.mp4"
            allowfullscreen
          ></b-embed>sadasd
          <vue-core-video-player
            auto
            src="http://localhost:8080/KLTN-Server/public/uploads/videos/5%20Centimeters%20Per%20Second%20Trailer%20HD.mp4"
          ></vue-core-video-player>
        </div>
        <div class="lesson-container">
          <v-tabs class="tab-bars" active-class="tab-active">
            <v-tab @click="overview = true; comment = false; announce = false">Tổng quan</v-tab>
            <v-tab @click="overview = false; comment = true; announce = false">Nhận xét</v-tab>
            <v-tab @click="overview = false; comment = false; announce = true">Thông báo</v-tab>
          </v-tabs>
          <div class="tab-content-container">
            <OverviewTab v-if="overview"></OverviewTab>
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
          <div v-for="i in fakeLength" :key="i" style="margin: 0.5rem 0">
            <VideoItem></VideoItem>
          </div>
          <div class="button-container">
            <a href="#" v-if="fakeLength!=10" @click="fakeLength = 10">Xem tất cả</a>
            <a href="#" v-if="fakeLength==10" @click="fakeLength = 5">Thu gọn</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import OverviewTab from "../../components/OverviewTab/OverviewTab";
import CommentTab from "../../components/CommentTab/CommentTab";
import AnnounceTab from "../../components/AnnouncementTab/AnnouncementTab";
import VideoItem from "../../components/VideoItem/VideoItem";

export default {
  components: { OverviewTab, CommentTab, AnnounceTab, VideoItem },
  data() {
    return {
      overview: true,
      comment: false,
      announce: false,
      fakeLength: 5
    };
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
    position: -webkit-sticky;
    top: 0; /* required */
    height: 28.5rem;
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