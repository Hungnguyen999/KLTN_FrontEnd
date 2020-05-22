<template>
  <div ref="top" class="my-container">
    <div>
      <h1>Danh sách khóa học</h1>
      <div class="row">
        <div class="col-3">
          <input
            @change="updateTempCourseList()"
            v-model="searchText"
            placeholder="Tìm kiếm tiêu đề khóa học"
            class="form-control"
          />
          <button class="btn btn-info btn-search">
            <i class="fa fa-search"></i>
          </button>
        </div>
        <div class="col-3">
          <v-select
            class="my-sort"
            @change="updateTempCourseList()"
            v-model="flagSort"
            :items="items"
            label="Sắp xếp"
          ></v-select>
        </div>
        <div class="col-3 offset-3">
          <button class="btn btn-danger btn-new" @click="dialog = true">
            <i class="far fa-play-circle fa-lg"></i>&nbsp;Tạo khóa học
          </button>
          <v-dialog v-model="dialog" persistent width="1300">
            <SteperCreateCourse
              :priceTier="handlePriceTier(userCoursePriceTierList)"
              style="margin:0"
              v-on:closeModal="closeModal"
            ></SteperCreateCourse>
          </v-dialog>
        </div>
      </div>
      <div v-if="!userCourseLoading" ref="my_courseList">
        <div v-for="(course,index) in loadCourseList" :key="index">
          <InsCourseItem :course="course" :loading="loadLoading"></InsCourseItem>
        </div>
        <div v-if="loadCourseList == null || loadCourseList.length == 0" class="text-center">
          <img
            style="width: 10rem;"
            src="https://cdn3.iconfinder.com/data/icons/folders-files/512/empty_folder-512.png"
          />
          <h1 style="margin: 0.5rem" class="text-center">Danh sách rỗng</h1>
        </div>
      </div>
      <div v-if="userCourseLoading">
        <InsCourseItemLoading></InsCourseItemLoading>
      </div>
      <div class="text-center">
        <b-pagination
          v-if="loadCourseList.length != 0"
          @change="updateTempCourseList()"
          v-model="currentPage"
          pills
          :total-rows="courseList.length"
          :per-page="perPage"
          align="right"
        ></b-pagination>
      </div>
    </div>
  </div>
</template>
<script>
import InsCourseItem from "../../components/InsItemCourse/InsItemCourse";
import InsCourseItemLoading from "../../components/InsCourseItemLoading/InsCourseItemLoading";
import SteperCreateCourse from "../../components/SteperCreateCourse/SteperCreateCourse";
import { mapGetters } from "vuex";
export default {
  components: { InsCourseItem, InsCourseItemLoading, SteperCreateCourse },
  created() {
    this.selected = this.items[0].value;
    this.$store.dispatch("userGetInsCourse").then(() => {
      this.courseList = this.userCourseList;
      this.updateTempCourseList();
    });
    this.$store.dispatch("userGetCoursePriceTier");
  },
  data() {
    return {
      tab: null,
      items: [
        { value: "1", text: "Tất cả" },
        { value: "2", text: "Có phí" },
        { value: "3", text: "Miễn phí" },
        { value: "4", text: "Đã công khai" },
        { value: "5", text: "Chưa công khai" }
      ],
      courseList: [],
      tempCourseList: [],
      currentPage: 1,
      perPage: 4,
      selected: null,
      loading: false,
      dialog: false,
      flagSort: 1,
      searchText: "",
    };
  },
  methods: {
    cleanString(input) {
      var output = "";
      for (var i = 0; i < input.length; i++) {
        if (input.charCodeAt(i) <= 127) {
          output += input.charAt(i);
        }
      }
      return output;
    },
    search(tempCourseList) {
      let temp = [];
      for (let i = 0; i < tempCourseList.length; i++) {
        if (tempCourseList[i].name.toLowerCase().includes(this.searchText)) {
          temp.push(tempCourseList[i]);
        }
      }
      return temp;
    },
    sort() {
      let tempCourseList = [];
      if (this.flagSort == 1) {
        return this.courseList;
      } else {
        for (let i = 0; i < this.courseList.length; i++) {
          if (
            this.flagSort == 2 &&
            this.courseList[i].tierPrice_id != 0 &&
            this.courseList[i].public == true
          )
            tempCourseList.push(this.courseList[i]);
          if (
            this.flagSort == 3 &&
            this.courseList[i].tierPrice_id == 0 &&
            this.courseList[i].public == true
          )
            tempCourseList.push(this.courseList[i]);
          if (this.flagSort == 4 && this.courseList[i].public == true)
            tempCourseList.push(this.courseList[i]);
          if (this.flagSort == 5 && this.courseList[i].public == false)
            tempCourseList.push(this.courseList[i]);
        }
        return tempCourseList;
      }
    },
    updateTempCourseList() {
      this.loading = true;
      this.changePage(this.search(this.sort()));
    },
    changePage(tempCourseList) {
      let vm = this;
      setTimeout(function() {
        let start = vm.perPage * (vm.currentPage - 1);
        let listLength = tempCourseList.length;
        if (start < listLength) {
          if (start + vm.perPage < listLength) {
            vm.tempCourseList = [];
            vm.tempCourseList = tempCourseList.slice(start, start + vm.perPage);
          } else vm.tempCourseList = tempCourseList.slice(start, listLength);
        }
        if (listLength == 0) {
          vm.tempCourseList = [];
        }
      }, 100);
      this.loading = false;
      this.$vuetify.goTo(this.$refs["top"], {
        duration: 1000,
        offset: 500,
        easing: "linear"
      });
    },
    closeModal(value, flag) {
      this.dialog = value;
      this.courseList = this.userCourseList;
      this.updateTempCourseList();
    },
    handlePriceTier(priceTier) {
      let temp = [];
      for (let i = 0; i < priceTier.length; i++) {
        let item = {
          value: priceTier[i].priceTier_id,
          text: priceTier[i].priceTier.toLocaleString("it-IT", {
            style: "currency",
            currency: "VND"
          })
        };
        if (item.value == 0) item.text = "Free";
        temp.push(item);
      }
      return temp;
    }
  },
  computed: {
    ...mapGetters({
      userCourseList: "userCourseList",
      userCourseLoading: "userCourseLoading",
      userCoursePriceTierList: "userCoursePriceTierList",
      userCoursePriceTierLoading: "userCoursePriceTierLoading"
    }),
    loadCourseList() {
      return this.tempCourseList;
    },
    loadLength() {
      return this.tempCourseList.length;
    },
    loadLoading() {
      return this.loading;
    }
  }
};
</script>
<style lang="scss" scoped>
.my-container {
  position: relative;
  margin: 0;
  .instructor-control {
    text-align: right;
    right: 0;
    margin: 0;
  }
  .row {
    margin-top: 3rem;
    .col-3 {
      position: relative;
      padding: 0 15px;
      input {
        height: 2.5rem;
        padding-right: 3.5rem;
      }
      .btn-search {
        position: absolute;
        top: 0;
        height: 2.5rem;
        right: -1rem;
      }
      .my-sort {
        margin: 0;
        margin-top: -0.4rem;
        width: 80%;
        margin-left: 20%;
      }
      .btn-new {
        float: right;
        opacity: 0.7;
        margin: 0;
        &:hover {
          opacity: 1;
        }
      }
    }
  }
}
button,
input {
  margin-right: 1rem;
  &:focus {
    outline: 0px !important;
    -webkit-appearance: none;
    box-shadow: none !important;
  }
}
</style>