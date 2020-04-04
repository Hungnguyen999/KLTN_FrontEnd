<template>
  <div class="account-page">
    <v-app style="hegith: auto;">
      <v-tabs hide-slider :value="mypageTab" vertical class="my-tabs">
        <div class="tab-container">
          <v-tab active-class="active-class" @click="goTab('info-tab')" class="my-tab">
            <v-icon style="position: absolute;left: 1rem">mdi-account</v-icon>
            <span>Thông tin</span>
          </v-tab>

          <v-tab active-class="active-class" @click="goTab('profile-tab')" class="my-tab">
            <v-icon style="position: absolute;left: 1rem"> mdi-cog-counterclockwise</v-icon>
            <span>Giới thiệu</span>
          </v-tab>

          <v-tab active-class="active-class" @click="goTab('annouce-tab')" class="my-tab">
            <v-icon style="position: absolute;left: 1rem">mdi-bell-alert</v-icon>
            <span style="font-size: 13px;">Thông báo</span>
          </v-tab>

          <v-tab active-class="active-class" class="my-tab" @click="goTab('msg-tab')">
            <v-icon style="position: absolute;left: 1rem">mdi-chat-alert</v-icon>
            <span>Tin nhắn</span>
          </v-tab>
        </div>
        <v-tabs-items :value="mypageTab" class="list-item">
          <InfoAdminTab :account="userUserInfo" :accountLoading="userUserInfoLoading"></InfoAdminTab>
          <ProfileTab :account="userUserInfo"></ProfileTab>
          <AnnouceAdminTab :account="userUserInfo" :accountLoading="userUserInfoLoading"></AnnouceAdminTab>
          <MessageAdminTab :account="userUserInfo" :accountLoading="userUserInfoLoading"></MessageAdminTab>
        </v-tabs-items>
      </v-tabs>
    </v-app>
  </div>
</template>
<script>
import InfoAdminTab from "../../components/InfoAdminTab/InfoAdminTab";
import AnnouceAdminTab from "../../components/AnnouceAdminTab/AnnouceAdminTab";
import MessageAdminTab from "../../components/MessageAdminTab/MessageAdminTab";
import ProfileTab from "../../components/ProfileTab/ProfileTab"
import { mapGetters } from "vuex";
import { CommonService } from "../../service/common.service.js";
var commonService = new CommonService();
export default {
  components: { ProfileTab,InfoAdminTab, AnnouceAdminTab, MessageAdminTab },
  created() {
    if (localStorage.token) {
      this.$store.dispatch("userInfo").then(response => {
        if (response.data.errorToken == true) {
          commonService.checkErrorToken(this, response.data.msg);
        } else {
          localStorage.token = response.data.token;
        }
      });
    }
  },
  data() {
    return {};
  },
  methods: {
    goTab(flag) {
      this.$store.commit("changeTab", flag);
    }
  },
  computed: {
    ...mapGetters({
      mypageTab: "mypageTab",
      userUserInfo: "userUserInfo",
      userUserInfoLoading: "userUserInfoLoading"
    })
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
.account-page {
  .my-tabs {
    padding: 1rem;
    .tab-container {
      height: 100%;
      width: 14rem;
      padding: 1rem 0.5rem;
      border: 1px solid #ece8e8;
      border-radius: 5px;
      .v-tab {
        border-radius: 10px;
      }
    }
    .list-item {
      position: relative;
      border-radius: 5px;
      margin-left: 1rem;
      padding-top: 1rem;
      padding-bottom: 1rem;
      padding-left: 2rem;
      border: 1px solid #ece8e8;
    }
  }
}
</style>