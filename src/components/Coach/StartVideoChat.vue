
<template>
  <div>
    <Header />
    <div class="text-center bg-img-header py-5 header-top">
      <h2 class="font-weight-bold pt-4">Connect With Client</h2>
      <div class="mx-auto border-lines mb-4"></div>
    </div>
    <div class="bg-grew-dark">
      <div class="container py-5">
        <div
          class="container box-shadow rounded mt-5 p-0 bg-white border-radius"
          style="width: 750px"
        >
          <div class="">

            <div class="row mx-3 pt-5">
                <div class="col-md-2">
                  <img
                    src="../../assets/img/ic_sign_user_profile_splash_holder.png"
                    class="float-left rounded-circle px-3"
                    width="120px"
                  />
                </div>
                <div class="col-md-8 float-left">
                  <h1 class="card-title text-green">Wallance Chuck</h1>
                  <h2 class="text-green">Boston</h2>
                </div>
                <div class="col-md-2 float-right">
                  <img
                    src="../../assets/img/ic_chat_icon.png"
                    alt=""
                  />
                </div>
            </div>

        <div class="row">
            <div class="px-4 card my-3 border-0 w-100 m-3">
              <div class="card-body p-0">
                <div class="p-3">
                  <div class="message">
                    <div class="font-weight-bold mt-4 text-green">
                      Client's Location
                    </div>
                    <div class="user-input-wrp line-h">
                      <br />
                      <input
                        type="text"
                        class="inputText border-bottom-0 w-100 p-3 pl-5 rounded boder-1 w-100 bg-blue-light"
                        placeholder="Surat"
                      />
                      <img
                        src="../../assets/img/ic_video_connect_location.png"
                        class="iocn-set set-w pt-3"
                      />
                    </div>
                    <div class="font-weight-bold mt-4 text-green">Date</div>
                    <div class="user-input-wrp line-h">
                      <br />
                      <input
                        type="text"
                        class="inputText border-bottom-0 w-100 p-3 pl-5 rounded boder-1 w-100 bg-blue-light"
                        placeholder="02/10/2020"
                      />
                      <img
                        src="../../assets/img/ic_video_connect_calendar.png"
                        class="iocn-set set-w pt-3"
                      />
                    </div>
                    <div class="font-weight-bold mt-4 text-green">
                      Start Time
                    </div>
                    <div class="user-input-wrp line-h">
                      <br />
                      <input
                        type="text"
                        class="inputText border-bottom-0 w-100 p-3 pl-5 rounded boder-1 w-100 bg-blue-light"
                        placeholder="5:56 AM"
                      />
                      <img
                        src="../../assets/img/ic_video_connect_clock.png"
                        class="iocn-set set-w pt-3"
                      />
                    </div>
                    <div class="font-weight-bold mt-4 text-green">End Time</div>
                    <div class="user-input-wrp line-h">
                      <br />
                      <input
                        type="text"
                        class="inputText border-bottom-0 w-100 p-3 pl-5 rounded boder-1 w-100 bg-blue-light"
                        placeholder="6:55 AM"
                      />
                      <img
                        src="../../assets/img/ic_video_connect_clock.png"
                        class="iocn-set set-w pt-3"
                      />
                    </div>
                    
                    <div class="font-weight-bold mt-4 text-green">
                      Consultations Period
                    </div>
                    <div class="user-input-wrp line-h">
                      <br />
                      <input
                        type="text"
                        class="inputText border-bottom-0 w-100 p-3 pl-5 rounded boder-1 w-100 bg-blue-light"
                        placeholder="Chart"
                      />
                      <img
                        src="../../assets/img/ic_video_connect_appointment.png"
                        class="iocn-set set-w pt-3"
                      />
                    </div>
                    <div class="font-weight-bold mt-4 text-green">
                      Consultations Type
                    </div>
                    <div class="user-input-wrp line-h">
                      <br />
                      <input
                        type="text"
                        class="inputText border-bottom-0 w-100 p-3 pl-5 rounded boder-1 w-100 bg-blue-light"
                        placeholder="1 Hour"
                      />
                      <img
                        src="../../assets/img/ic_video_connect_appointment.png"
                        class="iocn-set set-w pt-3"
                      />
                    </div>
                    <div class="font-weight-bold mt-4 text-green">Provided Number</div>
                    <div class="user-input-wrp line-h">
                      <br />
                      <input
                        type="text"
                        class="inputText border-bottom-0 w-100 p-3 pl-5 rounded boder-1 w-100 bg-blue-light"
                        placeholder="+91 102345879"
                      />
                      <img
                        src="../../assets/img/ic_video_connect_phone.png"
                        class="iocn-set set-w pt-2"
                      />
                    </div>
                    <div class="font-weight-bold mt-4 text-green">Alternative Number</div>
                    <div class="user-input-wrp line-h">
                      <br />
                      <input
                        type="text"
                        class="inputText border-bottom-0 w-100 p-3 pl-5 rounded boder-1 w-100 bg-blue-light"
                        placeholder="+91 102345879"
                      />
                      <img
                        src="../../assets/img/ic_video_connect_phone.png"
                        class="iocn-set set-w pt-2"
                      />
                    </div>

                    <div class="col-md-12 px-5">
<button
            class="w-100 border-0 p-3 mt-3 bg-success text-center btn-green text-white border-r-bx"
          >
           START VIDEO CHAT
          </button>
                    </div>
                    
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

export default {
  name: "Videodetails",
  data() {
    return {};
  },
  components: {
    Header,
    Footer,
  },
};
</script>