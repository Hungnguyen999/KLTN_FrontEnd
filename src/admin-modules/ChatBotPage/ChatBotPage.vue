<template>
  <div>
    <v-app>
      <v-tabs>
        <v-tabs-slider></v-tabs-slider>
        <v-tab @click="changeTab('msg-bot-tab')">Quản lý tin nhắn</v-tab>
        <v-tab @click="changeTab('question-bot-tab')">Quản lý câu hỏi</v-tab>

        <v-tabs-items v-model="currentTab" class="list-item">
          <AdminMessageBot></AdminMessageBot>
          <AdminQuestionBot></AdminQuestionBot>
        </v-tabs-items>
      </v-tabs>
    </v-app>
  </div>
</template>
<script>
import AdminQuestionBot from "../../components/AdminQuestionBot/AdminQuestionBot.vue";
import AdminMessageBot from "../../components/AdminMessageBot/AdminMessageBot.vue";
export default {
  components: { AdminQuestionBot, AdminMessageBot },
  data() {
    return {
      currentTab: "msg-bot-tab"
    };
  },
  methods: {
    changeTab(tab) {
      this.currentTab = tab;
      if (tab == "question-bot-tab") {
        this.$store.dispatch("adminGetQuestionBot");
      } else this.$store.dispatch("adminGetMessageBot");
    }
  }
};
</script>
<style scoped>
</style>