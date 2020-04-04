<template>
  <div>
    <button @click="dialog = true" class="btn btn-primary btn-sm">Tin nhắn mới</button>
    <v-dialog v-model="dialog" width="1000" persistent>
      <v-card>
        <v-card-title class="headline">Tin nhắn tự động mới</v-card-title>
        <hr />
        <div style="padding: 0.5rem 1rem">
          <h3>Tin nhắn trả lời tự động</h3>
          <VueEditor id="answer"></VueEditor>
          <div class="sticky-container">
            <h3 style="margin-top: 1.5rem;margin-bottom: 0">Câu hỏi khi gặp</h3>
            {{justClick}}
            <button
              @click="addFreeString"
              :disabled="questionIndexSelected != null ? false : true"
              class="btn btn-primary btn-sticky"
            >Thêm tùy chuổi</button>
          </div>

          <div class="row">
            <div class="col-6" v-for="(item, index) in questionList" :key="index">
              <v-textarea
                :name="'txt'+index"
                style="margin: 0;"
                v-model="item.question"
                outlined
                :label="'Câu hỏi khi gặp: #' + (index+1)"
                placeholder
                @focus="selectQuestion(index)"
                @keydown="textChange"
                @click="justClick = true"
              ></v-textarea>
            </div>
            <div class="col-6 text-center" style="padding-top: 1.5rem">
              <button class="btn btn-success btn-lg" @click="addNewQuestion">Thêm câu hỏi</button>
            </div>
          </div>
        </div>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="dialog = false">Disagree</v-btn>
          <v-btn color="green darken-1" text @click="dialog = false">Agree</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
import { VueEditor } from "../../../node_modules/vue2-editor/dist/vue2-editor.core";

export default {
  components: { VueEditor },
  data() {
    // {...} // {...}
    return {
      dialog: false,
      questionList: [{ question: "<i class='fa fa-user'></i>" }],
      questionIndexSelected: null,
      currentIndex: 0,
      justClick: false
    };
  },
  methods: {
    addNewQuestion() {
      this.questionList.push({ question: "" });
    },
    selectQuestion(index) {
      this.questionIndexSelected = index;
    },
    addFreeString() {
      var textArea = document.getElementsByName(
        "txt" + this.questionIndexSelected
      )[0];
      let chip = " {...} ";
      let middle = textArea.selectionStart;
      let end = textArea.selectionEnd;
      let question = textArea.value;
      let before = question.substring(0, middle);
      let after = question.substring(end, question.length);
      
      if (!this.justClick) {
          before = question
          after = ''
      }
      console.log(before,'/',chip,'/',after)
      this.questionList[this.questionIndexSelected].question =
        before + chip + after;
      textArea.selectionStart += chip.length;
      this.questionList.push({});
      this.questionList.pop();
      this.justClick = false;
    },
    selectionChange(e) {
      this.currentIndex = e.index;
      console.log(e);
    },
    textChange() {
      this.currentIndex =
        this.questionList[this.questionIndexSelected].question.length + 1;
      console.log(this.currentIndex);
    }
  }
};
</script>
<style lang="scss" scoped>
@import "~vue2-editor/dist/vue2-editor.css";
@import "~quill/dist/quill.core.css";
@import "~quill/dist/quill.bubble.css";
@import "~quill/dist/quill.snow.css";
.sticky-container {
  position: -webkit-sticky;
  position: sticky;
  top: 0rem;
  padding-top: 1rem;
  z-index: 2;
  background: white;
}
</style>