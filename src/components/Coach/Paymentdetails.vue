
<template>
  <div>
    <Header />
    <div class="text-center bg-img py-5 header-top">
      <h2 class="font-weight-bold pt-4">My Payments</h2>
      <div class="mx-auto border-lines mb-4"></div>
    </div>
    <div class="requests-bg-light-grew pt-3 pb-5">
        <div class="container pb-5">
            <div class="container box-shadow border-rounde mt-5 p-0 bg-white" style="width: 750px">
                <div class="">
                    <div class="px-4 pt-4 font-weight-bold">
                         <router-link class="text-dark" to="/mypaymentcoach">
                        <div class="float-left">
                            <img src="../../assets/img/ic_back_arrow.png" width="25" class="mr-3"/>Back
                        </div>
                         </router-link>
                    </div>
                    <div class="text-center h5 text-center font-weight-bold border-bottom pr-100 pb-2">Payment Details</div>
                    <div class="px-4">
                        <div class="card-body p-0">
                            <div class="pt-3 pb-3">
                            <img v-if="profile_pic !=''" :src="profile_pic" class="float-left rounded-circle-request-detail" />
                            <img v-if="profile_pic ==''" src="../../assets/img/avatar6.png" class="float-left rounded-circle-request-detail" />
                            <div class="message request-details-msg">
                                <h6 class="card-title"><b> {{username}} </b></h6>
                                <p class="card-text text-green"><b> {{location}} </b></p>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div class="px-4">
                        <h6 class="text-green my-3 font-weight-bold">Location</h6>
                        <input type="text" class="form-control text-location py-2 pt-4 pb-4 bg-blue-light" :value="location" disabled>
                    </div>
                    <div class="px-4">
                        <h6 class="text-green my-3 font-weight-bold">Date</h6>
                        <input type="text" class="form-control text-date py-2 pt-4 pb-4 bg-blue-light" :value="payment_date | formatDate" disabled>
                    </div>
                    <div class="px-4">
                        <h6 class="text-green my-3 font-weight-bold">Start Time</h6>
                        <input type="text" class="form-control text-time py-2 pt-4 pb-4 bg-blue-light" :value="payment_time" disabled>
                    </div>
                    <div class="px-4">
                        <h6 class="text-green my-3 font-weight-bold">End Time</h6>
                        <input type="text" class="form-control text-time py-2 pt-4 pb-4 bg-blue-light" :value="end_time" disabled>
                    </div>
                    <div class="px-4">
                        <h6 class="text-green my-3 font-weight-bold">Consultation Period</h6>
                        <input type="text" class="form-control text-period py-2 pt-4 pb-4 bg-blue-light" :value="session_time" disabled>
                    </div>
                    <div class="px-4">
                        <h6 class="text-green my-3 font-weight-bold">Fees received</h6>
                        <input type="text" class="form-control py-2 pt-4 pb-4 bg-blue-light" :value="price" disabled>
                    </div>
                    <div class="px-4 pb-4">
                        <h6 class="text-green my-3 font-weight-bold">Add Comment</h6>
                        <textarea name="Comment" id="" placeholder="Enter comment here.." class="rounded boder-1 w-100 bg-blue-light p-3" rows="5" :value="comment_1" disabled></textarea>
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
import moment from 'moment';
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios);

Vue.filter('formatDate', function(value) {
    if (value) {
      return moment(String(value)).format('DD/MM/YYYY')
    }
});

export default {
    name: "Paymentdetails",
    data() {
        return {
            payment_data: [],
            payment_id: '',
            payment_date: '',
            payment_time: '',
            user_id: '',
            username: '',
            profile_pic: '',
            category_name: '',
            location: '',
            session: '',
            session_time: '',
            timezone: '',
            price: '',
            total_price: '',
            comment_1: '',
            end_time: '',
            expiry_date: '',
            is_complete: '',
            is_invoice: '',
        };
    },
    mounted() {
        this.paymentDetail();
    },
    components: {
        Header,
        Footer,
    },
    methods: {
        async paymentDetail() {
            this.payment_data = JSON.parse(localStorage.getItem("payment_data"));
            this.payment_data.forEach(element => {
                if(element.payment_id == JSON.parse(localStorage.getItem("session_payment_id"))){
                    this.payment_id = element.payment_id;
                    this.payment_date = element.payment_date;
                    this.payment_time = element.payment_time;
                    this.user_id = element.user_id;
                    this.username = element.user_name;
                    this.profile_pic = element.user_image;
                    this.category_name = element.category_name;
                    this.location = element.location;
                    this.session = element.session;
                    this.session_time = element.session_time;
                    this.timezone = element.timezone;
                    this.price = element.price;
                    this.total_price = element.total_price;
                    this.comment_1 = element.comment_1;
                    this.end_time = element.end_time;
                    this.expiry_date = element.expiry_date;
                    this.is_complete = element.is_complete;
                    this.is_invoice = element.is_invoice;
                }
            });
        }
    },
};
</script>
<style>
  @import "../../assets/css/custom1.css";
</style>