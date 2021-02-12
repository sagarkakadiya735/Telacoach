
<template>
  <div>
    <Header />
    <div class="text-center bg-img py-5 header-top">
      <h2 class="font-weight-bold pt-4">Requests</h2>
      <div class="mx-auto border-lines mb-4"></div>
    </div>
    <div class="requests-bg-light-grew pt-3 pb-5">
        <div class="container pb-5">
            <div class="container box-shadow border-rounde mt-5 p-0 bg-white" style="width: 750px">
                <div class="">
                    <div class="px-4 pt-4 font-weight-bold">
                      <router-link class="text-dark" to="/requests">
                        <div class="float-left">
                            <img src="../../assets/img/ic_back_arrow.png" width="25" class="mr-3"/>Back
                        </div>
                      </router-link>
                    </div>
                    <div class="text-center h5 text-center font-weight-bold border-bottom pr-100 pb-2">Request Details</div>
                    <div class="px-4">
                        <div class="card-body p-0">
                            <div class="pt-3 pb-3">
                            <img v-if="profile_pic != ''" :src="profile_pic" class="float-left rounded-circle-request-detail" />
                            <img v-if="profile_pic == ''" src="../../assets/img/avatar6.png" class="float-left rounded-circle-request-detail" />
                            <div class="message request-details-msg pt-2">
                                <h6 class="card-title"><b> {{ username }} </b></h6>
                                <p class="card-text text-green"><b> {{ location }} </b></p>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div class="px-4">
                        <h6 class="text-green my-3 font-weight-bold">Location</h6>
                        <input type="text" class="form-control text-muted text-location py-2 pt-4 pb-4 bg-blue-light" :value="location">
                    </div>
                    <div class="px-4">
                        <h6 class="text-green my-3 font-weight-bold">Date</h6>
                        <input type="text" class="form-control text-muted text-date py-2 pt-4 pb-4 bg-blue-light" :value="book_date | formatDate">
                    </div>
                    <div class="px-4">
                        <h6 class="text-green my-3 font-weight-bold">Start Time</h6>
                        <input type="text" class="form-control text-muted text-time py-2 pt-4 pb-4 bg-blue-light" :value="start_time">
                    </div>
                    <div class="px-4">
                        <h6 class="text-green my-3 font-weight-bold">End Time</h6>
                        <input type="text" class="form-control text-muted text-time py-2 pt-4 pb-4 bg-blue-light" :value="end_time">
                    </div>
                    <div class="px-4">
                        <h6 class="text-green my-3 font-weight-bold">Consultations Period</h6>
                        <input type="text" class="form-control text-muted text-period py-2 pt-4 pb-4 bg-blue-light" :value="consultation_period">
                    </div>
                </div>
                <button v-on:click="acceptRejectRequest(book_id, user_id, '1')" class="mx-auto w-50 border-0 p-3 mt-3 bg-success text-center btn-green text-white border-bottom-left-radius" v-if="is_account=='1' && is_bank=='1'">ACCEPT</button>
                <router-link class="text-dark" to="/addcoachbankaccount">
                  <button class="mx-auto w-50 border-0 p-3 mt-3 bg-success text-center btn-green text-white border-bottom-left-radius" v-if="is_account=='0' && is_bank=='0'">ACCEPT</button>
                </router-link>
                <router-link class="text-dark" to="/addbankaccount">
                  <button class="mx-auto w-50 border-0 p-3 mt-3 bg-success text-center btn-green text-white border-bottom-left-radius" v-if="is_account=='1' && is_bank=='0'">ACCEPT</button>
                </router-link>
                <button class="mx-auto w-50 border-0 p-3 mt-3 bg-red text-center btn-danger text-white border-bottom-right-radius" v-on:click="acceptRejectRequest(book_id, user_id, '2')">CANCEL</button>
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
  name: "Requestdetails",
  data() {
    return {
      coach: {},
      request_data1: [],
      profile_pic: '',
      username: '',
      location: '',
      book_date: '',
      start_time: '',
      end_time: '',
      consultation_period: '',
      is_account: '',
      is_bank: ''
    };
  },
  mounted() {
    this.coach = JSON.parse(localStorage.getItem("Login_data"));
    this.requestDetail();
  },
  components: {
    Header,
    Footer,
  },
  methods: {
    async requestDetail() {
      localStorage.setItem('book_id',JSON.stringify(this.$route.params.id));
      this.request_data1 = JSON.parse(localStorage.getItem("request_data"));
      this.request_data1.forEach(element => {
        if(element.book_id==this.$route.params.id){
          this.book_id = element.book_id;
          this.user_id = element.user_id;
          this.username = element.user_name;
          this.profile_pic = element.profile_image;
          this.location = element.location;
          this.book_date = element.book_date;
          this.start_time = element.time_compare;
          this.end_time = element.end_time;
          this.consultation_period = element.session_time;
          this.is_account = element.is_account;
          this.is_bank = element.is_bank;
        }
      });
    },
    async acceptRejectRequest(b_id, u_id, is_request) {
      if(is_request == '1') {
        this.$router.push("/selectcalendar");
      }
      else {
        var param = "lang=" + "0"+
        "&user_id=" + u_id+
        "&coach_id=" + this.coach.coach_id+
        "&access_token=" + this.coach.access_token+
        "&book_id=" + b_id+
        "&is_request=" + is_request;
        console.log(param);
        let res = await apiServices.makeAPICall(apiServices.postMethod,apiServices.URL + apiServices.accept_reject_requestAPI,param,() => {});
        if(res.data.flag == 1){
          this.ToastAlert('success',res.data.msg)
          this.$router.push("/requests");
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
  @import "../../assets/css/custom1.css";
</style>