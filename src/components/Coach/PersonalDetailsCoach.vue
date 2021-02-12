
<template>
  <div>
    <Header />
    <div class="text-center bg-img-header py-5 header-top">
      <h2 class="font-weight-bold pt-4">My Profile</h2>
      <div class="mx-auto border-lines mb-4"></div>
    </div>
    <div class="bg-grew-dark">
      <div class="container py-5">
        <div
          class="container box-shadow rounded mt-5 p-0 bg-white border-radius"
          style="width: 750px"
        >
          <div class="">
            <div class="px-4 pt-4 font-weight-bold">
              <router-link class="text-dark" to="/myprofilesetting">
              <div class="float-left">
                <img
                  src="../../assets/img/ic_back_arrow.png"
                  width="25"
                  class="mr-3"
                />Back
              </div>
              </router-link>
            </div>
            <div class="text-center h5 text-center font-weight-bold border-bottom pr-100 pb-2">
              Personal Details
            </div>

            <div class="row">
              <div class="px-4 card my-3 border-0 w-100 m-3">
                <div class="card-body p-0">
                  <div class="p-3">
                    <div class="message">
                      <div class="font-weight-bold text-green">Username</div>
                      <div class="user-input-wrp line-h">
                        <br />
                        <input v-model="coach.username"
                          type="text"
                          class="inputText border-bottom-0 w-100 p-3 rounded boder-1 w-100 bg-blue-light"
                          placeholder="Vishal"
                        />
                        <p class="red-color-font-s mt-3 mb-0" v-if="username != ''">
                          {{ username }}
                        </p>
                      </div>
                      <div class="font-weight-bold mt-4 text-green">First name</div>
                      <div class="user-input-wrp line-h">
                        <br />
                        <input v-model="coach.first_name"
                          type="text"
                          class="inputText border-bottom-0 w-100 p-3 rounded boder-1 w-100 bg-blue-light"
                          placeholder="Vishal"
                        />
                        <p class="red-color-font-s mt-3 mb-0" v-if="first_name != ''">
                          {{ first_name }}
                        </p>
                      </div>
                      <div class="font-weight-bold mt-4 text-green">Last name</div>
                      <div class="user-input-wrp line-h">
                        <br />
                        <input v-model="coach.last_name"
                          type="text"
                          class="inputText border-bottom-0 w-100 p-3 rounded boder-1 w-100 bg-blue-light"
                          placeholder="Vishal"
                        />
                        <p class="red-color-font-s mt-3 mb-0" v-if="last_name != ''">
                          {{ last_name }}
                        </p>
                      </div>
                      <div class="font-weight-bold mt-4 text-green">Email Address</div>
                      <div class="user-input-wrp line-h">
                        <br />
                        <input v-model="coach.email"
                          type="email"
                          class="inputText border-bottom-0 w-100 p-3 rounded boder-1 w-100 bg-blue-light"
                          placeholder="vishal@gmail.com"
                        />
                        <p class="red-color-font-s mt-3 mb-0" v-if="email != ''">
                          {{ email }}
                        </p>
                      </div>
                      <div class="font-weight-bold mt-4 text-green">Phone Number</div>
                      <div class="user-input-wrp line-h">
                        <br />
                        <input v-model="coach.mobile_no"
                          type="number"
                          class="inputText border-bottom-0 w-100 p-3 rounded boder-1 w-100 bg-blue-light"
                          placeholder="9876543210"
                        />
                        <p class="red-color-font-s mt-3 mb-0" v-if="mobile_no != ''">
                          {{ mobile_no }}
                        </p>
                      </div>
                      <div class="font-weight-bold mt-4 text-green">Gender</div>
                      <div class="user-input-wrp line-h">
                        <br />
                        <select name="gender" class="inputText border-bottom-0 w-100 p-3 rounded boder-1 w-100 bg-blue-light" v-model="coach.gender" v-on:change="genderbutton(coach.gender)">
                            <option value="">-- Select --</option>
                            <option value="Male" v-bind:selected="coach.gender == 'Male'">Male</option>
                            <option value="Female" v-bind:selected="coach.gender == 'Female'">Female</option>
                            <option value="Custom" v-bind:selected="coach.gender == 'Custom'">Custom</option>
                        </select>
                        <p class="red-color-font-s mt-3 mb-0" v-if="gender != ''">
                          {{ gender }}
                        </p>
                      </div>
                      <div class="font-weight-bold mt-4 text-green" v-if="coach.custom_gender != '' || genderdisplay == '1'">Custom Gender</div>
                      <div class="user-input-wrp line-h" v-if="coach.custom_gender != '' || genderdisplay == '1'">
                        <br />
                        <input v-model="coach.custom_gender"
                          type="text"
                          class="inputText border-bottom-0 w-100 p-3 rounded boder-1 w-100 bg-blue-light"
                          placeholder="Custom Gender"
                        />
                        <p class="red-color-font-s mt-3 mb-0" v-if="custom_gender != ''">
                          {{ custom_gender }}
                        </p>
                      </div>

                      <div class="font-weight-bold mt-4 text-green">Coach Category</div>
                      <div class="user-input-wrp line-h">
                        <br />
                        <select class="inputText border-bottom-0 w-100 p-3 rounded boder-1 w-100 bg-blue-light" v-model="coach.category_id">
                          <option :value="coach.category_id" selected>{{coach.category_name}}</option>
                        </select>
                        <p class="red-color-font-s mt-3 mb-0" v-if="category_id != ''">
                          {{ category_id }}
                        </p>
                      </div>
                      <div class="font-weight-bold mt-4 text-green">Address</div>
                      <div class="user-input-wrp line-h">
                        <br />
                        <input v-model="coach.address"
                          type="text"
                          class="inputText border-bottom-0 w-100 p-3 rounded boder-1 w-100 bg-blue-light"
                          placeholder="Surat, Gujarat, India"
                        />
                        <p class="red-color-font-s mt-3 mb-0" v-if="address != ''">
                          {{ address }}
                        </p>
                      </div>
                      <div class="font-weight-bold mt-4 text-green">City</div>
                      <div class="user-input-wrp line-h">
                        <br />
                        <input v-model="coach.city"
                          type="text"
                          class="inputText border-bottom-0 w-100 p-3 rounded boder-1 w-100 bg-blue-light"
                          placeholder="Surat"
                        />
                        <p class="red-color-font-s mt-3 mb-0" v-if="city != ''">
                          {{ city }}
                        </p>
                      </div>

                      <div class="font-weight-bold mt-4 text-green">State</div>
                      <div class="user-input-wrp line-h">
                        <br />
                        <input v-model="coach.state"
                          type="text"
                          class="inputText border-bottom-0 w-100 p-3 rounded boder-1 w-100 bg-blue-light"
                          placeholder="Gujarat"
                        />
                        <p class="red-color-font-s mt-3 mb-0" v-if="state != ''">
                          {{ state }}
                        </p>
                      </div>

                    <div class="font-weight-bold mt-4 text-green">Zip code</div>
                      <div class="user-input-wrp line-h">
                        <br />
                        <input v-model="coach.zipcode"
                          type="number"
                          class="inputText border-bottom-0 w-100 p-3 rounded boder-1 w-100 bg-blue-light"
                          placeholder="395010"
                        />
                        <p class="red-color-font-s mt-3 mb-0" v-if="zipcode != ''">
                          {{ zipcode }}
                        </p>
                      </div>
                      
                    </div>
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
import constants from "../../components/Service/constants";

