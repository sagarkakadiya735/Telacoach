
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
               <router-link class="text-green" to="/signup">
              <img class="width-back-icon" src="../../assets/img/ic_green_back.png" alt="">
              <span class="px-3">
              Back
              </span>
               </router-link>
              </div>
                <div class="text-center">
                  <h1 class="text-green font-weight-bold">We need to know</h1>
                  <h1 class="text-green font-weight-bold">Where are you from</h1>

                </div>
                <div class="user-input-wrp">
                  <br />
                  <input type="text" v-model="user.address" class="inputText bor-ra w-100 p-2 pl-5" required />
                  <img src="./../../assets/img/ic_addresh_select.png" class="iocn-set set-w"/>
                  <span class="floating-label bg-white-color px-2 ml-4">Address</span>
                   <p class="red-color-font-s mb-0" v-if="address!=''">{{address}}</p>
                </div>
                <div class="user-input-wrp">
                  <br />
                  <input type="text" v-model="user.city" class="inputText bor-ra w-100 p-2 pl-5" required />
                  <img src="./../../assets/img/ic_city_select.png" class="iocn-set set-w"/>
                  <span class="floating-label bg-white-color px-2 ml-4">City</span>
                   <p class="red-color-font-s mb-0" v-if="city!=''">{{city}}</p>
                </div>
                <div class="user-input-wrp">
                  <br />
                  <input type="text" v-model="user.state" class="inputText bor-ra w-100 p-2 pl-5" required />
                  <img src="./../../assets/img/ic_state_select.png" class="iocn-set set-w"/>
                  <span class="floating-label bg-white-color px-2 ml-4">state</span>
                   <p class="red-color-font-s mb-0" v-if="state!=''">{{state}}</p>
                </div>
                <div class="user-input-wrp">
                  <br />
                  <input type="number" maxlength="6" v-model="user.zipcode" class="inputText bor-ra w-100 p-2 pl-5" />
                  <img src="./../../assets/img/ic_zip_codde_select.png" class="iocn-set set-w"/>
                  <span class="floating-label bg-white-color px-2 ml-4">Zip Code</span>
                   <p class="red-color-font-s mb-0" v-if="zipcode!=''">{{zipcode}}</p>
                </div>
                <div @click.prevent="Address()" class="p-3 bg-success text-center rounded btn-green text-white mt-5">
                   <!-- <router-link class="text-white font-weight-bold" to="/password"> -->
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
import constants from "../../components/Service/constants.js";

export default {
  name: "Address",
  data() {
    return {
      user: {},
       address:'',
       city:'',
       state:'',
       zipcode:'',
    };
  },
       mounted() {
        if(localStorage.getItem("address")!=null){
          this.user=JSON.parse(localStorage.getItem('address'));
        }
        else{
          this.user= {}
        }
      // this.CategoryAPI();
      // this.user.coach='';
  },
    components: {
    Header,
    Footer,
    Leftsidetwo
  },
    methods: {
    async Address() {  
       this.address = "";
       this.city = "";
       this.state = "";
       this.zipcode = "";
         if (!this.user.address) {
          this.address =constants.address;
         } 
         if (!this.user.city) {
          this.city =constants.city;
         } 
         if (!this.user.state) {
          this.state =constants.state;
         } 
         if (!this.user.zipcode) {
          this.zipcode =constants.zipcode;
         } 
         if (this.address == "" &&
            this.city == "" &&
            this.state == "" &&
            this.zipcode == "" ) 
        {
          localStorage.setItem("address",JSON.stringify(this.user));
          this.$router.push("/password");
        }
      }
    }
};
</script>
<style></style>