<template>
  <div>
    <v-card style="width: 100%;height: 100%;background: white;padding-bottom: 1rem">
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
        </v-card-text>
      </router-link>
      <div style="width:100%;text-align:center;margin-top: 1rem">
        <v-btn small color="primary" style="margin-right: 1rem">Đánh giá</v-btn>
        <v-btn small color="red">
          <router-link
            style="color: white"
            :to="{name: 'lesson-page', params: {id: course.course_id}}"
          >Vào học</router-link>
        </v-btn>
      </div>
    </v-card>
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
a {
  text-decoration: none;
  color: white;
  &:hover {
    text-decoration: none;
    color: white;
  }
}
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