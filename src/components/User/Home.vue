<template>
  <div>
    <Header />
    <!-- <div class="container-fluid header-top">
      <div style="width: 100%; margin: 20px auto; height: 600px">
        <slider ref="slider" :options="options">
          <slideritem
            v-for="(item, index) in slider_listAPI"
            :key="index"
            :style="item.style"
          >

            <img
              v-bind:src="item.slider_image"
              style="height: 600px"
              class="img img-responsive center-block d-block mx-auto slider-images"
            />
          </slideritem>
          <div slot="loading">loading...</div>
        </slider>
      </div>
    </div> -->
    <div class="container-fluid coaching-course-section header-top">
      <div class="container">
        <div class="row">
          <div class="col-12 mb-4">
            <h2 class="text-center coaching-title">Find a Coach, Therapist, Advisor, or Lawyer</h2>
            <div class="mx-auto bottom-border-line"></div>
            <div class="col-md text-center">
              <button v-on:click="routerpage()" type="button" class="mx-auto gap-2 border-0 w-25 p-3 bg-success text-center rounded btn-green text-white my-5 filter-button"
              >FILTER</button>
            </div>
            <div class="col-md-4 float-left" v-for="(item, index) in category" :key="index">
              <div class="coaching-grid">
                <div class="course">
                  <img :src="item.category_image" class="img img-responsive center-block d-block mx-auto course-images" alt="" @error="categoryImageAlt" />
                </div>
                <h5 class="course-title text-center">
                  {{ item.category_name }}
                </h5>
                <h5 class="text-center">
                  <router-link :to="{ path: '/coachlist' }">
                    <a v-on:click="coachlist(item.category_id)" class="coaching-link text-muted">Connect
                      <i class="fas fa-arrow-right">
                        <img src="../../assets/img/ic_left_arrow_gray.png" width="30px" />
                      </i>
                    </a>
                  </router-link>
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

<div class="bg-grew-dark">
   <div class="container">
      <div class="row">
        <div class="col-md-12 mt-4 mb-3">
          <h3 class="text-center">Reviews</h3>
          <div class="mx-auto bottom-border-line"></div>
        </div>
        <slider ref="reviewslider" :options="reviewoptions">
          <slideritem v-for="(item, index) in most_review" :key="index" :style="item.style">
            <div class="card bg-grew-dark">
              <div class="card-body"> 
                <div class="row">
                <div class="col-xs-12 col-md-2 col-sm-12 text-center">
                <img v-bind:src="item.profile_image" class="float-left rounded-circle z-depth-2 review-img" data-holder-rendered="true" @error="imageAlt"/>
                </div>
                <div class="col-xs-12 col-md-10 col-sm-12 text-center">
                <div class="message review-msg">
                  <h3 class="card-title"  style="font-size: 25px;">
                    <span>&#8220;</span> {{ item.coach_name }}
                  </h3>
                  <p class="card-text review-description">
                    {{ item.review }} <span>&#8221;</span>
                  </p>
                </div>
                </div>
                </div>
              </div>
            </div>


          </slideritem>
          <!-- Customizable loading -->
          <div slot="loading">loading...</div>
        </slider>
      </div>
    </div>
</div>
   

    <!-- <div class="bg-green-l my-5">
      <div class="container">
        <h1 class="px-5 pt-5 text-white">
          Subscribe To Telacoach
          <input
            type="text"
            class="h4 p-2 border-0 rounded"
            placeholder="Enter your email address"
          />
          <button class="bg-dark rounded border-0 text-white h4 p-2 mx-5">
            <router-link
              class="text-white font-weight-bold mx-5"
              to="/coachlist"
            >
              Sent
            </router-link>
          </button>
        </h1>
        <div class="text-white text-center pb-5 pt-3">
          We Promise not to spam your indox
        </div>
      </div>
    </div> -->

    <Footer />
  </div>
</template>
  
<script>
// import slider components
import Vue from "vue";
import { slider, slideritem } from "vue-concise-slider";
import Header from "../Header.vue";
import Footer from "../Footer.vue";
import apiServices from "../../components/Service/apiservice";
import img from '../../assets/img/ic_requests_user_profile.png';
import category_img from '../../assets/img/no_image.gif';

export default {
  name: "Login",
  data() {
    return {
      category: [],
      most_review: [],
      slider_listAPI: [],
      
      options: {
        currentPage: 0,
        thresholdDistance: 500,
        thresholdTime: 100,
        autoplay: 5000000,
        loop: true,
        direction: "vertical",
        loopedSlides: 1,
        slidesToScroll: 1,
        effect: "slide",
        duration: 300,
      },
      reviewoptions: {
        currentPage: 1,
        thresholdDistance: 500,
        thresholdTime: 100,
        autoplay: 50000000,
        loop: true,
        loopedSlides: 1,
        slidesToScroll: 1,
        effect: "slide",
        duration: 300,
        arrows: true,
        prevArrow: '<div class="slick-prev"></div>',
        nextArrow: '<div class="slick-next"></div>',
        dots: false,
      },
    };
  },
  mounted() {
    this.CoachAPI();
    this.most_review_list();
    this.slider_list();
    this.users = JSON.parse(localStorage.getItem("Login_data"));
  },
  components: {
    Header,
    Footer,
    slider,
    slideritem,
  },
  methods: {
    imageAlt(e) {
      e.target.src = img;
    },
    categoryImageAlt(e) {
      e.target.src = category_img;
    },
    async CoachAPI() {
      if(typeof(Vue.prototype.$category_list) == "undefined") {
      var param = "lang=" + "0";
      let res = await apiServices.makeAPICall(
        apiServices.postMethod,
        apiServices.URL + apiServices.coach_category_listAPI,
        param,
        () => {}
      );
        Vue.prototype.$category_list = res.data.data;
        this.category = Vue.prototype.$category_list;
      }else {
        this.category = Vue.prototype.$category_list;
      }
      // console.log(this.category);
    },
    async most_review_list() {
      var param = "lang=" + "0";
      let res = await apiServices.makeAPICall(
        apiServices.postMethod,
        apiServices.URL + apiServices.most_review_listAPI,
        param,
        () => {}
      );
      this.most_review = res.data.data;
    },
    async slider_list() {
      if(typeof(Vue.prototype.$home_services) == "undefined") {
      var param = "lang=" + "0";
      let res = await apiServices.makeAPICall(
        apiServices.postMethod,
        apiServices.URL + apiServices.slider_listAPI,
        param,
        () => {}
      );
        Vue.prototype.$home_services = res.data.data;
        this.slider_listAPI = Vue.prototype.$home_services;
      }else {
        this.slider_listAPI = Vue.prototype.$home_services;
      }
    },
    coachlist(id){
      localStorage.setItem('category_id',id)
      
    },
    routerpage(){
      localStorage.setItem('filterpage','home')
       this.$router.push("/filter").catch(()=>{});
    }
  },
};
</script>
<style>
.slider-container {
  z-index: unset !important;
}
.slider-touch {
  height: unset;
}
.slider-content {
  white-space: break-spaces !important;
  margin-top: 200px;
}
.slider-button {
  font-size: 23px !important;
  padding: 10px 35px;
}
.swiper-container-vertical > .slider-pagination-bullets {
  top: 80% !important;
}
@import "../../assets/css/custom.css";
</style>