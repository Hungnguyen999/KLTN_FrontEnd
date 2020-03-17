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
          <input v-model="admin.admin_id" ref="admin_id" @keyup.enter="login()" class="form-control text-input" required />
        </label>
        <label>
          <i>Mật khẩu:</i>
          <input
            v-model="admin.password"
            ref="password"
            class="form-control text-input"
            type="password"
            @keyup.enter="login()"
            required
          />
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
      Employee: true,
      admin: {
        admin_id: "",
        password: "",
        employee: 1
      }
    };
  },
  created() {
    this.$store.commit("HideHeaderAdmin");
  },
  mounted() {
  },
  methods: {
    login() {
      this.$swal.showLoading()
      this.Employee === true ? this.admin.employee = 1 : this.admin.employee = 2;
      this.$store.dispatch("AdminLogin", this.admin).then(response => {
        if (response.data.RequestSuccess === true) {
          let routeName = "";
          this.Employee
            ? (routeName = "employee-page")
            : (routeName = "it-page");
          localStorage.adminToken = response.data.token;
          localStorage.admin = JSON.stringify(response.data.admin)
          this.$router.push({ name: routeName });
        } else {
          this.$swal({
            icon: 'error',
            title: 'Thông báo',
            text: response.data.msg
          })
        }
      });
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