<template>
  <div>
    <v-tab-item value="question-bot-tab">
      <div class="row">
        <div class="col-9" style="height: 100%">
          <v-card raised style="padding: 1rem" height="580">
            <h3>Danh sách câu hỏi</h3>
            <div class="row">
              <div class="col-1">
                <v-btn @click="questionDialog = true" color="primary danken-1">Tạo câu hỏi mới</v-btn>
              </div>
              <div class="col-6 offset-5">
                <v-text-field
                  style="margin-top: -1rem"
                  v-model="search"
                  label="Search"
                  prepend-inner-icon="search"
                ></v-text-field>
              </div>
            </div>
            <v-data-table
              height="380"
              :search="search"
              :items="adminQuestionBotList"
              :loading="adminQuestionBotLoading"
              :headers="headers"
              @click:row="changeAnswerList"
              hide-default-footer
              :page="currentPage"
              :items-per-page="perPage"
            >
              <template v-slot:no-data>
                <Empty></Empty>
              </template>
              <template v-slot:no-results>
                <Empty></Empty>
              </template>
              <template v-slot:item.control="{item}">
                <v-icon
                  title="chỉnh sửa"
                  small
                  class="mr-2"
                  style="margin-right: 0.5rem"
                  @click="updateQuestion(item)"
                >mdi-pencil</v-icon>
                <v-icon
                  title="xóa"
                  style="margin-right: 0.5rem"
                  small
                  class="mr-2"
                  @click="deleteQuestion(item)"
                >mdi-delete</v-icon>
              </template>
            </v-data-table>
            <v-pagination
              circle
              :length="Math.ceil(adminQuestionBotList.length / perPage)"
              v-model="currentPage"
            ></v-pagination>
          </v-card>
        </div>
        <div class="col-3" @contextmenu.prevent="$refs.insert.open">
          <v-card raised style="height: 100%;padding: 1rem">
            <h4 class="text-center">Danh sách câu trả lời</h4>
            <div v-if="answerListSelected.length == 0">
              <Empty></Empty>
            </div>
            <v-list v-else>
              <v-list-item-group>
                <div v-for="(answer,index) in answerListSelected" :key="index">
                  <v-list-item
                    @contextmenu.prevent="$refs.menu.open"
                    @click.right="answerSelected=answer;"
                    @click.left="answerSelected=answer;getFullAnswer()"
                  >
                    <v-list-item-content>{{(index+1)+". "+ handleString(answer.answer)}}</v-list-item-content>
                  </v-list-item>
                </div>
              </v-list-item-group>
            </v-list>
          </v-card>
          <VueContext ref="insert" style="padding:0">
            <v-list>
              <v-list-item-group>
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title @click="insertAnswert">Thêm câu trả lời</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </VueContext>
          <VueContext ref="menu" style="padding:0">
            <v-list>
              <v-list-item-group>
                <v-list-item>
                  <v-list-item-content @click="getFullAnswer">Xem đầy đủ</v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-content @click="updateAnswer">Chỉnh sửa câu trả lời</v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-content @click="insertAnswert">Thêm câu trả lời</v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-content @click="deleteAnswer">Xóa khỏi danh sách</v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </VueContext>
        </div>
      </div>
    </v-tab-item>
    <v-dialog persistent v-model="questionDialog" width="1300">
      <v-card class="text-center">
        <div class="container">
          <h3 class="text-left" style="margin-bottom:1rem">Tạo câu hỏi mới</h3>
          <v-textarea v-model="newQuestion" outlined label="Nhập câu hỏi" height="8rem"></v-textarea>
          <div class="row">
            <div class="col-6" v-for="(answer,index) in answerList" :key="index">
              <v-textarea
                outlined
                :label="'Câu trả lời thứ #' +(index+1)"
                height="8rem"
                v-model="answer.answer"
              ></v-textarea>
            </div>
            <div class="col-6">
              <div style="height: 8rem;background:silver">
                <v-btn
                  @click="addAnswer()"
                  color="success darken-1"
                  style="margin-top: 2.5rem"
                >Thêm câu trả lời</v-btn>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" @click="insertQuestion" :loading="adminQuestionBotLoading">Lưu</v-btn>
          <v-btn style="margin-right: 1.2rem" color="primary danken-1" @click="cancel">Hủy</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
