<template>
  <div>
    <Header />
    <div class="text-center bg-img-header py-5 header-top">
      <h2 class="font-weight-bold pt-4">My Profile</h2>
      <div class="mx-auto border-lines mb-4"></div>
    </div>
    <div class="bg-grew-dark">
      <div class="container py-5">
        <div class="container box-shadow rounded mt-5 p-0 bg-white border-radius" style="width: 750px">
            <div class="px-4 pt-4 font-weight-bold">
              <router-link class="text-dark" to="/myprofilesetting">
              <div class="float-left">
                <img src="../../assets/img/ic_back_arrow.png" width="25" class="mr-3" />Back
              </div>
              </router-link>
            </div>
            <div class="text-center h3 text-center font-weight-bold border-bottom pr-100 pb-2">
              Professional Details
            </div>
            <div class="row">
              <div class="px-4 card my-3 border-0 w-100 m-3">
                <div class="card-body p-0">
                  <div class="p-3">
                    <div class="message">
                      <div class="font-weight-bold text-green">Professional History & Achievements</div>
                      <div class="user-input-wrp line-h">
                        <br />
                        <input type="text" v-model="coach.professional_history" class="inputText border-bottom-0 w-100 p-3 rounded boder-1 w-100 bg-blue-light"  />
                        <p class="red-color-font-s mt-3 mb-0" v-if="professional_history != ''">
                          {{ professional_history }}
                        </p>
                      </div>
                      <div class="font-weight-bold mt-4 text-green">Educational Background</div>
                      <div class="user-input-wrp line-h"><br />
                        <select class="inputText border-bottom-0 w-100 p-3 rounded boder-1 w-100 bg-blue-light" v-model="coach.education">
                          <option value="0">--Select eduction here--</option>
                          <option value="1" v-bind:selected="coach.education == '1'">Doctorate</option>
                          <option value="2" v-bind:selected="coach.education == '2'">Master’s</option>
                          <option value="3" v-bind:selected="coach.education == '3'">Associate’s</option>
                          <option value="4" v-bind:selected="coach.education == '4'">Bachelor’s</option>
                          <option value="5" v-bind:selected="coach.education == '5'">Some College</option>
                          <option value="6" v-bind:selected="coach.education == '6'">High School</option>
                          <option value="7" v-bind:selected="coach.education == '7'">None</option>
                        </select>
                        <p class="red-color-font-s mt-3 mb-0" v-if="education != ''">
                          {{ education }}
                        </p>
                      </div>
                      <div class="font-weight-bold mt-4 text-green">Qualification</div>
                      <div class="user-input-wrp line-h"><br />
                        <input type="text" v-model="coach.qualification" class="inputText border-bottom-0 w-100 p-3 rounded boder-1 w-100 bg-blue-light" placeholder="Qualification" />
                        <p class="red-color-font-s mt-3 mb-0" v-if="qualification != ''">
                          {{ qualification }}
                        </p>
                      </div>
                      <div class="font-weight-bold mt-4 text-green">Specialization</div>
                      <div class="user-input-wrp line-h"><br />
                        <input type="text" v-model="coach.specialization" class="inputText border-bottom-0 w-100 p-3 rounded boder-1 w-100 bg-blue-light" placeholder="Specialization" />
                        <p class="red-color-font-s mt-3 mb-0" v-if="specialization != ''">
                          {{ specialization }}
                        </p>
                      </div>
                      <div class="font-weight-bold mt-4 text-green">Describe yourself</div>
                      <div class="user-input-wrp line-h"><br />
                        <input type="text" v-model="coach.description" class="inputText border-bottom-0 w-100 p-3 rounded boder-1 w-100 bg-blue-light" placeholder="Description" />
                        <p class="red-color-font-s mt-3 mb-0" v-if="description != ''">
                          {{ description }}
                        </p>
                      </div>
                      <div class="font-weight-bold mt-4 text-green">Certificate</div>
                      <div class="user-input-wrp line-h"><br />
                        <div class="row">
                          <template v-if="coach.certificate_image != ''">
                          <div class="col-md-3 float-left mt-2" style="max-width:24%;" v-for="(item, index) in coach.certificate_image" :key="index">
                            <a class="cursor-point" @click.prevent="deleteCertificateImg(item.coach_certification_id)" >
                            <img src="../../assets/img/cross.jpg" class="certificate-imgs float-right" alt="" height="25" width="25" style="position: absolute;left: 138px;top: -10px;" />
                            </a>
                            <img :src="item.certification_image" class="certificate-imgs w-100" alt="" height="130"  />
                          </div>
                          </template>

                          <!-- multiple images -->
                          <template v-if="imageUrlList != ''">
                            <div class="col-md-3 float-left mt-2" v-for="(img, index) in imageUrlList" :key="index" :id="'div_'+index">
                                <a class="cursor-point" @click.prevent="deleteCertificate(index)" >
                                  <img src="../../assets/img/cross.jpg" class="certificate-imgs float-right" alt="" height="25" width="25" style="position: absolute;left: 138px;top: -10px;" />
                                </a>
                                <img :src="img" class="certificate-imgs w-100" alt="" height="130">
                            </div>
                          </template>
                          <!-- end -->

                          <div class="col-md-3 float-right mt-3">
                            <div class="files-div" id="file-uploader" >
                              <input name="Comment" type="file" class="form-control" multiple data-targe="#file-uploader" @change="onImageListPicked" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="font-weight-bold mt-4 text-green">Certification</div>
                      <div class="user-input-wrp line-h"> <br />
                        <input type="text" v-model="coach.certification" class="inputText border-bottom-0 w-100 p-3 rounded boder-1 w-100 bg-blue-light" placeholder="Certification" />
                        <p class="red-color-font-s mt-3 mb-0" v-if="certification != ''">
                          {{ certification }}
                        </p>
                      </div>
                      <div class="font-weight-bold mt-4 text-green"> Language Spoken </div>
                      <input type="text" v-model="coach.language_spoken" class="inputText border-0 w-100 p-3 rounded boder-1 w-100 bg-blue-light" placeholder="None" />
                      <p class="red-color-font-s mt-3 mb-0" v-if="language_spoken != ''">
                        {{ language_spoken }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          
          <button @click.prevent="submit()" class="mx-auto w-100 border-0 p-3 mt-3 bg-success text-center btn-green text-white border-r-bx">
            SAVE
          </button>
        </div>
      </div>
    </div>

    <Footer />
  </div>
</template>
  
<script>
import Header from "../Header.vue";
import Footer from "../Footer.vue";
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios);
import apiServices from "../../components/Service/apiservice";
import constants from "../../components/Service/constants.js";

