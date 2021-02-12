
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
                <div class="text-center">
                  <h2 class="font-weight-bold">Sign Up</h2>
                  <div class="mx-auto border-line"></div>
                  <p class="my-3">Please Sign up to your account</p>
                  
                  <label for="file-input">
                    <img style="width: 100px;height: 100px;" v-if="!url" src="../../assets/img/ic_coach_list_user_profile_splash_holder.png" class="user-account-icon">
                    <img  src="../../assets/img/ic_add_camera.png" class="camara_image">
                    <img style="width: 100px;height: 100px;" v-if="url" :src="url" class="user-account-icon">
                  </label>

                  <input id="file-input" type="file" hidden v-on:change="onFileChanged" />
                </div>
                <div class="user-input-wrp">
                  <br />
                  <input type="text" v-model="user.username" class="inputText bor-ra w-100 p-2 pl-5" required />
                  <img src="../../assets/img/ic_user_select.png" class="iocn-set set-w"/>
                  <span class="floating-label bg-white-color px-2 ml-4">User Name</span>
                   <p class="red-color-font-s mb-0" v-if="username!=''">{{username}}</p>
                </div>
                <div class="user-input-wrp">
                  <br />
                  <input type="text" v-model="user.firstname" class="inputText bor-ra w-100 p-2 pl-5" required />
                  <img src="../../assets/img/ic_user_select.png" class="iocn-set set-w"/>
                  <span class="floating-label bg-white-color px-2 ml-4">First Name</span>
                  <p class="red-color-font-s mb-0" v-if="firstname!=''">{{firstname}}</p>
                </div>
                <div class="user-input-wrp">
                  <br />
                  <input type="text" v-model="user.lastname" class="inputText bor-ra w-100 p-2 pl-5" required />
                  <img src="../../assets/img/ic_user_select.png" class="iocn-set set-w"/>
                  <span class="floating-label bg-white-color px-2 ml-4">Last Name</span>
                  <p class="red-color-font-s mb-0" v-if="lastname!=''">{{lastname}}</p>
                </div>
                <div class="user-input-wrp">
                  <br />
                  <input type="text" v-model="user.email" class="inputText bor-ra w-100 p-2 pl-5" required />
                  <img src="../../assets/img/ic_email_sign_up_select.png" class="iocn-set set-w"/>
                  <span class="floating-label bg-white-color px-2 ml-4">Email Address</span>
                  <p class="red-color-font-s mb-0" v-if="email!=''">{{email}}</p>
                </div>
                <div class="user-input-wrp">
                  <br />
                  <input type="number" v-model="user.phone" class="inputText bor-ra w-100 p-2 pl-5" required />
                  <img src="../../assets/img/ic_sign_up_phone_select.png" class="iocn-set set-w"/>
                  <span class="floating-label bg-white-color px-2 ml-4">Phone number</span>
                  <p class="red-color-font-s mb-0" v-if="phone!=''">{{phone}}</p>
                </div>
                <!-- <div class="user-input-wrp">
                  <br />
                  
                   <select v-model="user.coach" class="custom-select py-2 h-55 inputText bor-ra">
                    <option selected value="" disabled>Select Coach</option>
                    <option v-for="(item, index) in category" :key="index" v-bind:value="item.category_id"> {{ item.category_name }}</option>
                  </select>
                  
                    <span class="floating-label bg-white-color px-2 ml-4 deafult-height">Coach</span>
                    <p class="red-color-font-s mb-0" v-if="coach!=''">{{coach}}</p>
                </div> -->
                
                <div class="my-3">
               Gender (Optional)
               <div class="my-2">
                 <label class=" mx-4">
                   <input type="radio" v-model="user.gender" v-on:click="genderbutton('Male')" value="Male" name="sa" id="" autocomplete="off" checked><span class="pl-2"> Male </span>
                 </label>
                 <label class=" mx-4">
                   <input type="radio" v-model="user.gender" v-on:click="genderbutton('Female')" value="Female" name="" id="" autocomplete="off"><span class="pl-2">Female</span>
                 </label>
                 <label class=" mx-4">
                   <input type="radio" v-model="user.gender" v-on:click="genderbutton('Custom')" value="Custom" name="" id="" autocomplete="off"><span class="pl-2">Custom</span>
                 </label>
                  <div class="user-input-wrp"  v-if="genderdisplay=='1'">
                  <br />
                  <input type="text" v-model="user.custom_gender" class="inputText bor-ra w-100 p-2 pl-5" required />
                  <img src="../../assets/img/ic_sign_up_phone_select.png" class="iocn-set set-w"/>
                  <span class="floating-label bg-white-color px-2 ml-4">Custom Gender</span>
                </div>
                 <p class="red-color-font-s mb-0" v-if="gender!=''">{{gender}}</p>
               </div>
                </div>
                <div>
                <input name="" id="" v-model="user.tearm" class="btn btn-primary" type="checkbox" value="">
               <span class="mx-3"> I accept <span class="text-green"> Terms & Conditions</span></span>
               <p class="red-color-font-s mb-0" v-if="tearm!=''">{{tearm}}</p>
                </div>
                <div @click.prevent="Signup()" class="p-3 cursor bg-success text-center rounded btn-green text-white mt-2 mb-5">
                   <!-- <router-link class="text-white font-weight-bold" to="/address"> -->
               NEXT
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
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios);
// import apiServices from "../../components/Service/apiservice";
import constants from "../../components/Service/constants.js";
// import $ from 'jquery';

