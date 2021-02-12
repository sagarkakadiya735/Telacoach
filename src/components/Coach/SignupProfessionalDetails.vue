
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
              <div class="text-green mt-4 mb-5">
                <router-link class="text-green" to="/addressCoach">
                  <img
                    class="width-back-icon"
                    src="../../assets/img/ic_green_back.png"
                    alt=""
                  />
                  <span class="px-3 font-weight-bold"> Back </span>
                </router-link>
              </div>
              <div class="text-center">
                <h3 class="font-weight-bold text-green text-left">
                  Professional Details
                </h3>
                <div class="user-input-wrp">
                  <br />
                  <input
                    v-model="user.professional_history"
                    type="text"
                    class="inputText bor-ra bor-ras w-100 p-3"
                    placeholder="Enter here .."
                    required
                  />
                  <span
                    class="floating-label bg-white-color px-2 text-muted deafult-height"
                    >Professional History Achievement</span
                  >
                  <p class="red-color-font-s mb-0" v-if="professional_history != ''">
                    {{ professional_history }}
                  </p>
                </div>
                <div class="user-input-wrp">
                  <br />
                  <select
                    v-model="user.education"
                    class="custom-select py-2 h-55 inputText bor-ra text-muted"
                  >
                    <option value="0">--Select eduction here--</option>
                    <option value="1">Doctorate</option>
                    <option value="2">Master’s</option>
                    <option value="3">Associate’s</option>
                    <option value="4">Bachelor’s</option>
                    <option value="5">Some College</option>
                    <option value="6">High School</option>
                    <option value="7">None</option>
                  </select>
                  <span
                    class="floating-label bg-white-color px-2 text-muted deafult-height"
                    >Education Background</span
                  >
                  <p class="red-color-font-s mb-0" v-if="education != ''">
                    {{ education }}
                  </p>
                </div>
                <div class="user-input-wrp">
                  <br />
                  <input
                    v-model="user.qualifications"
                    type="text"
                    class="inputText bor-ra bor-ras w-100 p-3"
                    placeholder="Enter here .."
                    required
                  />
                  <span
                    class="floating-label bg-white-color px-2 text-muted deafult-height"
                    >Qualifications</span
                  >
                  <p class="red-color-font-s mb-0" v-if="qualifications != ''">
                    {{ qualifications }}
                  </p>
                </div>
                <div class="user-input-wrp">
                  <br />
                  <input
                    v-model="user.specialization"
                    type="text"
                    class="inputText bor-ra bor-ras w-100 p-3"
                    placeholder="Enter here .."
                    required
                  />
                  <span
                    class="floating-label bg-white-color px-2 text-muted deafult-height"
                    >Specialization</span
                  >
                  <p class="red-color-font-s mb-0" v-if="specialization != ''">
                    {{ specialization }}
                  </p>
                </div>
                <div class="user-input-wrp">
                  <br />
                  <input
                    v-model="user.description"
                    type="text"
                    class="inputText bor-ra bor-ras w-100 p-3"
                    placeholder="Enter Your description.."
                    required
                  />
                  <span
                    class="floating-label bg-white-color px-2 text-muted deafult-height"
                    >Description about yourself</span
                  >
                  <p class="red-color-font-s mb-0" v-if="description != ''">
                    {{ description }}
                  </p>
                </div>
                <div class="h6 text-left pt-3 text-green font-weight-bold">
                  Certifications
                </div>
                <div class="set-boder w-25 my-2 py-2">
                  <div class="text-muted message-time" @click="onPickImageList">Add certificate</div>
                  <input
                    type="file"
                    style="display: none"
                    ref="fileInputList"
                    accept="image/*"
                    multiple
                    @change="onImageListPicked">
                </div>
                <!-- multiple images -->
                <div class="row" v-if="imageUrlList != ''">
                  <div class="m-1 py-1" v-for="(img, index) in imageUrlList" :key="index">
                      <img :src="img" width="125" height="100">
                  </div>
                </div>
                <!-- end -->
                <div class="user-input-wrp">
                  <br />
                  <input
                    v-model="user.certifications"
                    type="text"
                    class="inputText bor-ra bor-ras w-100 p-3"
                    placeholder="Enter here.."
                    required
                  />
                  <span
                    class="floating-label bg-white-color px-2 text-muted deafult-height"
                    >Certifications</span
                  >
                  <p class="red-color-font-s mb-0" v-if="certifications != ''">
                    {{ certifications }}
                  </p>
                </div>
              </div>

              <router-link
                class="text-white font-weight-bold"
                to="/SetPassword"
              >
                <div
                  @click.prevent="professionalDetails()"
                  class="p-3 bg-success font-weight-bold text-center rounded btn-green text-white my-5"
                >
                  NEXT
                </div>
              </router-link>
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
  name: "professionaldetails",
  data() {
    return {
      user: {},
      professional_history :"",
      education :"",
      qualifications :"",
      specialization :"",
      description :"",
      certifications :"",
      imageList: [],
      imageUrlList: []
    };
  },
  mounted() {
    if(localStorage.getItem("professionaldetails")!=null){
      this.user=JSON.parse(localStorage.getItem('professionaldetails'));
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
    onPickImageList () {
      this.$refs.fileInputList.click()
    },
    onImageListPicked (event) {
      let selectedFiles1 = event.target.files || event.dataTransfer.files 
      this.imageList = []
      Array.prototype.push.apply(this.imageList, selectedFiles1)
      if (!this.imageList.length) {
        return
      }
      this.createImage(this.imageList)
    },
    createImage (file) {
      for (var i = 0; i < file.length; i++) {
        var fileReader = new FileReader()
        fileReader.addEventListener('load', () => {
          // const data = {
          //   'img_1' : fileReader.result,
          // }
          this.imageUrlList.push(fileReader.result)
        })
        fileReader.readAsDataURL(file[i])
        this.imageList = file[i]
      }
    },
    async professionalDetails() {
      this.professional_history = "";
      this.education = "";
      this.qualifications = "";
      this.specialization = "";
      this.description = "";
      this.certifications = "";
      if (!this.user.professional_history) {
        this.professional_history = constants.professional_history;
      }
      if (!this.user.education) {
        this.education = constants.education;
      }
      if (!this.user.qualifications) {
        this.qualifications = constants.qualifications;
      }
      if (!this.user.specialization) {
        this.specialization = constants.specialization;
      }
      if (!this.user.description) {
        this.description = constants.description;
      }
      if (!this.user.certifications) {
        this.certifications = constants.certifications;
      }
      if (this.professional_history == "" && this.education == "" && this.qualifications == "" && this.specialization == "" && this.description == "" && this.certifications == "") {
        localStorage.setItem("professionaldetails", JSON.stringify(this.user));
        localStorage.setItem("certificate_image", JSON.stringify(this.imageUrlList.join(", ")));
        this.$router.push("/SetPassword");
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
.custom-select {
  background: #fff url("../../assets/img/ic_down.png") no-repeat right 0.75rem
    center/15px 10px;
}
.set-boder {
  border: 2px dashed #ccc;
  border-radius: 8px;
}
.bor-ras {
  border: 2px solid #ccc !important;
}
</style>