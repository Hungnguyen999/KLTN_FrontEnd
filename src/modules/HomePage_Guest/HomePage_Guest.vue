<template>
  <div>
    <b-carousel
      id="carousel-1"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
    >
      <b-carousel-slide
        caption="First slide"
        text="Nulla vitae elit libero, a pharetra augue mollis interdum."
        img-src="https://www.zendvn.com/images/slider/KOO5CnJ6Hr.jpeg"
      ></b-carousel-slide>
      <b-carousel-slide img-src="https://www.zendvn.com/images/slider/DeX0M02V6t.jpeg"></b-carousel-slide>
      <b-carousel-slide img-src="https://www.zendvn.com/images/slider/t1HrRjUfzZ.jpeg"></b-carousel-slide>
    </b-carousel>
    <div>
      <CollectionRecommend></CollectionRecommend>
    </div>
    <div class="container">
      <v-tabs style="margin: 1rem;">
        <v-tab style="font-size: 12px" v-for="(cate,index) in guestCategoryList" @click="changeCategory(cate)" :key="index">{{cate.name}}</v-tab>
      </v-tabs>
      <Collection :caterogy="currentCategory"></Collection>
    </div>
  </div>
</template>
<script>
import Collection from "../../components/Collection/Collection";
import CollectionRecommend from "../../components/CollectionRecommend/CollectionRecommend";
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
  components: { Collection, CollectionRecommend },
  methods: {
    changeCategory(cate) {
      this.currentCategory = cate
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