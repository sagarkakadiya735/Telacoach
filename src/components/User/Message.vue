
<template>
  <div>
    <Header />
    <div class="text-center bg-img-header py-5 header-top">
      <h2 class="font-weight-bold pt-4">Messages</h2>
      <div class="mx-auto border-lines mb-4"></div>
    </div>

       <div class="bg-grew-dark">
       <div class="container p-5">
        <div class="row">
          <div class="col-md-4" >
            <div class="box-shadow bg-white p-0 border-radius h-chat">
              <div class="user-input-wrp px-4 pt-2 pb-0">
              </div>
              <div class="my-4">
                <div class="border-bottom px-2 py-1 bg-green-l" v-for="(item, index) in user_respone" :key="index">
                  <div class="row m-0 cursor" v-on:click="UsermessageAPI(item)">
                    <div class="col-3 p-0">
                      <img :src="item.coach_image" class="p-1" style="border-radius: 50%;" width="70px" height="70px" @error="imageAlt">
                    </div>
                    <div class="col-6 p-0 py-2">
                      <h5 class="card-title text-white">
                     {{item.coach_name}}
                      </h5>
                       <h6 class="card-subtitle text-white" v-if="item.message">
                          {{item.message}} <span v-if="item.message_count>0" class="set-round-count px-2 py-1 ml-5">{{item.message_count}}</span>
                       </h6>
                    </div>
                  </div>
                </div>
               
              </div>
              
            </div>
          </div>
          <div class="col-md-8" style="height: 400px;">
             <div class="box-shadow bg-white p-0 h-chat" id="">
               <div class="">
                 <div v-if="showinput==1" class="row m-0 border-bottom">
                    <div class="col-1 p-0">
                      <img v-if="image" :src="image" class="p-2" style="border-radius: 50%;" width="70px" height="70px" @error="imageAlt">
                    </div>
                    <div class="col-9 pl-3 py-2">
                      <h5 class="card-title">
                    {{user}}
                      </h5>
                    </div>
                    <div class="col-2 p-0 py-2 text-right">
                      <label for="file-input">
                       <img src="../../assets/img/ic_green_attach.png" alt="" class="p-2" width="40px">
                      </label>
                    </div>
                      <input
                      id="file-input"
                    type="file"
                    style="display: none"
                    ref="fileInputList"
                    accept="image/*"
                    multiple
                    @change="onImageListPicked">
                  </div>
                  <!-- --------------------------------------------------------------- -->
                  <div>
                    <div>
                    <div id="chat-box" class="chat border-bottom-0" style="height: 472px;" >
                      <div v-for="(item, index) in messagelist_respone" :key="index">
                          <div class="message left" v-if="item.conversation_type==1">
                           <img v-if="item.user_image" :src="item.user_image" class="p-2" style="border-radius: 50%;" width="70px" height="70px" @error="imageAlt">
                            <span class="chat-l-radius bg-green-l text-white message-text float-none p-3 ml-0" v-if="item.message != ''">
                                {{item.message}}
                            </span>
                            <span v-if="item.message_image != ''">
                              <span v-for="(img, index1) in item.message_image" :key="index1">
                                <img v-if="img.message_image" :src="img.message_image" class="p-0" width="50px" height="70px">
                              </span>
                            </span>
                            <div class="text-muted ml-5 pl-4">{{item.message_date | formatDate2}}</div>
                        </div>
                        <div class="message right" v-if="item.conversation_type==0">
                            <img v-if="item.user_image" :src="item.user_image" class="p-2" style="border-radius: 50%;float: right;" width="70px" height="70px" @error="imageAlt">
                            <div class="chat-message-text">
                                <div style="float: right;" v-if="item.message != ''">{{item.message}}</div>
                                <div style="float: right;" v-if="item.message_image != ''">
                                  <span v-for="(img, index1) in item.message_image" :key="index1">
                                    <img v-if="img.message_image" :src="img.message_image" class="p-0" width="50px" height="70px">
                                  </span>
                                </div>
                                <br/>
                                <br v-if="item.message_image != ''">
                                <br v-if="item.message_image != ''">
                                <div class="text-muted ml-5 pl-4">{{item.message_date | formatDate2}}</div>
                            </div>
                        </div>
                         </div>
                    </div>
                    <div class="px-4 pt-1">
                    <form id="send" v-if="showinput==1">
                      <input type="text" v-model="msg" id="msgInput" class="send-input p-2" placeholder="Message" />
                      <button type="button" v-on:click="send()" class="btn bg-green-l px-4 mx-3 p-2 text-white"> Send</button>
                    </form>
                    </div>
                </div>

                  </div>
               </div>
                  
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
import apiServices from "../../components/Service/apiservice";
import constants from "../../components/Service/constants";
import fire from "../../main";
import moment from 'moment';
import Vue from 'vue'
import img from '../../assets/img/ic_requests_user_profile.png';

