<template>
  <div class="instructor-overview-container">
    <div class="instructor-overview-container">
      <div class="row">
        <div class="col-1">
          <img :src="avatarURL" />
        </div>
        <div class="col-9" style="padding-top: 0">
          <div>
            <span>
              <b>{{comment.name}}</b>
            </span>
            <span>
              &nbsp;
              <span
                style="font-size: 12px;margin-left: 1rem"
              >({{comment.updated_at.slice(0,10)}})</span>
            </span>
          </div>
          <div>
            <span>{{comment.comment}}</span>
          </div>
          <div>
            <span>
              <a
                :href="'#'+i"
                data-toggle="collapse"
                style="margin-right: 1rem"
                role="button"
                aria-expanded="false"
                aria-controls="collapseExample"
              >trả lời</a>
              &nbsp;
              <a
                class="my-link"
                v-if="comment.user_id == userUserInfo.user_id"
                @click="deleteComment()"
              >xóa</a>
              <v-dialog width="200" v-model="userDeleteCommentLoading">
                <v-card
                  width="200"
                  height="3rem"
                  style="padding-top: 0.7rem"
                  class="text-center"
                >Đang xóa ...</v-card>
              </v-dialog>
            </span>
            <CommentBox :collapse_id="i" :rootComment="rootComment" :replay="true"></CommentBox>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CommentBox from "../CommentBox/CommentBox";
import apiConfig from "../../API/api.json";
import { mapGetters } from "vuex";
export default {
  props: ["i", "comment", "rootComment"],
  components: { CommentBox },
  created() {
    if (this.comment.avatar != null) {
      this.avatarURL = this.comment.avatar;
    } else {
      this.avatarURL =
        apiConfig.avatarURL + "/" + this.comment.user_id + "/avatar.png";
    }
  },
  data() {
    return {
      avatarURL: ""
    };
  },
  computed: {
    ...mapGetters({
      userUserInfo: "userUserInfo",
      userCurrentVideoLesson: "userCurrentVideoLesson",
      userStudentCourseLessonCommentLoading:
        "userStudentCourseLessonCommentLoading",
      userDeleteCommentLoading: "userDeleteCommentLoading"
    })
  },
  methods: {
    deleteComment() {
      let comment = {
        lesson_comment_id: this.comment.lesson_comment_id,
        lesson_id: this.userCurrentVideoLesson.lesson_id
      };
      this.$store.commit("user_student_lesson_comment_delete", true);
      this.$store
        .dispatch("userDeleteCommentStudentLesson", comment)
        .then(() => {
          this.$store.commit("user_student_lesson_comment_delete", false);
        });
    }
  }
};
</script>
<style lang="scss" scoped>
.instructor-overview-container {
  margin: 1rem 0;
  position: relative;
  img {
    margin-top: -1rem;
    border-radius: 50%;
    width: 4rem;
    height: 4rem;
  }
}
.my-link {
  color: #007bff;
  cursor: pointer;
  &:hover {
    color: #007bff;
  }
}
</style>