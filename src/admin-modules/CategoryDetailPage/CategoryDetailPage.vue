<template>
  <div>
    <p @contextmenu.prevent="$refs.menu.open">Right click on me</p>
    <p @contextmenu.prevent="$refs.menu.open">Right click on me</p>
    <p @contextmenu.prevent="$refs.menu.open">Right click on me</p>
    <p @contextmenu.prevent="$refs.menu.open">Right click on me</p>
    <Context ref="menu">
      <li>
        <a href="#" @click.prevent="onClick($event.target.innerText)">Option 1</a>
      </li>
      <li>
        <a href="#" @click.prevent="onClick($event.target.innerText)">Option 2</a>
      </li>
    </Context>
    
    
  </div>
</template>
<script>
import Context from "../../../node_modules/vue-context/src/js/vue-context";
export default {
  components: { Context },
  created() {
    console.log(this.$route.params.id);
  }
};
</script>
<style lang="scss" scoped>

</style>