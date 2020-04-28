<template>
  <div>
    <div v-if="!guestGetDetailCourseLoading">
      <div class="row" id="stickyInfo" style="background: #29303b;position: relative;">
        <div class="col-7" id="DetailSubject">
          <h1>{{ this.guestGetDetailCourse.name }}</h1>
          <h2>Learn to create Process Flowcharts, User Stories, Use Cases, SWOT, RACI Matrices, Org Charts, User Stories, and more!</h2>
          <br />
          <br />
          <p>4.5 (2,800 ratings) 19,711 students</p>
          <p>Được hướng dẫn bởi : {{ this.guestGetDetailCourse.user_id }}</p>
        </div>
        <div class="my-card-container">
          <img src="https://freepikpsd.com/wp-content/uploads/2019/10/course-%C3%A0-pied-png-3.png" />
          <div class="container">
            <div class="row">
              <div class="col-12" style="text-align: center;">
                <h4>
                  <span>1.500.000 VND</span>
                </h4>
                <h6>
                  <del>2.000.000 VND</del>
                </h6>
              </div>
            </div>

            <button class="btn btn-danger" @click="AddtoCartDB(1)">Add To Cart</button>
            <button class="btn" style="border: 1px solid black">Go To Cart</button>
            <ul>
              <p style="font-size: 15pt;">This course includes</p>
              <li>29 hours on-demand video</li>
              <li>5 downloadable resources</li>
              <li>Full lifetime access</li>
              <li>Access on mobile and TV</li>
              <li>Certificate of Completion</li>
            </ul>
            <hr />
            <button class="btn btn-primary" style="border: 1px solid black;border-color: #29303b;">
              <p style="margin-top: 0.3rem;font-size: 15pt;">Share</p>
            </button>
          </div>
        </div>
      </div>
      <div id="content-container">
        <h2>What you'll learn</h2>
        <div class="row">
          <div class="col-6">
            <span>
              <i class="fas fa-check"></i> Communicate confidently in all business and personal situations Communicate in an
              understandable manner
            </span>
          </div>
          <div class="col-6">
            <span>
              <i class="fas fa-check"></i>Communicate in a memorable way
            </span>
          </div>
          <div class="col-6">
            <span>
              <i class="fas fa-check"></i> Communicate and influence people
            </span>
          </div>
        </div>
      </div>

      <div id="requirement-container">
        <h2>Requirement</h2>
        <div>
          <ul style="dot">
            <li>No prior knowledge exasdasdpected! This course starts from ground-zero.</li>
            <li>No prior knowledge expected! This course starts from ground-zero.</li>
            <li>No prior knowledge expected! This course starts from ground-zero.</li>
          </ul>
        </div>
      </div>

    <div class id="description-container">
      <h2>Description</h2>
      <p>
      {{ this.guestGetDetailCourse.description }}
        <span
          id="dots"
        >...</span>
        <span
          id="more"
        ></span>
      </p>
      <button @click="Readmore()" id="myBtn">Read more</button>
    </div>

      <div class id="introduce-container">
        <div class="col-12">
          <div class="row">
            <div class="col-4">
              <img
                src="https://i.pinimg.com/originals/c4/c4/dc/c4c4dc0a54efab6050cea7f71e9ba1de.jpg"
                class="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}"
                alt
              />
              4.7 Instructor Rating
              114,802 Reviews
              371,656 Students
              7 Courses
            </div>
            <div class="col-8">
              <h3>Thông tin cá nhân</h3>Angela Yu
              Developer and Lead Instructor
              I'm Angela, I'm a developer with a passion for teaching. I'm the lead instructor at the London App Brewery, London's leading Programming Bootcamp. I've helped hundreds of thousands of students learn to code and change their lives by becoming a developer. I've been invited by companies such as Twitter, Facebook and Google to teach their employees.
              My first foray into programming was when I was just 12 years old, wanting to build my own Space Invader game. Since then, I've made hundred of websites, apps and games. But most importantly, I realised that my greatest passion is teaching.
            </div>
          </div>
        </div>
      </div>

      <div id="alsobought-container">
        <!--Top 5 khóa học trong lĩnh vực-->
        <h2>Students also bought</h2>

        <div class="row" v-for="(item,index) in Top5Course" :key="index">
          <div class="col-2">
            <img
              alt="The Complete Storytelling Course for Speaking &amp; Presenting"
              width="100%"
              class
              src="https://i.udemycdn.com/course/125_H/1854668_0473_3.jpg"
              srcset="https://i.udemycdn.com/course/125_H/1854668_0473_3.jpg 1x, https://i.udemycdn.com/course/240x135/1854668_0473_3.jpg 2x"
            />
          </div>
          <div class="col-3">
            <b>{{ item.name }}</b>
          </div>
          <div class="col-1">
            {{ item.rating }}
            <span class="fa fa-star checked"></span>
          </div>
          <div class="col-2">
            {{ item.eroller }}
            <i class="fas fa-user"></i>
          </div>
          <div class="col-3">
            <div class="row" style="margin-top: -12px;">
              <div class="col-7">
                <p>1.000.000 VND</p>
                <del>200.000 VND</del>
              </div>
              <div class="col-5">
                <div class="col-3" style="cursor: pointer;font-size: 1.5rem;">
                  <i
                    type="button"
                    @click="AddToWishList(index)"
                    class="fas fa-heart"
                    :id="[checkWishList(item.name) ? 'icon-heart':'icon-heart-unactive' ]"
                  ></i>
                </div>
              </div>
            </div>
          </div>
          <hr />
        </div>
      </div>
      <div class="container" id="feedback-container">
        <h2>Student feedback</h2>
        <div class="row" id="row-average-rating">
          <div class="col-2">
            <div class="container" id="average-rating">
              <div class="row justify-content-md-center">
                <div class="col-md-auto">{{ this.CourseRatingValue }}</div>
              </div>
              <div class="row justify-content-md-center">
                <div
                  class="col-md-auto"
                  style="font-size: 10pt;margin-top: -30px;"
                >Đánh giá khóa học</div>
              </div>
              <div class="row justify-content-md-center">
                <div class="col-md-auto">
                  <Rating
                    class="text-center"
                    v-bind:increment="0.1"
                    :show-rating="false"
                    :read-only="true"
                    :rating="CourseRatingValue"
                    :star-size="20"
                    style="margin-top:-50px"
                  ></Rating>
                </div>
              </div>
            </div>
          </div>
          <div class="col-10">
            <div class="col-sm-6 col-md-4 col-lg-9">
              <!--Component rating star-->
              <!--Phần hàng rating star-->
              <div class="row" id="row-rating-star">
                <div class="col-12">
                  <span>
                    <div class="row" id="rowBig">
                      <div
                        class="row"
                        @click="chooseRating(rating1),showReview(rating1)"
                        :class="{ 'ratingHover': isHover1 && loadIsHover!=0 }"
                      >
                        <div class="col-8" style="margin: 5px;">
                          <b-progress
                            :class="{ 'ratingHover': isHover1 && loadIsHover!=0 }"
                            variant="secondary"
                            :value="value1"
                            :max="max"
                            style="height:25px"
                            class="mb-3"
                          ></b-progress>
                        </div>
                        <div class="col-3">
                          <div class="row">
                            <Rating
                              :show-rating="false"
                              :read-only="true"
                              :rating="rating1"
                              :star-size="20"
                            ></Rating>
                            <p id="percent-value" style="font-size:13pt;color: blue;">{{ value1 }} %</p>
                          </div>
                        </div>
                      </div>
                      <div class="col-1">
                        <i
                          v-if="isHover1==false  && loadIsHover"
                          @click="refreshComment()"
                          class="fas fa-window-close"
                          style="font-size:13pt;color: blue;"
                        ></i>
                      </div>
                    </div>
                  </span>
                </div>
              </div>
              <!--Kết thúc Phần hàng rating star-->
              <div class="row" id="row-rating-star">
                <div class="col-12">
                  <span>
                    <div class="row" id="rowBig">
                      <div
                        class="row"
                        @click="chooseRating(rating2),showReview(rating2)"
                        :class="{ 'ratingHover': isHover2 && loadIsHover!=0 }"
                      >
                        <div class="col-8" style="margin: 5px;">
                          <b-progress
                            variant="secondary"
                            :class="{ 'ratingHover': isHover2 && loadIsHover!=0 }"
                            :value="value2"
                            :max="max"
                            style="height:25px"
                            class="mb-3"
                          ></b-progress>
                        </div>
                        <div class="col-3">
                          <div class="row">
                            <Rating
                              :show-rating="false"
                              :read-only="true"
                              :rating="rating2"
                              :star-size="20"
                            ></Rating>
                            <p id="percent-value" style="font-size:13pt;color: blue;">{{ value5 }} %</p>
                          </div>
                        </div>
                      </div>
                      <div class="col-1">
                        <i
                          v-if="isHover2==false  && loadIsHover"
                          @click="refreshComment()"
                          class="fas fa-window-close"
                          style="font-size:13pt;color: blue;"
                        ></i>
                      </div>
                    </div>
                  </span>
                </div>
              </div>
              <div class="row" id="row-rating-star">
                <div class="col-12">
                  <span>
                    <div class="row" id="rowBig" style="padding-left:2%">
                      <div
                        class="row"
                        @click="chooseRating(rating3),showReview(rating3)"
                        :class="{ 'ratingHover':  isHover3 && loadIsHover!=0 }"
                      >
                        <div class="col-8" style="margin: 5px;">
                          <b-progress
                            variant="secondary"
                            :class="{ 'ratingHover':  isHover3 && loadIsHover!=0 }"
                            :value="value3"
                            :max="max"
                            style="height:25px"
                            class="mb-3"
                          ></b-progress>
                        </div>
                        <div class="col-3">
                          <div class="row">
                            <Rating
                              :show-rating="false"
                              :read-only="true"
                              :rating="rating3"
                              :star-size="20"
                            ></Rating>
                            <p id="percent-value" style="font-size:13pt;color: blue;">{{ value4 }} %</p>
                          </div>
                        </div>
                      </div>
                      <div class="col-1">
                        <i
                          v-if="isHover3==false  && loadIsHover"
                          @click="refreshComment()"
                          class="fas fa-window-close"
                          style="font-size:13pt;color: blue;"
                        ></i>
                      </div>
                    </div>
                  </span>
                </div>
              </div>
              <div class="row" id="row-rating-star">
                <div class="col-12">
                  <span>
                    <div class="row" id="rowBig">
                      <div
                        class="row"
                        @click="chooseRating(rating4),showReview(rating4)"
                        :class="{ 'ratingHover': isHover4 && loadIsHover }"
                      >
                        <div class="col-8" style="margin: 5px;">
                          <b-progress
                            :class="{ 'ratingHover': isHover4 && loadIsHover }"
                            variant="secondary"
                            :value="value4"
                            :max="max"
                            style="height:25px"
                            class="mb-3"
                          ></b-progress>
                        </div>
                        <div class="col-3">
                          <div class="row">
                            <Rating
                              :show-rating="false"
                              :read-only="true"
                              :rating="rating4"
                              :star-size="20"
                            ></Rating>
                            <p id="percent-value" style="font-size:13pt;color: blue;">{{ value1 }} %</p>
                          </div>
                        </div>
                      </div>
                      <div class="col-1">
                        <i
                          v-if="isHover4==false  && loadIsHover"
                          @click="refreshComment()"
                          class="fas fa-window-close"
                          style="font-size:13pt;color: blue;"
                        ></i>
                      </div>
                    </div>
                  </span>
                </div>
              </div>
              <div class="row" id="row-rating-star">
                <div class="col-12">
                  <span>
                    <div class="row" id="rowBig">
                      <div
                        class="row"
                        @click="chooseRating(rating5),showReview(rating5)"
                        :class="{ 'ratingHover': isHover5 && loadIsHover }"
                      >
                        <div class="col-8" style="margin: 5px;">
                          <b-progress
                            :class="{ 'ratingHover': isHover5 && loadIsHover }"
                            variant="secondary"
                            :value="value5"
                            :max="max"
                            style="height:25px"
                            class="mb-3"
                          ></b-progress>
                        </div>
                        <div class="col-3">
                          <div class="row">
                            <Rating
                              :show-rating="false"
                              :read-only="true"
                              :rating="rating5"
                              :star-size="20"
                            ></Rating>
                            <p id="percent-value" style="font-size:13pt;color: blue;">{{ value1 }} %</p>
                          </div>
                        </div>
                      </div>
                      <div class="col-1">
                        <i
                          v-if="isHover5==false  && loadIsHover"
                          @click="refreshComment()"
                          class="fas fa-window-close"
                          style="font-size:13pt;color: blue;"
                        ></i>
                      </div>
                    </div>
                  </span>
                </div>
              </div>
              <!-- Kết thúc Component rating star-->
            </div>
          </div>
        </div>
      </div>

      <div id="review-container">
        <div>
          <div class="row">
            <div class="col-3">
              <h2 ref="cmt-container">Review</h2>
            </div>
            <div class="col-2 offset-3">
              <CoursePageComment style="background-color:white"></CoursePageComment>
            </div>
          </div>

          <div
            class="row"
            style="position: relative;"
            v-for="(item,index) in displayedPosts"
            :key="index"
          >
            <div class="col-sm-6 col-md-4 col-lg-8" style="background-color:white">
              <div class="row">
                <div class="col-1">
                  <img
                    src="https://png.pngtree.com/png-clipart/20190906/original/pngtree-520-couple-avatar-boy-avatar-little-dinosaur-cartoon-cute-png-image_4561296.jpg"
                    alt="Avatar"
                    style="width:50px"
                  />
                </div>
                <div class="col-3">
                  <div>{{ item.created_at }}</div>
                  <div>{{ item.user_id }}</div>
                </div>
                <div class="col-6" id="comment">
                  <div class="row">
                    <Rating
                      v-bind:increment="0.5"
                      :show-rating="false"
                      :read-only="true"
                      v-bind:rating="item.rating_value"
                      :star-size="20"
                    ></Rating>
                  </div>
                  <div class="row" style="font-size:12pt;">
                    <div>{{ item.comment }}</div>
                  </div>
                </div>
                <hr width="100%" style="margin: 0px;" align="center" color="whitesmoke" />
              </div>
            </div>
          </div>
        </div>
        <!--Phần comment -->
        <div class="row">
          <div class="col-5"></div>
          <div class="col-6">
            <nav aria-label="Page navigation example">
              <ul class="pagination">
                <li class="page-item">
                  <button
                    type="button"
                    class="page-link"
                    v-if="page != 1"
                    @click="page--;scrollToTopcmt()"
                  >Previous</button>
                </li>
                <li class="page-item">
                  <button
                    type="button"
                    class="page-link"
                    v-for="pageNumber in pages.slice(page-1, page+5)"
                    @click="page = pageNumber;scrollToTopcmt()"
                    :key="pageNumber"
                  >{{pageNumber}}</button>
                </li>
                <li class="page-item">
                  <button
                    type="button"
                    @click="page++;scrollToTopcmt()"
                    v-if="page < pages.length"
                    class="page-link"
                  >Next</button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>

      <!--Comment-->
    </div>
    <div v-else>
      <v-progress-circular indeterminate  size="50"></v-progress-circular>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import Rating from "../../../node_modules/vue-star-rating/src/star-rating";
