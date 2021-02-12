<template>
  <div>
    <Header />
    <div class="text-center bg-img-header py-5 header-top">
      <h2 class="font-weight-bold pt-4">Invoice</h2>
      <div class="mx-auto border-lines mb-4"></div>
    </div>
    <div class="bg-grew-dark">
      <div class="container py-5">
        <div
          class="container box-shadow rounded mt-5 p-0 bg-white border-radius"
          style="width: 750px"
        >
          <div class="px-4 pt-4 font-weight-bold">
            <router-link class="text-dark" to="/Accountsetting">
              <div class="float-left">
                <img
                  src="../../assets/img/ic_back_arrow.png"
                  width="25"
                  class="mr-3"
                />Back
              </div>
            </router-link>
          </div>

          <div class="tab-content px-4 pt-4">
            <div
              class="tab-pane active py-3"
              id="pending"
              role="tabpanel"
              aria-labelledby="pending-tab"
            >
              <div class="card my-3 bg-light-grew border-0">
                  <div class="card-body p-0 text-dark cursor" v-for="(item, index) in invoic" :key="index">
                    <div class="p-3" v-on:click="inoviedeatils(item)">
                      <img
                        :src="item.user_image"
                        width="80px" height="80px"
                        class="float-left rounded-circle"
                      />
                      <div
                        class="message border-bottom"
                        style="margin-left: 95px"
                      >
                        <h5 class="card-title text-green">{{item.user_name}}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">
                          {{item.category_name}}
                        </h6>
                        <div class="my-3">
                          <span class="text-green font-weight-bold">
                            Date:</span
                          >
                          <span> {{item.payment_date}}</span>
                          <span class="text-green font-weight-bold">
                            Time:</span
                          >
                          <span>{{item.payment_time}}</span>
                        </div>
                      </div>
                    </div>
                  </div>
               
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
import constants from "../../components/Service/constants.js";

export default {
  name: "Session",
  data() {
    return {
       userdatas:{},
       invoic:[],
    };
  },
   mounted() {
     localStorage.removeItem("invoice")
     this.userdatas = JSON.parse(localStorage.getItem("Login_data"));
     this.InvoiceAPI();
   },
  components: {
    Header,
    Footer,
  },
     methods:{
      async InvoiceAPI(){
          var param = 
          "lang=" + "0"+
          "&user_id=" + this.userdatas.user_id+
          "&access_token=" + this.userdatas.access_token+
          "&flag_view=" + '0'+
          "&offset=" + '0'+
          "&timezone=" + constants.timezone;
          let res = await apiServices.makeAPICall(apiServices.postMethod,apiServices.URL + apiServices.my_payment_listAPI,param,() => {});
          if(res.data.flag==1){
            console.log(res.data.data,"res.data.data");
            this.invoic=res.data.data
            }
          else
            {
              this.ToastAlert('error',res.data.msg)
            }
    },
    inoviedeatils(item){
       this.$router.push("/InvoiceDetails");
        localStorage.setItem("invoice",JSON.stringify(item))
    }
  }
};
</script>
<style>
.nav-tabs .nav-item.show .nav-link,
.nav-tabs .nav-link.active {
  color: black !important;
  background-color: #ffffff;
  border-color: #ffffff #ffffff #369f04 #ffffff;
  border-radius: 15px 15px 0px 0px;
  border-bottom: 2px solid #369f04;
}
</style>