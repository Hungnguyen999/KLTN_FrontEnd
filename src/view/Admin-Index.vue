<template>
  <div>
    <div v-if="!loadFlag">
      <v-navigation-drawer
        class="left-menu"
        style="background-color: #52143e"
        permanent
        expand-on-hover
      >
        <v-list dark>
          <router-link :to="{name: 'employee-page'}" style="padding-left: 0.25rem;color: white">
            <b-img
              rounded="circle"
              style="width: 3rem; height: 3rem"
              src="https://cdn2.vectorstock.com/i/1000x1000/63/61/education-logo-vector-11136361.jpg"
            ></b-img>&nbsp;
            <span
              style="position: absolute;margin-top: 0.5rem;margin-left: 0.5rem;color: white;"
            >
              <div>
                <b>GoodLearning</b>
              </div>
              <div style="font-size: 9pt;">
                <i>
                  <b>Học tập Online</b>
                </i>
              </div>
            </span>
          </router-link>
        </v-list>

        <v-divider></v-divider>
        <v-list dense nav>
          <v-list-item
            v-for="item in list"
            :key="item.title"
            :to="{name: item.href}"
            class="my-list-item-container"
            style="text-decoration: none;"
          >
            <v-list-item-icon>
              <v-icon
                :style="'fas fa-robot' == item.icon ? 'margin-left: -0.18rem' : ''"
                style="color: white;margin-right: 1rem"
              >{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title style="color: white;font-size: 14px">{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
      <br />
      <div style="position: absolute; right: 2rem;top: 0.5rem">
        <UserMenuButton :account="{ id: 'vinhdlv', name: 'vinh đào lê văn' }"></UserMenuButton>
      </div>
      <div style="margin: 1.5rem 2rem 1rem 6rem">
        <router-view></router-view>
      </div>
    </div>
    <div v-if="loadFlag">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import UserMenuButton from "../components/UserMenuButton/UserMenuButton";
export default {
  created() {
    
    this.adminLogin = this.$route.name == "admin-login-page";
  },
  beforeUpdate() {
    this.adminLogin = this.$route.name == "admin-login-page";
  },
  components: { UserMenuButton },
  data() {
    return {
      adminLogin: false,
      isAdminPage: false,
      list: [
        {
          title: "Danh sách thể loại",
          icon: "fas fa-list fa-lg",
          href: "category-page"
        },
        {
          title: "Danh sách lĩnh vực",
          icon: "fab fa-trello fa-lg",
          href: "topic-page"
        },
        {
          title: "Danh sách khóa học",
          icon: "far fa-play-circle fa-lg",
          href: "course-page"
        },
        {
          title: "Quản lý ChatBot",
          icon: "fas fa-robot",
          href: "chatbot-page"
        },
        {
          title: "Thống kê",
          icon: "far fa-chart-bar fa-lg",
          href: "statistical-page"
        }
      ]
    };
  },
  computed: {
    ...mapGetters({
      loadHide: "loadHide"
    }),
    loadFlag() {
      return this.adminLogin;
    }
  }
};
</script>
<style lang="scss" scoped>
.left-menu {
  position: fixed;
  background-color: #52143e;
  z-index: 1;
}
.my-list-item-container {
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
}
</style>