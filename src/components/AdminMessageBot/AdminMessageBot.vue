<template>
  <div>
    <v-tab-item value="msg-bot-tab">
      <div class="row" style="height: 100%;">
        <div class="col-9">
          <v-card raised height="580" style="padding: 1rem">
            <h3>Danh sách tin nhắn tự động</h3>
            <div class="row">
              <div class="col-1">
                <v-btn @click="setInsertMessage()" color="primary danken-1">Tạo tin nhắn</v-btn>
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
              :items="adminMessageBotList"
              :loading="adminMessageBotLoading"
              :headers="headers"
              :items-per-page="perPage"
              :page="currentPage"
              @click:row="changeMessage"
              hide-default-footer
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
                  @click="setEditMessage(item)"
                >mdi-pencil</v-icon>
                <v-icon
                  title="xóa"
                  style="margin-right: 0.5rem"
                  small
                  class="mr-2"
                  @click="deleteMessage(item)"
                >mdi-delete</v-icon>
              </template>
            </v-data-table>
            <v-pagination
              v-model="currentPage"
              total-visible="7"
              circle
              :length="Math.ceil(adminMessageBotList.length / perPage)"
            ></v-pagination>
          </v-card>
        </div>
        <div class="col-3" @contextmenu.prevent="$refs.insert.open">
          <v-card raised style="height: 100%;padding: 1rem">
            <h3 class="text-center">Danh sách câu hỏi</h3>
            <v-list style="margin-top: -1rem">
              <v-list-item-group>
                <div v-for="(question,index) in questionListSelected" :key="index">
                  <v-list-item @contextmenu.prevent="$refs.menu.open">
                    <v-list-item-content>{{(index+1)+". " + question.question}}</v-list-item-content>
                  </v-list-item>
                </div>
              </v-list-item-group>
            </v-list>
          </v-card>

          <VueContext
            ref="insert"
            style="padding:0"
            v-if="!(Object.keys(messageSelected).length === 0 && messageSelected.constructor === Object)"
          >
            <v-list>
              <v-list-item-group>
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title>Thêm câu hỏi</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </VueContext>
          <VueContext ref="menu" style="padding:0">
            <v-list>
              <v-list-item-group>
                <v-list-item>
                  <v-list-item-content>Xem đầy đủ</v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-content>Chi tiết</v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-content @click="setEditMessage(messageSelected)">Thêm câu hỏi</v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-content>Xóa khỏi danh sách</v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </VueContext>
        </div>
      </div>
    </v-tab-item>
    <v-dialog persistent v-model="messageDialog" width="1300">
      <v-card class="text-center" height="590">
        <div style="height: 83%">
          <div class="row" style="width: 98%;margin: 0 1%;">
            <div class="col-8">
              <v-text-field v-model="messageSelectedForControl.name" label="Tên tin nhắn"></v-text-field>
            </div>
            <div class="col-4">
              <v-btn
                style="width: 100%;height: 3rem"
                :loading="adminMessageBotLoading"
                @click="insertOrUpdateMessage"
                color="primary darken-1"
              >Lưu tin nhắn</v-btn>
            </div>
          </div>
          <div class="row" style="width: 98%;margin: 0 1%;margin-top: -2rem">
            <div class="col-8">
              <div class="row" style="margin-top: -0.7rem">
                <div class="col-9">
                  <v-autocomplete
                    :loader-height="1"
                    :items="questionList"
                    v-model="newQuestionIdForMessage"
                    label="Chọn câu hỏi hoặc tin nhắn có sẵn"
                  ></v-autocomplete>
                </div>
                <div class="col-2" style="padding-left: 0;padding-top: 1.5rem">
                  <v-btn color="primary darken-1" @click="addQuestion()">Thêm câu hỏi</v-btn>
                </div>
              </div>
              <v-data-table
                :headers="headersQuestion"
                :items="questionListForMessageControl"
                :items-per-page="perPageControl"
                :page="currentPageControl"
                hide-default-footer
                height="300"
              >
                <template v-slot:item.control="{item}">
                  <v-icon
                    title="xóa"
                    style="margin-right: 0.5rem"
                    small
                    class="mr-2"
                    @click="removeQuestion(item)"
                  >mdi-delete</v-icon>
                </template>
                <template v-slot:no-data>
                  <h4>Danh sách rỗng</h4>
                </template>
                <template v-slot:no-results>
                  <h4>Danh sách rỗng</h4>
                </template>
              </v-data-table>
              <v-pagination
                :length="Math.ceil(questionListForMessageControl.length / perPageControl)"
                v-model="currentPageControl"
                total-visible="7"
                circle
              ></v-pagination>
            </div>
            <div class="col-4">
              <v-btn
                style="width: 100%;height: 3rem;"
                color="warning darken-1"
                ref="addQuestionToggle"
                data-toggle="collapse"
                data-target="#addQuestion"
              >Tạo mới câu hỏi</v-btn>
              <div class="collapse" id="addQuestion">
                <v-textarea
                  v-model="newQuestion.question"
                  style="margin: 0.5rem 0"
                  label="Nhập câu hỏi"
                  outlined
                ></v-textarea>
                <v-textarea
                  v-model="newQuestion.answer"
                  style="margin-top: -1.5rem"
                  label="Nhập câu trả lời"
                  outlined
                ></v-textarea>
                <v-btn
                  :loading="adminQuestionBotLoading"
                  @click="insertQuestion"
                  style="width: 100%;margin-top: -1.5rem"
                  color="primary darken-1"
                >Lưu câu hỏi</v-btn>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn style="margin-right: 1.2rem" color="primary darken-1" @click="cancel">Hủy</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
