<template>
  <div>
    <div class="comment-container">
      <CommentBox :replay="false"></CommentBox>
      <ul class="list-history-comment">
        <li class="history-comment" v-for="i in 10" :key="i">
          <CommentView :i="'i'+i"></CommentView>
          <div class="replay-view">
            <a
              role="button"
              data-toggle="collapse"
              aria-expanded="false"
              :href="'#list-replay-view' + i"
              @click="updateCurrentIndex(i-1,0)"
              v-if="!loadArrayShowView[i-1] "
            >
              Xem 5 trả lời
              <b-icon-chevron-down></b-icon-chevron-down>
            </a>
            <a
              role="button"
              data-toggle="collapse"
              aria-expanded="false"
              :href="'#list-replay-view' + i"
              @click="updateCurrentIndex(i-1,1)"
              v-if="loadArrayShowView[i-1]"
            >
              Ẩn 5 trả lời
              <b-icon-chevron-up></b-icon-chevron-up>
            </a>
            <div :id="'list-replay-view' + i" class="collapse">
              <div v-for="index in 5" :key="index">
                <CommentView :i="'index'+index"></CommentView>
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
export default {
  components: { CommentBox, CommentView },
  created() {
      for(let i =0;i<10;i++) {
          this.arrayShowView[i] = false
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
          this.currentIndex = index
          if(type===0) {
              this.arrayShowView[index] = true
          } else  {
              this.arrayShowView[index] = false
          }
          this.arrayShowView.push(true)
          this.arrayShowView.splice(this.arrayShowView.length-1,1)
          console.log(this.arrayShowView)
      }
  },
  computed: {
    loadArrayShowView() {
      return this.arrayShowView;
    }
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