import VueContext from "../../../node_modules/vue-context/src/js/vue-context";
import Empty from "../EmptyComponent/EmptyComponent";
import { mapGetters } from "vuex";
export default {
  components: { VueContext, Empty },
  created() {
    this.$store.dispatch("adminGetQuestionBot");
  },
  data() {
    return {
      headers: [
        { value: "question_id", text: "Mã câu hỏi" },
        { value: "question", text: "Câu hỏi" },
        { value: "updated_at", text: "Thời gian cập nhật" },
        { value: "control", text: "" }
      ],
      questionDialog: false,
      typeMessage: [
        { value: "1", text: "action" },
        { value: "2", text: "text" }
      ],
      currentTab: 1,
      perPage: 10,
      currentPage: 1,
      search: "",
      questionSelected: {},
      newQuestion: "",
      answerList: [],
      answerListSelected: [],
      answerSelected: {}
    };
  },
  methods: {
    handleString(string) {
      if (string.length > 30) return string.slice(0, 30) + "...";
      else return string;
    },
    cancel() {
      this.questionDialog = false;
      this.newQuestion = "";
      this.answerList = [];
    },
    addAnswer() {
      this.answerList.push({ answer: "" });
    },
    changeAnswerList(question) {
      this.questionSelected = question;
      this.answerListSelected = question.answers;
    },
    getFullAnswer() {
      this.$swal({
        title: this.answerSelected.answer
      });
    },
    findQuestionSelected(question_id) {
      for (let i = 0; i < this.adminQuestionBotList.length; i++) {
        if (this.adminQuestionBotList[i].question_id == question_id) {
          return this.adminQuestionBotList[i];
        }
      }
    },
    insertAnswert() {
      let vm = this;
      this.$swal({
        icon: "info",
        title: "Nhập câu trả lời mới",
        input: "textarea",
        showCancelButton: true,
        confirmButtonText: "Thêm",
        cancelButtonText: "Hủy",
        showLoaderOnConfirm: true,
        preConfirm: answer => {
          return vm.$store
            .dispatch("adminInsertAnswerBot", {
              question_id: vm.questionSelected.question_id,
              answer: answer
            })
            .then(response => {
              return response;
            });
        },
        allowOutsideClick: () => !vm.$swal.isLoading()
      }).then(result => {
        let response = result.value;
        let icon = "";
        response.data.RequestSuccess === true
          ? (icon = "success")
          : (icon = "error");
        vm.$swal({
          icon: icon,
          title: response.data.msg
        });
        vm.questionSelected = vm.findQuestionSelected(
          vm.questionSelected.question_id
        );
        vm.answerListSelected = vm.questionSelected.answers;
      });
    },
    updateAnswer() {
      let vm = this;
      this.$swal({
        icon: "question",
        title: "Bạn muốn chỉnh sửa câu trả lời?",
        inputAttributes: {
          autocapitalize: "off"
        },
        input: "textarea",
        inputValue: vm.answerSelected.answer,
        showCancelButton: true,
        confirmButtonText: "Chỉnh sửa",
        cancelButtonText: "Hủy",
        showLoaderOnConfirm: true,
        preConfirm: answer => {
          return vm.$store
            .dispatch("adminUpdatetAnswerBot", {
              question_id: vm.questionSelected.question_id,
              answer: answer,
              answer_id: vm.answerSelected.answer_id
            })
            .then(response => {
              return response;
            });
        },
        allowOutsideClick: () => !vm.$swal.isLoading()
      }).then(result => {
        let response = result.value;
        let icon = "";
        response.data.RequestSuccess === true
          ? (icon = "success")
          : (icon = "error");
        vm.$swal({
          icon: icon,
          title: response.data.msg
        });
        vm.questionSelected = vm.findQuestionSelected(
          vm.questionSelected.question_id
        );
        vm.answerListSelected = vm.questionSelected.answers;
      });
    },
    deleteAnswer() {
      let vm = this;
      this.$swal({
        icon: "question",
        title: "Bạn muốn xóa câu trả lời?",
        text: vm.answerSelected.answer,
        showCancelButton: true,
        confirmButtonText: "Chỉnh sửa",
        cancelButtonText: "Hủy",
        showLoaderOnConfirm: true,
        preConfirm: () => {
          return vm.$store
            .dispatch("adminDeleteAnswerBot", {
              answer_id: vm.answerSelected.answer_id
            })
            .then(response => {
              return response;
            });
        }
      }).then(result => {
        let response = result.value;
        let icon = "";
        response.data.RequestSuccess === true
          ? (icon = "success")
          : (icon = "error");
        vm.$swal({
          icon: icon,
          title: response.data.msg
        });

        vm.questionSelected = vm.findQuestionSelected(
          vm.questionSelected.question_id
        );
        vm.answerListSelected = vm.questionSelected.answers;
      });
    },
    insertQuestion() {
      let vm = this;
      this.$store
        .dispatch("adminInsertQuestionBot", {
          question: this.newQuestion,
          answerList: JSON.stringify(this.answerList)
        })
        .then(response => {
          let icon = "";
          response.data.RequestSuccess === true
            ? (icon = "success")
            : (icon = "error");
          vm.$swal({
            icon: icon,
            title: response.data.msg
          });
          if (response.data.RequestSuccess === true) {
            this.cancel();
          }
        });
    },
    updateQuestion(question) {
      let vm = this;
      this.$swal({
        icon: "question",
        title: "Bạn muốn chỉnh sửa câu hỏi?",
        inputAttributes: {
          autocapitalize: "off"
        },
        input: "textarea",
        inputValue: question.question,
        showCancelButton: true,
        confirmButtonText: "Chỉnh sửa",
        cancelButtonText: "Hủy",
        showLoaderOnConfirm: true,
        preConfirm: questionText => {
          return vm.$store
            .dispatch("adminUpdateQuestionBot", {
              question_id: question.question_id,
              question: questionText
            })
            .then(response => {
              return response;
            });
        },
        allowOutsideClick: () => !vm.$swal.isLoading()
      }).then(result => {
        let response = result.value;
        let icon = "";
        response.data.RequestSuccess === true
          ? (icon = "success")
          : (icon = "error");
        vm.$swal({
          icon: icon,
          title: response.data.msg
        });
      });
    },
    deleteQuestion(question) {
      let vm = this;
      this.$swal({
        icon: "question",
        title: "Bạn muốn xóa câu hỏi?",
        text: vm.questionSelected.question,
        showCancelButton: true,
        confirmButtonText: "Chỉnh sửa",
        cancelButtonText: "Hủy",
        showLoaderOnConfirm: true,
        preConfirm: () => {
          return vm.$store
            .dispatch("adminDeleteQuestionBot", {
              question_id: vm.questionSelected.question_id
            })
            .then(response => {
              return response;
            });
        }
      }).then(result => {
        let response = result.value;
        let icon = "";
        response.data.RequestSuccess === true
          ? (icon = "success")
          : (icon = "error");
        vm.$swal({
          icon: icon,
          title: response.data.msg
        });
        response.data.RequestSuccess === true
          ? (vm.answerListSelected = [])
          : "";
      });
    }
  },
  computed: {
    ...mapGetters({
      adminQuestionBotList: "adminQuestionBotList",
      adminQuestionBotLoading: "adminQuestionBotLoading"
    })
  }
};
</script>