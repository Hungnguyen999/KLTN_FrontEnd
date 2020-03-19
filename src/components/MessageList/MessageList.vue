<template>
  <div style="padding: 1rem;">
    <div v-for="(msg,index) in messageList" :key="index">
      <div class="row" v-if="msg.from == item.id">
        <div class="col-1">
          <img :src="item.avatar" />
        </div>
        <div class="col-9">
          <div>
            <router-link to="google">{{item.name}}</router-link>
            <span>&nbsp;(10:15 19/03/2020)</span>
          </div>
          <div class="my-msg text-left">{{msg.msg}}</div>
        </div>
      </div>
      <div class="row" v-if="msg.to == item.id">
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
          <img :src="item.avatar" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  props: ["item"],
  data() {
    return {
      messageList: [
        // msg_id , from_user, to_user, msg, created_at, updated_at
        // query
        // selete *
        // from message
        // where( (from_user = me && to_user = him) || ((from_him = me && to_me = him)) )
        // order by (tang dan) created_at
        {
          from: "vinhdlv",
          to: "vinh123dlv",
          msg:
            "Hey hey minasanHey hey minasanHey hey minasanHey hey minasanHey hey minasanHey hey minasanHey hey minasanHey hey minasanHey hey minasanHey hey minasanHey hey minasanHey hey minasanHey hey minasanHey hey minasanHey hey minasanHey hey minasanHey hey minasanHey hey minasanHey hey minasan",
          created_at: "when created msg"
        },
        {
          from: "vinh123dlv",
          to: "vinhdlv",
          msg:
            " ton tacton tacton tacton tacton tacton tacton tacton tacton tac",
          created_at: "when created msg"
        }
      ]
    };
  },
  watch: {
    item(newValue) {
      this.item = newValue;
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