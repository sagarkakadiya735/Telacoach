<template>
  <div>
    <Header />
    <div class="container py-5 header-top bg-image">
      <div class="row mt-5 pb-5">
        <div class="col-md-7">
          <Leftsidetwo />
        </div>
        <div class="col-md-5">
          <div class="box-shadow login-b-radius">
            <div class="container">
              <div class="text-green mt-4 mb-5">
                <router-link class="text-green" to="/signupprofessionaldetail">
                  <img
                    class="width-back-icon"
                    src="../../assets/img/ic_green_back.png"
                    alt=""
                  />
                  <span class="px-3"> Back </span>
                </router-link>
              </div>
              <form enctype="multipart/form-data">
              <div class="text-center">
                <h2 class="text-left text-green font-weight-bold">
                  Set Password
                </h2>
              </div>
              <div class="user-input-wrp">
                <br />
                <input
                  v-model="user.password"
                  type="password"
                  class="inputText bor-ra w-100 p-2 pl-5 form-control-lg coach-signup"
                  placeholder="Password"
                  required
                />
                <img
                  src="../../assets/img/ic_set_password_unselect.png"
                  class="iocn-set set-w coach-signup-icon"
                />
                <span
                  class="floating-label bg-white-color px-2 ml-4 coach-label"
                  >Password</span
                >
                <p class="red-color-font-s mb-0" v-if="password != ''">
                  {{ password }}
                </p>
              </div>
              <div class="user-input-wrp">
                <br />
                <input
                  v-model="user.confirm_password"
                  type="password"
                  class="inputText bor-ra w-100 p-2 pl-5 form-control-lg coach-signup"
                  placeholder="Confirm Password"
                  required
                />
                <img
                  src="../../assets/img/ic_set_password_unselect.png"
                  class="iocn-set set-w coach-signup-icon"
                />
                <span
                  class="floating-label bg-white-color px-2 ml-4 coach-label"
                  >Confirm Password</span
                >
                <p class="red-color-font-s mb-0" v-if="confirm_password != ''">
                  {{ confirm_password }}
                </p>
              </div>

              <h2 class="text-left text-green font-weight-bold pt-3">
                Set Security Question
              </h2>

              <div class="user-input-wrp">
                <br />
                <select
                  v-model="user.question"
                  name=""
                  class="inputText bor-ra w-100 p-2 form-control-lg coach-signup select-box"
                  id=""
                >
                  <option value="">Select question here</option>
                  <option v-for="(item, index) in questions" :key="index" :value="item.security_id">{{item.question}}</option>
                </select>
                <span
                  class="floating-label bg-white-color px-2 ml-4 coach-label"
                  >Select Question</span
                >
                <p class="red-color-font-s mb-0" v-if="question != ''">
                  {{ question }}
                </p>
              </div>
              <div class="user-input-wrp">
                <br />
                <input
                  v-model="user.answer"
                  type="text"
                  class="inputText bor-ra w-100 p-2 form-control-lg coach-signup"
                  placeholder="Answer"
                  required
                />
                <span
                  class="floating-label bg-white-color px-2 ml-4 coach-label"
                  >Answer here</span
                >
                <p class="red-color-font-s mb-0" v-if="answer != ''">
                  {{ answer }}
                </p>
              </div>

              <div
                @click.prevent="setPassword()"
                class="p-3 bg-success text-center rounded btn-green text-white mt-5 register-button"
              >
                REGISTER
              </div>
              </form>
            </div>
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
import Leftsidetwo from "../Leftsidetwo.vue";
import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);
import constants from "../../components/Service/constants.js";
import apiServices from "../../components/Service/apiservice";
export default {
  name: "Address",
  data() {
    return {
      user: {},
      password: "",
      confirm_password: "",
      question: "",
      answer: "",
      cat_ids: [],
      questions:[]
    };
  },
  mounted() {
    this.getQuesation();
  },
  components: {
    Header,
    Footer,
    Leftsidetwo,
  },
  methods: {
    async getQuesation(){
      var param = "lang=" + "0";
      let res = await apiServices.makeAPICall(apiServices.postMethod,apiServices.URL + apiServices.security_question_listAPI,param,() => {});
      this.questions = res.data.data;
    },
    async setPassword() 
    {
      this.password = "";
      this.confirm_password = "";
      this.question = "";
      this.answer = "";
      if (!this.user.password) {
        this.password = constants.password;
      }
      if (!this.user.confirm_password) {
        this.confirm_password = constants.confirm_password;
      }
      if (!this.user.question) {
        this.question = constants.question;
      }
      if (!this.user.answer) {
        this.answer = constants.answer;
      }

      if (!this.user.password || this.user.password.trim() == "") {
        this.password += constants.password;
      }
      if (!this.user.confirm_password || this.user.confirm_password.trim() == "" ) {
        this.confirm_password += constants.confirm_password;
      } 
      else if (this.user.confirm_password != this.user.password) {
        this.confirm_password += constants.matchcopassword;
      }
      if (this.password == "" && this.confirm_password == "" && this.question == "" && this.answer == "") 
      {
        this.userdata = JSON.parse(localStorage.getItem("user"));
        this.billing_plans = JSON.parse(localStorage.getItem("billing_plans"));
        this.addressdata = JSON.parse(localStorage.getItem("address"));
        this.professionaldetails = JSON.parse(localStorage.getItem("professionaldetails"));
        this.cus_gender = this.userdata.custom_gender ? this.userdata.custom_gender : "";
        this.certificate_img = JSON.parse(localStorage.getItem("certificate_image")) ? JSON.parse(localStorage.getItem("certificate_image")) : "";
        var cat_array = this.userdata.category_id;
        cat_array.forEach((element) => {
          var cat_id = element.id;
          this.cat_ids.push(cat_id);
        });
        this.cat_ids.join(",");

        // var param =
        //   "lang=" + "0"+
        //   "&username=" + this.userdata.username+
        //   "&first_name=" +  this.userdata.firstname+
        //   "&last_name=" + this.userdata.lastname+
        //   "&email=" + this.userdata.email+
        //   "&mobile_no=" + this.userdata.phone+
        //   "&gender=" + this.userdata.gender+
        //   "&category_id=" + this.cat_ids+
        //   "&profile_image=" + this.userdata.coachphoto+
        //   "&custom_gender=" + this.cus_gender+

        //   "&plan_id=" + this.billing_plans.plan_id+

        //   "&address=" + this.addressdata.address+
        //   "&city=" + this.addressdata.city+
        //   "&state=" + this.addressdata.state+
        //   "&zipcode=" + this.addressdata.zipcode+
        //   "&fb_social_link=" + this.addressdata.fb_link+
        //   "&twitter_social_link=" + his.addressdata.twitter_link+
        //   "&linkedin_social_link=" + this.addressdata.linkedin_link+
        //   "&insta_social_link=" + this.addressdata.insta_link+

        //   "&professional_history=" + this.professionaldetails.professional_history+
        //   "&qualification=" + this.professionaldetails.qualifications+
        //   "&education=" + this.professionaldetails.education+
        //   "&specialization=" + this.professionaldetails.specialization+
        //   "&description=" + this.professionaldetails.description+
        //   "&certification=" + this.professionaldetails.certifications+
        //   "&certificate_image=" + this.certificate_img+

        //   "&password=" + this.user.password+
        //   "&security_questions=" + this.user.question+
        //   "&security_answers=" + this.user.answer+
          
        //   "&timezone=" + constants.timezone+
        //   "&device_token=" + " "+
        //   "&register_id=" + " "+
        //   "&device_type=" + constants.device_type+
        //   "&is_login=" + "1";

        const formData = new FormData()

        formData.append('lang',localStorage.getItem("lang"))
        formData.append("lang",'0')
        formData.append("username", this.userdata.username)
        formData.append("first_name", this.userdata.firstname)
        formData.append("last_name", this.userdata.lastname)
        formData.append("email", this.userdata.email)
        formData.append("mobile_no", this.userdata.phone)
        formData.append("gender", this.userdata.gender)
        formData.append("category_id", this.cat_ids)
        formData.append("profile_image", this.userdata.coachphoto)
        formData.append("custom_gender", this.cus_gender)
        
        formData.append("plan_id", this.billing_plans.plan_id)

        formData.append("address", this.addressdata.address)
        formData.append("city", this.addressdata.city)
        formData.append("state", this.addressdata.state)
        formData.append("zipcode", this.addressdata.zipcode)
        formData.append("fb_social_link", this.addressdata.fb_link)
        formData.append("twitter_social_link", this.addressdata.twitter_link)
        formData.append("linkedin_social_link", this.addressdata.linkedin_link)
        formData.append("insta_social_link", this.addressdata.insta_link)

        formData.append("professional_history", this.professionaldetails.professional_history)
        formData.append("qualification", this.professionaldetails.qualifications)
        formData.append("education", this.professionaldetails.education)
        formData.append("specialization", this.professionaldetails.specialization)
        formData.append("description", this.professionaldetails.description)
        formData.append("certification", this.professionaldetails.certifications)
        formData.append("certification_image", this.certificate_img)

        formData.append("password", this.user.password)
        formData.append("security_questions", this.user.question)
        formData.append("security_answers", this.user.answer)
        
        formData.append("timezone", constants.timezone)
        formData.append("device_token", " ")
        formData.append("register_id", " ")
        formData.append("device_type", constants.device_type)
        formData.append("is_login", "1")

        console.log(this.certificate_img);

        let res = await apiServices.makeAPICall(
          apiServices.postMethod,
          apiServices.URL + apiServices.coach_registerAPI,
          formData,
          () => {}
        );
        if(res.data.flag==1){
          this.Servicedata = res.data.data;
          localStorage.removeItem("address")
          localStorage.removeItem("user")
          localStorage.removeItem("certificate_image")
          localStorage.removeItem("billing_plans")
          localStorage.removeItem("professionaldetails")
          this.$router.push("/login");
          this.ToastAlert('success',res.data.msg)
          localStorage.clear();
        }
        else {
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
      })

      Toast.fire({
        icon: id,
        title: msg
      })
    },
  },
};
</script>
<style>
select.inputText.bor-ra.w-100.p-2.form-control-lg.coach-signup.select-box {
  height: calc(2.5em + 1rem + 2px) !important;
  color: #b4b4b4;
  background-color: #fff;
}
span.floating-label.bg-white-color.px-2.ml-4.coach-label {
  width: 150px;
  height: 24px;
  border-radius: 50px;
  color: #b4b4b4;
  top: 12px !important;
}
input.inputText.bor-ra.w-100.p-2.pl-5.form-control-lg.coach-signup,
input.inputText.bor-ra.w-100.p-2.form-control-lg.coach-signup {
  height: calc(2.5em + 1rem + 2px) !important;
  padding: 0.5rem 1rem;
  font-size: 1.25rem;
  line-height: 2.5;
  border-radius: 0.3rem;
  background-color: #fff;
}
img.iocn-set.set-w.coach-signup-icon {
  top: 33px;
}
input.form-control.social-link {
  border-bottom: 1px solid #bdbdbd;
  height: calc(2.5em + 1rem + 2px) !important;
}
.row.mt-3.pt-3.social-media {
  background-color: #edeaea;
  top: 42px;
}
::placeholder {
  color: #b4b4b4;
  opacity: 1; /* Firefox */
}
:-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  color: #b4b4b4;
}
::-ms-input-placeholder {
  /* Microsoft Edge */
  color: #b4b4b4;
}
.register-button {
  cursor: pointer;
}
</style>