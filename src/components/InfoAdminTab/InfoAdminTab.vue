<template>
  <div>
    <v-tab-item value="info-tab">
      <div class="row">
        <div class="col-4 text-left">
          <div>
            <label>
              Tài khoản:
              <input class="form-control" disabled />
            </label>
            <label>
              Mật khẩu:
              <input class="form-control" />
            </label>
            <button
              @click.stop="dialog = true"
              style="margin-top: 1rem"
              class="btn btn-warning"
            >Đổi mật khẩu ?</button>
            <v-dialog v-model="dialog" width="40rem" persistent>
              <v-card>
                <v-card-title class="headline lighten-2" primary-title>Đổi mật khẩu</v-card-title>
                <hr style="margin: 0 0 0.5rem 0" />
                <div style="margin: 0 1rem">
                  <b-alert variant="success" show>Đổi mật khẩu thành công</b-alert>
                  <b-alert variant="danger" show>Đổi mật khẩu thất bại</b-alert>
                </div>
                <div class="container">
                  <div class="row" style="margin-top: -1rem;">
                    <div
                      class="col-3 offset-1"
                      style="text-align: right;padding-top: 1.2rem"
                    >Mật khẩu hiện tại</div>
                    <div class="col-7">
                      <input class="form-control" />
                    </div>
                  </div>

                  <div class="row" style="margin-top: -1rem;">
                    <div
                      class="col-3 offset-1"
                      style="text-align: right;padding-top: 1.2rem"
                    >Mật khẩu mới</div>
                    <div class="col-7">
                      <input class="form-control" />
                    </div>
                  </div>

                  <div class="row" style="margin-top: -1rem;">
                    <div
                      class="col-3 offset-1"
                      style="text-align: right;padding-top: 1.2rem"
                    >Xác nhận</div>
                    <div class="col-7">
                      <input class="form-control" />
                    </div>
                  </div>
                </div>

                <div class="row" style="margin-top: -1rem;">
                  <div class="col-7 offset-4">
                    <button @click="dialog = false" class="btn btn-primary">Đổi mật khẩu</button>
                    <button @click="dialog = false" class="btn btn-danger">Hủy</button>
                  </div>
                </div>
              </v-card>
            </v-dialog>
          </div>
        </div>
        <div class="col-4 text-left">
          <div>
            <label>
              Họ tên:
              <input class="form-control" />
            </label>
            <label>
              Điện Thoại:
              <input class="form-control" />
            </label>
            <label style="height: 5rem">
              Địa chỉ:
              <textarea style="height: 8rem" class="form-control"></textarea>
            </label>
          </div>
        </div>
        <div class="col-4 text-center">
          <div class="image-control">
            <img
              src="https://cdn2.vectorstock.com/i/1000x1000/63/61/education-logo-vector-11136361.jpg"
            />
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
    </v-tab-item>
  </div>
</template>
<script>
export default {
  data() {
    return {
      file: null,
      dialog: false
    };
  },
  methods: {
    upLoadImage(file) {
      console.log(file);
    }
  },
  computed: {
    loadFile() {
      return this.file;
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
</style>