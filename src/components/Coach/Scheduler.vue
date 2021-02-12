<script src="../codebase/dhtmlxscheduler.js"></script>
<template>
  <div ref="scheduler"></div>
</template>  
<script>
import "dhtmlx-scheduler";

export default {
  name: "scheduler",
  components: {},
  props: {
    events: {
      type: Array,
      default() {
        return { 
          events: []
        };
      },
    },
  },
  methods: {
    $_initSchedulerEvents: function () {
      if (!scheduler.$_eventsInitialized) {
        scheduler.attachEvent("onEventAdded", (id, ev) => {
          this.$emit("event-updated", id, "inserted", ev);
          console.log(ev);
        });
        scheduler.attachEvent("onEventChanged", (id, ev) => {
          this.$emit("event-updated", id, "updated", ev);
        });
        scheduler.attachEvent("onEventDeleted", (id, ev) => {
          this.$emit("event-updated", id, "deleted", ev);
        });

        scheduler.$_eventsInitialized = true;
      }
    },
  },
  mounted: function () {
    scheduler.skin = "material";
    scheduler.config.time_step = 15;
    scheduler.config.header = [
      "prev",
      "date",
      "next",
    ];
    this.$_initSchedulerEvents();
    scheduler.init(this.$refs.scheduler, new Date(), "week");
    scheduler.parse(this.$props.events);
    console.log(this.$refs.scheduler);
  },
};
</script> 
<style>
@import "~dhtmlx-scheduler/codebase/dhtmlxscheduler.css";
@import "~dhtmlx-scheduler/codebase/dhtmlxscheduler_material.css";
</style>
