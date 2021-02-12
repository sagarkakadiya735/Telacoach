<template>
  <div style="margin-top: 100px">
    <Header />
    <scheduler
      class="left-container"
      :time_step="time_step"
      :events="events"
      @event-updated="logEventUpdate"
    ></scheduler>
    <!-- <div class="right-container">
      <ul class="scheduler-messages">
        <li
          class="scheduler-message"
          v-for="message in messages"
          v-bind:key="message"
        >
          {{ message }}
        </li>
      </ul>
    </div> -->
    <Footer />
  </div>
</template> 
 
<script>
import Scheduler from "./Scheduler.vue";
import Header from "../Header.vue";
import Footer from "../Footer.vue";
import moment from 'moment';
import apiServices from "../../components/Service/apiservice";

export default {
  name: "Calendar",
  data() {
    return {
      coach: {},
      events: JSON.parse(localStorage.getItem("calendar_data")),
      messages: [],
      calendar_date: '',
      start_time: '',
      end_time: '',
      is_available: '',
      is_flag: '',
      time_step: {
        enable: true,
        interval: 60,
        slotCount: 4
      },
    };
  },
  mounted() {
    this.coach = JSON.parse(localStorage.getItem("Login_data"));
    this.calendarList();
  },
  components: {
    Scheduler,
    Header,
    Footer,
  },
  methods: {
    async calendarList() {
      var param = "lang=" + "0"+
      "&timezone=" + this.coach.timezone+
      "&coach_id=" + this.coach.coach_id+
      "&access_token=" + this.coach.access_token+
      "&start_date=" + '2021-01-25'+
      "&end_date=" + '2021-01-29';

      let res = await apiServices.makeAPICall(apiServices.postMethod,apiServices.URL + apiServices.coach_calendar_listAPI,param,() => {});
      if(res.data.flag == 1) {
        var resultData = [];
        res.data.data.forEach(element => {
          var resData = {};
          resData.id = element.coach_calendar_id;
          resData.start_date = element.calendar_date+' '+element.start_time;
          resData.end_date = element.calendar_date+' '+element.end_time;
          resData.text = 'busy';
          resultData.push(resData);
        });
        //this.events = JSON.stringify(resultData);
        localStorage.setItem("calendar_data",JSON.stringify(resultData));
      }
      console.log(this.events);
    },
    addMessage(message) {
      this.messages.unshift(message);
      if (this.messages.length > 40) {
        this.messages.pop();
      }
    },
    logEventUpdate(id, mode, ev) {
      console.log(id);
      console.log(mode);
      let text = ev && ev.text ? ` (${ev.text})` : "";
      let message = `Event ${mode}: ${id} ${text}`;

      var date = new Date(ev.start_date),
      mnth = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2);
      date = [date.getFullYear(), mnth, day].join("-");
      this.addMessage(message);
      if(mode == 'deleted') {
        this.deleteChangeAvailability(id, ev);
      }
      if(mode == 'updated') {
        this.saveChangeAvailability(ev);
      }
    },
    async saveChangeAvailability(data) {
      this.calendar_date = moment(new Date(data.start_date)).format('YYYY-MM-DD');
      this.start_time = moment(new Date(data.start_date)).format('hh:mm a');
      this.end_time = moment(new Date(data.end_date)).format('hh:mm a');

      var param = "lang=" + "0"+
      "&timezone=" + this.coach.timezone+
      "&coach_id=" + this.coach.coach_id+
      "&access_token=" + this.coach.access_token+
      "&start_time=" + this.start_time +
      "&end_time=" + this.end_time +
      "&calendar_date=" + this.calendar_date +
      "&is_available=" + "1";
      let res = await apiServices.makeAPICall(apiServices.postMethod,apiServices.URL + apiServices.save_change_availabilityAPI,param,() => {});
      if(res.data.flag == 1) {
        this.ToastAlert('success',res.data.msg);
        //this.events = res.data.data;
        this.resData.id = res.data.data.coach_calendar_id;
        this.resData.start_date = res.data.data.calendar_date+' '+res.data.data.start_time;
        this.resData.end_date = res.data.data.calendar_date+' '+res.data.data.end_time;
        this.resData.text = 'busy';
        this.events.push(this.resData);
        //localStorage.setItem("calendar_data",this.events);
      }
      else {
        this.ToastAlert('error',res.data.msg);
      }
    },
    async deleteChangeAvailability(coach_calendar_id, data) {
      console.log('Date === '+moment(new Date(data.start_date)).format('YYYY-MM-DD'));
      console.log('StartTime === '+moment(new Date(data.start_date)).format('hh:mm a'));
      console.log('EndTime === '+moment(new Date(data.end_date)).format('hh:mm a'));

      var param = "lang=" + "0"+
      "&timezone=" + this.coach.timezone+
      "&coach_id=" + this.coach.coach_id+
      "&access_token=" + this.coach.access_token+
      "&coach_calendar_id=" + coach_calendar_id +
      "&is_available=" + "0";
      let res = await apiServices.makeAPICall(apiServices.postMethod,apiServices.URL + apiServices.save_change_availabilityAPI,param,() => {});
      if(res.data.flag == 1) {
        this.ToastAlert('success',res.data.msg);
        //this.events = res.data.data;
        //console.log(this.events);
      }
      else {
        this.ToastAlert('error',res.data.msg);
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
html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
}
.container {
  height: 100%;
  width: 100%;
}
.left-container {
  overflow: hidden;
  position: relative;
  height: 100vh;
  display: inline-block;
  width: 82vw;
}
.right-container {
  border-right: 1px solid #cecece;
  float: right;
  height: 100%;
  width: 340px;
  box-shadow: 0 0 5px 2px #aaa;
  position: relative;
  z-index: 2;
}
.scheduler-messages {
  list-style-type: none;
  height: 50%;
  margin: 0;
  overflow-x: hidden;
  overflow-y: auto;
  padding-left: 5px;
}
.scheduler-messages > .scheduler-message {
  background-color: #f4f4f4;
  box-shadow: inset 5px 0 #d69000;
  font-family: Geneva, Arial, Helvetica, sans-serif;
  font-size: 14px;
  margin: 5px 0;
  padding: 8px 0 8px 10px;
}
</style>
