<template>
  <div class="my-container">
    <h2>{{resultCount}} results for "{{lastSearch}}"</h2>
    <div class="button-container">
      <div>
        <v-btn @click="miniContent = !miniContent" height="3.5rem" outlined>
          <v-icon>mdi-filter</v-icon>Bộ lọc
        </v-btn>
      </div>
      <div>
        <v-app>
          <v-text-field
            id="search-input-for-vuex"
            @keyup.enter="searchFunction()"
            v-model="search"
            :value="guestSearch"
            outlined
          ></v-text-field>
        </v-app>
      </div>
      <div>
        <v-btn
          style="margin-left: 0.9rem"
          height="3.5rem"
          @click="searchFunction()"
          outlined
          id="search-button-for-vuex"
        >Tìm kiếm</v-btn>
      </div>
      <div></div>
      <div>
        <i>
          <b>{{resultCount}} results</b>
        </i>
      </div>
    </div>
    <div class="row">
      <div :class="miniContent ? 'col-1' : 'col-3'">
        <v-navigation-drawer :mini-variant.sync="miniContent" class="left-menu" permanent>
          <div class="my-list">
            <v-list-group no-action value="true">
              <template v-slot:activator>
                <v-list-item-content>
                  <v-list-item-title>
                    <h5>
                      <v-icon>mdi-apps</v-icon>&nbsp;Danh mục
                    </h5>
                  </v-list-item-title>
                </v-list-item-content>
              </template>
              <v-list-item style="margin-top: -1rem">
                <v-radio-group
                  @change="changeCategory()"
                  v-model="categorySeleted"
                  :mandatory="false"
                  link
                >
                  <v-app>
                    <v-radio :label="'Tất cả'" :value="-1"></v-radio>
                    <v-radio
                      v-for="(category,index) in guestCategoryList"
                      :label="category.name"
                      :value="category"
                      :key="index"
                    ></v-radio>
                  </v-app>
                </v-radio-group>
              </v-list-item>
            </v-list-group>
          </div>

          <div class="my-list">
            <v-list-group no-action value="true">
              <template v-slot:activator>
                <v-list-item-content>
                  <v-list-item-title>
                    <h5>
                      <v-icon>mdi-cogs</v-icon>&nbsp;Chủ đề
                    </h5>
                  </v-list-item-title>
                </v-list-item-content>
              </template>
              <v-list-item style="margin-top: -1rem">
                <v-radio-group :mandatory="false" link v-model="topicSelected">
                  <v-app>
                    <v-radio :label="'Tất cả'" :value="-1"></v-radio>
                    <v-radio
                      v-for="(topic, i) in topicListSeleted"
                      :label="topic.name"
                      :value="topic"
                      :key="i"
                    ></v-radio>
                  </v-app>
                </v-radio-group>
              </v-list-item>
            </v-list-group>
          </div>

          <div class="my-list" v-if="false">
            <v-list-group no-action value="true">
              <template v-slot:activator>
                <v-list-item-content>
                  <v-list-item-title>
                    <h5>
                      <v-icon>mdi-currency-usd</v-icon>&nbsp;Giá tiền
                    </h5>
                  </v-list-item-title>
                </v-list-item-content>
              </template>
              <v-list-item style="margin-top: -1rem">
                <v-radio-group :mandatory="false" link v-model="Free">
                  <v-app>
                    <v-radio :label="'Tất cả'" :value="-1"></v-radio>
                    <v-radio :value="false" label="Trả tiền"></v-radio>
                    <v-radio :value="true" label="Miễn phí"></v-radio>
                  </v-app>
                </v-radio-group>
              </v-list-item>
            </v-list-group>
          </div>

          <div class="my-list">
            <v-list-group no-action value="true">
              <template v-slot:activator>
                <v-list-item-content>
                  <v-list-item-title>
                    <h5>
                      <v-icon>mdi-star</v-icon>&nbsp;Sao
                    </h5>
                  </v-list-item-title>
                </v-list-item-content>
              </template>
              <v-list-item style="margin-top: -1rem">
                <v-radio-group :mandatory="false" link v-model="star">
                  <v-app>
                    <v-radio :label="'Tất cả'" :value="-1"></v-radio>
                    <v-radio v-for="i in 5" :label="i +'sao'" :value="i" :key="i"></v-radio>
                  </v-app>
                </v-radio-group>
              </v-list-item>
            </v-list-group>
          </div>
        </v-navigation-drawer>
      </div>
      <div :class="miniContent ? 'col-11' : 'col-9'" style="padding-left: 0">
        <div>
          <div v-for="(course, i) in searchList" :key="i">
            <div class="reccommend-item">
              <CourseSearchItem :course="course"></CourseSearchItem>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CourseSearchItem from "../../components/RecommendItem/RecommendItem";
