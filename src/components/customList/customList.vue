<template>
  <div>
    <v-list dark flat>
      <v-list-group no-action>
        <template v-slot:activator>
          <v-list-item-icon style="margin-right: 1rem;">
            <i :class="list.icon"></i>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>
              <b>{{list.header}}</b>
            </v-list-item-title>
          </v-list-item-content>
        </template>
        <v-list-item
          v-ripple
          class="my-list-item-container"
          v-for="(item,index) in list.items"
          :key="index"
          :to="{name: item.routeName}"
          style="text-decoration: none;"
        >
          <v-list-item-content>
            <v-list-item-title>
              <div class>
                <i :class="item.icon" style="margin: 0 0.5rem 0 2rem;font-size: 10px;"></i>
                {{item.title}}
              </div>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-group>
    </v-list>
  </div>
</template>
<script>
export default {
  props: ["list"],
  methods: {
    redirect(routeName) {
      this.$router.push({ name: routeName });
      console.log(routeName);
    }
  }
};
</script>
<style lang="scss" scoped>
.my-list-item-container {
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
}
</style>