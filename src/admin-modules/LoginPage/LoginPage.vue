<template>
  <div id="login-page">
    <a class="my-container" :href="baseURL + '/adminLogin'">
      <img
        class="text-center"
        src="https://cdn2.vectorstock.com/i/1000x1000/63/61/education-logo-vector-11136361.jpg"
      />
    </a>
    <h3 class="text-center">
      <b>GoodLearning Manage</b>
    </h3>
    <div class="my-form">
      <div class="row" style="margin-bottom: 1rem;border-bottom: 1px solid">
        <div class="col-3">
          <label for="male" class="label-radio">
            <input
              type="radio"
              id="male"
              name="typeAccount"
              @click="Employee = true"
              value="1"
              checked
            />
            <b>&nbsp;Nhân viên</b>
          </label>
        </div>

        <div class="col-3">
          <label for="female" class="label-radio">
            <input type="radio" id="female" name="typeAccount" @click="Employee = false" value="2" />
            <b>&nbsp;Quản trị viên</b>
          </label>
        </div>
      </div>
      <div class="input-container">
        <label>
          <i>Tài khoản:</i>
          <input ref="admin_id" class="form-control text-input" required />
        </label>
        <label>
          <i>Mật khẩu:</i>
          <input ref="password" class="form-control text-input" type="password" required />
        </label>
        <button class="btn btn-secondary" @click="login()">Đăng nhập</button>
      </div>
    </div>
  </div>
</template>
<script>
import api from "../../API/api.json";
export default {
  data() {
    return {
      baseURL: api.baseURL,
      Employee: true
    };
  },
  mounted() {
    this.$refs["admin_id"].validity.valid;
    this.$refs["password"].validity.valid;
  },
  methods: {
    login() {
      if (this.Employee === true) {
        this.$router.push({ name: "employee-page", params: { admin_id: 1 } });
      } else {
        this.$router.push({ name: "it-page", params: { admin_id: 1 } });
      }
    }
  }
};
</script>
<style lang="scss" scoped>
#login-page {
  font-family: "Quicksand";
  width: 100%;
  height: 100%;
  position: absolute;
  overflow: hidden;
  padding-top: 3rem;
  background: whitesmoke;
  .my-container {
    margin: 0;
    width: 100%;
    color: black;
    &:hover {
      text-decoration: none;
    }
    img {
      width: 14%;
      margin: 5px 43%;
      height: 10rem;
      border-radius: 50%;
    }
  }
  label {
    width: 100%;
  }
  .label-radio {
    cursor: pointer;
  }
  .my-form {
    position: relative;
    width: 50%;
    margin: 1rem 25%;
    padding: 1rem;
    border: 1px solid silver;
    border-radius: 1rem;
    background-color: white;
  }

  .text-input {
    height: 3rem;
    &:focus {
      outline: 0px !important;
      -webkit-appearance: none;
      box-shadow: none !important;
    }
  }
  input[type="radio"] {
    cursor: pointer;
  }
}
</style>