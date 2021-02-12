
<template>
  <div>
    <Header />
    <div class="text-center bg-img-header py-5 header-top">
      <h2 class="font-weight-bold pt-4">My Session History</h2>
      <div class="mx-auto border-lines mb-4"></div>
    </div>
    <div class="bg-grew-dark">
      <div class="container py-5">
        <div
          class="container box-shadow rounded mt-5 p-0 bg-white border-radius"
          style="width: 750px"
        >
          <div class="">
            <div class="px-4 pt-4 font-weight-bold">
              <router-link class="text-dark" to="/mysessionhistory">
                <div class="float-left">
                  <img
                    src="../../assets/img/ic_back_arrow.png"
                    width="25"
                    class="mr-3"
                  />Back
                </div>
              </router-link>
            </div>
            <div class="text-center h3 text-center font-weight-bold border-bottom pr-100 pb-2" v-if="book_session == 'Video Call'">
              Video Connect Details
            </div>
            <div class="text-center h3 text-center font-weight-bold border-bottom pr-100 pb-2" v-if="book_session == 'Phone Call'">
              Phone Connect Details
            </div>
            <div class="text-center h3 text-center font-weight-bold border-bottom pr-100 pb-2" v-if="book_session == 'Text Chat'">
              Text Connect Details
            </div>

            <div class="row mx-3 pt-3">
                <div class="col-md-2">
                  <img v-if="profile_pic != ''"
                    :src="profile_pic"
                    class="float-left rounded-circle px-3"
                    width="120px"
                  />
                  <img v-if="profile_pic == ''"
                    src="../../assets/img/ic_sign_user_profile_splash_holder.png"
                    class="float-left rounded-circle px-3"
                    width="120px"
                  />
                </div>
                <div class="col-md-8 float-left pt-3">
                  <h5 class="card-title text-green">{{username}}</h5>
                  <p class="card-text">
                    {{location}}
                  </p>
                </div>
                <div class="col-md-2 float-right pt-2">
                  <router-link to="/messageChat">
                    <img src="../../assets/img/ic_chat_icon.png" alt="" width="70" height="70" />
                  </router-link>
                </div>
            </div>

        <div class="row">
            <div class="px-4 card my-3 border-0 w-100 m-3">
              <div class="card-body p-0">
                <div class="p-3">
                  <div class="message session-detail">
                    <div class="font-weight-bold mt-4 text-green">
                      Your Location
                    </div>
                    <div class="user-input-wrp line-h">
                      <br />
                      <input
                        type="text"
                        class="inputText border-bottom-0 w-100 p-3 pl-5 rounded boder-1 w-100 bg-blue-light"
                        placeholder="Surat" :value="location"
                      />
                      <img
                        src="../../assets/img/ic_video_connect_location.png"
                        class="iocn-set set-w pt-3"
                      />
                    </div>
                    <div class="font-weight-bold mt-4 text-green">Date</div>
                    <div class="user-input-wrp line-h">
                      <br />
                      <input
                        type="text"
                        class="inputText border-bottom-0 w-100 p-3 pl-5 rounded boder-1 w-100 bg-blue-light"
                        placeholder="02/10/2020" :value="book_date | formatDate"
                      />
                      <img
                        src="../../assets/img/ic_video_connect_calendar.png"
                        class="iocn-set set-w pt-3"
                      />
                    </div>
                    <div class="font-weight-bold mt-4 text-green">
                      Start Time
                    </div>
                    <div class="user-input-wrp line-h">
                      <br />
                      <input
                        type="text"
                        class="inputText border-bottom-0 w-100 p-3 pl-5 rounded boder-1 w-100 bg-blue-light"
                        placeholder="5:56 AM" :value="start_time"
                      />
                      <img
                        src="../../assets/img/ic_video_connect_clock.png"
                        class="iocn-set set-w pt-3"
                      />
                    </div>
                    <div class="font-weight-bold mt-4 text-green">End Time</div>
                    <div class="user-input-wrp line-h">
                      <br />
                      <input
                        type="text"
                        class="inputText border-bottom-0 w-100 p-3 pl-5 rounded boder-1 w-100 bg-blue-light"
                        placeholder="6:55 AM" :value="end_time"
                      />
                      <img
                        src="../../assets/img/ic_video_connect_clock.png"
                        class="iocn-set set-w pt-3"
                      />
                    </div>
                    <div class="font-weight-bold mt-4 text-green">
                      Consultations Type
                    </div>
                    <div class="user-input-wrp line-h">
                      <br />
                      <input
                        type="text"
                        class="inputText border-bottom-0 w-100 p-3 pl-5 rounded boder-1 w-100 bg-blue-light"
                        placeholder="1 Hour" :value="consultation_period"
                      />
                      <img
                        src="../../assets/img/ic_video_connect_appointment.png"
                        class="iocn-set set-w pt-3"
                      />
                    </div>
                    <div class="font-weight-bold mt-4 text-green">
                      Consultations Period
                    </div>
                    <div class="user-input-wrp line-h">
                      <br />
                      <input
                        type="text"
                        class="inputText border-bottom-0 w-100 p-3 rounded boder-1 w-100 bg-blue-light"
                        placeholder="Chart" :value="book_session"
                      />
                    </div>
                    <div class="font-weight-bold mt-4 text-green">Number</div>
                    <div class="user-input-wrp line-h">
                      <br />
                      <input
                        type="text"
                        class="inputText border-bottom-0 w-100 p-3 pl-5 rounded boder-1 w-100 bg-blue-light"
                        placeholder="+91 102345879" :value="provider_number"
                      />
                      <img
                        src="../../assets/img/ic_video_connect_phone.png"
                        class="iocn-set set-w pt-2"
                      />
                    </div>
                    <div class="font-weight-bold mt-4 text-green">
                      Add Comment
                    </div>
                    <textarea 
                      placeholder="Enter comment here.."
                      class="rounded boder-1 w-100 bg-blue-light p-3"
                      rows="5" :value="comment_1"
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div>
          <!-- Start -->
          <button v-if="is_complete == 0 && book_session == 'Video Call' && session_cron == '0'" class="mx-auto w-100 border-0 p-3 mt-3 bg-success text-center btn-green text-white border-r-bx" disabled>
            START VIDEO CHAT
          </button>
          <button v-if="is_complete == 0 && book_session == 'Video Call' && session_cron == '1'" class="mx-auto w-100 border-0 p-3 mt-3 bg-success text-center btn-green text-white border-r-bx">
            START VIDEO CHAT
          </button>
          <!-- End -->
          <!-- Start -->
          <button v-if="is_complete == 0 && book_session == 'Phone Call' && session_cron == '0'" class="mx-auto w-100 border-0 p-3 mt-3 bg-success text-center btn-green text-white border-r-bx" disabled>
            CALL NOW
          </button>
          <button v-if="is_complete == 0 && book_session == 'Phone Call' && session_cron == '1'" class="mx-auto w-100 border-0 p-3 mt-3 bg-success text-center btn-green text-white border-r-bx">
            CALL NOW
          </button>
          <!-- End -->
          <!-- Start -->
          <button v-if="is_complete == 0 && book_session == 'Text Chat' && session_cron == '0'" class="mx-auto w-100 border-0 p-3 mt-3 bg-success text-center btn-green text-white border-r-bx" disabled>
            START TEXT CHAT
          </button>
          <button v-if="is_complete == 0 && book_session == 'Phone Call' && session_cron == '1'" class="mx-auto w-100 border-0 p-3 mt-3 bg-success text-center btn-green text-white border-r-bx">
            CALL NOW
          </button>
          <!-- End -->
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
//import apiServices from "../../components/Service/apiservice";

