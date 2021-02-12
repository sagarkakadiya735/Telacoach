<template>
  <div>
    <Header />
    <div class="container-fluid header-top myplan-section p-5">
      <div class="container myplans content-section">
        <div class="row border-bottom p-3">
          <router-link class="text-dark font-weight-bold" to="/cards">
          <div class="col-md font-weight-bold my-auto">
            <img
              src="../../assets/img/ic_reviews_right_black_arrow.png"
              class="img img-responsive w-20"
            />
            Back
          </div>
          </router-link>
          <div class="col-md h4 mr-5 font-weight-bold text-center my-auto">
            Add Card
          </div>
        </div>

        <div class="row p-5">
          <div class="row rounded" style="width: 100%">
              <h5>Add Manually</h5>
            <form class="form-horizontal add-card-form">
                <div class="row">
              <div class="col-md-12 form-element">
                <div class="form-group">
                  <input
                    type="email" v-model="Editdata.card_holder"
                    class="form-control form-control-lg bg-white"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Card holder name"
                  />
                </div>
              </div>
              </div>
              <div class="row">
              <div class="col-md-12 form-element">
                <div class="form-group">
                  <input  v-model="Editdata.card_number" maxlength="16"
                    type="text"
                    class="form-control form-control-lg bg-white"
                    placeholder="Card number"
                  />
                </div>
              </div>
              </div>
              <div class="row">
              <div class="col-md-6 float-left">
                <div class="form-group">
                  <select class="form-control form-control-lg bg-white" v-model="Editdata.month" name="month" >
                    <option value="" disabled>Expiry Month</option>
                    <option value="01">01</option>
                    <option value="02">02</option>
                    <option value="03">03</option>
                    <option value="04">04</option>
                    <option value="05">05</option>
                    <option value="06">06</option>
                    <option value="07">07</option>
                    <option value="08">08</option>
                    <option value="09">09</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                  </select>
                </div>
              </div>
              <div class="col-md-6 float-right">
                <div class="form-group">
                  <select class="form-control form-control-lg bg-white"  v-model="Editdata.year" name="year" >
                    <option value="" disabled>Expiry Year</option>
                    <option v-for="(item, index)  in yearlist " :key="index" v-bind:value="item">{{item}}</option>
                  </select>
                </div>
              </div>
              </div>
              <div class="row">
              <div class="col-md-12 form-element">
                <div class="form-group">
                  <label for="cc-number" class="control-label"
                    >Card number</label
                  >
                  <input
                    id="cc-number"
                    name="cc-number"
                    type="password" v-model="Editdata.cvc"
                    class="form-control form-control-lg bg-white cc-number identified visa"
                    placeholder="CVV" maxlength="3"
                  />
                  <span
                    class="help-block"
                    data-valmsg-for="cc-number"
                    data-valmsg-replace="true"
                  ></span>
                </div>
              </div> 
              </div>             
            </form>
          </div>
        </div>

        <div class="row card-buttons p-3" v-on:click="AddAPI()">
          <div class="w-100">
             <!-- <router-link class="text-green font-weight-bold" to="/cards"> -->
            <button 
              class="btn btn-lg btn-block btn-filter text-white add-card-button"
              type="button"
            >
            <strong>ADD</strong>
            </button>
            <!-- </router-link> -->
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
  name: "AddCards",
  data() {
    return {
      Editdata:{},
      yearlist:[],
      user:{},
    };
  },
   mounted() {
      this.user = JSON.parse(localStorage.getItem("Login_data"));
     if(JSON.parse(localStorage.getItem("Edit_Card"))!=null){
        this.Editdata = JSON.parse(localStorage.getItem("Edit_Card"));
        this.Editdata.month=(this.Editdata.expiry_date).slice(0,2);
        this.Editdata.year=(this.Editdata.expiry_date).slice(3,7);
        this.Editdata.flagview='1'
     }
     else{
       this.Editdata.flagview='0'
       this.Editdata.card_id=""
     }
     let currentyear=new Date().getFullYear()
     for (let index = 0; index < 50; index++) {
      this.yearlist.push(currentyear+index)
     }
   },
  components: {
    Header,
    Footer,
  },
   methods: {
      async  AddAPI(){
         var param = 
        "lang=" + "0"+
        "&user_id=" + this.user.user_id+
        "&access_token=" + this.user.access_token+
        "&card_holder=" + this.Editdata.card_holder+
        "&card_number=" + this.Editdata.card_number+
        "&expiry_month=" + this.Editdata.month+
        "&expiry_year=" + this.Editdata.year+
        "&cvc=" + this.Editdata.cvc+
        "&flag_view=" + this.Editdata.flagview+
        "&card_id=" + this.Editdata.card_id;
        let res= await apiServices.makeAPICall(apiServices.postMethod,apiServices.URL + apiServices.add_credit_cardAPI,param,() => {});
        if(res.data.flag==1){
          this.ToastAlert('success',res.data.msg)
          this.$router.push("/cards").catch(()=>{});
          }
        else
          {
            this.ToastAlert('error',res.data.msg)
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
h1.exp-date.text-white {
  margin-top: 37px;
}
button.btn.btn-lg.btn-block.btn-filter.text-white.add-card-button {
  border-right: 0px solid #ffffff;
}
@import "../../assets/css/custom.css";
</style>