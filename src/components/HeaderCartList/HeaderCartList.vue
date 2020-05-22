<template>
  <div style="margin: 0 0.5rem">
    <v-menu open-on-hover offset-y>
      <template v-slot:activator="{ on }">
        <button @click="goToCart()" class="hover-button" v-on="on">
          <v-badge
            v-if="userCourseListCartList!=null && userCourseListCartList.length > 0"
            color="pink"
            :content="userCourseListCartList.length"
            :close-on-click="false"
            :close-on-content-click="false"
          >
            <v-icon style="color:black" size="20">mdi-cart</v-icon>
          </v-badge>
          <v-icon v-else style="color:black" size="20">mdi-cart</v-icon>
        </button>
      </template>
      <v-card class="my-card" width="300">
        <div v-for="(course,index) in userCourseListCartList" :key="index">
          <ItemOfList :Item="course"></ItemOfList>
        </div>
        <div style="margin-top: 1rem;width:100%">
          <button
            style="width:100%;"
            class="btn btn-info"
            v-if="userCourseListCartList != null && userCourseListCartList.length > 3"
          >Xem thêm</button>
          <h5
            v-if="(userCourseListCartList == null || userCourseListCartList.length==0)"
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
      userCourseListCartList: "userCourseListCartList",
      userCourseListCartLoading: "userCourseListCartLoading"
    })
  },
  created() {
    this.$store.dispatch('userGetCart')
  },
  methods: {
    goToCart() {
      this.$router.push({name: 'cart-page'})
    }
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