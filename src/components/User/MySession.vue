
<template>
  <div>
    <Header />
    <div class="text-center bg-img-header py-5 header-top">
      <h2 class="font-weight-bold pt-4">My Session History</h2>
      <div class="mx-auto border-lines mb-4"></div>
    </div>
    <div class="bg-grew-dark">
      <div class="container py-5">
        <div
          class="container box-shadow rounded mt-5 p-0 bg-white border-radius"
          style="width: 750px"
        >
          <div class="">
            <div class="px-4 pt-4 font-weight-bold">
               <router-link class="text-dark" to="/session">
              <div class="float-left">
                <img
                  src="../../assets/img/ic_back_arrow.png"
                  width="25"
                  class="mr-3"
                />Back
              </div>
               </router-link>
            </div>
            <div
              class="text-center h3 text-center font-weight-bold border-bottom pr-100 pb-2"
            >
             <span v-if="session.book_session=='Phone Call'">Phone</span>
             <span v-if="session.book_session=='Video Call'">Video</span>
             <span v-if="session.book_session=='Text Chat'">Text</span>  Connect Details
            </div>

            <div class="row mx-3 pt-3">
                <div class="col-md-2">
                  <img
                   :src="session.profile_image"
                    class="float-left rounded-circle px-3"
                    width="120px"  height="90px"
                  />
                </div>
                <div class="col-md-8 float-left">
                  <h5 class="card-title text-green">{{session.coach_name}}</h5>
                  <p class="card-text">
                   {{session.category_name}}
                  </p>
                </div>
                <div class="col-md-2 float-right">
                  <img v-on:click="chat()"
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
                        type="text" disabled v-model="session.location"
                        class="inputText border-bottom-0 w-100 p-3 pl-5 rounded boder-1 w-100 bg-blue-light"
                        placeholder="Surat"
                      />
                      <img
                        src="./../../assets/img/ic_video_connect_location.png"
                        class="iocn-set set-w pt-3"
                      />
                    </div>
                    <div class="font-weight-bold mt-4 text-green">Date</div>
                    <div class="user-input-wrp line-h">
                      <br />
                      <input disabled v-model="session.book_date"
                        type="text"
                        class="inputText border-bottom-0 w-100 p-3 pl-5 rounded boder-1 w-100 bg-blue-light"
                        placeholder="02/10/2020"
                      />
                      <img
                        src="./../../assets/img/ic_video_connect_calendar.png"
                        class="iocn-set set-w pt-3"
                      />
                    </div>
                    <div class="font-weight-bold mt-4 text-green">
                      Start Time
                    </div>
                    <div class="user-input-wrp line-h">
                      <br />
                      <input
                        type="text" disabled v-model="session.book_time"
                        class="inputText border-bottom-0 w-100 p-3 pl-5 rounded boder-1 w-100 bg-blue-light"
                        placeholder="5:56 AM"
                      />
                      <img
                        src="./../../assets/img/ic_video_connect_clock.png"
                        class="iocn-set set-w pt-3"
                      />
                    </div>
                    <div class="font-weight-bold mt-4 text-green">End Time</div>
                    <div class="user-input-wrp line-h">
                      <br />
                      <input
                        type="text" disabled v-model="session.end_time"
                        class="inputText border-bottom-0 w-100 p-3 pl-5 rounded boder-1 w-100 bg-blue-light"
                        placeholder="6:55 AM"
                      />
                      <img
                        src="./../../assets/img/ic_video_connect_clock.png"
                        class="iocn-set set-w pt-3"
                      />
                    </div>
                    <div class="font-weight-bold mt-4 text-green">
                      Consultations Type
                    </div>
                    <div class="user-input-wrp line-h">
                      <br />
                      <input disabled v-model="session.book_session"
                        type="text"
                        class="inputText border-bottom-0 w-100 p-3 pl-5 rounded boder-1 w-100 bg-blue-light"
                        placeholder="1 Hour"
                      />
                      <img
                        src="./../../assets/img/ic_video_connect_appointment.png"
                        class="iocn-set set-w pt-3"
                      />
                    </div>
                    <div class="font-weight-bold mt-4 text-green">
                      Consultations Period
                    </div>
                    <div class="user-input-wrp line-h">
                      <br />
                      <input
                        type="text" disabled v-model="session.session_time"
                        class="inputText border-bottom-0 w-100 p-3 rounded boder-1 w-100 bg-blue-light"
                        placeholder="Chart"
                      />
                    </div>
                    <div class="font-weight-bold mt-4 text-green">Provided Number</div>
                    <div class="user-input-wrp line-h">
                      <br />
                      <input
                        type="text" disabled v-model="session.provider_number"
                        class="inputText border-bottom-0 w-100 p-3 pl-5 rounded boder-1 w-100 bg-blue-light"
                        placeholder="+91 102345879"
                      />
                      <img
                        src="./../../assets/img/ic_video_connect_phone.png"
                        class="iocn-set set-w pt-2"
                      />
                    </div>
                    <div class="font-weight-bold mt-4 text-green">Alternative Number</div>
                    <div class="user-input-wrp line-h">
                      <br />
                      <input
                        type="text" disabled v-model="session.alternative_number"
                        class="inputText border-bottom-0 w-100 p-3 pl-5 rounded boder-1 w-100 bg-blue-light"
                        placeholder=""
                      />
                      <img
                        src="./../../assets/img/ic_video_connect_phone.png"
                        class="iocn-set set-w pt-2"
                      />
                    </div>
                    <div class="font-weight-bold mt-4 text-green">
                      Add Comments
                    </div>
                    <div>What issue/s or area/s do you want to work to work on with the coach? and What do you hope to accomplish from the coaching session</div>
                    <textarea
                      name="Comment" disabled v-model="session.comment_1"
                      id=""
                      placeholder="Enter comment here.."
                      class="rounded boder-1 w-100 bg-blue-light p-3"
                      rows="10"
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div>
           <!-- <router-link class="text-green font-weight-bold" to="/home"> -->
          <button v-on:click="alertdata()" v-if="!session.is_coach_review"
            class="mx-auto w-100 font-weight-bold border-0 p-3 mt-3 bg-red text-center text-white border-r-bx"
          >
            CANCEL SESSION
          </button>
          <button v-on:click="rate()" v-if="session.is_coach_review==0"
            class="mx-auto w-100 font-weight-bold border-0 p-3 mt-3 bg-red text-center text-uppercase text-white border-r-bx"
          >
            Rate it
          </button>
                    <!-- </router-link> -->
        </div>
      </div>
    </div>

    <Footer />
  </div>
