<template>
  <div class="container" style="position: relative">
    <aglie ref="recommend" :options="myOption">
      <div class="slide" v-for="(slide,index) in loadSlide" :key="index">
        <div class="row">
          <div v-for="(column,index2) in loadSlide[index]" :key="index2" class="col-3 col-md-3">
            <div v-for="(item, index3) in loadSlide[index][index2]" :key="index3">
              <button class="my-button">Topic {{item.name}}</button>
            </div>
          </div>
        </div>
      </div>
    </aglie>
    <button class="btn collection-btn left" @click="$refs['recommend'].goToPrev()">
      <i class="fas fa-chevron-left"></i>
    </button>
    <button class="btn collection-btn right" @click="$refs['recommend'].goToNext()">
      <i class="fas fa-chevron-right"></i>
    </button>
  </div>
</template>
<script>
import { VueAgile } from "vue-agile";

export default {
  components: { aglie: VueAgile },
  data() {
    return {
      myOption: {
        navButtons: false,
        dots: false
      },
      array: [
        { id: 1, name: "T1" },
        { id: 2, name: "T2" },
        { id: 3, name: "T3" },
        { id: 4, name: "T4" },
        { id: 5, name: "T5" },
        { id: 6, name: "T6" },
        { id: 7, name: "T7" },
        { id: 8, name: "T8" },
        { id: 9, name: "T9" },
        { id: 10, name: "T10" }
      ],
      slide: [],
      perSlide: 8
    };
  },
  created() {
    this.handleData();
  },
  methods: {
    handleData() {
      let index = 0;
      let indexSlide = 0;
      let indexCol = 0;
      this.slide[indexSlide] = [];
      this.slide[indexSlide][indexCol] = [];
      for (let i = 0; i < this.array.length; i++) {
        if (index % 2 == 0 && index != 0) {
          indexCol++;
          this.slide[indexSlide][indexCol] = [];
        }
        if (indexCol == 4) {
          indexCol = 0;
          indexSlide++;
          this.slide[indexSlide] = [];
          this.slide[indexSlide][indexCol] = [];
        }
        this.slide[indexSlide][indexCol].push(this.array[i]);
        index++;
      }
      console.log(this.slide);
    }
  },
  computed: {
    loadSlide() {
      return this.slide;
    }
  }
};
</script>
<style lang="scss" scoped>
.row {
  padding: 0;
  margin: 0;
  .col-3 {
    text-align: center;
    margin-bottom: 0.5rem;
    .my-button {
      width: 100%;
      height: 3rem;
      background-color: white;
      border: 1px solid silver;
      margin-bottom: 0.5rem;
      text-align: left;
      padding-left: 1.5rem;
      -webkit-transition-duration: 0.4s; /* Safari */
      transition-duration: 0.4s;
      &:hover {
        -webkit-box-shadow: 0px 5px 8px 1px rgba(226, 223, 223, 1);
        -moz-box-shadow: 0px 5px 8px 1px rgba(226, 223, 223, 1);
        box-shadow: 0px 5px 8px 1px rgba(226, 223, 223, 1);
      }
    }
  }
}
.collection-btn {
  position: absolute;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  top: 20%;
  border: 1px solid silver;
  background-color: #f3f7f7;
  &:focus {
    outline: 0px !important;
    -webkit-appearance: none;
    box-shadow: none !important;
  }
}
.left {
  left: 0.1rem;
}
.right {
  right: 0.1rem;
}
</style>