import { mapGetters } from "vuex";
export default {
  components: { CourseSearchItem },
  data() {
    return {
      search: "",
      searchList: [],
      lastSearch: "",
      resultCount: 0,
      categorySeleted: -1,
      topicSelected: -1,
      star: -1,
      topicListSeleted: [],
      miniContent: false,
      sortSelected: 1,
      loading: false,
      Free: -1,
      sorts: [
        { value: 1, text: "Sao tăng dần" },
        { value: 2, text: "Sao giảm dần" },
        { value: 3, text: "Giá tăng dần" },
        { value: 4, text: "Giá giảm dần" }
      ]
    };
  },
  created() {
    this.$store.dispatch("guestGetSearch").then(() => {
      this.searchList = this.guestSearchList.slice(
        0,
        this.guestSearchList.length
      );
      this.resultCount = this.searchList.length;
    });
  },
  methods: {
    changeCategory() {
      this.topicListSeleted = this.categorySeleted.topics_enable;
    },
    searchFunction() {
      this.loading = true;
      this.searchList = [];
      this.$store.commit("guest_set_search", this.search);
      for (let i = 0; i < this.guestSearchList.length; i++) {
        let name = this.guestSearchList[i].name.toUpperCase();
        let tempSearch = this.search.toUpperCase();
        if (name.includes(tempSearch)) {
          for (let j = 0; j < this.guestSearchList[i].topic.length; j++) {
            let flag_category =
              (this.categorySeleted != null &&
                this.categorySeleted != -1 &&
                this.guestSearchList[i].topic[j].category_id ===
                  this.categorySeleted.category_id) ||
              this.categorySeleted == null ||
              this.categorySeleted == -1;
            let flag_topic =
              (this.topicSelected != null &&
                this.topicSelected != -1 &&
                this.guestSearchList[i].topic[j].topic_id ==
                  this.topicSelected.topic_id) ||
              this.topicSelected == null ||
              this.topicSelected == -1;
            let flag_star =
              (this.star != null &&
                this.star != -1 &&
                this.star == Math.floor(this.guestSearchList[i].star)) ||
              this.star == null ||
              this.star == -1;
            // let flag_free =
            //   (this.Free == true && this.guestSearchList[i].priceTier === 0) ||
            //   (this.Free == false && this.guestSearchList[i].priceTier !== 0) ||
            //   this.Free == null || this.Free == -1
            if (
              flag_category === true &&
              flag_topic === true &&
              flag_star === true //&&
              //flag_free === true
            ) {
              this.searchList.push(this.guestSearchList[i]);
              break;
            }
          }
        }
      }
      this.loading = false;
      this.resultCount = this.searchList.length;
      this.lastSearch = this.guestSearch;
      this.search = "";
      this.$store.commit("guest_set_search", "");
    }
  },
  computed: {
    ...mapGetters({
      guestCategoryList: "guestCategoryList",
      guestCategoryLoading: "guestCategoryLoading",
      guestSearchList: "guestSearchList",
      guestSearch: "guestSearch",
      guestSearchLoading: "guestSearchLoading"
    })
  }
};
</script>
<style lang="scss" scoped>
.my-container {
  margin: 3rem 2rem;
  .button-container {
    display: grid;
    margin: 1rem 0;
    grid-template-columns: 10% 25% 10% 45% 10%;
  }
}
.control-focus {
  padding: 0.5rem;
  &:hover {
    background-color: silver;
  }
}
.left-menu {
  overflow: hidden !important;
}
.my-list {
  border-bottom: 1px solid silver;
}

.reccommend-item {
  padding: 0 1rem;
  position: relative;
  border-bottom: 1px solid silver;
  cursor: pointer;
  &:hover {
    background-color: #c2deff;
  }
}
</style>