
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
              <form enctype="multipart/form-data">
              <div class="text-green mt-4 mb-5">
                <router-link class="text-green" to="/SignupCoach">
                  <img
                    class="width-back-icon"
                    src="../../assets/img/ic_green_back.png"
                    alt=""
                  />
                  <span class="px-3"> Back </span>
                </router-link>
              </div>
              <div class="text-left">
                <h3 class="text-green font-weight-bold">Select Billing Plan</h3>
              </div>

              <div class="bro-green user-input-wrp my-4" v-for="(item, index) in plan_lists" :key="index" >
                <span
                  class="floating-label font-weight-bold text-green px-2 ml-4 bg-white-color set-top"
                  >{{item.plan_name}}</span
                >
                <label for="id2" class="radio-inline mr-2 py-3 pl-2 m-0">
                  {{item.description}}
                </label>
                <input type="radio" 
                      v-bind:id="item.plan_id"
                      name="plan_id"
                      v-bind:value="item.plan_id"
                      v-model="user.plan_id"
                      class="mx-auto plan-list-radios"
                      v-on:click="setPlans(item.plan_id)"
                      />
              </div>  
              <p class="red-color-font-s mb-0" v-if="plan != ''">
                    {{ plan }}
                  </p>
           
           

              <router-link class="text-white font-weight-bold" to="/addressCoach">
                <div @click.prevent="Billingplan()"
                  class="p-3 bg-success text-center rounded btn-green text-white mt-5"
                >
                  NEXT
                </div>
              </router-link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>  
<script>
import Header from "../Header.vue";
import Footer from "../Footer.vue";
import Leftsidetwo from "../Leftsidetwo.vue";
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);
import constants from "../../components/Service/constants.js";
import apiServices from "../../components/Service/apiservice";

export default {
  name: "Billingplan",
  data() {
    return {
      user: {},
      plan: "",
      plan_lists : {},
      plan_id:0,
    };
  },
  components: {
    Header,
    Footer,
    Leftsidetwo,
  },
  mounted() {
    this.getPlans();
    if(localStorage.getItem("billing_plans")!=null){
      this.user=JSON.parse(localStorage.getItem('billing_plans'));
    }
    else{
      this.user= {}
    }
  },
  methods: {
    async Billingplan() {
      this.plan = "";
      if (!this.user.plan_id) {
        this.plan = constants.plan;
      }      
      if (this.plan == "") {
        localStorage.setItem("billing_plans", JSON.stringify(this.user));
        this.$router.push("/addressCoach");
      }
    },
    async getPlans(){
      var param = "lang=" + "0";
      let res = await apiServices.makeAPICall(apiServices.postMethod,apiServices.URL + apiServices.plan_listAPI,param,() => {});
      this.plan_lists = res.data.data;
    },
    async setPlans(id){
      this.plan_id = id;
      console.log(this.plan_id);
    }
  },
};
</script>
<style>
.set-top {
  top: -10px !important;
  font-size: 13px !important;
}
.bro-green {
  border-radius: 10px;
  border: 2px solid #369f04 !important;
}
input[type="radio"]:after {
  width: 15px;
  height: 15px;
  border-radius: 15px;
  top: -2px;
  left: -1px;
  position: relative;
  background-color: #ffffff;
  content: "";
  display: inline-block;
  visibility: visible;
  border: 1px solid green;
}
input[type="radio"]:checked:after {
  width: 15px;
  height: 15px;
  border-radius: 15px;
  top: -2px;
  left: -1px;
  position: relative;
  background-color: #369f04;
  content: "";
  display: inline-block;
  visibility: visible;
  border: 1px solid #369f04;
}
input.mx-auto.plan-list-radios {
    cursor: pointer;
}
.box-shadow.login-b-radius {
    padding: 20px;
}
</style>