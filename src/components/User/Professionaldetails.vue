
<template>
<div>
<Header />
 <div class="container py-5 header-top bg-image">
        <div class="row pb-5">
        <div class="col-md-7">
          <Leftsidetwo />
          </div>
          <div class="col-md-5">
            <div class="box-shadow login-b-radius">
              <div class="container">
            
            
              <div class="text-green mt-4 mb-5">
               <router-link class="text-green" to="/">
              <img class="width-back-icon" src="../../assets/img/ic_green_back.png" alt="">
              <span class="px-3 font-weight-bold">
              Back
              </span>
               </router-link>
              </div>
                <div class="text-center">
                  <h3 class="font-weight-bold text-green text-left">Professional Details</h3>
                <div class="user-input-wrp">
                  <br />
                  <input type="text" class="inputText bor-ra bor-ras w-100 p-3" placeholder="Enter here .." required />
                  <span class="floating-label bg-white-color px-2 text-muted deafult-height">Professional History Achievement</span>
                </div>
                <div class="user-input-wrp">
                  <br />
                  <select class="custom-select py-2 h-55 inputText bor-ra text-muted">
                    <option selected>Select eduction here</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                  <span class="floating-label bg-white-color px-2 text-muted deafult-height">Education Background</span>
                </div>
                <div class="user-input-wrp">
                  <br />
                  <input type="text" class="inputText bor-ra bor-ras w-100 p-3" placeholder="Enter here .." required />
                  <span class="floating-label bg-white-color px-2 text-muted deafult-height">Qualifications</span>
                </div>
                <div class="user-input-wrp">
                  <br />
                  <input type="text" class="inputText bor-ra bor-ras w-100 p-3" placeholder="Enter here .." required />
                  <span class="floating-label bg-white-color px-2 text-muted deafult-height">Specialization</span>
                </div>
                <div class="user-input-wrp">
                  <br />
                  <input type="text" class="inputText bor-ra bor-ras w-100 p-3" placeholder="Enter Your description.." required />
                  <span class="floating-label bg-white-color px-2 text-muted deafult-height">Description about yourself</span>
                </div>
                <div class="h6 text-left pt-3 text-green font-weight-bold">Certifications</div>
                <div class="set-boder w-25 my-2 py-2">
                    <img src="../../assets/img/ic_certifications.png" alt="">
                    <div class="text-muted message-time">Add certificate</div>
                </div>
                <div class="user-input-wrp">
                  <br />
                  <input type="text" class="inputText bor-ra bor-ras w-100 p-3" placeholder="Enter here.." required />
                  <span class="floating-label bg-white-color px-2 text-muted deafult-height">Certifications</span>
                </div>
                </div>
               
                <div class="p-3 bg-success font-weight-bold text-center rounded btn-green text-white my-5">
                  NEXT
                </div>
                
              
              </div>
            </div>
          </div>
        </div>
      </div>
       <Footer/>
</div>    
</template>
  
<script>
import Header from "../Header.vue";
import Footer from "../Footer.vue";
import Leftsidetwo from "../Leftsidetwo.vue";

export default {
  name: "professionaldetails",
  data() {
    return {};
  },
    components: {
    Header,
    Footer,
    Leftsidetwo
  },
};
</script>
<style>
.deafult-height{
  top: 15px !important;
  font-size: 13px !important;
}
.custom-select {
    background: #fff url("../../assets/img/ic_down.png") no-repeat right .75rem center/15px 10px;
}
.set-boder{
    border: 2px dashed  #ccc;
    border-radius: 8px;
}
.bor-ras{
        border: 2px solid #ccc !important;
}
</style>