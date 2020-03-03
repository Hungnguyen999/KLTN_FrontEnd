<template>
  <div style="background-color: skyblue;">
    <div class="login-container">
      <div class="container">
        <label>Tài Khoản:</label>
        <input @keyup.enter="login()" v-model="admin.id" style="width: 100%" class="form-control" />
      </div>
      <div class="container">
        <label>Mật Khẩu :</label>
        <input @keyup.enter="login()" v-model="admin.password" type="password" style="width: 100%" class="form-control" />
      </div>
      <div class="container">
        <button @click="login()" class="btn btn-info">Login</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      admin: {
        id: '',
        password: ''
      }
    }
  },
  methods: {
    login() {
      this.$store.dispatch('AdminLogin', this.admin)
      .then(response => this.handleLogin(response))
    },
    handleLogin(response) {
      if(response.data.msg) {
        this.$swal({
          type: 'success',
          title: 'Thông Báo',
          text: response.data.msg
        })
      }
    }
  }
};
</script>
<style scoped>
.login-container {
  width: 40%;
  margin: 0 30%;
  margin-top: 10%;
  background-color: white;
}
.container {
  margin-bottom: 0.5rem;
}
</style>