
<template>
  <div>
    <Header />
    <div class="container py-5 header-top bg-image">
      <div class="row pb-5">
        <div class="col-md-7">
          <Leftsidetwo />
        </div>
        <div class="col-md-5">
          <div class="box-shadow login-b-radius">
            <div class="container">
              <form enctype="multipart/form-data">
              <div class="text-center">
                <h2 class="font-weight-bold">Sign Up</h2>
                <div class="mx-auto border-line"></div>
                <p class="mb-0">Please Sign up to your account</p>
                <label for="file-input">
                  <img v-if="images == ''"
                    src="../../assets/img/ic_user+profile.png"
                    width="150px"
                    alt=""
                  />
                  <img v-if="images != ''"
                    :src="images"
                    width="150px"
                    alt=""
                    class="avatar"
                  />
                  <img v-if="images != ''"
                    src="../../assets/img/ic_add_camera.png"
                    alt=""
                    style="padding-top: 65px;margin-left: -25px;width: 25px;"
                  />
                </label>
                <input
                  id="file-input"
                  type="file"
                  hidden
                  v-on:change="onFileChangedPhoto"
                />
                <p class="red-color-font-s mb-0" v-if="selectedFile != ''">
                  {{ selectedFile }}
                </p>
              </div>
              <div class="user-input-wrp">
                <br />
                <input
                  v-model="user.username"
                  type="text"
                  class="inputText bor-ra w-100 p-2 pl-5"
                  required
                />
                <img
                  src="../../assets/img/ic_user_select.png"
                  class="iocn-set set-w"
                />
                <span class="floating-label bg-white-color px-2 ml-4"
                  >User Name</span
                >
                <p class="red-color-font-s mb-0" v-if="username != ''">
                  {{ username }}
                </p>
              </div>
              <div class="user-input-wrp">
                <br />
                <input
                  v-model="user.firstname"
                  type="text"
                  class="inputText bor-ra w-100 p-2 pl-5"
                  required
                />
                <img
                  src="../../assets/img/ic_user_select.png"
                  class="iocn-set set-w"
                />
                <span class="floating-label bg-white-color px-2 ml-4"
                  >First Name</span
                >
                <p class="red-color-font-s mb-0" v-if="firstname != ''">
                  {{ firstname }}
                </p>
              </div>
              <div class="user-input-wrp">
                <br />
                <input
                  v-model="user.lastname"
                  type="text"
                  class="inputText bor-ra w-100 p-2 pl-5"
                  required
                />
                <img
                  src="../../assets/img/ic_user_select.png"
                  class="iocn-set set-w"
                />
                <span class="floating-label bg-white-color px-2 ml-4"
                  >Last Name</span
                >
                <p class="red-color-font-s mb-0" v-if="lastname != ''">
                  {{ lastname }}
                </p>
              </div>
              <div class="user-input-wrp">
                <br />
                <input
                  v-model="user.email"
                  type="email"
                  class="inputText bor-ra w-100 p-2 pl-5"
                  required
                />
                <img
                  src="../../assets/img/ic_email_sign_up_select.png"
                  class="iocn-set set-w"
                />
                <span class="floating-label bg-white-color px-2 ml-4"
                  >Email Address</span
                >
                <p class="red-color-font-s mb-0" v-if="email != ''">
                  {{ email }}
                </p>
              </div>
              <div class="user-input-wrp">
                <br />
                <input
                  v-model="user.phone"
                  type="number"
                  class="inputText bor-ra w-100 p-2 pl-5"
                  required
                />
                <img
                  src="../../assets/img/ic_sign_up_phone_select.png"
                  class="iocn-set set-w"
                />
                <span class="floating-label bg-white-color px-2 ml-4"
                  >Phone number</span
                >
                <span class="floating-label bg-white-color px-2 ml-4"
                  >Phone number</span
                >
                <p class="red-color-font-s mb-0" v-if="phone != ''">
                  {{ phone }}
                </p>
              </div>
              <div class="user-input-wrp">
                <br />
                <multiselect
                  v-model="user.category_id"
                  :options="options"
                  :multiple="true"
                  :close-on-select="true"
                  :clear-on-select="false"
                  :preserve-search="true"
                  placeholder="Select Category"
                  label="name"
                  track-by="name"
                  :preselect-first="true"
                >
                  <template
                    slot="selection"
                    slot-scope="{ values, search, isOpen }"
                    ><span
                      class="multiselect__single"
                      v-if="values.length &amp;&amp; !isOpen"
                      >{{ values.length }} options selected</span
                    ></template
                  >
                </multiselect>
                <span
                  class="floating-label bg-white-color px-2 ml-4 deafult-height"
                  >Coach Category</span
                >
                <p class="red-color-font-s mb-0" v-if="category_id != ''">
                  {{ category_id }}
                </p>
              </div>

              <div class="my-3">
                Gender (Optional)
                <div class="my-2">
                  <label class="mx-4">
                    <input
                      type="radio"
                      v-model="user.gender"
                      v-on:click="genderbutton('Male')"
                      value="Male"
                      name="sa"
                      id=""
                      autocomplete="off"
                      checked
                    /><span class="pl-2"> Male </span>
                  </label>
                  <label class="mx-4">
                    <input
                      type="radio"
                      v-model="user.gender"
                      v-on:click="genderbutton('Female')"
                      value="Female"
                      name=""
                      id=""
                      autocomplete="off"
                    /><span class="pl-2">Female</span>
                  </label>
                  <label class="mx-4">
                    <input
                      type="radio"
                      v-model="user.gender"
                      v-on:click="genderbutton('Custom')"
                      value="Custom"
                      name=""
                      id=""
                      autocomplete="off"
                    /><span class="pl-2">Custom</span>
                  </label>
                  <div class="user-input-wrp" v-if="genderdisplay == '1'">
                    <br />
                    <input
                      type="text"
                      v-model="user.custom_gender"
                      class="inputText bor-ra w-100 p-2 pl-5"
                      required
                    />
                    <img
                      src="../../assets/img/ic_sign_up_phone_select.png"
                      class="iocn-set set-w"
                    />
                    <span class="floating-label bg-white-color px-2 ml-4"
                      >Custom Gender</span
                    >
                  </div>
                  <p class="red-color-font-s mb-0" v-if="gender != ''">
                    {{ gender }}
                  </p>
                </div>
              </div>
              <div>
                <input
                  name=""
                  id=""
                  v-model="user.tearm"
                  class="btn btn-primary"
                  type="checkbox"
                  value=""
                />
                <span class="mx-3">
                  I accept
                  <span class="text-green"> Terms & Conditions</span></span
                >
                <p class="red-color-font-s mb-0" v-if="tearm != ''">
                  {{ tearm }}
                </p>
              </div>
              <div
                @click.prevent="Signup()"
                class="p-3 bg-success text-center rounded btn-green text-white mt-2 mb-5"
              >
                NEXT
              </div>
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
import Multiselect from "vue-multiselect";
Vue.use(VueAxios, axios);
import apiServices from "../../components/Service/apiservice";
import constants from "../../components/Service/constants.js";

