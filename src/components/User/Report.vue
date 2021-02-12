
<template>
  <div>
    <Header />
    <div class="text-center bg-img-header py-5 header-top">
      <h2 class="font-weight-bold pt-4">Setting</h2>
      <div class="mx-auto border-lines mb-4"></div>
    </div>
    <div class="bg-grew-dark ">
      <div class="container py-5">
        <div
          class="container box-shadow rounded mt-5 p-0 bg-white border-radius"
          style="width: 750px"
        >
          <div class="">
           <div class="px-4 pt-4  font-weight-bold">
              <router-link class="text-dark" to="/Profilesetting">
               <div class="float-left">
                   <img
                src="../../assets/img/ic_back_arrow.png"
                width="25"
                class="mr-3 "
              />Back
               </div>
              </router-link>
           </div>
            <div class="text-center h3 text-center font-weight-bold border-bottom pr-100 pb-2">Report a Problem</div>
          
            <div class="px-4">
                <!-- <div class="font-weight-bold mt-4">Comment</div> -->
            <textarea name="Comment" id="" v-model="userdata.descrition" placeholder="Enter comment here.." class="border-0 rounded boder-1 w-100 bg-blue-light p-3" rows="10"></textarea>
             <p class="red-color-font-s mb-0" v-if="comment!=''">{{comment}}</p>
            </div>
          
          </div>
           <!-- <router-link class="text-dark" to="/Profilesetting"> -->
          <button v-on:click="Report()" class="mx-auto w-100 border-0 p-3 mt-3 bg-success text-center btn-green text-white border-r-bx">SUBMIT</button>
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
import constants from "../../components/Service/constants";

export default {
  name: "Report",
  data() {
    return {
      userdata:{},
      comment:'',
    };
  },
   mounted() {
     this.userdata = JSON.parse(localStorage.getItem("Login_data"));
   },
  components: {
    Header,
    Footer,
  },
     methods: {
       
      async  Report(){
        this.comment=''
        if(!this.userdata.descrition){
          this.comment=constants.comment
       }
       if(this.comment==""){
        var param = 
        "lang=" + "0"+
        "&user_id=" + this.userdata.user_id+
        "&coach_id=" + 0+
        "&access_token=" + this.userdata.access_token+
        "&is_problem=" + 4+
        "&description=" + this.userdata.descrition+
        "&flag_view=" + 0;
        let res = await apiServices.makeAPICall(apiServices.postMethod,apiServices.URL + apiServices.save_user_report_problemAPI,param,() => {});
        if(res.data.flag==1){
          this.ToastAlert('success',res.data.msg)
           this.$router.push("/Profilesetting");
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
    cardData(item){
      console.log(item,"item");
      localStorage.setItem('my_plan',JSON.stringify(item));
       this.$router.push("/cards").catch(() => {});
    },
   }
};
</script>
<style>
.nav-tabs .nav-item.show .nav-link,
.nav-tabs .nav-link.active {
  color: #369f04 !important;
  background-color: #f7f7f7;
  border-color: #f7f7f7 #ccc #369f04 #f7f7f7;
}
</style>