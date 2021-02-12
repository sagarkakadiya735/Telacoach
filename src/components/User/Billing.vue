
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
                       <router-link class="text-dark font-weight-bold" to="/Accountsetting">
                        <div class="float-left">
                            <img src="../../assets/img/ic_back_arrow.png" width="25" class="mr-3"/>Back
                        </div>
                       </router-link>
                    </div>
                    <!-- <div class="text-center h5 text-center font-weight-bold border-bottom pr-100 mb-0 pb-4">Personal Details</div> -->
                    <div class="text-center h5 text-center font-weight-bold border-bottom pr-100 mb-0 pb-4">Billing & Payment Information</div>
                  <div class="message px-5 py-2">
                    <span class="text-green font-weight-bold">Billing address</span>
                    <!-- <span class="float-right text-green font-weight-bold">Edit</span> -->
                    <textarea type="text" v-model="userdata.billing_address" class="inputText bor-ra w-100 p-2 bg-blue-light" cols="30" rows="4" placeholder="Enter here..." ></textarea>
                     <p class="red-color-font-s mb-0" v-if="billaddress!=''">{{billaddress}}</p>
                    <div class=" my-4">
                        <span class="text-green font-weight-bold">Payment Method</span>
                        <input type="text" disabled v-model="userdata.payment_method" class="inputText bor-ra w-100 p-2 bg-blue-light" placeholder="Enter here..." />
                    </div>
                  </div>
                </div>
                 <!-- <router-link class="text-dark font-weight-bold" to="/Accountsetting"> -->
               <button v-on:click="EditBill()" class="mx-auto w-100 border-0 p-3 mt-3 bg-success text-center btn-green text-white border-r-bx text-uppercase">Submit</button>
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
import constants from "../../components/Service/constants.js";

export default {
  name: "Billing",
  data() {
    return {
      userdata:{},
      userdatas:{},
      billaddress:'',
    };
  },
    mounted() {
     this.userdatas = JSON.parse(localStorage.getItem("Login_data"));
     this.BillingAPI();
   },
  components: {
    Header,
    Footer,
  },
   methods:{
   async BillingAPI(){
        var param = 
        "lang=" + "0"+
        "&user_id=" + this.userdatas.user_id+
        "&access_token=" + this.userdatas.access_token+
        "&flag_view=" + '0';
        let res = await apiServices.makeAPICall(apiServices.postMethod,apiServices.URL + apiServices.billing_payment_informationAPI,param,() => {});
        if(res.data.flag==1){
          console.log(res.data.data,"res.data.data");
          this.userdata = res.data.data
          // this.change_pass=res.data.data
          }
        else
          {
            this.ToastAlert('error',res.data.msg)
          }
    },
   async EditBill(){
    this.billaddress=''
         if (!this.userdata.billing_address) {
          this.billaddress =constants.address;
         } 
          if (this.billaddress == "" 
          )
          {
             var param = 
              "lang=" + "0"+
              "&user_id=" + this.userdatas.user_id+
              "&access_token=" + this.userdatas.access_token+
              "&billing_address=" + this.userdata.billing_address+
              "&bill_payment_id=" + this.userdata.bill_payment_id+
              "&flag_view=" + 1;
              let res = await apiServices.makeAPICall(apiServices.postMethod,apiServices.URL + apiServices.billing_payment_informationAPI,param,() => {});
              if(res.data.flag==1){ 
                this.ToastAlert('success',res.data.msg)
                 this.$router.push("/Accountsetting");
                }
              else
                {
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

</style>