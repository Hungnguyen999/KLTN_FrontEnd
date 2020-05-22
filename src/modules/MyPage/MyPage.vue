<template>
  <div class="account-page">
    <v-app style="hegith: auto;">
      <v-tabs hide-slider :value="mypageTab" vertical active-class class="my-tabs">
        <div class="tab-container">
          <v-tab
            :class="'info-tab' == mypageTab ? 'my-active-class' : '' "
            @click="goTab('info-tab')"
            class="my-tab"
            style="color: rgba(0,0,0,.54)"
          >
            <v-icon style="position: absolute;left: 1rem">mdi-account</v-icon>
            <span>Thông tin</span>
          </v-tab>

          <v-tab
            :class="'profile-tab' == mypageTab ? 'my-active-class' : '' "
            @click="goTab('profile-tab')"
            class="my-tab"
          >
            <v-icon style="position: absolute;left: 1rem">mdi-cog-counterclockwise</v-icon>
            <span>Giới thiệu</span>
          </v-tab>

          <v-tab
            :class="'course-tab' == mypageTab ? 'my-active-class' : '' "
            @click="goTab('course-tab')"
            class="my-tab"
          >
            <v-icon style="position: absolute;left: 1rem">mdi-book</v-icon>
            <span>Khóa học</span>
          </v-tab>

          <v-tab
            :class="'annouce-tab' == mypageTab ? 'my-active-class' : '' "
            @click="goTab('annouce-tab')"
            class="my-tab"
          >
            <v-icon style="position: absolute;left: 1rem">mdi-bell</v-icon>
            <span style="font-size: 13px;">Thông báo</span>
          </v-tab>

          <v-tab
            :class="'msg-tab' == mypageTab ? 'my-active-class' : '' "
            class="my-tab"
            @click="goTab('msg-tab')"
          >
            <v-icon style="position: absolute;left: 1rem">mdi-chat</v-icon>
            <span>Tin nhắn</span>
          </v-tab>
        </div>
        <v-tabs-items :value="mypageTab" class="list-item">
          <InfoTab :account="userUserInfo" :accountLoading="userUserInfoLoading"></InfoTab>
          <ProfileTab :account="userUserInfo"></ProfileTab>
          <CourseTab :account="userUserInfo"></CourseTab>
          <AnnouceAdminTab :account="userUserInfo" :accountLoading="userUserInfoLoading"></AnnouceAdminTab>
          <MessageTab :account="userUserInfo" :accountLoading="userUserInfoLoading"></MessageTab>
        </v-tabs-items>
      </v-tabs>
    </v-app>
  </div>
</template>
<script>
import InfoTab from "../../components/InfoTab/InfoTab";
import AnnouceAdminTab from "../../components/AnnouceAdminTab/AnnouceAdminTab";
import CourseTab from "../../components/CourseTab/CourseTab";
import MessageTab from "../../components/MessageTab/MessageTab";
import ProfileTab from "../../components/ProfileTab/ProfileTab";
import { mapGetters } from "vuex";
import { CommonService } from "../../service/common.service.js";
var commonService = new CommonService();
export default {
  components: { ProfileTab, InfoTab, AnnouceAdminTab, MessageTab, CourseTab },
  created() {
    this.$store.commit("ShowHeaderUser");
    this.$store.commit("ShowFooterUser");


    if (localStorage.token) {
      this.$store.dispatch("userInfo").then(response => {
        if (response.data.errorToken == true) {
          commonService.checkErrorToken(this, response.data.msg);
          this.$router.push({ name: "not-found-page" });
        } else {
          localStorage.token = response.data.token;
        }
      });
    } else {
      this.$router.push({ name: "not-found-page" });
    }

    this.checkPayment();
  },
  data() {
    return {
      status: [
        { code: "00", msg: "Giao dịch thành công" },
        { code: "07", msg: "Giao dịch bị nghi ngờ là giao dịch gian lận" },
        {
          code: "09",
          msg: "Giao dịch thất bại, tài khoản chưa liên kết internet banking"
        },
        { code: "11", msg: "Giao dịch thất bại, hết hạn giao dịch" },
        { code: "08", msg: "Giao dịch thất bại, ngân hàng bảo trì" }
      ]
    };
  },
  methods: {
    goTab(flag) {
      this.$store.commit("changeTab", flag);
    },
    checkPayment() {
      let flag = false;
      this.status.forEach(stt => {
        if (this.$route.query.status == stt.code) {
          icon = "";
          stt.code == "00" ? (icon = "success") : (icon = "error");
          this.$swal({
            icon: icon,
            title: stt.msg
          });
          flag = true;
          this.$store.commit('changeTab', 'course-tab')
        }
      });
      if (flag == false && this.$route.query.status != null) {
        this.$swal({
          icon: "error",
          title: "Đã xảy ra lỗi!"
        });
      }
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
.my-active-class {
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
      padding-left: 1rem;
      border: 1px solid #ece8e8;
    }
  }
}
</style>