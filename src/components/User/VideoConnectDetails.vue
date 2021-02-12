
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
               <router-link class="text-dark" to="/booksessions">
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
             <span v-if="session_type==1">Phone</span>
             <span v-if="session_type==2">Video</span>
             <span v-if="session_type==3">Text</span>  Connect Details
            </div>

            <div class="row mx-3 pt-3">
                <div class="col-md-2">
                  <img
                    src="../../assets/img/ic_sign_user_profile_splash_holder.png"
                    class="float-left rounded-circle px-3"
                    width="120px"
                  />
                </div>
                <div class="col-md-8 float-left">
                  <h5 class="card-title text-green">{{coachdata.coach_name}}</h5>
                  <p class="card-text">
                   {{coachdata.category_name}}
                  </p>
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
                        type="text" disabled v-model="booksession.state"
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
                      <input disabled v-model="booksession.theDate"
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
                        type="text" disabled v-model="booksession.theTime"
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
                        type="text" disabled v-model="booksession.endtime"
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
                      <input disabled v-model="booksession.consultiontype"
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
                        type="text" disabled v-model="my_plan.time"
                        class="inputText border-bottom-0 w-100 p-3 rounded boder-1 w-100 bg-blue-light"
                        placeholder="Chart"
                      />
                    </div>
                    <div class="font-weight-bold mt-4 text-green">Provided Number</div>
                    <div class="user-input-wrp line-h">
                      <br />
                      <input
                        type="text" disabled v-model="userdata.mobile_no"
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
                        type="text"  v-model="userdata.Alternative"
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
                      name="Comment" v-model="userdata.comment"
                      id=""
                      placeholder="Enter comment here.."
                      class="rounded boder-1 w-100 bg-blue-light p-3"
                      rows="10"
                    ></textarea>
                     <p class="red-color-font-s mb-0" v-if="comment != ''">
                  {{ comment }}
                </p>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div>
           <!-- <router-link class="text-green font-weight-bold" to="/home"> -->
          <button v-on:click="confirm()"
            class="mx-auto w-100 border-0 p-3 mt-3 bg-success text-center btn-green text-white border-r-bx"
          >
            CONFIRM NOW
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
import constants from "../../components/Service/constants.js";
import apiServices from "../../components/Service/apiservice";

export default {
  name: "Videodetails",
  data() {
    return {
      coachdata:{},
      booksession:{},
      userdata:{},
      comment:'',
      Card_id:'',
      my_plan:{},
      session_type:''
    };
  },
   mounted() {
    this.coachdata = JSON.parse(localStorage.getItem("coach_data"));
    this.userdata = JSON.parse(localStorage.getItem("Login_data"));
    this.session_type =localStorage.getItem("session_type");
    this.Card_id =localStorage.getItem("Card_id");
    this.booksession = JSON.parse(localStorage.getItem("booksession"));
    this.my_plan = JSON.parse(localStorage.getItem("my_plan"));
    if(this.session_type==1){
      this.booksession.consultiontype='Phone Call'
    }
    if(this.session_type==2){
      this.booksession.consultiontype='Video Call'
    }
    if(this.session_type==3){
      this.booksession.consultiontype='Text Chat'
    }
    // console.log(this.booksession.theTime,"this.booksession.theTime");
    if(this.my_plan.time=="30 minutes"){
      var initialDate = this.booksession.theTime;
      // console.log(new Date(2021,0,1,initialDate.split(":")[0],initialDate.split(":")[1]));
        var theAdd = new Date(2021,0,1,initialDate.split(":")[0],initialDate.split(":")[1]);
        theAdd.setMinutes(theAdd.getMinutes() + 30);
        // console.log(theAdd.setMinutes(theAdd.getMinutes() + 30));
        theAdd.setHours(theAdd.getHours() + 0);
        this.booksession.endtime=theAdd.getHours()+":"+theAdd.getMinutes();
        this.booksession.endtime=this.converTime(this.booksession.endtime);
    }
    else
    {
      var initialDates = this.booksession.theTime;
        var theAdds = new Date(2021,0,1,initialDates.split(":")[0],initialDates.split(":")[1]);
        theAdds.setMinutes(theAdds.getMinutes() + 0);
        theAdds.setHours(theAdds.getHours() + 1);
         this.booksession.endtime=theAdds.getHours()+":"+theAdds.getMinutes();
         this.booksession.endtime=this.converTime(this.booksession.endtime);
    }
    console.log(this.booksession.theTime);
    this.booksession.theTime=this.converTime(this.booksession.theTime)
  },
  components: {
    Header,
    Footer,
  },
  methods:{
    converTime: (time) => {
  let hour = (time.split(':'))[0]
  let min = (time.split(':'))[1]
  let part = hour > 12 ? 'PM' : 'AM';
  
  min = (min+'').length == 1 ? `0${min}` : min;
  hour = hour > 12 ? hour - 12 : hour;
  hour = (hour+'').length == 1 ? `0${hour}` : hour;

  return (`${hour}:${min} ${part}`)
},
    tConvert (time) {
        time = time.toString ().match (/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];
        if (time.length > 1) { // If time format correct
          time = time.slice (1);  // Remove full string match value
          time[5] = +time[0] < 12 ? ' AM' : ' PM'; // Set AM/PM
          time[0] = +time[0] % 12 || 12; // Adjust hours
        }
        return time.join (''); // return adjusted time or original string
      },
    async  confirm(){
      if(this.userdata.Alternative==null){
        this.userdata.Alternative='';
      }
      this.comment = "";
      if (!this.userdata.comment) {
        this.comment = constants.comment;
        }
        if (this.comment == ""){
           var param =
          "lang=" +"0" +
          "&user_id=" +this.userdata.user_id +
          "&access_token=" +this.userdata.access_token +
          "&coach_id=" +this.coachdata.coach_id +
          "&location=" +this.booksession.state +
          "&timezone=" +this.booksession.time +
          "&book_date=" +this.booksession.theDate +
          "&book_time=" +this.booksession.theTime +
          "&subscription_plan_price=" +this.my_plan.price +
          "&book_session=" +this.session_type +
          "&alternative_number=" +this.userdata.Alternative +
          "&card_id=" +this.Card_id +
          "&is_subscription=" +this.coachdata.is_subscription+
          "&current_timezone=" +constants.timezone+
          "&user_promo=" +"0"+
          "&plan_id=" +localStorage.getItem("plan_id")+
          "&comment_1=" +this.userdata.comment+
          "&subscription_id=" +this.my_plan.subscription_id;


        let res = await apiServices.makeAPICall(
          apiServices.postMethod,
          apiServices.URL + apiServices.save_book_sessionAPI,
          param,
          () => {}
        );
        if (res.data.flag == 1) {
          this.ToastAlert("success", res.data.msg);
          localStorage.setItem("conversation_id",res.data.data.conversation_id)
          this.$router.push("/home").catch(() => {});
          localStorage.removeItem("session_type")
          localStorage.removeItem("Card_id")
          localStorage.removeItem("booksession")
          localStorage.removeItem("my_plan")
          localStorage.removeItem("plan_id")
        } else {
          this.ToastAlert("error", res.data.msg);
        }
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