<template>
  <div>
    <v-app>
      <div class="row">
        <div class="col-8">
          <v-card style="padding: 0.5rem">
            <h2>Danh sách thể loại</h2>
            <div class="row" style="height: 4rem">
              <div class="col-5" style="padding-top: 1.4rem;">
                <v-select
                  style="cursor: pointer"
                  :items="activeList"
                  label="Trạng thái"
                  outlined
                  dense
                  @change="updateTempList()"
                  v-model="disableCategoryList"
                ></v-select>
              </div>
              <div class="col-6 offset-1">
                <v-text-field
                  v-model="search"
                  append-icon="mdi-magnify"
                  label="Search"
                  single-line
                  hide-details
                ></v-text-field>
              </div>
            </div>
            <div class="row">
              <div class="col-5" style="position: relative">
                <ModalMsg></ModalMsg>
                <ModalTag style="position: absolute;top: 0.73rem; right: 1rem"></ModalTag>
              </div>
            </div>
            <!-- <v-data-table
              ref="my-table"
              hide-default-footer
              height="33rem"
              @page-count="pageCount = $event"
              :headers="fields"
              :items="tempList"
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
                <div style="float: right;">
                  <div
                    v-if="categoryIDSelected == '' || (loadCategoryIDSelected != item.category_id)"
                  >
                    <v-icon
                      title="chỉnh sửa"
                      small
                      class="mr-2"
                      style="margin-right: 0.5rem"
                      @click="selectCategory(item)"
                    >mdi-pencil</v-icon>
                    <v-icon
                      title="xóa"
                      v-if="!item.disable"
                      style="margin-right: 0.5rem"
                      @click="disableOrEnableCategory(item)"
                      small
                      class="mr-2"
                    >mdi-delete</v-icon>
                    <v-icon
                      v-if="item.disable"
                      title="khôi phục"
                      style="margin-right: 0.5rem"
                      @click="disableOrEnableCategory(item)"
                    >mdi-cog-counterclockwise</v-icon>
                    <router-link :to="{name: 'topic-page', query: {category_id: item.category_id}}">
                      <v-icon style="margin-right: 0.5rem">mdi-eye</v-icon>
                    </router-link>
                  </div>
                  <div v-else>
                    <v-icon
                      class="mr-2"
                      @click="confirmUpdate()"
                      style="margin-right: 0.5rem"
                      title="Lưu"
                    >mdi-content-save</v-icon>
                    <v-icon
                      title="Hủy"
                      class="mr-2"
                      style="margin-right: 0.5rem"
                      @click="cancel()"
                    >mdi-close-circle</v-icon>
                  </div>
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
            </div> -->
          </v-card>
        </div>
        <div class="col-4">
          <v-list
            :dense="true"
            :subheader="true"
            :sub-group="true"
            :nav="true"
            :rounded="false"
            :three-line="true"
            class="question-list"
          >
            <v-subheader>
              <h3>Danh sách câu trả lời</h3>
            </v-subheader>
            <v-list-item-group v-model="item" color="primary">
              <v-list-item v-for="(i) in 10" :key="i">
                <v-list-item-content>
                  <v-list-item-subtitle>đây là câu hỏi nè {{i}}đây là câu hỏi nè {{i}}đây là câu hỏi nè {{i}}đây là câu hỏi nè {{i}}đây là câu hỏi nè {{i}}đây là câu hỏi nè {{i}}đây là câu hỏi nè {{i}}đây là câu hỏi nè {{i}}</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </div>
      </div>
      <!-- <v-dialog v-model="dialogMsg" width="600"><ModalMsg></ModalMsg></v-dialog>
      <v-dialog v-model="dialogTag"><ModalTag></ModalTag></v-dialog>-->
    </v-app>
  </div>
</template>
<script>
import ModalMsg from "../../components/ModalMessage/ModalMessage";
import ModalTag from "../../components/ModalTag/ModalTag";
export default {
  components: { ModalMsg, ModalTag },
  data() {
    return {
      dialogMsg: false,
      dialogTag: false
    };
  }
};
</script>
<style lang="scss" scoped>
.col-4 {
  .question-list {
    h3 {
      font-weight: 600;
      color: black;
    }
    border: 2px solid #ece8e8;
    padding: 0.5rem;
    height: 47.1rem;
    overflow: auto;
  }
}
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
  text-decoration: none;
  &:hover {
    text-decoration: none;
  }
}
</style>