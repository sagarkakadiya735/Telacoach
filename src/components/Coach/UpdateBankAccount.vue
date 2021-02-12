<template>
  <div>
    <Header />
    <div class="text-center bg-img py-5 header-top">
      <h2 class="font-weight-bold pt-4">My Profile</h2>
      <div class="mx-auto border-lines mb-4"></div>
    </div>
    <div class="container-fluid myplan-section p-5">
      <div class="container myplans content-section">
        <div class="row border-bottom p-3">
          <router-link class="text-dark" to="/bankaccount">
          <div class="col-md font-weight-bold my-auto">
            <img
              src="../../assets/img/ic_reviews_right_black_arrow.png"
              class="img img-responsive w-20"
            />
            Back
          </div>
          </router-link>
          <div class="text-center h5 text-center font-weight-bold" style="padding-left: 19%;">Update bank account</div>
        </div>

        <div class="row p-5">
          <div class="row rounded" style="width: 100%">
              <h5 class="text-green">Bank Details</h5>
            <form class="form-horizontal update-bank-detail">
                <div class="row">
              <div class="col-md-12 form-element">
                <div class="form-group">
                  <input v-model="Editdata.bank_name"
                    type="text"
                    class="form-control form-control-lg" />
                    <p class="red-color-font-s mt-2 mb-0" v-if="bank_name!=''">{{bank_name}}</p>
                </div>
              </div>
              </div>
              <div class="row">
              <div class="col-md-12 form-element">
                <div class="form-group">
                  <input v-model="Editdata.account_holder"
                    type="text"
                    class="form-control form-control-lg" />
                    <p class="red-color-font-s mt-2 mb-0" v-if="account_holder!=''">{{account_holder}}</p>
                </div>
              </div>
              </div>
              <div class="row">
              <div class="col-md-12 form-element">
                <div class="form-group">
                  <input v-model="Editdata.account_number"
                    type="text"
                    class="form-control form-control-lg" />
                    <p class="red-color-font-s mt-2 mb-0" v-if="account_number!=''">{{account_number}}</p>
                </div>
              </div>
              </div>
              <div class="row">
              <div class="col-md-12 form-element">
                <div class="form-group">
                  <input v-model="Editdata.bank_code"
                    type="text"
                    class="form-control form-control-lg" />
                    <p class="red-color-font-s mt-2 mb-0" v-if="bank_code!=''">{{bank_code}}</p>
                </div>
              </div>
              </div>     
            </form>
          </div>
        </div>

        <div class="row card-buttons p-2">
          <div class="w-100">
            <button @click.prevent="submit()" class="btn btn-lg btn-block btn-filter text-white add-card-button" type="button">
              <strong>UPDATE</strong>
            </button>
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
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios);
import apiServices from "../../components/Service/apiservice";
import constants from "../../components/Service/constants.js";

export default {
  name: "UpdateBankAccount",
  data() {
    return {
      Editdata: {},
      coach: {},
      bank_name: '',
      account_holder: '',
      account_number: '',
      bank_code: '',
    };
  },
  mounted() {
    this.coach = JSON.parse(localStorage.getItem("Login_data"));
    this.Editdata = JSON.parse(localStorage.getItem("bank_data"));
    this.Editdata = this.Editdata[0];
  },
  components: {
    Header,
    Footer,
  },
  methods: {
    async submit() {
      this.bank_name = "";
      this.account_holder = "";
      this.account_number = "";
      this.bank_code = "";

      if(!this.Editdata.bank_name) {
        this.bank_name = constants.bank_name;
      }
      if(!this.Editdata.account_holder) {
        this.account_holder = constants.account_holder_name;
      }
      if(!this.Editdata.account_number) {
        this.account_number = constants.account_number;
      }
      if(!this.Editdata.bank_code) {
        this.bank_code = constants.routing_number;
      }

      if(this.bank_name != 'Please enter bank name' && this.account_holder != 'Please enter account holder name' && this.account_number != 'Please enter account number' && this.routing_number != 'Please enter routing number') {
        var param = 
        "lang=" + "0"+
        "&coach_id=" + this.coach.coach_id+
        "&access_token=" + this.coach.access_token+
        "&bank_id=" + this.Editdata.bank_id+
        "&bank_name=" + this.Editdata.bank_name+
        "&account_holder_name=" + this.Editdata.account_holder+
        "&account_number=" + this.Editdata.account_number+
        "&routing_number=" + this.Editdata.bank_code+
        "&flag_view=" + "1";
        let res = await apiServices.makeAPICall(apiServices.postMethod,apiServices.URL + apiServices.save_bank_accountAPI,param,() => {});
        if(res.data.flag == 1) {
          this.ToastAlert('success',res.data.msg);
          this.$router.push("/bankaccount");
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