
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
            <router-link class="text-dark" to="/myprofilesetting">
              <div class="bg-blue-light p-2 border-bottom setting-text">
                <span class="p-1"> My Profile Setting</span>
                <span><img src="../../assets/img/ic_next_arrow_black.png" class="float-right mt-2" width="7px" alt=""></span>
              </div>
            </router-link>
            <!-- <router-link class="text-dark" to="/coachpushnotification">
              <div class="bg-blue-light p-2 border-bottom setting-text">
                  <span class="p-1">Push Notification</span>
                  <span><img src="../../assets/img/ic_next_arrow_black.png" class="float-right mt-2" width="7px" alt=""></span>
              </div>
            </router-link> -->
            <div class="font-weight-bold py-3">Help & Support</div>
            <router-link class="text-dark" to="/helpcenter">
              <div class="bg-blue-light p-2 border-bottom setting-text">
                <span class="p-1"> Help Center</span>
                <span><img src="../../assets/img/ic_next_arrow_black.png" class="float-right mt-2" width="7px" alt=""></span>
              </div>
            </router-link>
            <router-link class="text-dark" to="/faq">
              <div class="bg-blue-light p-2 border-bottom setting-text">
                <span class="p-1">FAQ</span>
                <span><img src="../../assets/img/ic_next_arrow_black.png" class="float-right mt-2" width="7px" alt=""></span>
              </div>
            </router-link>
            <router-link class="text-dark" to="/coachreportproblem">
              <div class="bg-blue-light p-2 border-bottom setting-text">
                <span class="p-1">Report a Problem</span>
                <span><img src="../../assets/img/ic_next_arrow_black.png" class="float-right mt-2" width="7px" alt=""></span>
              </div>
            </router-link>
            <div class="font-weight-bold py-3">About</div>
            <router-link class="text-dark" to="/abouttelacoach">
              <div class="bg-blue-light p-2 border-bottom setting-text">
                <span class="p-1"> About Telacoach</span>
                <span><img src="../../assets/img/ic_next_arrow_black.png" class="float-right mt-2" width="7px" alt=""></span>
              </div>
            </router-link>
            <router-link class="text-dark" to="/coachrate">
              <div class="bg-blue-light p-2 border-bottom setting-text">
                <span class="p-1">Rate Telacoach</span>
                <span><img src="../../assets/img/ic_next_arrow_black.png" class="float-right mt-2" width="7px" alt=""></span>
              </div>
            </router-link>
            <router-link class="text-dark" to="/certification">
              <div class="bg-blue-light p-2 border-bottom setting-text">
                <span class="p-1">Certification</span>
                <span><img src="../../assets/img/ic_next_arrow_black.png" class="float-right mt-2" width="7px" alt=""></span>
              </div>
            </router-link>
            <div class="font-weight-bold py-3">Legal</div>
            <router-link class="text-dark" to="/privacy">
              <div class="bg-blue-light p-2 border-bottom setting-text">
                <span class="p-1">Privacy</span>
                <span><img src="../../assets/img/ic_next_arrow_black.png" class="float-right mt-2" width="7px" alt=""></span>
              </div>
            </router-link>
            <router-link class="text-dark" to="/teamsandconditions">
              <div class="bg-blue-light p-2 border-bottom setting-text">
                <span class="p-1">Team & conditions</span>
                <span><img src="../../assets/img/ic_next_arrow_black.png" class="float-right mt-2" width="7px" alt=""></span>
              </div>
            </router-link>
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
  name: "Profilesettingcoach",
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
.setting-text {
    padding: .7rem!important;
}
a:hover {
  text-decoration: none;
}
</style>