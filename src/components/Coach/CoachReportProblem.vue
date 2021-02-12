
<template>
  <div>
    <Header />
    <div class="text-center bg-img-header py-5 header-top">
      <h2 class="font-weight-bold pt-4">Setting</h2>
      <div class="mx-auto border-lines mb-4"></div>
    </div>
    <div class="bg-grew-dark ">
      <div class="container py-5">
        <div class="container box-shadow rounded mt-5 p-0 bg-white border-radius" style="width: 750px">
          <div class="">
            <div class="px-4 pt-4  font-weight-bold">
              <router-link class="text-dark" to="/profilesettingcoach">
               <div class="float-left">
                  <img src="../../assets/img/ic_back_arrow.png" width="25" class="mr-3 " />Back
               </div>
              </router-link>
            </div>
            <div class="text-center h3 text-center font-weight-bold border-bottom pr-100 pb-2">Report a Problem</div>
            <div class="px-4 p-4">
              <textarea placeholder="Enter comment here.." v-model="report_problem.comment" class="border-0 rounded boder-1 w-100 bg-blue-light p-3" rows="6"></textarea>
              <p class="red-color-font-s mb-0" v-if="comment!=''">{{comment}}</p>
            </div>
          </div>
          <button @click.prevent="submit()" class="mx-auto w-100 border-0 p-3 bg-success text-center btn-green text-white border-r-bx">SUBMIT</button>
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

export default {
  name: "Report",
  data() {
    return {
      report_problem: {},
      coach: {},
      comment: '',
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
    async submit() {
      this.comment = "";
      
      if(!this.report_problem.comment) {
        this.comment = constants.comment;
      }
      if(this.comment == '') {
        var param = 
        "lang=" + "0"+
        "&coach_id=" + "0"+
        "&user_id=" + this.coach.coach_id+
        "&access_token=" + this.coach.access_token+
        "&is_problem=" + "4"+
        "&description=" + this.report_problem.comment+
        "&flag_view=" + "1";
        let res = await apiServices.makeAPICall(apiServices.postMethod,apiServices.URL + apiServices.save_user_report_problemAPI,param,() => {});
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
.nav-tabs .nav-item.show .nav-link,
.nav-tabs .nav-link.active {
  color: #369f04 !important;
  background-color: #f7f7f7;
  border-color: #f7f7f7 #ccc #369f04 #f7f7f7;
}
</style>