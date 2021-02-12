<template>
  <div>
    <Header />
    <div class="text-center bg-img py-5 header-top">
      <h2 class="font-weight-bold pt-4">My Profile</h2>
      <div class="mx-auto border-lines mb-4"></div>
    </div>
    <div class="container-fluid myplan-section p-5">
      <div class="container myplans content-section pb-5">
        
        <div class="row border-bottom p-3">
           <router-link class="text-dark mr-4" to="/profilesettingcoach">
          <div class="col-md font-weight-bold my-auto">
            <img src="../../assets/img/ic_reviews_right_black_arrow.png" class="img img-responsive w-20" /> Back
          </div>
           </router-link>
          <div class="text-center h5 text-center font-weight-bold" style="padding-left: 20%;">
            My Profile Setting
          </div>
          <div class="col-md font-weight-bold text-right"></div>
        </div>
        <router-link class="text-dark" to="/myProfile">
        <div class="row px-3 mx-5 my-3 call-types mb-4 profile-setting py-4">
          <div class="col-md-11 font-weight-bold text-green">View My Profile</div>
          <div class="col-md-1">
            <img
              src="../../assets/img/ic_left_arrow_green.png"
              class="img img-responsive w-20"
            />
          </div>
        </div>
        </router-link>
        <router-link class="text-dark" to="/personaldetailscoach">
        <div class="row px-3 mx-5 my-3 call-types mb-4 profile-setting py-4">
          <div class="col-md-11 font-weight-bold text-green">Personal Details</div>
          <div class="col-md-1">
            <img
              src="../../assets/img/ic_left_arrow_green.png"
              class="img img-responsive w-20"
            />
          </div>
        </div>
        </router-link>
          <router-link class="text-dark" to="/coachprofessionaldetail">
        <div class="row px-3 mx-5 my-3 call-types mb-4 profile-setting py-4">
          <div class="col-md-11 font-weight-bold text-green">Professional Details</div>
          <div class="col-md-1">
            <img
              src="../../assets/img/ic_left_arrow_green.png"
              class="img img-responsive w-20"
            />
          </div>
        </div>
        </router-link>
        <router-link class="text-dark" to="/coachchangepassword">
        <div class="row px-3 mx-5 my-3 call-types mb-4 profile-setting py-4">
          <div class="col-md-11 font-weight-bold text-green">Change Password</div>
          <div class="col-md-1">
            <img
              src="../../assets/img/ic_left_arrow_green.png"
              class="img img-responsive w-20"
            />
          </div>
        </div>
        </router-link>
        <router-link class="text-dark" to="/changeprofile">
        <div class="row px-3 mx-5 my-3 call-types mb-4 profile-setting py-4">
          <div class="col-md-11 font-weight-bold text-green">Change My Profile Photo</div>
          <div class="col-md-1">
            <img
              src="../../assets/img/ic_left_arrow_green.png"
              class="img img-responsive w-20"
            />
          </div>
        </div>
        </router-link>
      </div>
    </div>
    <Footer />
  </div>
</template>  
<script>
import Header from "../Header.vue";
import Footer from "../Footer.vue";
export default {
  name: "MyProfileSetting",
  data() {
    return {};
  },
  components: {
    Header,
    Footer,
  },
};
</script>
<style>
.row.px-3.mx-5.my-3.call-types.mb-4.profile-setting {background-color: #F4F6FB;}
@import "../../assets/css/custom.css";
</style>