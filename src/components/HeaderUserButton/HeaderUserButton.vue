<template>
  <div style="margin: 0 0.5rem">
    <v-menu open-on-hover offset-y :close-on-content-click="false" :close-on-click="false">
      <template v-slot:activator="{ on }">
        <button class="hover-button" v-on="on">
          <v-icon style="color: black;" size="20">mdi-account</v-icon>
        </button>
      </template>
      <v-card class="my-card" width="250">
        <div class="text-center">
          <div class="email">
            <b-img
              rounded="circle"
              :src="avatarURL"
              style="width: 3rem;height: 3rem;margin-bottom: 0.5rem;"
            />
            <br />
            <span>{{account.name}}</span>
            <br />
            <span>{{account.user_id}}</span>
          </div>
        </div>
        <div class="item-container">
          <a class="my-card-item" @click="goTab('info-tab')" type="button">
            <i class="fas fa-user"></i> Thông tin cá nhân
          </a>
        </div>
        <div class="item-container">
          <a class="my-card-item" @click="goTab('course-tab')" type="button">
            <i class="fas fa-book"></i> Khóa học của tôi
          </a>
        </div>
        <div class="item-container">
          <a class="my-card-item" @click="goTab('annouce-tab')" type="button">
            <i class="fas fa-bell"></i> Thông báo
          </a>
        </div>
        <div class="item-container">
          <a class="my-card-item" @click="goTab('msg-tab')" type="button">
            <i class="fas fa-comment"></i> Tin nhắn
          </a>
        </div>
        <div class="item-container">
          <a class="my-card-item" @click="logOut" type="button">
            <i class="fas fa-long-arrow-alt-right"></i> Đăng xuất
          </a>
        </div>
      </v-card>
    </v-menu>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import apiConfig from "../../API/api.json";
export default {
  computed: {
    ...mapGetters({
      userUserInfo: "userUserInfo",
      userUserInfoLoading: "userUserInfoLoading",
      userCourseLikeList: "userCourseLikeList",
      userCourseLikeLoading: "userCourseLikeLoading"
    })
  },
  data() {
    return {
      avatarURL: ""
    };
  },
  created() {
    if (this.account.social_id != null && this.account.avatar) {
      this.avatarURL = this.account.avatar
    } else {
      this.avatarURL =
        apiConfig.apiURL +
        "/uploads/users/" +
        this.account.user_id +
        "/avatar.png";
    }
  },
  props: ["account"],
  methods: {
    goTab(flag) {
      this.$store.commit("changeTab", flag);
      if (this.$route.name != "my-page") {
        this.$router.push({ name: "my-page" });
      }
    },
    logOut() {
      localStorage.removeItem("token");
      window.location.href = apiConfig.baseURL;
    }
  }
};
</script>
<style lang="scss" scoped>
.email {
  width: 100%;
  padding: 0.5rem 0;
  color: #52143e; //#79589f;
  &:hover {
    background-color: #e9f9f3;
    opacity: 1;
    font-weight: bolder;
  }
}

.my-card {
  background-color: white;
  .item-container {
    width: 100%;
    height: 2.5rem;
    padding-top: 0.5rem;
    cursor: pointer;
    .my-card-item {
      width: 100%;
      padding-left: 1rem;
      color: #52143e; //#79589f;
      font-weight: 500;
      opacity: 0.8;
    }
    &:hover {
      background-color: #e9f9f3;
      .my-card-item {
        position: relative;
        opacity: 1;
        font-weight: bolder;
        animation-name: example;
        animation-duration: 1s;
      }
    }
  }
}
@keyframes example {
  0% {
    left: 0px;
  }
  100% {
    left: 10px;
  }
}
.hover-button {
  width: 2.5rem;
  height: 2.5rem;
  padding-top: 0rem;
  border-radius: 50%;
  &:hover {
    background-color: #ece8e8;
  }
  &:focus {
    outline: none;
  }
}

.ow1-dropdown-menu {
  width: 15rem;
}
.my-btn:hover .dropdown-menu {
  display: block;
}

i.fas {
  margin-right: 1rem;
}
</style>