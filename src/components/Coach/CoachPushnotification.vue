
<template>
  <div>
    <Header />
    <div class="text-center bg-img-header py-5 header-top">
      <h2 class="font-weight-bold pt-4">Setting</h2>
      <div class="mx-auto border-lines mb-4"></div>
    </div>
    <div class="requests-bg-light-grew pt-3 pb-5">
      <div class="container pb-5">
        <div
          class="container box-shadow border-rounde mt-5 p-0 bg-white"
          style="width: 750px"
        >
          <div class="">
            <div class="px-4 pt-4 font-weight-bold">
               <router-link class="text-dark" to="/profilesettingcoach">
              <div class="float-left">
                <img src="../../assets/img/ic_back_arrow.png" width="25" class="mr-3" />Back
              </div>
               </router-link>
            </div>
            <div class="text-center h5 text-center font-weight-bold border-bottom pr-100 mb-0 pb-4">
              Personal Details
            </div>

            <div class="message px-5 py-2">
              <div class="h1 text-green text-center">
                Also Notification based On Push
              </div>

              <div class="user-input-wrp line-h border-green p-3 my-4">
                <span class="text-left text-green font-weight-bold h6">Push Notification</span>
                <span class="float-right">
                  <label class="switch" style="line-height: 2">
                    <input type="checkbox" v-model="push_notification.is_notification" v-if="notification == '1'" checked />
                    <input type="checkbox" v-model="push_notification.is_notification" v-if="notification == '0'" />
                    <span class="slider round"></span>
                  </label>
                </span>
              </div>
            </div>
          </div>
          <button @click.prevent="submit()" class="mx-auto w-100 border-0 p-3 mt-3 bg-success text-center btn-green text-white border-r-bx">SAVE</button>
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

export default {
  name: "pushnotification",
  data() {
    return {
      push_notification: {},
      notification: {},
      is_notification: ''
    };
  },
  mounted() {
    this.coach = JSON.parse(localStorage.getItem("Login_data"));
    this.getAppLockData();
  },
  components: {
    Header,
    Footer,
  },
  methods: {
    async getAppLockData() {
      var param = 
      "lang=" + "0"+
      "&user_id=" + this.coach.coach_id+
      "&access_token=" + this.coach.access_token+
      "&is_flag=" + "0"+
      "&flag_view=" + "1";
      console.log(param);
      let res = await apiServices.makeAPICall(apiServices.postMethod,apiServices.URL + apiServices.set_app_lockAPI,param,() => {});
      this.notification = res.data.data.is_notification;
    },
    async submit() {
      if(this.push_notification.is_notification == true) {
        this.is_notification = '1';
      }
      else {
        this.is_notification = '0';
      }
      var param = 
      "lang=" + "0"+
      "&user_id=" + this.coach.coach_id+
      "&access_token=" + this.coach.access_token+
      "&is_flag=" + "1"+
      "&is_notification=" + this.is_notification+
      "&flag_view=" + "1";
      console.log(param);
      let res = await apiServices.makeAPICall(apiServices.postMethod,apiServices.URL + apiServices.set_app_lockAPI,param,() => {});
      if(res.data.flag == 1) {
        this.ToastAlert('success',res.data.msg);
        this.$router.push("/profilesettingcoach");
      }
      else {
        this.ToastAlert('error',res.data.msg)
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
};
</script>
<style>
.slider.round {
  border-radius: 34px;
}
.slider.round:before {
  border-radius: 50%;
}
.switch {
  position: relative;
  display: inline-block;
  width: 50px;
  height: 20px;
}
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}
.slider:before {
  position: absolute;
  content: "";
  height: 18px;
  width: 18px;
  left: 4px;
  bottom: 1px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}
input:checked + .slider {
  background-color: #369f04;
}
input:focus + .slider {
  box-shadow: 0 0 1px #369f04;
}
input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}
</style>