</template>
  
<script>
import Header from "../Header.vue";
import Footer from "../Footer.vue";
// import constants from "../../components/Service/constants.js";
import apiServices from "../../components/Service/apiservice";

export default {
  name: "mySession",
  data() {
    return {
      session:{},
      Userdata:{},
      flag:'',

    };
  },
   mounted() {
    this.session = JSON.parse(localStorage.getItem("My_Seesion"));
    this.Userdata = JSON.parse(localStorage.getItem("Login_data"));
  },
  components: {
    Header,
    Footer,
  },
  methods:{
  async  cancel(){
    if(localStorage.getItem("type")==0){
      this.flag=0
    }if(localStorage.getItem("type")==1){
      this.flag=1
    }
      var param = 
        "lang=" + "0"+
        "&user_id=" + this.Userdata.user_id+
        "&access_token=" + this.Userdata.access_token+
        "&book_id=" + this.session.book_id+
        "&flag_view =" + this.flag;
        let res = await apiServices.makeAPICall(apiServices.postMethod,apiServices.URL + apiServices.delete_pending_sessionAPI,param,() => {});
        if(res.data.flag==1){
          this.ToastAlert('success',res.data.msg)
          this.$router.push("/session").catch(() => {});
          localStorage.removeItem("My_Seesion")
          localStorage.removeItem("type")
          }
        else
          {
            this.ToastAlert('error',res.data.msg)
          }
    },
    chat(){
      if(localStorage.getItem("type")==3){
        localStorage.setItem("from_session",'/session')
        this.$router.push("/message").catch(() => {});
      }
    },
     alertdata(){
      this.$swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
           this.cancel();
          // this.$swal.fire(
          //   'Deleted!',
          //   'Your file has been deleted.',
          //   'success'
          // )
        }
      })
    },
     ToastAlert(id,msg) {
      const Toast = this.$swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: false,
        // didOpen: (toast) => {
        //   toast.addEventListener('mouseenter', this.$swal.stopTimer)
        //   toast.addEventListener('mouseleave', this.$swal.resumeTimer)
        // }
      })
      Toast.fire({
        icon: id,
        title: msg
      })
    },
    rate(){
    this.$router.push("/rate").catch(() => {});
    },
  }
};
</script>
<style>
button.mx-auto.w-100.border-0.p-3.mt-3.bg-success.text-center.btn-green.text-white.border-r-bx{
    border-radius: 0px 0px 10px 14px !important;
}
.nav-tabs .nav-item.show .nav-link,
.nav-tabs .nav-link.active {
  color: #369f04 !important;
  background-color: #f7f7f7;
  border-color: #f7f7f7 #ccc #369f04 #f7f7f7;
}
</style>