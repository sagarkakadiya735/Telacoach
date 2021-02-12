
<template>
  <div>
    <Header />
    <div class="text-center bg-img-header py-5 header-top">
      <h2 class="font-weight-bold pt-4">Connect With User</h2>
      <div class="mx-auto border-lines mb-4"></div>
    </div>
    <div class="bg-grew-dark">
      <div class="container py-5">
        <div
          class="container box-shadow rounded mt-5 p-0 bg-white border-radius"
          style="width: 750px"
        >
          <div class="">

            <div class="row mx-3 pt-5">
                <div class="col-md-2">
                  <img :src="count.profile_image" class="float-left rounded-circle px-3" width="120px" @error="imageUrlAlt"/>
                </div>
                <div class="col-md-8 float-left">
                  <h1 class="card-title text-green">{{count.username}}</h1>
                  <h2 class="text-green">{{count.location}}</h2>
                </div>
                <div class="col-md-2 float-right">
                  <img
                    src="../../assets/img/ic_chat_icon.png"
                    alt=""
                  />
                </div>
            </div>

        <div class="row">
            <div class="px-4 card my-3 border-0 w-100 m-3">
              <div class="card-body p-0">
                <div class="p-3">
                  <div class="message">
                    <div class="font-weight-bold mt-4 text-green">
                      Your Location
                    </div>
                    <div class="user-input-wrp line-h">
                      <br />
                      <input
                        type="text" disabled v-model="count.location"
                        class="inputText border-bottom-0 w-100 p-3 pl-5 rounded boder-1 w-100 bg-blue-light"
                        placeholder="Surat"
                      />
                      <img
                        src="../../assets/img/ic_video_connect_location.png"
                        class="iocn-set set-w pt-3"
                      />
                    </div>
                    <div class="font-weight-bold mt-4 text-green">Date</div>
                    <div class="user-input-wrp line-h">
                      <br />
                      <input
                        type="text" disabled v-model="count.book_date"
                        class="inputText border-bottom-0 w-100 p-3 pl-5 rounded boder-1 w-100 bg-blue-light"
                        placeholder="02/10/2020"
                      />
                      <img
                        src="../../assets/img/ic_video_connect_calendar.png"
                        class="iocn-set set-w pt-3"
                      />
                    </div>
                    <div class="font-weight-bold mt-4 text-green">
                      Start Time
                    </div>
                    <div class="user-input-wrp line-h">
                      <br />
                      <input
                        type="text" disabled v-model="count.book_time"
                        class="inputText border-bottom-0 w-100 p-3 pl-5 rounded boder-1 w-100 bg-blue-light"
                        placeholder="5:56 AM"
                      />
                      <img
                        src="../../assets/img/ic_video_connect_clock.png"
                        class="iocn-set set-w pt-3"
                      />
                    </div>
                    <div class="font-weight-bold mt-4 text-green">End Time</div>
                    <div class="user-input-wrp line-h">
                      <br />
                      <input
                        type="text" disabled v-model="count.end_time"
                        class="inputText border-bottom-0 w-100 p-3 pl-5 rounded boder-1 w-100 bg-blue-light"
                        placeholder="6:55 AM"
                      />
                      <img
                        src="../../assets/img/ic_video_connect_clock.png"
                        class="iocn-set set-w pt-3"
                      />
                    </div>
                    
                    <div class="font-weight-bold mt-4 text-green">
                      Consultations Period
                    </div>
                    <div class="user-input-wrp line-h">
                      <br />
                      <input
                        type="text" disabled v-model="count.session_time"
                        class="inputText border-bottom-0 w-100 p-3 pl-5 rounded boder-1 w-100 bg-blue-light"
                        placeholder="Chart"
                      />
                      <img
                        src="../../assets/img/ic_video_connect_appointment.png"
                        class="iocn-set set-w pt-3"
                      />
                    </div>
                    <div class="font-weight-bold mt-4 text-green">
                      Consultations Type
                    </div>
                    <div class="user-input-wrp line-h">
                      <br />
                      <input
                        type="text"  disabled v-model="count.book_session"
                        class="inputText border-bottom-0 w-100 p-3 pl-5 rounded boder-1 w-100 bg-blue-light"
                        placeholder="1 Hour"
                      />
                      <img
                        src="../../assets/img/ic_video_connect_appointment.png"
                        class="iocn-set set-w pt-3"
                      />
                    </div>
                    <div class="font-weight-bold mt-4 text-green">Provided Number</div>
                    <div class="user-input-wrp line-h">
                      <br />
                      <input
                        type="text" disabled v-model="count.provider_number"
                        class="inputText border-bottom-0 w-100 p-3 pl-5 rounded boder-1 w-100 bg-blue-light"
                        placeholder="+91 102345879"
                      />
                      <img
                        src="../../assets/img/ic_video_connect_phone.png"
                        class="iocn-set set-w pt-2"
                      />
                    </div>
                    <div class="font-weight-bold mt-4 text-green">Alternative Number</div>
                    <div class="user-input-wrp line-h">
                      <br />
                      <input
                        type="text"  disabled v-model="count.alternative_number"
                        class="inputText border-bottom-0 w-100 p-3 pl-5 rounded boder-1 w-100 bg-blue-light"
                        placeholder="+91 102345879"
                      />
                      <img
                        src="../../assets/img/ic_video_connect_phone.png"
                        class="iocn-set set-w pt-2"
                      />
                    </div>

                    <div class="col-md-12 px-5">
                    
                    </div>
                  </div>
                  <button @click="joinEvent(count.book_session)" class="w-100 border-0 p-3 mt-3 bg-success text-center btn-green text-white border-r-bx">{{count.book_session}}</button>
                </div>
              </div>
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
import constants from "../../components/Service/constants.js";
import apiServices from "../../components/Service/apiservice";
import img from '../../assets/img/ic_requests_user_profile.png';

export default {
  name: "Videodetails",
  data() {
    return {
      disableJoin: false,
      localStream: null,
      remoteStreams: [],
      coachdata:{},
      count:{},
      userdata:[]
    };
  },
   mounted() {
     this.coachdata = JSON.parse(localStorage.getItem("Login_data"));
     this.count = JSON.parse(localStorage.getItem("count"));
     this.counts()
   },
  components: {
    Header,
    Footer,
  },
  methods:{
    imageUrlAlt(e) {
      e.target.src = img;
    },
    async  counts(){
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
          // this.ToastAlert("success", res.data.msg);
          this.userdata=res.data

        } else {
          this.ToastAlert("error", res.data.msg);
        }
       
      },
      joinEvent(id){
        if(id=='Phone Call'){
           this.$router.push("/video").catch(() => {});
           localStorage.setItem("calltype",id)
        }
        else if(id=='Video Call'){
           this.$router.push("/video").catch(() => {});
            localStorage.setItem("calltype",id)
        }
        else{
           this.$router.push("/messageChat").catch(() => {});
        }
      },

       ToastAlert(id, msg) {
      const Toast = this.$swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: false,
        // didOpen: (toast) => {
        //   toast.addEventListener('mouseenter', this.$swal.stopTimer)
        //   toast.addEventListener('mouseleave', this.$swal.resumeTimer)
        // }
      });

      Toast.fire({
        icon: id,
        title: msg,
      });
    },

 
  },
  
};
</script>