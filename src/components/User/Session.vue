
<template>
  <div>
    <Header />
    <div class="text-center bg-img-header py-5 header-top">
      <h2 class="font-weight-bold pt-4">My Sessions</h2>
      <div class="mx-auto border-lines mb-4"></div>
    </div>
    <div class="bg-grew-dark ">
      <div class="container py-5">
        <div
          class="container box-shadow rounded mt-5 p-0 bg-white border-radius"
          style="width: 750px"
        >
          <ul class="nav nav-tabs nav-justified border-r-tx" id="myTab" role="tablist">
              <li class="nav-item text-center border-right">
                <a class="nav-link text-muted py-3 active" id="pending-tab" data-toggle="tab" href="#pending" role="tab" aria-controls="pending" aria-selected="true" >
                    Pending
                </a>
              </li>
              <li class="nav-item text-center border-right">
                <a class="nav-link text-muted py-3" id="upcoming-tab" data-toggle="tab" href="#upcoming" role="tab" aria-controls="upcoming" aria-selected="true" >
                    Upcoming
                </a>
              </li>
              <li class="nav-item text-center">
                <a class="nav-link text-muted py-3" id="past-tab" data-toggle="tab" href="#past" role="tab" aria-controls="past" aria-selected="false" >
                    Past
                </a>
              </li>
            </ul>

            <div class="tab-content px-4 pt-4">
              <div class="tab-pane pb-5 active" id="pending" role="tabpanel" aria-labelledby="pending-tab">
                    <div class="card my-3 bg-light-grew border-0">
                       <!-- <router-link class="text-dark" to="/VideoConnectDetails"> -->
                        <div class="card-body p-0" v-for="(item, index) in Pending_respone" :key="index">
                            <div class="p-3" v-on:click="mysessiondata(item,0)">
                            <img :src="item.profile_image" width="70px" height="70px" class="float-left rounded-circle img-border-green mt-4" @error="imageUrlAlt" />
                            <div class="message border-bottom" style="margin-left: 95px;">
                                <h5 class="card-title text-green">
                                {{item.coach_name}}
                                </h5>
                                <h6 class="card-subtitle mb-2 text-muted">
                                 {{item.category_name}}
                                </h6>
                                <div class="my-3">
                                    <span class="text-green font-weight-bold"> Date:</span>
                                    <span>   {{item.book_date}}</span>
                                    <span class="text-green font-weight-bold"> Time:</span>
                                    <span>  {{item.book_time}}</span>
                                </div>
                               
                            </div>
                            </div>
                        </div>
                         <!-- </router-link> -->
                     
                    </div>
                     <div class="font-weight-bold h5 text-center py-4 pb-5" v-if="Pending_respone.length==0">{{penddingdatanull}}</div>
              </div>
              <div class="tab-pane pb-5" id="upcoming" role="tabpanel" aria-labelledby="upcoming-tab">
                 <div class="card my-3 bg-light-grew border-0">
                     <div class="card-body p-0" v-for="(item, index) in Upcoming_respone" :key="index">
                            <div class="p-3" v-on:click="mysessiondata(item,1)">
                            <img :src="item.profile_image" width="70px"  height="70px" class="float-left rounded-circle img-border-green mt-4" @error="imageUrlAlt"/>
                            <div class="message border-bottom" style="margin-left: 95px;">
                                <h5 class="card-title text-green">
                                {{item.coach_name}}
                                </h5>
                                <h6 class="card-subtitle mb-2 text-muted">
                                 {{item.category_name}}
                                </h6>
                                <div class="my-3">
                                    <span class="text-green font-weight-bold"> Date:</span>
                                    <span>   {{item.book_date}}</span>
                                    <span class="text-green font-weight-bold"> Time:</span>
                                    <span>  {{item.book_time}}</span>
                                </div>
                               
                            </div>
                            </div>
                        </div>
                    </div>
                     <div class="font-weight-bold h5 text-center py-4 pb-5" v-if="Upcoming_respone.length==0">{{upcomingdatanull}}</div>
              </div>
               <div class="tab-pane pb-5" id="past" role="tabpanel" aria-labelledby="past-tab">
                  <div class="card my-3 bg-light-grew border-0">
                     <div class="card-body p-0" v-for="(item, index) in past_respone" :key="index">
                            <div class="p-3" v-on:click="mysessiondata(item,3)">
                            <img :src="item.profile_image" width="70px"  height="70px" class="float-left rounded-circle img-border-green mt-4" @error="imageUrlAlt"/>
                            <div class="message border-bottom" style="margin-left: 95px;">
                                <h5 class="card-title text-green">
                                {{item.coach_name}}
                                </h5>
                                <h6 class="card-subtitle mb-2 text-muted">
                                 {{item.category_name}}
                                </h6>
                                <div class="my-3">
                                    <span class="text-green font-weight-bold"> Date:</span>
                                    <span>   {{item.book_date}}</span>
                                    <span class="text-green font-weight-bold"> Time:</span>
                                    <span>  {{item.book_time}}</span>
                                </div>
                               
                            </div>
                            </div>
                        </div>
                        
                    </div>
                    <div class="font-weight-bold h5 text-center py-4 pb-5" v-if="past_respone.length==0">{{pastdatanull}}</div>
            </div>
            </div>
          <!-- <button class="mx-auto w-100 border-0 p-3 mt-3 bg-success text-center btn-green text-white border-r-bx">CONFIRM NOW</button> -->
        </div>
      </div>
    </div>

    <Footer />
  </div>
