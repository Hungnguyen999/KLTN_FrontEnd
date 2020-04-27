<template>
  <div>
    <div class="row">
      <div class="col-3">
        <div>
          <a class="my-link" href="#">Udemy for Business</a>
        </div>
        <div>
          <a class="my-link" href="#">Teach on Udemy</a>
        </div>
        <div>
          <a class="my-link" href="#">Udemy app</a>
        </div>
        <div>
          <a class="my-link" href="#">About us</a>
        </div>
      </div>
      <div class="col-3">
        <div>
          <a class="my-link" href="#">Careers</a>
        </div>
        <div>
          <a class="my-link" href="#">Blog</a>
        </div>
        <div>
          <a class="my-link" href="#">Help and Support</a>
        </div>
        <div>
          <a class="my-link" href="#">Affiliate</a>
        </div>
      </div>
      <div class="col-3">
        <div>
          <a class="my-link" href="#">Sitemap</a>
        </div>
        <div>
          <a class="my-link" href="#">Featured courses</a>
        </div>
      </div>
    </div>
    <hr />
    <b-navbar
      toggleable="lg"
      type="light"
      variant="default"
      style="padding-bottom: 1rem;"
    >
      <b-navbar-brand :href="baseURL">
        <b-img rounded="circle" style="width: 4rem; height: 4rem" :src="goodLearning"></b-img>&nbsp;
        <span style="position: absolute;margin-top: 0.5rem;margin-left: 0.5rem">
          <div>
            <b>GoodLearning</b>
          </div>
          <div style="font-size: 9pt;">
            <i>
              <b>Học tập Online</b>
            </i>
          </div>
        </span>
      </b-navbar-brand>
      <div class="ml-auto">
        <div class="row" style="text-align: right">
          <div class="col">
            <span>
              <a class="my-link" href="#" style="margin-right: 2rem">Terms</a>
              <a class="my-link" href="#">Privacy Policy and Cookie Policy</a>
            </span>
          </div>
        </div>

        <div class="row">
          <div class="col">
            <div style="margin-left: 10rem">Copyright © 2020 GoodLearning</div>
          </div>
        </div>
      </div>
    </b-navbar>
    <div style="width: 100%; background: #ec5252;height: 0.3rem"></div>
  </div>
</template>
<script>
import goodLearning from "../../assets/goodlearning.jpg";
import apiConfig from "../../API/api.json";
export default {
  data() {
    return {
      goodLearning: goodLearning,
      baseURL: apiConfig.baseURL
    };
  }
};
</script>
<style lang="scss" scoped>
.row {
  .col-3 {
    padding-left: 3rem;
    div {
      margin: 0.5rem 0;
    }
  }
}
.my-link {
  font-weight: 700;
  text-decoration: none;
  color: #007791;
  font-size: 13px;
}
</style>