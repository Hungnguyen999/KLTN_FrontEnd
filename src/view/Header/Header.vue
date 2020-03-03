<template>
  <div id="header">
    <b-navbar toggleable="lg" type="light" variant="default">
      <b-navbar-brand :href="baseURL">
        <b-img
          rounded="circle"
          style="width: 4rem; height: 4rem"
          src="https://cdn2.vectorstock.com/i/1000x1000/63/61/education-logo-vector-11136361.jpg"
        ></b-img>&nbsp;
        <span style="position: absolute;margin-top: 0.5rem;margin-left: 0.5rem">
          <div>
            <b>GoodLearning</b>
          </div>
          <div style="font-size: 9pt;">
            <i>
              <b>Học tập Online</b>
            </i>
          </div>
        </span>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <DropdownCategory></DropdownCategory>
          <input class="form-control input-search" placeholder="Search..." type="text" />
          <button class="btn btn-info btn-search">
            <i class="fa fa-search"></i>
          </button>
          <button class="btn btn-default normal-button">Miễn Phí</button>
          <div style="border-left: 1px solid;margin-right: 1rem;"></div>
          <button class="btn btn-default normal-button">Khóa Học</button>
          <div v-if="!loadStateLogin">
            <button class="btn btn-default circle-button normal-button">
              <i class="fa fa-shopping-cart"></i>
            </button>
            <button
              v-b-modal.login-modal
              class="btn btn-outline-secondary"
              style="margin-right: 1rem;"
            >Log In</button>
            <button v-b-modal.singup-modal class="btn btn-outline-danger">Sign Up</button>
            <Login_Modal></Login_Modal>
            <Singup_Modal></Singup_Modal>
          </div>
          <div v-if="loadStateLogin">
            <button class="btn btn-default circle-button normal-button">
              <i class="fa fa-shopping-cart"></i>
            </button>
            <button class="btn btn-default circle-button normal-button">
              <i class="fas fa-heart" style="color: red;"></i>
            </button>
            <button class="btn btn-default circle-button normal-button">
              <i class="fas fa-bell"></i>
            </button>
            <button class="btn btn-default circle-button-lg normal-button" style="margin-right: 0;">
              <i class="fas fa-user-circle fa-2x"></i>
            </button>
          </div>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <button @click="change()">Change</button>
    <button @click="promise()">test </button>
  </div>
</template>
<script>
import apiURL from "../../API/api.json";
import DropdownCategory from "../../components/Dropdown_Category/Dropdown_Category";
import Login_Modal from "../../components/Login_Modal/Login_Modal";
import Singup_Modal from "../../components/SignUp_Modal/SignUp_Modal";
import axios from "axios"
export default {
  components: { DropdownCategory, Login_Modal, Singup_Modal },
  data() {
    return {
      baseURL: apiURL.baseURL,
      isLogin: false
    };
  },
  methods: {
    checkLogin() {
      return localStorage.token && localStorage.token != "";
    },
    change() {
      if (this.checkLogin()) {
        localStorage.removeItem("token");
        this.isLogin = false;
      } else {
        localStorage.token = "co";
        this.isLogin = true;
      }
    },
    promise() {
      axios.post('http://localhost:8000/test', {}, {params: {input: 'vinh'}})
      .then(response => {
        console.log(response.data)
      })
    }
  },
  computed: {
    loadStateLogin() {
      return this.isLogin;
    }
  }
};
</script>
<style lang="scss" scoped>
.circle-button-lg {
  border-radius: 100px;
}
.circle-button {
  border-radius: 20px;
}
button {
  margin-right: 1rem;
  &:focus {
    outline: 0px !important;
    -webkit-appearance: none;
    box-shadow: none !important;
  }
}
.normal-button:hover {
  background-color: #ece8e8;
}
#header {
  font-family: "Quicksand";
}
.btn-search {
  height: 2.5rem;
  border-radius: 0 5px 5px 0;
}
.input-search {
  width: 20rem;
  height: 2.5rem;
  border-radius: 5px 0 0 5px;
  &:focus {
    outline: 0px !important;
    -webkit-appearance: none;
    box-shadow: none !important;
  }
}
.input-search:-moz-placeholder {
  text-align: left;
}
::-webkit-input-placeholder {
  text-align: left;
}
</style>