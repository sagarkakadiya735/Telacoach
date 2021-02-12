
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
                       <router-link class="text-dark font-weight-bold" to="/Accountsetting">
                        <div class="float-left">
                            <img src="../../assets/img/ic_back_arrow.png" width="25" class="mr-3"/>Back
                        </div>
                       </router-link>
                    </div>
                    <div class="text-center h5 text-center font-weight-bold border-bottom pr-100 mb-0 pb-4">Change Password</div>
               <div class="px-4">
                <div class=" text-green mt-4">Old Password</div>
                <input type="password" v-model="userdata.current_password" class="rounded boder-1 w-100 bg-blue-light p-3" placeholder="Enter here...">
                 <p class="red-color-font-s mb-0" v-if="password!=''">{{password}}</p>
                <div class=" text-green mt-4">New Password</div>
                <input type="password" v-model="userdata.new_password" class="rounded boder-1 w-100 bg-blue-light p-3" placeholder="Enter here...">
                 <p class="red-color-font-s mb-0" v-if="password!=''">{{password}}</p>
                <div class=" text-green mt-4">Confirm Password</div>
                <input type="password" v-model="userdata.co_new_password" class="rounded boder-1 w-100 bg-blue-light p-3" placeholder="Enter here...">
                 <p class="red-color-font-s mb-0" v-if="co_password!=''">{{co_password}}</p>
                <h2 class="font-weight-bold text-green mt-4">Answer Security Question</h2>
                <h5 class="font-weight-bold text-body mt-4">{{userdata.security_questions}}</h5>
                <input type="text" v-model="userdata.answers" class="rounded boder-1 w-100 bg-blue-light p-3" placeholder="Answer here..">
               <p class="red-color-font-s mb-0" v-if="answer!=''">{{answer}}</p>
            </div>
                </div>
                 <!-- <router-link class="text-dark font-weight-bold" to="/Accountsetting"> -->
               <button v-on:click="changepasswordAPI()" class="mx-auto w-100 border-0 p-3 mt-3 bg-success text-center btn-green text-white border-r-bx text-uppercase">Submit</button>
                 <!-- </router-link> -->
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
      userdata:{},
      change_pass:[],
      password:'',
      co_password:'',
      answer:'',
    };
  },
   mounted() {
     this.userdata = JSON.parse(localStorage.getItem("Login_data"));
   },
  components: {
    Header,
    Footer,
  },
  methods:{
   async changepasswordAPI(){
    this.password=''
    this.co_password=''
    this.answer=''
     if (!this.userdata.current_password) {
            this.password += constants.password;
          }
          if (!this.userdata.co_new_password || this.userdata.co_new_password.trim() == "") {
            this.co_password += constants.co_password;
          }
          else if (this.userdata.co_new_password != this.userdata.new_password) {
            this.co_password += constants.matchcopassword;
          }
         if (!this.userdata.new_password) {
          this.password =constants.password;
         } 
         if (!this.userdata.answers) {
          this.answer =constants.answer;
         } 
          if (this.password == "" &&
            this.co_password == "" &&
            this.answer == ""
          )
          {
             var param = 
              "lang=" + "0"+
              "&user_id=" + this.userdata.user_id+
              "&access_token=" + this.userdata.access_token+
              "&current_password=" + this.userdata.current_password+
              "&new_password=" + this.userdata.new_password+
              "&security_answers=" + this.userdata.security_answers+
              "&timezone=" + constants.timezone;
              let res = await apiServices.makeAPICall(apiServices.postMethod,apiServices.URL + apiServices.user_change_passwordAPI,param,() => {});
              if(res.data.flag==1){
                console.log(res.data.data,"res.data.data");
                this.change_pass=res.data.data
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

</style>