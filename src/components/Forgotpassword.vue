<template>
<div>
<Header />
 <div class="container py-5 header-top bg-image">
        <div class="row mt-5 pb-5">
          <div class="col-md-7">
            <Leftside />
          </div>
          <div class="col-md-5">
            <div class="box-shadow login-b-radius">
              <div class="container">
              <div class="text-green mt-4 mb-5">
               <router-link class="text-green" to="/login">
              <img class="width-back-icon" src="../assets/img/ic_green_back.png" alt="">
              <span class="px-3">
              Back
              </span>
               </router-link>
              </div>
                <div class="text-center">
                  <h2 class="font-weight-bold">Forgot Password</h2>
                  <div class="mx-auto border-line mb-2"></div>
                  <div class="mb-3">
                   <p class="mb-0">Enter your registered email</p>
                  <p class="mb-0">Address to retrieve password.</p>
                  </div>
                 
                </div>
                <div class="user-input-wrp">
                  <br />
                  <input type="text" v-model="user.email" class="inputText bor-ra w-100 p-2 pl-5" required />
                  <img src="./../assets/img/ic_email_sign_up_select.png" class="iocn-set" width="47px" />
                  <span class="floating-label bg-white-color px-2 ml-4">Email Address</span>
                </div>
                <p class="red-color-font-s mb-0" v-if="email != ''">{{ email }}</p>
                <div v-on:click="forgotPassword()" class="p-3 bg-success font-weight-bold text-center rounded btn-green text-white my-5">
                  RESET
                </div>
                <div class="text-center">
                  <div class="my-2 text-green">
                   <router-link class="text-green font-weight-bold" to="/signup">
                  LOGIN
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
import apiServices from "../components/Service/apiservice";
import constants from "../components/Service/constants.js";

export default {
  name: "Forgotpassword",
  data() {
    return {
      user: {},
      email: ''
    };
  },
    components: {
    Header,
    Footer,
    Leftside
  },
  methods: {
    async forgotPassword() {
      this.email = "";
      if (!this.user.email) {
        this.email = constants.email;
      }
       else {
          if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/.test(this.user.email)) {
            this.email = constants.valid;
          }
        }
        
      if (this.email == "") {
        const formData = new FormData()

        formData.append("lang",'0');
        formData.append("timezone",constants.timezone)
        formData.append("email",this.user.email)

        let res = await apiServices.makeAPICall(
          apiServices.postMethod,
          apiServices.URL + apiServices.forgot_passwordAPI,
          formData,
          () => {}
        );
        if (res.data.flag == 1) {
          this.ToastAlert("success", res.data.msg);
        } else {
          this.ToastAlert("error", res.data.msg);
        }
      }
    },
    ToastAlert(id, msg) {
      const Toast = this.$swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: false,
      });

      Toast.fire({
        icon: id,
        title: msg,
      });
    },
  }
};
</script>
<style></style>
