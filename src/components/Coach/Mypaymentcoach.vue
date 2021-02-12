
<template>
  <div>
    <Header />
    <div class="text-center bg-img py-5 header-top">
      <h2 class="font-weight-bold pt-4">My Payments</h2>
      <div class="mx-auto border-lines mb-4"></div>
    </div>
    <div class="requests-bg-light-grew pt-3 pb-5">
        <div class="container pb-5">
            <div class="container box-shadow border-rounde mt-5 pb-2 p-0 bg-white" style="width: 750px">
                <!-- Nav tabs -->
                <ul class="nav nav-tabs" id="myTab" role="tablist">
                    <li class="nav-item w-50 text-center" style="border-right: 2px solid #ccc;">
                        <a class="nav-link text-muted active pt-3 pb-2" id="summary-tab" data-toggle="tab" href="#summary" role="tab" aria-controls="summary" aria-selected="true" style="border-top-left-radius: 12px;">SUMMARY</a>
                    </li>
                    <li class="nav-item w-50 text-center">
                        <a class="nav-link text-muted pt-3 pb-2" id="detail-tab" data-toggle="tab" href="#detail" role="tab" aria-controls="detail" aria-selected="false" style="border-top-right-radius: 12px;">DETAIL</a>
                    </li>
                </ul>

                <!-- Tab panes -->
                <div class="tab-content">
                    <div class="tab-pane container active" id="summary">
                        <div v-if="is_flag == '1'">
                        <div class="card my-3 m-4 bg-light-grew border-0" v-for="(payment, index) in payment_data" :key="index">
                            <div class="card-body p-0">
                                <div class="p-3">
                                <div class="message">
                                    <h6 class="card-title mb-2">
                                    <b> {{payment.user_name}} </b>
                                    </h6>
                                    <div class="card-subtitle mt-1 text-muted">
                                        <span class="on-at-title"> On </span> {{payment.payment_date| formatDate}} <span class="on-at-title"> at </span> {{payment.payment_time}}
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                        </div>

                        <div v-if="is_flag != '1'">
                            <div class="card my-3 m-4 p-2 bg-light-grew border-0">
                                <span style="color: red;">{{msg}}</span>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane container fade" id="detail">
                        <div v-if="is_flag == '1'">
                            <div class="card my-3 m-4 bg-light-grew border-0" v-for="(payment, index) in payment_data" :key="index">
                                <div class="card-body p-0" v-on:click="paymentDetail(payment.payment_id)">
                                    <div class="p-3">
                                    <img v-if="payment.user_image != ''" :src="payment.user_image" class="float-left rounded-circle-request-detail" />
                                    <img v-if="payment.user_image == ''" src="../../assets/img/avatar5.png" class="float-left rounded-circle-request-detail" />
                                    <div class="message request-details-msg">
                                        <h6 class="card-title">
                                        <b> {{payment.user_name}} </b>
                                        <span class="float-right my-auto">
                                            <img src="../../assets/img/ic_next_arrow_black.png" class="w-10 pt-3" />
                                        </span>
                                        </h6>
                                        <div class="card-subtitle mt-1 text-muted">
                                            <span class="on-at-title"> On </span> {{payment.payment_date| formatDate}} <span class="on-at-title"> at </span> {{payment.payment_time}}
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div v-if="is_flag != '1'">
                            <div class="card my-3 m-4 p-2 bg-light-grew border-0">
                                <span style="color: red;">{{msg}}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <router-link class="text-dark" to="/addcoachbankaccount" v-if="is_account == '0'">
                    <button class="mx-auto w-100 border-0 p-3 mt-3 bg-success text-center btn-green text-white btn-update-bank">UPDATE BANK INFORMATION</button>
                </router-link>
                <router-link class="text-dark" to="/bankaccount" v-if="is_account == '1'">
                    <button class="mx-auto w-100 border-0 p-3 mt-3 bg-success text-center btn-green text-white btn-update-bank">UPDATE BANK INFORMATION</button>
                </router-link>
            </div>
        </div>
    </div>
    <Footer />
  </div>
</template>
  
<script>
import Header from "../Header.vue";
import Footer from "../Footer.vue";
import moment from 'moment';
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios);
import apiServices from "../../components/Service/apiservice";

Vue.filter('formatDate', function(value) {
    if (value) {
        return moment(String(value)).format('DD/MM/YYYY')
    }
});

export default {
    name: "Mypayment",
    data() {
        return {
            coach: {},
            payment_data: [],
            is_flag: '',
            msg: '',
            is_account: ''
        };
    },
    mounted() {
        this.coach = JSON.parse(localStorage.getItem("Login_data"));
        this.myPaymentList();
    },
    components: {
        Header,
        Footer,
    },
    methods: {
        async myPaymentList() {
            var param = "lang=" + "0"+
            "&timezone=" + this.coach.timezone+
            "&user_id=" + this.coach.coach_id+
            "&access_token=" + this.coach.access_token+
            "&offset=" + "0"+
            "&flag_view=" + "1";
            let res = await apiServices.makeAPICall(apiServices.postMethod,apiServices.URL + apiServices.payment_listAPI,param,() => {});
            if(res.data.flag == 1) {
                this.is_flag = res.data.flag;
                Vue.prototype.$payment_list = res.data.data;
                this.payment_data = Vue.prototype.$payment_list;
                localStorage.setItem("payment_data",JSON.stringify(this.payment_data));
                this.is_account = res.data.is_account;
            }
            else {
                this.is_flag = res.data.flag;
                this.msg = res.data.msg;
                localStorage.removeItem("payment_data");
            }
        },

        paymentDetail(payment_id) {
            localStorage.setItem("session_payment_id",JSON.stringify(payment_id));
            this.$router.push("/paymentdetails");
        },
    }
};
</script>
<style>
  @import "../../assets/css/custom1.css";
</style>