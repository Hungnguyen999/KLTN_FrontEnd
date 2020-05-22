<template>
  <div>
    <router-link :to="{name: 'course-detail-page', params: {id: Item.course_id}}">
      <div class="item-container">
        <div class="row">
          <div class="col-4">
            <img :src="baseImageURL+'/'+Item.course_id+'/'+Item.course_id+'.png'" />
          </div>
          <div class="col-8">
            <div>
              <span>
                <b>{{Item.name}}</b>
              </span>
            </div>
            <div class="cost">
              <b>${{Item.price_tier.priceTier.toLocaleString('it-IT', {style : 'currency', currency : 'VND'})}}</b>
            </div>
          </div>
        </div>
      </div>
    </router-link>
  </div>
</template>
<script>
import apiConfig from "../../API/api.json";
export default {
  props: ["Item"],
  data() {
    return {
      baseImageURL: apiConfig.imageURL
    };
  }
};
</script>
<style  lang="scss" scoped>
a {
  color: #52143e !important;
  &:hover {
    text-decoration: none;
    color: #52143e;
  }
  .item-container {
    opacity: 0.7;
    border-bottom: 1px solid #ece8e8;
    &:hover {
      opacity: 1;
      font-weight: bolder;
    }
    .row {
      .col-4 {
        img {
          width: 100%;
          height: 3.5rem;
          border-radius: 5px;
        }
      }
      .col-8 {
        padding-left: 0;
        .cost {
          margin: 0.5rem 0;
        }
      }
    }
  }
}
</style>