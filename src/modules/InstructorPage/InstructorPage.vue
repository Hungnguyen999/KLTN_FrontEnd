<template>
  <div class="my-container">
    <v-navigation-drawer class="left-menu" style="background-color: #52143e" permanent expand-on-hover>
      <v-list dark>
        <router-link :to="{name: 'instructor-page'}" style="padding-left: 0.25rem;color: white">
          <b-img
            rounded="circle"
            style="width: 3rem; height: 3rem"
            src="https://cdn2.vectorstock.com/i/1000x1000/63/61/education-logo-vector-11136361.jpg"
          ></b-img>&nbsp;
          <span style="position: absolute;margin-top: 0.5rem;margin-left: 0.5rem;color: white;">
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

      <div v-for="(item,index) in list" :key="index">
        <customList :list="item"></customList>
      </div>
    </v-navigation-drawer>
    <v-app>
      <div class="instructor-control" style="background: #f4f3ef;width: 100%">
        <AnnouceButton></AnnouceButton>
      </div>
      <div class="row" style="background: #f4f3ef">
        <div class="col-11 offset-1">
          <div class="my-content">
            <router-view></router-view>
          </div>
        </div>
      </div>
    </v-app>
  </div>
</template>
<script>
import customList from "../../components/customList/customList";
import AnnouceButton from "../../components/AnnouncementButton/AnnouncementButton";
export default {
  components: { customList, AnnouceButton },
  
  data() {
    return {
      list: [
        {
          // course list
          header: "Khóa học",
          icon: "far fa-play-circle fa-lg",
          items: [
            {
              title: "Danh sách khóa học",
              icon: "fas fa-circle fa-sm",
              routeName: "ins-course-page"
            },
            {
              title: "Danh sách buổi học",
              icon: "fas fa-circle fa-sm",
              routeName: "ins-lesson-page"
            }
          ]
        },
        {
          // communication list
          header: "Tương tác",
          icon: "far fa-comment-alt fa-lg",

          items: [
            {
              title: "Tin nhắn",
              icon: "fas fa-circle fa-sm",
              routeName: "ins-message-page"
            },
            {
              title: "Thông báo",
              icon: "fas fa-circle fa-sm",
              routeName: "ins-annouce-page"

            }
          ]
        },
        {
          header: "Thống kê",
          icon: "far fa-chart-bar fa-lg",
          items: [{ title: "Tổng quan", icon: "fas fa-circle fa-sm" }]
        }
      ]
    };
  },
  methods: {
    redirect(name) {
      this.$router.push({ name: name });
    }
  },
  computed: {}
};
</script>
<style lang="scss" scoped>
.instructor-control {
    text-align: right;
    right: 0;
    margin: 0;
    margin-right: 1rem;
  }
.left-menu {
  position: fixed;
  background-color: #52143e;
  z-index: 1;
}
.my-container {
  .row {
    margin-top: 0;
    .col-3 {
      padding-top: 0;
      z-index: 2;
    }
    .col-9 {
      padding-top: 0;
    }
    .col-11 {
      padding-right: 3.5rem;
    }
  }
}

.my-nav-item {
  font-size: 15px;
  font-weight: 400;
}
</style>