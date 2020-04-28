<template>
  <div>
    <v-menu
      style="z-index: 3"
      open-on-hover
      offset-x
      :close-on-click="false"
      :close-on-content-click="false"
    >
      <template v-slot:activator="{ on }">
        <v-card v-on="on" style="width: 100%;height: 100%;background: white;">
          <router-link
            class="item-link"
            :to="{name: 'course-detail-page', params: {id: course.course_id}}"
          >
            <v-img style="width: 100%;height: 8rem" src="https://picsum.photos/600/300/?image=25"></v-img>
            <v-card-text style="color: black;height: 100%;">
              <div>
                <b>{{summaryName}}</b>
              </div>
              <div style="font-size: 12px">
                <i>
                  Tác giả:
                  <strong>{{course.author}}</strong>
                </i>
              </div>
              <div style="padding: 0.5rem">
                <b>
                  <startRating
                    :inline="true"
                    :rating="3.6"
                    :increment="0.1"
                    :fixed-points="1"
                    :star-size="18"
                    :read-only="true"
                  ></startRating>
                </b>
                &nbsp;
                <i style="font-size: 13px">(789456)</i>
              </div>
              <div style="width: 100%;position: relative;text-align: right">
                <span>
                  <h4>$12.99</h4>
                </span>
              </div>
            </v-card-text>
          </router-link>
        </v-card>
      </template>
      <v-card width="350" class="p-3">
        <p>Last updated: 20/1/2019</p>
        <h5>{{course.name}}</h5>
        <v-card-subtitle style="margin-top: -1rem;margin-left: -1rem">
          <a href="#">Python</a>|
          <a href="#">abc</a>
        </v-card-subtitle>
        <v-card-subtitle style="margin-top: -1rem;margin-left: -1rem;font-size: 12px">
          <span>
            <v-icon>mdi-arrow-left-drop-circle</v-icon>
            &nbsp;{{course.totalVideo}} video
          </span>
          <span style="margin-left: 2rem">
            <v-icon>mdi-alarm</v-icon>
            &nbsp;{{course.totalTime}}
          </span>
        </v-card-subtitle>
        <div v-html="course.description"></div>
        <span>Kiến thức học được:</span>
        <ul style="font-size: 14px">
          <li v-for="(learn,index) in course.whatLearn" :key="index">{{learn.learn}}</li>
        </ul>
        <v-card-actions>
          <div class="row">
            <div class="col-9">
              <v-btn style="width: 100%" class="addCartButton">Thêm vào giỏ hàng</v-btn>
            </div>
            <div class="col-2">
              <button class="btn" @click="likeOrUnlike()" @mouseover="hoverHeart = true" @mouseout="hoverHeart = false">
                <i
                  style="font-size: 2rem;margin-top: -0.4rem;color: red"
                  v-if="!hoverHeart"
                  class="far fa-heart"
                ></i>
                <i
                  style="font-size: 2rem;margin-top: -0.4rem;color: red"
                  v-if="hoverHeart"
                  class="fas fa-heart"
                ></i>
              </button>
            </div>
          </div>
        </v-card-actions>
      </v-card>
    </v-menu>
  </div>
</template>
<script>
import startRating from "../../../node_modules/vue-star-rating/src/star-rating";
export default {
  components: { startRating },
  props: ["course"],
  data() {
    return {
      hoverHeart: false,
      isHover: false,
      readMore: false
    };
  },
  methods: {
    likeOrUnlike() {
      this.$store.dispatch('userLikeOrUnLikeCourseLike', this.course.course_id)
    }
  },
  computed: {
    summaryName() {
      if (this.course.name.length > 40) {
        return this.course.name.substring(0, 40) + "...";
      } else return this.course.name;
    },
    summaryAuthor() {
      if (this.course.author.length > 20) {
        return this.course.author.substring(0, 20) + "...";
      } else return this.course.author;
    },
    loadIsHover() {
      return this.isHover;
    }
  }
};
</script>
<style lang="scss" scoped>
.item-link {
  text-decoration: none;
  &:hover {
    -webkit-box-shadow: 0px 5px 8px 1px rgba(226, 223, 223, 1);
    -moz-box-shadow: 0px 5px 8px 1px rgba(226, 223, 223, 1);
    box-shadow: 0px 5px 8px 1px rgba(226, 223, 223, 1);
  }
}
.addCartButton {
  width: 80%;
  background-color: #fb4b5b !important;
  &:hover {
    color: white !important;
    background-color: #f8172b !important;
  }
}
button:focus {
  outline: 0px !important;
    -webkit-appearance: none;
    box-shadow: none !important;
}
</style>