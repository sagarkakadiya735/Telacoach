
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
                    <div class="text-center h5 text-center font-weight-bold border-bottom pr-100 mb-0 pb-4">Terms & Conditions</div>
                        <div class="px-5 pb-5 about-text" v-html="teams_data">
                          {{ teams_data }}
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
  name: "Teamsandconditions",
  data() {
    return {
      teams_data: {},
      coach: {}
    };
  },
  mounted() {
    this.getTeamsData();
    this.coach = JSON.parse(localStorage.getItem("Login_data"));
  },
  components: {
    Header,
    Footer,
  },
  methods: {
    async getTeamsData() {
      var param = "lang=" + "0";
      let res = await apiServices.makeAPICall(apiServices.postMethod,apiServices.URL + apiServices.about_detailsAPI,param,() => {});
      if(res.data.flag == 1) {
        this.teams_data = res.data.data.terms_conditions_content
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
.about-text {
  text-align: justify;
}
</style>