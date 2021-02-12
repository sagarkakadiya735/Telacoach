
<template>
  <div>
    <Header />
    <div class="text-center bg-img py-5 header-top">
      <h2 class="font-weight-bold pt-4">Requests</h2>
      <div class="mx-auto border-lines mb-4"></div>
    </div>
    <div class="requests-bg-light-grew pt-5">
        <div class="container">

            <div class="row mx-5">
                <div v-for="(item, index) in requests" :key="index" class="col-md-4 mb-5">
                    <div class="box-shadow bg-white border-radius-requests">
                        <div class="text-center">
                            <template v-if="item.profile_image != ''">
                                <img v-bind:src="item.profile_image" alt="Avatar" class="avatar">
                            </template>
                            <template v-else>
                                <img src="../../assets/img/avatar6.png" alt="Avatar" class="avatar">
                            </template>
                            <div class="col-md-12 pt-2">
                                <h5><b>{{ item.user_name }}</b></h5>
                            </div>
                            <div class="col-md-12 pt-2 pb-3 text-requests">
                                <div class="on-at-title mt-1">On</div>
                                <div class="on-at-date mt-1">{{ item.book_date | formatDate }}</div>
                                
                                <div class="on-at-title mt-1">at</div>
                                <div class="on-at-date mt-1">{{ item.end_time }}</div>
                            </div>
                            <div class="col-md-12 pt-3 my-3">
                                <button v-on:click="requestDetail(item.book_id)" class="bg-green-light px-4 border-green text-green py-2 px-5">Next</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div v-if="is_flag != '1'" class="col-md-12 mb-5">
                  <div class="text-center">
                    <span style="color: red;">{{message}}</span>
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
import apiServices from "../../components/Service/apiservice";

Vue.filter('formatDate', function(value) {
    if (value) {
      return moment(String(value)).format('DD/MM/YYYY')
    }
});

export default {
  name: "Requests",
  data() {
    return {
        requests: [],
        coach: {},
        is_flag: '',
        message: '',
    };
  },
  mounted() {
    this.coach = JSON.parse(localStorage.getItem("Login_data"));
    this.RequestListAPI();
  },
  components: {
    Header,
    Footer,
  },
  methods: {
    async RequestListAPI() {
        var param = "lang=" + "0"+
        "&timezone=" + this.coach.timezone+
        "&coach_id=" + this.coach.coach_id+
        "&access_token=" + this.coach.access_token+
        "&offset=" + "0";
        let res = await apiServices.makeAPICall(apiServices.postMethod,apiServices.URL + apiServices.request_listAPI,param,() => {});
        if(res.data.flag == 1) {
          this.is_flag = res.data.flag;
          Vue.prototype.$request_list = res.data.data;
          this.requests = Vue.prototype.$request_list;
          localStorage.setItem("request_data",JSON.stringify(this.requests));
        }
        else {
          this.is_flag = res.data.flag;
          this.message = res.data.msg;
          localStorage.removeItem("request_data");
          localStorage.removeItem("book_id");
        }
    },
    requestDetail(id) {
      this.$router.push("/requestdetails/" + id);
    },
  },
};
</script>
<style>
  @import "../../assets/css/custom1.css";
</style>