import Swal from "../../../node_modules/sweetalert2/dist/sweetalert2.all";
import CoursePageComment from "./CoursePage_comment";

export default {
  props: {
    id: Object
  },

  data() {
    return {
      value1: 50,
      value2: 20,
      value3: 30,
      value4: 70,
      value5: 100,
      max: 100,
      rating1: 5,
      rating2: 4,
      rating3: 3,
      rating4: 2,
      rating5: 1,
      CourseRatingValue: 3.8,
      isHoverHeart: false,

      isHover: false,
      isHover1: false,
      isHover2: false,
      isHover3: false,
      isHover4: false,
      isHover5: false,
      chooseRatingValue: 0,
      course: {
        id: "6",
        name: "Tnn",
        code: "TT52"
      },

      Top5Course: [],

      listComment: [],

      infoInstructor: [],
      totalCourse: 0,
      list: [],

      course_id: "",
      posts: [],
      page: 1,
      perpage: 5,
      pages: [],
      refreshCommentValue: false,
      user_id: "vanvinh"
    };
  },
  components: { Rating, CoursePageComment },
  created() {
    //this.checkWishList();
    //this.$store.dispatch("getCarts");
    console.log(this.$route);
    this.course_id = this.$route.params.id;
    console.log("đây là course_id", this.course_id);
    this.getDetailCourse();
    this.getPosts();
    this.getTop5course();
    //this.getInfoInstructor();
  },
  watch: {
    posts() {
      this.setPage();
    }
  },
  filters: {
    trimWords(value) {
      return (
        value
          .split(" ")
          .splice(1, 20)
          .join(" ") + "..."
      );
    }
  },
  methods: {
    getDetailCourse(){
      this.$store.dispatch("guestGetDetailCourse",this.$route.params.id).then(()=>{
        console.log("guestGetDetailCourse",this.guestGetDetailCourse)
        console.log("amountReview",this.guestGetDetailCourseAmountReview)
      })
    },
    getPosts() {
      var vm = this
      this.$store.dispatch("guestGetListComment",this.$route.params.id).then(()=> {
          console.log('data',this.userCommentState)
          vm.listComment = this.userCommentState;
          let comment;
          for (let i = 0; i < this.userCommentState.length; i++) {
            comment = this.userCommentState[i];
            //console.log("dsad",comment)
            vm.posts.push(comment);
            //console.log(this.posts);
          }
        });
    },
    getTop5course(){
      var vm = this
      this.$store.dispatch("guestGetTop5CourseByTopic",this.$route.params.id).then(function(response){
        console.log("list",response.data.list);
        console.log("top5",response.data.topfive)
        vm.Top5Course = response.data.topfive;
      })
    },
    getInfoInstructor() {
      // var vm = this
      // this.$store.dispatch("userGetTop5CourseByTopic",this.$route.params.id).then(function(response){
      //   console.log("info",response.data.infoInstructor);
      //   console.log("total",response.data.total)
      //   vm.infoInstructor = this.response.data.infoInstructor;
      //   vm.total = this.response.data.total;
      // })
    },
    scrollToTopcmt() {
      let target = this.$refs["cmt-container"];
      let options = {
        duration: 100,
        offset: 200,
        easing: "linear"
      };
      this.$vuetify.goTo(target, options);
    },
    setPage() {
      let numberOfPages = Math.ceil(this.posts.length / this.perpage);
      for (let index = 1; index <= numberOfPages; index++) {
        this.pages.push(index);
      }
    },
    paginate(posts) {
      let page = this.page;
      let perPage = this.perpage;
      let from = page * perPage - perPage;
      let to = page * perPage;
      return posts.slice(from, to);
    },
    chooseRating(starValue) {
      switch (starValue != 0) {
        case starValue == this.rating1:
          (this.isHover1 = false),
            (this.isHover2 = true),
            (this.isHover3 = true),
            (this.isHover4 = true),
            (this.isHover5 = true);
          break;
        case starValue == this.rating2:
          (this.isHover1 = true),
            (this.isHover2 = false),
            (this.isHover3 = true),
            (this.isHover4 = true),
            (this.isHover5 = true);
          break;
        case starValue == this.rating3:
          (this.isHover1 = true),
            (this.isHover2 = true),
            (this.isHover3 = false),
            (this.isHover4 = true),
            (this.isHover5 = true);
          break;
        case starValue == this.rating4:
          (this.isHover1 = true),
            (this.isHover2 = true),
            (this.isHover3 = true),
            (this.isHover4 = false),
            (this.isHover5 = true);
          break;
        case starValue == this.rating5:
          (this.isHover1 = true),
            (this.isHover2 = true),
            (this.isHover3 = true),
            (this.isHover4 = true),
            (this.isHover5 = false);
          break;
        default:
          (this.isHover1 = false),
            (this.isHover2 = false),
            (this.isHover3 = false),
            (this.isHover4 = false),
            (this.isHover5 = false);
      }
      // this.isHover = true;
      this.chooseRatingValue = starValue;
    },
    checkExistItem(cart) {
      for (let i = 0; i < cart.length; i++) {
        if (cart[i].id == this.course.id) {
          return true;
        }
      }
      return false;
    },
    AddtoCartDB() {
      Swal.showLoading();
      console.log("Nó chạy vào addtocart r này");
      this.$store
        .dispatch("userAddtoCart", this.$route.params.id) //this.$route.params.id  : cái này ở trong router.js
        .then(function(response) {
          let icon = "success";
          if (response.data.RequestSuccess == false) {
            icon = "error";
          }
          Swal.fire({
            icon: icon,
            title: "Thông Báo",
            text: response.data.msg
          });
        });
    },
    AddtoCart() {
      console.log("Đã click vào r");
      let cart = [];
      if (localStorage.cart) {
        cart = JSON.parse(localStorage.cart);
        console.log("Đã vào cart r");
      }
      console.log(this.course);
      if (this.checkExistItem(cart)) {
        console.log("vào if thứ 2 rs");
        Swal.fire({
          icon: "error",
          title: "Thông báo",
          text: "Khóa đã có trong cart"
        });
      } else {
        cart.push(this.course);
        Swal.fire({
          icon: "success",
          title: "Thông báo",
          text: "Thêm thành công"
        }).then(response => {
          console.log(response);
          localStorage.cart = JSON.stringify(cart);
        });
      }
    },
    checkExistItemWishList(wishlist, index) {
      for (let i = 0; i < wishlist.length; i++) {
        console.log("this top 5 course", this.Top5Course[index].name);
        if (wishlist[i].id == this.Top5Course[index].id) {
          return true;
        }
      }
      return false;
    },
    AddToWishList(index) {
      let wishlist = [];
      if (localStorage.wishlist) {
        wishlist = JSON.parse(localStorage.wishlist);
      }
      if (this.checkExistItemWishList(wishlist, index)) {
        let list = JSON.parse(localStorage.wishlist);
        console.log("This top 5", this.Top5Course[index].id);
        for (let i = 0; i < list.length; i++) {
          console.log(list[i]);
          if (list[i].id == this.Top5Course[index].id) {
            console.log("This Top5Course[index]", this.Top5Course[index].id);
          }
        }

        Swal.fire({
          icon: "error",
          title: "Thông báo",
          text: "Đã bỏ thích khóa học"
        }).then(response => {
          console.log(response);
          list.pop(this.Top5Course[index]);
        });
      } else {
        wishlist.push(this.Top5Course[index]);
        console.log("Cái course id", this.Top5Course[index]);
        Swal.fire({
          icon: "success",
          title: "Thông báo",
          text: "Đã thích khóa học"
        }).then(response => {
          console.log(response);
          localStorage.wishlist = JSON.stringify(wishlist);
        });
      }
    },
    checkWishList(id) {
      //console.log('checkWishlissssssssst',id);
      for (let i = 0; i < this.list.length; i++) {
        if (this.list[i].name === id) {
          return true;
        }
      }
      return false;
    },
    showReview(index) {
      console.log(index);
      this.getPostsByRateValue(index);
    },

    getPostsByRateValue(rateValue) {
      // console.log("getPost by ratevalue", rateValue);
      // console.log("This posts",this.posts);
      // console.log("this pages",this.pages);
      this.posts.splice(0);
      this.pages.splice(0);
      // console.log("Đây là post sau khi delete", this.posts);
      // console.log("this pagesssssss sau delete",this.pages);
      this.page = 1;
      let comment;
      for (let i = 0; i < this.listComment.length; i++) {
        if (
          this.listComment[i].rating_value == rateValue ||
          this.listComment[i].rating_value - 0.5 == rateValue ||
          this.listComment[i].rating_value + 0.5 == rateValue
        ) {
          comment = this.listComment[i];
          this.posts.push(comment);
          console.log(this.posts);
        }
      }
      this.paginate(this.posts);
    },

    refreshComment() {
      this.listComment.splice(0, this.listComment.length);
      this.pages.splice(0);
      this.posts.splice(0);
      this.chooseRatingValue = 0;
      this.isHover1 = true;
      this.isHover2 = true;
      this.isHover3 = true;
      this.isHover4 = true;
      this.isHover5 = true;
      this.getPosts();

      console.log(
        "tổng hợp",
        this.isHover1,
        this.isHover2,
        this.isHover3,
        this.isHover4,
        this.isHover5
      );
    },
    addHistory() {
      let history = []
      if(localStorage.historyCourseList) {
        history = JSON.parse(localStorage.historyCourseList)
      }
      history.push({ course_id: this.$route.params.id })
      localStorage.historyCourseList = JSON.stringify(history)
    }
  },
  computed: {
    ...mapGetters({
      userCommentState: "userCommentState",
      userTop5CourseStateList: "userTop5CourseStateList",
      userTop5CourseStateTop5: "userTop5CourseStateTop5",

      guestGetDetailCourseAmountReview:"guestGetDetailCourseAmountReview",
      guestGetDetailCourse: "guestGetDetailCourse",
      guestGetDetailCourseLoading: "guestGetDetailCourseLoading"
    }),
    loadIsHover() {
      //console.log("dsadsadasdadas", this.chooseRatingValue);
      return this.chooseRatingValue;
    },
    rows() {
      return this.items.length;
    },
    displayedPosts() {
      return this.paginate(this.posts);
    },
    target() {
      const value = this[this.type];
      if (!isNaN(value)) return Number(value);
      else return value;
    },
    options() {
      return {
        duration: 200,
        offset: 200,
        easing: this.easing
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.ratingHover {
  opacity: 0.35;
}
#content-container {
  margin: 1rem 10%;
  background: #f9f9f9;
  width: 50%;
  border: 1px solid silver;
  padding: 1rem;
  .row {
    padding-top: -0.5rem;
    .col-6 {
      margin-top: 1rem;
    }
  }
}
#requirement-container {
  margin: 1rem 10%;
  width: 50%;
  h2 {
    margin-top: 2rem;
  }
  ul {
    li {
      font-size: 12pt;
      margin-left: 3%;
      list-style-type: circle;
    }
  }
}
#introduce-container {
  margin: 3rem 10%;
  width: 50%;

  .col-12 {
    .row {
      .col-4 {
        img {
          border-radius: 50%;
          width: 100px;
        }
      }
    }
  }
}
#description-container {
  margin: 1rem 10%;
  width: 50%;
  p {
    font-size: 12pt;
  }
  h2 {
    margin-top: 2rem;
  }
}
#alsobought-container {
  margin: 1rem 10%;
  width: 70%;
  hr {
    width: 90%;
  }
  h2 {
    margin-top: 2rem;
  }
}
#feedback-container {
  margin: 1rem 10%;
  margin-left: 9%;
  width: 100%;
  h2 {
    margin-top: 3rem;
  }
  #row-average-rating {
    margin: 0 0 0 -2rem;
    .col-2 {
      font-size: 42pt;
      text-align: center;
    }
  }
  .row {
    .col-10 {
      #row-rating-star {
        margin-top: -8%;
        .col-12 {
          span {
            #rowBig {
              padding-left: 2%;
            }
            .col-3 {
              margin-top: -0.3rem;
            }
            #percent-value {
              margin-top: 0.7rem;
              margin: 2px 0px 0px 5px;
            }
          }
        }
      }
    }
  }
}
#review-container {
  margin: 1rem 10%;
  width: 80%;
  h2 {
    margin-top: -1rem;
  }
  #comment {
    margin-left: 10%;
  }
}

