<template>
  <div>
    <v-app
      style="position: fixed;bottom:0;right: 0rem;width: auto;height: 2.2rem;background-color: transparent;z-index: 6"
    >
      <v-btn
        color="green darken-1"
        style="color: white;"
        v-b-toggle.sidebar-right
        @click="checkLogin()"
      >Tư vấn tự động trực tuyến</v-btn>
      <b-sidebar
        no-header
        id="sidebar-right"
        width="350px"
        title="Tư vấn tự động"
        right
        shadow
        style
      >
        <template v-slot:default="{ hide }">
          <div class="my-sidebar-container">
            <div class="my-header-sidebar">
              <v-icon class="my-icon" @click="hide">mdi-backspace</v-icon>
            </div>
            <div v-if="flag" class="my-sidebar-content-container">
              <div class="message-box" ref="messageBox">
                <div
                  v-for="(message,index) in messageList"
                  :key="index"
                  style="margin: 0.5rem 0;heigth: 100%;"
                >
                  <div :ref="'message'+index" v-if="message.user == null" class="fromBot">
                    <div class="row" style="margin: 0.5rem 0">
                      <div class="col-2" style="padding:0">
                        <b-avatar
                          v-if="messageList[index+1] == null || (messageList[index+1] != null && messageList[index+1].user != null)"
                          text="BOT"
                        ></b-avatar>
                      </div>
                      <div class="col-10" style="padding:0">
                        <div
                          class="action-answers-container"
                          v-if="message.type_question_bot_id == 1"
                        >
                          <span><i>Xin hãy chọn vào vấn đề Bạn cần giải đáp!</i></span>
                          <div v-for="(question,indexq) in message.questions" :key="indexq">
                            <div
                              class="action-answer"
                              @click="autoSendMessage(question)"
                              :ref="'message'+index"
                            >{{question.question}}</div>
                          </div>
                        </div>
                        <div v-else class="text-answers-container">
                          <div v-for="(answer,indexa) in message.answers" :key="indexa">
                            <div class="text-left text-answer">{{answer.answer}}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div :ref="'message'+index" v-else class="fromUser">
                    <label>{{message.user.message}}</label>
                  </div>
                  <div id="myScrollDown"></div>
                </div>
              </div>
              <div class="send-message-box" style="position: relative">
                <textarea
                  class="my-message"
                  v-model="message"
                  outlined
                  style="width: 81%;height: 100%;"
                  @keyup.enter.exact="sendMessage"
                ></textarea>
                <v-btn
                  style="position:absolute;top:0;right:0;border-radius: 0;height: 100%;color: whitesmoke"
                  width="3rem"
                  height="3rem"
                  color="#2595BB"
                  @click="sendMessage"
                >
                  <span style="font-size: 12px">Gửi tin</span>
                </v-btn>
              </div>
            </div>
            <div v-else>
              <v-text-field
                style="margin: 1rem;margin-top: 10rem"
                placeholder="Nhập tên của bạn"
                v-model="userName"
                outlined
              ></v-text-field>
              <v-btn
                :disabled="userName === ''"
                color="primary"
                style="width: 91%;margin: 1rem;margin-top: -2rem;"
                @click="startChatBot()"
              >Bắt đầu</v-btn>
            </div>
          </div>
        </template>
      </b-sidebar>
    </v-app>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      messageList: [],
      message: "",
      userName: "",
      flag: false,
      firstMessage: true,
      start: false
    };
  },
  methods: {
    startChatBot() {
      this.flag = true;
      this.message = "Bắt đầu";
      this.sendMessage();
      this.messageList.push({
        type_question_bot_id: 2,
        answers: [
          { answer: "Xin chào " + this.userName },
          { answer: "Mình là BOT, Mình có thể giúp gì cho Bạn" }
        ]
      });
      this.firstMessage = false;
    },
    scrollToLastMessage() {
      let vm = this;
      setTimeout(function() {
        let lastMessage = "message" + (vm.messageList.length - 1);
        if (vm.$refs[lastMessage].length > 1) {
          for (let i = 0; i < vm.$refs[lastMessage].length; i++) {
            if (vm.$refs[lastMessage][i].className == "fromBot") {
              vm.$refs.messageBox.scrollTop =
                vm.$refs.messageBox.scrollHeight +
                vm.$refs[lastMessage][i].clientHeight;
              break;
            }
          }
        } else {
          vm.$refs.messageBox.scrollTop =
            vm.$refs.messageBox.scrollHeight +
            vm.$refs[lastMessage][0].clientHeight;
        }
      }, 100);
    },
    sendMessage() {
      let msg = this.message;
      this.message = "";
      if (msg.trim().length !== 0) {
        this.messageList.push({
          user: { userName: this.userName, message: msg }
        });
        this.scrollToLastMessage();
        if (!this.guestBotLoading && !this.firstMessage) {
          this.$store.dispatch("guestChatBot", msg).then(() => {
            this.messageList.push(this.guestBotObject);
            this.scrollToLastMessage();
            let vm = this;
          });
        }
      }
    },
    autoSendMessage(question) {
      this.messageList.push({
        user: { userName: this.userName, message: question.question }
      });
      this.scrollToLastMessage();
      if (!this.guestBotLoading) {
        this.$store.dispatch("guestChatBot", question.question).then(() => {
          this.messageList.push(this.guestBotObject);
          this.scrollToLastMessage();
        });
      }
    },
    checkLogin() {
      if(this.userUserInfo != null && this.start == false) {
        this.userName = this.userUserInfo.name
      }
    }
  },
  computed: {
    ...mapGetters({
      guestBotLoading: "guestBotLoading",
      guestBotObject: "guestBotObject",
      userUserInfo: 'userUserInfo'
    })
  }
};
</script>
<style lang="scss" scoped>
.text-answers-container {
  width: 100%;
  margin-left: -0.7rem;
  .text-answer {
    display: inline-block;
    width: auto;
    border-radius: 5px;
    padding: 0.5rem;
    background-color: silver;
    margin: 0.3rem 0;
  }
}