export default {
  name: "ProfessionalDetails",
  data() {
    return {
      coach: {},
      imageList: [],
      imageUrlList: [],
      certificate_img: '',
      professional_history: "",
      education: "",
      qualification: "",
      specialization: "",
      description: "",
      certification: "",
      language_spoken: "",
    };
  },
  mounted() {
    //this.coach = JSON.parse(localStorage.getItem("Login_data"));
    this.getProfessionalDetail();
  },
  components: {
    Header,
    Footer,
  },
  methods: {
    async getProfessionalDetail() {
      var parameter = 
      "lang=" + "0"+
      "&coach_id=" + JSON.parse(localStorage.getItem("Login_data")).coach_id+
      "&access_token=" + JSON.parse(localStorage.getItem("Login_data")).access_token+
      "&timezone=" + JSON.parse(localStorage.getItem("Login_data")).timezone+
      "&is_flag=" + '0';

      let resData = await apiServices.makeAPICall(apiServices.postMethod,apiServices.URL + apiServices.save_professional_detailsAPI,parameter,() => {});
      Vue.prototype.$professional_detail = resData.data.data;
      this.coach = Vue.prototype.$professional_detail;
    },
    async deleteCertificateImg(certificate_id) {
      if(confirm('Are you sure want to delete this image?')) {
        var parameter = 
        "lang=" + "0"+
        "&coach_id=" + JSON.parse(localStorage.getItem("Login_data")).coach_id+
        "&access_token=" + JSON.parse(localStorage.getItem("Login_data")).access_token+
        "&coach_certification_id=" + certificate_id;

        let resData = await apiServices.makeAPICall(apiServices.postMethod,apiServices.URL + apiServices.delete_certificate_imageAPI,parameter,() => {});
        if(resData.data.flag == 1) {
          this.ToastAlert('success',resData.data.msg);
          this.getProfessionalDetail();
        }
        else {
          this.ToastAlert('error',resData.data.msg)
        }
      }
    },
    async deleteCertificate(temp) {
      this.imageUrlList.splice(temp, 1);
    },

    // Certification image
    onImageListPicked (event) {
      let selectedFiles = event.target.files || event.dataTransfer.files 
      this.imageList = []
      Array.prototype.push.apply(this.imageList, selectedFiles);
      if (!this.imageList.length) {
        return
      }
      this.createImage(this.imageList)
    },
    createImage (file) {
      for (var i = 0; i < file.length; i++) {
        var fileReader = new FileReader();
        fileReader.addEventListener('load', () => {
          this.imageUrlList.push(fileReader.result);
        });
        fileReader.readAsDataURL(file[i]);
        this.imageList = file[i];
      }
    },
    // End
    async submit() {
      this.professional_history = "";
      this.education = "";
      this.qualification = "";
      this.specialization = "";
      this.description = "";
      this.certification = "";
      this.language_spoken = "";
      if (!this.coach.professional_history) {
        this.professional_history = constants.professional_history;
      }
      if (!this.coach.education) {
        this.education = constants.education;
      }
      if (!this.coach.qualification) {
        this.qualification = constants.qualification;
      }
      if (!this.coach.specialization) {
        this.specialization = constants.specialization;
      }
      if (!this.coach.description) {
        this.description = constants.description;
      }
      if (!this.coach.certification) {
        this.certification = constants.certifications;
      }
      if (!this.coach.language_spoken) {
        this.language_spoken = constants.language_spoken;
      }

      if (this.professional_history != "Enter professional history" && this.education != "Enter education background" && this.qualification != "Enter qualifications" && this.specialization != "Enter specialization" && this.description != "Enter description" && this.certification != "Enter certifications" && this.language_spoken != "Enter language spoken") {
        this.certificate_img = this.imageUrlList.join(", ");
        const formData = new FormData()

        formData.append('lang',localStorage.getItem("lang"));
        formData.append("lang",'0');
        formData.append("coach_id", JSON.parse(localStorage.getItem("Login_data")).coach_id);
        formData.append("access_token", JSON.parse(localStorage.getItem("Login_data")).access_token);

        formData.append("professional_history", this.coach.professional_history);
        formData.append("qualification", this.coach.qualification);
        formData.append("education", this.coach.education);
        formData.append("specialization", this.coach.specialization);
        formData.append("description", this.coach.description);
        formData.append("certification", this.coach.certification);
        formData.append("certification_image", this.certificate_img);
        formData.append("language_spoken", this.coach.language_spoken);
        
        formData.append("timezone", JSON.parse(localStorage.getItem("Login_data")).timezone);
        formData.append("device_type", "2");
        formData.append("is_flag", "1");
        let res = await apiServices.makeAPICall(apiServices.postMethod,apiServices.URL + apiServices.save_professional_detailsAPI,formData,() => {});
        if(res.data.flag == 1) {
          this.ToastAlert('success',res.data.msg);
          this.$router.push("/myprofilesetting");
        }
        else {
          this.ToastAlert('error',res.data.msg)
        }
      }
    },
    ToastAlert(id,msg) {
      const Toast = this.$swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: false,
      })
      Toast.fire({
        icon: id,
        title: msg
      })
    },
  }
};
</script>
<style>
img.certificate-imgs {
  border-radius: 10px;
}
button.mx-auto.w-100.border-0.p-3.mt-3.bg-success.text-center.btn-green.text-white.border-r-bx {
  border-radius: 0px 0px 10px 14px !important;
}
.nav-tabs .nav-item.show .nav-link,
.nav-tabs .nav-link.active {
  color: #369f04 !important;
  background-color: #f7f7f7;
  border-color: #f7f7f7 #ccc #369f04 #f7f7f7;
}
.text-gray {
    color: #B4B4B4;
}

