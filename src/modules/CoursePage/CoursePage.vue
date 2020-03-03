<template>
  <div>
    <div class="row" style="background: #29303b;position: relative;">
      <div class="col-12" id="DetailSubject">
        <h1>Business Analysis Modeling Skills & Techniques</h1>
        <h2>
          Learn to create Process Flowcharts, User Stories, Use Cases, SWOT, RACI Matrices, Org Charts, User
          Stories, and more!
        </h2>
        <p>4.5 (2,800 ratings) 19,711 students</p>
        <p>Created by The BA Guide Jeremy Aschenbrenner Last updated 10/2019</p>
        <p>
          English, Indonesian [Auto-generated],
          <a>4 more</a>
        </p>
      </div>
      <div class="my-card-container">
        <img src="https://freepikpsd.com/wp-content/uploads/2019/10/course-%C3%A0-pied-png-3.png" />
        <div class="container">
          <h1>
            <span>$106</span>
          </h1>
          <button class="btn btn-danger">Add To Cart</button>
          <button class="btn" style="border: 1px solid black">Go To Cart</button>
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
    <h2 style="margin-top: 50px;">Students also bought</h2>
    <div class="row">
      <div class="col-sm-6 col-md-3 col-lg-7">
        <table class="table">
          <tbody style="background-color:#f7f8fa;">
            <tr>
              <td>
                <img
                  alt="The Complete Storytelling Course for Speaking &amp; Presenting"
                  width="125"
                  height="70"
                  class
                  src="https://i.udemycdn.com/course/125_H/1854668_0473_3.jpg"
                  srcset="https://i.udemycdn.com/course/125_H/1854668_0473_3.jpg 1x, https://i.udemycdn.com/course/240x135/1854668_0473_3.jpg 2x"
                />
              </td>
              <td style="padding-left: 30px;">
                <b>
                  The Complete Storytelling Course for Speaking &
                  Presenting
                </b>
              </td>
              <td style="padding-left: 30px;">4,3*</td>
              <td style="padding-left: 30px;">
                <span>29,920</span>
              </td>
              <td style="padding-left: 200px;">
                <span>
                  <p>150.000 VND</p>
                  <del>200.000 VND</del>
                </span>
              </td>
              <td>
                <button type="button" class="btn btn-danger">Add to Wishlist</button>
              </td>
            </tr>
            <tr>
              <td>
                <img
                  alt="The Complete Storytelling Course for Speaking &amp; Presenting"
                  width="125"
                  height="70"
                  class
                  src="https://i.udemycdn.com/course/125_H/1854668_0473_3.jpg"
                  srcset="https://i.udemycdn.com/course/125_H/1854668_0473_3.jpg 1x, https://i.udemycdn.com/course/240x135/1854668_0473_3.jpg 2x"
                />
              </td>
              <td style="padding-left: 30px;">
                <b>
                  The Complete Storytelling Course for Speaking &
                  Presenting
                </b>
              </td>
              <td style="padding-left: 30px;">4,3*</td>
              <td style="padding-left: 30px;">
                <span>29,920</span>
              </td>
              <td style="padding-left: 200px;">
                <span>
                  <p>150.000 VND</p>
                  <del>200.000 VND</del>
                </span>
              </td>
              <td>
                <button type="button" class="btn btn-danger">Add to Wishlist</button>
              </td>
            </tr>
            <tr>
              <td>
                <img
                  alt="The Complete Storytelling Course for Speaking &amp; Presenting"
                  width="125"
                  height="70"
                  class
                  src="https://i.udemycdn.com/course/125_H/1854668_0473_3.jpg"
                  srcset="https://i.udemycdn.com/course/125_H/1854668_0473_3.jpg 1x, https://i.udemycdn.com/course/240x135/1854668_0473_3.jpg 2x"
                />
              </td>
              <td style="padding-left: 30px;">
                <b>
                  The Complete Storytelling Course for Speaking &
                  Presenting
                </b>
              </td>
              <td style="padding-left: 30px;">4,3*</td>
              <td style="padding-left: 30px;">
                <span>29,920</span>
              </td>
              <td style="padding-left: 200px;">
                <span>
                  <p>150.000 VND</p>
                  <del>200.000 VND</del>
                </span>
              </td>
              <td>
                <button type="button" class="btn btn-danger" style="padding:auto;">Add to Wishlist</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <h2 style="margin-top: 50px;margin-left:-15px;">Student feedback</h2>
    <div class="row" style="margin-left:-50px;">
      <div class="col-2" style="font-size:42pt;text-align: center;">
        4.5
        <p style="font-size: 10pt;">Đánh giá khóa học</p>
        <Rating
          :show-rating="false"
          :read-only="true"
          :rating="CourseRatingValue"
          :star-size="20"
          style="padding:0px 30px;margin-top: -30px;"
        ></Rating>
      </div>
      <div class="col-8">
        <div class="col-sm-6 col-md-4 col-lg-9">
          <!--Component rating star-->
          <!--Phần hàng rating star-->
          <div class="row">
            <div class="col-12">
              <span>
                <div class="row">
                  <div class="col-8" style="margin: 5px;">
                    <b-progress variant="secondary" :value="value1" :max="max" class="mb-3"></b-progress>
                  </div>
                  <div class="col-3">
                    <Rating
                      :show-rating="false"
                      :read-only="true"
                      :rating="rating1"
                      :star-size="20"
                    ></Rating>
                  </div>
                  <p style="font-size:11pt;margin-left: -15px;color: skyblue;">{{ value1 }} %</p>
                </div>
              </span>
            </div>
          </div>
          <!--Kết thúc Phần hàng rating star-->
          <div class="row">
            <div class="col-12">
              <span>
                <div class="row">
                  <div class="col-8" style="margin: 5px;">
                    <b-progress variant="secondary" :value="value1" :max="max" class="mb-3"></b-progress>
                  </div>
                  <div class="col-3">
                    <Rating
                      :show-rating="false"
                      :read-only="true"
                      :rating="rating2"
                      :star-size="20"
                    ></Rating>
                  </div>
                  <p style="font-size:11pt;margin-left: -15px;color: skyblue;">{{ value5 }} %</p>
                </div>
              </span>
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <span>
                <div class="row">
                  <div class="col-8" style="margin: 5px;">
                    <b-progress variant="secondary" :value="value1" :max="max" class="mb-3"></b-progress>
                  </div>
                  <div class="col-3">
                    <Rating
                      :show-rating="false"
                      :read-only="true"
                      :rating="rating3"
                      :star-size="20"
                    ></Rating>
                  </div>
                  <p style="font-size:11pt;margin-left: -15px;color: skyblue;">{{ value4 }} %</p>
                </div>
              </span>
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <span>
                <div class="row">
                  <div class="col-8" style="margin: 5px;">
                    <b-progress variant="secondary" :value="value1" :max="max" class="mb-3"></b-progress>
                  </div>
                  <div class="col-3">
                    <Rating
                      :show-rating="false"
                      :read-only="true"
                      :rating="rating3"
                      :star-size="20"
                    ></Rating>
                  </div>
                  <p style="font-size:11pt;margin-left: -15px;color: skyblue;">{{ value1 }} %</p>
                </div>
              </span>
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <span>
                <div class="row">
                  <div class="col-8" style="margin: 5px;">
                    <b-progress variant="secondary" :value="value1" :max="max" class="mb-3"></b-progress>
                  </div>
                  <div class="col-3">
                    <Rating
                      :show-rating="false"
                      :read-only="true"
                      :rating="rating2"
                      :star-size="20"
                    ></Rating>
                  </div>
                  <p style="font-size:11pt;margin-left: -15px;color: skyblue;">{{ value2 }} %</p>
                </div>
              </span>
            </div>
          </div>
          <!-- Kết thúc Component rating star-->
        </div>
      </div>
    </div>
    <h2 style="margin-top: 50px;">Reviews</h2>
    <!--Phần comment -->
    <div class="row">
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
            <p>a week ago</p>
            <p>Nguyễn Duy Hưng</p>
          </div>
          <div class="col-6">
            <div class="row">
              <Rating :show-rating="false" :read-only="true" :rating="rating2" :star-size="20"></Rating>
            </div>
            <div class="row" style="font-size:12pt;">
              <p>I was looking for something that covered the basics and this is delivering for me nicely. I am an experienced Network Admin.</p>
            </div>
          </div>
          <hr width="100%" size="5px" align="center" color="red" />
        </div>
      </div>
    </div>
    <!--Kết thúc phần comments-->
    <div class="row">
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
            <p>a week ago</p>
            <p>Nguyễn Duy Hưng</p>
          </div>
          <div class="col-6">
            <div class="row">
              <Rating :show-rating="false" :read-only="true" :rating="rating2" :star-size="20"></Rating>
            </div>
            <div class="row" style="font-size:12pt;">
              <p>I was looking for something that covered the basics and this is delivering for me nicely. I am an experienced Network Admin.</p>
            </div>
          </div>
          <hr width="100%" size="5px" align="center" color="red" />
        </div>
      </div>
    </div>
    <!--Phần comment -->
    <div class="row">
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
            <p>a week ago</p>
            <p>Nguyễn Duy Hưng</p>
          </div>
          <div class="col-6">
            <div class="row">
              <Rating :show-rating="false" :read-only="true" :rating="rating2" :star-size="20"></Rating>
            </div>
            <div class="row" style="font-size:12pt;">
              <p>I was looking for something that covered the basics and this is delivering for me nicely. I am an experienced Network Admin.</p>
            </div>
          </div>
          <hr width="100%" size="5px" align="center" color="red" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Rating from "../../../node_modules/vue-star-rating/src/star-rating";
