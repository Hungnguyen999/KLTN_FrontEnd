<template>
  <div>
    <v-navigation-drawer
      class="left-menu"
      style="background-color: #52143e"
      permanent
      expand-on-hover
    >
      <v-list dark>
        <router-link :to="{name: 'instructor-page'}" style="padding-left: 0.25rem;color: white">
          <b-img
            rounded="circle"
            style="width: 3rem; height: 3rem"
            src="https://cdn2.vectorstock.com/i/1000x1000/63/61/education-logo-vector-11136361.jpg"
          ></b-img>&nbsp;
          <span
            style="position: absolute;margin-top: 0.5rem;margin-left: 0.5rem;color: white;"
          >
            <div>
              <b>GoodLearning</b>
            </div>
            <div style="font-size: 9pt;">
              <i>
                <b>Học tập Online</b>
              </i>
            </div>
          </span>
        </router-link>
      </v-list>

      <v-divider></v-divider>

      <div v-for="(item,index) in list" :key="index">
        <customList :list="item"></customList>
      </div>
    </v-navigation-drawer>
  </div>
</template>
<script>
import customList from "../customList/customList"
export default {
    props: ['list'],
    components: {customList}
};
</script>
<style lang="scss" scoped>
.left-menu {
  position: fixed;
  background-color: #52143e;
  z-index: 1;
}
</style>