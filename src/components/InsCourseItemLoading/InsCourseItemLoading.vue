<template>
  <div class="my-container">
    <div class="row" style="border: 1px solid #ece8e8;margin-bottom: 1rem">
        <div class="col-2 needHover">
          <v-skeleton-loader ref="skeleton" type="image" class="mx-auto img-loading" height="9.2rem"></v-skeleton-loader>
        </div>
        <div class="col-10">
          <v-skeleton-loader ref="skeleton" type="paragraph" class="mx-auto"></v-skeleton-loader>
        </div>
      </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
.my-container {
  opacity: 1;
  width: 100%;
  .row {
    min-height: 6rem;
    .col-2 {
      padding: 0;
      .img-loading {
        width: 100%;
        height: 100%;
        min-height: 5rem;
      }
    }
    .col-11 {
      padding: 0;
      position: relative;
      .row {
        margin: 0;
        position: relative;
        .col-5 {
          padding: 0;
        }
      }
      .my-hover-text {
        position: absolute;
        top: 40%;
        width: 100%;
        text-align: center;
        color: blue;
      }
    }
  }
}

.hoverClass {
  background-color: white;
  color: #959a9e;
}
</style>