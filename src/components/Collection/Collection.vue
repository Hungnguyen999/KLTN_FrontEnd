<template>
  <div style="position: relative;padding: 0 1rem;">
    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
      <button
        class="btn collection-btn left"
        href="#carouselExampleControls"
        role="button"
        data-slide="prev"
      >
        <i class="fas fa-chevron-left"></i>
      </button>
      <button
        class="btn collection-btn right"
        href="#carouselExampleControls"
        role="button"
        data-slide="next"
      >
        <i class="fas fa-chevron-right"></i>
      </button>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <div class="row">
            <div class="col" v-for="index in 4" :key="index">
              <Item :id="index"></Item>
            </div>
          </div>
        </div>

        <div class="carousel-item">
          <div class="row">
            <div class="col" v-for="index1 in 4" :key="index1">
              <Item :id="index1+5"></Item>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Item from "../Item/Item";
export default {
  components: { Item },
  data() {
    return {
      myOption: {
        navButtons: false,
        dots: false
      }
    };
  },
  methods: {}
};
</script>
<style lang="scss" scoped>
.collection-btn {
  position: absolute;
  z-index: 2;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  top: 50%;
  border: 1px solid silver;
  background-color: #f3f7f7;
  &:focus {
    outline: 0px !important;
    -webkit-appearance: none;
    box-shadow: none !important;
  }
}
.left {
  left: -1.7rem;
}
.right {
  right: -1.7rem;
}
</style>