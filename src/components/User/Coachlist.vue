
<template>
  <div>
    <Header />
    <div class="bg-light-grew pt-5">
      <div class="container py-5">
        <div
          class="container box-shadow rounded mt-5 bg-white inner-container"
        >
          <div>
            <router-link class="text-dark font-weight-bold" to="/home">
            <div v-on:click="cleandata()">
              <img
                src="../../assets/img/ic_back_arrow.png"
                width="25"
                class="mr-3"
              />Back
               </div>
            </router-link>
            <div class="h3 text-center font-weight-bold">Coach List</div>
            <div class="mx-auto border-line"></div>
            <div class="text-center">
              <div class="user-input-wrp">
                <br />
                <input type="text" @keyup="keymonitor()" v-model="user.search" class="border-0 bg-light-grew inputText w-50 p-2 pl-5 text-muted coach-filter-input" placeholder="Search By name" />
                <img
                  src="./../../assets/img/ic_search_gray.png"
                  class="iocn-set-search set-w"
                />
              </div>
            </div>
          
              <div  v-for="(item, index) in Coachlist" :key="index" class="card my-3 bg-light-grew border-0 cursor">
                <div class="card-body p-0" v-on:click="CoachDetails(item)">
                  <div class="p-3">
                    <img v-bind:src="item.profile_image" class="float-left rounded-circle avtar-border" width="80px" height="80px" @error="imageUrlAlt" />
                    <div class="message pl-3">
                      <h5 class="card-title">
                        {{ item.coach_name }}
                        <span class="float-right my-auto">
                          <img src="../../assets/img/ic_next_arrow_black.png" class="w-10 mar-top pt-1 ratting-arrow" />
                        </span>
                      </h5>
                      <h5 class="float-left ratting-class">
                      <span class="card-subtitle mb-2 mt-1 text-muted" v-for="n  in 5 " :key="n">
                          <img v-if="n<=item.avg_rate" class="w-15 mr-1" src="./../../assets/img/ic_star_select.png"/>
                          <img v-else class="w-15 mr-1" src="./../../assets/img/ic_star_unselect.png"/>
                      </span>
                      </h5>
                      <h6 class="ratting-count"><span class="text-muted mt-2 ml-2">{{item.avg_rate}} Rating</span></h6>                      
                    </div>
                  </div>
                </div>
              </div>
           
          </div>
          <!-- <router-link class="text-white font-weight-bold" to="/filter"> -->
            <div v-on:click="coachlist()"
              class="mx-auto w-50 p-3 cursor bg-success text-center rounded btn-green text-white my-3 mt-5 border-r-bx filter-button"
            >
              FILTER
            </div>
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
import apiServices from "../../components/Service/apiservice";
import img from '../../assets/img/ic_requests_user_profile.png';

export default {
  name: "Couchlist",
  data() {
    return {
      Coachlist: [],
      userdata: {},
      state:'',
      recommended:'',
      star_rating:'',
      user:{},
      imageError: false,
    };
  },
  mounted() {
    this.userdata = JSON.parse(localStorage.getItem("Login_data"));
    // console.log(this.userdata);
    this.CoachAPI();
  },
  components: {
    Header,
    Footer,
  },
  methods: {
    imageUrlAlt(e) {
      e.target.src = img;
    },
    keymonitor(){
      // console.log(this.user.search);
      console.log();
      this.CoachAPI();
    },
    async CoachAPI() {
      if(this.user.search==null){
        this.user.search="";
      }
      if(localStorage.getItem('state')==null){
        this.state="";
      }
      else
      {
        this.state=localStorage.getItem('state');
      }
      if(localStorage.getItem('recommended')==null){
        this.recommended="";
      }else{
        this.recommended=localStorage.getItem('recommended');
      }
      if(localStorage.getItem('star_rating')==null){
        this.star_rating="";
      }else{
        this.star_rating=localStorage.getItem('star_rating');
      }
      var param =
        "lang=" +
        "0" +
        "&user_id=" +
        this.userdata.user_id +
        "&access_token=" +
        this.userdata.access_token +
        "&category_id=" +
          localStorage.getItem('category_id') +
        "&star_rating=" +
        this.star_rating+
        "&search_keyword=" +
        this.user.search +
        "&offset=" +
        "0" +
        "&is_recommended=" +
       this.recommended+
        "&search_state=" +
        this.state;
      let res = await apiServices.makeAPICall(
        apiServices.postMethod,
        apiServices.URL + apiServices.coach_listAPI,
        param,
        () => {}
      );
      if (res.data.flag == 1) {
        this.Coachlist = res.data.data;
        // this.ToastAlert("success", res.data.msg);
      } else {
        this.ToastAlert("error", res.data.msg);
        this.Coachlist="";
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
    CoachDetails(data){
      localStorage.setItem("coach_data",JSON.stringify(data))
       this.$router.push("/details").catch(()=>{});
    },
     coachlist(){
      localStorage.setItem('filterpage','coachlist')
      this.$router.push("/filter").catch(()=>{});
    },
    cleandata(){
      localStorage.removeItem("state");
      localStorage.removeItem("star_rating");
      localStorage.removeItem("recommended");
      localStorage.removeItem("category_id");
      localStorage.removeItem("SelectedItems_array");
      localStorage.removeItem("star_rating_array");
    }
  },
};
</script>
<style>
.ratting-top{
  top: 53px;
    position: absolute;
}
</style>