
<template>
  <div>
    <Header />
       <div class="text-center bg-img-header py-5 header-top">
      <h2 class="font-weight-bold pt-4">Setting</h2>
      <div class="mx-auto border-lines mb-4"></div>
    </div>
     <div class="requests-bg-light-grew pt-3 pb-5">
        <div class="container pb-5">
            <div class="container box-shadow border-rounde mt-5 p-0 bg-white" style="width: 750px">
                <div class="">
                    <div class="px-4 pt-4 font-weight-bold">
                       <router-link class="text-dark" to="/myprofilesetting">
                        <div class="float-left">
                            <img src="../../assets/img/ic_back_arrow.png" width="25" class="mr-3"/>Back
                        </div>
                       </router-link>
                    </div>
                    <div class="text-center h5 text-center font-weight-bold border-bottom pr-100 mb-0 pb-4">Change Password</div>
                    <div class="px-4">
                      <div class=" text-green mt-4">Old Password</div>
                      <input type="password" class="rounded boder-1 w-100 bg-blue-light p-3" placeholder="Enter here..." v-model="change_password.old_password">
                      <p class="red-color-font-s mb-0" v-if="old_password!=''">{{old_password}}</p>

                      <div class=" text-green mt-4">New Password</div>
                      <input type="password" class="rounded boder-1 w-100 bg-blue-light p-3" placeholder="Enter here..." v-model="change_password.new_password">
                      <p class="red-color-font-s mb-0" v-if="new_password!=''">{{new_password}}</p>

                      <div class=" text-green mt-4">Confirm Password</div>
                      <input type="password" class="rounded boder-1 w-100 bg-blue-light p-3" placeholder="Enter here..." v-model="change_password.confirm_password">
                      <p class="red-color-font-s mb-0" v-if="confirm_password!=''">{{confirm_password}}</p>

                      <h2 class="font-weight-bold text-green mt-4">Answer Security Question</h2>
                      <h5 class="font-weight-bold text-body mt-4">{{coach.security_questions}}</h5>
                      <input type="text" class="rounded boder-1 w-100 bg-blue-light p-3" placeholder="Answer here.." v-model="change_password.security_answers">
                      <p class="red-color-font-s mb-0" v-if="security_answers!=''">{{security_answers}}</p>
                    
                  </div>
                </div>
               <button @click.prevent="submit()" class="mx-auto w-100 border-0 p-3 mt-3 bg-success text-center btn-green text-white border-r-bx text-uppercase">Submit</button>
            </div>
        </div>
    </div>
    <Footer />
  </div>
</template>
  
<script>
import Header from "../Header.vue";
import Footer from "../Footer.vue";
import apiServices from "../../components/Service/apiservice";
import constants from "../../components/Service/constants.js";

export default {
  name: "Changepassword",
  data() {
    return {
      change_password: {},
      coach: {},
      old_password: '',
      new_password: '',
      confirm_password: '',
      security_answers: ''
    };
  },
  mounted() {
    this.coach = JSON.parse(localStorage.getItem("Login_data"));
  },
  components: {
    Header,
    Footer,
  },
  methods: {
    async submit() {
      this.old_password = "";
      this.new_password = "";
      this.confirm_password = "";
      this.security_answers = "";
      
      if(!this.change_password.old_password) {
        this.old_password = constants.old_password;
      }
      if(!this.change_password.new_password) {
        this.new_password = constants.new_password;
      }
      if (!this.change_password.confirm_password || this.change_password.confirm_password.trim() == "") {
        this.confirm_password += constants.confirm_password;
      }
      else if (this.change_password.confirm_password != this.change_password.new_password) {
        this.confirm_password += constants.matchcopassword;
      }
      if(!this.change_password.security_answers) {
        this.security_answers = constants.security_answers;
      }
      if(this.old_password == '' && this.new_password == '' && this.confirm_password == '' && this.security_answers == '') {
        var param = 
        "lang=" + "0"+
        "&coach_id=" + this.coach.coach_id+
        "&access_token=" + this.coach.access_token+
        "&current_password=" + this.change_password.old_password+
        "&new_password=" + this.change_password.new_password+
        "&security_answers=" + this.change_password.security_answers+
        "&timezone=" + this.coach.timezone;
        let res = await apiServices.makeAPICall(apiServices.postMethod,apiServices.URL + apiServices.coach_change_passwordAPI,param,() => {});
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

</style>