
<template>
  <div>
    <Header />
    <div class="text-center bg-img-header py-5 header-top">
      <h2 class="font-weight-bold pt-4">Contact US</h2>
      <div class="mx-auto border-lines mb-4"></div>
    </div>
    <div class="bg-grew-dark">
      <div class="container py-5">
       <div>
           <div class="row">
            <!-- <div class="col-6 mt-5">
                <div class="py-2">
                    <img src="../assets/img/ic_contact_green_map.png" width="20px" class="float-left"/>
                    <div class="">
                        <div class="card-title ml-5">
                        Pasdasd .C asdasd DSAD TX
                        <br>
                        Pasdasd .C asdasd DSAD TX
                        </div>
                    </div>
                </div>
                <div class="py-2">
                    <img src="../assets/img/ic_contact_phone.png" width="20px" class="float-left"/>
                    <div class="">
                        <div class="card-title ml-5">
                        +91 88888-77777
                        </div>
                    </div>
                </div>
                <div class="py-2">
                    <img src="../assets/img/ic_contact_mail.png" width="20px" class="float-left"/>
                    <div class="">
                        <div class="card-title ml-5">
                       telacoach123@gmail.com
                        </div>
                    </div>
                </div>
                <div class="py-2">
                    <img src="../assets/img/ic_contact_speak.png" width="20px" class="float-left"/>
                    <div class="">
                        <div class="card-title ml-5">
                        Facebook/Twitter
                        </div>
                    </div>
                </div>
            </div> -->
            <div class="col-3"></div>
            <div class="col-6">
                <div class="bg-white text-body border-radius">
                    <div class="p-5 text-center">
                      <div class="p-4
                      "><img src="../assets/img/ic_email_sign_up_select@2x.png" width="50px" /></div>
                      <div class="h4">Send us a note</div>
                      <div class="h6 text-body p-3">Shoot us a note and we'd be happy to help</div>
                      <br/>
                      <br/>
                      <br/>
                      <div class="h6"><a :href="'mailto:info@Telacoach.com'">info@Telacoach.com</a></div>
                      <div class="h6"><a :href="'mailto:sales@Telacoach.com'">sales@Telacoach.com</a></div>
                    </div>
                </div>
            </div>
            <div class="col-3"></div>

           </div>
       </div>
      </div>
    </div>

    <Footer />
  </div>
</template>
  
<script>
import Header from "./Header.vue";
import Footer from "./Footer.vue";

export default {
  name: "Contact",
  data() {
    return {
    };
  },
  components: {
    Header,
    Footer,
  },
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