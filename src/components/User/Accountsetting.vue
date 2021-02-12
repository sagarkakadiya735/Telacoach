<template>
  <div>
    <Header />
    <div class="text-center bg-img py-5 header-top">
      <h2 class="font-weight-bold pt-4">Setting</h2>
      <div class="mx-auto border-lines mb-4"></div>
    </div>
    <div class="container-fluid myplan-section p-5">
      <div class="container myplans content-section pb-4">
        
        <div class="row border-bottom p-3">
           <router-link class="text-dark font-weight-bold" to="/Profilesetting">
          <div class="col-md font-weight-bold my-auto">
            <img
              src="../../assets/img/ic_reviews_right_black_arrow.png"
              class="img img-responsive w-20"
            />
            Back
          </div>
           </router-link>
          <div class="text-center h3 text-center font-weight-bold">
            <div class="text-center pl-5 ml-5">
Account Setting
            </div>
            
          </div>
          <div class="col-md font-weight-bold text-right"></div>
        </div>
         <router-link class="text-dark font-weight-bold" to="/Personaldetails">
        <div class="row px-3 mx-5 my-3 call-types mb-4 profile-setting py-4">
          <div class="col-md-11 font-weight-bold text-green">Personal details</div>
          <div class="col-md-1">
            <img width="10px"
              src="../../assets/img/ic_left_arrow_green.png"
              class="img img-responsive"
            />
          </div>
        </div>
         </router-link>
        <router-link class="text-dark font-weight-bold" to="/booksessions" >
        <div class="row px-3 mx-5 my-3 call-types mb-4 profile-setting py-4" v-on:click="contactpreference()">
          <div class="col-md-11 font-weight-bold text-green">Contact Preference</div>
          <div class="col-md-1">
            <img width="10px"
              src="../../assets/img/ic_left_arrow_green.png"
              class="img img-responsive"
            />
          </div>
        </div>
        </router-link>
        
<router-link class="text-dark font-weight-bold" to="/Changepassword">
        <div class="row px-3 mx-5 my-3 call-types mb-4 profile-setting py-4">
          <div class="col-md-11 font-weight-bold text-green">Change Password</div>
          <div class="col-md-1">
            <img width="10px"
              src="../../assets/img/ic_left_arrow_green.png"
              class="img img-responsive"
            />
          </div>
        </div>
</router-link>

<router-link class="text-dark font-weight-bold" to="/Billing">
        <div class="row px-3 mx-5 my-3 call-types mb-4 profile-setting py-4">
          <div class="col-md-11 font-weight-bold text-green">Billing & Payment Information</div>
          <div class="col-md-1">
            <img width="10px"
              src="../../assets/img/ic_left_arrow_green.png"
              class="img img-responsive"
            />
          </div>
        </div>
</router-link>
<router-link class="text-dark font-weight-bold" to="/invoice">
        <div class="row px-3 mx-5 my-3 call-types mb-4 profile-setting py-4">
          <div class="col-md-11 font-weight-bold text-green">Invoices</div>
          <div class="col-md-1">
            <img width="10px"
              src="../../assets/img/ic_left_arrow_green.png"
              class="img img-responsive"
            />
          </div>
        </div>
 </router-link>
      </div>
    </div>
    <Footer />
  </div>
</template>  
<script>
import Header from "../Header.vue";
import Footer from "../Footer.vue";
export default {
  name: "MyProfileSettingUser",
  data() {
    return {};
  },
   mounted() {
     localStorage.removeItem("hidebutton")
   },
  components: {
    Header,
    Footer,
  },
  methods:{
    contactpreference(){
      localStorage.setItem("hidebutton",1)
    }
  }
};
</script>
<style>
.row.px-3.mx-5.my-3.call-types.mb-4.profile-setting {background-color: #F4F6FB;}
@import "../../assets/css/custom.css";
</style>