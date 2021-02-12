
<template>
  <div>
    <Header />
       <div class="text-center bg-img-header py-5 header-top">
      <h2 class="font-weight-bold pt-4">Setting</h2>
      <div class="mx-auto border-lines mb-4"></div>
    </div>
     <div class="requests-bg-light-grew pt-3 pb-5">
        <div class="container pb-5">
            <div class="container box-shadow border-rounde mt-5 p-0 bg-white" style="width: 750px">
                <div class="">
                    <div class="px-4 pt-4 font-weight-bold">
                        <router-link class="text-dark" to="/session">
                        <div class="float-left">
                            <img src="../../assets/img/ic_back_arrow.png" width="25" class="mr-3"/>Back
                        </div>
                        </router-link>
                    </div>
                    <div class="text-center h5 text-center font-weight-bold border-bottom pr-100 mb-0 pb-4">Rate Telacoach</div>
                        <div class="message py-2 text-center">
                         <img src="../../assets/img/ic_rate_undraw_reviews.png" class="p-4" alt="">   
                         <h4 class="text-muted">How likely are you to </h4>
                         <h4 class="text-muted">Recommend Telacoach?</h4>
                         <div class="bg-blue-light my-4">
                       <span class="" v-for="n  in 5 " :key="n">
                          <img v-if="n<=rateimage" v-on:click="ratedata(n)" class="p-2" src="./../../assets/img/ic_rate_big_star_yellow.png"/>
                          <img v-else v-on:click="ratedata(n)" class="p-2" src="./../../assets/img/ic_rate_big_star_gray.png"/>
                      </span>
                         </div>
                        </div>
                         <p class="red-color-font-s mb-0 ml-5" v-if="rate != ''">
                              {{ rate }}
                            </p>
                        <div class="px-5">
                            <div class="font-weight-bold mt-4 text-green">
                              Add Review
                            </div>
                            
                            <textarea
                              name="Review" v-model="session.review"
                              id=""
                              placeholder="Enter Review here.."
                              class="rounded boder-1 w-100 bg-blue-light p-3"
                              rows="10"
                            ></textarea>
                            <p class="red-color-font-s mb-0" v-if="reviews != ''">
                              {{ reviews }}
                            </p>
                        </div>
                         
                   </div>
                   <!-- <router-link class="text-dark" to="/Profilesetting"> -->
               <button v-on:click="rateing(n)" class="mx-auto w-100 border-0 p-3 mt-3 bg-success text-center btn-green text-white border-r-bx">SAVE</button>
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
  name: "Rate",
  data() {
    return {
        session:{},
      Userdata:{},
      reviews:'',
      rate:'',
      rateimage:'',
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
async rateing(){
    this.reviews=''
    this.rate=''
    if(!this.session.review){
      this.reviews =constants.reviews;
    }
    if(!this.rateimage){
      this.rate =constants.rate;
    }
     if (this.reviews == "" && this.rate == ""){
        var param = 
      "lang=" + "0"+
      "&user_id=" + this.Userdata.user_id+
      "&access_token=" + this.Userdata.access_token+
      "&coach_id=" + this.session.coach_id+
      "&book_id=" + this.session.book_id+
      "&rate_star=" + this.rateimage+
      "&review=" + this.session.review;
      let res = await apiServices.makeAPICall(apiServices.postMethod,apiServices.URL + apiServices.save_coach_reviewAPI,param,() => {});
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
      }
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
      ratedata(id){
        this.rateimage=id;
      }
  },
};
</script>
<style>

</style>