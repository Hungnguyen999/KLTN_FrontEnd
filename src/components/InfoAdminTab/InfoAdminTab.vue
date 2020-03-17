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
            <button style="margin-top: 1rem" class="btn btn-warning">Đổi mật khẩu ?</button>
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
            <v-file-input style="border: none;margin-top: 1.5rem" small-chips full-width show-size @change="upLoadImage" label="File input"></v-file-input>
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
      file: null
    };
  },
  methods: {
    upLoadImage(file) {
      console.log(file)
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
      border: 1px solid #ece8e8;
      border-radius: 5px;
      padding: 1rem 1rem 1rem 1rem;
      height: 22rem;
      img {
        width: 70%;
        height: 10rem;
      }
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