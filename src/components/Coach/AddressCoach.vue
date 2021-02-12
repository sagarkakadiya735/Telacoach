
<template>
  <div>
    <Header />
    <div class="container py-5 header-top bg-image">
      <div class="row mt-5 pb-5">
        <div class="col-md-7">
          <Leftsidetwo />
        </div>
        <div class="col-md-5">
          <div class="box-shadow login-b-radius">
            <div class="container">
              <form enctype="multipart/form-data">
              <div class="text-green mt-4 mb-5">
                <router-link class="text-green" to="/Billingplan">
                  <img
                    class="width-back-icon"
                    src="../../assets/img/ic_green_back.png"
                    alt=""
                  />
                  <span class="px-3"> Back </span>
                </router-link>
              </div>
              <div class="text-center">
                <h2 class="text-left text-green font-weight-bold">
                  We need to know
                </h2>
                <h2 class="text-left text-green font-weight-bold">
                  Where are you from
                </h2>
              </div>
              <div class="user-input-wrp">
                <br />
                <input
                  v-model="user.address"
                  type="text"
                  class="inputText bor-ra w-100 p-2 pl-5 form-control-lg coach-signup"
                  placeholder="Enter here address"
                  required
                />
                <img
                  src="../../assets/img/ic_addresh_unselect.png"
                  class="iocn-set set-w coach-signup-icon"
                />
                <span
                  class="floating-label bg-white-color px-2 ml-4 coach-label"
                  >Enter Address</span
                >
                <p class="red-color-font-s mb-0" v-if="address != ''">
                  {{ address }}
                </p>
              </div>
              <div class="user-input-wrp">
                <br />
                <input
                  v-model="user.city"
                  type="text"
                  class="inputText bor-ra w-100 p-2 pl-5 form-control-lg coach-signup"
                  placeholder="Enter here city"
                  required
                />
                <img
                  src="../../assets/img/ic_city_unselect.png"
                  class="iocn-set set-w coach-signup-icon"
                />
                <span
                  class="floating-label bg-white-color px-2 ml-4 coach-label"
                  >City</span
                >
                <p class="red-color-font-s mb-0" v-if="city != ''">
                  {{ city }}
                </p>
              </div>
              <div class="user-input-wrp">
                <br />
                <input
                  v-model="user.state"
                  type="text"
                  class="inputText bor-ra w-100 p-2 pl-5 form-control-lg coach-signup"
                  placeholder="Enter here state"
                  required
                />
                <img
                  src="../../assets/img/ic_state_unselect.png"
                  class="iocn-set set-w coach-signup-icon"
                />
                <span
                  class="floating-label bg-white-color px-2 ml-4 coach-label"
                  >state</span
                >
                <p class="red-color-font-s mb-0" v-if="state != ''">
                  {{ state }}
                </p>
              </div>
              <div class="user-input-wrp">
                <br />
                <input
                  v-model="user.zipcode"
                  type="number"
                  class="inputText bor-ra w-100 p-2 pl-5 form-control-lg coach-signup"
                  placeholder="36240023"
                  required
                />
                <img
                  src="../../assets/img/ic_zip_codde_unselect.png"
                  class="iocn-set set-w coach-signup-icon"
                  style="top: 42px"
                />
                <span
                  class="floating-label bg-white-color px-2 ml-4 coach-label"
                  >Zip Code</span
                >
                <p class="red-color-font-s mb-0" v-if="zipcode != ''">
                  {{ zipcode }}
                </p>
              </div>

              <div class="row mt-3 pt-3 pb-3 social-media">
                <p class="container-fluid">Connect social media</p>
              </div>
              <div class="mdeia-links" style="margin-top: -32px">
                <input
                  v-model="user.fb_link"
                  type="text"
                  class="form-control social-link"
                  placeholder="Facebook URL"
                />
                <p class="red-color-font-s mb-0" v-if="fb_link != ''">
                  {{ fb_link }}
                </p>
                <input
                  v-model="user.twitter_link"
                  type="text"
                  class="form-control social-link"
                  placeholder="Twitter URL"
                />
                <p class="red-color-font-s mb-0" v-if="twitter_link != ''">
                  {{ twitter_link }}
                </p>
                <input
                  v-model="user.linkedin_link"
                  type="text"
                  class="form-control social-link"
                  placeholder="Linkedin URL"
                />
                <p class="red-color-font-s mb-0" v-if="linkedin_link != ''">
                  {{ linkedin_link }}
                </p>
                <input
                  v-model="user.insta_link"
                  type="text"
                  class="form-control social-link"
                  placeholder="Instagram URL"
                />
                <p class="red-color-font-s mb-0" v-if="insta_link != ''">
                  {{ insta_link }}
                </p>
              </div>
              <!-- <router-link
                class="text-white font-weight-bold"
                to="/SignupProfessionalDetails"
              > -->
                <div
                  @click.prevent="addressCoach()"
                  class="p-3 bg-success text-center rounded btn-green text-white mt-5 next-bbutton"
                >
                  NEXT
                </div>
              <!-- </router-link> -->
              </form>
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
import Leftsidetwo from "../Leftsidetwo.vue";
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);
import constants from "../../components/Service/constants.js";

