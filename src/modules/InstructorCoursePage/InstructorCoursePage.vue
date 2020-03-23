<template>
  <div ref="top" class="my-container">
    <div>
      <h1>Danh sách khóa học</h1>
      <div class="row">
        <div class="col-3">
          <input placeholder="Tìm kiếm tiêu đề khóa học" class="form-control" />
          <button class="btn btn-info btn-search">
            <i class="fa fa-search"></i>
          </button>
        </div>
        <div class="col-3">
          <v-select class="my-sort" v-model="selected" :items="items" label="Sắp xếp"></v-select>
        </div>
        <div class="col-3 offset-3">
          <button class="btn btn-danger btn-new" @click="dialog = true">
            <i class="far fa-play-circle fa-lg"></i>&nbsp;Tạo khóa học
          </button>
          <v-dialog v-model="dialog" persistent width="900" s>
            
                  <SteperCreateCourse style="margin:0" v-on:closeModal="closeModal"></SteperCreateCourse>
          </v-dialog>
        </div>
      </div>
      <div ref="my_courseList">
        <div v-for="(course,index) in loadCourseList" :key="index">
          <InsCourseItem :course="course" :loading="loadLoading"></InsCourseItem>
        </div>
      </div>
      <InsCourseItemLoading></InsCourseItemLoading>
      <div class="text-center">
        <b-pagination
          @change="updateTempCourseList"
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
export default {
  components: { InsCourseItem, InsCourseItemLoading, SteperCreateCourse },
  created() {
    this.selected = this.items[0].value;
  },
  mounted() {
    this.updateTempCourseList();
  },
  data() {
    return {
      tab: null,
      items: [
        { value: "1", text: "Mới nhất" },
        { value: "2", text: "Cũ nhất" },
        { value: "3", text: "A-Z" },
        { value: "4", text: "Z-A" },
        { value: "5", text: "Miễn phí" },
        { value: "6", text: "Có phí" }
      ],
      courseList: [
        {
          id: "1",
          name: "Khóa học lập trình php từ cơ bản đến nâng cao",
          public: false
        },
        {
          id: "2",
          name: "Khóa học lập trình laravel từ cơ bản đến nâng cao",
          public: false
        },
        {
          id: "3",
          name: "Khóa học lập trình nodejs từ cơ bản đến nâng cao",
          public: false
        },
        {
          id: "4",
          name: "Khóa học lập trình vuejs từ cơ bản đến nâng cao",
          public: false
        },
        {
          id: "5",
          name: "Khóa học lập trình reactjs từ cơ bản đến nâng cao",
          public: false
        },
        {
          id: "6",
          name: "Khóa học lập trình java web từ cơ bản đến nâng cao",
          public: false
        },
        {
          id: "1",
          name: "Khóa học lập trình php từ cơ bản đến nâng cao",
          public: false
        },
        {
          id: "2",
          name: "Khóa học lập trình laravel từ cơ bản đến nâng cao",
          public: false
        },
        {
          id: "3",
          name: "Khóa học lập trình nodejs từ cơ bản đến nâng cao",
          public: false
        },
        {
          id: "4",
          name: "Khóa học lập trình vuejs từ cơ bản đến nâng cao",
          public: false
        },
        {
          id: "5",
          name: "Khóa học lập trình reactjs từ cơ bản đến nâng cao",
          public: false
        },
        {
          id: "6",
          name: "Khóa học lập trình java web từ cơ bản đến nâng cao",
          public: false
        },
        {
          id: "1",
          name: "Khóa học lập trình php từ cơ bản đến nâng cao",
          public: false
        },
        {
          id: "2",
          name: "Khóa học lập trình laravel từ cơ bản đến nâng cao",
          public: false
        },
        {
          id: "3",
          name: "Khóa học lập trình nodejs từ cơ bản đến nâng cao",
          public: false
        },
        {
          id: "4",
          name: "Khóa học lập trình vuejs từ cơ bản đến nâng cao",
          public: false
        },
        {
          id: "5",
          name: "Khóa học lập trình reactjs từ cơ bản đến nâng cao",
          public: false
        },
        {
          id: "6",
          name: "Khóa học lập trình java web từ cơ bản đến nâng cao",
          public: false
        }
      ],
      tempCourseList: [],
      currentPage: 1,
      perPage: 4,
      selected: null,
      loading: false,
      dialog: false
    };
  },
  methods: {
    updateTempCourseList() {
      let vm = this;
      this.loading = true;
      setTimeout(function() {
        let start = vm.perPage * (vm.currentPage - 1);
        let listLength = vm.courseList.length;
        if (start < listLength) {
          if (start + vm.perPage < listLength) {
            vm.tempCourseList = [];
            vm.tempCourseList = vm.courseList.slice(start, start + vm.perPage);
          } else vm.tempCourseList = vm.courseList.slice(start, listLength);
        }
      }, 100);
      this.loading = false;
      this.$vuetify.goTo(this.$refs["top"], {
        duration: 1000,
        offset: 500,
        easing: "linear"
      });
    },
    closeModal(value) {
      this.dialog = value
    }
  },
  computed: {
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