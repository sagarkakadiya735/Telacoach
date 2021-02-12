
<template>
  <div>
    <Header />
    <div class="bg-light-grew pt-5">
      <div class="container py-5">
        <div
          class="container box-shadow rounded mt-5 p-0 bg-white border-radius inner-container"
        >
          <div class="">
            <!-- <div class="px-4 pt-4 border-bottom font-weight-bold">
              <img
                src="../assets/img/ic_back_arrow.png"
                width="25"
                class="mr-3 float-left"
              />Back
              <div class="h3 text-center font-weight-bold">Details</div>
            </div> -->
            <div class="px-4 pt-4 font-weight-bold">
              <router-link class="text-dark font-weight-bold" to="/details">
                <div class="float-left">
                  <img
                    src="../../assets/img/ic_back_arrow.png"
                    width="25"
                    class="mr-3"
                  />Back
                </div>
              </router-link>
            </div>
            <div
              class="text-center h3 text-center font-weight-bold border-bottom pr-100 pb-2 booksession-title"
            >
              Book Session
            </div>
            <div class="px-4">
              <h5 class="text-green my-3 h5 font-weight-bold">
                Your Current Location is
              </h5>
              <div class="font-weight-bold my-2">Select State</div>

              <select
                v-model="user.state"
                class="custom-select py-2 h-55 bg-blue-light"
              >
                <option selected value="" disabled>Select State</option>
                <option
                  v-for="(item, index) in statedata"
                  :key="index"
                  v-bind:value="item.state_name"
                >
                  {{ item.state_name }}
                </option>
              </select>
              <p class="red-color-font-s mb-0" v-if="state != ''">
                {{ state }}
              </p>
              <h5 class="text-green my-3 h5 font-weight-bold">
                What time is good for you?
              </h5>

              <div class="font-weight-bold my-3">Select your timezone</div>
              <select
                v-model="user.time"
                class="custom-select py-2 h-55 bg-blue-light"
              >
                <option selected value="" disabled>Select Timezone</option>
                <option
                  v-for="(item, index) in timezonedata"
                  :key="index"
                  v-bind:value="item.timezone"
                >
                  {{ item.timezone }}
                </option>
              </select>
              <p class="red-color-font-s mb-0" v-if="time != ''">
                {{ time }}
              </p>
              <div class="font-weight-bold my-3">Select Date</div>
              <input
                type="date"
                v-model="user.theDate"
                v-bind:min="start"
                v-bind:max="end"
                class="form-control booksession-input py-2 h-55 bg-blue-light"
              />
              <p class="red-color-font-s mb-0" v-if="theDate != ''">
                {{ theDate }}
              </p>
              <div class="font-weight-bold my-3">Select time</div>
              <input
                type="time"
                v-model="user.theTime"
                class="form-control booksession-input py-2 h-55 bg-blue-light"
              />
              <p class="red-color-font-s mb-0" v-if="theTime != ''">
                {{ theTime }}
              </p>
            </div>
          </div>
          <!-- <router-link class="text-white font-weight-bold" to="/myplan"> -->
          <button
            v-on:click="Next()"
            class="mx-auto w-100 border-0 p-3 mt-3 bg-success text-center btn-green text-white border-r-bx"
          >
            NEXT
          </button>
          <!-- </router-link> -->
        </div>
      </div>
    </div>

    <Footer />
  </div>
</template>
  
<script>
import Header from "../Header.vue";
import Footer from "../Footer.vue";
import apiServices from "../../components/Service/apiservice";
import constants from "../../components/Service/constants";

