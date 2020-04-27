<template>
  <div>
    <v-app>
      <div class="row">
        <div class="col-9">
          <v-card>
            <v-card-title>
              Danh sách lĩnh vực khóa học
              <v-spacer></v-spacer>
              <v-text-field
                style="width: 34%;"
                v-model="search"
                append-icon="mdi-magnify"
                label="Search"
                single-line
                hide-details
              ></v-text-field>
              <div style="position: relative;width:100%;padding-top: 1rem">
                <v-select
                  style="float: right;width: 25%;cursor: pointer"
                  :items="activeList"
                  label="Trạng thái"
                  outlined
                  dense
                  @change="updateTempList()"
                  v-model="disableTopicList"
                ></v-select>

                <v-select
                  style="float: right;width: 25%;cursor: pointer;margin-right: 1.2rem;"
                  :items="categoryHandleList"
                  label="Thuộc thể loại"
                  outlined
                  dense
                  @change="updateTempList()"
                  v-model="categoryIDSeleted"
                ></v-select>
              </div>
            </v-card-title>
            <v-data-table
              ref="my-table"
              hide-default-footer
              height="33rem"
              @page-count="pageCount = $event"
              :headers="fields"
              :items="tempList"
              :page.sync="currentPage"
              :items-per-page="perPage"
              :search="search"
              :loading="adminGetTopicLoading"
              loading-text="Đang tải ..."
            >
              <template v-slot:item.topic_id="{item}">
                <div style="width: 5rem;">{{item.topic_id}}</div>
              </template>
              <template v-slot:item.name="{item}">
                <div
                  style="width: 12rem;"
                  v-if="topicIDSelected == '' || (loadTopicsIDSelected != item.topic_id)"
                >{{item.name}}</div>
                <div v-else style="width: 12rem;">
                  <input class="form-control" v-model="selectedTopic.name" />
                </div>
              </template>
              <template v-slot:item.icon_class="{ item }">
                <i v-if="!item.icon_class.includes('mdi')" class="fa-lg" :class="item.icon_class"></i>
                <v-icon v-else>{{item.icon_class}}</v-icon>&nbsp;
                <a
                  class="btn btn-sm"
                  @click="dialogIcon = true"
                  v-if="!(topicIDSelected == '' || (loadTopicsIDSelected != item.topic_id))"
                  href="#"
                >chọn icon</a>
              </template>
              <template v-slot:item.update="{item}">
                <div style="float: right;">
                  <div v-if="topicIDSelected == '' || (loadTopicsIDSelected != item.topic_id)">
                    <v-icon
                      title="chỉnh sửa"
                      style="margin-right: 0.5rem"
                      @click="selectTopic(item)"
                    >mdi-pencil</v-icon>
                    <v-icon
                      title="xóa"
                      v-if="!item.disable"
                      style="margin-right: 0.5rem"
                      @click="disableOrEnableTopic(item)"
                    >mdi-delete</v-icon>
                    <v-icon
                      v-if="item.disable"
                      title="khôi phục"
                      style="margin-right: 0.5rem"
                      @click="disableOrEnableTopic(item)"
                    >mdi-cog-counterclockwise</v-icon>
                    <router-link :to="{name: 'topic-page', query: {topic_id: item.topic_id}}">
                      <v-icon>mdi-eye</v-icon>
                    </router-link>
                  </div>
                  <div v-else>
                    <v-icon
                      title="lưu"
                      style="margin-right: 0.5rem"
                      @click="confirmUpdate()"
                    >mdi-content-save</v-icon>
                    <v-icon
                      title="hủy"
                      style="margin-right: 0.5rem"
                      @click="cancel()"
                    >mdi-close-circle</v-icon>
                  </div>
                </div>
              </template>
              <template v-slot:no-results>
                <Empty></Empty>
              </template>
              <template v-slot:no-data>
                <Empty></Empty>
              </template>
            </v-data-table>
            <div>
              <v-pagination
                circle
                @input="ScrollToTable()"
                v-model="currentPage"
                :length="pageCount"
              ></v-pagination>
            </div>
          </v-card>
        </div>
        <div class="col-3">
          <div>
            <button
              data-toggle="collapse"
              :class="dialogCreateForm ? '' : 'collapsed'"
              aria-controls="create-form"
              style="width: 100%;"
              class="btn btn-primary"
              @click="openForm"
            >
              <i class="fa fa-plus"></i>&nbsp;Thêm
            </button>
            <b-collapse v-model="dialogCreateForm" id="create-form" class="mt-2">
              <b-card>
                <label>
                  Tên lĩnh vực:
                  <input v-model="newTopic.name" class="form-control" />
                </label>
                <label style="margin-top: -1rem">
                  Icon đại diện:
                  <i class="fa-2x" :class="newTopic.icon_class"></i>
                  <button
                    @click="dialogIcon = true"
                    style="width: 100%;"
                    class="btn btn-sm btn-primary"
                  >Chọn icon</button>
                </label>
                <v-select
                  :items="categoryHandleList"
                  label="Thuộc thể loại"
                  outlined
                  dense
                  v-model="newTopic.category_id"
                ></v-select>
                <button style="width: 100%;" @click="insertTopic()" class="btn-sm btn btn-danger">
                  <i class="fas fa-save"></i> &nbsp;Lưu
                </button>
                <v-dialog v-model="dialogIcon" max-width="700">
                  <v-card style="padding: 1rem 1rem 1rem 2rem">
                    <v-card-title class="headline">Chọn Icon đại diện</v-card-title>
                    <div class="row">
                      <div class="col-1" v-for="(icon,index) in iconList" :key="index">
                        <i style="cursor: pointer" :class="icon" @click="setIconSeleted(icon)"></i>
                      </div>
                    </div>
                  </v-card>
                </v-dialog>
              </b-card>
            </b-collapse>
          </div>
          <div
            class="rank-course-container"
            style="margin-top: 1rem;border: 1px solid; border-radius: 5px;padding: 1rem"
          >
            <h5 class="text-center">Danh sách TOP khóa học</h5>
            <div class="row">
              <div class="col-3" style="padding: 12px 0.5rem;">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQHzwE6c2v0Yza89qu9v9u7djoVjiRF51u202biT1ow_SpM_wiU"
                  alt="image"
                  style="width: 100%;height: 100%;border-radius: 50%;"
                />
              </div>
              <div class="col-9" style="padding-left: 0;padding-right: 18px;font-size: 14px">
                <div>Khóa học lập trình php căn bản đến nâng cao</div>
                <div>
                  <span style="margin-right: 1rem">
                    <i class="fa fa-heart"></i> 100
                  </span>
                  <span style="margin-right: 1rem">
                    <i class="fa fa-heart"></i> 100
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </v-app>
  </div>
