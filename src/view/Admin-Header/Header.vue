<template>
  <div id="header">
    <b-navbar toggleable="lg" type="light" variant="default">
      <b-navbar-brand :href="baseURL">
        <b-img
          rounded="circle"
          style="width: 4rem; height: 4rem"
          src="https://cdn2.vectorstock.com/i/1000x1000/63/61/education-logo-vector-11136361.jpg"
        ></b-img>&nbsp;
        <span
          style="position: absolute;margin-top: 0.5rem;margin-left: 0.5rem;color: #79589f"
        >
          <div>
            <b>GoodLearning</b>
          </div>
          <div style="font-size: 9pt;">
            <i>
              <b>Education Company</b>
            </i>
          </div>
        </span>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <div class="btn-group" v-if="loadEmp">
            <button
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              class="btn circle-button-lg normal-button"
              style="margin-right: 0;"
            >
              <i class="fas fa-list fa-lg"></i>
            </button>
            <div class="dropdown-menu ow2-dropdown-menu dropdown-menu-right">
              <i class="dropdown-item">
                <div class="row">
                  <div class="col-4">
                    <router-link :to="{name: 'category-page'}" class="btn">
                      <div>
                        <i class="fab fa-elementor fa-2x"></i>
                      </div>
                      <p>Thể loại</p>
                    </router-link>
                  </div>
                  <div class="col-4">
                    <router-link :to="{name: 'topic-page'}" class="btn">
                      <div>
                        <i class="fa fa-cubes fa-2x" aria-hidden="true"></i>
                      </div>
                      <p>Lĩnh vực</p>
                    </router-link>
                  </div>
                  <div class="col-4">
                    <router-link :to="{name: 'chatbot-page'}" class="btn">
                      <div style="margin-left: 0.5rem">
                        <i class="fas fa-robot fa-2x"></i>
                      </div>
                      <p style="word-break: break-all;">ChatBot</p>
                    </router-link>
                  </div>
                </div>
                <div class="row">
                  <div class="col-4">
                    <router-link :to="{name: 'course-page'}" class="btn">
                      <div>
                        <i class="fab fa-youtube fa-2x"></i>
                      </div>
                      <p>Khóa học</p>
                    </router-link>
                  </div>
                  <div class="col-4">
                    <router-link :to="{name: 'statistical-page'}" class="btn">
                      <div style="margin-left: 0.85rem">
                        <i class="fas fa-chart-bar fa-2x"></i>
                      </div>
                      <p>Thống kê</p>
                    </router-link>
                  </div>
                </div>
              </i>
            </div>
          </div>
          <UserMenuButton :account="loadAdmin"></UserMenuButton>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
<script>
import apiConfig from "../../API/api.json";
import UserMenuButton from "../../components/UserMenuButton/UserMenuButton";
export default {
  components: { UserMenuButton },
  created() {
    this.emp = this.$route.meta.emp
    switch (this.emp == true) {
      case true:
        this.baseURL = apiConfig.baseURL + "/admin/emp";
        break;
      case false:
        this.baseURL = apiConfig.baseURL + "/admin/it";
        break;
    }
    if (localStorage.admin && localStorage.adminToken) {
      this.$swal.close()
      this.admin = JSON.parse(localStorage.admin);
      this.admin.id = this.admin.admin_id;
    } else {
      this.errorLogin();
    }
  },
  data() {
    return {
      baseURL: "",
      emp: false,
      admin: {}
    };
  },
  methods: {
    myAlert(icon, title, text) {
      if (title == "") title = "Thông báo";
      this.$swal({
        icon: icon,
        title: title,
        text: text
      });
    },
    errorLogin() {
      new Promise(() => {
        this.myAlert(
          "error",
          "Thông báo",
          "Lỗi đăng nhập, vui lòng đăng nhập lại"
        );
      });
      //this.$router.push({name: 'admin-login'})
    }
  },
  computed: {
    loadEmp() {
      return this.emp;
    },
    loadAdmin() {
      return this.admin;
    }
  },
  updated() {
    console.log("b update");
  }
};
</script>
<style lang="scss" scoped>
#header {
  border-bottom: 3px solid;
  border-image: linear-gradient(
      to right,
      #79589f 30%,
      #40c3ea 70%,
      #a1f5c1 100%
    )
    5;
}
.ow1-dropdown-menu {
  width: 15rem;
}
.ow2-dropdown-menu {
  width: 25rem;
  height: 13rem;
  .dropdown-item {
    padding: 0;
    opacity: 1;
    &:first-child {
      border: none;
    }
    &:hover {
      background-color: white;
    }
    .row {
      margin: 1rem 0;
      .col-4 {
        padding: 0 1.5rem;
        text-align: center;
        .btn {
          width: 100%;
          height: 5rem;
          background-color: white;
          color: #79589f;
          opacity: 0.6;
          &:hover {
            opacity: 1;
          }
          div {
            margin-bottom: 0.2rem;
          }
          &:hover {
            background-color: #e9f9f3;
            border-radius: 5px;
          }
        }
      }
    }
  }
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
    opacity: 1.5;
    color: #79589f;
    .userName {
      color: #79589f;
    }
  }
  padding: 0.5rem 1rem;
  border: 0.5px solid #ece8e8;
  color: #79589f;
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
.normal-button {
  border-radius: 20px;
}
.normal-button:hover {
  background-color: white;
}
</style>