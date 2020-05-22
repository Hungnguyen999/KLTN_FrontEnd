<template>
  <div>
    <div v-if="!guestSearchLoading">
      <a
        class="my-link"
        @click="changeItem()"
        @mouseup="clearLink()"
        @contextmenu="addLink"
        :ref="course.course_id"
        href="#"
      >
        <div class="row">
          <div class="col-7">
            <div style="padding-right: 1rem">
              <img :src="imageURL" style="width: 100%;height: 6rem" />
            </div>
            <div>
              <p>
                <b>{{course.name}}</b>
              </p>
              <p
                style="font-size: 14px;"
              >cập nhật: {{course.updated_at.slice(0, 10)}}/{{course.course_id}}</p>
            </div>
          </div>
          <div class="col-3">
            <span style="margin-right: 1.5rem">
              <v-icon size="20" style="color: #ffc107;">mdi-star</v-icon>
              &nbsp;{{course.star}}
            </span>
            <span>
              <v-icon size="20">mdi-account-outline</v-icon>
              &nbsp;{{course.studentCount}}
            </span>
            <br />
            <br />
            <span style="margin-right: 1.5rem">
              <v-icon size="20">mdi-play-circle</v-icon>
              &nbsp;{{course.totalVideo}}
            </span>
            <span>
              <v-icon size="20">mdi-alarm</v-icon>
              &nbsp;{{course.totalTime}}
            </span>
          </div>
          <div class="col-2" style="padding-left: 0">
            <b>
              <span v-if="course.priceTier != 0">
                {{course.priceTier.toLocaleString("it-IT", {
                style: "currency",
                currency: "VND"
                })}}
              </span>
              <span style="color: red" v-else>Free</span>
            </b>
          </div>
        </div>
      </a>
      <div
        class="heart-icon"
        @click="likeOrUnlike"
        @mouseover="heartHover = true"
        @mouseout="heartHover = false"
        v-if="!guestSearchLoading"
      >
        <div v-if="!heartHover">
          <v-icon style="color: red" v-if="!checkLike">mdi-heart-outline</v-icon>
          <v-icon style="color: red" v-if="checkLike">mdi-heart</v-icon>
        </div>
        <v-icon style="color:red" v-if="heartHover">mdi-heart</v-icon>
      </div>
      <v-dialog v-model="userCourseLikeLoading" width="300">
        <v-card width="300" style="padding: 2rem">Đang xử lý...</v-card>
      </v-dialog>
    </div>
    
  </div>
</template>
<script>
import apiConfig from "../../API/api.json";
import { mapGetters } from "vuex";
export default {
  props: ["course"],
  data() {
    return {
      heartHover: false,
      imageURL: "",
      baseURL: apiConfig.baseURL
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
    likeOrUnlike() {
      if (localStorage.token) {
        this.$store.dispatch(
          "userLikeOrUnLikeCourseLike",
          this.course.course_id
        ).then(() => {
          this.heartHover = false
        });
      } else {
        this.$emit("openLoginModal");
      }
      this.heartHover = false;
    },
    changeItem() {
      if (this.$route.name == "course-detail-page")
        this.$emit("changeItem", this.course.course_id);
      else {
        this.$router.push({
          name: "course-detail-page",
          params: { id: this.course.course_id }
        });
      }
    },
    clearLink() {
      this.$refs[this.course.course_id].href = "#";
    },
    addLink(e) {
      this.$refs[this.course.course_id].href = this.course.course_id;
    }
  },
  computed: {
    ...mapGetters({
      userCourseLikeList: "userCourseLikeList",
      userCourseLikeLoading: "userCourseLikeLoading",
      guestSearchLoading: "guestSearchLoading"
    }),
    checkLike() {
      for (let i = 0; i < this.userCourseLikeList.length; i++) {
        if (this.userCourseLikeList[i].course_id == this.course.course_id) {
          return true;
        }
      }
      return false;
    },
    loadHover() {
      return this.heartHover;
    }
  }
};
</script>
<style lang="scss" scoped>
.row {
  .col-7 {
    display: grid;
    grid-template-columns: 35% 65%;
  }
}
.my-link {
  text-decoration: none;
  color: black;
  font-weight: 400;
}
.heart-icon {
  position: absolute;
  right: 1rem;
  top: 0.8rem;
}
</style>