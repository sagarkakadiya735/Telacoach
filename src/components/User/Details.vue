
<template>
  <div>
    <Header />
    <div class="bg-light-grew pt-5">
      <div class="container py-5">
        <div
          class="container box-shadow rounded mt-5 p-0 bg-white border-radius inner-container"
        >
          <div class="px-4 pt-4 font-weight-bold">
            <router-link
              class="text-dark font-weight-bold"
              :to="{ path: '/coachlist' }"
            >
              <div class="float-left">
                <img
                  src="../../assets/img/ic_back_arrow.png"
                  width="25"
                  class="mr-3"
                />Back
              </div>
            </router-link>
            <div class="float-right">
              <button
                v-on:click="reportCoach(userdata.coach_id)"
                class="px-2 float-right bg-white"
                style="border: 0px"
              >
                <img src="../../assets/img/ic_report_coach@2x.png" width="25" />
              </button>
            </div>
          </div>
          <div
            class="text-center h3 text-center font-weight-bold border-bottom pr-100 pb-2"
          >
            Details
          </div>
          <div class="px-4 pt-4 card my-3 border-0">
            <div class="card-body p-0">
              <div class="p-3">
                <div class="row">
                  <div class="col-xs-12 col-sm-3 col-md-3 col-lg-3 col-xl-3 mt-3 detail-page-img">
                    <img
                      v-if="!userdata.profile_image"
                      src="http://placehold.it/64x64"
                      class="float-left rounded-circle align-middle"
                    />
                    <img
                      v-if="userdata.profile_image"
                      :src="userdata.profile_image"
                      width="125px"
                      height="125px"
                      class="float-left rounded-circle align-middle"
                      @error="imageUrlAlt"
                    />
                  </div>
                  <div class="col-xs-12 col-sm-9 col-md-9 col-lg-9 col-xl-9">
                    <div class="message">
                      <h5 class="card-title text-green">
                        {{ userdata.coach_name }}
                      </h5>
                      <p class="card-text">{{ userdata.category_name }}</p>
                      <h6
                        class="card-subtitle mb-2 mt-1 text-muted float-left"
                        v-for="n in 5"
                        :key="n"
                      >
                        <img
                          v-if="n <= userdata.avg_rate"
                          class="w-15 mr-1"
                          src="./../../assets/img/ic_star_select.png"
                        />
                        <img
                          v-else
                          class="w-15 mr-1"
                          src="./../../assets/img/ic_star_unselect.png"
                        />
                      </h6>
                      <span class="text-muted mb-2 ml-2"
                        >{{ userdata.avg_rate }} Rating</span
                      >
                      <div
                        v-if="
                          userdata.fb_social_link != '' ||
                          userdata.twitter_social_link != '' ||
                          userdata.linkedin_social_link != '' ||
                          userdata.insta_social_link != ''
                        "
                        class="h5 mt-1 pt-4 card-subtitle text-body mb-2"
                      >
                        Follow Coach on
                      </div>
                      <a
                        target="_blank"
                        v-if="userdata.fb_social_link"
                        :href="userdata.fb_social_link"
                        class="btn btn-fb fb-btn"
                      >
                        <i class="fab px-2">
                          <img
                            class="w-10 mt-2"
                            src="./../../assets/img/ic_facebook_selects.png"
                          />
                        </i>
                      </a>
                      <a
                        target="_blank"
                        v-if="userdata.twitter_social_link"
                        :href="userdata.twitter_social_link"
                        class="btn btn-fb tw-btn ml-4"
                      >
                        <i class="fab px-2">
                          <img
                            class="social-img"
                            src="./../../assets/img/ic_twitter_white.png"
                          />
                        </i>
                      </a>
                      <a
                        target="_blank"
                        v-if="userdata.linkedin_social_link"
                        :href="userdata.linkedin_social_link"
                        class="btn bg-linkedin tw-btn ml-4"
                      >
                        <i class="fab px-2">
                          <img
                            class="social-img"
                            src="./../../assets/img/linkedin.png"
                          />
                        </i>
                      </a>
                      <a
                        target="_blank"
                        v-if="userdata.insta_social_link"
                        :href="userdata.insta_social_link"
                        class="btn instagram btn-fb tw-btn ml-4"
                      >
                        <i class="fab px-2">
                          <img
                            class="social-img"
                            src="./../../assets/img/instagram.png"
                          />
                        </i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Nav tabs -->
          <ul class="nav nav-tabs" id="myTab" role="tablist">
            <li class="nav-item w-50 border-right text-center bg-light-grew">
              <a
                class="nav-link text-muted active"
                id="home-tab"
                data-toggle="tab"
                href="#home"
                role="tab"
                aria-controls="home"
                aria-selected="true"
                >About</a
              >
            </li>
            <li class="nav-item w-50 text-center bg-light-grew">
              <a
                class="nav-link text-muted"
                id="profile-tab"
                data-toggle="tab"
                href="#profile"
                role="tab"
                aria-controls="profile"
                aria-selected="false"
                >Review</a
              >
            </li>
          </ul>
          <!-- Tab panes -->
          <div class="tab-content px-4 pt-4">
            <div
              class="tab-pane active"
              id="home"
              role="tabpanel"
              aria-labelledby="home-tab"
            >
              <div>
                <div class="h5 text-green">Location</div>
                <div class="mb-4 text-muted">{{ userdata.city }}</div>
                <div class="h5 text-green">
                  Professional History & Achievements
                </div>
                <div class="mb-4 text-muted">
                  {{ userdata.professional_history }}
                </div>
                <div class="h5 text-green">Specialization</div>
                <div class="mb-4 text-muted">{{ userdata.specialization }}</div>
                <div class="h5 text-green">Degree</div>
                <div v-if="userdata.education == 1" class="mb-4 text-muted">
                  Doctorate
                </div>
                <div v-if="userdata.education == 2" class="mb-4 text-muted">
                  Master’s
                </div>
                <div v-if="userdata.education == 3" class="mb-4 text-muted">
                  Associate’s
                </div>
                <div v-if="userdata.education == 4" class="mb-4 text-muted">
                  Bachelor’s
                </div>
                <div v-if="userdata.education == 5" class="mb-4 text-muted">
                  Some College
                </div>
                <div v-if="userdata.education == 6" class="mb-4 text-muted">
                  High School
                </div>
                <div v-if="userdata.education == 7" class="mb-4 text-muted">
                  None
                </div>
                <div class="h5 text-green">Qualification</div>
                <div class="mb-4 text-muted">{{ userdata.qualification }}</div>
                <div class="h5 text-green">Certification</div>
                <div>
                  <img
                    v-for="(item, index) in userdata.certification_image"
                    :key="index"
                    v-bind:src="item.certification_image"
                    width="200px"
                    height="100px"
                    class="m-2 rounded my-4"
                    @error="noImageUrlAlt"
                  />
                </div>
                <div>{{ userdata.certification }}</div>
              </div>
            </div>
            <div
              class="tab-pane"
              id="profile"
              role="tabpanel"
              aria-labelledby="profile-tab"
            >
              <div v-if="is_flag == '1'">
                <div v-for="(item, index) in Coachlist_review" :key="index">
                  <div class="float-right mb-4">
                    <span v-for="n in 5" :key="n">
                      <img
                        v-if="n <= item.rate_star"
                        class="w-15 mr-1"
                        src="./../../assets/img/ic_star_select.png"
                      />
                      <img
                        v-else
                        class="w-15 mr-1"
                        src="./../../assets/img/ic_star_unselect.png"
                      />
                    </span>
                  </div>
                  <div class="mb-0 h5 text-green">{{ item.user_name }}</div>
                  <div class="text-muted border-bottom mb-3">
                    {{ item.review }}
                  </div>
                </div>
              </div>
              <div v-if="is_flag != '1'">
                <div class="text-center">
                  <span style="color: red">{{ is_msg }}</span>
                </div>
              </div>
            </div>
          </div>
          <router-link class="text-white font-weight-bold" to="/booksession">
            <button
              class="mx-auto w-100 border-0 p-3 mt-3 bg-success text-center btn-green text-white border-r-bx"
            >
              BOOK SESSION
            </button>
          </router-link>
        </div>
      </div>
    </div>

    <Footer />
  </div>
