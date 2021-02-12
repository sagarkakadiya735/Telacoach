<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light static-top" id="navbar">
      <div class="container">
        <a class="navbar-brand">
           <router-link to="/home">
          <img class="ws-100" src="../assets/img/ic_about_telacoach_logo.png"/>
           </router-link>
          </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item mx-3 active" v-if="NotLogin==0">
              <router-link class="text-dark font-weight-bold" :class="activeClass('/home')" to="/home">
                <a class="nav-link">Home </a>
              </router-link>
            </li>
            <!-- <li class="nav-item mx-3" v-if="NotLogin==0" >
              <router-link class="text-dark font-weight-bold" tag="li" :to="{ path: 'Abouttelacoach', params: { }}">
                <a class="nav-link">About Us</a>
              </router-link>
            </li> -->
            <li class="nav-item mx-3" v-if="NotLogin==0">
              <router-link class="text-dark font-weight-bold" :class="activeClass('/message')" tag="li" :to="{ path: 'message', params: { }}">
                <a class="nav-link">Message</a>
              </router-link>
            </li>
            <li class="nav-item mx-3" v-if="NotLogin==0">
              <router-link class="text-dark font-weight-bold" :class="activeClass('/session')" to="/session">
                <a class="nav-link">My Sessions</a>
              </router-link>
            </li>
            <li class="nav-item mx-3" v-if="NotLogin==0">
              <router-link class="text-dark font-weight-bold" :class="activeClass('/contact')" to="/contact">
                <a class="nav-link">Contact</a>
              </router-link>
            </li>
            <li class="nav-item mx-3" v-if="NotLogin==2">
              <a class="nav-link px-0">
                <router-link class="text-dark font-weight-bold" to="/">
                  <button
                    class="px-3 ml-3 bg-white text-green border-green py-1"
                  >
                    Login
                  </button>
                </router-link>
              </a>
            </li>
            <li class="nav-item dropdown border-left" v-if="NotLogin==0">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                {{username}}
                <img class="user-account-icon" v-if="profile_image!=''" v-bind:src="profile_image" />
                <img class="user-account-icon" v-if="profile_image==''" src="../assets/img/ic_user_chat_big_splash_holder@2x.png" />
              </a>
              <div class="dropdown-menu profile-dropdown" aria-labelledby="navbarDropdown">
                 <!-- <router-link class="text-body font-weight-bold" to="/report">
                <a class="dropdown-item border-bottom profile-dropdown-item">Setting</a>
                 </router-link> -->
                  <router-link class="text-body font-weight-bold" to="/myplans">
                <a class="dropdown-item border-bottom profile-dropdown-item">My Plan</a>
                  </router-link>
                   <router-link class="text-body font-weight-bold" to="/Community">
                <a class="dropdown-item border-bottom profile-dropdown-item">Community Room</a>
                   </router-link>
                   <router-link class="text-body font-weight-bold" to="/Profilesetting">
                <a class="dropdown-item border-bottom profile-dropdown-item">Help & Settings</a>
                   </router-link>
                <a class="dropdown-item profile-dropdown-item" v-on:click="logout()">Logout</a>
              </div>
            </li>
            <li v-if="redbutton==1">
              <img class="w-h text-center px-2" v-on:click="calling('call')"  src="../assets/video-icon/btn_startcall_normal.png" alt="">
              <img class="w-h text-center px-2"  v-on:click="calling('cut')" src="../assets/video-icon/ic_reject_call.png" alt="">
            </li>
          </ul>
        </div>
        <div class="collapse navbar-collapse" id="navbarResponsive" v-if="NotLogin==1">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item mx-3">
                <router-link class="text-body font-weight-bold" :class="activeClass('/requests')" to="/requests">
                <a class="nav-link">Requests </a>
                </router-link>
              </li>
              <li class="nav-item mx-3">
                <router-link v-if="book_session_time==1" class="text-body font-weight-bold" :class="activeClass('/connectwithclient')" to="/connectwithclient">
                <a class="nav-link">Connect with Client 
                 <span v-if="book_session_time==1" class="set-round-count px-2 py-1"> 1 </span>
                  </a>
                 
                </router-link>
                <a v-if="book_session_time==0" class="nav-link font-weight-bold" >Connect with Client 
                  </a>
              </li>
              <li class="nav-item mx-3">
                <router-link class="text-body font-weight-bold" :class="activeClass('/messageChat')" to="/messageChat">
                <a class="nav-link">Message</a>
                </router-link>
              </li>
              <li class="nav-item mx-3">
                <router-link class="text-body font-weight-bold" :class="activeClass('/calendar')" to="/calendar">
                <a class="nav-link">Update my Calendar</a>
                </router-link>
              </li>
              <li class="nav-item mx-3">
                <router-link class="text-body font-weight-bold" :class="activeClass('/mysessionhistory')" to="/mysessionhistory">
                <a class="nav-link">My Session</a>
                </router-link>
              </li>
              <li class="nav-item dropdown border-left" v-if="NotLogin==1">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                {{username}}
                 <img class="user-account-icon" v-if="profile_image!=''" v-bind:src="profile_image" />
                <img class="user-account-icon" v-if="profile_image==''" src="../assets/img/ic_user_chat_big_splash_holder@2x.png" />
              </a>
              <div class="dropdown-menu profile-dropdown" aria-labelledby="navbarDropdown">
                <router-link class="text-body font-weight-bold" :class="activeClass('/profilesettingcoach')" to="/profilesettingcoach">
                  <a class="dropdown-item profile-dropdown-item">My Profile</a>
                </router-link>
                <router-link class="text-body font-weight-bold" :class="activeClass('/mypaymentcoach')" to="/mypaymentcoach">
                  <a class="dropdown-item profile-dropdown-item">My Payments</a>
                </router-link>
                <a class="dropdown-item profile-dropdown-item" @click.prevent="logout()">Logout</a>
              </div>
            </li>
            </ul>
          </div>
      </div>
    </nav>
  </div>
