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
      <div class="container">
        <h2 style="padding-left: 1rem;">Lĩnh vực liên quan</h2>
      </div>
      <CollectionRecommend></CollectionRecommend>
    </div>
    <div class="container">
      <b-tabs style="margin: 1rem;">
        <b-tab v-for="(item,index) in arrayCategory" :key="index" @click="changeItem(item.id)">
          <template slot="title">{{item.name}}</template>
        </b-tab>
      </b-tabs>
      <Collection :id="loadCurrentCategoryID"></Collection>
    </div>
  </div>
</template>
<script>
import Collection from "../../components/Collection/Collection";
import CollectionRecommend from "../../components/CollectionRecommend/CollectionRecommend";
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
      currentCategoryId: 0
    };
  },
  components: { Collection, CollectionRecommend },
  methods: {
    changeItem(CategoryID) {
      this.currentCategoryId = CategoryID;
    }
  },
  computed: {
    loadCurrentCategoryID() {
      return this.currentCategoryId;
    }
  }
};
</script>