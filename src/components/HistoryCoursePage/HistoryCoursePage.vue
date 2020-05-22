<template>
  <div>
    <div class="history-item">
      <a
        @click="changeItem()"
        @mouseup="clearLink()"
        @contextmenu="addLink"
        :ref="course.course_id"
        href="#"
      >
        <div class="row">
          <div class="col-4">
            <img :src="imageURL" alt />
          </div>
          <div class="col-8">
            <div style="padding-left:0.2rem">
              <strong>{{course.name}}</strong>
            </div>
            <div>
              <span style="margin-right: 1rem">
                <StarRating
                  :rating="course.rating"
                  :read-only="true"
                  :increment="0.5"
                  :star-size="20"
                ></StarRating>&nbsp;
              </span>
            </div>
            <div style="padding-left:0.2rem">
              <strong
                v-if="course.priceTier!=0"
              >{{course.priceTier.toLocaleString('it-IT', {style : 'currency', currency : 'VND'})}}</strong>
              <strong v-else style="color: red">Free</strong>
            </div>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>
<script>
import StarRating from "../../../node_modules/vue-star-rating/src/star-rating";
import apiConfig from "../../API/api.json";
export default {
  props: ["course"],
  components: { StarRating },
  data() {
    return {
      imageURL: ""
    };
  },
  created() {
    this.imageURL =
      apiConfig.imageURL +
      "/" +
      this.course.course_id +
      "/" +
      this.course.course_id +
      ".png";
  },
  methods: {
    changeItem() {
      this.$emit("changeItem", this.course.course_id);
    },
    clearLink() {
      this.$refs[this.course.course_id].href = "#";
    },
    addLink(e) {
      this.$refs[this.course.course_id].href = this.course.course_id;
    }
  }
};
</script>
<style lang="scss" scoped>
a {
  text-decoration: none;
  color: black;
  &:hover {
    text-decoration: none;
    color: black;
  }
}
.history-item {
  width: 100%;
  height: 6rem;
  margin: 0;
  border-bottom: 1px solid silver;
  cursor: pointer;
  color: black;
  &:hover {
    background-color: #c2deff;
  }
  .row {
    padding: 0.5rem;
    width: 100%;
    margin: 0;
    .col-4 {
      padding: 0;
      img {
        margin: 0;
        width: 100%;
        height: 5rem;
      }
    }
    .col-8 {
      padding: 0;
      padding-left: 1rem;
    }
  }
}
</style>