export default {
  name: "Booksession",
  data() {
    return {
      statedata: [],
      timezonedata: [],
      user: {},
      userdata: {},
      coachdata: {},
      start: "",
      end: "",
      theDate: "",
      theTime: "",
      state: "",
      time: "",
    };
  },
  mounted() {
    this.start = new Date().toISOString().slice(0, 10);
    var someDate = new Date();
    someDate.setDate(someDate.getDate() + 15); //number  of days to add, e.x. 15 days
    var dateFormated = someDate.toISOString().substr(0, 10);
    this.end = dateFormated;
    this.user.theDate = this.start;
    this.userdata = JSON.parse(localStorage.getItem("Login_data"));
    this.coachdata = JSON.parse(localStorage.getItem("coach_data"));
    this.user.state = "";
    this.user.time = "";
    this.StateAPI();
    this.TimezoneAPI();
  },
  components: {
    Header,
    Footer,
  },
  methods: {
    async StateAPI() {
      var param =
        "lang=" +
        "0" +
        "&user_id=" +
        this.userdata.user_id +
        "&access_token=" +
        this.userdata.access_token +
        "&offset=" +
        "";
      let res = await apiServices.makeAPICall(
        apiServices.postMethod,
        apiServices.URL + apiServices.state_listAPI,
        param,
        () => {}
      );
      if (res.data.flag == 1) {
        this.statedata = res.data.data;
      } else {
        this.ToastAlert("error", res.data.msg);
      }
    },
    async TimezoneAPI() {
      var param =
        "lang=" +
        "0" +
        "&user_id=" +
        this.userdata.user_id +
        "&access_token=" +
        this.userdata.access_token +
        "&offset=" +
        "0";
      let res = await apiServices.makeAPICall(
        apiServices.postMethod,
        apiServices.URL + apiServices.timezone_listAPI,
        param,
        () => {}
      );
      if (res.data.flag == 1) {
        this.timezonedata = res.data.data;
      } else {
        this.ToastAlert("error", res.data.msg);
      }
    },
    tConvert(time) {
      // Check correct time format and split into components
      if (this.user.theTime != null) {
        time = time
          .toString()
          .match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];

        if (time.length > 1) {
          // If time format correct
          time = time.slice(1); // Remove full string match value
          time[5] = +time[0] < 12 ? " AM" : " PM"; // Set AM/PM
          time[0] = +time[0] % 12 || 12; // Adjust hours
        }
        return time.join(""); // return adjusted time or original string
      }
    },
    async Next() {
      this.theDate = "";
      this.theTime = "";
      this.state = "";
      this.time = "";

      if (!this.user.theDate) {
        this.theDate = constants.theDate;
      }
      if (!this.user.theTime) {
        this.theTime = constants.theTime;
      }
      if (!this.user.state) {
        this.state = constants.state;
      }
      if (!this.user.time) {
        this.time = constants.time;
      }
      if (
        this.theDate == "" &&
        this.theTime == "" &&
        this.state == "" &&
        this.time == ""
      ) {
        var param =
          "lang=" +
          "0" +
          "&user_id=" +
          this.userdata.user_id +
          "&access_token=" +
          this.userdata.access_token +
          "&coach_id=" +
          this.coachdata.coach_id +
          "&book_date=" +
          this.user.theDate +
          "&book_time=" +
          this.tConvert(this.user.theTime) +
          "&location=" +
          this.user.state +
          "&timezone=" +
          this.user.time +
          "&current_timezone=" +
          constants.timezone;
        let res = await apiServices.makeAPICall(
          apiServices.postMethod,
          apiServices.URL + apiServices.check_coach_busyAPI,
          param,
          () => {}
        );
        if (res.data.flag == 1) {
          localStorage.setItem("booksession", JSON.stringify(this.user));
          this.statedata = res.data.data;
          this.ToastAlert("success", res.data.msg);
          this.$router.push("/myplan").catch(() => {});
        } else {
          this.ToastAlert("error", res.data.msg);
        }
      }
    },
    ToastAlert(id, msg) {
      const Toast = this.$swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: false,
        // didOpen: (toast) => {
        //   toast.addEventListener('mouseenter', this.$swal.stopTimer)
        //   toast.addEventListener('mouseleave', this.$swal.resumeTimer)
        // }
      });

      Toast.fire({
        icon: id,
        title: msg,
      });
    },
  },
};
</script>
<style>
.nav-tabs .nav-item.show .nav-link,
.nav-tabs .nav-link.active {
  color: #369f04 !important;
  background-color: #f7f7f7;
  border-color: #f7f7f7 #ccc #369f04 #f7f7f7;
}
.custom-select {
  background: #fff url("../../assets/img/ic_drop_down_green_arrow.png")
    no-repeat right 0.75rem center/15px 10px;
}
</style>