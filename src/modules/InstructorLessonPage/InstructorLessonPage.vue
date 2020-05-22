<template>
  <div>
    <h1>Danh sách bài học</h1>
    <div class="row" style="margin-top: 2rem">
      <div class="col-9">
        <v-select
          style="margin-bottom: 0"
          :items="courseList"
          label="Các khóa học của bạn"
          outlined
          v-model="courseSelected"
          @change="getLessons()"
        ></v-select>
        <v-card class="mb-12" style="margin-top: -1.3rem;" color="white" height="22rem">
          <v-data-table
            hide-default-footer
            :headers="headers"
            :items="userLessonList"
            height="25rem"
            :loading="userLessonLoading"
            :items-per-page="perPage"
            :page="currentPage"
          >
            <template v-slot:item.control="data">
              <a href="#" @click="showDetail(data.item)">Xem video</a>
            </template>
            <template v-slot:no-results>
              <img
                style="margin-top:1rem"
                src="https://tiki.vn/desktop/img/account/tiki-not-found-pgae.png"
              />

              <h4 style="margin-top: 0.5rem">Danh sách rỗng!</h4>
            </template>
            <template v-slot:no-data>
              <img
                style="margin-top:1rem"
                src="https://tiki.vn/desktop/img/account/tiki-not-found-pgae.png"
              />

              <h4 style="margin-top: 0.5rem">Danh sách rỗng!</h4>
            </template>
          </v-data-table>
          <v-pagination
            circle
            v-model="currentPage"
            :length="(Math.ceil(userLessonList.length / perPage))"
          ></v-pagination>
        </v-card>
        <v-dialog persistent ref="dialog" v-model="dialogLessonDetail" max-width="1300">
          <v-card>
            <v-card-title class="headline">{{loadSelectedLesson.title}}</v-card-title>
            <hr />
            <div class="row" style="margin: 0">
              <div class="col-6" style="padding: 0;padding-left: 2rem">
                <div class="player-container">  
                  <b-embed
                    :src="videoURL + '/'+loadSelectedLesson.course_id +'/' +loadSelectedLesson.lesson_id+'.mp4'"
                    type="iframe"
                    aspect="16by9"
                    allowfullscreen
                  ></b-embed>
                  <!-- <VideoPlayer ref="video" :lesson="loadSelectedLesson" :options="videoOptions"></VideoPlayer> -->
                </div>
              </div>
              <div class="col-6" style="padding: 0;padding-left: 2rem">
                <div class="row" style="width: 90%;">
                  <div class="col-4">
                    Lượt xem: {{loadSelectedLesson.views}}
                    <v-icon>mdi-eye</v-icon>
                  </div>
                  <div class="col-4">
                    Lượt bình luận: {{loadSelectedLesson.commentCount}}
                    <v-icon>mdi-chat</v-icon>
                  </div>
                </div>
                <v-btn
                  @click="edit = true"
                  color="yellow darken-1"
                  v-if="!edit"
                  v-b-toggle.collapse-update-lesson
                >Chỉnh sửa</v-btn>
                <v-btn
                  v-if="edit"
                  @click="edit = false"
                  id="fix-button"
                  color="yellow darken-1"
                  v-b-toggle.collapse-update-lesson
                >Hủy bỏ</v-btn>

                <b-collapse id="collapse-update-lesson" class="mt-2" style="width: 90%;">
                  <v-text-field
                    v-model="updateLesson.title"
                    style="margin-top: 1.5rem;"
                    outlined
                    dense
                    @keydown="disableSaveUpdateButton = false"
                    label="Tiêu đề bài học"
                  ></v-text-field>
                  <v-textarea
                    v-model="updateLesson.description"
                    style="margin-top: -1rem;"
                    outlined
                    @keydown="disableSaveUpdateButton = false"
                    label="Mô tả bài học"
                    height="10rem"
                  ></v-textarea>
                  <v-file-input
                    id="videoUpdateInput"
                    ref="videoUpdateInput"
                    accept="video/*"
                    @change="setVideoUpdate($event); disableSaveUpdateButton = false"
                    style="margin-top: -1.2rem;"
                    chips
                    show-size
                    label="Video bài học"
                  ></v-file-input>
                </b-collapse>
              </div>
            </div>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="blue darken-1"
                :disabled="disableSaveUpdateButton"
                text
                @click="fixLesson()"
              >Lưu</v-btn>
              <v-btn color="blue darken-1" text @click="closeVideoModal">Hủy</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </div>
      <div class="col-3">
        <b-button
          v-b-toggle.collapse-new-lesson
          variant="danger"
          style="width: 100%;height: 3.5rem"
        >
          <v-icon style="color:white">mdi-video-outline</v-icon>&nbsp; Tạo bài học mới
        </b-button>
        <b-collapse id="collapse-new-lesson" class="mt-2">
          <v-text-field
            v-model="newLesson.title"
            style="margin-top: 0.5rem;"
            outlined
            dense
            label="Tiêu đề bài học"
          ></v-text-field>
          <v-textarea
            v-model="newLesson.description"
            style="margin-top: -1rem;"
            outlined
            label="Mô tả bài học"
            height="10rem"
          ></v-textarea>
          <v-file-input
            id="videoInput"
            ref="videoInput"
            accept="video/*"
            @change="setVideo"
            style="margin-top: -1.2rem;"
            chips
            show-size
            label="Video bài học"
          ></v-file-input>
          <div style="float:right">
            <button @click="addLesson" style="margin-right: 1rem" class="btn btn-primary">Thêm mới</button>
            <button @click="refresh()" style="margin: 0" class="btn btn-primary">Làm mới</button>
          </div>
        </b-collapse>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
