<template>
  <div style="padding: 0 1rem;height: 33rem">
    <v-app style="height: 32rem;">
      <v-tabs hide-slider v-model="tab" vertical class="my-tabs">
        <div class="tab-container">
          <v-tab active-class="active-class" href="#info-tab" class="my-tab text-left">
            <v-icon style="position: absolute;left: 1rem">mdi-account</v-icon>
            <span>Thông tin</span>
          </v-tab>

          <v-tab active-class="active-class text-left" href="#annouce-tab" class="my-tab">
            <v-icon style="position: absolute;left: 1rem">mdi-bell-alert</v-icon>
            <span style="font-size: 13px;">Thông báo</span>
          </v-tab>

          <v-tab active-class="active-class text-left" class="my-tab" href="#msg-tab">
            <v-icon style="position: absolute;left: 1rem">mdi-chat-alert</v-icon>
            <span>Tin nhắn</span>
          </v-tab>
        </div>
        <v-tabs-items v-model="tab" class="list-item">
          <InfoAdminTab></InfoAdminTab>
          <AnnouceAdminTab></AnnouceAdminTab>
          <MessageAdminTab></MessageAdminTab>
        </v-tabs-items>
      </v-tabs>
    </v-app>
  </div>
</template>
<script>
import InfoAdminTab from "../../components/InfoAdminTab/InfoAdminTab";
import AnnouceAdminTab from "../../components/AnnouceAdminTab/AnnouceAdminTab";
import MessageAdminTab from "../../components/MessageAdminTab/MessageAdminTab";
export default {
  components: { InfoAdminTab, AnnouceAdminTab, MessageAdminTab },
  created() {
    console.log(this.$route);
  },
  data() {
    return {
      tab: null
    };
  }
};
</script>
<style lang="scss" scoped>
a {
  text-decoration: none;
  &:hover {
    text-decoration: none;
  }
}
.active-class {
  color: #79589f !important;
  border-bottom: #79589f !important;
  background: whitesmoke !important;
}
div {
  width: 100%;
  margin: 1rem 0;
  .my-tabs {
    border: 1px solid #ece8e8;
    border-radius: 5px;
    text-align: left;
    padding-left: 1rem;
    max-height: 24.1rem !important;
    .tab-container {
      border: 1px solid;
      height: 100%;
      width: 13rem;
      border: 1px solid #ece8e8;
      border-radius: 5px;
      .my-tab {
        width: 100% !important;
      }
      .v-tab {
        padding: 0 !important;
        padding-left: -1rem !important;
        text-align: left !important;
      }
    }
    .list-item {
      margin: 0 1rem;
      border-radius: 5px;
    }
  }
}
</style>