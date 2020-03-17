<template>
  <div class="my-container">
    <router-link to="google">
      <div
        class="row"
        style="border: 1px solid #ece8e8;margin-bottom: 1rem"
        @mouseover="isHover = true"
        @mouseleave="isHover = false"
        :class="{'hoverClass' : isHover}"
      >
        <div class="col-2 needHover">
          <img
            :style="isHover ? 'opacity: 0.4' : 'oppacity: 1'"
            src="data:image/jpeg;base64,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qxbL4TaJMyVb8AN5m2RF6zuH7tIZrn3AbgJLtfuG4dk3YXBvV8mwFwoLZrFzuUAAkngBCtC7xfdcX7psLizasSd2gFtb9u6bsXs6pRXMxFswXdUU3Ia3lKLjondKkmxLOTvN5ERKhERAREQEREBERAREQEREBERASJMiAiIgIiIEy5hal1A1uCAbPk6FybntteUpMC/Sqhut9GAP0trL52olOtUzNfhbtJ4kzXJgRJU2NxIlrZmHWtXSm5YK2bMVtmsFLaX7pKrTlzaqNetR8P31yOTbzW9B/fWPTLO0aFOm1M0uUyVKKVQKhUutywtcADqlS54xBlybea3oPDxHpgU281vQeHiPTMbnjMgraaNrouh1PCVDk281vQeHiPTApt5reg8PEembmw9qZflEuGy5Q1z+/CaDcdogSKZ7CBvJINraeI9Ih26h5I3dp4mY3iAAnoamFC1zkFZkwuWypTQUaYfyQWLeUSRc2uT1Tzy7x3z0W0cTTrHKMZlpB+UWmtMFC4AGY6jMdOsabpjJqKeLoNSwSowswrLe3dUnJnW2lWp/Nwi1VqNyqsSFCG1ql9Bp1r6ZyZcUpERNIREQEREBERAREQEREBERAREQEiTECIkxAiJMQIiTEBERAgz0tHEUajhcNUpU2NOyKcBRzKRR6X0u+5s2vGebm/A4k0Kq1QqsVv0WvlYEEEGxB3GZym1ldnD16dNMN84q0iOSpuEbAUqzClnPR5Q69R9M4NYguxUWUsxUbrLfQTdjsVyzKQiU1SmtJEQuVCgk72JJ3nrleJNFqJaOPqZFQEAJuIGu6VomkXaVdGPTcp0dyopBbhpK1es1RszWvYDQW0E1xAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREK//9k="
          />
        </div>
        <div class="col-10">
          <div class="row needHover">
            <div class="col-5">
              <div>
                <b>Khóa học lập trình php cơ bản đến nâng cao</b>
              </div>
              <br />
              <div style="position: absolute;font-size: 13px;bottom: 1rem;">
                <span>
                  <b>Chưa công khai</b>
                </span>
                /
                <span>Công khai</span>
              </div>
            </div>
          </div>
          <h4 class="text-center my-hover-text" v-if="isHover">Chi tiết khóa học</h4>
        </div>
      </div>
    </router-link>
  </div>
</template>
<script>
export default {
  props: ["course", "loading"],
  data() {
    return {
      isHover: false
    };
  }
};
</script>
<style lang="scss" scoped>
.my-container {
  opacity: 1;
  width: 100%;
  a {
    text-decoration: none;
    color: black;
  }
  .row {
    min-height: 6rem;
    .col-2 {
      padding: 0;
      img {
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