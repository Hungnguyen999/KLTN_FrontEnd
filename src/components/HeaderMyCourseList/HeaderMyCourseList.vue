<template>
  <div style="margin: 0 0.5rem;margin-left:0">
    <v-menu open-on-hover offset-y>
      <template v-slot:activator="{ on }">
        <button class="btn hover-button" v-on="on">Khóa học</button>
      </template>
      <v-card class="my-card" width="300">
        <div v-for="(course,index) in userCourseLikeList" :key="index">
          <ItemOfList :Item="course.course"></ItemOfList>
        </div>
        <div style="margin-top: 1rem;width:100%">
          <button
            style="width:100%;"
            class="btn btn-info"
            v-if="userCourseLikeList != null && userCourseLikeList.length > 3"
          >Xem thêm</button>
          <h5
            v-if="(userCourseLikeList == null || userCourseLikeList.length==0)"
            class="text-center"
          >Danh sách rỗng!</h5>
        </div>
      </v-card>
    </v-menu>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import ItemOfList from "../ItemOfList/ItemOfList";
export default {
  components: { ItemOfList },
  computed: {
    ...mapGetters({
      userUserInfo: "userUserInfo",
      userUserInfoLoading: "userUserInfoLoading",
      userCourseLikeList: "userCourseLikeList",
      userCourseLikeLoading: "userCourseLikeLoading"
    })
  }
};
</script>
<style lang="scss" scoped>
.my-card {
  min-height: 6rem !important;
  padding: 0.7rem 0.5rem;
}
.hover-button {
  color: black;
  &:hover {
    background-color: #ece8e8;
  }
  &:focus {
    outline: none;
  }
}
</style>