<template>
  <div>
    <b-modal @hidden="reset()" ref="signup-modal" hide-footer id="singup-modal" title="Tài khoản GoodLearning">
      <form action="#">
        <div class="inputWithIcon">
          <input class="form-control" v-model="user.name" placeholder="Họ Tên" type="text" required />
          <i class="fa fa-user fa-lg" aria-hidden="true"></i>
        </div>
        <div class="inputWithIcon">
          <input
            class="form-control"
            v-model="user.user_id"
            placeholder="Email"
            type="email"
            required
          />
          <i class="fas fa-envelope-square fa-lg" aria-hidden="true"></i>
        </div>
        <div class="inputWithIcon">
          <input
            class="form-control"
            v-model="user.password"
            placeholder="Mật khẩu"
            type="password"
            required
          />
          <i class="fas fa-lock fa-lg" aria-hidden="true"></i>
        </div>
        <h6
          style="color: red;"
          v-if="!loadNotificationPassword"
        >Mật khẩu phải gồm chữ cái thường, hoa, số, ký tự đặc biệt và tối thiểu 6 ký tự</h6>
        <h6 style="color: green;" v-if="loadNotificationPassword">Mật khẩu hợp lệ</h6>

        <button
          type="button"
          style="width: 100%;margin-top:1rem"
          :disabled="!loadNotificationPassword"
          @click="register()"
          class="btn btn-danger"
        >Đăng Ký</button>
      </form>
      <hr />
      <h6>
        Đã có tài khoản?
        <a href="#" ref="btnShow" @click="showModalLogin()">Đăng Nhập</a>
      </h6>
    </b-modal>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      user: {
        user_id: "",
        name: "",
        password: ""
      },
      //eslint-disable-next-line
      strRegex: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$/
    };
  },
  methods: {
    reset() {
      this.user.user_id = '',
      this.user.name = '',
      this.user.password = ''
    },
    register() {
      let vm = this
      this.$swal.showLoading();
      this.$store.dispatch("UserRegister", this.user).then(function(response) {
        let icon = "success";
        if (response.data.RequestSuccess == false) icon = "error";
        vm.$swal({
          icon: icon,
          title: 'Thông Báo',
          text: response.data.msg
        });
        if(response.data.RequestSuccess == true) {
          vm.hideModal();
          this.user = {
            user_id: "",
            name: "",
            password: ""
          }
        }
      });
    },
    // fontend
    checkPassword() {
      return this.user.password.match(this.strRegex);
    },
    hideModal() {
      this.$refs["signup-modal"].hide();
    },
    showModal() {
      this.$refs["signup-modal"].show();
    },
    showModalLogin() {
      this.hideModal();
      this.$root.$emit("bv::show::modal", "login-modal", "");
    }
  },
  computed: {
    ...mapGetters({}),
    loadNotificationPassword() {
      return this.checkPassword();
    }
  }
};
</script>
<style lang="scss" scoped>
input {
  padding-left: 50px;
  height: 3rem;
}
.inputWithIcon,
h6 {
  position: relative;
  margin: 0.5rem 0.5rem 0.5rem 0.5rem;
  i {
    position: absolute;
    margin-left: 0.9rem;
    margin-top: -1.8rem;
  }
}
</style>