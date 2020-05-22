<template>
  <div>
    <div class="comment-container">
      <CommentBox  :replay="false"></CommentBox>
      <ul class="list-history-comment">
        <li
          class="history-comment"
          v-for="(comment, index) in userStudentCourseLessonCommentList"
          :key="index"
        >
          <CommentView :rootComment="comment" :i="'comment'+index" :comment="comment"></CommentView>
          <div class="replay-view" v-if="comment.replies !=null && comment.replies.length > 0">
            <a
              role="button"
              data-toggle="collapse"
              aria-expanded="false"
              :href="'#list-replay-view' + index"
              @click="updateCurrentIndex(index-1,0)"
              v-if="!arrayShowView[index-1] "
            >
              Xem {{comment.replies.length}} trả lời
              <b-icon-chevron-down></b-icon-chevron-down>
            </a>
            <a
              role="button"
              data-toggle="collapse"
              aria-expanded="false"
              :href="'#list-replay-view' + index"
              @click="updateCurrentIndex(index-1,1)"
              v-if="arrayShowView[index-1]"
            >
              Ẩn {{comment.replies.length}} trả lời
              <b-icon-chevron-up></b-icon-chevron-up>
            </a>
            <div :id="'list-replay-view' + index" class="collapse">
              <div v-for="(reply, i) in comment.replies" :key="i">
                <CommentView :rootComment="comment" :i="'reply_'+index+'_'+i" :comment="reply"></CommentView>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import CommentBox from "../CommentBox/CommentBox";
import CommentView from "../CommentView/CommentView";
import { mapGetters } from "vuex";
export default {
  components: { CommentBox, CommentView },
  created() {
    for (let i = 0; i < 10; i++) {
      this.arrayShowView[i] = false;
    }
  },
  data() {
    return {
      arrayShowView: [],
      currentIndex: 0,
      currentValue: false
    };
  },
  methods: {
    updateCurrentIndex(index, type) {
      this.currentIndex = index;
      if (type === 0) {
        this.arrayShowView[index] = true;
      } else {
        this.arrayShowView[index] = false;
      }
      this.arrayShowView.push(true);
      this.arrayShowView.splice(this.arrayShowView.length - 1, 1);
    }
  },
  computed: {
    ...mapGetters({
      userCurrentVideoLesson: "userCurrentVideoLesson",
      userStudentCourseLessonCommentList: "userStudentCourseLessonCommentList",
      userStudentCourseLessonCommentLoading: "userStudentCourseLessonCommentLoading"
    })
  }
};
</script>
<style lang="scss" scoped>
.comment-container {
  margin-top: 1rem;
}
.list-history-comment {
  list-style-type: none;
  .history-comment {
    z-index: 1;
    .replay-view {
      margin-top: -1.5rem;
      margin-left: 4.5rem;
    }
  }
}
</style>