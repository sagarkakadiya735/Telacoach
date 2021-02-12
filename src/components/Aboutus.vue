
<template>
  <div>
    <Header />
    <div class="text-center bg-blue-light py-5 header-top">
      <h2 class="font-weight-bold">About Us</h2>
      <div class="mx-auto border-lines"></div>
    </div>
    <div class="container bg-aboutus">
      <div class="text-center p-5 ">
        <img src="../assets/img/ic_about_us_image@2x.png" class="w-100" />
      </div>
      </div>
       <div class="container " v-html="about_response.about_content">
    </div>
    <!-- <div class="bg-green-l my-5">
      <div class="container">
        <h1 class="px-5 pt-5 text-white">Subscribe To Telacoach <input type="text" class="h4 p-2 border-0 rounded" placeholder="Enter your email address"> 
        <button class="bg-dark rounded border-0 text-white h4 p-2 mx-5">
          <router-link class="text-white font-weight-bold mx-5" to="/coachlist">
          Sent
          </router-link>
          </button> 
        </h1>
        <div class="text-white text-center pb-5 pt-3">We Promise not to spam your indox</div>
      </div>
    </div> -->
    <Footer />
  </div>
</template>
  
<script>
import Header from "./Header.vue";
import Footer from "./Footer.vue";
import apiServices from "../components/Service/apiservice";

export default {
  name: "Aboutus",
  data() {
    return {
      about_response:{},
    };
  },
   mounted() {
    
      this.Aboutus();
   },
  components: {
    Header,
    Footer,
  },
  methods: {
      async  Aboutus(){
        this.continuebutton=false
        this.empty='';
         var param = 
        "lang=" + "0";
        let res = await apiServices.makeAPICall(apiServices.postMethod,apiServices.URL + apiServices.about_detailsAPI,param,() => {});
        if(res.data.flag==1){
          this.about_response=res.data.data
          }
        else
          {
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
        // didOpen: (toast) => {
        //   toast.addEventListener('mouseenter', this.$swal.stopTimer)
        //   toast.addEventListener('mouseleave', this.$swal.resumeTimer)
        // }
      })

      Toast.fire({
        icon: id,
        title: msg
      })
    },
  }
};
</script>
<style></style>