Vue.filter('formatDate', function(value) {
    if (value) {
      return moment(String(value)).format('DD/MM/YYYY')
    }
});

export default {
  name: "Videodetails",
  data() {
    return {
      book_data: [],
      profile_pic: '',
      username: '',
      location: '',
      book_date: '',
      start_time: '',
      end_time: '',
      consultation_period: '',
      book_session: '',
      conversation_id: '',
      provider_number: '',
      comment_1: '',
      is_complete: '',
      session_cron: ''
    };
  },
  mounted() {
    this.sessionConnectDetail();
    this.pastSessionDetail();
  },
  components: {
    Header,
    Footer,
  },
  methods: {
    async sessionConnectDetail() {
      this.is_complete = JSON.parse(localStorage.getItem('is_complete'));
      this.book_data = JSON.parse(localStorage.getItem("upcoming_session_data"));
      this.book_data.forEach(element => {
        if(element.book_id == JSON.parse(localStorage.getItem("session_book_id"))){
          this.book_id = element.book_id;
          this.user_id = element.user_id;
          this.username = element.username;
          this.profile_pic = element.profile_image;
          this.location = element.location;
          this.book_date = element.book_date;
          this.start_time = element.book_time;
          this.end_time = element.end_time;
          this.consultation_period = element.session_time;
          this.book_session = element.book_session;
          this.conversation_id = element.conversation_id;
          this.provider_number = element.provider_number;
          this.comment_1 = element.comment_1;
          this.session_cron = element.session_cron;
        }
      });
    },
    async pastSessionDetail() {
      this.is_complete = JSON.parse(localStorage.getItem('is_complete'));
      this.book_data = JSON.parse(localStorage.getItem("past_session_data"));
      this.book_data.forEach(element => {
        if(element.book_id == JSON.parse(localStorage.getItem("session_book_id"))){
          this.book_id = element.book_id;
          this.user_id = element.user_id;
          this.username = element.username;
          this.profile_pic = element.profile_image;
          this.location = element.location;
          this.book_date = element.book_date;
          this.start_time = element.book_time;
          this.end_time = element.end_time;
          this.consultation_period = element.session_time;
          this.book_session = element.book_session;
          this.conversation_id = element.conversation_id;
          this.provider_number = element.provider_number;
          this.comment_1 = element.comment_1;
          this.session_cron = element.session_cron;
        }
      });
    } 
  },
};
</script>
<style>
button.mx-auto.w-100.border-0.p-3.mt-3.bg-success.text-center.btn-green.text-white.border-r-bx{
    border-radius: 0px 0px 10px 14px !important;
}
.nav-tabs .nav-item.show .nav-link,
.nav-tabs .nav-link.active {
  color: #369f04 !important;
  background-color: #f7f7f7;
  border-color: #f7f7f7 #ccc #369f04 #f7f7f7;
}
.bg-success[disabled] {
  cursor: not-allowed;
  opacity: .65;
}
.session-detail {
  margin-top: -25px;
}
</style>