<template>
  <div>
    <div :class="{'collapse' : replay == true}" :id="cmtID">
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
          <button class="btn btn-secondary">Nhận xét</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  created() {
    if (this.replay == true) {
      this.cmtID = this.id;
    }
  },
  props: ["replay", "id"],
  data() {
    return {
      cmtID: "publicCMT",
      text: ""
    };
  },
  methods: {
    comment() {}
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