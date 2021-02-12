
<template>
  <div>
    <!-- heade -->
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
              <router-link class="text-dark font-weight-bold" to="/home">
                <a class="nav-link">HOME </a>
              </router-link>
            </li>
            <!-- <li class="nav-item mx-3" v-if="NotLogin==0" >
              <router-link class="text-dark font-weight-bold" tag="li" :to="{ path: 'Abouttelacoach', params: { }}">
                <a class="nav-link">About Us</a>
              </router-link>
            </li> -->
            <li class="nav-item mx-3" v-if="NotLogin==0">
              <router-link class="text-dark font-weight-bold" tag="li" :to="{ path: 'message', params: { }}">
                <a class="nav-link">Message</a>
              </router-link>
            </li>
            <li class="nav-item mx-3" v-if="NotLogin==0">
              <router-link class="text-dark font-weight-bold" to="/session">
                <a class="nav-link">My Sessions</a>
              </router-link>
            </li>
            <li class="nav-item mx-3" v-if="NotLogin==0">
              <router-link class="text-dark font-weight-bold" to="/contact">
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
                 <router-link class="text-body font-weight-bold" to="/setting">
                <a class="dropdown-item border-bottom profile-dropdown-item">Setting</a>
                 </router-link>
                  <router-link class="text-body font-weight-bold" to="/myplans">
                <a class="dropdown-item border-bottom profile-dropdown-item">My Plan</a>
                  </router-link>
                   <router-link class="text-body font-weight-bold" to="/Community">
                <a class="dropdown-item border-bottom profile-dropdown-item">Community Room</a>
                   </router-link>
                   <router-link class="text-body font-weight-bold" to="/Profilesetting">
                <a class="dropdown-item border-bottom profile-dropdown-item">Help & Setting</a>
                   </router-link>
                <a class="dropdown-item profile-dropdown-item" v-on:click="logout()">Logout</a>
              </div>
            </li>
          </ul>
        </div>
        <div class="collapse navbar-collapse" id="navbarResponsive" v-if="NotLogin==1">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item mx-3 active">
                <router-link class="text-body font-weight-bold" to="/requests">
                <a class="nav-link">Requests </a>
                </router-link>
              </li>
              <li class="nav-item mx-3">
                <router-link v-if="book_session_time==1" class="text-body font-weight-bold" to="/connectwithclient">
                <a class="nav-link">Connect with Client 
                 <span v-if="book_session_time==1" class="set-round-count px-2 py-1"> 1 </span>
                  </a>
                 
                </router-link>
                <a v-if="book_session_time==0" class="nav-link text-body font-weight-bold" >Connect with Client 
                  </a>
              </li>
              <li class="nav-item mx-3">
                <router-link class="text-body font-weight-bold" to="/messageChat">
                <a class="nav-link">Message</a>
                </router-link>
              </li>
              <li class="nav-item mx-3">
                <router-link class="text-body font-weight-bold" to="/calendar">
                <a class="nav-link">Update my Calendar</a>
                </router-link>
              </li>
              <li class="nav-item mx-3">
                <router-link class="text-body font-weight-bold" to="/mysessionhistory">
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
                <router-link class="text-body font-weight-bold" to="/profilesettingcoach">
                <a class="dropdown-item profile-dropdown-item">My Profile</a>
                </router-link>
                <router-link class="text-body font-weight-bold" to="/mypaymentcoach">
                <a class="dropdown-item profile-dropdown-item">My Payments</a>
                </router-link>
                <a class="dropdown-item profile-dropdown-item" @click.prevent="logout()">Logout</a>
              </div>
            </li>
            </ul>
          </div>
      </div>
    </nav>
    <!-- heade -->
    <div class="text-center bg-img-header py-5 header-top">
      <h2 class="font-weight-bold pt-4">Video call</h2>
      <div class="mx-auto border-lines mb-4"></div>
    </div>

    <div class="container my-5 p-4" style="border:4px solid #36a004;border-radius: 16px;">
     <div class="p-2">
      <div class=" float-right m-4" style="width:180px;height: 220px;border:2px solid #36a004;position: absolute;z-index: 1;right: 16%;">
        <StreamPlayer :stream="localStream" :domId="localStream.getId()" v-if="localStream"></StreamPlayer>
      </div>
      <div class=" m-0" style="width: 100%;height: 440px;border:2px solid #36a004;border-radius: 16px;">
      <div class=" m-0" style="width: 100%;height: 440px;border:2px solid #36a004;border-radius: 16px;" :key="index" v-for="(remoteStream, index) in remoteStreams">
        <StreamPlayer :stream="remoteStream" :domId="remoteStream.getId()"></StreamPlayer>
      </div>
      </div>
    </div> 
    <div class="mt-4"> 
        <!-- <div class="col-4">
            <img class="w-h" src="../assets/video-icon/ic_microphone_selected.png" alt="">
        </div>
        <div class="col-4">
            <img class="w-h" src="../assets/video-icon/ic_microphone_unselected.png" alt="">
        </div>
        <div class="col-4">
            <img class="w-h" src="../assets/video-icon/ic_video_call_selected.png" alt="">
        </div>
        <div class="col-4">
            <img class="w-h" src="../assets/video-icon/ic_video_call_unselected.png" alt="">
        </div> -->
        <div class="text-center">
            <img class="w-h text-center"  @click='leaveEvent' src="../assets/video-icon/ic_reject_call.png" alt="">
        </div>
    </div>
