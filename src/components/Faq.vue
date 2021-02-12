
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
                        <router-link v-if="this.coach.is_login == '1'" class="text-dark" to="/profilesettingcoach">
                        <div class="float-left">
                            <img src="../assets/img/ic_back_arrow.png" width="25" class="mr-3"/>Back
                        </div>
                        </router-link>
                        <router-link v-if="this.coach.is_login == '0'" class="text-dark" to="/Profilesetting">
                        <div class="float-left">
                            <img src="../assets/img/ic_back_arrow.png" width="25" class="mr-3"/>Back
                        </div>
                        </router-link>
                    </div>
                    <div class="text-center h5 text-center font-weight-bold border-bottom pr-100 mb-0 pb-4">FAQ</div>
                    <div id="accordion" v-if="is_flag == '1'">
                        <div class="card" v-for="(item, index) in faq_data" :key="index">
                            <div class="card-header">
                                <a class="card-link" data-toggle="collapse" :href="'#collapse'+index">
                                {{item.question}}
                                </a>
                            </div>
                            <div :id="'collapse'+index" class="collapse" data-parent="#accordion">
                                <div class="card-body">
                                {{item.answer}}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="px-5 p-4" v-if="is_flag != '1'">
                        <div class="text-center">
                            <span style="color: red;">{{msg}}</span>
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
import Header from "./Header.vue";
import Footer from "./Footer.vue";
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios);
import apiServices from "../components/Service/apiservice";

export default {
    name: "Faq",
    data() {
        return {
            faq_data: [],
            is_flag: '',
            msg: '',
            coach: {}
        };
    },
    mounted() {
        this.getFaqData();
        this.coach = JSON.parse(localStorage.getItem("Login_data"));
    },
    components: {
        Header,
        Footer,
    },
    methods: {
        async getFaqData() {
            var param = "lang=" + "0";
            let res = await apiServices.makeAPICall(apiServices.postMethod,apiServices.URL + apiServices.faq_listAPI,param,() => {});
            if(res.data.flag == 1) {
                this.is_flag = res.data.flag;
                Vue.prototype.$faq_list = res.data.data;
                this.faq_data = Vue.prototype.$faq_list;
            }
            else {
                this.is_flag = res.data.flag;
                this.msg = res.data.msg;
            }
        },
    }
};
</script>
<style>

</style>