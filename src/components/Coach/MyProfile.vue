
<template>
  <div>
    <Header />
    <div class="text-center bg-img py-5 header-top">
      <h2 class="font-weight-bold pt-4">My Profile</h2>
      <div class="mx-auto border-lines mb-4"></div>
    </div>
    <div class="requests-bg-light-grew pt-3 pb-5">
      <div class="container pb-5">
        <div
          class="container box-shadow border-rounde mt-5 pb-3 p-0 bg-white"
          style="width: 750px"
        >
          <div class="">
            <div class="px-4 pt-4 font-weight-bold">
              <router-link class="text-dark" to="/myprofilesetting">
              <div class="float-left">
                <img src="../../assets/img/ic_back_arrow.png" width="25" class="mr-3" />Back
              </div>
              </router-link>
            </div>
            <div class="text-center h5 text-center font-weight-bold border-bottom pr-100 pb-2">
              View my profile
            </div>
            <div class="px-4 card my-3 border-0">
              <div class="card-body p-0">
                <div class="p-3">
                  <img v-if="coach_detail.profile_image != ''" :src="coach_detail.profile_image" class="float-left rounded-circle px-3 profile-img" height="120" />
                  <img v-if="coach_detail.profile_image == ''" src="../../assets/img/ic_user_profile@2x.png" class="float-left rounded-circle px-3 profile-img" height="120" />
                  <div class="message">
                    <h5 class="card-title text-green">{{coach_detail.first_name+' '+coach_detail.last_name}}</h5>
                    <p class="card-text">
                      {{coach_detail.category_name}}
                    </p>
                    <h6 class="card-subtitle mb-2 mt-1 text-muted float-left" v-for="n  in 5 " :key="n">
                      <img v-if="n<=coach_detail.avg_rate" class="w-15 mr-1" src="../../assets/img/ic_star_select.png" />
                      <img v-else class="w-15 mr-1" src="../../assets/img/ic_star_unselect.png" />
                    </h6>
                    <span class="text-muted mb-2 ml-2"> {{coach_detail.avg_rate}} Rating</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Nav tabs -->
            <ul class="nav nav-tabs" id="myTab" role="tablist">
              <li class="nav-item w-50 text-center bg-light-grew">
                <a class="nav-link text-muted active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true" style="border-radius:0px !impoetant">About</a>
              </li>
              <li class="nav-item w-50 text-center bg-light-grew">
                <a class="nav-link text-muted" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false" style="border-radius:0px !impoetant">Review</a>
              </li>
            </ul>

            <!-- Tab panes -->
            <div class="tab-content px-4 pt-4">
              <div class="tab-pane active" id="home" role="tabpanel" aria-labelledby="home-tab">
                <div>
                  <div class="h5 text-green">Location</div>
                  <div class="text-muted">{{coach_detail.city}}</div>
                  <br/>
                  <div class="h5 text-green">Professional History & Achievements</div>
                  <div class="text-muted">{{coach_detail.professional_history}}</div>
                  <br/>
                  <div class="h5 text-green">Specialization</div>
                  <div class="text-muted">{{coach_detail.specialization}}</div>
                  <br/>
                  <div class="h5 text-green">Degree</div>
                  <div class="text-muted" v-if="coach_detail.education == '1'">Doctorate</div>
                  <div class="text-muted" v-if="coach_detail.education == '2'">Master’s</div>
                  <div class="text-muted" v-if="coach_detail.education == '3'">Associate’s</div>
                  <div class="text-muted" v-if="coach_detail.education == '4'">Bachelor’s</div>
                  <div class="text-muted" v-if="coach_detail.education == '5'">Some College</div>
                  <div class="text-muted" v-if="coach_detail.education == '6'">High School</div>
                  <div class="text-muted" v-if="coach_detail.education == '7'">None</div>
                  <br/>
                  <div class="h5 text-green">Qualification</div>
                  <div class="text-muted">{{coach_detail.qualification}}</div>
                  <br/>
                  <div class="h5 text-green">Certifications</div>
                  <div class="row">
                    <div class="col-md-3 text-center" v-for="(item, index) in coach_detail.certificate_image" :key="index">
                      <img :src="item.certification_image" width="150px" height="120px" class="m-2 rounded certifications-img"/>
                    </div>
                  </div>
                  <br/>
                  <div class="text-muted">{{coach_detail.certification}}</div>
                </div>
              </div>
              <div class="tab-pane" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                <template v-if="is_flag == '1'">
                <div v-for="(item, index) in coach_review" :key="index">
                  <div class="mb-0 h5 text-green">{{item.user_name}}</div>
                  <div class="float-right">
                    <span v-for="n  in 5 " :key="n">
                    <img v-if="n<=item.rate_star" class="w-15 mr-1" src="../../assets/img/ic_star_select.png"/>
                    <img v-else class="w-15 mr-1" src="../../assets/img/ic_star_unselect.png" />
                    </span>
                  </div>
                  <div class="text-muted border-bottom pb-2">
                    {{item.review}}
                  </div>
                </div>
                </template>
                <template v-if="is_flag != '1'">
                  <div class="text-center">
                    <span style="color: red;">{{msg}}</span>
                  </div>
                </template>
              </div>
            </div>
          </div>
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

export default {
  name: "Mysessionhistory",
  data() {
    return {
      coach_detail: {},
      coach_review: [],
      is_flag: '',
      msg: ''
    };
  },
  mounted() {
    this.coach_detail = JSON.parse(localStorage.getItem("Login_data"));
    this.getCoachReviewList();
  },
  components: {
    Header,
    Footer,
  },
  methods: {
    async getCoachReviewList() {
      var parameter = 
      "lang=" + "0"+
      "&coach_id=" + JSON.parse(localStorage.getItem("Login_data")).coach_id+
      "&access_token=" + JSON.parse(localStorage.getItem("Login_data")).access_token+
      "&timezone=" + JSON.parse(localStorage.getItem("Login_data")).timezone+
      "&offset=" + '0'+
      "&flag_view=" + '1';

      let res = await apiServices.makeAPICall(apiServices.postMethod,apiServices.URL + apiServices.coach_review_listAPI,parameter,() => {});
      if (res.data.flag == 1) {
        this.is_flag = res.data.flag;
        this.coach_review = res.data.data;
      } else {
        this.is_flag = res.data.flag;
        this.msg = res.data.msg;
      }
    },
    ToastAlert(id, msg) {
      const Toast = this.$swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: false,
      });

      Toast.fire({
        icon: id,
        title: msg,
      });
    },
  }
};
</script>
<style>
.profile-img {
    width: 150px;
}
.certifications-img {
    border-radius: 15px !important;
}
@import "../../assets/css/custom1.css";
</style>