</template>
  
<script>
import Header from "../Header.vue";
import Footer from "../Footer.vue";
import apiServices from "../../components/Service/apiservice";
import constants from "../../components/Service/constants";
import img from '../../assets/img/ic_requests_user_profile.png';

export default {
  name: "Session",
  data() {
    return {
      Pending_respone:[],
      Upcoming_respone:[],
      past_respone:[],
      upcomin_id:'',
      pastdatanull:'',
      penddingdatanull:'',
      upcomingdatanull:'',
    };
  },
   mounted() {
      localStorage.removeItem("My_Seesion")
      localStorage.removeItem("type")
     this.Userdata = JSON.parse(localStorage.getItem("Login_data"));
      this.penndingAPI();
       this.UpcomingAPI(0);
       this.UpcomingAPI(1);
     
   },
  components: {
    Header,
    Footer,
  },
   methods: {
      imageUrlAlt(e) {
        e.target.src = img;
      },
      async  penndingAPI(){
         var param = 
        "lang=" + "0"+
        "&user_id=" + this.Userdata.user_id+
        "&access_token=" + this.Userdata.access_token+
        "&offset=" + "0"+
        "&timezone=" + constants.timezone;
        let res = await apiServices.makeAPICall(apiServices.postMethod,apiServices.URL + apiServices.pending_session_listAPI,param,() => {});
        if(res.data.flag==1){
          this.Pending_respone=res.data.data
          }
        else
          {
            this.penddingdatanull=res.data.msg
          }
      },
      async  UpcomingAPI(id){
         var param = 
        "lang=" + "0"+
        "&user_id=" + this.Userdata.user_id+
        "&access_token=" + this.Userdata.access_token+
        "&flag_view=" + id +
        "&offset=" + "0"+
        "&timezone=" + constants.timezone;
        let res = await apiServices.makeAPICall(apiServices.postMethod,apiServices.URL + apiServices.user_book_session_historyAPI,param,() => {});
        if(res.data.flag==1){
          if(id==0){
            this.Upcoming_respone=res.data.data
          }
          if(id==1){
            this.past_respone=res.data.data
          }
          }
        else
          {
            if(id==0){
              this.upcomingdatanull=res.data.msg
             }
            if(id==1){
              this.pastdatanull=res.data.msg
             }
          }
      },
      mysessiondata(item,id){
        localStorage.setItem("My_Seesion",JSON.stringify(item))
        localStorage.setItem("type",id)
        this.$router.push("/mySession").catch(() => {});
      },
   }
};
</script>
<style>
.nav-tabs .nav-item.show .nav-link,
.nav-tabs .nav-link.active {
  color: black !important;
  background-color: #ffffff;
  border-color: #ffffff #ffffff #369f04 #ffffff;
  border-radius: 15px 15px 0px 0px;
  border-bottom: 2px solid #369f04;
}
.img-border-green{
  border: 3px solid #66b640;
}
</style>