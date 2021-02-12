<template>
  <div>
    <Header />
    <div class="container-fluid header-top myplan-section p-5 user-card-inner-container">
      <div class="container myplans content-section inner-container">
        <div class="row border-bottom p-3">
           <router-link class="text-dark font-weight-bold" to="/myplan">
          <div class="col-md font-weight-bold my-auto">
            <img
              src="../../assets/img/ic_reviews_right_black_arrow.png"
              class="img img-responsive w-20"
            />
            Back
          </div>
           </router-link>
          <div class="col-md font-weight-bold text-center my-auto h4 mr-5 cards-title">Cards</div>
          <!-- <div class="col-md font-weight-bold text-right"></div> -->
        </div>

        <div class="row py-3 px-5 single-card"  v-for="(item, index) in card_response" :key="index">
          <div class="row card-section rounded box-shadow-only cards-border"  v-bind:class="{ 'bg-img-card':(item.default_card == 1) }">
            <div class="col-md-6 col-6 p-4 float-left" v-on:click="defaultcardAPI(item.card_id,0)">
              <h4 class="mb-4 text-green" v-bind:class="{ 'text-white':(item.default_card == 1) }">{{item.card_holder}}</h4>
              <h4 class="text-green" v-bind:class="{ 'text-white':(item.default_card == 1) }">{{item.card_number}}</h4>
            </div>
            <div class="col-md-6 col-6 p-4">
              <div class="col text-right">
                <img v-if="item.default_card == 1"
                  src="../../assets/img/ic_card_check_mark.png"
                  class="img img-responsive mr-3 card-images" 
                />               
                <img v-if="item.default_card == 1"
                  src="../../assets/img/ic_card_edit.png"
                  class="img img-responsive mr-3 card-images" v-on:click="Edit(item)"
                />
                <img v-if="item.default_card == 0"
                  src="../../assets/img/ic_edit_green@2x.png"
                  class="img img-responsive mr-3 card-images" v-on:click="Edit(item)"
                />
                <img v-if="item.default_card == 1"
                  src="../../assets/img/ic_card_delete.png"
                  class="img img-responsive mr-3 card-images" v-on:click="deletes(item)"
                />
                 <img v-if="item.default_card == 0"
                  src="../../assets/img/ic_delete_red@2x.png"
                  class="img img-responsive mr-3 card-images" v-on:click="deletes(item)"
                />
                <h4 v-on:click="defaultcardAPI(item.card_id,0)" class="exp-date text-green mt-4" v-bind:class="{ 'text-white':(item.default_card == 1) }">Exp {{item.expiry_date}}</h4>
              </div>
            </div>
          </div>
        </div>
        <div v-if="empty" class="font-weight-bold text-center h4 text-green">
            {{empty}}
        </div>

        <div class="row card-buttons p-3">
          <div class="w-50">
            <router-link class="text-green font-weight-bold" to="/addcard">
            <button
              class="btn btn-lg btn-block btn-filter text-white add-card-button"
              type="button"
            >
              ADD CARD
            </button>
            </router-link>
          </div>
          <span class=""></span>
          <div class="w-50">
            <router-link class="text-green font-weight-bold" to="/booksessions">
            <button v-bind:class="{ disabled:(continuebutton) }"
              class="btn btn-lg btn-block btn-filter text-white continue-button"
              type="button"
            >
              CONTINUE
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
  name: "Cards",
  data() {
    return {
      userdata:{},
      card_response:[],
      empty:'',
      continuebutton:false,
    };
  },
   mounted() {
     localStorage.removeItem("Edit_Card")
     this.userdata = JSON.parse(localStorage.getItem("Login_data"));
      this.CardAPI();
   },
  components: {
    Header,
    Footer,
  },
   methods: {
      async  CardAPI(){
        this.continuebutton=false
        this.empty='';
         var param = 
        "lang=" + "0"+
        "&user_id=" + this.userdata.user_id+
        "&access_token=" + this.userdata.access_token+
        "&offset=" + "0";
        let res = await apiServices.makeAPICall(apiServices.postMethod,apiServices.URL + apiServices.credit_card_listAPI,param,() => {});
        if(res.data.flag==1){
          this.card_response=res.data.data
              this.card_response.forEach(element => {
                if(element.default_card==1){
                  localStorage.setItem("Card_id",element.card_id)
                }
              })
          }
        else
          {
            this.continuebutton=true
            this.empty=res.data.msg
            this.ToastAlert('error',res.data.msg)
          }
      },
      async  defaultcardAPI(id,flag){
        this.continuebutton=false
        this.empty='';
         var param = 
        "lang=" + "0"+
        "&user_id=" + this.userdata.user_id+
        "&access_token=" + this.userdata.access_token+
        "&card_id=" + id+
        "&flag_view=" + flag;
        let res = await apiServices.makeAPICall(apiServices.postMethod,apiServices.URL + apiServices.set_default_cardAPI,param,() => {});
        if(res.data.flag==1){
          this.CardAPI();
          this.ToastAlert('success',res.data.msg)
          }
        else
          {
            this.continuebutton=true
            this.empty=res.data.msg
            this.ToastAlert('error',res.data.msg)
          }
      },
       alertdata(item){
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
           this.defaultcardAPI(item.card_id,1);
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
    Edit(item){
      localStorage.setItem("Edit_Card", JSON.stringify(item));
       this.$router.push("/addcard").catch(() => {});
    },
    deletes(item){
      this.alertdata(item);
    },
   },
};
</script>
<style>
.card-section {
  width: 100%;
  margin: 0% 15%;
  background-size: 100% 140px;
}
.bg-img-card{
 background-image: url("../../assets/img/ic_card_bg.png");
 background-repeat: no-repeat;
  object-fit: cover !important;
  object-position: center !important;
}
h1.exp-date.text-white {
  margin-top: 37px;
}
@import "../../assets/css/custom.css";
</style>