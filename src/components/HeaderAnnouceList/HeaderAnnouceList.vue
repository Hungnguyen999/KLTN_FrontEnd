<template>
  <div style="margin: 0 0.5rem">
    <v-menu open-on-hover offset-y>
      <template v-slot:activator="{ on }">
        <button class="hover-button" v-on="on">
          <v-badge
            v-if="userCourseLikeList!=null && userCourseLikeList.length > 0"
            color="pink"
            :content="userCourseLikeList.length"
            :close-on-click="false"
            :close-on-content-click="false"
          >
            <v-icon style="color:black" size="20">mdi-bell</v-icon>
          </v-badge>
          <v-icon v-else style="color:black" size="20">mdi-bell</v-icon>
        </button>
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
  width: 2.5rem;
  height: 2.5rem;
  padding-top: 0rem;
  border-radius: 50%;
  &:hover {
    background-color: #ece8e8;
  }
  &:focus {
    outline: none;
  }
}
</style>