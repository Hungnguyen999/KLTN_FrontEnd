<template>
  <div id="my-container-login-modal">
    {{myRoute}}
    <b-modal
      @hidden="reset()"
      hide-footer
      ref="login-modal"
      id="login-modal"
      :title="forgotPassword ? 'Đăng nhập với tài khoản GoodLearning' : 'Nhập Email của bạn'"
    >
      <div v-if="!forgotPassword">
        <a
          type="button"
          @click="socialLogin('fb')"
          class="btn fb"
          style="width: 100%;margin: 0.5rem 0"
        >
          <i class="fab fa-facebook-f"></i> Login with Facebook
        </a>
        <a
          type="button"
          @click="socialLogin('gg')"
          class="btn google"
          style="width: 100%;margin: 0.5rem 0"
        >
          <i class="fab fa-google-plus-g"></i> Login with Google+
        </a>
        <div class="input-container">
          <input
            class="form-control"
            @keydown.enter="login"
            v-model="user.user_id"
            type="email"
            placeholder="Email"
          />
          <i class="fas fa-envelope-square fa-lg" aria-hidden="true"></i>
        </div>
        <div class="input-container">
          <input
            class="form-control"
            v-model="user.password"
            @keydown.enter="login"
            type="password"
            placeholder="Password"
          />
          <i class="fas fa-lock fa-lg" aria-hidden="true"></i>
        </div>
        <button class="btn btn-primary" @click="login">Đăng Nhập</button>
        <a href="#" @click="forgotPassword = true">Quên mật khẩu ?</a>
      </div>
      <div v-if="forgotPassword">
        <b-alert
          :show="authenForgot"
          :variant="stateRequestForgot ? 'info' : 'danger'"
        >{{msgForgot}}</b-alert>
        <div class="input-container">
          <input
            :disabled="userForgotPasswordLoading"
            class="form-control"
            @keyup.enter="ForgotPassword()"
            v-model="user.user_id"
            type="email"
            placeholder="Email"
          />
          <i class="fas fa-envelope-square fa-lg" aria-hidden="true"></i>
        </div>
        <v-btn
          style="background-color: #1976D2;color:white"
          :loading="userForgotPasswordLoading"
          @click="ForgotPassword()"
        >Xác nhận</v-btn>
        <a href="#" @click="forgotPassword=false">Quay lại</a>
      </div>
    </b-modal>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import apiConfig from "../../API/api.json";
export default {
  mounted() {
    let vm = this;
    this.$root.$emit("bv::modal::hidden", "login-modal", function() {
      vm.forgotPassword = false;
    });
  },
  computed: {
    ...mapGetters({
      userForgotPasswordLoading: "userForgotPasswordLoading"
    })
  },
  data() {
    return {
      fbURL: apiConfig.socialURLRedirect + "/facebook",
      ggURL: apiConfig.socialURLRedirect + "/google",
      forgotPassword: false,
      user: {
        user_id: "",
        password: ""
      },
      authenForgot: false,
      msgForgot: "",
      stateRequestForgot: false,
      myRoute: "",
      //eslint-disable-next-line
      emailRegex: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    };
  },
  methods: {
    reset() {
      this.user.user_id = "";
      this.user.password = "";
      this.forgotPassword = false;
    },
    checkLogin() {
      if (this.user.user_id == "" || this.user.password == "") {
        this.$swal({
          icon: "error",
          title: "Thông Báo",
          text: "Chưa nhập tài khoản hoặc mật khẩu"
        });
        return false;
      } else return true;
    },
    login() {
      if (this.checkLogin()) {
        let vm = this;
        this.$swal.showLoading();
        this.$store.dispatch("UserLogin", this.user).then(function(response) {
          if (response.data.RequestSuccess == true) {
            vm.loginSuccess(response.data, vm);
          } else {
            vm.loginFaild(response.data, vm);
          }
        });
      }
    },
    loginSuccess(data) {
      localStorage.token = data.token;
      localStorage.user = JSON.stringify(data.user);
      this.reset();
      this.$swal.close();
      this.$refs["login-modal"].hide();
      //location.reload();
    },
    loginFaild(data, vm) {
      vm.$swal({
        icon: "error",
        title: "Thông Báo",
        text: data.msg
      });
    },
    ForgotPassword() {
      if (
        this.user.user_id == "" ||
        !this.user.user_id.match(this.emailRegex)
      ) {
        this.$swal({
          icon: "error",
          title: "Thông Báo",
          text: "Email không hợp lệ"
        });
      } else {
        this.$store
          .dispatch("userForgotPassword", this.user.user_id)
          .then(response => {
            this.stateRequestForgot = response.data.RequestSuccess;
            this.msgForgot = response.data.msg;
            this.authenForgot = true;
          });
      }
    },
    socialLogin(flag) {
      let url = "";
      if (flag == "fb") {
        url =
          this.fbURL +
          "?currentURL=" +
          apiConfig.baseURL +
          this.$route.path +
          "&social=facebook";
      } else {
        url =
          this.ggURL +
          "?currentURL=" +
          apiConfig.baseURL +
          this.$route.path +
          "&social=google";
      }
      setTimeout(function() {
        location.href = url;
      }, 100);
    }
  }
};
</script>
<style lang="scss" scoped>
.login-modal {
  padding-right: 0 !important;
}
a {
  text-decoration: none;
  color: black;
  &:hover {
    text-decoration: none;
  }
}
.input-container {
  position: relative;
  width: 100%;
  input {
    padding-left: 2.5rem;
  }
  i {
    position: absolute;
    top: 0.75rem;
    left: 0.8rem;
  }
}
input,
button {
  width: 100%;
  margin: 0.25rem 0;
}

.fb {
  background-color: #3b5998;
  color: white;
}
.google {
  background-color: #dd4b39;
  color: white;
}
#login-modal {
  overflow: hidden;
}
</style>