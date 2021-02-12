<template>
  <div style="margin-top: 75px">
    <Header />
      <ejs-schedule height='550px' width='100%' :selectedDate='selectedDate'
      :eventSettings= 'eventSettings' :timeScale='timeScale' :actionBegin='onActionBegin'>
        <e-views>
          <e-view option='WorkWeek' startHour='09:00' endHour='18:00' ></e-view>
        </e-views>
      </ejs-schedule>
    <Footer />
  </div>
</template>
<script>
  import Header from "../Header.vue";
  import Footer from "../Footer.vue";
  import Vue from 'vue';
  //import { extend } from '@syncfusion/ej2-base';
  import { SchedulePlugin,  WorkWeek  } from '@syncfusion/ej2-vue-schedule';
  Vue.use(SchedulePlugin);
  import moment from 'moment';
  import apiServices from "../../components/Service/apiservice";

  export default {
    data () {
      return {
        eventSettings: { 
          dataSource: JSON.parse(localStorage.getItem("calendar_data")),
        },
        selectedDate: new Date(),
        timeScale: {
          enable: true,
          interval: 60,
          slotCount: 4
        },
        coach: {},
        events: [],
        messages: [],
        calendar_date: '',
        start_time: '',
        end_time: '',
        is_available: '',
        is_flag: '',
      }
    },
    provide: {
      schedule: [ WorkWeek ]
    },
    mounted() {
      this.coach = JSON.parse(localStorage.getItem("Login_data"));
      this.calendarList();

    },
    components: {
      Header,
      Footer,
    },
    methods: {
      async calendarList() {
        var startOfWeek = moment().startOf('week').toDate();
        var endOfWeek   = moment().endOf('week').toDate();
        console.log('startOfWeek === '+startOfWeek+'<br/>'+'endOfWeek === '+endOfWeek);
        var param = "lang=" + "0"+
        "&timezone=" + this.coach.timezone+
        "&coach_id=" + this.coach.coach_id+
        "&access_token=" + this.coach.access_token+
        "&start_date=" + moment(new Date(startOfWeek)).format('YYYY-MM-DD')+
        "&end_date=" + moment(new Date(endOfWeek)).format('YYYY-MM-DD');

        let res = await apiServices.makeAPICall(apiServices.postMethod,apiServices.URL + apiServices.coach_calendar_listAPI,param,() => {});
        if(res.data.flag == 1) {
          this.events = res.data.data;
            this.events.forEach(element => {
              var resData = {};
              resData.Id = element.coach_calendar_id;
              resData.StartTime = element.calendar_date+' '+element.start_time;
              resData.EndTime = element.calendar_date+' '+element.end_time;
              resData.Subject = 'busy';
              resData.IsAllDay = (element.is_day == 0) ? false : true;
              this.messages.push(resData);
            });
            this.eventSettings.dataSource = JSON.stringify(this.messages);
            localStorage.setItem("calendar_data",JSON.stringify(this.messages));
        }
      },
      async onActionBegin(args) {
        if(args.requestType == "eventCreate") {
          this.calendar_date = moment(new Date(args.data[0].StartTime)).format('YYYY-MM-DD');
          this.start_time = moment(new Date(args.data[0].StartTime)).format('hh:mm a');
          this.end_time = moment(new Date(args.data[0].EndTime)).format('hh:mm a');

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
            var resData = {};
            resData.Id = res.data.data.coach_calendar_id;
            resData.StartTime = res.data.data.calendar_date+' '+res.data.data.start_time;
            resData.EndTime = res.data.data.calendar_date+' '+res.data.data.end_time;
            resData.Subject = args.data[0].Subject;
            resData.IsAllDay = args.data[0].IsAllDay;
            this.messages.push(resData);
            this.eventSettings.dataSource = JSON.stringify(this.messages);
            console.log(this.messages);
            localStorage.setItem("calendar_data",JSON.stringify(this.messages));
          }
          else {
            this.ToastAlert('error',res.data.msg);
          }
        }
        if(args.requestType == "eventRemove") {
          var parameter = "lang=" + "0"+
          "&timezone=" + this.coach.timezone+
          "&coach_id=" + this.coach.coach_id+
          "&access_token=" + this.coach.access_token+
          "&coach_calendar_id=" + args.data[0].Id +
          "&is_available=" + "0";
          let res = await apiServices.makeAPICall(apiServices.postMethod,apiServices.URL + apiServices.save_change_availabilityAPI,parameter,() => {});
          if(res.data.flag == 1) {
            localStorage.removeItem("calendar_data");
            this.ToastAlert('success',res.data.msg);
            //this.calendarList();
            var startOfWeek = moment().startOf('week').toDate();
            var endOfWeek   = moment().endOf('week').toDate();
            console.log('startOfWeek === '+startOfWeek+'<br/>'+'endOfWeek === '+endOfWeek);
            var params = "lang=" + "0"+
            "&timezone=" + this.coach.timezone+
            "&coach_id=" + this.coach.coach_id+
            "&access_token=" + this.coach.access_token+
            "&start_date=" + moment(new Date(startOfWeek)).format('YYYY-MM-DD')+
            "&end_date=" + moment(new Date(endOfWeek)).format('YYYY-MM-DD');

            let res = await apiServices.makeAPICall(apiServices.postMethod,apiServices.URL + apiServices.coach_calendar_listAPI,params,() => {});
            if(res.data.flag == 1) {
              this.events = res.data.data;
              var resultData = [];
                this.events.forEach(element => {
                  var resData = {};
                  resData.Id = element.coach_calendar_id;
                  resData.StartTime = element.calendar_date+' '+element.start_time;
                  resData.EndTime = element.calendar_date+' '+element.end_time;
                  resData.Subject = 'busy';
                  resData.IsAllDay = (element.is_day == 0) ? false : true;
                  resultData.push(resData);
                });
                this.eventSettings.dataSource = JSON.stringify(resultData);
                localStorage.setItem("calendar_data",JSON.stringify(resultData));
            }
          }
          else {
            this.ToastAlert('error',res.data.msg);
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
  }
</script>
<style>
@import '~@syncfusion/ej2-base/styles/material.css';
@import '~@syncfusion/ej2-buttons/styles/material.css';
@import '~@syncfusion/ej2-calendars/styles/material.css';
@import '~@syncfusion/ej2-dropdowns/styles/material.css';
@import '~@syncfusion/ej2-inputs/styles/material.css';
@import '~@syncfusion/ej2-navigations/styles/material.css';
@import '~@syncfusion/ej2-popups/styles/material.css';
@import '~@syncfusion/ej2-vue-schedule/styles/material.css';
</style>
<style>
.e-toolbar .e-toolbar-items.e-tbar-pos .e-toolbar-right {
  display: none;
}
.e-edit {
  display: none !important;
}
.e-toolbar-left {
  position: inherit !important;
  display: block !important;
  text-align: center;
}
.e-next {
  float: right;
}
.e-prev {
  float: left;
}
</style>