export default {
  data() {
    return {
      value1: 50,
      value2: 20,
      value3: 30,
      value4: 70,
      value5: 100,
      max: 100,
      rating1: 1,
      rating2: 2,
      rating3: 3,
      rating4: 4,
      rating5: 5,
      CourseRatingValue: 40
    };
  },
  components: { Rating }
};
</script>
<style lang="scss" scoped>
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
.my-card-container {
  position: absolute;
  right: 5rem;
  top: 5rem;
  background-color: white;
  width: 20rem;
  img {
    border: none;
    width: 100%;
    height: 15rem;
  }
  button {
    width: 100%;
    margin-bottom: 0.5rem;
    height: 3rem;
  }
}
span:hover {
  display: block;
  background-color: yellow;
}

.grid-container2 {
  display: grid;
  background-color: #29303b;
  margin-top: 100px;
  height: 400px;
  width: 100px;
}

.grid-container2 > div {
  background-color: #29303b;
  text-align: center;
  padding: 70px;
  margin-left: 10%;
  font-size: 30px;
  width: 60%;
  float: left;
  width: 100px;
  height: 400px;
}

#DetailSubject {
  text-align: left;
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

ul {
  display: block;
  list-style-type: none;
  margin-top: 1em;
  margin-bottom: 1 em;
  margin-left: 0;
  margin-right: 0;
  text-align: left;
  font-size: 10pt;
}
body {
  font-family: "Lato", sans-serif;
  font-weight: 300;
  background: #34495e;
  line-height: 1.5rem;
  color: #ffffff;
}
body #wrapper {
  text-align: center;
  margin: 0 auto;
  max-width: 500px;
  padding: 50px 0;
}
body #wrapper h2 {
  margin: 0 0 5px 0;
}
body #wrapper p {
  margin: 0 0 25px;
}
body #wrapper .star-rating {
  margin: 0 auto 12.5px;
}

</style>