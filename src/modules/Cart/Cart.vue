<template>
<main>
  <body>
    <div id="Top" class="col-12">
      <div class="row">
        <div class="container">
          <div class="row">
            <div class="col-3">
              <h5>
                <i class="fas fa-home"></i>/ Shopping Cart
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <!--Body-->
        <div class="container1">
          <div class="row" id="title">
            <div class="col-5" v-if="this.SOF_getCarts == true">
              <h4>{{ amountCourse }} course in cart</h4>
            </div>
          </div>

          <div class="row" id="body" v-if="this.SOF_getCarts == false">
            <v-responsive class="mx-left mb-12" max-width="700">
              <v-skeleton-loader
                ref="skeleton"
                :boilerplate="boilerplate"
                :type="type"
                :tile="tile"
                class="mx-auto"
              ></v-skeleton-loader>
              <v-skeleton-loader
                ref="skeleton"
                :boilerplate="boilerplate"
                :type="type"
                :tile="tile"
                class="mx-auto"
              ></v-skeleton-loader>
              <v-skeleton-loader
                ref="skeleton"
                :boilerplate="boilerplate"
                :type="type"
                :tile="tile"
                class="mx-auto"
              ></v-skeleton-loader>
            </v-responsive>
          </div>

          <div class="row" id="body" v-if="this.SOF_getCarts == true && this.amountCourse == 0">
            <div class="container">
              <div class="row">
                <div class="col align-end offset-4" style="margin-left:30%">
                  <div class="col-12">
                    <i class="fas fa-shopping-cart" style="font-size: 10rem"></i>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col align-end offset">
                  <div class="col-12">
                    <h4>Hiện tại giỏ hàng đang trống. Hãy tiếp tục mua sắm thêm khóa học bạn nhé</h4>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col align-end offset-4">
                  <div class="col-12">
                    <button
                      type="button"
                      id="btnKeepShopping"
                      class="btn btn-danger btn-lg"
                    >Keep shopping</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
      
          <div class="row" id="body" v-else>
                <h1>sdaaaaaaaa{{ this.userLoadCart }}</h1>
            <div class="col-8">
              <div class="row" id="rowCart" v-for="(item,index) in userLoadCart" :key="index">
                <div class="col-2">
                  <img
                    alt="The Complete Storytelling Course for Speaking &amp; Presenting"
                    width="110%"
                    height="100%"
                    class
                    src="https://i.udemycdn.com/course/125_H/1854668_0473_3.jpg"
                    srcset="https://i.udemycdn.com/course/125_H/1854668_0473_3.jpg 1x, https://i.udemycdn.com/course/240x135/1854668_0473_3.jpg 2x"
                  />
                </div>
                <div class="col-5">{{ item.name }}</div>
                <div class="col-2" id="option">
                  <div class="row">
                    <a style="cursor: pointer;" @click="deleteCarts(item.course_id)">Remove</a>
                  </div>
                  <div class="row">
                    <a style="cursor: pointer;">Move to wishlist</a>
                  </div>
                </div>
                <div class="col-2" id="price">
                  <div class="row" id="realPrice">
                    <span>{{ item.priceTier }} VND</span>
                  </div>
                  <div class="row">
                    <del>600.000 VND</del>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-3" id="totalCart" v-if="this.amountCourse > 0">
              <div>
                <div class="title">
                  <div class="row">
                    <h4>Total</h4>
                  </div>
                  <div class="row" :key="this.totalCart">
                    <h2>{{ totalCart }} VND</h2>
                  </div>
                  <div class="row">
                    <del>550.000 VND</del>
                  </div>
                  <div class="row">
                    <p>91%</p>
                  </div>
                  <div class="row">
                    <router-link type="button" :to="{ name: 'checkout-page'}"  id="buttonCheckout" class="btn btn-lg">Checkout</router-link>
                  </div>
                </div>
              </div>
              <div class="input-group mb-3" id="inputCoupon">
                <input
                  type="text"
                  class="form-control"
                  aria-label="Sizing example input"
                  aria-describedby="inputGroup-sizing-default"
                  placeholder="Nhập mã giảm giá"
                />
                <div class="input-group-append">
                  <button class="btn btn-danger" type="button" id="button-addon2">Áp dụng</button>
                </div>
              </div>
            </div>
            <div class="col-3" id="totalCart" v-else>
              <div class="row">
                <div class="col-12"></div>
              </div>
            </div>
          </div>
          <!--end of body-->
        <Footer></Footer>
        </div>
        
      </div>
    </div>
  </body>