export default {
  name: "PersonalDetail",
  data() {
    return {
      coach: {},
      genderdisplay: "0",
      //errors: [],
      username: '',
      first_name: '',
      last_name: '',
      email: '',
      mobile_no: '',
      gender: '',
      custom_gender: '',
      category_id: '',
      address: '',
      city: '',
      state: '',
      zipcode: '',
    };
  },
  mounted() {
    this.getCoachDetail();
  },
  components: {
    Header,
    Footer,
  },
  methods: {
    genderbutton(id) {
      if (id == "Custom") {
        this.genderdisplay = "1";
      } else {
        this.genderdisplay = "0";
      }
    },
    async getCoachDetail() {
      var parameter = 
      "lang=" + "0"+
      "&coach_id=" + JSON.parse(localStorage.getItem("Login_data")).coach_id+
      "&access_token=" + JSON.parse(localStorage.getItem("Login_data")).access_token+
      "&timezone=" + JSON.parse(localStorage.getItem("Login_data")).timezone+
      "&is_flag=" + '0';
      console.log(parameter);

      let resData = await apiServices.makeAPICall(apiServices.postMethod,apiServices.URL + apiServices.save_coach_profileAPI,parameter,() => {});
      Vue.prototype.$coach_detail = resData.data.data;
      this.coach = Vue.prototype.$coach_detail;
    },
    async submit() {
      this.username = '';
      this.first_name = '';
      this.last_name = '';
      this.email = '';
      this.mobile_no = '';
      this.gender = '';
      this.category_id = '';
      this.address = '';
      this.city = '';
      this.state = '';
      this.zipcode = '';
      if (!this.coach.username) {
        this.username = constants.username;
      } 
      if (!this.coach.first_name) {
        this.first_name = constants.firstname;
      } 
      if (!this.coach.last_name) {
        this.last_name = constants.lastname;
      } 
      if (!this.coach.email) {
        this.email = constants.email;
      } else {
        if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/.test(this.coach.email)) {
          this.email = constants.valid;
        }
      }
      if (!this.coach.mobile_no) {
        this.phone = constants.phone;
      } 
      if (!this.coach.gender) {
        this.gender = constants.gender;
      }
      if (!this.coach.category_id) {
        this.category_id = constants.category_id;
      } 
      if (!this.coach.address) {
        this.address = constants.address;
      } 
      if (!this.coach.city) {
        this.city = constants.city;
      } 
      if (!this.coach.state) {
        this.state = constants.state;
      } 
      if (!this.coach.zipcode) {
        this.zipcode = constants.zipcode;
      }

      if (this.username != "Enter username" &&
          this.first_name != "Enter firstname" &&
          this.last_name != "Enter lastname" &&
          this.email != "Enter email" &&
          this.phone != "Enter phone" &&
          this.gender != "Select gender" &&
          this.category_id != "Select category" &&
          this.address != "Enter address" &&
          this.city != "Enter city" &&
          this.state != "Enter state" &&
          this.zipcode != "Enter zipcode") 
      {
        var param = 
        "lang=" + "0"+
        "&coach_id=" + JSON.parse(localStorage.getItem("Login_data")).coach_id+
        "&access_token=" + JSON.parse(localStorage.getItem("Login_data")).access_token+
        "&username=" + this.coach.username+
        "&first_name=" + this.coach.first_name+
        "&last_name=" + this.coach.last_name+
        "&email=" + this.coach.email+
        "&mobile_no=" + this.coach.mobile_no+
        "&gender=" + this.coach.gender+
        "&category_id=" + this.coach.category_id+
        "&address=" + this.coach.address+
        "&city=" + this.coach.city+
        "&state=" + this.coach.state+
        "&zipcode=" + this.coach.zipcode+
        "&timezone=" + JSON.parse(localStorage.getItem("Login_data")).timezone+
        "&custom_gender=" + this.coach.custom_gender+
        "&is_flag=" + "1";
        console.log(param);
        let res = await apiServices.makeAPICall(apiServices.postMethod,apiServices.URL + apiServices.save_coach_profileAPI,param,() => {});
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
</style>