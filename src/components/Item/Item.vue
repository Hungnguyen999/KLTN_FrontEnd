<template>
  <div>
    <v-menu
      style="z-index: 10"
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
            <v-img :style="setBackground" class="my-image"></v-img>
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
                    :rating="course.rating"
                    :increment="0.1"
                    :fixed-points="1"
                    :star-size="18"
                    :read-only="true"
                  ></startRating>
                </b>
                &nbsp;
                <i style="font-size: 13px">({{course.commentCount}})</i>
              </div>
              <div style="width: 100%;position: relative;text-align: right">
                <span>
                  <h4 v-if="course.priceTier!=0">{{course.priceTier}} VND</h4>
                  <h4 v-else>Free</h4>
                </span>
              </div>
            </v-card-text>
          </router-link>
        </v-card>
      </template>
      <v-card width="350" class="p-3">
        <p>Last updated: {{course.updated_at}}</p>
        <h5>{{course.name}}</h5>
        <v-card-subtitle style="margin-top: -1rem;margin-left: -1rem">
          <span v-for="(topic,index) in course.topicEnable" :key="index">
            <a href="#">{{topic.name}}</a>&nbsp;
          </span>
        </v-card-subtitle>
        <v-card-subtitle style="margin-top: -1rem;margin-left: -1rem;font-size: 12px">
          <span>
            <v-icon>mdi-play-circle</v-icon>
            &nbsp;{{course.totalVideo}} video
          </span>
          <span style="margin-left: 2rem">
            <v-icon>mdi-alarm</v-icon>
            &nbsp;{{course.totalTime}}
          </span>
        </v-card-subtitle>
        <div class="item-description" v-html="course.description"></div>
        <div style="margin: 1rem 0">
          <router-link :to="{name: 'course-detail-page', params: {id: course.course_id}}">Xem thêm</router-link>
        </div>
        <span>Kiến thức học được:</span>
        <ul style="font-size: 14px">
          <li v-for="(learn,index) in course.whatLearn" :key="index">{{learn.learn}}</li>
        </ul>
        <v-card-actions>
          <div class="row">
            <div class="col-9">
              <v-btn
                style="width: 100%"
                @click="addToCart()"
                class="addCartButton"
                :loading="userCourseListCartLoading"
              >
              <span v-if="course.priceTier==0">Thêm vào kho</span><span v-else>Thêm vào giỏ hàng</span></v-btn>
            </div>
            <div class="col-2">
              <button
                style="background-color: transparent;border: none;"
                class="btn-like"
                v-if="!userCourseLikeLoading"
                @click="likeOrUnlike()"
                @mouseover="hoverHeart = true"
                @mouseout="hoverHeart = false"
              >
                <div v-if="!hoverHeart">
                  <v-icon style="font-size: 2rem;color: red" v-if="!checkLike">mdi-heart-outline</v-icon>
                  <v-icon style="font-size: 2rem;color: red" v-if="checkLike">mdi-heart</v-icon>
                </div>
                <div v-else>
                  <v-icon style="font-size: 2rem;color: red">mdi-heart</v-icon>
                </div>
              </button>
              <v-progress-circular
                indeterminate
                color="red"
                v-if="userCourseLikeLoading"
                :loading="userCourseLikeLoading"
              ></v-progress-circular>
            </div>
          </div>
        </v-card-actions>
      </v-card>
    </v-menu>
  </div>
</template>
<script>
import startRating from "../../../node_modules/vue-star-rating/src/star-rating";

import apiConfig from "../../API/api.json";
import { mapGetters } from "vuex";
export default {
  components: { startRating },
  props: ["course"],
  data() {
    return {
      hoverHeart: false,
      readMore: false,
      liked: false,
      imageURL: "",
      setBackground: "",
      checkLogin: "login-modal"
    };
  },
  mounted() {
    if (localStorage.token) this.checkLogin = "";
    this.imageURL =
      apiConfig.imageURL +
      "/" +
      this.course.course_id +
      "/" +
      this.course.course_id +
      ".png";
    this.setBackground = "background-image: url('" + this.imageURL + "')";
  },
  methods: {
    likeOrUnlike() {
      if (localStorage.token) {
        this.$store.dispatch(
          "userLikeOrUnLikeCourseLike",
          this.course.course_id
        );
        this.hoverHeart = false;
      } else {
        this.$emit("openLoginModal");
      }
    },
    addToCart() {
      this.$store
        .dispatch("userAddToCart", this.course.course_id)
        .then(response => {
          let icon = "";
          response.data.RequestSuccess ? (icon = "success") : (icon = "error");
          this.$swal({
            icon: icon,
            title: response.data.msg
          });
        });
    }
  },
  computed: {
    ...mapGetters({
      userCourseLikeList: "userCourseLikeList",
      userCourseLikeLoading: "userCourseLikeLoading",
      userCourseListCartLoading: "userCourseListCartLoading"
    }),
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
    checkLike() {
      for (let i = 0; i < this.userCourseLikeList.length; i++) {
        if (this.userCourseLikeList[i].course_id == this.course.course_id) {
          return true;
        }
      }
      return false;
    }
  }
};
</script>
<style lang="scss" scoped>
.my-image {
  width: 100%;
  height: 10rem;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
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
.btn-like {
  background-color: transparent !important;
  &:hover {
    background-color: transparent !important;
  }
}
.item-description {
  max-height: 10rem;
  overflow: hidden;
  margin-bottom: 0.5rem;
}
</style>