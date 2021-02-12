<template>
  <div>
    <Header />
     <div class="text-center bg-img-header py-5 header-top">
      <h2 class="font-weight-bold pt-4">Setting</h2>
      <div class="mx-auto border-lines mb-4"></div>
    </div>
    <div class="container-fluid myplan-section p-5">
      <div class="container myplans content-section">
        <div class="row border-bottom p-3">
           <router-link class="text-dark font-weight-bold" v-if="hidebutton==null" to="/cards">
         
          <div class="col-md font-weight-bold my-auto">
            <img
              src="../../assets/img/ic_reviews_right_black_arrow.png"
              class="img img-responsive w-20"
            />
            Back
          </div>
          
           </router-link>
           <router-link class="text-dark font-weight-bold" v-if="hidebutton" to="/Accountsetting">
          <div class="col-md font-weight-bold my-auto">
            <img
              src="../../assets/img/ic_reviews_right_black_arrow.png"
              class="img img-responsive w-20"
            />
            Back
          </div>
           </router-link>
          <div class="col-md font-weight-bold text-center my-auto ml-5 pl-5 h4">
            Contact Preference
          </div>
          <div class="col-md font-weight-bold text-right"></div>
        </div>

        <div class="row mx-5 my-4">
          <div class="row rounded" style="width: 100%">
            <h1 class="px-5 text-center text-color-green">
              How Would you like to Connect Your Sessions?
            </h1>
          </div>
        </div>
        <div class="py-4">
        <div class="row px-3 mx-5 my-3 call-types mb-4" v-on:click="session(1)">
          <div class="col-md-11 font-weight-bold">Phone</div>
          <div class="col-md-1">
            <img v-if="is_contact == 1"
              src="../../assets/img/ic_redio_button_big_select.png"
              class="img img-responsive w-20"
            />
            <img v-if="is_contact != 1"
              src="../../assets/img/ic_check_big_book_session_unselect.png"
              class="img img-responsive w-20"
            />
          </div>
        </div>

        <div class="row px-3 mx-5 my-3 call-types mb-4" v-on:click="session(2)">
          <div class="col-md-11 font-weight-bold">Video Call</div>
          <div class="col-md-1">
           <img v-if="is_contact == 2"
              src="../../assets/img/ic_redio_button_big_select.png"
              class="img img-responsive w-20"
            />
            <img v-if="is_contact != 2"
              src="../../assets/img/ic_check_big_book_session_unselect.png"
              class="img img-responsive w-20"
            />
          </div>
        </div>

        <div class="row px-3 mx-5 my-3 call-types mb-4" v-on:click="session(3)">
          <div class="col-md-11 font-weight-bold">Text Chat</div>
          <div class="col-md-1">
            <img v-if="is_contact == 3"
              src="../../assets/img/ic_redio_button_big_select.png"
              class="img img-responsive w-20"
            />
            <img v-if="is_contact != 3"
              src="../../assets/img/ic_check_big_book_session_unselect.png"
              class="img img-responsive w-20"
            />
          </div>
        </div>

        </div>
        <div class="row card-buttons p-3" v-if="!hidebutton">
          <div class="w-100">
             <router-link  class="text-green font-weight-bold" to="/videoconnectdetails">
            <button
              class="btn btn-lg btn-block btn-filter text-white add-card-button"
              type="button"
            >
              <strong>BOOK</strong>
            </button>
             </router-link>
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
import apiServices from "../../components/Service/apiservice";

export default {
  name: "Booksessions",
  data() {
    return {
      userdata:{},
      is_contact:'',
      hidebutton:''
    };
  },
     mounted() {
       this.hidebutton=localStorage.getItem("hidebutton")
    //  localStorage.removeItem("Edit_Card")
     this.userdata = JSON.parse(localStorage.getItem("Login_data"));
      this.ContactAPI();
   },
  components: {
    Header,
    Footer,
  },
    methods: {
      async  ContactAPI(){
         var param = 
        "lang=" + "0"+
        "&user_id=" + this.userdata.user_id+
        "&access_token=" + this.userdata.access_token+
        "&is_flag=" + "0"+
        "&is_contact=" + "0";
        let res = await apiServices.makeAPICall(apiServices.postMethod,apiServices.URL + apiServices.contact_preferencesAPI,param,() => {});
        if(res.data.flag==1){
          this.is_contact=res.data.data.is_contact
          localStorage.setItem('session_type',this.is_contact);
          }
        else
          {
            this.ToastAlert('error',res.data.msg)
          }
      },
     async session(is_contact){
          var param = 
        "lang=" + "0"+
        "&user_id=" + this.userdata.user_id+
        "&access_token=" + this.userdata.access_token+
        "&is_flag=" + "1"+
        "&is_contact=" + is_contact;
        let res = await apiServices.makeAPICall(apiServices.postMethod,apiServices.URL + apiServices.contact_preferencesAPI,param,() => {});
        if(res.data.flag==1){
          this.is_contact=res.data.data.is_contact
          localStorage.setItem('session_type',this.is_contact);
          }
        else
          {
            this.ToastAlert('error',res.data.msg)
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
    }
};
</script>
<style>
h1.exp-date.text-white {
  margin-top: 37px;
}
button.btn.btn-lg.btn-block.btn-filter.text-white.add-card-button {
  border-right: 0px solid #ffffff;
}
.call-types {
  padding: 1rem;
  border: 2px solid #36a103;
  border-radius: 10px;
}
.text-color-green {
  color: #36a103;
}
@import "../../assets/css/custom.css";
</style>