export default {
  name: "Signup",
  data() {
    return {
      user: {},
      username:'',
      category: [],
       firstname: '',
       lastname: '',
       email: '',
       genderdisplay: '0',
       phone: '',
      //  coach: '',
       gender: '',
       tearm: '',
        url: null,
    };
  },
     mounted() {
      if(localStorage.getItem("user")!=null){
          this.user=JSON.parse(localStorage.getItem('user'));
        }
        else{
          this.user= {}
        }
  },
    components: {
    Header,
    Footer,
    Leftsidetwo
  },
  methods: {

    genderbutton(id){
    console.log(id);
    if(id=='Custom'){
    this.genderdisplay='1';
    }
    else
    {
      this.genderdisplay='0';
    }

    },
    onFileChanged(event) {
      let input = event.target;
      if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = e => {
          this.user.photo = e.target.result;
          this.selectedFile = input.files[0];
        };
        reader.readAsDataURL(input.files[0]);
      }
      // display
       const file = event.target.files[0];
      this.url = URL.createObjectURL(file);
      // display end
      this.selectedFile = event.target.files[0];
        console.log(this.selectedFile);
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
          this.username =constants.username;
       } 
        if (!this.user.firstname) {
          this.firstname =constants.firstname;
       } 
        if (!this.user.lastname) {
          this.lastname =constants.lastname;
       } 
        if (!this.user.email) {
          this.email =constants.email;
       } 
        else {
          if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/.test(this.user.email)) {
            this.email = constants.valid;
          }
        }

        if (!this.user.phone) {
          this.phone =constants.phone;
       } 
      //   if (!this.user.coach) {
      //     this.coach =constants.coach;
      //  } 
        if (!this.user.gender) {
          this.gender =constants.gender;
       } 
        if (!this.user.tearm) {
          this.tearm =constants.tearm;
       } 
        if (this.username == "" &&
            this.firstname == "" &&
            this.lastname == "" &&
            this.email == "" &&
            this.phone == "" &&
            // this.coach == "" &&
            this.gender == "" &&
            this.tearm == "") 
        {
          localStorage.setItem("user",JSON.stringify(this.user));
          // localStorage.setItem("profile_image",this.user.photo);
          localStorage.setItem("profile_image",JSON.stringify(this.user.photo));
          this.$router.push("/address");
        }
    },
  }
};
</script>
<style>
.deafult-height{
  top: 15px !important;
  font-size: 13px !important;
}
.camara_image{
      position: absolute;
    /* top: 18px; */
    left: 55%;
    top: 22%;
}
</style>