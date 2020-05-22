<template>
  <div>
    <v-tab-item value="info-tab">
      <div v-if="!accountLoading" class="row">
        <div class="col-4 text-left" v-if="editAccount.social_id == null">
          <div>
            <label>
              Tài khoản:
              <input class="form-control" v-model="editAccount.user_id" disabled />
            </label>
            <label>
              Mật khẩu:
              <input
                class="form-control"
                :value="'thisispassword'"
                type="password"
                disabled
              />
            </label>
            <button
              @click.stop="dialog = true"
              style="margin-top: 1rem"
              class="btn btn-warning"
            >Đổi mật khẩu ?</button>
          </div>
        </div>
        <div class="col-4 text-left" >
          <div>
            <label>
              Họ tên:
              <input @change="edit = false" v-model="editAccount.name" class="form-control" />
            </label>
            <label>
              Điện Thoại:
              <input
                @change="edit = false"
                v-model="editAccount.phone"
                class="form-control"
              />
            </label>
            <label style="height: 5rem">
              Địa chỉ:
              <textarea
                @change="edit = false"
                v-model="editAccount.address"
                style="height: 8rem"
                class="form-control"
              ></textarea>
            </label>
            <button
              :disabled="edit"
              style="margin-top: 5rem;float:right;"
              class="btn btn-danger"
              :style="edit ? 'cursor: not-allowed': ''"
              @click="editInfor"
            >Lưu</button>
          </div>
        </div>
        <div class="col-4 text-center">
          <div class="image-control">
            <img ref="avatar" :src="loadImageURL" />
            <v-file-input
              style="border: none;margin-top: 1.5rem"
              small-chips
              full-width
              show-size
              @change="upLoadImage"
              label="File input"
            ></v-file-input>
          </div>
        </div>
      </div>
      <div v-if="accountLoading" class="text-center">
        <v-progress-circular style="margin-top: 3rem" indeterminate color="primary" size="100"></v-progress-circular>
      </div>
      <v-dialog v-model="dialog" width="40rem" persistent>
        <v-card>
          <v-card-title class="headline lighten-2" primary-title>Đổi mật khẩu</v-card-title>
          <hr style="margin: 0 0 0.5rem 0" />
          <div style="margin: 0 1rem">
            <b-alert
              :variant="RequestSuccess ? 'success' : 'danger'"
              :show="RequestSuccess!==null"
            >{{msg}}</b-alert>
            <b-alert variant="danger" :show="newPassword != confirm">Mật khẩu mới không khớp</b-alert>
          </div>
          <div class="container">
            <div class="row" style="margin-top: -1rem;">
              <div
                class="col-3 offset-1"
                style="text-align: right;padding-top: 1.2rem"
                type="password"
              >Mật khẩu hiện tại</div>
              <div class="col-7">
                <input type="password" class="form-control" v-model="currentPassword" />
              </div>
            </div>

            <div class="row" style="margin-top: -1rem;">
              <div class="col-3 offset-1" style="text-align: right;padding-top: 1.2rem">Mật khẩu mới</div>
              <div class="col-7">
                <input type="password" v-model="newPassword" class="form-control" />
              </div>
            </div>

            <div class="row" style="margin-top: -1rem;">
              <div class="col-3 offset-1" style="text-align: right;padding-top: 1.2rem">Xác nhận</div>
              <div class="col-7">
                <input type="password" v-model="confirm" class="form-control" />
              </div>
            </div>
          </div>

          <div class="row" style="margin-top: -1rem;">
            <div class="col-7 offset-4">
              <v-btn
                @click="changePassword()"
                :disabled="newPassword!=confirm"
                :loading="accountLoading"
                color="primary"
              >Đổi mật khẩu</v-btn>
              <button @click="cancel()" class="btn btn-danger">Hủy</button>
            </div>
          </div>
        </v-card>
      </v-dialog>
    </v-tab-item>
  </div>
</template>
<script>
import apiConfig from "../../API/api.json";
export default {
  props: ["account", "accountLoading"],
  beforeUpdate() {
    if (this.editAccount.social_id != null && this.editAccount.avatar != null) {
      this.avatarURL = this.editAccount.avatar
    } else {
      this.avatarURL =
        apiConfig.apiURL +
        "/uploads/users/" +
        this.editAccount.user_id +
        "/avatar.png";
    }
  },
  watch: {
    account(newVal) {
      this.editAccount = newVal;
    }
  },
  data() {
    return {
      file: null,
      msg: "",
      RequestSuccess: null,
      dialog: false,
      avatarURL: "",
      edit: true,
      editAccount: {},
      currentPassword: "",
      newPassword: "",
      confirm: ""
    };
  },
  created() {
    this.editAccount = this.account;
  },
  methods: {
    upLoadImage(e) {
      let tgt = e.target || window.event.srcElement;
      let files = tgt.files;
      this.edit = false;
      let vm = this;
      if (FileReader && files && files.length) {
        var fr = new FileReader();
        fr.onload = function() {
          vm.$refs.avatar.src = fr.result;
          vm.editAccount.avatar = files[0];
        };
        fr.readAsDataURL(files[0]);
      }
    },
    editInfor() {
      let vm = this;
      this.$swal({
        icon: "question",
        title: "Thông Báo",
        text: "Bạn muốn lưu chỉnh sửa?",
        showCancelButton: true
      }).then(result => {
        if (result.value) {
          this.$store
            .dispatch("userEditInfor", vm.editAccount)
            .then(response => {
              let icon = "";
              response.data.RequestSuccess
                ? (icon = "success")
                : (icon = "error");
              vm.$swal({
                icon: icon,
                title: "Thông báo",
                text: response.data.msg
              });
            });
        }
      });
    },
    cancel(flag) {
      if (flag == null) this.dialog = false;
      this.currentPassword = "";
      this.newPassword = "";
      this.confirm = "";
    },
    changePassword() {
      let vm = this;
      this.$store
        .dispatch("userChangePassword", {
          user_id: this.editAccount.user_id,
          password: this.currentPassword,
          newPassword: this.newPassword
        })
        .then(response => {
          vm.RequestSuccess = response.data.RequestSuccess;
          vm.msg = response.data.msg;
          vm.cancel(1);
        });
    }
  },
  computed: {
    loadFile() {
      return this.file;
    },
    loadImageURL() {
      return this.avatarURL;
    }
  }
};
</script>
<style lang="scss" scoped>
.row {
  margin: 0;
  .col-4 {
    padding: 0;
    div {
      width: 90%;
      margin: 0 5%;
      border-radius: 5px;
      padding: 1rem 1rem 1rem 1rem;
      height: 22rem;
      img {
        width: 70%;
        height: 10rem;
      }
    }
  }
  .col-7 {
    button {
      margin-left: 0.3rem;
    }
  }
}
a {
  padding-top: 0.5rem;
  text-decoration: none;
  &:hover {
    text-decoration: none;
  }
}
.active-class {
  color: #79589f !important;
  border-bottom: #79589f !important;
  background: whitesmoke !important;
}
label {
  margin: 0.5rem 0;
  width: 100%;
}
textarea {
  height: 5rem;
}
.swal2-container {
  z-index: 10000;
}
</style>