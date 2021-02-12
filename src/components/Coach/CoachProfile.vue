
<template>
  <div>
    <CoachHeader />
    <div class="text-center bg-img-header py-5 header-top">
      <h2 class="font-weight-bold pt-4">Profile</h2>
      <div class="mx-auto border-lines mb-4"></div>
    </div>
    <div class="bg-grew-dark">
      <div class="container py-5">
        <div
          class="container box-shadow rounded p-0 bg-white border-radius"
          style="width: 750px"
        >
          <div class="">
            <div class="px-4 pt-4 font-weight-bold">
              <router-link class="text-dark" to="/Myprofilesetting">
              <div class="float-left">
                <img
                  src="../../assets/img/ic_back_arrow.png"
                  width="25"
                  class="mr-3"
                />Back
              </div>
              </router-link>
            </div>
            <div class="text-center h4 text-center font-weight-bold border-bottom pr-100 pb-2">
              Confirm Details
            </div>
            <div class="row">
              <div class="px-4 card my-3 border-0 w-100 m-3">
                <div class="card-body p-0">
                  <div class="p-3">
                    <div class="message">
                      <div class="font-weight-bold text-gray">First name</div>
                      <div class="user-input-wrp line-h">
                        <br />
                        <input type="text" class="inputText border-bottom-0 w-100 p-3 rounded boder-1 w-100 bg-blue-light" v-bind:value="first_name" required />
                        <p class="red-color-font-s mt-2 mb-0" v-if="first_name!=''"></p>
                      </div>
                      <div class="font-weight-bold mt-4 text-gray">Last name</div>
                      <div class="user-input-wrp line-h">
                        <br />
                        <input type="text" class="inputText border-bottom-0 w-100 p-3 rounded boder-1 w-100 bg-blue-light" v-bind:value="last_name" required />
                        <p class="red-color-font-s mt-2 mb-0" v-if="last_name!=''"></p>
                      </div>
                      <div class="font-weight-bold mt-4 text-gray">DOB</div>
                      <div class="user-input-wrp line-h">
                        <br />
                        <input type="date" v-model="coach.birth_date" class="inputText border-bottom-0 w-100 p-3 rounded boder-1 w-100 bg-blue-light" placeholder="" required />
                        <p class="red-color-font-s mt-2 mb-0" v-if="birth_date!=''">{{birth_date}}</p>
                      </div>
                      <div class="font-weight-bold mt-4 text-gray">Country</div>
                      <div class="user-input-wrp line-h">
                        <br />
                        <input type="text" class="inputText border-bottom-0 w-100 p-3 rounded boder-1 w-100 bg-blue-light" placeholder="Country" value="US" />
                        <p class="red-color-font-s mt-2 mb-0" v-if="country!=''"></p>
                      </div>
                      <div class="font-weight-bold mt-4 text-gray">State</div>
                      <div class="user-input-wrp line-h">
                        <br />
                        <input type="text" v-model="state" class="inputText border-bottom-0 w-100 p-3 rounded boder-1 w-100 bg-blue-light" placeholder="State" required />
                        <p class="red-color-font-s mt-2 mb-0" v-if="state!=''"></p>
                      </div>
                      <div class="font-weight-bold mt-4 text-gray">City</div>
                      <div class="user-input-wrp line-h">
                        <br />
                        <input type="text" v-model="city" class="inputText border-bottom-0 w-100 p-3 rounded boder-1 w-100 bg-blue-light" placeholder="City" required />
                        <p class="red-color-font-s mt-2 mb-0" v-if="city!=''"></p>
                      </div>
                      <div class="font-weight-bold mt-4 text-gray">Postal Code</div>
                      <div class="user-input-wrp line-h">
                        <br />
                        <input type="text" v-model="postal_code" class="inputText border-bottom-0 w-100 p-3 rounded boder-1 w-100 bg-blue-light" placeholder="Postal Code" required />
                        <p class="red-color-font-s mt-2 mb-0" v-if="postal_code!=''"></p>
                      </div>
                      <div class="font-weight-bold mt-4 text-gray">Address</div>
                      <div class="user-input-wrp line-h">
                        <br />
                        <input type="text" v-model="address" class="inputText border-bottom-0 w-100 p-3 rounded boder-1 w-100 bg-blue-light" placeholder="Address" required />
                        <p class="red-color-font-s mt-2 mb-0" v-if="address!=''"></p>
                      </div>
                      <div class="font-weight-bold mt-4 text-gray">Email</div>
                      <div class="user-input-wrp line-h">
                        <br />
                        <input type="email" class="inputText border-bottom-0 w-100 p-3 rounded boder-1 w-100 bg-blue-light" v-bind:value="email" required />
                        <p class="red-color-font-s mt-2 mb-0" v-if="email!=''"></p>
                      </div>
                      <div class="font-weight-bold mt-4 text-gray">Security Number</div>
                      <div class="user-input-wrp line-h">
                        <br />
                        <input type="text" v-model="coach.security_number" class="inputText border-bottom-0 w-100 p-3 rounded boder-1 w-100 bg-blue-light" placeholder="Social Security Number" required />
                        <p class="red-color-font-s mt-2" v-if="security_number!=''">{{security_number}}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button @click.prevent="submit()" class="mx-auto w-100 border-0 p-3 bg-success text-center btn-green text-white border-r-bx">SAVE</button>
        </div>
      </div>
    </div>

    <Footer />
  </div>
