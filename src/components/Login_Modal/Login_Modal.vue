<template>
  <div>
    <b-modal
      hide-footer
      ref="login-modal"
      id="login-modal"
      title="Đăng nhập với tài khoản GoodLearning"
    >
      <div class="row">
        <div class="col-6" style="border-right: 1px solid;">
          <form action="#">
            <input
              class="form-control"
              v-model="user.user_id"
              type="email"
              placeholder="Email"
              required
            />
            <input
              class="form-control"
              v-model="user.password"
              type="password"
              placeholder="Password"
              required
            />
            <button class="btn btn-primary" @click="login">Đăng Nhập</button>
          </form>
        </div>
        <div class="col-6">
          <button type="button" href="#" class="btn fb">
            <i class="fab fa-facebook-f"></i> Login with Facebook
          </button>
          <button type="button" href="#" class="btn google">
            <i class="fab fa-google-plus-g"></i> Login with Google+
          </button>
        </div>
      </div>
    </b-modal>
  </div>
</template>
<script>
export default {
  data() {
    return {
      user: {
        user_id: "",
        password: ""
      }
    };
  },
  methods: {
    checkLogin() {
      if (this.user.user_id == "" && this.user.password == "") {
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
    loginSuccess(data, vm) {
      localStorage.token = data.token;
      vm.$swal({
        icon: "success",
        title: "Thông Báo",
        text: data.msg
      }),
        (this.user = {
          user_id: "",
          password: ""
        });
    },
    loginFaild(data, vm) {
      vm.$swal({
        icon: "error",
        title: "Thông Báo",
        text: data.msg
      });
    }
  }
};
</script>
<style lang="scss" scoped>
input,
button {
  width: 92%;
  margin: 0 0.5rem 0.5rem 0.5rem;
}
input:hover,
.btn:hover {
  opacity: 1;
}
.fb {
  background-color: #3b5998;
  color: white;
}
.google {
  background-color: #dd4b39;
  color: white;
}
</style>