</template>
  
<script>
import apiServices from "../components/Service/apiservice";
import constants from "../components/Service/constants.js";
import fire from "../main";

export default {
  name: "Header",
  data() {
    return {
      NotLogin:2,
      username:'',
      profile_image:'',
      coachdata:{},
      book_session_time:0,
      redbutton:0,
      currentLink: location.href,
    };
  },
  mounted() {
 this.coachdata = JSON.parse(localStorage.getItem("Login_data"));
// call
const itemsRef = fire.database().ref('video_call');
     itemsRef.on('value', snapshot => {
        let data = snapshot.val();
        Object.keys(data).forEach(key => {
            if(data[key].is_connect==0){
              localStorage.setItem('firebasecocach_id',data[key].coach_id)
                if(key==this.coachdata.user_id){
                   this.redbutton=1
                  //  localStorage.setItem("button",1)
                  //  this.redbutton=localStorage.getItem("button")
                  //  console.log(localStorage.getItem("button"),"11111111");
                }
              // console.log(this.redbutton,".....................................");
            }
        });
    });
// call

    
    if(localStorage.getItem("Login_data")!=null){
      this.username=JSON.parse(localStorage.getItem("Login_data")).username+" "+JSON.parse(localStorage.getItem("Login_data")).first_name;
      this.profile_image=JSON.parse(localStorage.getItem("Login_data")).profile_image;
        if(JSON.parse(localStorage.getItem("Login_data")).is_login==0){
          this.NotLogin=0;
        }
        else
        {
           this.NotLogin=1;
        }
      }
      else
      {
        this.NotLogin=2;
      }
      if(JSON.parse(localStorage.getItem("Login_data"))!=null){
        if (JSON.parse(localStorage.getItem("Login_data")).is_login==1){
                this.count()
              }
      }
  },
created() {
   if(JSON.parse(localStorage.getItem("Login_data"))!=null){
  if (JSON.parse(localStorage.getItem("Login_data")).is_login==1) {
    this.interval = setInterval(() => this.count(), 60000);
  }
   }
},
  methods:{
    activeClass(segment) {
      return segment == this.$router.currentRoute.path ? 'active' : '';
    },
    calling(id){
      if(id=='call'){
          this.redbutton=0
        this.$router.push("/video").catch(() => {});
      }
      else if(id=='cut')
      {
        this.redbutton=0
      }
         
    },
     async  count(){
     
           var param =
          "lang=" +"0" +
          "&user_id=" +this.coachdata.coach_id +
          "&access_token=" +this.coachdata.access_token +
          "&flag_view=" +1 +
          "&timezone=" +constants.timezone;


        let res = await apiServices.makeAPICall(
          apiServices.postMethod,
          apiServices.URL + apiServices.counter_dataAPI,
          param,
          () => {}
        );
        if (res.data.flag == 1) {
          this.book_session_time=res.data.data.book_session_time;
          if(res.data.data.book_session_time==1){
            localStorage.setItem("count",JSON.stringify(res.data.data))
          }
          
        }else
        {
          this.book_session_time=0
        }
       
      },
    logout(){
      localStorage.clear();
       this.$router.push("/");
    }

  }
};
</script>
<style>
.dropdown-menu.profile-dropdown.show{
  padding: 0;
  box-shadow: 3px 3px 11px 4px #eee;
  border-radius: 7px;
}
a.dropdown-item.profile-dropdown-item{
    padding: 0.5rem 1.5rem !important;
    border-bottom: 1px solid beige;
}
.dropdown-item:focus, .dropdown-item:hover {
    color: #FFF;
    background-color: #369f04;
}
img.user-account-icon {
    width: 35px;
    border: 3px solid #66b640;
    border-radius: 50%;
    height: 35px;
}
.dropdown-item:active {
    background-color: #369f04 !important;
}
.set-round-count{
      background-color: #36a004;
    color: white;
    border-radius: 50%;
}
.w-h{
    /* width: 100px; */
    height: 40px;
}
.navbar-light .navbar-nav .active>.nav-link {
  color: #369f04;
}
.router-link-active .dropdown-item{
  background-color: #369f04 !important;
  color: #fff;
}
</style>