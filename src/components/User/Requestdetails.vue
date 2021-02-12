
<template>
  <div>
    <Header />
    <div class="text-center bg-img py-5 header-top">
      <h2 class="font-weight-bold pt-4">Requests</h2>
      <div class="mx-auto border-lines mb-4"></div>
    </div>
    <div class="requests-bg-light-grew pt-3 pb-5">
        <div class="container pb-5">
            <div class="container box-shadow border-rounde mt-5 p-0 bg-white" style="width: 750px">
                <div class="">
                    <div class="px-4 pt-4 font-weight-bold">
                        <div class="float-left">
                           <router-link class="text-dark font-weight-bold" to="/requests">
                            <img src="../../assets/img/ic_back_arrow.png" width="25" class="mr-3"/>Back
                           </router-link>
                        </div>
                    </div>
                    <div class="text-center h5 text-center font-weight-bold border-bottom pr-100 pb-2">Request Details</div>
                    <div class="px-4">
                        <div class="card-body p-0">
                            <div class="pt-3 pb-3">
                            <img src="../../assets/img/avatar6.png" class="float-left rounded-circle-request-detail" />
                            <div class="message request-details-msg pt-2">
                                <h6 class="card-title"><b> Wallace Chuck </b></h6>
                                <p class="card-text text-green"><b> Boston </b></p>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div class="px-4">
                        <h6 class="text-green my-3 font-weight-bold">Location</h6>
                        <input type="text" class="form-control text-muted text-location py-2 pt-4 pb-4 bg-blue-light" value="Boston">
                    </div>
                    <div class="px-4">
                        <h6 class="text-green my-3 font-weight-bold">Date</h6>
                        <input type="text" class="form-control text-muted text-date py-2 pt-4 pb-4 bg-blue-light" value="02/10/2020">
                    </div>
                    <div class="px-4">
                        <h6 class="text-green my-3 font-weight-bold">Start Time</h6>
                        <input type="text" class="form-control text-muted text-time py-2 pt-4 pb-4 bg-blue-light" value="05:00 AM">
                    </div>
                    <div class="px-4">
                        <h6 class="text-green my-3 font-weight-bold">End Time</h6>
                        <input type="text" class="form-control text-muted text-time py-2 pt-4 pb-4 bg-blue-light" value="06:00 AM">
                    </div>
                    <div class="px-4">
                        <h6 class="text-green my-3 font-weight-bold">Consultation Period</h6>
                        <input type="text" class="form-control text-muted text-period py-2 pt-4 pb-4 bg-blue-light" value="1 Hour">
                    </div>
                </div>
                 <router-link class="text-green font-weight-bold" to="/mysessionhistory">
                <button class="mx-auto w-50 border-0 p-3 mt-3 bg-success text-center btn-green text-white border-bottom-left-radius">ACCEPT</button>
                </router-link>
                <router-link class="text-green font-weight-bold" to="/requests">
                <button class="mx-auto w-50 border-0 p-3 mt-3 bg-red text-center btn-danger text-white border-bottom-right-radius">CANCEL</button>
                </router-link>
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
  name: "Requestdetails",
  data() {
    return {};
  },
  components: {
    Header,
    Footer,
  },
};
</script>
<style>
  @import "../../assets/css/custom1.css";
</style>