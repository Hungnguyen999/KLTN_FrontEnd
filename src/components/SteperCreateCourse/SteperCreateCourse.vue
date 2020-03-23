<template>
  <div>
    <v-stepper v-model="e1">
      <v-stepper-header>
        <v-stepper-step step="1" :complete="e1 > 1" editable>Đề tài và lĩnh vực</v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step step="2" :complete="e1 > 2" editable>Thông tin chi tiết</v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step step="3" :complete="e1 > 3" editable>Mô tả khóa học</v-stepper-step>

        <v-divider></v-divider>
        <v-stepper-step step="4" :complete="e1 > 4" editable>Giá tiền</v-stepper-step>
        <v-stepper-step step="5">Đang hoành thành</v-stepper-step>
      </v-stepper-header>
      <v-stepper-items>
        <v-stepper-content step="1">
          <v-card class="mb-12" color="white " height="22rem">
            <div class="container">
              <div class="row">
                <div class="col-3 offset-1" style="text-align: right;">Chọn lĩnh vực khóa học</div>
                <div class="col-7">
                  <v-select
                    v-model="selectedCategory"
                    menu-props="auto"
                    :items="loadCurrentCategory"
                    @change="updateCurrentTopic()"
                    style="margin-top: -1.5rem"
                  ></v-select>
                </div>
              </div>
              <div class="row">
                <div class="col-3 offset-1" style="text-align: right;">Chọn chủ đề</div>
                <div class="col-7">
                  <v-select
                    chips
                    multiple
                    menu-props="auto"
                    :items="loadCurrentTopic"
                    item-value="array"
                    v-model="selectedTopic"
                    style="margin-top: -1.5rem;"
                    @change="checkLimit()"
                  ></v-select>
                  {{selectedTopic}}
                </div>
              </div>
            </div>
          </v-card>
        </v-stepper-content>
        <v-stepper-content step="2">
          <v-card class="mb-12" color="grey lighten-1" height="22rem"></v-card>
        </v-stepper-content>
        <v-stepper-content step="3">
          <v-card class="mb-12" color="grey lighten-1" height="22rem"></v-card>
        </v-stepper-content>
        <v-stepper-content step="4">
          <v-card class="mb-12" color="grey lighten-1" height="22rem"></v-card>
        </v-stepper-content>
        <v-stepper-content step="5">
          <v-card class="mb-12" color="grey lighten-1" height="22rem">loading nè</v-card>
        </v-stepper-content>
        <button
          style="float: right;margin-top: -3rem;margin-right: 1.5rem;margin-bottom: 1rem"
          class="btn btn-danger"
          @click="closeModal()"
        >Hủy</button>
        <v-btn
          style="float: right;margin-top: -3rem;margin-right: 1.5rem;margin-bottom: 1rem"
          color="primary"
          @click="e1 < maxStep ? e1++ : e1 = 1"
        >Tiếp tục</v-btn>
      </v-stepper-items>
    </v-stepper>
  </div>
</template>
<script>
export default {
  created() {
    this.setDefault();
  },
  data() {
    return {
      e1: 1,
      maxStep: 5,
      selectedTopic: [],
      currentTopic: [],
      currentCategory: [],
      selectedCategory: [],
      categoryList: [
        {
          id: 1,
          name: "Lập trình",
          topic: [
            { id: "topic_1", name: "Lập trình php" },
            { id: "topic_2", name: "Lập trình laravel" },
            { id: "topic_3", name: "Lập trình Nodejs" },
            { id: "topic_4", name: "Lập trình C++" },
            { id: "topic_5", name: "Lập trình C#" }
          ]
        },
        {
          id: 2,
          name: "Tin học văn phòng",
          topic: [
            { id: "topic_6", name: "Word" },
            { id: "topic_7", name: "Excel" },
            { id: "topic_8", name: "PowerPoint" }
          ]
        },
        { id: 3, name: "Nấu ăn", topic: [] },
        { id: 4, name: "Nấu ăn", topic: [] },
        { id: 5, name: "Nấu ăn", topic: [] },
        { id: 6, name: "Nấu ăn", topic: [] },
        { id: 7, name: "Nấu ăn", topic: [] }
      ]
    };
  },
  methods: {
    setDefault() {
      this.updateCurrentCategory();
      this.selectedCategory = this.currentCategory[0].value;
      this.selectedTopic = [];
      this.updateCurrentTopic();
    },
    updateCurrentCategory() {
      let vm = this;
      this.categoryList.forEach(function(cateogry) {
        vm.currentCategory.push({ value: cateogry.id, text: cateogry.name });
      });
    },
    updateCurrentTopic() {
      let vm = this;
      for (let i = 0; i < this.categoryList.length; i++) {
        if (this.categoryList[i].id == this.selectedCategory) {
          vm.currentTopic = [];
          this.categoryList[i].topic.forEach(function(tp) {
            vm.currentTopic.push({ value: tp.id, text: tp.name });
          });
        }
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
      this.setDefault();
      this.$emit("closeModal", false);
    }
  },
  computed: {
    loadCurrentCategory() {
      return this.currentCategory;
    },
    loadCurrentTopic() {
      return this.currentTopic;
    },
    loadSelectedTopic() {
      return this.selectedTopic;
    }
  }
};
</script>