</main>
</template>
<script>
import { mapGetters } from "vuex";
import Swal from "../../../node_modules/sweetalert2/dist/sweetalert2.all";
import Footer from "../../view/Footer/Footer";
export default {
  data() {
    return {
      tempCourseList: [],
      boilerplate: false,
      tile: false,
      type: "list-item-avatar-three-line",
      types: [],
      //SOF: status of function
      SOF_getCarts: false,
      amountCourse: 0,

      totalCart: 0,
      totalSale: 0
    };
  },
  watch: {},
  mounted() {
    this.types = Object.keys(this.$refs.skeleton.rootTypes);
  },
  created() {
    this.$store.dispatch("userGetCart").then(() => {
      this.SOF_getCarts = true;
      console.log("dsad", this.userLoadCart);
      console.log("Đây là loadCartsTotal", this.userLoadCartTotal);
      this.totalCart = this.userLoadCartTotal;
    });
  },

  methods: {
    deleteCarts(index) {
      Swal.fire({
        title: "Xóa khóa học khỏi giỏ hàng ?",
        text: "Thao tác sẽ không thể hoàn lại !",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Xóa"
      }).then(result => {
        if (result.value) {
          this.$store.dispatch("userDeleteCart", index).then(response => {
            console.log("Đây là id của khóa học trong carts", index);
            console.log("here", response.data);
            this.amountCourse = this.userLoadCart.length;
            this.$store.dispatch("userGetCart").then(() => {
              this.SOF_getCarts = true;
              this.amountCourse = this.userLoadCart.length;
              this.totalCart = this.userLoadCartTotal;
            });
          });
          Swal.fire("Đã xóa !", "Đã xóa khóa học", "success");
        }
      });
    }
  },
  components: {
    Footer
  },
  computed: {
    ...mapGetters({
      userLoadCart: "userLoadCart",
      userLoadCartTotal: "userLoadCartTotal"
    })
  }
};
</script>
<style lang="scss" scoped>
#Top {
  background-color: #505763;
  width: 100%;
  .row {
    .col-3 {
      text-align: left;
      margin-left: 10%;
      width: 100%;
      color: whitesmoke;
    }
    .col-9 {
    }
  }
}
.container1 {
  text-align: left;
  margin-left: 12%;
  width: 100%;
  .row {
    .col-12 {
    }
  }
  #body {
    width: 100%;
    .col-8 {
      text-align: left;
      margin-left: 1.5%;
      width: 100%;
      #rowCart {
        border: solid 0.2px rgb(247, 248, 250);
        .col-2 {
        }
        .col-5 {
        }
        #option {
          color: rgb(51, 102, 255);
          font-size: 10pt;
          a {
            font-size: 10pt;
          }
          a:hover {
            color: rgb(5, 5, 20);
          }
        }
        #price {
          margin-left: 5%;
          text-align: right;
          font-size: 10pt;
          #realPrice {
            font-weight: bold;
          }
        }
      }
    }
    #totalCart {
      margin-left: 3%;

      .title {
        border-bottom: 1px solid whitesmoke;
        border-bottom-width: 100%;
        padding-bottom: 5%;
      }
      #buttonCheckout {
        width: 100%;
        color: white;
        background-color: rgb(236, 82, 82);
      }
      #inputCoupon {
        padding-top: 5%;

        #labelCoupon {
          button {
            color: red;
          }
        }
      }
    }
  }
}
</style>