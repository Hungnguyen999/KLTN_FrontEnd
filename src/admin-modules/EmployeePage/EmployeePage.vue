<template>
  <div>
    <div class="container">
      <!-- <div class="row">
        <div class="col-4">
          <router-link :to="{name: 'category-page'}" class="btn">
            <div>
              <i class="fab fa-elementor fa-2x"></i>
            </div>
            <p>Thể loại</p>
          </router-link>
        </div>
        <div class="col-4">
          <router-link :to="{name: 'topic-page'}" class="btn">
            <div>
              <i class="fa fa-cubes fa-2x" aria-hidden="true"></i>
            </div>
            <p>Lĩnh vực</p>
          </router-link>
        </div>
        <div class="col-4">
          <router-link :to="{name: 'chatbot-page'}" class="btn">
            <div>
              <i class="fas fa-robot fa-2x"></i>
            </div>
            <p style="word-break: break-all;">ChatBot</p>
          </router-link>
        </div>
      </div>
      <div class="row">
        <div class="col-4">
          <router-link :to="{name: 'course-page'}" class="btn">
            <div>
              <i class="fab fa-youtube fa-2x"></i>
            </div>
            <p>Khóa học</p>
          </router-link>
        </div>
        <div class="col-4">
          <router-link :to="{name: 'statistical-page'}" class="btn">
            <div>
              <i class="fas fa-chart-bar fa-2x"></i>
            </div>
            <p>Thống kê</p>
          </router-link>
        </div>
      </div>-->
      this is my dashboard
    </div>
  </div>
</template>
<script>
export default {
  created() {
    this.$swal.close();
    this.$store.commit("ShowHeaderAdmin");
  }
};
</script>
<style lang="scss" scoped>
.container {
  border: 1px solid #79589f;
  border-radius: 10px;
  .row {
    margin: 2rem 0;
    .col-4 {
      text-align: center;
      a {
        font-size: 22pt;
        color: #79589f;
        opacity: 0.8;
        &:hover {
          background-color: #e9f9f3;
          opacity: 1;
        }
      }
    }
  }
}
</style>