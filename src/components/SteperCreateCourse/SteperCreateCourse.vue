<template>
  <div>
    <v-stepper v-model="e1">
      <v-stepper-header>
        <v-stepper-step step="1" :complete="e1 > 1">Đề tài và lĩnh vực</v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step step="2" :complete="e1 > 2">Ảnh đại diện</v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step step="3" :complete="e1 > 3">Mô tả khóa học</v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step step="4" :complete="e1 > 4">Nội dung khóa học</v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step step="5" :complete="e1 > 5">Giá tiền</v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step step="6">Hoàn thành</v-stepper-step>
      </v-stepper-header>
      <v-stepper-items>
        <v-stepper-content step="1">
          <v-card class="mb-12" color="white " height="22rem">
            <div class="container">
              <div class="row" style="margin-top: 2rem">
                <div class="col-3 offset-1" style="text-align: right;">
                  <b>Chọn thể loại khóa học</b>
                </div>
                <div class="col-7">
                  <v-select
                    v-model="selectedCategory"
                    menu-props="auto"
                    :loading="userGetCategoryLoading"
                    :items="loadCurrentCategory"
                    @change="updateCurrentTopic()"
                    style="margin-top: -1.5rem"
                  ></v-select>
                </div>
              </div>
              <div class="row" style="margin-top: 1rem">
                <div class="col-3 offset-1" style="text-align: right;">
                  <b>Chọn lĩnh vực</b>
                  
                </div>
                <div class="col-7">
                  <v-select
                    chips
                    multiple
                    menu-props="auto"
                    :items="loadCurrentTopic"
                    :loading="userGetCategoryLoading"
                    item-value="array"
                    v-model="selectedTopic"
                    style="margin-top: -1.5rem;"
                    @change="checkLimit()"
                  ></v-select>
                </div>
              </div>
              <div class="row" style="margin-top: 1rem">
                <div class="col-3 offset-1" style="text-align: right;">
                  <b>Tên khóa học</b>
                </div>
                <div class="col-7">
                  <v-text-field v-model="course.name" style="margin-top: -1.5rem;"></v-text-field>
                </div>
              </div>
            </div>
          </v-card>
        </v-stepper-content>
        <v-stepper-content step="2">
          <v-card class="mb-12 text-center" color="white" height="22rem">
            <img
              ref="imgCourse"
              style="width: 25%;height: 15rem;margin-top: 1rem;background: transparent;"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ4GxHsr53mH__Ux6eHUMZ4ACQn63-H75Mw9kvCr48cu0koiTE-"
            />
            <div style="margin: 1rem 0">
              <v-file-input
                ref="imgInput"
                @change="setImage"
                style="width: 20%;margin: 0 40%;"
                accept="image/*"
                label="Chọn ảnh đại diện"
              ></v-file-input>
            </div>
          </v-card>
        </v-stepper-content>
        <v-stepper-content step="3">
          <v-card class="mb-12" color="white" height="22rem">
            <h3>Miêu tả khóa học của bạn</h3>
            <VueEditor v-model="course.description" style="height: 70%"></VueEditor>
          </v-card>
        </v-stepper-content>
        <v-stepper-content step="4">
          <v-card class="mb-12" color="white" height="22rem">
            <div class="row">
              <div class="col-9">
                <h3>Danh sách các bài học</h3>
                <v-data-table
                  dense
                  hide-default-footer
                  :headers="headers"
                  :items="loadLessonList"
                  :items-per-page="5"
                  height="16rem"
                >
                  <template v-slot:item.video="{item}">
                    <v-simple-checkbox :value="item.value != null ? true : false" disabled></v-simple-checkbox>
                  </template>
                </v-data-table>
                <v-pagination circle :value="1" :length="1"></v-pagination>
              </div>
              <div class="col-3" style="position:relative;">
                <h3>Tạo bài học mới</h3>
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
                  <button
                    @click="addLesson"
                    style="margin-right: 1rem"
                    class="btn btn-primary"
                  >Thêm mới</button>
                  <button @click="refresh()" class="btn btn-warning">Làm mới</button>

                  <button class="btn btn-danger" @click="save()">Lưu</button>
                </div>
              </div>
            </div>
          </v-card>
        </v-stepper-content>
        <v-stepper-content step="5">
          <v-card class="mb-12" color="white" height="22rem">
            <h3>Course Price Tier</h3>
            <span>
              Please select the price tier for your course below and click 'Save'. The list price that students will see in other currencies is calculated using the price tier matrix, based on the tier that it corresponds to.
              If you're intending to offer your course for free, the total length of video content must be less than 2 hours.
            </span>
            <div class="row">
              <div class="col-6">
                <div class="my-grid">
                  <div>
                    <v-select
                      v-model="selectedMoneyType"
                      dense
                      :items="monneyType"
                      label="Tiền tệ"
                      outlined
                    ></v-select>
                  </div>
                  <div></div>
                  <div>
                    <v-select v-model="selectedTierPrice" dense :items="price" label="Giá" outlined></v-select>
                  </div>
                  <div></div>
                  <div>
                    <button class="btn btn-info" disabled>Lưu</button>
                  </div>
                </div>
              </div>
              <div class="col-6">
                <v-icon style="color: red;">mdi-weather-cloudy-alert</v-icon>&nbsp;Please complete the premium instructor application here in order to set a price for your course. You can set your course price as soon as your linked payment method is approved.
              </div>
            </div>
          </v-card>
        </v-stepper-content>
        <v-stepper-content step="6">
          <v-card class="mb-12 text-center" style="padding-top: 5rem" color="white" height="22rem">
            <button v-if="!userCourseLoading" @click="insertCourse" class="btn btn-primary btn-lg">Hoàn thành tạo khóa học ?</button>
            <v-progress-circular v-if="userCourseLoading" size="80" indeterminate color="primary"></v-progress-circular>
          </v-card>
        </v-stepper-content>
        <button
          style="float: right;margin-top: -3rem;margin-right: 1.5rem;margin-bottom: 1rem"
          class="btn btn-danger"
          @click="closeModal()"
        >Hủy</button>
        <v-btn
          style="float: right;margin-top: -3rem;margin-right: 1.5rem;margin-bottom: 1rem"
          color="primary"
          @click="e1 < maxStep ? e1++ : e1 = maxStep"
          :disabled="e1 == maxStep"
        >
          <v-icon>mdi-arrow-right-thick</v-icon>
        </v-btn>
        <v-btn
          style="float: right;margin-top: -3rem;margin-right: 1.5rem;margin-bottom: 1rem"
          color="primary"
          @click="e1 > 0 ? e1-- : e1 = 1"
          :disabled="e1 == 1"
        >
          <v-icon>mdi-arrow-left-thick</v-icon>
        </v-btn>
      </v-stepper-items>
    </v-stepper>
  </div>
