<template>
  <div>
    <v-app class="my-app text-center">
      <div class="my-card">
        <h1 class="text-center" style="margin-bottom: 1rem">Đặt lại mật khẩu</h1>
        <b-alert :show="showAlert" :variant="stateRequest ? 'info' : 'danger'">{{msg}}</b-alert>
        <div class="row">
          <div class="col-4" style="text-align: right;">
            <label style="padding-top: 0.5rem">Mật khẩu:&nbsp;</label>
          </div>
          <div class="col-8">
            <v-text-field
              :disabled="userForgotPasswordLoading"
              @keyup.enter="afterPassword()"
              type="password"
              v-model="user.password"
              dense
              outlined
            ></v-text-field>
          </div>
        </div>
        <div class="row" style="margin-top: -1.5rem">
          <div class="col-4" style="text-align: right;">
            <label style="padding-top: 0.5rem">Xác nhận mật khẩu:&nbsp;</label>
          </div>
          <div class="col-8">
            <v-text-field
              :disabled="userForgotPasswordLoading"
              @keyup.enter="afterPassword()"
              type="password"
              v-model="confirm"
              dense
              outlined
            ></v-text-field>
          </div>
        </div>
        <v-card-actions style="margin-top: -2rem;margin-right: -0.5rem">
          <v-spacer></v-spacer>
          <v-btn
            :loading="userForgotPasswordLoading"
            color="red"
            @click="afterPassword"
            style="color:white"
          >Đồng ý</v-btn>
        </v-card-actions>
      </div>
    </v-app>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  created() {
    this.$store.commit("HideFooterUser");
    this.user.user_id = this.$route.query.user_id;
    this.user.code = this.$route.query.code;
  },
  data() {
    return {
      user: {
        user_id: "",
        password: "",
        code: ""
      },
      confirm: "",
      showAlert: false,
      stateRequest: false,
      msg: ""
    };
  },
  methods: {
    afterPassword() {
      if (this.user.password != this.confirm) {
        this.showAlert = true;
        this.stateRequest = false;
        this.msg = "Mật khẩu không khớp";
      } else {
        let vm = this;
        this.$store
          .dispatch("userAfterForgotPassword", this.user)
          .then(response => {
            this.showAlert = true;
            if (response.data.RequestSuccess === false) {
              this.stateRequest = response.data.RequestSuccess;
              this.msg = response.data.msg;
            } else {
              this.confirm = "";
              this.user = {
                user_id: "",
                password: "",
                code: ""
              };
              this.$swal({
                icon: "success",
                title: response.data.msg
              }).then(() => {
                vm.router.push({ name: "home-page-guest" });
              });
            }
          });
      }
    },
    computed: {
      ...mapGetters({
        userForgotPasswordLoading: "userForgotPasswordLoading"
      })
    }
  }
};
</script>
<style lang="scss" scoped>
.my-app {
  height: 20rem !important;
  margin-top: 2rem;
  .my-card {
    width: 45%;
    margin: 1rem 27.5%;
    border: none !important;
    padding: 1rem;
  }
}
</style>