//import UTF8 from "../../assets/UTF8.json"
import "../../../node_modules/vue-core-video-player/dist/vue-core-video-player.umd.js";
import apiConfig from "../../API/api.json";
// import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
export default {
  //components: { VideoPlayer },
  created() {
    this.$store.dispatch("userGetInsCourse").then(() => {
      if (this.$route.course_id != "") {
        this.courseSelected = this.$route.query.course_id;
        this.getLessons();
      }
      this.handleData();
    });
  },
  data() {
    return {
      courseSelected: "",
      items: [
        { value: "1", text: "Mới nhất" },
        { value: "2", text: "Cũ nhất" },
        { value: "3", text: "A-Z" },
        { value: "4", text: "Z-A" },
        { value: "5", text: "Miễn phí" },
        { value: "6", text: "Có phí" }
      ],
      lessonList: [],
      headers: [
        { value: "title", text: "Tên bài học" },
        { value: "description", text: "Mô tả" },
        { value: "updated_at", text: "Ngày cập nhật" },
        { value: "control", text: "" }
      ],
      course: {
        lessons: []
      },
      newLesson: {
        title: "",
        description: "",
        videoInput: null
      },
      courseList: [],
      selectedLesson: {},
      dialogLessonDetail: false,
      currentPage: 1,
      perPage: 5,
      videoURL: apiConfig.videoURL,
      videoOptions: {
        autoplay: false,
        controls: true,
        sources: []
      },
      disableSaveUpdateButton: true,
      updateLesson: {},
      edit: false
    };
  },
  methods: {
    setVideo(e) {
      let tgt = e.target || window.event.srcElement;
      let files = tgt.files;
      let vm = this;
      if (FileReader && files && files.length) {
        vm.newLesson.videoInput = files[0];
      }
    },
    setVideoUpdate(e) {
      let tgt = e.target || window.event.srcElement;
      let files = tgt.files;
      let vm = this;
      if (FileReader && files && files.length) {
        vm.updateLesson.videoInput = files[0];
      }
      console.log(vm.updateLesson.videoInput);
    },
    refresh() {
      this.newLesson = {
        title: "",
        description: ""
      };
      //document.getElementById("videoInput").value = "";
      console.log(this.$refs.videoInput);
    },
    closeVideoModal() {
      this.dialogLessonDetail = false;
      //this.$refs.video.pause();
      this.selectedLesson = {};
    },
    addLesson() {
      if (
        this.newLesson.title != "" &&
        this.newLesson.description != "" &&
        this.newLesson.videoInput != null &&
        this.newLesson.videoInput != "" &&
        this.newLesson.videoInput != {}
      ) {
        this.newLesson.course_id = this.courseSelected;
        this.$swal.showLoading();
        let vm = this;
        this.$store
          .dispatch("userInsertLesson", this.newLesson)
          .then(response => {
            this.handleData();
            let icon = "";
            response.data.RequestSuccess === true
              ? (icon = "success")
              : (icon = "error");
            this.$swal({
              icon: icon,
              title: "Thông Báo",
              text: response.data.msg
            });
          });
        this.refresh();
      } else {
        this.$swal({
          icon: "error",
          title: "Thông Báo",
          text: "Nhập thiếu thông tin"
        });
      }
    },
    fixLesson() {
      if (
        this.updateLesson.title != "" &&
        this.updateLesson.description != "" &&
        this.updateLesson.videoInput != null &&
        this.updateLesson.videoInput != "" &&
        this.updateLesson.videoInput != {}
      ) {
        this.updateLesson.course_id = this.courseSelected;
        this.$swal.showLoading();
        let vm = this;
        this.$store
          .dispatch("userUpdateLesson", this.updateLesson)
          .then(response => {
            this.handleData();
            let icon = "";
            response.data.RequestSuccess === true
              ? (icon = "success")
              : (icon = "error");
            this.$swal({
              icon: icon,
              title: "Thông Báo",
              text: response.data.msg
            }).then(() => {
              if (response.data.RequestSuccess === true) {
                vm.dialogLessonDetail = false;
                document.getElementById("fix-button").click();
              }
            });
          });
        this.refresh();
      } else {
        console.log(this.updateLesson);
        this.$swal({
          icon: "error",
          title: "Thông Báo",
          text: "Nhập thiếu thông tin"
        });
      }
    },
    handleData() {
      for (let i = 0; i < this.userCourseList.length; i++) {
        this.courseList.push({
          value: this.userCourseList[i].course_id,
          text: this.userCourseList[i].name
        });
      }
    },
    getLessons() {
      this.$store.dispatch("userGetInsLesson", this.courseSelected);
      this.currentPage = 1;
    },
    showDetail(lesson) {
      this.selectedLesson = lesson;
      this.updateLesson = {
        lesson_id: lesson.lesson_id,
        title: lesson.title,
        description: lesson.description
      };
      this.videoOptions.sources = [
        {
          src:
            this.videoURL +
            "/" +
            lesson.course_id +
            "/" +
            lesson.title +
            ".mp4",
          type: "video/mp4"
        }
      ];
      this.dialogLessonDetail = true;
    }
  },
  computed: {
    ...mapGetters({
      userCourseList: "userCourseList",
      userCourseLoading: "userCourseLoading",
      userLessonList: "userLessonList",
      userLessonLoading: "userLessonLoading"
    }),
    loadLessonList() {
      return this.course.lessons;
    },
    loadSelectedLesson() {
      return this.selectedLesson;
    }
  }
};
</script>
<style lang="scss" scoped>
button,
input {
  margin-right: 1rem;
  &:focus {
    outline: 0px !important;
    -webkit-appearance: none;
    box-shadow: none !important;
  }
}
.btn-search {
  position: absolute;
  top: 0.75rem;
  height: 2.5rem;
  right: 0rem;
}
.input-search {
  height: 2.5rem;
  padding-right: 3.5rem;
}
.my-select {
  margin: 0;
  margin-top: -0.4rem;
  width: 80%;
}
</style>