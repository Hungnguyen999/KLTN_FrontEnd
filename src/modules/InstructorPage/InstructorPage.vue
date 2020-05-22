<template>
  <div class="my-container">
    <LeftMenu :list="list"></LeftMenu>
    <v-app style="background: rgb(244, 243, 239)">
      <div class="instructor-control" style="position: relative;background: #f4f3ef;width: 100%">
        <AnnouceButton style="position: absolute; right: 3rem;top: 0;z-index: 2"></AnnouceButton>
        <UserButton
          class="btn-user"
          style="position: absolute; right: 0.5rem;top: 0;z-index: 2"
          :account="userUserInfo"
        ></UserButton>
      </div>
      <div class="row" style="background: #f4f3ef;height:100%">
        <div class="col-11 offset-1" style="padding-top: 2.5rem">
          <div class="my-content">
            <router-view></router-view>
          </div>
        </div>
      </div>
    </v-app>
  </div>
</template>
<script>
import AnnouceButton from "../../components/HeaderAnnouceList/HeaderAnnouceList";
import UserButton from "../../components/HeaderUserButton/HeaderUserButton";
import LeftMenu from "../../components/LeftMenu_Ins_Admin/LeftMenu_Ins_Admin";
import { mapGetters } from "vuex";
import { CommonService } from "../../service/common.service.js";
var commonService = new CommonService();
export default {
  components: { AnnouceButton, LeftMenu, UserButton },
  data() {
    return {
      list: [
        {
          // course list
          header: "Khóa học",
          icon: "far fa-play-circle fa-lg",
          items: [
            {
              title: "Danh sách khóa học",
              icon: "fas fa-circle fa-sm",
              routeName: "ins-course-page"
            },
            {
              title: "Danh sách bài học",
              icon: "fas fa-circle fa-sm",
              routeName: "ins-lesson-page"
            }
          ]
        },
        {
          // communication list
          header: "Tương tác",
          icon: "far fa-comment-alt fa-lg",

          items: [
            {
              title: "Tin nhắn",
              icon: "fas fa-circle fa-sm",
              routeName: "ins-message-page"
            },
            {
              title: "Thông báo",
              icon: "fas fa-circle fa-sm",
              routeName: "ins-annouce-page"
            }
          ]
        },
        {
          header: "Thống kê",
          icon: "far fa-chart-bar fa-lg",
          items: [{ title: "Tổng quan", icon: "fas fa-circle fa-sm" }]
        }
      ]
    };
  },
  created() {
    this.$store.commit("HideHeaderUser");
    this.$store.commit("HideFooterUser");
    this.$store.commit("HideAutoAnswer");
    if (localStorage.token) {
      this.$store.dispatch("userInfo").then(response => {
        if (response.data.errorToken == true) {
          commonService.checkErrorToken(this, response.data.msg);
        } else {
          localStorage.token = response.data.token;
        }
      });
    } else {
      this.$router.push({ name: "not-found-page" });
    }
  },
  methods: {
    redirect(name) {
      this.$router.push({ name: name });
    }
  },
  computed: {
    ...mapGetters({
      userUserInfo: "userUserInfo",
      guestHideAutoAnswer: "guestHideAutoAnswer"
    })
  }
};
</script>
<style lang="scss" scoped>
.instructor-control {
  text-align: right;
  right: 0;
  margin: 0;
  margin-right: 1rem;
  height: auto;
}
.left-menu {
  position: fixed;
  background-color: #52143e;
  z-index: 1;
}
.my-container {
  .row {
    margin-top: 0;
    .col-3 {
      padding-top: 0;
      z-index: 2;
    }
    .col-9 {
      padding-top: 0;
    }
    .col-11 {
      padding-right: 1.5rem;
    }
  }
}

.my-nav-item {
  font-size: 15px;
  font-weight: 400;
}
</style>