Vue.filter('formatDate2', function(value) {
    if (value) {
      return moment.utc(String(value)).fromNow()
    }
});
Vue.filter('reverse', function(value) {
  // slice to make a copy of array, then reverse the copy
  return value.slice().reverse();
});
export default {
  name: "Message",
  data() {
    return {
      Userdata:{},
      user_respone:[],
      usermess:{},
      conversation_ids:{},
      messagelist_respone:[],
      imageUrlList:[],
      image:"",
      user:"",
      mssage:"",
      msg:"",
       users: {},
      showinput:"0",
       messageImage:[],
      number: 1,
      message_display: 1,
      ref: fire.database().ref('telacoach').get()
    };
  },
updated() {
		this.scrollToEnd();
	},
   mounted() {
    localStorage.removeItem("conversation_id")
     localStorage.removeItem("user_data")
    this.Userdata = JSON.parse(localStorage.getItem("Login_data"));
     this.UserlistAPI();
     const itemsRef = fire.database().ref('conversions');
     itemsRef.on('value', snapshot => {
        let data = snapshot.val();
        var messages = {};
        Object.keys(data).forEach(key => {
          if(this.conversation_ids==key){
            messages.book_id=( data[key].book_id)
            messages.conversation_id=( data[key].conversation_id)
            messages.conversation_type=( data[key].conversation_type)
            messages.is_read=( data[key].is_read)
            messages.is_sent_by_me=( data[key].is_sent_by_me)
            messages.is_view=( data[key].is_view)
            messages.message=( data[key].message)
            messages.message_date=( data[key].message_date)
            messages.message_id=( data[key].message_id)
            messages.message_image=( data[key].message_image)
            messages.user_id=( data[key].user_id)
            messages.user_image=( data[key].user_image)
            messages.username=( data[key].username)
            this.messagelist_respone.push(messages);
            }
        });
    });
  },
  components: {
    Header,
    Footer,
  },
   methods:{
     imageAlt(e) {
      e.target.src = img;
    },
     scrollToEnd() {
			document.getElementById('chat-box').scrollTop = document.getElementById('chat-box').scrollHeight;
		},
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
        this.send();
        // console.log(this.messageImage);
    },
  async  UserlistAPI(){
    var param = 
    "lang=" + "0"+
    "&user_id=" + this.Userdata.user_id+
    "&access_token=" + this.Userdata.access_token+
    "&offset=" + "0"+
    "&flag_view=" + "0";
    let res = await apiServices.makeAPICall(apiServices.postMethod,apiServices.URL + apiServices.message_listAPI,param,() => {});
    if(res.data.flag==1){
      // this.ToastAlert('success',res.data.msg)
      this.user_respone=res.data.data
      if(this.message_display){
        this.UsermessageAPI(res.data.data[0]);
        this.message_display =0;
      }
      }
    else
      {
        this.ToastAlert('error',res.data.msg)
      }
    },
  async  UsermessageAPI(item){
     this.UserlistAPI();
    localStorage.setItem("user_data",JSON.stringify(item));
    if(localStorage.getItem("user_data")!=null){
      this.showinput=1
    }
    var param = 
    "lang=" + "0"+
    "&user_id=" + this.Userdata.user_id+
    "&access_token=" + this.Userdata.access_token+
    "&coach_id=" + item.coach_id+
    "&conversation_id=" + item.conversation_id+
    "&timezone=" + constants.timezone+
    "&is_flag=" + "0"+
    "&offset=" + "0"+
    "&flag_view=" + "0";
    let res = await apiServices.makeAPICall(apiServices.postMethod,apiServices.URL + apiServices.user_send_message_webAPI,param,() => {});
    if(res.data.flag==1){
      this.messagelist_respone=res.data.data
      this.messagelist_respone.slice().reverse()
      // console.log(this.messagelist_respone,"......");
      localStorage.setItem("conversation_id",res.data.data[0].conversation_id)
      this.conversation_ids = localStorage.getItem("conversation_id");
          this.image =item.coach_image
          this.user =item.coach_name
      }
    else
      {
        this.messagelist_respone=[];
        this.ToastAlert('error',res.data.msg)
        this.image='';
        this.user='';
      }
    },
   async send(){
     var k = 1;
     this.mssage='';
      this.usermess = JSON.parse(localStorage.getItem("user_data"));
         const formData = new FormData()

        formData.append('lang',"0")
        formData.append('user_id', this.Userdata.user_id)
        formData.append('access_token', this.Userdata.access_token)
        formData.append('coach_id', this.usermess.coach_id)
        formData.append('book_id', this.usermess.book_id)
        formData.append('conversation_id', this.usermess.conversation_id)
        formData.append('message', this.msg)
        for(let i=0; i<this.imageUrlList.length;i++){
        formData.append('file'+k,this.imageUrlList[i]);
        k++;
      }
      formData.append('message_image', JSON.stringify(this.messageImage))
        formData.append('timezone', constants.timezone)
        formData.append('is_flag', "0")
        // formData.append('offset', "-1")
        formData.append('flag_view', "1")
        let res = await apiServices.makeAPICall(apiServices.postMethod,apiServices.URL + apiServices.user_send_message_webAPI,formData,() => {});
        if(res.data.flag==1){
          this.msg="";
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
<style scoped>
.nav-tabs .nav-item.show .nav-link,
.nav-tabs .nav-link.active {
  color: #ffffff !important;
  background-color: #369f04;
  border-color: #369f04 #369f04 #369f04 #369f04;
  border-radius: 0px;
  border-bottom: 2px solid #369f04;
}
.set-round-count{
      background-color: white;
    color: #36a004;
    border-radius: 50%;
}
.send-input{
    border: 2px solid #dbdbdb !important;
    border-radius: 10px !important;
}
.chat-message-text {
  margin-top: 15px;
  background-color: white;
  float: right;
}
.msg-user-list {
  cursor: pointer;
}
</style>