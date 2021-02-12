
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
          <div class="p-4">
              <div class="font-weight-bold py-3">Account</div>
               <router-link class="text-dark" to="/Accountsetting">
              <div class="bg-blue-light p-2 border-bottom py-3">
                  <span class="p-2"> Account Setting</span>
                  <span><img src="../../assets/img/ic_next_arrow_black.png" class="float-right mt-1" width="10px" alt=""></span>
              </div>
               </router-link>
            <!-- <router-link class="text-dark" to="/Accountsetting">
              <div class="bg-blue-light p-2 border-bottom py-3">
                  <span class="p-2">Pin & Touch ID</span>
                  <span><img src="../../assets/img/ic_next_arrow_black.png" class="float-right mt-1" width="10px" alt=""></span>
              </div>
               </router-link>
            <router-link class="text-dark" to="/Pushnotification">
              <div class="bg-blue-light p-2 border-bottom py-3">
                  <span class="p-2">Push Notification</span>
                  <span><img src="../../assets/img/ic_next_arrow_black.png" class="float-right mt-1" width="10px" alt=""></span>
              </div>
               </router-link> -->
               <div class="font-weight-bold py-3">Help & Support</div>
                 <router-link class="text-dark" to="/Helpcenter">
               <div class="bg-blue-light p-2 border-bottom py-3">
                  <span class="p-2"> Help Center</span>
                  <span><img src="../../assets/img/ic_next_arrow_black.png" class="float-right mt-1" width="10px" alt=""></span>
              </div>
               </router-link>
            <router-link class="text-dark" to="/Faq">
              <div class="bg-blue-light p-2 border-bottom py-3">
                  <span class="p-2">FAQ</span>
                  <span><img src="../../assets/img/ic_next_arrow_black.png" class="float-right mt-1" width="10px" alt=""></span>
              </div>
               </router-link>
            <router-link class="text-dark" to="/Report">
              <div class="bg-blue-light p-2 border-bottom py-3">
                  <span class="p-2">Report a Problem</span>
                  <span><img src="../../assets/img/ic_next_arrow_black.png" class="float-right mt-1" width="10px" alt=""></span>
              </div>
               </router-link>
               <div class="font-weight-bold py-3">About</div>
                <router-link class="text-dark" to="/Abouttelacoach">
               <div class="bg-blue-light p-2 border-bottom py-3">
                  <span class="p-2"> About Telacoach</span>
                  <span><img src="../../assets/img/ic_next_arrow_black.png" class="float-right mt-1" width="10px" alt=""></span>
              </div>
               </router-link>
            <router-link class="text-dark" to="/Rateapp">
              <div class="bg-blue-light p-2 border-bottom py-3">
                  <span class="p-2">Rate Telacoach</span>
                  <span><img src="../../assets/img/ic_next_arrow_black.png" class="float-right mt-1" width="10px" alt=""></span>
              </div>
              </router-link>
               <!-- <div class="font-weight-bold py-3">Legal</div>
                <router-link class="text-dark" to="/Privacy">
               <div class="bg-blue-light p-2 border-bottom py-3">
                  <span class="p-2">Privacy</span>
                  <span><img src="../../assets/img/ic_next_arrow_black.png" class="float-right mt-1" width="10px" alt=""></span>
              </div>
              </router-link>
            <router-link class="text-dark" to="/Teamsandconditions">
              <div class="bg-blue-light p-2 border-bottom py-3">
                  <span class="p-2">Terms & Conditions</span>
                  <span><img src="../../assets/img/ic_next_arrow_black.png" class="float-right mt-1" width="10px" alt=""></span>
              </div>
            </router-link> -->
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
  name: "Profilesetting",
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
.nav-tabs .nav-item.show .nav-link,
.nav-tabs .nav-link.active {
  color: #369f04 !important;
  background-color: #f7f7f7;
  border-color: #f7f7f7 #ccc #369f04 #f7f7f7;
}
</style>