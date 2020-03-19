<template>
  <div id="header" v-if="loadStudent">
    <div class="page-container">
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
            <a v-if="!loadStateLogin" href="google" class="btn normal-button">Miễn phí</a>
            <a v-if="loadStateLogin" :href="baseURL + '/instructor'" class="btn normal-button">Giảng Viên</a>
            <div style="border-left: 1px solid;margin-right: 1rem;"></div>
            <button class="btn normal-button" id="mycourse">Khóa Học</button>
            <b-popover target="mycourse" triggers="hover" placement="top">
              <div v-for="i in 3" :key="i">
                <ItemOfListMyCourse></ItemOfListMyCourse>
              </div>
              <div style="margin-top: 1rem;width:100%">
                <button style="width:100%;" class="btn btn-info">Xem thêm</button>
              </div>
            </b-popover>
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
            </div>
            <div v-if="loadStateLogin">
              <button class="btn btn-default circle-button normal-button" id="cart">
                <i class="fa fa-shopping-cart"></i>
              </button>
              <b-popover target="cart" triggers="hover" placement="top">
                <div v-for="i in 3" :key="i">
                  <ItemOfList></ItemOfList>
                </div>
                <div style="margin-top: 1rem;width:100%">
                  <button style="width:100%;" class="btn btn-info">Xem thêm</button>
                </div>
              </b-popover>
              <button
                id="like"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                class="btn btn-default circle-button normal-button"
              >
                <i class="fas fa-heart" style="color: red;"></i>
              </button>
              <b-popover target="like" triggers="hover" placement="top">
                <div v-for="i in 3" :key="i">
                  <ItemOfList></ItemOfList>
                </div>
                <div style="margin-top: 1rem;width:100%">
                  <button style="width:100%;" class="btn btn-info">Xem thêm</button>
                </div>
              </b-popover>
              <button
                id="annouce"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                class="btn btn-default circle-button normal-button"
              >
                <i class="fas fa-bell"></i>
              </button>
              <b-popover target="annouce" triggers="hover" placement="top">
                <ul>
                  <li>item 1item 1item 1item 1item 1item 1item 1item 1item 1item 1item 1item 1</li>
                  <li>item 1</li>
                  <li>item 1</li>
                  <li>item 1</li>
                  <li>item 1</li>
                </ul>
              </b-popover>

              <button
                id="user"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                class="btn btn-default circle-button normal-button"
              >
                <i class="fa fa-user"></i>
                <b-popover target="user" triggers="hover" placement="top">
                  <ul>
                    <li>item 1item 1item 1item 1item 1item 1item 1item 1item 1item 1item 1item 1</li>
                    <li>item 1</li>
                    <li>item 1</li>
                    <li>item 1</li>
                    <li>item 1</li>
                  </ul>
                </b-popover>
              </button>
            </div>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    <Login_Modal></Login_Modal>
    <Singup_Modal></Singup_Modal>
  </div>
</template>
<script>
import DropdownCategory from "../../components/Dropdown_Category/Dropdown_Category";
import Login_Modal from "../../components/Login_Modal/Login_Modal";
import Singup_Modal from "../../components/SignUp_Modal/SignUp_Modal";
import ItemOfListMyCourse from "../../components/ItemOfListMyCourse/ItemOfListMyCourse";
import ItemOfList from "../../components/ItemOfList/ItemOfList";
import apiConfig from "../../API/api.json";
import { mapGetters } from "vuex"
export default {
  components: {
    DropdownCategory,
    Login_Modal,
    Singup_Modal,
    ItemOfListMyCourse,
    ItemOfList
  },
  data() {
    return {
      isLogin: false,
      isStudent: true,
      baseURL: apiConfig.baseURL
    };
  },
  methods: {
    checkLogin() {
      return localStorage.token && localStorage.token != "";
    }
  },
  created() {
    if (localStorage.token) this.isLogin = true;
    else this.isLogin = false;
    if(this.$route.meta.instructor == true) {
      this.isStudent = false
    }
  },
  computed: {
    ...mapGetters({
    }),
    loadStateLogin() {
      return this.isLogin;
    },
    loadStudent() {
      return this.isStudent
    }
  }
};
</script>
<style lang="scss" scoped>
.circle-button-lg {
  border-radius: 50%;
}
.circle-button {
  border-radius: 20px;
}
button,a {
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
.normal-button {
  height: 2.5rem;
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
.my-group-icon {
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
  .dropdown {
    .btn:hover .dropdown-menu {
      display: block;
    }
  }
}
</style>