</template>
  
<script>
import CoachHeader from "../Header.vue";
import Footer from "../Footer.vue";
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios);
import apiServices from "../../components/Service/apiservice";
import constants from "../../components/Service/constants.js";

export default {
  name: "CoachProfile",
  data() {
    return {
      coach_detail: {},
      coach: {},
      first_name: '',
      last_name: '',
      email: '',
      birth_date: '',
      country: '',
      state: '',
      city: '',
      address: '',
      postal_code: '',
      security_number: '',
    };
  },
  mounted() {
    this.coachDetail();
  },
  components: {
    CoachHeader,
    Footer,
  },
  methods: {
    async coachDetail() {
      this.coach_detail = JSON.parse(localStorage.getItem("Login_data"));
      this.first_name = this.coach_detail.first_name;
      this.last_name = this.coach_detail.last_name;
      this.email = this.coach_detail.email;
      this.state = this.coach_detail.state;
      this.city = this.coach_detail.city;
      this.address = this.coach_detail.address;
      this.postal_code = this.coach_detail.zipcode;
    },
    async submit() {
      this.birth_date = "";
      this.security_number = "";
      if(!this.first_name) {
        this.first_name = constants.first_name;
      }
      if(!this.last_name) {
        this.last_name = constants.last_name;
      }
      if(!this.email) {
        this.email = constants.email;
      }
      if(!this.coach.birth_date) {
        this.birth_date = constants.birth_date;
      }
      if(!this.state) {
        this.state = constants.state;
      }
      if(!this.city) {
        this.city = constants.city;
      }
      if(!this.address) {
        this.address = constants.address;
      }
      if(!this.postal_code) {
        this.postal_code = constants.postal_code;
      }
      if(!this.coach.security_number) {
        this.security_number = constants.security_number;
      }

      if(this.birth_date == '' && this.security_number == '') {
        this.coach_id = '';
        this.access_token = '';
        if(JSON.parse(localStorage.getItem("Login_data")).coach_id == null) {
          this.coach_id = '';
        } else {
          this.coach_id = JSON.parse(localStorage.getItem("Login_data")).coach_id;
        }
        if(JSON.parse(localStorage.getItem("Login_data")).access_token == null) {
          this.access_token = '';
        } else {
          this.access_token = JSON.parse(localStorage.getItem("Login_data")).access_token;
        }
        this.lang = (JSON.parse(localStorage.getItem("Login_data")).lang) ? JSON.parse(localStorage.getItem("Login_data")).lang : '0' ;
        var param = 
        "lang=" + this.lang+
        "&coach_id=" + this.coach_id+
        "&access_token=" + this.access_token+
        "&first_name=" + this.first_name+
        "&last_name=" + this.last_name+
        "&email=" + this.email+
        "&birth_date=" + this.coach.birth_date+
        "&country=" + this.country+
        "&state=" + this.state+
        "&city=" + this.city+
        "&postal_code=" + this.postal_code+
        "&address=" + this.address+
        "&security_number=" + this.coach.security_number;
        let res = await apiServices.makeAPICall(apiServices.postMethod,apiServices.URL + apiServices.save_coach_accountAPI,param,() => {});
        if(res.data.flag == 1) {
          this.ToastAlert('success',res.data.msg)
          this.$router.push("/addbankaccount");
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
  },
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