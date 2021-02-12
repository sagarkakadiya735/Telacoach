
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
                      <router-link v-if="this.coach.is_login == '1'" class="text-dark" to="/profilesettingcoach">
                        <div class="float-left">
                            <img src="../assets/img/ic_back_arrow.png" width="25" class="mr-3"/>Back
                        </div>
                      </router-link>
                      <router-link v-if="this.coach.is_login == '0'" class="text-dark" to="/Profilesetting">
                        <div class="float-left">
                            <img src="../assets/img/ic_back_arrow.png" width="25" class="mr-3"/>Back
                        </div>
                      </router-link>
                    </div>
                    <div class="text-center h5 text-center font-weight-bold border-bottom pr-100 mb-0 pb-4">About Telacoach</div>
                        <div class="message py-2 text-center">
                         <img src="../assets/img/ic_about_telacoach_logo@2x.png" class="p-4" alt="" height="150">   
                         <div class="px-5 pb-2 about-text" v-html="about_telacoach">{{about_telacoach}}</div>
                         <div class="mt-5 font-weight-bold">Connect by <br> phone</div>
                         <div class="float-left font-weight-bold text-left-image">Connect <br> by video</div>
                         <div class="float-right font-weight-bold text-right-image">Connect  <br> by text</div>
                         <img src="../assets/img/ic_about_telacoach.png" class="px-4 pt-0 pb-5" alt="">   
                        </div>
                   </div>
            </div>
        </div>
    </div>
    <Footer />
  </div>
</template>
  
<script>
import Header from "./Header.vue";
import Footer from "./Footer.vue";
import apiServices from "../components/Service/apiservice";

export default {
  name: "Abouttelacoach",
  data() {
    return {
      about_telacoach: {},
      coach: {}
    };
  },
  mounted() {
    this.getAboutTelacoachData();
    this.coach = JSON.parse(localStorage.getItem("Login_data"));
  },
  components: {
    Header,
    Footer,
  },
  methods: {
    async getAboutTelacoachData() {
      var param = "lang=" + "0";
      let res = await apiServices.makeAPICall(apiServices.postMethod,apiServices.URL + apiServices.about_detailsAPI,param,() => {});
      if(res.data.flag == 1) {
        this.about_telacoach = res.data.data.about_content
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
        timerProgressBar: false
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

</style>