/* file uploader code */
.files-div input {
  border: 2px dashed #92b0b3;
  /* padding: 120px 0px 85px 35%; */
  text-align: center !important;
  margin: 0;
  width: 100% !important;
  border-radius: 10px;
  padding: 100px 0 0 0;
  overflow: hidden;
}
.files-div input:focus {
  outline: 2px dashed #92b0b3;
  outline-offset: -10px;
  -webkit-transition: outline-offset 0.15s ease-in-out,
    background-color 0.15s linear;
  transition: outline-offset 0.15s ease-in-out, background-color 0.15s linear;
  border: 1px solid #92b0b3;
}
.files-div {
  position: relative;
}
.files-div:after {
  pointer-events: none;
  position: absolute;
  top: 23px;
  left: 0;
  width: 50px;
  right: 0;
  height: 56px;
  content: "";
  display: block;
  margin: 0 auto;
  background-size: 100%;
  background-repeat: no-repeat;
  background-image: url(../../assets/img/ic_certifications.png);
}
.color input {
  background-color: #f1f1f1;
}
.files-div:before {
  position: absolute;
  left: 0;
  pointer-events: none;
  width: 100%;
  right: 0;
  height: 57px;
  display: block;
  margin: 0 auto;
  color: #b4b4b4;
  font-weight: 600;
  text-transform: capitalize;
  text-align: center;
  content: " Add Certificate ";
  top: 72px;
}
/* end file uploader */
</style>