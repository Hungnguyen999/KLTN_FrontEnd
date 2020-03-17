<template>
  <div>
    <router-link to="google">
      <div class="item-container">
        <div class="row">
          <div class="col-4">
            <img
              src="https://cdn2.vectorstock.com/i/1000x1000/63/61/education-logo-vector-11136361.jpg"
            />
          </div>
          <div class="col-8">
            <div>
              <span>
                <b>Khóa học lập trình php</b>
              </span>
            </div>
            <div class="cost">
              <b>$45.99</b>
            </div>
          </div>
        </div>
      </div>
    </router-link>
  </div>
</template>
<script>
export default {};
</script>
<style  lang="scss" scoped>
a {
  color: #000000;
  &:hover {
    text-decoration: none;
    color: #000000;
  }
  .item-container {
    opacity: 0.7;
    &:hover {
      opacity: 1;
    }
    border-bottom: 1px solid #ece8e8;
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