export default {
  name: "SignupCoach",
  data() {
    return {
      user: {},
      username: "",
      firstname: "",
      lastname: "",
      email: "",
      genderdisplay: "0",
      phone: "",
      gender: "",
      tearm: "",
      category_id: "",
      options: [],
      selectedFile:'',
      images: ''
    };
  },
  mounted() {
    this.getCoachCategory();
    if(localStorage.getItem("coach")!=null){
      this.user=JSON.parse(localStorage.getItem('coach'));
    }
    else{
      this.user= {}
    }
  },
  components: {
    Header,
    Footer,
    Leftsidetwo,
    Multiselect,
  },
  methods: {
    async getCoachCategory() {
      var param = "lang=" + "0";
      let res = await apiServices.makeAPICall(
        apiServices.postMethod,
        apiServices.URL + apiServices.coach_category_listAPI,
        param,
        () => {}
      );
      let values = res.data.data;
      values.forEach((element) => {
        let new_obj = {
          name: element.category_name,
          id: element.category_id,
        };
        this.options.push(new_obj);
      });
    },
    genderbutton(id) {
      if (id == "Custom") {
        this.genderdisplay = "1";
      } else {
        this.genderdisplay = "0";
      }
    },
    onFileChangedPhoto(event) {
      let input = event.target;
      if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = (e) => {
          this.user.coachphoto = e.target.result;
          this.selectedFilePhoto = input.files[0];
          this.images = e.target.result;
          console.log(this.images);
        };
        reader.readAsDataURL(input.files[0]);
      }
      this.selectedFilePhoto = event.target.files[0];
      
    },
    async Signup() {
      this.username = "";
      this.firstname = "";
      this.lastname = "";
      this.email = "";
      this.phone = "";
      //  this.coach = "";
      this.gender = "";
      this.tearm = "";
      if (!this.user.username) {
        this.username = constants.username;
      }
      if (!this.user.firstname) {
        this.firstname = constants.firstname;
      }
      if (!this.user.lastname) {
        this.lastname = constants.lastname;
      }
      if (!this.user.email) {
        this.email = constants.email;
      }
      else {
        if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/.test(this.user.email)) {
          this.email = constants.valid;
        }
      }
      if (!this.user.phone) {
        this.phone = constants.phone;
      }
      if (!this.user.gender) {
        this.gender = constants.gender;
      }
      if (!this.user.tearm) {
        this.tearm = constants.tearm;
      }
      if (!this.user.category_id) {
        this.category_id = constants.category_id;
      }
      if (!this.selectedFilePhoto) {
        this.selectedFile = constants.selectedFile;
      }

      if (
        this.username == "" &&
        this.firstname == "" &&
        this.lastname == "" &&
        this.email == "" &&
        this.phone == "" &&
        this.gender == "" &&
        this.selectedFile == "" &&
        this.tearm == ""
      ) {
        localStorage.setItem("coach", JSON.stringify(this.user));
        this.$router.push("/Billingplan");
        //localStorage.setItem("coach_profile_image", this.selectedFilePhoto);

        /*var param = new FormData();
        param.append('file',this.selectedFilePhoto);
        param.append('gender',this.gender);
        param.append('image',this.user.coachphoto);

        let res = await apiServices.makeAPICall(
          apiServices.postMethod,
          apiServices.URL + apiServices.coach_registerAPI,
          param,
          () => {},
        );
        this.Servicedata = res.data.data;*/
      }
    },
  },
};
</script>
<style>
.deafult-height {
  top: 15px !important;
  font-size: 13px !important;
}
.p-3.bg-success.text-center.rounded.btn-green.text-white.mt-2.mb-5 {
  cursor: pointer;
}
</style>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>