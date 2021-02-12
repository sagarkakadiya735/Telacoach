
<template>
  <div>
    <Header />
    <div class="text-center bg-img py-5 header-top">
      <h2 class="font-weight-bold pt-4">My Profile</h2>
      <div class="mx-auto border-lines mb-4"></div>
    </div>
    <div class="requests-bg-light-grew pt-3 pb-5">
        <div class="container pb-5">
            <div class="container box-shadow border-rounde mt-5 p-1 bg-white" style="width: 600px">
               <router-link class="text-dark" to="/mypaymentcoach">
                <div class="px-4 pt-3 font-weight-bold">
                    <div class="float-left">
                        <img src="../../assets/img/ic_back_arrow.png" width="25" class="mr-3"/>Back
                    </div>
                </div>
                </router-link>
                <div class="text-center h5 text-center font-weight-bold border-bottom pr-100 pb-3">Bank Account</div>
                <div v-if="is_flag == '1'">
                  <div class="p-3 m-4 bank-account text-white" v-for="(bank, index) in bank_data" :key="index">
                      <div class="pl-2 pr-2 pb-2">
                          <span> {{bank.account_holder}} </span>
                          <span class="float-right pl-2 fa-pen-trash"> <a v-on:click="deleteBankAccount(bank.bank_id)" class="text-white" style="cursor: pointer;"><img src="../../assets/img/ic_card_delete.png" width="18px"></a> </span>
                          <span class="float-right pl-2 pr-2 fa-pen-trash">
                            <router-link class="text-body font-weight-bold" to="/updatebankaccount">
                              <a class="text-white"><img src="../../assets/img/ic_card_edit.png" width="18px"></a> 
                            </router-link>
                          </span>
                          <span class="float-right pl-2 pr-2"> <a href="#" class="text-white"><img src="../../assets/img/ic_card_check_mark.png" width="18px"></a> </span>
                      </div>
                      <div class="pl-2 pr-2">
                          <span> {{bank.account_number}} </span>
                          <span class="float-right"> {{bank.bank_code}} </span>
                      </div>
                  </div>
                </div>

                <div v-if="is_flag != '1'">
                  <div class="p-3 m-4 text-align text-white">
                    <span style="color: red;">{{msg}}</span>
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
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios);
import apiServices from "../../components/Service/apiservice";

export default {
  name: "Bankaccount",
  data() {
    return {
      bank: {},
      bank_data: [],
      is_flag: '',
      msg: ''
    };
  },
  mounted() {
    this.coach = JSON.parse(localStorage.getItem("Login_data"));
    this.bankList();
  },
  components: {
    Header,
    Footer,
  },
  methods: {
    async bankList() {
      var param = "lang=" + "0"+
      "&coach_id=" + this.coach.coach_id+
      "&access_token=" + this.coach.access_token+
      "&offset=" + "0";
      let res = await apiServices.makeAPICall(apiServices.postMethod,apiServices.URL + apiServices.bank_listAPI,param,() => {});
      if(res.data.flag == 1) {
          this.is_flag = res.data.flag;
          Vue.prototype.$bank_list = res.data.data;
          this.bank_data = Vue.prototype.$bank_list;
          localStorage.setItem("bank_data",JSON.stringify(this.bank_data));
      }
      else {
          this.is_flag = res.data.flag;
          this.msg = res.data.msg;
          localStorage.setItem("is_redirect",JSON.stringify('1'));
          this.$router.push("/addbankaccount");
      }
    },

    async deleteBankAccount(id) {
      var param = "lang=" + "0"+
      "&coach_id=" + this.coach.coach_id+
      "&access_token=" + this.coach.access_token+
      "&bank_id=" + id+
      "&flag_view=" + "1";
      console.log(param);
      let res1 = await apiServices.makeAPICall(apiServices.postMethod,apiServices.URL + apiServices.delete_bankAPI,param,() => {});
      if(res1.data.flag == 1) {
        this.ToastAlert('success',res1.data.msg);
        this.$router.push("/mypaymentcoach");
      }
      else {
        this.ToastAlert('error',res1.data.msg)
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
  @import "../../assets/css/custom1.css";
</style>