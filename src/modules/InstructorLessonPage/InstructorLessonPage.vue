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
            :items-per-page="5"
            height="16rem"
            :loading="userLessonLoading"
          >
            <template style="width: 30rem" v-slot:item.control="data">
              <a href="#" @click="showDetail(data.item)">Chi tiết</a>
            </template>
          </v-data-table>
          <v-pagination circle :value="1" :length="1"></v-pagination>
        </v-card>
        <v-dialog v-model="dialogLessonDetail" max-width="900">
          <v-card>
            <v-card-title class="headline">{{selectedLesson.title}}</v-card-title>
            <hr>
            <div class="row" style="margin: 0">
              <div class="col-6" style="padding: 0;padding-left: 2rem">
                <label>{{selectedLesson.description}}</label>
              </div>
              <div class="col-6" style="padding: 0">
                video ne
              </div>
            </div>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="green darken-1" text @click="dialogLessonDetail = false">Disagree</v-btn>
              <v-btn color="green darken-1" text @click="dialogLessonDetail = false">Agree</v-btn>
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
          <h3 style="margin-top: 0rem"></h3>
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
            height="5rem"
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
          {{newLesson.videoInput}}
          <div style="float:right">
            <button @click="addLesson" style="margin-right: 1rem" class="btn btn-primary">Thêm mới</button>
            <button @click="refresh()" class="btn btn-warning">Làm mới</button>
          </div>
        </b-collapse>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
//import UTF8 from "../../assets/UTF8.json"
export default {
  created() {
    this.$store.dispatch("userGetInsCourse").then(() => this.handleData());
    this.$route.query.course_id != ""
      ? (this.courseSelected = this.$route.query.course_id)
      : "";
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
      dialogLessonDetail: false
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
    refresh() {
      this.newLesson = {
        title: "",
        description: ""
      };
      document.getElementById("videoInput").value = "";
    },
    addLesson() {
      if (
        this.newLesson.title != "" &&
        this.newLesson.description != "" &&
        this.newLesson.videoInput != null &&
        this.newLesson.videoInput != "" &&
        this.newLesson.videoInput != {}
      ) {
        this.course.lessons.push(this.newLesson);
        this.refresh();
      } else {
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
    },
    showDetail(lesson) {
      console.log(lesson);
      this.selectedLesson = lesson;
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