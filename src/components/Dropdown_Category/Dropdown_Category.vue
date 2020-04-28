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
      >Thể loại</button>
      <div
        class="dropdown-menu"
        style="background-color: transparent;padding:0"
        aria-labelledby="dropdownMenuButton"
        v-if="!guestCategoryLoading"
        :style="resize"
      >
        <div class="row" style="background-color: transparent;min-height: 30rem;">
          <div class="col-4" style="background: white;min-height: 30rem;padding:0">
            <div class="cate-item" v-if="guestCategoryLoading">
              <span v-for="index in 9" :key="index" class="cate-item-grid text-center">
                <span style="width: 1.5rem;height: 1.5rem;background: silver;margin-left:0.5rem"></span>
                <span style="width: 95%; height: 1.5rem;background: silver"></span>
              </span>
            </div>
            <div v-if="!guestCategoryLoading">
              <div
                class="cate-item"
                @mouseover="hoverCol1(cate)"
                v-for="(cate,index) in guestCategoryList"
                :key="index"
              >
                <span class="cate-item-grid text-center">
                  <i :class="cate.icon_class" class="fa-lg" v-if="!cate.icon_class.includes('mdi')"></i>
                  <v-icon style="margin:0;padding:0;color:black;" v-else>{{cate.icon_class}}</v-icon>
                  <b class="text-left">{{cate.name}}</b>
                </span>
              </div>
            </div>
          </div>
          <div
            class="col-4 shadow"
            :style="loadDisplayCol2"
            @mouseout="outCol2"
            style="display: none;background: #FAFDFE;padding: 0"
            v-if="topicList != null || topicList.length == 0"
          >
            <div
              class="cate-item"
              style="padding-left: 0.5rem"
              v-for="(topic,index) in topicList"
              :key="index"
              @mouseover="hoverCol2(topic)"
            >
              <span class="cate-item-grid text-center">
                <i :class="topic.icon_class" class="fa-lg" v-if="!topic.icon_class.includes('mdi')"></i>
                <v-icon style="margin:0;padding:0;color:black;" v-else>{{topic.icon_class}}</v-icon>
                <b class="text-left">{{topic.name}}</b>
              </span>
            </div>
          </div>
          <div
            class="col-4 my-col-3"
            @mouseover="hoverCol3()"
            :style="loadDisplayCol3"
            style="display: none"
          >
            <div>
              <div class="cate-item" v-for="(course,index) in courseInTop" :key="index">
                <span class="cate-item-grid">
                  <b>{{topic.name}}</b>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  created() {
    let vm = this;
    this.$store.dispatch("guestGetCategory").then(() => {
      console.log(vm.guestCategoryList);
    });
  },
  data() {
    return {
      displayCol2: false,
      displayCol3: false,
      topicList: [],
      courseInTop: []
    };
  },
  methods: {
    hoverCol1(cate) {
      this.topicList = cate.topics_enable;
      this.displayCol2 = true;
      this.displayCol3 = false;
    },
    hoverCol2(topic) {
      this.courseInTop = topic.course_enable;
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
    },
    resize() {
      let style = "width: 20rem";
      if (this.displayCol2 && !this.displayCol3) {
        style = "width: 40rem";
      } else if (this.displayCol3) style = "width: 60rem";
      return style;
    }
  },
  computed: {
    ...mapGetters({
      guestCategoryList: "guestCategoryList",
      guestCategoryLoading: "guestCategoryLoading"
    }),
    loadDisplayCol2() {
      if (this.displayCol2 == true || this.displayCol3)
        return "display: block;";
      else return "display: none;";
    },
    loadDisplayCol3() {
      //console.log(this.displayCol3);
      if (this.displayCol3 == true) return "display: block;";
      else return "display: none;";
    }
  }
};
</script>
<style lang="scss" scoped>
.cate-item-loading {
  width: 100%;
  min-height: 2.5rem;
}
.cate-item {
  &:first-child {
    margin-top: 1rem;
  }
  width: 100%;
  font-size: 14px;
  padding: 0.5rem 0 0.3rem 1.5rem;
  min-height: 2.5rem;
  cursor: pointer;
  &:hover {
    background-color: #ece8e8;
  }
  .cate-item-grid {
    i {
      margin-top: 0.3rem;
    }
    display: grid;
    grid-template-columns: 15% 85%;
  }
}

.shadow {
  -webkit-box-shadow: 10px 10px 10px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 10px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 10px 10px 10px 0px rgba(0, 0, 0, 0.75);
}

.dropdown {
  .dropdown-menu {
    min-height: 30rem;
    width: 60rem;
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
  outline: 0px !important;
  -webkit-appearance: none;
  box-shadow: none !important;
}
</style>