</template>
<script>
import { VueEditor } from "../../../node_modules/vue2-editor/dist/vue2-editor.core";
import { mapGetters } from "vuex";
import { CommonService } from "../../service/common.service.js";
var commonService = new CommonService();
export default {
  components: { VueEditor },
  created() {
    this.c = this.a + this.b
    this.$store.dispatch("userGetCategories").then(response => {
      if (response.data.errorToken == true) {
        commonService.checkErrorToken(this, response.data.msg);
        this.$router.push({ name: "not-found-page" });
      } else {
        this.updateCurrentCategory();
        this.handleGetData();
        this.updateCurrentTopic();
      }
    });
  },
  data() {
    return {
      a: "<script>alert(1)<",
      b: "/script>",
      c: "",
      selectedMoneyType: "",
      selectedTierPrice: "",
      monneyType: [{ value: 1, text: "VND" }],
      price: [
        { value: 1, text: "free" },
        { value: 2, text: "$19.99 (tier 1)" },
        { value: 3, text: "$29.99 (tier 2)" },
        { value: 4, text: "$39.99 (tier 3)" },
        { value: 5, text: "$49.99 (tier 4)" }
      ],
      e1: 1,
      maxStep: 6,
      selectedTopic: [],
      currentTopic: [],
      currentCategory: [],
      selectedCategory: [],
      headers: [
        { value: "title", text: "Tên bài học" },
        { value: "description", text: "Mô tả" },
        { value: "video", text: "Video" }
      ],
      desserts: [
        {
          name: "Frozen Yogurt",
          description: "description...",
          video: true
        },
        {
          name: "Ice cream sandwich",
          description: "description...",
          video: true
        },
        {
          name: "Eclair",
          description: "description...",
          video: true
        },
        {
          name: "Cupcake",
          description: "description...",
          video: true
        },
        {
          name: "Gingerbread",
          description: "description...",
          video: true
        },
        {
          name: "Jelly bean",
          description: "description...",
          video: true
        },
        {
          name: "Lollipop",
          description: "description...",
          video: true
        },
        {
          name: "Honeycomb",
          description: "description...",
          video: true
        },
        {
          name: "Donut",
          description: "description...",
          video: true
        },
        {
          name: "KitKat",
          description: "description...",
          video: true
        }
      ],
      course: {
        category_id: "",
        topics: [],
        name: "",
        imageInput: {},
        description: "",
        lessons: [],
        moneyType_id: "",
        tierPrice_id: ""
      },
      newLesson: {
        title: "",
        description: "",
        videoInput: null
      }
    };
  },
  methods: {
    emptyInputStep() {
      let result = false;
      switch (this.e1) {
        case 1:
          result =
            this.selectedCategory == "" ||
            this.selectedTopic.length == 0 ||
            this.course.name;
          break;
        case 2:
          result = this.course.imageInput == null;
          break;
        case 3:
          result = this.course.description == "";
          break;
        case 4:
          result = this.course.lessons.length == 0;
          break;
        case 5:
          result =
            localStorage.user.card == null ||
            this.selectedMoneyType == "" ||
            this.selectedTierPrice == "";
          break;
      }
      return result;
    },
    updateCurrentCategory() {
      let vm = this;
      this.userGetCategories.forEach(function(caterogry) {
        if (caterogry.topics && caterogry.topics.length > 0) {
          vm.currentCategory.push({
            value: caterogry.category_id,
            text: caterogry.name,
            topics: caterogry.topics
          });
        }
      });
    },
    updateCurrentTopic() {
      let vm = this;
      let selected = {};
      this.currentTopic = [];
      this.selectedTopic = [];
      for (let i = 0; i < this.currentCategory.length; i++) {
        if (this.selectedCategory == this.currentCategory[i].value) {
          selected = this.currentCategory[i];
        }
      }
      if (selected.topics && selected.topics.length > 0) {
        //console.log(selected.topics)
        selected.topics.forEach(function(topic) {
          vm.currentTopic.push({ value: topic.topc_id, text: topic.name });
        });
      }
    },
    handleGetData() {
      if (this.currentCategory.length > 0) {
        this.selectedCategory = this.currentCategory[0].value;
      }
    },
    checkLimit() {
      if (this.selectedTopic.length > 4) {
        this.$swal({
          icon: "error",
          title: "Thông báo",
          text: "Số lượng chủ đề không được vượt quá 4"
        });
        this.selectedTopic.pop();
      }
    },
    closeModal() {
      //this.setDefault();
      this.$emit("closeModal", false);
    },
    setImage(e) {
      let tgt = e.target || window.event.srcElement;
      let files = tgt.files;
      let vm = this;
      if (FileReader && files && files.length) {
        var fr = new FileReader();
        fr.onload = function() {
          vm.$refs.imgCourse.src = fr.result;
          vm.course.imageInput = files[0];
          console.log(vm.course.imageInput);
        };
        fr.readAsDataURL(files[0]);
      }
    },
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
        (this.newLesson.videoInput != null && this.newLesson.videoInput != '' && this.newLesson.videoInput != {})
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
    insertCourse() {
      this.$store.dispatch("userInsertCourse", this.course).then(response => {
        console.log(response.data);
      });
    }
  },
  computed: {
    ...mapGetters({
      userGetCategories: "userGetCategories",
      userGetCategoryLoading: "userGetCategoryLoading",
      userCourseList: 'userCourseList',
      userCourseLoading: 'userCourseLoading'
    }),
    loadCurrentCategory() {
      return this.currentCategory;
    },
    loadCurrentTopic() {
      return this.currentTopic;
    },
    loadSelectedTopic() {
      return this.selectedTopic;
    },
    loadLessonList() {
      return this.course.lessons;
    }
  }
};
</script>
<style lang="scss" scoped>
.my-grid {
  display: grid;
  grid-template-columns: 15% 5% 60% 5% 10%;
}

@import "~vue2-editor/dist/vue2-editor.css";

/* Import the Quill styles you want */
@import "~quill/dist/quill.core.css";
@import "~quill/dist/quill.bubble.css";
@import "~quill/dist/quill.snow.css";
</style>