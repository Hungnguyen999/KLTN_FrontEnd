<template>
  <div>
    <v-app>
      <div class="row">
        <div class="col-9">
          <v-card>
            <v-card-title>
              Danh sách thẻ loại
              <v-spacer></v-spacer>
              <v-text-field
                v-model="search"
                append-icon="mdi-magnify"
                label="Search"
                single-line
                hide-details
              ></v-text-field>
            </v-card-title>
            <v-data-table
              ref="my-table"
              hide-default-footer
              height="33rem"
              @page-count="pageCount = $event"
              :headers="fields"
              :items="adminGetCategories"
              :page.sync="currentPage"
              :items-per-page="perPage"
              :search="search"
              :loading="adminGetCategoryLoading"
              loading-text="Đang tải ..."
            >
              <template v-slot:item.category_id="{item}">
                <div style="width: 5rem;">{{item.category_id}}</div>
              </template>
              <template v-slot:item.name="{item}">
                <div
                  style="width: 12rem;"
                  v-if="categoryIDSelected == '' || (loadCategoryIDSelected != item.category_id)"
                >{{item.name}}</div>
                <div v-else style="width: 12rem;">
                  <input class="form-control" v-model="selectedCategory.name" />
                </div>
              </template>
              <template v-slot:item.icon_class="{ item }">
                <i class="fa-lg" :class="item.icon_class"></i>&nbsp;
                <a
                  class="btn btn-sm"
                  @click="dialogIcon = true"
                  v-if="!(categoryIDSelected == '' || (loadCategoryIDSelected != item.category_id))"
                  href="#"
                >chọn icon</a>
              </template>
              <template v-slot:item.update="{item}">
                <div
                  v-if="categoryIDSelected == '' || (loadCategoryIDSelected != item.category_id)"
                >
                  <button
                    v-if="!item.disable"
                    class="btn btn-outline-danger btn-sm"
                    style="margin-right: 0.5rem"
                  >Xóa</button>
                  <button
                    v-if="item.disable"
                    class="btn btn-outline-danger btn-sm"
                    style="margin-right: 0.5rem"
                  >Khôi phục</button>
                  <button
                    class="btn btn-outline-info btn-sm"
                    @click="selectCategory(item)"
                  >Chỉnh sửa</button>
                </div>
                <div v-else>
                  <button
                    class="btn btn-outline-primary btn-sm"
                    style="margin-right: 0.5rem"
                    @click="confirmUpdate()"
                  >Lưu</button>
                  <button class="btn btn-outline-warning btn-sm" @click="cancel()">Hủy</button>
                </div>
              </template>
              <template v-slot:no-results>
                <img
                  style="margin-top:1rem"
                  src="https://tiki.vn/desktop/img/account/tiki-not-found-pgae.png"
                />

                <h4 style="margin-top: 0.5rem">Không tìm thấy từ khóa !</h4>
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
                  Tên thể loại:
                  <input class="form-control" />
                </label>
                <label>
                  Icon đại diện:
                  <i class="fa-2x" :class="newCategory.iconClass"></i>
                  <button
                    @click="dialogIcon = true"
                    style="width: 100%;"
                    class="btn btn-sm btn-primary"
                  >Chọn icon</button>
                </label>
                <button style="width: 100%;" class="btn btn-danger">Lưu</button>
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
import { mapGetters } from "vuex";
export default {
  created() {
    this.$store.dispatch("adminGetCategories");
    this.pageCount = Math.ceil(this.adminGetCategories.length / this.perPage);
  },
  data() {
    return {
      dialogIcon: false,
      dialogCreateForm: false,
      iconList: iconList.icons,
      categoryIDSelected: "",
      pageCount: 1,
      search: "",
      currentPage: 1,
      perPage: 10,
      fields: [
        { value: "category_id", text: "Mã thể loại", sortable: true },
        { value: "name", text: "Tên thẻ loại" },
        { value: "icon_class", text: "Icon", sortable: true },
        { value: "update", text: "" }
      ],
      newCategory: {
        name: "",
        icon_class: ""
      },
      selectedCategory: {
        name: "",
        icon_class: ""
      }
    };
  },
  methods: {
    confirmUpdate() {
      let vm = this;
      this.$swal.queue([
        {
          icon: "question",
          title: "Thông Báo",
          text: "Bạn muốn lưu chỉnh sửa?",
          showCancelButton: true,
          showLoaderOnConfirm: true,
          preConfirm: () => {
            return vm.$store
              .dispatch("adminUpdateCategory", vm.selectedCategory)
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
              });
          }
        }
      ]);
    },
    setIconSeleted(iconClass) {
      if (this.categoryIDSelected != "") {
        this.selectedCategory.icon_class = iconClass;
      } else {
        this.newCategory.iconClass = iconClass;
      }
      this.dialogIcon = false;
    },
    openForm() {
      let vm = this;
      let check =
        Object.keys(this.selectedCategory).length === 0 &&
        this.selectedCategory.constructor === Object;
      if (!check) {
        this.confirmUpdate();
        //this.dialogCreateForm = !this.dialogCreateForm;
      } else {
        vm.dialogCreateForm = !vm.dialogCreateForm;
      }
    },
    ScrollToTable() {
      this.$vuetify.goTo(this.$refs["my-table"], {
        duration: 1500,
        offset: 1000,
        easing: "easeInOutQuint"
      });
    },
    selectCategory(seleted) {
      this.categoryIDSelected = seleted.category_id;
      this.selectedCategory = seleted;
    },
    cancel() {
      this.categoryIDSelected = "";
      this.selectedCategory = {};
    }
  },
  computed: {
    ...mapGetters({
      adminGetCategoryLoading: "adminGetCategoryLoading",
      adminGetCategories: "adminGetCategories",
      adminGetCategoryObject: "adminGetCategoryObject"
    }),
    loadCategoryIDSelected() {
      return this.categoryIDSelected;
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
}
</style>