<template>
  <div style="width: auto;">
    <router-link class="item-link" :to="{ name: 'about-page' }">
      <b-card
        img-src="https://picsum.photos/600/300/?image=25"
        img-alt="Image"
        img-top
        tag="article"
        style="width: 100%;"
        class="mb-2 item-link"
        :id="'popover-target'+id"
      >
        <div>
          <span style="font-size: 10pt;width: 100%;color: black;">{{SummaryTitle}}</span>
        </div>
        <div>
          <span class="text-left" style="color:black;font-weight: 200;margin-top: 0.5rem;">
            <i>{{SummaryAuthor}}</i>
            {{id}}
          </span>
        </div>
        <b-popover
          :target="'popover-target'+id"
          triggers="hover"
          placement="right"
          custom-class="my-popver"
        >
          <template v-slot:title>{{Item.title}}</template>
          <div style="color: #7D6C6C;font-size: 11pt;margin-bottom: 5rem;">
            <div>
              <span>
                Tổng số bài giảng:
                <span style="color: black">
                  308
                  <b-icon-camera-video-fill font-scale="1"></b-icon-camera-video-fill>
                </span>
              </span>
            </div>
            <div>
              <span>Kiến thức khóa học</span>
              <ul>
                <li>Kiến thức 1</li>
                <li>Kiến thức 2</li>
                <li>Kiến thức 3</li>
              </ul>
            </div>
          </div>
          <div class="row">
            <div class="col-9">
              <button class="btn btn-danger" style="width: 100%;">Thêm vào giỏ hàng</button>
            </div>
            <div
              class="col-3"
              @mouseover="isHover = true"
              @mouseout="isHover = false"
              style="cursor: pointer;font-size: 1.5rem;color:red;"
            >
              <i class="far fa-heart" v-if="!loadIsHover"></i>
              <i class="fas fa-heart" v-if="loadIsHover"></i>
            </div>
          </div>
        </b-popover>
        <div></div>
      </b-card>
    </router-link>
  </div>
</template>
<script>
export default {
  props: ["id"],
  data() {
    return {
      Item: {
        title: "Become a Product Manager | Learn the Skills & Get the Job",
        author: "ABCXYZ",
        content:
          "The most complete course available on Product Management. 13+ hours of videos, activities, interviews, & more",
        stars: 5,
        sold: 20000
      },
      isHover: false,
      readMore: false
    };
  },
  computed: {
    SummaryTitle() {
      if (this.Item.title.length > 40) {
        return this.Item.title.substring(0, 40) + "...";
      } else return this.Item.title;
    },
    SummaryAuthor() {
      if (this.Item.author.length > 20) {
        return this.Item.author.substring(0, 20) + "...";
      } else return this.Item.author;
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
.my-popover {
  
}
</style>