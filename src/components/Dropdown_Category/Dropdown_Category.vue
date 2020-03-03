<template>
  <div>
    <div class="dropdown" style="margin-right: 2rem;">
      <button
        class="btn btn-default dropdown-toggle"
        type="button"
        id="dropdownMenuButton"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
        @mouseover="displayCol2 = false; displayCol3 = false"
      >
        <b-icon-document-richtext></b-icon-document-richtext>&nbsp;Category
      </button>
      <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <div class="row" style="width: 45rem;">
          <div class="col-4 my-col-1" @mouseover="hoverCol1()">
            <div>1.1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
          </div>
          <div
            class="col-4 my-col-2"
            :style="loadDisplayCol2"
            @mouseover="hoverCol2()"
            @mouseout="outCol2"
            style="display: none"
          >
            <div>2.1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
          </div>
          <div
            class="col-4 my-col-3"
            @mouseover="hoverCol3()"
            :style="loadDisplayCol3"
            style="display: none"
          >
            <div>3.1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      displayCol2: false,
      displayCol3: false
    };
  },
  methods: {
    hoverCol1() {
      this.displayCol2 = true;
      this.displayCol3 = false;
    },
    hoverCol2() {
      this.displayCol2 = true;
      this.displayCol3 = true;
    },
    hoverCol3() {
      this.displayCol3 = true;
      this.displayCol2 = true;
    },
    outCol2() {
      if (this.displayCol3 != true) {
        this.displayCol2 = false;
      }
    }
  },
  computed: {
    loadDisplayCol2() {
      if (this.displayCol2 == true || this.displayCol3)
        return "display: block;";
      else return "display: none;";
    },
    loadDisplayCol3() {
      console.log(this.displayCol3);
      if (this.displayCol3 == true) return "display: block;";
      else return "display: none;";
    }
  }
};
</script>
<style lang="scss" scoped>
.dropdown {
  .dropdown-menu {
    transition: all 0.5s;
    overflow: hidden;
    transform-origin: top center;
    transform: scale(1, 0);
    display: block;
  }
  &:hover {
    .dropdown-menu {
      display: block;
      transform: scale(1);
    }
    .dropdown-toggle {
      background-color: #ece8e8;
      border-radius: 3px;
    }
  }
}
.dropdown-toggle {
  &:hover {
    background-color: #ece8e8;
    border-radius: 3px;
  }
}
.dropdown-toggle::after {
  display: none;
}
button:focus {
  outline:0px !important;
    -webkit-appearance:none;
    box-shadow: none !important;
}
</style>