</div>
    <Footer />
  </div>
</template>
  
<script>
import Footer from "./Footer.vue";
import StreamPlayer from "./stream-player";
import { log } from "../utils/utils";
import RTCClient from "../agora-rtc-client";
import fire from "../main";
import apiServices from "../components/Service/apiservice";

export default {
  name: "Videodetails",
  data() {
    return {
        option:{
        appid: '',
        token: '',
        uid: null,
        channel: '',
      },
    coachdata:{},
    count:{},
      disableJoin: false,
      localStream: null,
      remoteStreams: [],
    NotLogin:2,
      username:'',
      profile_image:'',
      // coachdata:{},
      book_session_time:0,
      // redbutton:0,
    };
  },
   mounted() {
     localStorage.setItem("button",0)
      // this.redbutton=localStorage.getItem("button")
      console.log(localStorage.getItem("button"),"2222222222");
        this.coachdata = JSON.parse(localStorage.getItem("Login_data"));
        this.count = JSON.parse(localStorage.getItem("count"));
        if (JSON.parse(localStorage.getItem("Login_data")).is_login==1) {
           this.option={
            appid: 'bbb963ce43574fe18cc95ad4d8a44346',
            token: null,
            uid: null,
            channel: 'telacoach-'+this.coachdata.coach_id,
          }
        }
        if (JSON.parse(localStorage.getItem("Login_data")).is_login==0) {
           this.option={
            appid: 'bbb963ce43574fe18cc95ad4d8a44346',
            token: null,
            uid: null,
            channel: 'telacoach-'+localStorage.getItem("firebasecocach_id"),
          }
          this.remove(JSON.parse(localStorage.getItem("Login_data")).user_id);
        }
       if (JSON.parse(localStorage.getItem("Login_data")).is_login==1) {
         this.firebase();
       }
    // this.remove(21);
   this.joinEvent();
    if (JSON.parse(localStorage.getItem("Login_data")).is_login==1) {
      this.vaideocallAPI();
    }

    // this.coachdata = JSON.parse(localStorage.getItem("Login_data"));
// call
const itemsRef = fire.database().ref('video_call');
     itemsRef.on('value', snapshot => {
        let data = snapshot.val();
        Object.keys(data).forEach(key => {
            if(data[key].is_connect==0){
              localStorage.setItem('firebasecocach_id',data[key].coach_id)
                if(key==this.coachdata.user_id){
                  //  this.redbutton=1
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

   },
  components: {
    Footer,
     StreamPlayer
  },
  methods: {
     firebase() {
        fire.database()
          .ref("video_call")
          .child(this.count.user_id)
          .set(
            { 
              book_date: this.count.book_date,
              book_id: this.count.book_id,
              coach_id:this.count.coach_id,
              from_book_time:this.count.book_time,
              is_connect:'0',
              is_start:'1',
              to_book_time:this.count.end_time,
              type:this.count.book_session,
              user_id:this.count.user_id 
              })
          .then(() => {
            console.log("Document successfully written!");
          })
          .catch((error) => {
            console.error("Error writing document: ", error);
          });
    },
    remove(key) {
      fire.database()
          .ref("video_call")
          .child(key)
          .remove()
          .then(function() {
              console.log("Document successfully deleted!");
          }).catch(function(error) {
              console.error("Error removing document: ", error);
          });
    },
     async vaideocallAPI() {
     var param = 
        "lang=" + "0"+
        "&user_id=" + this.count.user_id+
        "&access_token=" + this.coachdata.access_token+
        "&flag_view=" + "1"+
        "&coach_id=" + this.count.coach_id;
      let res = await apiServices.makeAPICall(apiServices.postMethod,apiServices.URL + apiServices.video_callAPI,param,() => {});
      if(res.data.flag == 1) {
        // this.teams_data = res.data.data.terms_conditions_content
      }
      else {
        this.ToastAlert('error',res.data.msg)
      }
    },
    joinEvent () {
      console.log(this.option,"this.option");
      if(!this.option.appid) {
        this.judge('Appid')
        return
      }
      if(!this.option.channel) {
        this.judge('Channel Name')
        return
      }
      this.rtc.joinChannel(this.option).then(() => {
        this.$message({
          message: 'Join Success',
          type: 'success'
        });
        this.rtc.publishStream().then((stream) => {
          this.$message({
            message: 'Publish Success',
            type: 'success'
          });
          this.localStream = stream
        }).catch((err) => {
          // this.$message.error('Publish Failure');
          log('publish local error', err)
        })
      }).catch((err) => {
        // this.$message.error('Join Failure');
        log('join channel error', err)
      })
      this.disableJoin = true
    },
    leaveEvent () {
      this.disableJoin = false
      this.rtc.leaveChannel().then(() => {
        this.$message({
          message: 'Leave Success',
          type: 'success'
        });
      }).catch((err) => {
        this.$message.error('Leave Failure')
        log('leave error', err)
      })
      this.localStream = null
      this.remoteStreams = []
       if (localStorage.getItem("Login_data") != null) {
        if (JSON.parse(localStorage.getItem("Login_data")).is_login == 0) {
          this.$router.push("/home").catch(() => {});
        } else {
          this.$router.push("/requests");
        }
      } else {
        this.$router.push("/login").catch(() => {});
      }
    },
    judge(detail) {
      this.$notify({
        title: 'Notice',
        message: `Please enter the ${detail}`,
        position: 'top-left',
        type: 'warning'
      });
    },
     calling(id){
        if(id=='call'){
          //  this.redbutton=0
          this.$router.push("/video").catch(() => {});
        }
        else if(id=='cut')
        {
          // this.redbutton=0
        }
         
        },
     
    logout(){
      localStorage.clear();
       this.$router.push("/");
    }
  },
  created() {
    this.rtc = new RTCClient()
    let rtc = this.rtc
    rtc.on('stream-added', (evt) => {
      let {stream} = evt
      log("[agora] [stream-added] stream-added", stream.getId())
      rtc.client.subscribe(stream)
    })
      
    rtc.on('stream-subscribed', (evt) => {
      let {stream} = evt
      log("[agora] [stream-subscribed] stream-added", stream.getId())
      if (!this.remoteStreams.find((it) => it.getId() === stream.getId())) {
        this.remoteStreams.push(stream)
      }
    })

    rtc.on('stream-removed', (evt) => {
      let {stream} = evt
      log('[agora] [stream-removed] stream-removed', stream.getId())
      this.remoteStreams = this.remoteStreams.filter((it) => it.getId() !== stream.getId())
    }) 

    // rtc.on('peer-online', (evt) => {
    //   this.$message(`Peer ${evt.uid} is online`)
    // }) 

    // rtc.on('peer-leave', (evt) => {
    //   this.$message(`Peer ${evt.uid} already leave`)
    //   this.remoteStreams = this.remoteStreams.filter((it) => it.getId() !== evt.uid)
    // }) 
  }
};
</script>
<style scoped>
 .agora-title {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    font-size: 32px;
    font-weight: bold;
    text-align: center;
    color: #2c3e50;
  }
  .agora-view {
    display: flex;
    flex-wrap: wrap;
  }
  .agora-video {
    width: 320px;
    height: 240px;
    margin: 20px;
  }
  .agora-input {
    margin: 20px;
    width: 320px;
  }
  .agora-text {
    margin: 5px;
    font-size: 16px;
    font-weight: bold;
  }
  .agora-button {
    display: flex;
    width: 160px;
    justify-content: space-between;
    margin: 20px;
  }
  .agora-video {
    width: 320px;
    height: 240px;
  }
  .w-h{
      /* width: 100px; */
      height: 50px;
  }
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
</style>