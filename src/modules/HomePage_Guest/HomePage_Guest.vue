<template>
  <div>
    <div class="imgContent">
      <div class="my-form">
        <h1>Learn on your schedule</h1>
        <p>Study any topic, anytime. Explore thousands of courses starting at $12.99 each.</p>
      </div>
    </div>
    <div class="my-label">
      <div class="row">
        <div class="col-4">
          <div class="row">
            <div class="col-2">
              <v-icon style="color: white;font-size: 50px">mdi-gesture-two-double-tap</v-icon>
            </div>
            <div class="col-10" style="padding-left: 0">
              <div>
                <strong>100,000 online courses</strong>
              </div>
              <div>Explore a variety of fresh topics</div>
            </div>
          </div>
        </div>
        <div class="col-4">
          <div class="row">
            <div class="col-2">
              <v-icon style="color: white;font-size: 50px">mdi-account-check</v-icon>
            </div>
            <div class="col-10" style="padding-left: 0">
              <div>
                <strong>Expert instruction</strong>
              </div>
              <div>Find the right instructor for you</div>
            </div>
          </div>
        </div>
        <div class="col-4">
          <div class="row">
            <div class="col-2">
              <v-icon style="color: white;font-size: 50px">mdi-restart</v-icon>
            </div>
            <div class="col-10" style="padding-left: 0">
              <div>
                <strong>Lifetime access</strong>
              </div>
              <div>Learn on your schedule</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Collection></Collection>
    <div class="more-info row">
      <div class="col-4 info-content">
        <div class="row virtual-col">
          <div class="col-2">
            <v-icon style="font-size: 50px">mdi-restart</v-icon>
          </div>
          <div class="col-10">
            <div style="font-size: 18px">
              <b>Go at your own pace</b>
            </div>
            <div>Enjoy lifetime access to courses on Udemy’s website and app</div>
          </div>
        </div>
      </div>
      <div class="col-4 info-content">
        <div class="row virtual-col">
          <div class="col-2">
            <v-icon style="font-size: 50px">mdi-account-check</v-icon>
          </div>
          <div class="col-10">
            <div style="font-size: 18px">
              <b>Learn from industry experts</b>
            </div>
            <div>Select from top instructors around the world</div>
          </div>
        </div>
      </div>
      <div class="col-4 info-content">
        <div class="row virtual-col">
          <div class="col-2">
            <v-icon style="font-size: 50px">mdi-play-circle</v-icon>
          </div>
          <div class="col-10">
            <div style="font-size: 18px">
              <b>Find video courses on any topic</b>
            </div>
            <div>Build your library for your career and personal growth</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Collection from "../../components/Collection/Collection";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      arrayCategory: [
        { name: "tab 1", id: "1" },
        { name: "tab 2", id: "2" },
        { name: "tab 3", id: "3" },
        { name: "tab 4", id: "4" },
        { name: "tab 5", id: "5" }
      ],
      currentCategory: {}
    };
  },
  components: { Collection },
  methods: {
    changeCategory(cate) {
      this.currentCategory = cate;
    }
  },
  computed: {
    ...mapGetters({
      guestCategoryList: "guestCategoryList",
      guestCategoryLoading: "guestCategoryLoading"
    }),
    loadCurrentCategoryID() {
      return this.currentCategoryId;
    }
  }
};
</script>
<style lang="scss" scoped>
.imgContent {
  //background-image: url("https://drive.google.com/uc?id=1jxlL18Xj74SFoN76OqQ4mfTEv2HIOpNk&authuser=0");
  background-image: url("../../assets/udemy.jpg");
  width: 100%;
  height: 30rem;
  padding-top: 8rem;
  padding-left: 5rem;
  .my-form {
    color: white;
    width: 35%;
  }
}
.my-label {
  background: linear-gradient(-45deg, #ec5252 0%, #6e1a52 100%);
  color: white;
  padding-left: 8rem;
}
.more-info {
  background-color: #f2f3f5;
  width: 100%;
  margin: 1rem 0;
  border-radius: 5px;
  .info-content {
    border-radius: 3px;
    padding: 2rem 3%;
    .virtual-col {
      background-color: white;
      border: 1px solid silver;
      padding: 1rem 0.5rem;
      padding-bottom: 2rem;
      .col-10,
      .col-2 {
        padding-left: 0;
      }
    }
  }
}
</style>