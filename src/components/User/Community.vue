
<template>
  <div>
    <Header />
       <div class="text-center bg-img-header py-5 header-top">
      <h2 class="font-weight-bold pt-4">Community Room</h2>
      <div class="mx-auto border-lines mb-4"></div>
    </div>
    <div class="bg-light-grew ">
      <div class="container py-5">
        <div class="container box-shadow rounded p-0 bg-white border-radius" style="width: 750px" >
          <div class="" >
            <div class="text-center h4 py-2 text-center font-weight-bold pb-2">Community Room</div>
            <div class="px-5" style="height: 500px;overflow-y: auto;overflow-x: hidden;">
           <div class="row bg-blue-light border-radius my-4" v-for="(item, index) in community_respo" :key="index">
             <div class="col-2 py-2">
               <img v-if="!item.profile_image" src="../../assets/img/ic_user_profile.png" width="95px" class="float-left rounded-circle"/>
                <img v-if="item.profile_image" :src="item.profile_image" alt="Avatar" class="avtar">
               <div class="text-green text-title pt-2 font"> {{item.username}} </div>
             </div>
             <div class="col-7 h6 py-3">
               <div class="">
                  {{item.message}}
                </div>
                <!-- <div >
               <img v-for="(items, index) in item.image_url" :key="index" :src="items.image_url" width="60px" height="60px" class="m-2 rounded" alt="">
                </div> -->
             </div>
             <div class="col-3 mt-3 pl-5">
                {{item.message_date| formatDate}}
                <div class="comment-bottom bg-green-l text-white p-2 cursor" v-on:click="comment(item.community_id)">
                  <img src="../../assets/img/ic_comment.png" alt="">
                 {{item.is_comment}} Comments
                </div>
             </div>
           </div>
           </div>
          </div>
         <div class="px-2 py-3">
           <input type="text" v-model="users.message" v-on:keyup.enter="onEnter" class="send-input p-2 borders" placeholder="Write Message...." style="width:70%" name="" id="">
          
           <label for="file-input" style="display: inline;">
                <img style="width:10%" class="p-4 cursor" src="./../../assets/img/ic_chat_gree_instagram.png"/>
           </label>
          
            <input id="file-input" type="file" hidden accept="image/*"
                    multiple
                    @change="onImageListPicked" />
           <button style="width:20%" @click.prevent="Send()" class="btn bg-green-l text-white">Sent</button>
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
import constants from "../../components/Service/constants.js";
import apiServices from "../../components/Service/apiservice";
import moment from 'moment';
import Vue from 'vue'

Vue.filter('formatDate', function(value) {
    if (value) {
      return moment(value).fromNow();
    }
});

export default {
  name: "Community",
  data() {
    return {
      user: {},
      users: {},
       community_respo:[],
             messageImage:[],
             imageUrlList:[],
             number: 1
    };
  },
  mounted() {
    // const dateTimeAgo = moment("2021-01-21 11:04:00").fromNow();
    // console.log(dateTimeAgo); //> 6 minutes ago
     this.user = JSON.parse(localStorage.getItem("Login_data"));
    this.community();
  },
  components: {
    Header,
    Footer,
  },
   methods: {
      // Upload message image
    onImageListPicked (e) {
      let selectedFiles=e.target.files;
        if(!selectedFiles.length){
            return false;
        }
        for(let i=0;i<selectedFiles.length;i++){
          this.imageUrlList.push(selectedFiles[i]);
          const data = {
            'name' : 'file'+this.number,
          }
          this.messageImage.push(data);
          this.number++;
        }
        console.log(this.messageImage);
    },

      onEnter() {
       this.Send();
    },
      async community() {
         const formData = new FormData()

        formData.append("lang",'0');
        formData.append("user_id",this.user.user_id)
        formData.append("access_token",this.user.access_token)
        // formData.append("message",this.user.message)
        formData.append("timezone",constants.timezone)
        // formData.append("images",this.userdata.image)
        formData.append("offset","0")
        formData.append("flag_view","0")

      let res = await apiServices.makeAPICall(
        apiServices.postMethod,
        apiServices.URL + apiServices.community_roomAPI,
        formData,
        () => {}
      );
      if (res.data.flag == 1) {
        // console.log(res.data.data);
        this.community_respo = res.data.data;
        // this.ToastAlert("success", res.data.msg);
      } else {
        this.ToastAlert("error", res.data.msg);
      }
    },
      async Send() {
        console.log("ji");
         var k = 1;
         const formData = new FormData()

        formData.append("lang",'0');
        formData.append("user_id",this.user.user_id)
        formData.append("access_token",this.user.access_token)
         if(this.users.message){
           formData.append("message",this.users.message)
         }
         else{
           formData.append("message",'')
         }
        formData.append("timezone",constants.timezone)
        console.log(this.messageImage,"........................");
        if(this.imageUrlList){
           for(let i=0; i<this.imageUrlList.length;i++){
                formData.append('file'+k,this.imageUrlList[i]);
                k++;
              }
          formData.append('images', JSON.stringify(this.messageImage))
        }
        formData.append("flag_view","1")

      let res = await apiServices.makeAPICall(
        apiServices.postMethod,
        apiServices.URL + apiServices.community_roomAPI,
        formData,
        () => {}
      );
      if (res.data.flag == 1) {
        console.log(res.data.data);
        this.community_respo = res.data.data;
        this.users.message='';
         this.community();
      } else {
        this.ToastAlert("error", res.data.msg);
      }
    },
    comment(id){
console.log(id);
this.$router.push("/Comment/"+id).catch(()=>{});
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

</style>