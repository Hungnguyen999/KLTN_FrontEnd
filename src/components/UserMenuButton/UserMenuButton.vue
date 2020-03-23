<template>
  <div>
    <div class="btn-group">
      <button
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
        class="btn btn-default normal-button btn-sm text-center"
        style="margin-right: 0;width: 2.5rem;padding:0.3rem;"
      >
        <i class="fas fa-user-circle fa-2x"></i>
      </button>
      <div class="dropdown-menu ow1-dropdown-menu dropdown-menu-right">
        <i class="dropdown-item text-center">
          <b-img
            rounded="circle"
            src="https://cdn2.vectorstock.com/i/1000x1000/63/61/education-logo-vector-11136361.jpg"
            style="width: 3rem;height: 3rem;margin-bottom: 0.5rem;"
          />
          <br />
          <span class="userName">{{account.name}}</span>
          <br />
          <span class="email">daolevanvinh@gmail.com</span>
        </i>
        <router-link class="dropdown-item" :to="{name: 'account-page', params: {id: account.id}}">
          <i class="fas fa-user"></i> Thông tin cá nhân
        </router-link>
        <router-link
          class="dropdown-item"
          :to="{name: 'account-page', params: {id: account.id}, hash: '#annouce'}"
        >
          <i class="fas fa-bell"></i> Thông báo
        </router-link>
        <router-link
          class="dropdown-item"
          :to="{name: 'account-page', params: {id: account.id}, hash: '#message'}"
        >
          <i class="fas fa-comment"></i> Tin nhắn
        </router-link>
        <router-link class="dropdown-item" to="google.com" type="button">
          <i class="fas fa-long-arrow-alt-right"></i> Đăng xuất
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["account"]
};
</script>
<style lang="scss" scoped>
.ow1-dropdown-menu {
  width: 15rem;
}

.dropdown-menu {
  &:hover {
    -webkit-box-shadow: 0px 0px 10px 2px rgba(131, 124, 127, 1);
    -moz-box-shadow: 0px 0px 10px 2px rgba(131, 124, 127, 1);
    box-shadow: 0px 0px 10px 2px rgba(131, 124, 127, 1);
  }
  padding: 0;
}
i.fas {
  margin-right: 1rem;
}
.dropdown-item {
  &:first-child {
    height: 8rem;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
    color: #000000;
    &:hover {
      cursor: pointer;
    }
  }
  &:last-child {
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }
  &:hover {
    background-color: #e9f9f3;
    opacity: 1.5;
    color: #79589f;
    .userName {
      color: #79589f;
    }
  }
  padding: 0.5rem 1rem;
  border: 0.5px solid #ece8e8;
  color: #79589f;
  opacity: 0.8;
  .email {
    margin-top: 1rem;
    color: silver;
  }
}
button:focus {
  outline: 0px !important;
  -webkit-appearance: none;
  box-shadow: none !important;
}
.normal-button:hover {
  background-color: white;
}
</style>