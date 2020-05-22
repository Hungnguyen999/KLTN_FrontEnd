<template>
  <div>
    <button
      data-toggle="dropdown"
      aria-haspopup="true"
      aria-expanded="false"
      class="my-btn btn btn-default normal-button text-center"
      style="margin-right: 0;"
    >
      <i class="fa fa-user"></i>
    </button>
    <div class="dropdown-menu ow1-dropdown-menu dropdown-menu-right">
      <i class="dropdown-item text-center">
        <b-img
          rounded="circle"
          src="https://cdn2.vectorstock.com/i/1000x1000/63/61/education-logo-vector-11136361.jpg"
          style="width: 3rem;height: 3rem;margin-bottom: 0.5rem;"
        />
        <br />
        <span class="userName">{{account.name}}</span>
        <br />
        <span class="email">{{account.user_id}}</span>
      </i>
      <a class="dropdown-item" href="#" @click="goTab('info-tab')">
        <i class="fas fa-user"></i> Thông tin cá nhân
      </a>
      <a class="dropdown-item" href="#" @click="goTab('annouce-tab')">
        <i class="fas fa-bell"></i> Thông báo
      </a>
      <a href="#" class="dropdown-item" @click="goTab('msg-tab')">
        <i class="fas fa-comment"></i> Tin nhắn
      </a>
      <a class="dropdown-item" @click="logOut" type="button">
        <i class="fas fa-long-arrow-alt-right"></i> Đăng xuất
      </a>
    </div>
  </div>
</template>
<script>
import apiConfig from "../../API/api.json";
export default {
  created() {
    //annouce
    //message
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
.ow1-dropdown-menu {
  width: 15rem;
}
.my-btn:hover .dropdown-menu {
  display: block;
}

.dropdown-menu {
  &:hover {
    -webkit-box-shadow: 0px 0px 10px 2px rgba(131, 124, 127, 1);
    -moz-box-shadow: 0px 0px 10px 2px rgba(131, 124, 127, 1);
    box-shadow: 0px 0px 10px 2px rgba(131, 124, 127, 1);
  }
  padding: 0;
}
i.fas {
  margin-right: 1rem;
}
.dropdown-item {
  &:first-child {
    height: 8rem;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
    color: #000000;
    &:hover {
      cursor: pointer;
    }
  }
  &:last-child {
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }
  &:hover {
    background-color: #e9f9f3;
    opacity: 1;
    font-weight: bolder;
    color: #52143e; //79589f;
    .userName {
      font-weight: bolder;
      color: #52143e; //#79589f;
    }
  }
  padding: 0.5rem 1rem;
  border: 0.5px solid #ece8e8;
  color: #52143e; //#79589f;
  font-weight: 500;
  opacity: 0.8;
  .email {
    margin-top: 1rem;
    color: silver;
  }
}
button:focus {
  outline: 0px !important;
  -webkit-appearance: none;
  box-shadow: none !important;
}
.normal-button:hover {
  &:hover {
    border-radius: 50%;
    background-color: #ece8e8;
    .dropdown-menu {
      display: block;
    }
  }
}
</style>