export default {
  name: "Address",
  data() {
    return {
      user: {},
      address : "",
      city : "",
      state : "",
      zipcode : "",
      fb_link : "",
      twitter_link : "",
      linkedin_link : "",
      insta_link : "",
    };
  },
  mounted() {
    if(localStorage.getItem("coachAddress")!=null){
      this.user=JSON.parse(localStorage.getItem('coachAddress'));
    }
    else{
      this.user= {}
    }
  },
  components: {
    Header,
    Footer,
    Leftsidetwo,
  },
  methods: {
    async addressCoach() {
      console.log(this.user);
      this.address = "";
      this.city = "";
      this.state = "";
      this.zipcode = "";
      this.fb_link = "";
      this.twitter_link = "";
      this.linkedin_link = "";
      this.insta_link = "";
      if (!this.user.address) {
        this.address = constants.address;
      }
      if (!this.user.city) {
        this.city = constants.city;
      }
      if (!this.user.state) {
        this.state = constants.state;
      }
      if (!this.user.zipcode) {
        this.zipcode = constants.zipcode;
      }
      if (!this.user.fb_link) {
        this.fb_link = constants.fb_link;
      }
      if (!this.user.twitter_link) {
        this.twitter_link = constants.twitter_link;
      }
      if (!this.user.linkedin_link) {
        this.linkedin_link = constants.linkedin_link;
      }
      if (!this.user.insta_link) {
        this.insta_link = constants.insta_link;
      }
      if (
        this.address == "" &&
        this.city == "" &&
        this.state == "" &&
        this.zipcode == ""
      ) {
        localStorage.setItem("coachAddress", JSON.stringify(this.user));
        //localStorage.setItem("profile_image", this.selectedFile);
        this.$router.push("/signupprofessionaldetail");
      }
    },
  }

};
</script>
<style>
span.floating-label.bg-white-color.px-2.ml-4.coach-label {
  width: 150px;
  height: 24px;
  border-radius: 50px;
  color: #b4b4b4;
  top: 12px !important;
}
input.inputText.bor-ra.w-100.p-2.pl-5.form-control-lg.coach-signup {
  height: calc(2.5em + 1rem + 2px) !important;
  padding: 0.5rem 1rem;
  font-size: 1.25rem;
  line-height: 2.5;
  border-radius: 0.3rem;
  background-color: #f4f6fb;
}
img.iocn-set.set-w.coach-signup-icon {
  top: 33px;
}
input.form-control.social-link {
  border-bottom: 1px solid #bdbdbd;
  height: calc(2.5em + 1rem + 2px) !important;
}
.row.mt-3.pt-3.social-media {
  background-color: #edeaea;
  top: 42px;
}
::placeholder {
  color: #b4b4b4;
  opacity: 1; /* Firefox */
}
:-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  color: #b4b4b4;
}
::-ms-input-placeholder {
  /* Microsoft Edge */
  color: #b4b4b4;
}
.next-button{
  cursor: pointer;
}
</style>