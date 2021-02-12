
<template>
  <div>
    <Header />
       <div class="text-center bg-img-header py-5 header-top">
      <h2 class="font-weight-bold pt-4">Invoice Details</h2>
      <div class="mx-auto border-lines mb-4"></div>
    </div>
     <div class="requests-bg-light-grew pt-3 pb-5">
        <div class="container pb-5">
            <div class="container box-shadow border-rounde mt-5 p-0 bg-white" style="width: 750px">
                <div class="">
                    <div class="px-4 pt-4 pb-4 font-weight-bold">
                      <router-link class="text-dark" to="/Invoice">
                        <div class="float-left">
                          <img src="../../assets/img/ic_back_arrow.png" width="25" class="mr-3"/>Back
                        </div>
                      </router-link>
                      <router-link to="/home">
                        <div class="float-right">
                          <img src="../../assets/img/ic_logo.png" width="100" />
                        </div>
                      </router-link>
                      <div class="text-center h5 text-center font-weight-bold pr-100 mb-0">Invoice Details</div>
                    </div>
                   <div class="bg-green-light text-center set-py text-green" >
                    {{userdatas.price}}
                   </div>
                   <div class="p-3 pl-4">
                     <div class="py-2">
                    <h6 class="text-green font-weight-bold">Coach Name</h6>
                   <div class="ml-3 font-w"> {{userdatas.user_name}}</div>
                     </div>
                     <div class="py-2">
                    <h6 class="text-green font-weight-bold">Session Time</h6>
                   <div class="ml-3 font-w"> {{userdatas.session_time}}</div>
                     </div>
                     
                   <div class="py-2">
                    <h6 class="text-green font-weight-bold">Number of Session</h6>
                   <div class="ml-3 font-w">{{userdatas.session}}</div>
                   </div>
                   
                   <div class="py-2">
                    <h6 class="text-green font-weight-bold">Start Time</h6>
                   <div class="ml-3 font-w">{{userdatas.payment_time}}</div>
                   </div>
                   
                   <div class="py-2">
                    <h6 class="text-green font-weight-bold">End Time</h6>
                   <div class="ml-3 font-w">{{userdatas.end_time}}</div>
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

export default {
  name: "Plandetails",
  data() {
    return {
      userdatas:{}
    };
  },
   mounted() {
     this.userdatas = JSON.parse(localStorage.getItem("invoice"));
   },
  components: {
    Header,
    Footer,
  },
};
</script>
<style>

</style>