</template>
<script>
import iconList from "../../assets/iconList.json";
import Empty from "../../components/EmptyComponent/EmptyComponent";
import { mapGetters } from "vuex";
export default {
  components: { Empty },
  created() {
    this.$store.dispatch("adminGetTopics").then(() => {
      this.updateTempList();
    });
    this.loadCategoryList();
    this.pageCount = Math.ceil(this.adminGetTopics.length / this.perPage);
  },
  data() {
    return {
      dialogIcon: false,
      disableTopicList: false,
      activeList: [
        { value: false, text: "Đang hoạt động" },
        { value: true, text: "Đã xóa" }
      ],
      dialogCreateForm: false,
      iconList: iconList.icons,
      topicIDSelected: "",
      pageCount: 1,
      search: "",
      currentPage: 1,
      perPage: 10,
      fields: [
        { value: "topic_id", text: "Mã lĩnh vực", sortable: true },
        { value: "name", text: "Tên thẻ loại" },
        { value: "icon_class", text: "Icon", sortable: true },
        { value: "update", text: "" }
      ],
      newTopic: {
        name: "",
        icon_class: "",
        category_id: ""
      },
      selectedTopic: {},
      tempList: [],
      categoryIDSeleted: {},
      categoryHandleList: []
    };
  },
  methods: {
    confirmUpdate() {
      let vm = this;
      if (
        this.selectedTopic.name == "" ||
        this.selectedTopic.icon_class == ""
      ) {
        this.$swal({
          icon: "error",
          title: "Thông Báo",
          text: "Nhập thiếu thông tin!"
        });
      } else {
        this.$swal.queue([
          {
            icon: "question",
            title: "Thông Báo",
            text: "Bạn muốn lưu chỉnh sửa?",
            showCancelButton: true,
            showLoaderOnConfirm: true,
            preConfirm: () => {
              return vm.$store
                .dispatch("adminUpdateTopic", vm.selectedTopic)
                .then(response => {
                  let icon = "success";
                  if (response.data.RequestSuccess == false) {
                    icon = "error";
                  }
                  if (response.data.RequestSuccess == true) {
                    vm.cancel();
                  }
                  vm.$swal.insertQueueStep({
                    icon: icon,
                    title: "Thông báo",
                    text: response.data.msg
                  });
                  this.updateTempList();
                });
            }
          }
        ]);
      }
    },
    setIconSeleted(iconClass) {
      if (this.topicIDSelected != "") {
        this.selectedTopic.icon_class = iconClass;
      } else {
        this.newTopic.icon_class = iconClass;
      }
      this.dialogIcon = false;
    },
    openForm() {
      let vm = this;
      let check =
        Object.keys(this.selectedTopic).length === 0 &&
        this.selectedTopic.constructor === Object;
      if (!check) {
        this.confirmUpdate();
        //this.dialogCreateForm = !this.dialogCreateForm;
      } else {
        vm.dialogCreateForm = !vm.dialogCreateForm;
      }
    },
    insertTopic() {
      let vm = this;
      if (this.newTopic.name == "" || this.newTopic.icon_class == "") {
        this.$swal({
          icon: "error",
          title: "Thông Báo",
          text: "Nhập thiếu thông tin!"
        });
      } else {
        this.$swal.queue([
          {
            icon: "question",
            title: "Thông Báo",
            text: "Bạn muốn thêm lĩnh vực?",
            showCancelButton: true,
            showLoaderOnConfirm: true,
            preConfirm: () => {
              return vm.$store
                .dispatch("adminInsertTopic", vm.newTopic)
                .then(response => {
                  let icon = "success";
                  if (response.data.RequestSuccess == false) {
                    icon = "error";
                  }
                  if (response.data.RequestSuccess == true) {
                    vm.cancel();
                    vm.newTopic = {};
                  }
                  vm.$swal.insertQueueStep({
                    icon: icon,
                    title: "Thông báo",
                    text: response.data.msg
                  });
                  this.updateTempList();
                });
            }
          }
        ]);
      }
    },
    disableOrEnableTopic(item) {
      let text = "xóa";
      let vm = this;
      if (item.disable == true) {
        text = "khôi phục";
      }
      this.$swal.queue([
        {
          icon: "question",
          title: "Thông Báo",
          text: "Bạn chắc chắn muốn " + text + " lĩnh vực này?",
          showCancelButton: true,
          showLoaderOnConfirm: true,
          preConfirm: () => {
            return vm.$store
              .dispatch("adminDisableOrEnableTopic", item)
              .then(response => {
                let icon = "success";
                if (response.data.RequestSuccess == false) {
                  icon = "error";
                }
                vm.$swal.insertQueueStep({
                  icon: icon,
                  title: "Thông báo",
                  text: response.data.msg
                });
                vm.updateTempList();
              });
          }
        }
      ]);
    },
    ScrollToTable() {
      this.$vuetify.goTo(this.$refs["my-table"], {
        duration: 1500,
        offset: 1000,
        easing: "easeInOutQuint"
      });
    },
    selectTopic(seleted) {
      this.topicIDSelected = seleted.topic_id;
      this.selectedTopic = seleted;
    },
    cancel() {
      this.topicIDSelected = "";
      this.selectedTopic = {};
    },
    updateTempList() {
      this.cancel();
      this.tempList = [];
      this.$store.commit("admin_getTopic_request");
      for (let i = 0; i < this.adminGetTopics.length; i++) {
        if (
          this.adminGetTopics[i].disable == this.disableTopicList &&
          this.categoryIDSeleted == this.adminGetTopics[i].category_id
        )
          this.tempList.push(this.adminGetTopics[i]);
      }
      setTimeout(() => {
        this.$store.commit("admin_getTopic_success", {});
      }, 300);
    },
    loadCategoryList() {
      this.$store.dispatch("adminGetCategories").then(() => {
        let myFlag = false;
        for (let i = 0; i < this.adminGetCategories.length; i++) {
          this.$route.query.category_id ===
          this.adminGetCategories[i].category_id
            ? (myFlag = true)
            : "";
          if (this.adminGetCategories[i].disable == false) {
            this.categoryHandleList.push({
              value: this.adminGetCategories[i].category_id,
              text: this.adminGetCategories[i].name
            });
          }
        }
        myFlag === true
          ? (this.categoryIDSeleted = this.$route.query.category_id)
          : (this.categoryIDSeleted = this.categoryHandleList[0].value);
        this.updateTempList();
      });
    }
  },
  computed: {
    ...mapGetters({
      adminGetTopicLoading: "adminGetTopicLoading",
      adminGetTopics: "adminGetTopics",
      adminGetTopicObject: "adminGetTopicObject",
      adminGetCategories: "adminGetCategories"
    }),
    loadTopicsIDSelected() {
      return this.topicIDSelected;
    }
  }
};
</script>
<style lang="scss" scoped>
.rank-course-container {
  .row {
    cursor: pointer;
    transition: transform 1s;
    &:hover {
      font-weight: 500;
      color: #52143e;
      transform: translate(10px, 0);
    }
  }
}
#create-form {
  label {
    width: 100%;
    margin-bottom: 1rem;
  }
}
button:focus,
input:focus,
a {
  outline: 0px !important;
  -webkit-appearance: none;
  box-shadow: none !important;
  &:hover {
    text-decoration: none;
  }
}
</style>