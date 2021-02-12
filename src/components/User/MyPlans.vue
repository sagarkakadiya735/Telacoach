<template>
  <div>
    <Header />
    <div class="container-fluid header-top myplan-title">
      <div class="row">
        <div class="col-md text-center plan-title">
          <h2 class="font-weight-bold">My Plan</h2>
          <div class="mx-auto bottom-border-line"></div>
        </div>
      </div>
    </div>

    <div class="container-fluid myplan-section p-5">
      <div class="container myplans p-4">
        <div class="row p-4">
          
          <div class="col-xs-12 col-md-4 px-4 text-center" v-for="(item, index) in subscriptiondata" :key="index">
            <div class="panel panel-primary plans" v-on:click="plandeatils(item)">
              <div class="panel-heading">
                <h3 class="panel-title pt-3"><b>Coach Name</b></h3>
                <h5 class="pb-3"><strong>{{item.coach_name}}</strong></h5>
              </div>
              <div class="panel-body">
                <table class="table plans-table">
                  <tr class="plan-price" :class="{ 'green' : index%2==0 , 'darkblue' : index%2==1 , 'purple' : index%3==0}">
                    <td>
                      <h1 class="p-4 plan-price-title" style="" >
                        <strong>{{item.price}}</strong>
                      </h1>
                    </td>
                  </tr>
                  <tr class="active">
                    <td>
                      <span class="price-label font-weight-bold"><strong>On</strong></span>
                    </td>
                  </tr>
                  <tr>
                    <td><strong>{{item.book_date}}</strong></td>
                  </tr>
                  <tr class="active">
                    <td><strong>{{item.book_time}}</strong></td>
                  </tr>
                  <tr>
                    <td><strong>{{item.session_time}}</strong></td>
                  </tr>
                  <tr class="active">
                    <td><strong>{{item.session}}</strong></td>
                  </tr>
                </table>
              </div>
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
import apiServices from "../../components/Service/apiservice";
import constants from "../../components/Service/constants";

export default {
  name: "Login",
  data() {
    return {
      logindata:{},
      subscriptiondata:[],
    };
  },
   mounted() {
     localStorage.removeItem("PlanDeatils")
    this.logindata = JSON.parse(localStorage.getItem("Login_data"));
      this.subscriptionAPI();
   },
  components: {
    Header,
    Footer,
  },
   methods: {
      async  subscriptionAPI(){
         var param = 
        "lang=" + "0"+
        "&user_id=" + this.logindata.user_id+
        "&coach_id=" + ""+
        "&timezone=" + constants.timezone;
        let res = await apiServices.makeAPICall(apiServices.postMethod,apiServices.URL + apiServices.subscription_listAPI,param,() => {});
        if(res.data.flag==1){
          console.log(res.data.data);
          this.subscriptiondata=res.data.data
          // this.plan_name=res.data.data[0].plan_name
          //  localStorage.setItem('plan_id',res.data.data[0].plan_id);
          }
        else
          {
            this.ToastAlert('error',res.data.msg)
          }
      },
      plandeatils(item){
        localStorage.setItem("PlanDeatils",JSON.stringify(item))
        this.$router.push("/plandetails").catch(()=>{});
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
<style>
 @import "../../assets/css/custom.css";
 
.green{
    background-color: #EDFCE8;
    color: #27E83D;
}
.blue{
    background-color: #E3F3FD;
    color: #1593EF;
}
.purple{
    background-color: #F0E0FF;
    color: #AC0FFF;
}
.darkblue{
    background-color: #EBE8FC;
    color: #4427E8;
}
</style>