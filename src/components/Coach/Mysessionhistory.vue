
<template>
  <div>
    <Header />
    <div class="text-center bg-img py-5 header-top">
      <h2 class="font-weight-bold pt-4">My Session History</h2>
      <div class="mx-auto border-lines mb-4"></div>
    </div>
    <div class="requests-bg-light-grew pt-3 pb-5">
        <div class="container pb-5">
            <div class="container box-shadow border-rounde mt-5 pb-3 p-0 bg-white" style="width: 750px">
                <!-- Nav tabs -->
                <ul class="nav nav-tabs" id="myTab" role="tablist">
                    <li class="nav-item w-50 text-center" style="border-right: 2px solid #ccc;">
                        <a class="nav-link text-muted active pt-3 pb-2" id="upcoming-tab" data-toggle="tab" href="#upcoming" role="tab" aria-controls="upcoming" aria-selected="true" style="border-top-left-radius: 12px;">UPCOMING</a>
                    </li>
                    <li class="nav-item w-50 text-center">
                        <a class="nav-link text-muted pt-3 pb-2" id="past-tab" data-toggle="tab" href="#past" role="tab" aria-controls="past" aria-selected="false" style="border-top-right-radius: 12px;">PAST</a>
                    </li>
                </ul>

                <!-- Tab panes -->
                <div class="tab-content">
                    <div class="tab-pane container active" id="upcoming">
                        <div v-if="is_upcoming_flag == '1'">
                            <div class="card my-3 m-4 bg-light-grew border-0" v-for="(upcoming, index) in upcoming_data" :key="index">
                                <div class="card-body p-0 cursor-point" v-on:click="sessionConnectDetail(upcoming.book_id)">
                                    <div class="p-3">
                                    <img v-if="upcoming.profile_image != ''" :src="upcoming.profile_image" class="float-left rounded-circle-request-detail" @error="imageUrlAlt" />
                                    <img v-if="upcoming.profile_image == ''" src="../../assets/img/avatar6.png" class="float-left rounded-circle-request-detail" />
                                    <div class="message request-details-msg">
                                        <h6 class="card-title">
                                        <b> {{ upcoming.username }} </b>
                                        <span class="float-right my-auto">
                                            <img src="../../assets/img/ic_next_arrow_black.png" class="w-10 mar-top" />
                                        </span>
                                        </h6>
                                        <div class="card-subtitle mt-1 text-muted">
                                            <span class="on-at-title"> On </span> {{ upcoming.book_date | formatDate }} {{ upcoming.book_time }}
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div v-if="is_upcoming_flag != '1'">
                            <div class="card my-3 m-4 p-2 bg-light-grew border-0">
                                <span style="color: red;">{{upcoming_msg}}</span>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane container fade" id="past">
                        <div v-if="is_past_flag == '1'">
                            <div class="card my-3 m-4 bg-light-grew border-0" v-for="(past, index) in past_data" :key="index">
                                <router-link class="text-white font-weight-bold" to="/CoachVideoConnectDetails">
                                    <div class="card-body p-0 cursor-point" v-on:click="pastSessionDetail(past.book_id)">
                                        <div class="p-3">
                                        <img v-if="past.profile_image != ''" :src="past.profile_image" class="float-left rounded-circle-request-detail" />
                                        <img v-if="past.profile_image == ''" src="../../assets/img/img_avatar.png" class="float-left rounded-circle-request-detail" />
                                        <div class="message request-details-msg">
                                            <h6 class="card-title">
                                            <b> {{ past.username }} </b>
                                            <span class="float-right my-auto">
                                                <img src="../../assets/img/ic_next_arrow_black.png" class="w-10 mar-top" />
                                            </span>
                                            </h6>
                                            <div class="card-subtitle mt-1 text-muted">
                                                <span class="on-at-title"> On </span> {{ past.book_date | formatDate }} {{ past.book_time }}
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                </router-link>
                            </div>
                        </div>
                        <div v-if="is_past_flag != '1'">
                            <div class="card my-3 m-4 p-2 bg-light-grew border-0">
                                <span style="color: red;">{{past_msg}}</span>
                            </div>
                        </div>
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
import img from '../../assets/img/ic_requests_user_profile.png';

Vue.filter('formatDate', function(value) {
    if (value) {
      return moment(String(value)).format('DD/MM/YYYY')
    }
});

export default {
    name: "Mysessionhistory",
    data() {
        return {
            upcoming_data: [],
            past_data: [],
            is_upcoming_flag: '',
            upcoming_msg: '',
            is_past_flag: '',
            past_msg: '',
            coach: {}
        };
    },
    mounted() {
        this.coach = JSON.parse(localStorage.getItem("Login_data"));
        this.upcomingSessionDataAPI();
        this.pastSessionDataAPI();
    },
    components: {
        Header,
        Footer,
    },
    methods: {
        imageUrlAlt(e) {
            e.target.src = img;
        },
        async upcomingSessionDataAPI() {
            var param = "lang=" + "0"+
            "&timezone=" + this.coach.timezone+
            "&coach_id=" + this.coach.coach_id+
            "&access_token=" + this.coach.access_token+
            "&offset=" + "0"+
            "&flag_view=" + "0";
            let res = await apiServices.makeAPICall(apiServices.postMethod,apiServices.URL + apiServices.book_session_historyAPI,param,() => {});
            if(res.data.flag == 1) {
                this.is_upcoming_flag = res.data.flag;
                Vue.prototype.$upcoming_list = res.data.data;
                this.upcoming_data = Vue.prototype.$upcoming_list;
                localStorage.setItem("upcoming_session_data",JSON.stringify(this.upcoming_data));
            }
            else {
                this.is_upcoming_flag = res.data.flag;
                this.upcoming_msg = res.data.msg;
                localStorage.removeItem("upcoming_session_data");
            }
        },

        async pastSessionDataAPI() {
            var param = "lang=" + "0"+
            "&timezone=" + this.coach.timezone+
            "&coach_id=" + this.coach.coach_id+
            "&access_token=" + this.coach.access_token+
            "&offset=" + "0"+
            "&flag_view=" + "1";
            let res1 = await apiServices.makeAPICall(apiServices.postMethod,apiServices.URL + apiServices.book_session_historyAPI,param,() => {});
            if(res1.data.flag == 1) {
                this.is_past_flag = res1.data.flag;
                Vue.prototype.$past_list = res1.data.data;
                this.past_data = Vue.prototype.$past_list;
                localStorage.setItem("past_session_data",JSON.stringify(this.past_data));
            }
            else {
                this.is_past_flag = res1.data.flag;
                this.past_msg = res1.data.msg;
                localStorage.removeItem("past_session_data");
            }
        },

        sessionConnectDetail(book_id) {
            localStorage.setItem("is_complete",JSON.stringify('0'));
            localStorage.setItem("session_book_id",JSON.stringify(book_id));
            this.$router.push("/coachvideoconnectdetails");
        },
        pastSessionDetail(book_id) {
            localStorage.setItem("is_complete",JSON.stringify('1'));
            localStorage.setItem("session_book_id",JSON.stringify(book_id));
            this.$router.push("/coachvideoconnectdetails");
        },
    }
};
</script>
<style>
  @import "../../assets/css/custom1.css";
</style>