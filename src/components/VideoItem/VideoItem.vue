<template>
  <div>
    <router-link to="google" class="video-item-container">
      <div class="row">
        <div class="col-5">
          <img
            src="https://i.ytimg.com/vi/ICOcEzXsEOI/hqdefault.jpg?sqp=-oaymwEYCKgBEF5IVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLC8nxn1BovmjID9ds-GRTaqLNgtFg"
          />
        </div>
        <div class="col-7">
          <div>
            <span class="title">Gió Vẫn Hát - Long Phạm | Nghe Thôi Đừng Khóc Nhé</span>
          </div>
          <div>
            <span class="duration">
              <i class="fas fa-play-circle"></i> 1min
            </span>
          </div>
        </div>
      </div>
    </router-link>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.video-item-container {
  font-family: open sans, helvetica neue, Helvetica, Arial, sans-serif;
  color: black;
  text-decoration: none;
  cursor: pointer;
  .row {
    &:hover {
      background-color: #ece8e8;
    }
    margin: 0;
    .col-5 {
      padding: 0;
      img {
        width: 100%;
        height: 5rem;
      }
    }
    .col-7 {
      padding: 0 1rem;
      .title {
        font-size: 14px;
      }
      .duration {
        font-size: 12px;
      }
    }
  }
}
</style>