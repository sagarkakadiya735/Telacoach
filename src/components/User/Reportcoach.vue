
<template>
  <div>
    <Header />
    <div class="bg-light-grew pt-5">
      <div class="container py-5">
        <div
          class="container box-shadow rounded mt-5 p-0 bg-white border-radius"
          style="width: 750px"
        >
          <div class="">
           <div class="px-4 pt-4  font-weight-bold">
               <router-link class="text-dark font-weight-bold" :to="{ path: '/details'}" >
               <div class="float-left">
                   <img
                src="../../assets/img/ic_back_arrow.png"
                width="25"
                class="mr-3 "
              />Back
               </div>
               </router-link>
           </div>
            <div class="text-center h3 text-center font-weight-bold border-bottom pr-100 pb-2">Report Coach</div>
            <div class="py-3 text-center">
                <img src="../../assets/img/ic_report_coach_images.png"  alt="">
            </div>
            
            <div class="px-4">
                <div class="font-weight-bold mt-4">Select Category</div>
                 <select v-model="user.category" class="custom-select font-weight-bold py-2 h-50 bg-blue-light">
                    <option selected value="" disabled>Select Category</option>
                    <option v-for="(item, index) in categorydata" :key="index" v-bind:value="item.category_id"> {{ item.category_name }}</option>
                  </select>
                   <p class="red-color-font-s mb-0" v-if="categorymsg!=''">{{categorymsg}}</p>
                <div class="font-weight-bold mt-4">Description</div>
            <textarea name="Comment" v-model="user.description" placeholder="Enter comment here.." class="rounded boder-1 w-100 bg-blue-light p-3" rows="6"></textarea>
             <p class="red-color-font-s mb-0" v-if="description!=''">{{description}}</p>
            </div>
          
          </div>
           <!-- <router-link class="text-white font-weight-bold" to="/filter"> -->
          <button v-on:click="Reportcoach()" class="mx-auto w-100 border-0 p-3 mt-3 bg-success text-center btn-green text-white border-r-bx">SUBMIT</button>
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
import constants from "../../components/Service/constants.js";

export default {
  name: "Reportcoach",
  data() {
    return {
      reportdata:{},
       user: {},
       categorydata:[{
                      "category_id" : "1",
                      "category_name" : "it's spam"
                    }, {
                      "category_id" : "2",
                      "category_name" : "I have issue with this coach"
                    }, {
                      "category_id" : "3",
                      "category_name" : "Coach is not genuine"
                    }, {
                      "category_id" : "4",
                      "category_name" : "Other"
                    }],
       categorymsg: '',
       description: '',
    };
  },
   mounted() {
      this.user = JSON.parse(localStorage.getItem("Login_data"));
      this.user.category='';
  },
  components: {
    Header,
    Footer,
  },
  methods: {

    async  Reportcoach() {
       this.categorymsg = "";
       this.description = "";
       if (!this.user.category) {
          this.categorymsg =constants.categorymsg;
       } 
        if (!this.user.description) {
          this.description =constants.description;
       } 
       if (this.categorymsg == "" && this.description == "" )
            {
                    var param =
              "lang="+"0"+
              "&user_id="+this.user.user_id+
              "&access_token="+this.user.access_token+
              "&is_problem="+this.user.category+
              "&coach_id="+'0'+
              "&description="+this.user.description+
              "&flag_view="+"0";
            let res = await apiServices.makeAPICall(
              apiServices.postMethod,
              apiServices.URL + apiServices.save_user_report_problemAPI,
              param,
              () => {}
            );
            if (res.data.flag == 1) {
              this.reportdata = res.data.data;
              this.ToastAlert("success", res.data.msg);
              this.$router.push("/details").catch(()=>{});
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