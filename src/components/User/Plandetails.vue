
<template>
  <div>
    <Header />
       <div class="text-center bg-img-header py-5 header-top">
      <h2 class="font-weight-bold pt-4">My Plan</h2>
      <div class="mx-auto border-lines mb-4"></div>
    </div>
     <div class="requests-bg-light-grew pt-3 pb-5">
        <div class="container pb-5">
            <div class="container box-shadow border-rounde mt-5 p-0 bg-white" style="width: 750px">
                <div class="">
                    <div class="px-4 pt-4 font-weight-bold">
                       <router-link class="text-dark font-weight-bold" to="/myplans">
                        <div class="float-left">
                            <img src="../../assets/img/ic_back_arrow.png" width="25" class="mr-3"/>Back
                        </div>
                       </router-link>
                    </div>
                    <div class="text-center h5 text-center font-weight-bold  pr-100 mb-0 pb-4">Plan Details</div>
                   <div class="bg-green-light text-center set-py text-green" >
                    {{Plan_Deatils.price}}
                   </div>
                   <div class="p-3 bg-blue-light pl-4">
                     <div class="py-2">
                    <h6 class="text-green font-weight-bold">Session Time</h6>
                   <div class="ml-3 font-w">   {{Plan_Deatils.session_time}}</div>
                     </div>
                     
                   <div class="py-2">
                    <h6 class="text-green font-weight-bold">Number of Session</h6>
                   <div class="ml-3 font-w">{{Plan_Deatils.session}}</div>
                   </div>
                   
                   <div class="py-2">
                    <h6 class="text-green font-weight-bold">Start Time</h6>
                   <div class="ml-3 font-w">{{Plan_Deatils.book_time}}</div>
                   </div>
                   
                   <div class="py-2">
                    <h6 class="text-green font-weight-bold">End Time</h6>
                   <div class="ml-3 font-w">{{Plan_Deatils.end_time}}</div>
                   </div>
                   
                   </div>
                   
                </div>
               <div class="text-red font-weight-bold text-center p-3 h4">Session Has Ended</div>
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
      Plan_Deatils:{},
    };
  },
  components: {
    Header,
    Footer,
  },
   mounted() {
    this.Plan_Deatils = JSON.parse(localStorage.getItem("PlanDeatils"));
   },
};
</script>
<style>

</style>