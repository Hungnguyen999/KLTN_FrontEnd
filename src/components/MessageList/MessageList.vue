<template>
  <div style="padding: 1rem;">
    <div v-for="(msg,index) in messageList" :key="index">
      <div class="row" v-if="msg.toUser == item.id">
        <div class="col-11">
          <div style="float:right;position: relative">
            <div>
              <span>(10:15 19/03/2020)</span>&nbsp;
              <router-link to="google">{{item.name}}</router-link>
            </div>
            <div class="my-msg text-left" style="position:absolute; right: 0">{{msg.msg}}</div>
          </div>
        </div>
        <div class="col-1">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTaYoqHma4vqTKWiXR5y2EGoeOJTbPNS1cJNc_rVeAq0BKRgS7w&usqp=CAU"
          />
        </div>
      </div>
      <div class="row" v-else>
        <div class="col-1">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTaYoqHma4vqTKWiXR5y2EGoeOJTbPNS1cJNc_rVeAq0BKRgS7w&usqp=CAU"
          />
        </div>
        <div class="col-9">
          <div>
            <router-link to="google">{{item.name}}</router-link>
            <span>&nbsp;(10:15 19/03/2020)</span>
          </div>
          <div class="my-msg text-left">{{msg.msg}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["item", "messageList"],
  data() {
    return {};
  },
  watch: {
    item(newValue) {
      this.item = newValue;
    },
    messageList(newValue) {
      this.messageList = newValue;
    }
  }
};
</script>
<style lang="scss" scoped>
.row {
  .col-1 {
    img {
      width: 100%;
      height: 3rem;
      border-radius: 50%;
    }
  }
  .col-9 {
    padding-left: 0;
  }
}
.my-msg {
  border-radius: 10px;
  background-color: #ece8e8;
  min-height: 2rem;
  padding: 0.5rem;
  padding-left: 1rem;
  width: 100%;
  display: inline-block;
}
</style>