<template>
<div>
<Header />
 <div class="container py-5 header-top bg-image">
        <div class="row mt-5 pb-1">
        <div class="col-md-7">
          <Leftside />
          </div>
          <div class="col-md-5 mt-3">
            <div class="box-shadow login-b-radius">
              <div class="container">
                <div class="text-center">
                  <h2 class="font-weight-bold">log In</h2>
                  <div class="mx-auto border-line"></div>
                  <p>Please login to your account</p>
                </div>
                <div class="user-input-wrp">
                  <br />
                  <input type="text" v-model="user.username" class="inputText bor-ra w-100 p-2 pl-5" required />
                  <img src="./../assets/img/ic_user_select.png" class="iocn-set set-w"/>
                  <span class="floating-label bg-white-color px-2 ml-4">User Name</span>
                  <p class="red-color-font-s mb-0" v-if="username!=''">{{username}}</p>
                </div>
                <div class="user-input-wrp">
                  <br />
                  <input type="password" v-model="user.password" class="inputText bor-ra w-100 p-2 pl-5" required />
                  <img src="./../assets/img/ic_password_select.png" class="iocn-set set-w"/>
                  <span class="floating-label bg-white-color px-2 ml-4">Password</span>
                  <p class="red-color-font-s mb-0" v-if="password!=''">{{password}}</p>
                </div>
                <div class="text-right mt-2">
                <router-link class="text-dark font-weight-bold" to="/forgotpassword">
                Forgot Password?
                </router-link>
                </div>
                <div @click.prevent="Login()" class="p-3 bg-success text-center cursor rounded btn-green text-white my-5">
                  SIGN IN
                </div>
                <div class="text-center font-weight-bold">Don't have an account?</div>
                <div class="text-center">
                  <div class="my-2 text-green">
                   <router-link class="text-green font-weight-bold" to="/signup">
                  Sign up
                    </router-link>
                  </div>
                  <div class="mx-auto border-line"></div>
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
import Header from "./Header.vue";
import Footer from "./Footer.vue";
import Leftside from "./Leftside.vue";
import constants from "../components/Service/constants.js";
import apiServices from "../components/Service/apiservice";
// import comman from "../components/Service/comman.vue";
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios);

export default {
  name: "Login",
  data() {
    return {
       username: '',
       password: '',
        user: {},
    };
  },
   
    components: {
    Header,
    Footer,
    Leftside,
  },
   mounted() {
      this.loginorNot();
  },
    methods: {
    async Login() {  
       this.username = "";
       this.password = "";

        if (!this.user.username) {
          this.username =constants.username;
       } 
        if (!this.user.password) {
          this.password =constants.password;
       } 
        if (this.username == "" &&
            this.password == "") 
        {
          var param = 
        "lang=" + "0"+
        "&username=" + this.user.username+
        "&password=" + this.user.password+
        "&device_token=" + " "+
        "&register_id=" + " "+
        "&device_type=" + constants.device_type+
        "&timezone=" + constants.timezone;
        let res = await apiServices.makeAPICall(apiServices.postMethod,apiServices.URL + apiServices.user_loginAPI,param,() => {});
        if(res.data.flag==1){
          this.ToastAlert('success',res.data.msg)
          localStorage.setItem('Login_data',JSON.stringify(res.data.data));
          if(JSON.parse(localStorage.getItem("Login_data")).is_login==0) {
            this.$router.push("/home");
          }
          else {
            this.$router.push("/requests");
          }
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
        })

        Toast.fire({
          icon: id,
          title: msg
        })
    },
    loginorNot() {
      if (localStorage.getItem("Login_data") != null) {
        if (JSON.parse(localStorage.getItem("Login_data")).is_login == 0) {
          this.$router.push("/home").catch(() => {});
        } else {
          this.$router.push("/requests");
        }
      } else {
        this.$router.push("/login").catch(() => {});
      }
    },  
  }
};
</script>
<style></style>