.action-answers-container {
  width: 100%;
  margin-left: -0.7rem;
  .action-answer {
    cursor: pointer;
    font-style: italic;
    text-decoration: underline;
    display: inline-block;
    width: auto;
    border-radius: 5px;
    padding: 0.5rem;
    color: black;
    background-color: silver;
    margin: 0.3rem 0;
  }
}

.my-header-sidebar {
  text-align: right;
  width: 100%;
  height: 7%;
  .my-icon {
    margin-top: 0.5rem;
    margin-right: 1rem;
    font-size: 2rem;
  }
}
.my-sidebar-container {
  height: 100%;
}
.my-sidebar-content-container {
  overflow: hidden;
  height: 93%;
}
.message-box {
  width: 100%;
  height: 34.5rem;
  padding: 0.5rem;
  padding-bottom: 0.5rem;
  font-weight: 500;
  font-size: 14px;
  overflow-y: auto;
  .fromUser {
    width: 100%;
    text-align: right;
    word-break: break-all;
    label {
      text-align: right;
      min-height: 2rem;
      max-width: 80%;
      padding: 0.5rem;
      width: auto;
      background-color: #2595bb;
      color: white;
      border-radius: 5px;
    }
  }
  .fromBot {
    width: 100%;
    text-align: left;
  }
}
input {
  &:focus {
    outline: 0px !important;
    -webkit-appearance: none;
    box-shadow: none !important;
  }
}
.send-message-box {
  border: 1px solid silver;
  margin: 0 0.1rem;
  padding: 0.5rem 0 0 0.5rem;
  width: 100%;
  height: 4rem;
  border-radius: 3px;
  .my-message {
    &:focus {
      outline: none;
    }
  }
}
</style>