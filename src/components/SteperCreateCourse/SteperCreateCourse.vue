<template>
  <div>
    <v-stepper v-model="e1">
      <v-stepper-header>
        <v-stepper-step step="1" :complete="e1 > 1">Đề tài và lĩnh vực</v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step step="2" :complete="e1 > 1">Ảnh đại diện</v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step step="3" :complete="e1 > 2">Mô tả khóa học</v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step step="4" :complete="e1 > 3">Giá tiền</v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step step="5">Hoàn thành</v-stepper-step>
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
        <v-stepper-content step="5">
          <v-card class="mb-12 text-center" style="padding-top: 5rem" color="white" height="22rem">
            <button
              v-if="!userCourseLoading"
              @click="insertCourse"
              class="btn btn-primary btn-lg"
            >Hoàn thành tạo khóa học ?</button>
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
    this.c = this.a + this.b;
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
    this.$store.dispatch("userGetInsCourse")
  },
  data() {
    return {
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
      maxStep: 5,
      selectedTopic: [],
      currentTopic: [],
      currentCategory: [],
      selectedCategory: [],
      course: {
        category_id: "",
        topics: [],
        name: "",
        imageInput: {},
        description: ""
      }
    };
  },
  methods: {
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
    emptyCourse() {
      alert(this.selectedCategory + "/" + this.selectedTopic.length)
      if (
        this.course.name == "" ||
        this.selectedCategory == "" ||
        this.selectedTopic.length == 0 ||
        this.course.description == ""
      ) {
        return true;
      } else return false;
    },
    insertCourse() {
      let vm = this
      if (!this.emptyCourse()) {
        this.course.category_id = this.selectedCategory;
        this.course.topics = this.selectedTopic
        this.$store.dispatch("userInsertCourse", this.course).then(response => {
          let icon = "success";
          if (response.data.RequestSuccess == false) icon = "error";
          this.$swal({
            icon: icon,
            title: "Thông Báo",
            text: response.data.msg
          }).then(() => {
            vm.closeModal()
          });
        });
      } else {
        console.log(this.course)
        this.$swal({
          icon: "error",
          title: "Thông Báo",
          text: "Nhập thiếu thông tin"
        });
      }
    }
  },
  computed: {
    ...mapGetters({
      userGetCategories: "userGetCategories",
      userGetCategoryLoading: "userGetCategoryLoading",
      userCourseList: "userCourseList",
      userCourseLoading: "userCourseLoading"
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