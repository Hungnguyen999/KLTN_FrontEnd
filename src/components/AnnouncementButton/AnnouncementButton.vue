<template>
  <div>
    <button
      id="annouce"
      data-toggle="dropdown"
      aria-haspopup="true"
      aria-expanded="false"
      class="btn btn-default circle-button normal-button"
    >
      <i class="fas fa-bell fa-lg"></i>
    </button>
    <b-popover target="annouce" triggers="hover" placement="bottomleft">
      <div>
        <v-tabs style="width: 100%;" slider-size="1" fixed-tabs>
          <v-tab style="height: 2rem;">Học viên</v-tab>
          <v-tab style="height: 2rem;">Giảng viên</v-tab>
        </v-tabs>
        <div class="annouce-item">
          <ItemOfListAnnouce></ItemOfListAnnouce>
        </div>
      </div>
    </b-popover>
  </div>
</template>
<script>
import ItemOfListAnnouce from "../ItemOfListAnnouce/ItemOfListAnnouce";

export default {
  components: { ItemOfListAnnouce }
};
</script>
<style lang="scss" scoped>
.annouce-item {
  width: 100%;
}
.circle-button {
  border-radius: 20px;
}
button {
  margin-right: 1rem;
  &:focus {
    outline: 0px !important;
    -webkit-appearance: none;
    box-shadow: none !important;
  }
}
.normal-button:hover {
  background-color: #ece8e8;
}
.normal-button {
  height: 2.5rem;
}
.popover .b-popover .bs-popover-bottom {
  width: 30rem;
}
</style>