</template>
  
<script>
import Header from "../Header.vue";
import Footer from "../Footer.vue";
import apiServices from "../../components/Service/apiservice";
import img from "../../assets/img/ic_requests_user_profile.png";
import no_img from "../../assets/img/no_image.gif";

export default {
  name: "Details",
  data() {
    return {
      userdata: {},
      user: {},
      category_id: "",
      Coachlist_review: [],
      is_flag: "",
      is_msg: "",
    };
  },
  mounted() {
    this.userdata = JSON.parse(localStorage.getItem("coach_data"));
    this.category_id = localStorage.getItem("category_id");
    this.user = JSON.parse(localStorage.getItem("Login_data"));
    this.CoachReviewList();
  },
  components: {
    Header,
    Footer,
  },
  methods: {
    imageUrlAlt(e) {
      e.target.src = img;
    },
    noImageUrlAlt(e) {
      e.target.src = no_img;
    },
    async CoachReviewList() {
      var param =
        "lang=" +
        "0" +
        "&user_id=" +
        this.user.user_id +
        "&access_token=" +
        this.user.access_token +
        "&coach_id=" +
        this.userdata.coach_id +
        "&offset=" +
        "0" +
        "&flag_view=" +
        "0";
      let res = await apiServices.makeAPICall(
        apiServices.postMethod,
        apiServices.URL + apiServices.coach_review_listAPI,
        param,
        () => {}
      );
      if (res.data.flag == 1) {
        console.log(res.data.data);
        this.Coachlist_review = res.data.data;
        // this.ToastAlert("success", res.data.msg);
        this.is_flag = res.data.flag;
        this.is_msg = res.data.msg;
      } else {
        //this.ToastAlert("error", res.data.msg);
        this.is_flag = res.data.flag;
        this.is_msg = res.data.msg;
      }
    },
    reportCoach(id) {
      this.$router.push("/reportcoach/" + id);
      localStorage.setItem("reportcoach", id);
    },
    ToastAlert(id, msg) {
      const Toast = this.$swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: false,
        // didOpen: (toast) => {
        //   toast.addEventListener('mouseenter', this.$swal.stopTimer)
        //   toast.addEventListener('mouseleave', this.$swal.resumeTimer)
        // }
      });

      Toast.fire({
        icon: id,
        title: msg,
      });
    },
  },
};
</script>
<style scoped >
.nav-tabs .nav-item.show .nav-link,
.nav-tabs .nav-link.active {
  color: #369f04 !important;
  background-color: #f7f7f7 !important;
  border-color: #f7f7f7 #ccc #369f04 #f7f7f7;
}
.ratting-top {
  top: 118px;
  position: absolute;
}
.instagram {
  background: #f09433;
  background: -moz-linear-gradient(
    45deg,
    #f09433 0%,
    #e6683c 25%,
    #dc2743 50%,
    #cc2366 75%,
    #bc1888 100%
  );
  background: -webkit-linear-gradient(
    45deg,
    #f09433 0%,
    #e6683c 25%,
    #dc2743 50%,
    #cc2366 75%,
    #bc1888 100%
  );
  background: linear-gradient(
    45deg,
    #f09433 0%,
    #e6683c 25%,
    #dc2743 50%,
    #cc2366 75%,
    #bc1888 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f09433', endColorstr='#bc1888',GradientType=1 );
}
.insta-icon {
  position: relative;
  width: 36px;
  height: 36px;
  border-radius: 20%;
  background: radial-gradient(
    circle at 33% 100%,
    #fed373 4%,
    #f15245 30%,
    #d92e7f 62%,
    #9b36b7 85%,
    #515ecf
  );
}
.insta-icon:after,
.insta-icon:before {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 25px;
  height: 25px;
  border: 2px solid #fff;
  transform: translate(-50%, -50%);
  content: "";
}
.insta-icon:before {
  border-radius: 20%;
}
.insta-icon:after {
  width: 11px;
  height: 11px;
  border-radius: 50%;
}
.btn:hover {
  color: white;
}
</style>