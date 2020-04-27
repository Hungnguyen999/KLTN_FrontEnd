<template>
  <div style="width:100%; height: 25rem;position: relative">
    {{SRC}}
    <video
      style="width: 100%; height: 100%"
      ref="videoPlayer"
      id="videoPlayer"
      :src="SRC"
      class="video-js vjs-fill"
    ></video>
  </div>
</template>

<script>
import videojs from "video.js";
import apiConfig from "../../API/api.json";
export default {
  name: "VideoPlayer",
  props: ["options", "lesson"],
  methods: {
    setVideo(lesson) {
      if (
        lesson != undefined &&
        lesson.course_id != undefined &&
        lesson.title != undefined
      ) {
        this.SRC =
          this.videoURL + "/" + lesson.course_id + "/" + lesson.title + ".mp4";
      }
    }
  },
  data() {
    return {
      player: null,
      videoURL: apiConfig.videoURL,
      SRC: ""
    };
  },
  watch: {
    options(newVal) {
      this.options = newVal;
    },
    lesson(newVal) {
      //  console.log(newVal)
      this.setVideo(newVal);
    }
  },
  mounted() {
    this.player = videojs(
      this.$refs.videoPlayer,
      this.options,
      function onPlayerReady() {
        //console.log("onPlayerReady", this);
      }
    );
    this.setVideo(this.lesson);
  },
  beforeDestroy() {
    if (this.player) {
      this.player.dispose();
    }
  }
};
</script>