import VueContext from "../../../node_modules/vue-context/src/js/vue-context";
import Empty from "../../components/EmptyComponent/EmptyComponent";
import { mapGetters } from "vuex";
export default {
  components: { VueContext, Empty },
  created() {
    this.$store.dispatch("adminGetMessageBot");
    this.$store.dispatch("adminGetQuestionBot").then(() => {
      this.handleQuestionList();
    });
  },
  data() {
    return {
      headers: [
        { value: "message_bot_id", text: "Mã tin nhắn", width: "15%" },
        { value: "name", text: "Tên tin nhắn", width: "35%" },
        { value: "updated_at", text: "Thời gian cập nhật", width: "20%" },
        { value: "control", text: "", width: "15%" }
      ],
      headersQuestion: [
        { value: "question_id", text: "Mã câu hỏi", width: "15%" },
        { value: "question", text: "Câu hỏi", width: "30%" },
        { value: "type.type", text: "Loại câu hỏi", width: "15%" },
        { value: "updated_at", text: "Thời gian cập nhật", width: "20%" },
        { value: "control", text: "", width: "10%" }
      ],
      messageDialog: false,
      messageTypes: [
        { value: 1, text: "action" },
        { value: 2, text: "text" }
      ],
      search: "",
      newQuestion: {
        question: "",
        answer: ""
      },
      insert: true,
      activeAddQuestion: false,
      questionList: [],
      questionSelected: {},
      questionListSelected: [],
      messageSelected: {},
      messageSelectedForControl: {},
      questionListForMessageControl: [],
      newQuestionIdForMessage: "",
      perPageControl: 5,
      perPage: 10,
      currentPageControl: 1,
      currentPage: 1
    };
  },
  methods: {
    cancel() {
      this.messageDialog = false;
      this.newQuestion.question = "";
      this.newQuestion.answer = "";
      $("#addQuestion").collapse("hide");
      this.messageSelectedForControl = {
        questions: []
      };
    },
    changeMessage(message) {
      this.questionListSelected = message.questions;
      this.messageSelected = message;
    },
    handleQuestionList(msgSelected) {
      let questions = this.adminQuestionBotList;
      this.questionList = [];
      for (let i = 0; i < questions.length; i++) {
        if (
          msgSelected == undefined ||
          (msgSelected != undefined &&
            msgSelected.message_bot_id != questions[i].question_id)
        ) {
          this.questionList.push({
            value: questions[i].question_id,
            text: questions[i].question
          });
        }
      }
    },
    setInsertMessage() {
      this.messageSelectedForControl = {};
      this.questionListForMessageControl = [];
      this.newQuestion.question = "";
      this.newQuestion.answer = "";
      this.handleQuestionList();
      $("#addQuestion").collapse("hide");
      this.messageDialog = true;
      this.insert = true;
    },
    setEditMessage(message) {
      this.messageSelectedForControl = message;
      this.questionListForMessageControl = message.questions;
      this.messageDialog = true;
      this.insert = false;
      this.handleQuestionList(message);
    },
    insertQuestion() {
      let temp = [];
      let vm = this;
      temp.push({ answer: this.newQuestion.answer });
      this.$store
        .dispatch("adminInsertQuestionBot", {
          question: this.newQuestion.question,
          answerList: JSON.stringify(temp)
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
            vm.handleQuestionList();
            vm.newQuestion = {};
            $("#addQuestion").collapse("hide");
          }
        });
    },
    checkContain(array, item) {
      for (let i = 0; i < array.length; i++) {
        if (array[i].question_id == item.question_id) return true;
      }
      return false;
    },
    addQuestion() {
      let questions = this.adminQuestionBotList;
      for (let i = 0; i < questions.length; i++) {
        if (questions[i].question_id == this.newQuestionIdForMessage) {
          if (
            this.checkContain(this.questionListForMessageControl, questions[i])
          ) {
            this.$swal({
              icon: "error",
              title: "Câu hỏi này đã tồn tại"
            });
          } else this.questionListForMessageControl.push(questions[i]);
          break;
        }
      }
    },
    removeQuestion(question) {
      let index = this.questionListForMessageControl.indexOf(question);
      this.questionListForMessageControl.splice(index, 1);
    },
    checkValldate() {
      if (
        this.messageSelectedForControl.name == "" ||
        this.messageSelectedForControl.type_message_bot_id == "" ||
        this.questionListForMessageControl.length == 0
      ) {
        return false;
      } else return true;
    },
    insertOrUpdateMessage() {
      let vm = this;
      if (this.checkValldate()) {
        if (this.insert) {
          this.$store
            .dispatch("adminInsertMessageBot", {
              name: this.messageSelectedForControl.name,
              type_message_bot_id: this.messageSelectedForControl
                .type_message_bot_id,
              questionList: JSON.stringify(this.questionListForMessageControl)
            })
            .then(response => {
              let icon = "error";
              if (response.data.RequestSuccess === true) icon = "success";
              this.$swal({
                icon: icon,
                title: response.data.msg
              }).then(() => {
                vm.cancel();
              });
            });
        } else {
          this.$store
            .dispatch("adminUpdateMessageBot", {
              name: this.messageSelectedForControl.name,
              message_bot_id: this.messageSelectedForControl.message_bot_id,
              questionList: JSON.stringify(this.questionListForMessageControl)
            })
            .then(response => {
              let icon = "error";
              if (response.data.RequestSuccess === true) icon = "success";
              this.$swal({
                icon: icon,
                title: response.data.msg
              }).then(() => {
                vm.cancel();
              });
            });
        }
      } else {
        this.$swal({
          icon: "error",
          title: "Nhập thiếu thông tin"
        });
      }
    },
    deleteMessage(message) {
      let vm = this
      this.$swal({
        icon: "question",
        title: "Bạn chắc chắn muốn xóa tin nhắn này?",
        showCancelButton: true,
        showLoaderOnConfirm: true,
        preConfirm: () => {
            return vm.$store.dispatch("adminDeleteMessageBot", message).then((response) => { return response })
        }
      }).then(result => {
        console.log(result)
        let response = result.value;
        let icon = "";
        response.data.RequestSuccess === true
          ? (icon = "success")
          : (icon = "error");
        vm.$swal({
          icon: icon,
          title: response.data.msg
        });
      })
    }
  },
  computed: {
    ...mapGetters({
      adminMessageBotList: "adminMessageBotList",
      adminMessageBotLoading: "adminMessageBotLoading",
      adminQuestionBotList: "adminQuestionBotList",
      adminQuestionBotLoading: "adminQuestionBotLoading"
    })
  }
};
</script>