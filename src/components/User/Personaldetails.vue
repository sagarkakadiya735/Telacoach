
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
                       <router-link class="text-dark font-weight-bold" to="/Accountsetting">
                        <div class="float-left">
                            <img src="../../assets/img/ic_back_arrow.png" width="25" class="mr-3"/>Back
                        </div>
                       </router-link>
                    </div>
                    <div class="text-center h5 text-center font-weight-bold border-bottom pr-100 mb-0 pb-4">Personal Details</div>
                  
                  <div class="message px-5 py-2">
                    
                   
                    <div class="font-weight-bold mt-4 text-green">Username</div>
                    <div class="user-input-wrp line-h">
                      <br />
                      <input type="text" v-model="editData.username" class="inputText border-bottom-0 w-100 p-3 rounded boder-1 w-100 bg-blue-light" placeholder="Enter here ..."/>
                        <p class="py-2 red-color-font-s mb-0" v-if="username!=''">{{username}}</p>
                      
                    </div>
                    <div class="font-weight-bold mt-4 text-green">First Name</div>
                    <div class="user-input-wrp line-h">
                      <br />
                      <input type="text" v-model="editData.first_name" class="inputText border-bottom-0 w-100 p-3 rounded boder-1 w-100 bg-blue-light" placeholder="Enter here ..."/>
                        <p class="py-2 red-color-font-s mb-0" v-if="firstname!=''">{{firstname}}</p>
                      
                    </div>
                    <div class="font-weight-bold mt-4 text-green">Last Name</div>
                    <div class="user-input-wrp line-h">
                      <br />
                      <input type="text" v-model="editData.last_name" class="inputText border-bottom-0 w-100 p-3 rounded boder-1 w-100 bg-blue-light" placeholder="Enter here ..."/>
                        <p class="py-2 red-color-font-s mb-0" v-if="lastname!=''">{{lastname}}</p>
                      
                    </div>
                    <div class="font-weight-bold mt-4 text-green">Email Address</div>
                    <div class="user-input-wrp line-h">
                      <br />
                      <input type="email" required v-model="editData.email" class="inputText border-bottom-0 w-100 p-3 rounded boder-1 w-100 bg-blue-light" placeholder="Enter here ..."/>
                       <p class="py-2 red-color-font-s mb-0" v-if="email!=''">{{email}}</p>
                    </div>
                    <div class="font-weight-bold mt-4 text-green">Phone number</div>
                    <div class="user-input-wrp line-h">
                      <br />
                      <input type="number" v-model="editData.mobile_no" class="inputText border-bottom-0 w-100 p-3 rounded boder-1 w-100 bg-blue-light" placeholder="Enter here ..."/>
                        <p class="py-2 red-color-font-s mb-0" v-if="phone!=''">{{phone}}</p>
                      
                    </div>
                    <div class="font-weight-bold mt-4 text-green">Gender</div>
                    <div class="user-input-wrp line-h">
                      <br />
                    <select v-model="editData.gender" class="custom-select py-2 h-55 bg-blue-light">
                        <option selected disabled>Select Category</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Custom">Custom</option>
                    </select>
                     <p class="py-2 red-color-font-s mb-0" v-if="gender!=''">{{gender}}</p>
                    </div>
                    <div class="font-weight-bold mt-4 text-green">Address</div>
                    <div class="user-input-wrp line-h">
                      <br />
                      <input type="text" v-model="editData.address" class="inputText border-bottom-0 w-100 p-3 rounded boder-1 w-100 bg-blue-light" placeholder="Enter here ..."/>  
                        <p class="py-2 red-color-font-s mb-0" v-if="address!=''">{{address}}</p>
                    </div>
                    <div class="font-weight-bold mt-4 text-green">City</div>
                    <div class="user-input-wrp line-h">
                      <br />
                      <input type="text" v-model="editData.city" class="inputText border-bottom-0 w-100 p-3 rounded boder-1 w-100 bg-blue-light" placeholder="Enter here ..."/>  
                        <p class="py-2 red-color-font-s mb-0" v-if="city!=''">{{city}}</p>
                    </div>
                    <div class="font-weight-bold mt-4 text-green">State</div>
                    <div class="user-input-wrp line-h">
                      <br />
                      <input type="text" v-model="editData.state" class="inputText border-bottom-0 w-100 p-3 rounded boder-1 w-100 bg-blue-light" placeholder="Enter here ..."/>  
                        <p class="py-2 red-color-font-s mb-0" v-if="state!=''">{{state}}</p>
                    </div>
                    <div class="font-weight-bold mt-4 text-green">Zip Code</div>
                    <div class="user-input-wrp line-h">
                      <br />
                      <input type="number" v-model="editData.zipcode" class="inputText border-bottom-0 w-100 p-3 rounded boder-1 w-100 bg-blue-light" placeholder="Enter here ..."/>  
                        <p class="py-2 red-color-font-s mb-0" v-if="zipcode!=''">{{zipcode}}</p>
                    </div>
                    
                  </div>
                   
                </div>
                 <!-- <router-link class="text-dark font-weight-bold" to="/Accountsetting"> -->
               <button v-on:click="Edit()" class="mx-auto w-100 border-0 p-3 mt-3 bg-success text-center btn-green text-white border-r-bx">SAVE</button>
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
  name: "Personaldetails",
  data() {
    return {
      logindata:{},
      // subscriptiondata:[],
      editData:{},
      username:'',
      firstname:'',
      lastname:'',
      email:'',
      phone:'',
      gender:'',
      address:'',
      city:'',
      state:'',
      zipcode:'',
    };
  },
    mounted() {
    this.logindata = JSON.parse(localStorage.getItem("Login_data"));
      this.PrfileDisplay();
   },
  components: {
    Header,
    Footer,
  },
  methods: {
      async  PrfileDisplay(){
         var param = 
        "lang=" + "0"+
        "&user_id=" + this.logindata.user_id+
        "&access_token=" + this.logindata.access_token+
        "&is_flag=" + "0";
        let res = await apiServices.makeAPICall(apiServices.postMethod,apiServices.URL + apiServices.save_user_profileAPI,param,() => {});
        if(res.data.flag==1){
          this.editData=res.data.data
          }
        else
          {
            this.ToastAlert('error',res.data.msg)
          }
      },
    async  Edit(){
      this.username='';
      this.firstname='';
      this.lastname='';
      this.email='';
      this.phone='';
      this.gender='';
      this.address='';
      this.city='';
      this.state='';
      this.zipcode='';
       if (!this.editData.username) {
          this.username =constants.username;
       } 
        if (!this.editData.first_name) {
          this.firstname =constants.firstname;
       } 
        if (!this.editData.last_name) {
          this.lastname =constants.lastname;
       } 
        if (!this.editData.email) {
          this.email =constants.email;
       } else {
          if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/.test(this.editData.email)) {
            this.email = constants.valid;
          }
        }
        if (!this.editData.mobile_no) {
          this.phone =constants.phone;
       } 
        if (!this.editData.gender) {
          this.gender =constants.gender;
       } 
        if (!this.editData.address) {
          this.address =constants.address;
       } 
        if (!this.editData.city) {
          this.city =constants.city;
       } 
        if (!this.editData.state) {
          this.state =constants.state;
       } 
        if (!this.editData.zipcode) {
          this.zipcode =constants.zipcode;
       } 
       if (this.username == "" &&
            this.firstname == "" &&
            this.lastname == "" &&
            this.email == "" &&
            this.phone == "" &&
            this.gender == "" &&
            this.address == "" &&
            this.city == "" &&
            this.state == "" &&
            this.zipcode == "") 
        {
         var param = 
        "lang=" + "0"+
        "&user_id=" + this.logindata.user_id+
        "&access_token=" + this.logindata.access_token+
        "&username=" + this.editData.username+
        "&first_name=" + this.editData.first_name+
        "&last_name=" + this.editData.last_name+
        "&email=" + this.editData.email+
        "&mobile_no=" + this.editData.mobile_no+
        "&gender=" + this.editData.gender+
        "&address=" + this.editData.address+
        "&city=" + this.editData.city+
        "&state=" + this.editData.state+
        "&zipcode=" + this.editData.zipcode+
        // "&profile_image=" + ""+
        "&timezone=" + constants.timezone+
        "&is_flag=" + 1;
        let res = await apiServices.makeAPICall(apiServices.postMethod,apiServices.URL + apiServices.save_user_profileAPI,param,() => {});
        if(res.data.flag==1){
          // this.subscriptiondata=res.data.data
          this.ToastAlert('success',res.data.msg)
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
  }
};
</script>
<style>

</style>