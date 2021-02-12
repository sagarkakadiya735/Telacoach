
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
                <div class="text-green mt-4 mb-5">
               <router-link class="text-green" to="/address">
              <img class="width-back-icon" src="../../assets/img/ic_green_back.png" alt="">
              <span class="px-3">
              Back
              </span>
               </router-link>
              </div>
                  <h5 class="text-green font-weight-bold mb-0">Set Password</h5>
                <div class="user-input-wrp">
                  <br />
                  <input type="password" v-model="user.password" class="inputText bor-ra w-100 p-2 pl-5" required />
                  <img src="./../../assets/img/ic_password_unselect.png" class="iocn-set set-w"/>
                  <span class="floating-label bg-white-color px-2 ml-4">Password</span>
                  <p class="red-color-font-s mb-0" v-if="password!=''">{{password}}</p>
                </div>
                <div class="user-input-wrp">
                  <br />
                  <input type="password" v-model="user.co_password" class="inputText bor-ra w-100 p-2 pl-5" required />
                  <img src="./../../assets/img/ic_password_unselect.png" class="iocn-set set-w"/>
                  <span class="floating-label bg-white-color px-2 ml-4">Confirm Password</span>
                  <p class="red-color-font-s mb-0" v-if="co_password!=''">{{co_password}}</p>
                </div>
                 <h5 class="text-green font-weight-bold mt-3">Set Security Question</h5>
                <div class="user-input-wrp">
                  <br />
                  <select v-model="user.question" class="custom-select py-2 h-55 inputText bor-ra">
                    <option selected value="" disabled>Select Question</option>
                    <option v-for="(item, index) in questions" :key="index" v-bind:value="item.security_id"> {{ item.question }}</option>
                  </select>
                  <span class="floating-label bg-white-color px-2 ml-4 deafult-height">Select Question</span>
                  <p class="red-color-font-s mb-0" v-if="question!=''">{{question}}</p>
                </div>
                <div class="user-input-wrp">
                  <br />
                  <input type="text" v-model="user.answer" class="inputText bor-ra w-100 p-2 pl-5" required />
                  <span class="floating-label bg-white-color px-2 ml-4">Answer Here</span>
                  <p class="red-color-font-s mb-0" v-if="answer!=''">{{answer}}</p>
                </div>
                <div @click.prevent="submit()" class="p-3 bg-success text-center rounded btn-green text-white mt-5">
                   <!-- <router-link class="text-white font-weight-bold" to="/home"> -->
                  Submit
                   <!-- </router-link> -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
       <Footer/>
</div>    
</template>
  
<script>
import Header from "../Header.vue";
import Footer from "../Footer.vue";
import Leftsidetwo from "../Leftsidetwo.vue";
import constants from "../../components/Service/constants.js";
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios);
import apiServices from "../../components/Service/apiservice";

export default {
  name: "Password",
  data() {
    return {
       questions: [],
       userdata: {},
       addressdata: {},
      user: {},
       password:'',
       cus_gender:'',
       co_password:'',
       question:'',
       answer:'',
    };
  },
   mounted() {
      this.QuestionAPI();
      this.user.question='';
  },
    components: {
    Header,
    Footer,
    Leftsidetwo
  },
  methods: {
    async QuestionAPI() {  
        var param = "lang=" + "0";
        let res = await apiServices.makeAPICall(apiServices.postMethod,apiServices.URL + apiServices.security_question_listAPI,param,() => {});
        Vue.prototype.$question_services = res.data.data;
        this.questions = Vue.prototype.$question_services;
    },
    async submit() {  
       this.password = "";
       this.co_password = "";
       this.question = "";
       this.answer = "";
         if (!this.user.password || this.user.password.trim() == "") {
            this.password += constants.password;
          }
          if (!this.user.co_password || this.user.co_password.trim() == "") {
            this.co_password += constants.co_password;
          }
          else if (this.user.co_password != this.user.password) {
            this.co_password += constants.matchcopassword;
          }
         if (!this.user.question) {
          this.question =constants.question;
         } 
         if (!this.user.answer) {
          this.answer =constants.answer;
         } 
         if (this.password == "" &&
            this.co_password == "" &&
            this.question == "" &&
            this.answer == "" ) 
        {
          this.userdata=JSON.parse(localStorage.getItem('user'));
          // console.log(this.userdata);
          this.addressdata=JSON.parse(localStorage.getItem('address'));
          //  console.log(this.addressdata);
          this.cus_gender=this.userdata.custom_gender?this.userdata.custom_gender:'';
          if (localStorage.getItem('profile_image')!=null && localStorage.getItem('profile_image')!='undefined') {
            this.cus_profile=localStorage.getItem('profile_image')
          }
          else{
            this.cus_profile=''
          }
          // this.cus_profile=localStorage.getItem('profile_image')?localStorage.getItem('profile_image'):'';
          console.log(this.cus_profile,"this.cus_profile");
          
        //  var param = 
        // "lang=" + "0"+
        // "&username=" + this.userdata.username+
        // "&first_name=" + this.userdata.firstname+
        // "&last_name=" + this.userdata.lastname+
        // "&email=" + this.userdata.email+
        // "&mobile_no=" + this.userdata.phone+
        // "&password=" + this.user.password+
        // "&gender=" + this.userdata.gender+
        // "&address=" + this.addressdata.address+
        // "&city=" + this.addressdata.city+
        // "&state=" + this.addressdata.state+
        // "&zipcode=" + this.addressdata.zipcode+
        // "&profile_image=" + this.cus_profile+
        // "&timezone=" + constants.timezone+
        // "&device_token=" + " "+
        // "&register_id=" + " "+
        // "&device_type=" + constants.device_type+
        // "&security_questions=" + this.user.question+
        // "&security_answers=" + this.user.answer+
        // "&is_login=" + "0"+
        // // "&promo_code=" + "0"+
        // "&custom_gender=" + this.cus_gender

        const formData = new FormData()

      formData.append('lang',localStorage.getItem("lang"))
      formData.append("lang",'0')
      formData.append("username", this.userdata.username)
      formData.append("first_name", this.userdata.firstname)
      formData.append("last_name", this.userdata.lastname)
      formData.append("email", this.userdata.email)
      formData.append("mobile_no", this.userdata.phone)
      formData.append("password", this.user.password)
      formData.append("gender", this.userdata.gender)
      formData.append("address", this.addressdata.address)
      formData.append("city", this.addressdata.city)
      formData.append("state", this.addressdata.state)
      formData.append("zipcode", this.addressdata.zipcode)
      formData.append("profile_image", this.cus_profile)
      formData.append("timezone", constants.timezone)
      formData.append("device_token", " ")
      formData.append("register_id", " ")
      formData.append("device_type", constants.device_type)
      formData.append("security_questions", this.user.question)
      formData.append("security_answers", this.user.answer)
      formData.append("is_login", "0")
      formData.append("custom_gender", this.cus_gende)

        let res = await apiServices.makeAPICall(apiServices.postMethod,apiServices.URL + apiServices.user_registerAPI,formData,() => {});
        if(res.data.flag==1){
          this.Servicedata = res.data.data;
          localStorage.removeItem("address")
          localStorage.removeItem("user")
          this.$router.push("/login");
           this.ToastAlert('success',res.data.msg)
           localStorage.clear();
          }
          else
          {
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
          // didOpen: (toast) => {
          //   toast.addEventListener('mouseenter', this.$swal.stopTimer)
          //   toast.addEventListener('mouseleave', this.$swal.resumeTimer)
          // }
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
.deafult-height{
  top: 15px !important;
  font-size: 13px !important;
}
</style>