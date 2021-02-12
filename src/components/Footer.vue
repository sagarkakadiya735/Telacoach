<template>
  <div>
    <footer class="container p-1">
      <div>
        <div
          class="col-xs-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 text-center mt-3 float-left"
        >
          <a class="navbar-brand" href="#"
            ><img src="../assets/img/ic_about_telacoach_logo.png" class="w-75"
          /></a>
        </div>
        <div
          class="col-xs-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 text-center float-left"
        >
          <h5 class="text-green mb-2 mt-3 font-weight-bold">
            Quick <span class="text-dark">Links</span>
          </h5>
          <div class="my-3 cursor" v-if="NotLogin == 0">
            <router-link class="text-body font-weight-bold" to="/home">
              <a>Home</a>
            </router-link>
          </div>
          <div class="my-3 cursor" v-if="NotLogin == 0 || NotLogin == 2">
            <router-link
              class="text-body font-weight-bold"
              to="/Abouttelacoach"
            >
              <a>About Us</a>
            </router-link>
          </div>
          <div class="my-3 cursor" v-if="NotLogin == 0">
            <router-link class="text-body font-weight-bold" to="/message">
              <a>Message</a>
            </router-link>
          </div>
          <div class="my-3 cursor" v-if="NotLogin == 0">
            <router-link class="text-body font-weight-bold" to="/session">
              <a>My Sessions</a>
            </router-link>
          </div>
          <div class="my-3 cursor" v-if="NotLogin == 0 || NotLogin == 2">
            <router-link class="text-body font-weight-bold" to="/contact">
              <a>Contact</a>
            </router-link>
          </div>

          <div class="my-3 cursor" v-if="NotLogin == 1">
            <router-link class="text-body font-weight-bold" to="/requests">
              <a>Requests</a>
            </router-link>
          </div>
          <div class="my-3 cursor" v-if="NotLogin == 1">
            <router-link class="text-body font-weight-bold" to="#">
              <a>Connect with Client</a>
            </router-link>
          </div>
          <div class="my-3 cursor" v-if="NotLogin == 1">
            <router-link class="text-body font-weight-bold" to="/messageChat">
              <a>Message</a>
            </router-link>
          </div>
          <div class="my-2 cursor" v-if="NotLogin == 1">
            <router-link
              class="text-body font-weight-bold"
              to="/                                                                            "
            >
              <a>Update my Calendar</a>
            </router-link>
          </div>
          <div class="my-3 cursor" v-if="NotLogin == 1">
            <router-link
              class="text-body font-weight-bold"
              to="/mysessionhistory"
            >
              <a>My Sessions</a>
            </router-link>
          </div>
          <div class="my-3 cursor" v-if="NotLogin == 1">
            <router-link class="text-body font-weight-bold" to="/contact">
              <a>Contact</a>
            </router-link>
          </div>
        </div>
        <div
          class="col-xs-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 text-center font-weight-bold float-left"
        >
          <h5 class="text-green mb-2 mt-3 font-weight-bold">
            Get In<span class="text-dark"> Touch</span>
          </h5>
          <a :href="'https://www.facebook.com/Telacoach/?modal=admin_todo_tour'" target="_blank">
            <span><img src="./../assets/img/ic_facebook_select.png" class="m-2"/></span>
          </a>
          <a :href="'https://www.linkedin.com/company/telacoach/'" target="_blank">
            <span><img src="./../assets/img/ic_linkedin_unselect.png" class="m-2"/></span>
          </a>
          <span><img src="./../assets/img/ic_twitter_unselect.png" class="m-2"/></span>
          <span><img src="./../assets/img/ic_instagram_unselect.png" class="m-2"/></span>
        </div>
      </div>
    </footer>
  </div>
</template>  
<script>
export default {
  name: "Footer",
  data() {
    return {
      NotLogin: 2,
    };
  },
  mounted() {
    if (localStorage.getItem("Login_data") != null) {
      this.username =
        JSON.parse(localStorage.getItem("Login_data")).username +
        " " +
        JSON.parse(localStorage.getItem("Login_data")).first_name;
      this.profile_image = JSON.parse(
        localStorage.getItem("Login_data")
      ).profile_image;
      if (JSON.parse(localStorage.getItem("Login_data")).is_login == 0) {
        this.NotLogin = 0;
      } else {
        this.NotLogin = 1;
      }
    } else {
      this.NotLogin = 2;
    }
  },
};
</script>
<style></style>