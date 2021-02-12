
<template>
  <div>
    <Header />
    <div class="text-center bg-img py-5 header-top">
      <h2 class="font-weight-bold pt-4">Select Calendar</h2>
      <div class="mx-auto border-lines mb-4"></div>
    </div>
    <div class="requests-bg-light-grew pt-3 pb-5">
        <div class="container pb-5">
            <div class="container box-shadow border-rounde mt-5 p-0 bg-white" style="width: 750px">
                <div class="">
                    <div class="px-4 pt-4 font-weight-bold">
                      <router-link class="text-dark" to="/requestdetails">
                        <div class="float-left">
                            <img src="../../assets/img/ic_back_arrow.png" width="25" class="mr-3"/>Back
                        </div>
                      </router-link>
                    </div>
                    <div class="text-center h5 text-center font-weight-bold border-bottom pr-100 pb-2">Select Calendar</div>
                    <div class="px-4 pb-5 pt-3">
                        <h5 class="text-green my-3 font-weight-bold text-center">Add event in selected calendar or skip to add event</h5>
                        <p class="text-center">To add reminder, log into your Gmail or Microsoft account</p>
                        <img src="../../assets/img/google-logo.png" class="cursor-point" v-on:click="selectCalendar('google')" width="50" style="margin: 0% 0% 0% 50%;" />
                        <!-- <img src="../../assets/img/windows-10.png" class="cursor-point" v-on:click="selectCalendar('microsoft')" width="50" /> -->
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
import Swal from 'sweetalert2'

export default {
  name: "Selectcalendar",
  data() {
    return {
        coach: {}
    };
  },
  mounted() {
    this.coach = JSON.parse(localStorage.getItem("Login_data"));
  },
  components: {
    Header,
    Footer,
  },
  methods: {
    async selectCalendar(event_type) {
        Swal.fire({
            title: 'Do you want accept request without add calendar event?',
            showCancelButton: true,
            confirmButtonText: `Accept`,
            confirmButtonColor: '#429f04',
        }).then((result) => {
            if (result.isConfirmed) {
                this.$router.push("/event");
                localStorage.setItem('event_type',JSON.stringify(event_type));
            } else {
                this.$router.push("/requests");
            }
        })
    },
  },
};
</script>
<style>
  @import "../../assets/css/custom1.css";
</style>
<style>
.swal2-title {
    font-size: 1.3em !important;
}
</style>