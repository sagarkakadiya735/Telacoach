<template>
  <div>
    <CoachHeader />
    <div class="text-center bg-img py-5 header-top">
      <h2 class="font-weight-bold pt-4">Bank Account</h2>
      <div class="mx-auto border-lines mb-4"></div>
    </div>
    <div class="container-fluid myplan-section p-5">
      <div class="container myplans content-section">
        <div class="row border-bottom p-3">
          <div class="col-md font-weight-bold my-auto">
            <router-link class="text-dark font-weight-bold" to="/requests">
            <img
              src="../../assets/img/ic_reviews_right_black_arrow.png"
              class="img img-responsive w-20"
            />
            Back
            </router-link>
          </div>
          <div class="text-center h3 text-center font-weight-bold">
            Add bank account
          </div>
          <div class="col-md font-weight-bold text-right"></div>
        </div>

        <div class="row p-5">
          <div class="row rounded" style="width: 100%">
              <h5 class="text-green">Bank Details</h5>
            <form class="form-horizontal update-bank-detail">
                <div class="row">
              <div class="col-md-12 form-element">
                <div class="form-group">
                  <input v-model="bank.bank_name"
                    type="text"
                    class="form-control form-control-lg"
                    aria-describedby="emailHelp"
                    placeholder="Bank name" required
                  />
                  <p class="red-color-font-s mt-2 mb-0" v-if="bank_name!=''">{{bank_name}}</p>
                </div>
              </div>
              </div>
              <div class="row">
              <div class="col-md-12 form-element">
                <div class="form-group">
                  <input v-model="bank.account_holder_name"
                    type="text"
                    class="form-control form-control-lg"
                    placeholder="Account holder name" required
                  />
                  <p class="red-color-font-s mt-2 mb-0" v-if="account_holder_name!=''">{{account_holder_name}}</p>
                </div>
              </div>
              </div>
              <div class="row">
              <div class="col-md-12 form-element">
                <div class="form-group">
                  <input v-model="bank.account_number"
                    type="text"
                    class="form-control form-control-lg"
                    placeholder="Account number" required
                  />
                  <p class="red-color-font-s mt-2 mb-0" v-if="account_number!=''">{{account_number}}</p>
                </div>
              </div>
              </div>
              <div class="row">
              <div class="col-md-12 form-element">
                <div class="form-group">
                  <input v-model="bank.routing_number"
                    type="text"
                    class="form-control form-control-lg"
                    placeholder="Routing number" required
                  />
                  <p class="red-color-font-s mt-2 mb-0" v-if="routing_number!=''">{{routing_number}}</p>
                </div>
              </div>
              </div>     
            </form>
          </div>
        </div>

        <div class="row card-buttons p-1">
          <div class="w-100">            
            <button @click.prevent="submit()" class="btn btn-lg btn-block btn-filter text-white add-card-button" type="button">
            <strong>ADD</strong>
            </button>
          </div>
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
  name: "AddBankAccount",
  data() {
    return {
      coach: {},
      bank: {},
      bank_name: '',
      account_holder_name: '',
      account_number: '',
      routing_number: '',
    };
  },
  mounted() {
    this.coach = JSON.parse(localStorage.getItem("Login_data"));
  },
  components: {
    CoachHeader,
    Footer,
  },
  methods: {
    async submit() {
      this.bank_name = "";
      this.account_holder_name = "";
      this.account_number = "";
      this.routing_number = "";
      
      if(!this.bank.bank_name) {
        this.bank_name = constants.bank_name;
      }
      if(!this.bank.account_holder_name) {
        this.account_holder_name = constants.account_holder_name;
      }
      if(!this.bank.account_number) {
        this.account_number = constants.account_number;
      }
      if(!this.bank.routing_number) {
        this.routing_number = constants.routing_number;
      }

      if(this.bank_name == '' && this.account_holder_name == '' && this.account_number == '' && this.routing_number == '') {
        var param = 
        "lang=" + "0"+
        "&coach_id=" + this.coach.coach_id+
        "&access_token=" + this.coach.access_token+
        "&bank_name=" + this.bank.bank_name+
        "&account_holder_name=" + this.bank.account_holder_name+
        "&account_number=" + this.bank.account_number+
        "&routing_number=" + this.bank.routing_number+
        "&flag_view=" + "0";
        let res = await apiServices.makeAPICall(apiServices.postMethod,apiServices.URL + apiServices.save_bank_accountAPI,param,() => {});
        if(res.data.flag == 1) {
          this.ToastAlert('success',res.data.msg);
          var param1 = "lang=" + this.coach.lang+
          "&timezone=" + this.coach.timezone+
          "&coach_id=" + this.coach.coach_id+
          "&access_token=" + this.coach.access_token+
          "&offset=" + "0";
          let res1 = await apiServices.makeAPICall(apiServices.postMethod,apiServices.URL + apiServices.request_listAPI,param1,() => {});
          localStorage.setItem("request_data",JSON.stringify(res1.data.data));
          if(JSON.parse(localStorage.getItem("is_redirect")) == '1') {
            this.$router.push("/mypaymentcoach");
            localStorage.removeItem("is_redirect");
          }
          else {
            this.$router.push("/requestdetails/" + JSON.parse(localStorage.getItem("book_id")));
          }
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
h1.exp-date.text-white {
  margin-top: 37px;
}
button.btn.btn-lg.btn-block.btn-filter.text-white.add-card-button {
  border-right: 0px solid #ffffff;
}
.form-control-lg {
    height: calc(1.5em + 1rem + 2px);
    padding: .5rem 1rem;
    font-size: 1.25rem;
    line-height: 1.5;
    border-radius: .3rem;
    background-color: #F4F6FB;
}
.update-bank-detail {
    width: 100%;
    padding: 15px;
    border-radius: 10px;
}
@import "../../assets/css/custom.css";
</style>