<template>
  <div>
    <Header />
    <div class="text-center bg-img py-5 header-top">
      <h2 class="font-weight-bold pt-4">Create Event</h2>
      <div class="mx-auto border-lines mb-4"></div>
    </div>
    <div class="requests-bg-light-grew pt-3 pb-5">
        <div class="container pb-5">
            <div class="container box-shadow border-rounde mt-5 p-0 bg-white" style="width: 750px">
                <div class="">
                    <div class="px-4 pt-4 font-weight-bold">
                      <router-link class="text-dark" to="/selectcalendar">
                        <div class="float-left">
                            <img src="../../assets/img/ic_back_arrow.png" width="25" class="mr-3"/>Back
                        </div>
                      </router-link>
                    </div>
                    <div class="text-center h5 text-center font-weight-bold border-bottom pr-100 pb-2">Create Event</div>
                    <div class="px-4">
                        <h6 class="text-green my-3 font-weight-bold">Event Title</h6>
                        <input type="text" v-model="event.event_title" class="form-control text-muted py-2 pt-4 pb-4 bg-blue-light">
                    </div>
                    <div class="px-4">
                        <h6 class="text-green my-3 font-weight-bold">Description</h6>
                        <input type="text" v-model="event.description" class="form-control text-muted py-2 pt-4 pb-4 bg-blue-light">
                    </div>
                    <div class="px-4">
                        <h6 class="text-green my-3 font-weight-bold">User Email Address</h6>
                        <input type="text" class="form-control text-muted py-2 pt-4 pb-4 bg-blue-light" v-model="email">
                    </div>
                    <div class="px-4">
                        <h6 class="text-green my-3 font-weight-bold">Event Start Date/Time</h6>
                        <input type="text" class="form-control text-muted py-2 pt-4 pb-4 bg-blue-light" v-model="start_datetime">
                    </div>
                    <div class="px-4">
                        <h6 class="text-green my-3 font-weight-bold">Event End Date/Time</h6>
                        <input type="text" class="form-control text-muted py-2 pt-4 pb-4 bg-blue-light" v-model="end_datetime">
                    </div>
                </div>
                <button @click.prevent="submit()" class="mx-auto w-100 border-0 p-3 mt-3 bg-success text-center btn-green text-white" style="border-radius: 0px 0px 12px 12px;">Create Event</button>
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
import apiServices from "../../components/Service/apiservice";

Vue.filter('formatDate', function(value) {
    if (value) {
      return moment(String(value)).format('DD/MM/YYYY')
    }
});

export default {
  name: "createEvent",
  data() {
    return {
        coach: {},
        request: {},
        event: {},
        email: '',
        start_datetime: '',
        end_datetime: '',
        event_title: '',
        description: '',
        user_id: '',
    };
  },
  mounted() {
    this.coach = JSON.parse(localStorage.getItem("Login_data"));
    this.request = JSON.parse(localStorage.getItem("request_data"));
    this.request.forEach(element => {
        if(element.book_id == JSON.parse(localStorage.getItem("book_id"))){
          this.email = element.email;
          this.start_datetime = element.start_datetime;
          this.end_datetime = element.end_datetime;
          this.user_id = element.user_id;
        }
    });
  },
  components: {
    Header,
    Footer,
  },
  methods: {
    async submit() {
        var parameter = 
        "lang=" + "0"+
        "&timezone=" + this.coach.timezone+
        "&coach_email=" + this.coach.email+
        "&user_email=" + this.email+
        "&event_title=" + this.event.event_title+
        "&description=" + this.event.description+
        "&start_datetime=" + this.start_datetime+
        "&end_datetime=" + this.end_datetime;

        let res1 = await apiServices.makeAPICall(apiServices.postMethod,apiServices.URL + apiServices.add_event_calendarAPI,parameter,() => {});
        console.log(res1);
        if(res1.data.flag == 1) {
            var param = "lang=" + "0"+
            "&user_id=" + this.user_id+
            "&coach_id=" + this.coach.coach_id+
            "&access_token=" + this.coach.access_token+
            "&book_id=" + JSON.parse(localStorage.getItem("book_id"))+
            "&is_request=" + "1";
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
  },
};
</script>
<style>
  @import "../../assets/css/custom1.css";
</style>