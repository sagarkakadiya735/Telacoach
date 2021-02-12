<script src="../codebase/dhtmlxscheduler.js"></script>
<template>
  <div ref="scheduler"></div>
</template>  
<script>
import Vue from 'vue';
import { extend } from '@syncfusion/ej2-base';
import { SchedulePlugin, Day, Week, WorkWeek, Month } from '@syncfusion/ej2-vue-schedule';
//import { ButtonPlugin } from '@syncfusion/ej2-buttons';
//Vue.use(ButtonPlugin);
Vue.use(SchedulePlugin);

export default {
  name: "scheduler",
  data () {
    return {
      eventSettings: {
        dataSource:  [{
          Id: 3,
          Subject: 'Testing',
          StartTime: new Date(2018, 1, 11, 9, 0),
          EndTime: new Date(2018, 1, 11, 10, 0),
          IsAllDay: false
        },{
          Id: 4,
          Subject: 'Vacation',
          StartTime: new Date(2018, 1, 13, 9, 0),
          EndTime: new Date(2018, 1, 13, 10, 0),
          IsAllDay: false
        }]
      },
      selectedDate: new Date(2018, 1, 15)
    }
  },
  provide: {
    schedule: [Day, Week, WorkWeek, Month]
  },
  methods: {
    onSave: function () {
      let scheduleObj = document.getElementById('Schedule').ej2_instances[0];
      let eventData = {
          Id: 3,
          Subject: 'Testing-edited',
          StartTime: new Date(2018, 1, 11, 10, 0),
          EndTime: new Date(2018, 1, 11, 11, 0),
          IsAllDay: false
      };
      scheduleObj.saveEvent(eventData);
    },
    onAdd: function () {
        let scheduleObj = document.getElementById('Schedule').ej2_instances[0];
        let Data = [{
            Id: 1,
            Subject: 'Conference',
            StartTime: new Date(2018, 1, 12, 9, 0),
            EndTime: new Date(2018, 1, 12, 10, 0),
            IsAllDay: false
        },{
            Id: 2,
            Subject: 'Meeting',
            StartTime: new Date(2018, 1, 15, 10, 0),
            EndTime: new Date(2018, 1, 15, 11, 30),
            IsAllDay: false
        }];
        scheduleObj.addEvent(Data);
    },
    onDelete: function () {
        let scheduleObj = document.getElementById('Schedule').ej2_instances[0];
        scheduleObj.deleteEvent(4);
    }
  },
};
</script> 
<style>
  @import '/node_modules/@syncfusion/ej2-base/styles/material.css';
  @import '/node_modules/@syncfusion/ej2-buttons/styles/material.css';
  @import '/node_modules/@syncfusion/ej2-calendars/styles/material.css';
  @import '/node_modules/@syncfusion/ej2-dropdowns/styles/material.css';
  @import '/node_modules/@syncfusion/ej2-inputs/styles/material.css';
  @import '/node_modules/@syncfusion/ej2-navigations/styles/material.css';
  @import '/node_modules/@syncfusion/ej2-popups/styles/material.css';
  @import '/node_modules/@syncfusion/ej2-vue-schedule/styles/material.css';
</style>
