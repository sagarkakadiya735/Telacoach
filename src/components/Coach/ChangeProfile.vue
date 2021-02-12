<style>
span.drag-text {
    margin: 0 25%;
    color: #B4B4B4;
    font-size: 18px;
}
button.mx-auto.w-100.border-0.p-3.mt-3.bg-success.text-center.btn-green.text-white.border-r-bx {
  border-radius: 0px 0px 10px 14px !important;
}
.nav-tabs .nav-item.show .nav-link,
.nav-tabs .nav-link.active {
  color: #369f04 !important;
  background-color: #f7f7f7;
  border-color: #f7f7f7 #ccc #369f04 #f7f7f7;
}
/* file uploader code */
.files input {
    border: 2px dashed #92b0b3;
    /* padding: 120px 0px 85px 35%; */
    text-align: center !important;
    margin: 0;
    width: 100% !important;
    border-radius: 10px;
    padding: 190px 0 0 0 !important;
    overflow: hidden;
}
.files input:focus{     outline: 2px dashed #92b0b3;  outline-offset: -10px;
    -webkit-transition: outline-offset .15s ease-in-out, background-color .15s linear;
    transition: outline-offset .15s ease-in-out, background-color .15s linear; border:1px solid #92b0b3;
 }
.files{ position:relative}
.files:after {  pointer-events: none;
    position: absolute;
    top: 60px;
    left: 0;
    width: 50px;
    right: 0;
    height: 56px;
    content: "";
    background-image: url(../../assets/img/ic_change_my_pgoto.png);
    display: block;
    margin: 0 auto;
    background-size: 100%;
    background-repeat: no-repeat;
}
.color input{ background-color:#f1f1f1;}
.files:before {
    position: absolute;
    bottom: 0px;
    left: 0;  pointer-events: none;
    width: 100%;
    right: 0;
    height: 57px;
    display: block;
    margin: 0 auto;
    color: #b4b4b4;
    font-weight: 600;
    text-transform: capitalize;
    text-align: center;
    content: " Upload your new profile picture ";    
}
/* end file uploader */
</style>
<template>
  <div>
    <Header />
    <div class="text-center bg-img-header py-5 header-top">
      <h2 class="font-weight-bold pt-4">My Profile</h2>
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
                <router-link class="text-dark" to="/myprofilesetting">
              <div class="float-left">
                <img
                  src="../../assets/img/ic_back_arrow.png"
                  width="25"
                  class="mr-3"
                />Back
              </div>
                </router-link>
            </div>
            <div class="text-center h3 text-center font-weight-bold border-bottom pr-100 pb-2">
              Change My Profile photo
            </div>
            <div class="row">
              <div class="px-4 card my-3 border-0 w-100 m-3">
                <div class="card-body p-0">
                  <div class="p-3">                      
                    <div class="form-group files" id="file-uploader" >  
                      <img v-if="images != ''" :src="images" alt="" class="profile-image" style="padding: 3% 25%;" />   
                      <input name="Comment" type="file" class="form-control" data-targe="#file-uploader" @change="onChange($event)" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button @click.prevent="submit()" class="mx-auto w-100 border-0 p-3 mt-3 bg-success text-center btn-green text-white border-r-bx">
            Change Photo
          </button>
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
  name: "Videodetails",
  data() {
    return {
      coach: {},
      selectedFile:'',
      images: ''
    };
  },
  mounted() {
    this.coach = JSON.parse(localStorage.getItem("Login_data"));
  },
  components: {
    Header,
    Footer,
  },
  methods: {
    onChange(event) {
      let input = event.target;
      if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = e => {
          this.coach.photo = e.target.result;
          this.selectedFile = input.files[0];
          this.images = e.target.result;
        };
        reader.readAsDataURL(input.files[0]);
      }
      this.selectedFile = event.target.files[0];
      console.log(this.selectedFile);
    },
    async submit() {
      const formData = new FormData();
      formData.append("lang", "0");
      formData.append("coach_id", this.coach.coach_id);
      formData.append("access_token", this.coach.access_token);
      formData.append("profile_image", this.selectedFile);
      formData.append("timezone", this.coach.timezone);
      console.log(formData);

      let res = await apiServices.makeAPICall(
        apiServices.postMethod,
        apiServices.URL + apiServices.edit_coach_profile_imageAPI,
        formData,
        () => {}
      );
      if(res.data.flag==1){
        this.$router.push("/myprofilesetting");
        this.ToastAlert('success',res.data.msg)
      }
      else {
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
      })

      Toast.fire({
        icon: id,
        title: msg
      })
    },
  },
};
</script>
