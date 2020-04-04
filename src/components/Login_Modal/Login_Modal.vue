<template>
  <div id="my-container-login-modal">
    <b-modal
      @hidden="reset()"
      hide-footer
      ref="login-modal"
      id="login-modal"
      :title="forgotPassword ? 'Đăng nhập với tài khoản GoodLearning' : 'Nhập Email của bạn'"
    >
      <div v-if="!forgotPassword">
        <button type="button" href="#" class="btn fb">
          <i class="fab fa-facebook-f"></i> Login with Facebook
        </button>
        <button type="button" href="#" class="btn google">
          <i class="fab fa-google-plus-g"></i> Login with Google+
        </button>
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
        <div class="input-container">
          <input class="form-control" v-model="user.user_id" type="email" placeholder="Email" />
          <i class="fas fa-envelope-square fa-lg" aria-hidden="true"></i>
        </div>
        <button class="btn btn-primary" @click="ForgotPassword">Xác nhận</button>
        <a href="#" @click="forgotPassword=false">Quai lại</a>
      </div>
    </b-modal>
  </div>
</template>
<script>
export default {
  mounted() {
    let vm = this;
    this.$root.$emit("bv::modal::hidden", "login-modal", function() {
      vm.forgotPassword = false;
    });
  },
  data() {
    return {
      forgotPassword: false,
      user: {
        user_id: "",
        password: ""
      },
      //eslint-disable-next-line
      emailRegex: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    };
  },
  methods: {
    reset() {
      (this.user.user_id = ""),
        (this.user.password = ""),
        (this.forgotPassword = false);
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
      location.reload();
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
        this.$swal({
          icon: "success",
          title: "Thông Báo",
          text: "Vui lòng đăng nhập vài Email để xác nhận"
        });
        this.$refs["login-modal"].hide();
      }
    }
  }
};
</script>
<style lang="scss" scoped>
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