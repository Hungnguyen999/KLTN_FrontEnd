<template>
  <div>
    <div :class="{'collapse' : replay == true}" :id="collapse_id">
      <div class="my-comment">
        <b-form-textarea
          placeholder="Thêm bình luận nhận xét"
          rows="2"
          max-rows="2"
          style="resize: none;"
          aria-expanded="false"
          v-model="text"
        ></b-form-textarea>
        <div class="comment-button">
          <a
            :id="'cancel'+cmtID"
            class="btn"
            style="margin-right: 1rem"
            :href="'#'+ cmtID"
            data-toggle="collapse"
            role="button"
            aria-expanded="false"
            :aria-controls="cmtID"
            v-if="replay"
            @click="text =''"
          >Hủy</a>
          <button class="btn btn-secondary" @click="comment()">Nhận xét</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  created() {
    if (this.replay == true) {
      this.cmtID = this.collapse_id;
    }
  },
  props: ["replay", "collapse_id", "rootComment"],
  data() {
    return {
      cmtID: "publicCMT",
      text: ""
    };
  },
  methods: {
    comment() {
      let reply_of = null;
      if (this.rootComment != null) {
        reply_of = this.rootComment.lesson_comment_id;
      }
      let comment = {
        course_id: this.userStudentCourseLessonList.course_id,
        reply_of: reply_of,
        comment: this.text,
        lesson_id: this.userCurrentVideoLesson.lesson_id
      };
      this.$store.dispatch("userCommentStudentLesson", comment).then(() => {
        let element = document.getElementById("cancel" + this.cmtID);
        if (element != null) {
          element.click();
        }
        this.text = "";
      });
    }
  },
  computed: {
    ...mapGetters({
      userStudentCourseLessonList: "userStudentCourseLessonList",
      userStudentCourseLessonLoading: "userStudentCourseLessonLoading",
      userCurrentVideoLesson: "userCurrentVideoLesson"
    })
  }
};
</script>
<style lang="scss" scoped>
.my-comment {
  position: relative;
  height: 7rem;
  .comment-button {
    position: absolute;
    margin: 0.5rem 0;
    right: 0;
    .btn {
      border: 1px solid;
      opacity: 0.7;
      &:hover {
        opacity: 1;
      }
    }
    button:focus {
      outline: 0px !important;
      -webkit-appearance: none;
      box-shadow: none !important;
    }
  }
}
</style>