
<template>
  <div>
    <Header />
       <div class="text-center bg-img-header py-5 header-top">
      <h2 class="font-weight-bold pt-4">Setting</h2>
      <div class="mx-auto border-lines mb-4"></div>
    </div>
     <div class="requests-bg-light-grew pt-3 pb-5">
        <div class="container pb-5">
            <div class="container box-shadow border-rounde mt-5 p-0 bg-white" style="width: 750px">
                <div class="">
                    <div class="px-4 pt-4 font-weight-bold">
                      <router-link class="text-dark" to="/profilesettingcoach">
                        <div class="float-left">
                          <img src="../../assets/img/ic_back_arrow.png" width="25" class="mr-3"/>Back
                        </div>
                      </router-link>
                    </div>
                    <div class="text-center h5 text-center font-weight-bold border-bottom pr-100 mb-0 pb-4">Rate Telacoach</div>
                        <div class="message py-2 text-center">
                          <img src="../../assets/img/ic_rate_undraw_reviews.png" class="p-4" alt="">   
                          <h4 class="text-muted">How likely are you to </h4>
                          <h4 class="text-muted">Recommend Telacoach?</h4>
                          <star-rating v-model="rate.rate_star" v-bind:increment="0.5" v-bind:star-size="35" disabled="true" readonly="true">
                          </star-rating>
                          <p class="red-color-font-s mb-0 mt-2" v-if="rate_star!=''">{{rate_star}}</p>
                          <div v-if="is_flag == '1'" class="mb-2"></div>
                        </div>
                   </div>
               <button v-if="is_flag == '0'" @click.prevent="submit()" class="mx-auto w-100 border-0 p-3 mt-3 bg-success text-center btn-green text-white border-r-bx">SAVE</button>
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
import constants from "../../components/Service/constants.js";
import StarRating from 'vue-star-rating'
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios);

export default {
  name: "Rate",
  data() {
    return {
      coach: {},
      rate: {},
      rate_star: 0,
      is_flag: ''
    };
  },
  mounted() {
    this.coach = JSON.parse(localStorage.getItem("Login_data"));
    this.getTelacoachRate();
  },
  components: {
    Header,
    Footer,
    StarRating
  },
  methods: {
    async getTelacoachRate() {
      var parameter = 
        "lang=" + "0"+
        "&user_id=" + this.coach.coach_id+
        "&access_token=" + this.coach.access_token+
        "&rate_star=" + this.rate.rate_star+
        "&flag_view=" + "0"+
        "&is_flag=" + "1";
        let resData = await apiServices.makeAPICall(apiServices.postMethod,apiServices.URL + apiServices.user_telacoach_rateAPI,parameter,() => {});
        if(resData.data.flag == 1) {
          this.is_flag = resData.data.flag;
          Vue.prototype.$telacoach_rate = resData.data.data;
          this.rate = Vue.prototype.$telacoach_rate;
        }
        else {
          this.is_flag = resData.data.flag;
        }
    },
    async submit() {
      this.rate_star = "";
      
      if(!this.rate.rate_star) {
        this.rate_star = constants.rate_star;
      }
      if(this.rate_star == '') {
        var param = 
        "lang=" + "0"+
        "&user_id=" + this.coach.coach_id+
        "&access_token=" + this.coach.access_token+
        "&rate_star=" + this.rate.rate_star+
        "&flag_view=" + "1"+
        "&is_flag=" + "1";
        let res = await apiServices.makeAPICall(apiServices.postMethod,apiServices.URL + apiServices.user_telacoach_rateAPI,param,() => {});
        if(res.data.flag == 1) {
          this.ToastAlert('success',res.data.msg);
          this.$router.push("/profilesettingcoach");
        }
        else {
          this.ToastAlert('error',res.data.msg)
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
};
</script>
<style>
.vue-star-rating {
  padding-left: 21%;
}
.vue-star-rating-rating-text[data-v-fde73a0c] {
  display: none;
}
</style>