.my-card-container {
  position: absolute;
  right: 5rem;
  top: 5rem;
  background-color: white;
  width: 20rem;
  border: solid 0.5px rgb(194, 187, 186);
  li {
    margin-left: 10%;
  }
  img {
    border: none;
    width: 100%;
    height: 12rem;
  }
  button {
    width: 100%;
    margin-bottom: 0.5rem;
    height: 3rem;
  }
}
// span:hover {
//   display: block;
//   background-color: yellow;
// }
#DetailSubject {
  text-align: left;
  margin-left: 10%;
  width: 50%;
  padding: 2rem 2rem 2rem 0.5rem;
}

#DetailSubject h1 {
  color: #f7f8f8;
  font-size: 25pt;
  padding-bottom: 2rem;
  height: 5rem;
  font-family: open sans, helvetica neue, Helvetica, Arial, sans-serif;
}
#DetailSubject h2 {
  color: #f7f8f8;
  font-size: 14pt;
  height: 1rem;
  font-family: open sans, helvetica neue, Helvetica, Arial, sans-serif;
}

#DetailSubject p,
a {
  color: #f7f8f8;
  font-family: open sans, helvetica neue, Helvetica, Arial, sans-serif;
  font-size: 15px;
  line-height: 1.43;
}

body {
  padding: 2rem 0rem;
}

.like {
  font-size: 1.5rem;
}

button.page-link {
  display: inline-block;
}
button.page-link {
  font-size: 20px;
  color: #29b3ed;
  font-weight: 500;
}
.offset {
  width: 500px !important;
  margin: 20px auto;
}
.checked {
  color: orange;
}
#icon-heart-unactive {
  color: #3291a6;
}
#icon-heart {
  color: red;
  &:hover {
    color: #3291a6;
  }
}
</style>