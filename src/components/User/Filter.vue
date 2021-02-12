<template>
  <div>
    <Header />
    <div class="container-fluid header-top myplan-section p-5">
      <div class="container myplans" style="width: 750px">
        <div class="row border-bottom p-3">
        
          <div class="col-md font-weight-bold my-auto cursor" v-on:click="coachlist()">
            <img
              src="../../assets/img/ic_reviews_right_black_arrow.png"
              class="img img-responsive w-20 mr-2"
            />
            Back
          </div>
          
          <div class="col-md font-weight-bold text-right pr-5 h3 my-auto mr-5">Filter</div>
          <div class="col-md font-weight-bold text-right">
            <img
              src="img/ic_about_telacoach_logo.219fee6f.png"
              class="img img-responsive w-25"
            />
          </div>
        </div>
        <div class="row p-3 font-weight-bold pl-4">
          FILTER COACH BY CATEGORY
        </div>

        <div class="row pl-5 p-3 filter-section">
          <form  class="">
            <div class="custom-control custom-checkbox p-2" v-for="(item, index) in category"  :key="index">
              <input 
                type="checkbox"
                class="custom-control-input"
               v-bind:id="index"
                v-model="SelectedItems[item.category_id]"
                v-bind:key="index"
              />
              <label class="custom-control-label pl-3 check-title" v-bind:for="index"
                >{{ item.category_name }}</label
              >
            </div>
          </form>
        </div>

        <div class="row p-3 font-weight-bold pl-4">FILTER COACH BY HIS/HER STATE</div>
        <input type="text" v-model="user.sate" placeholder="Enter State name" class="border-top-0 border-right-0 border-left-0 w-100 border-bottom">

        <div class="row p-3 font-weight-bold pl-4">FILTER RECOMMENDED COACH</div>
        <div class="custom-control custom-checkbox p-2 pl-4">
          <input type="checkbox"  v-model="user.recommended"  :true-value="1" :false-value="0" class="custom-control-input" id="chekid"/>
            <label class="custom-control-label pl-3 check-title " for="chekid">
              Recommended
            </label>
        </div>
        <div class="row p-3 font-weight-bold pl-4">FILTER COACH BY RATING</div>

        <div class="row pl-5 p-3 filter-section">
          <form  class="coach-ratting-form">
            <div class="custom-control custom-checkbox p-2" v-for="(items, indexs) in Items"  :key="indexs">
              <input
                type="checkbox"
                class="custom-control-input"
                v-bind:id="indexs+22" v-model="Selectedrating[items]" 
              />
              <label class="custom-control-label pl-3 check-title" v-bind:for="indexs+22"
                >{{items}}
              </label>
                <img
              src="../../assets/img/ic_star_select.png"
              class="img img-responsive ml-3"
            />
            </div>
          </form>
        </div>

        <div class="row">
           <!-- <router-link class="text-white font-weight-bold w-100" to="/Coachlist"> -->
          <button v-on:click="next()"
            class="btn btn-success w-100 btn-lg btn-block rounded-bottom btn-filter p-3"
            type="button"
          >
            NEXT
          </button>
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

export default {
  name: "Filters",
  data() {
    return {
       category: [],
       user:{},
        Items : ["1", "2", "3","4","5"],
        SelectedItems : {},
        Selectedrating : {
          "1":"",
          "2":"",
          "3":"",
          "4":"",
          "5":"",
        },
        arraydata : [],
        arraydataratting : [],
    };
  },
    mounted() {
      if(localStorage.getItem('category_id')!=null){
         if(localStorage.getItem('SelectedItems_array')!=null){
            this.SelectedItems=JSON.parse(localStorage.getItem('SelectedItems_array'))
         }
      }
      if(localStorage.getItem('state')!=null){
        console.log("if");
      this.user.sate=localStorage.getItem('state')
      }
      if(localStorage.getItem('recommended')!=null){
        console.log("if");
      this.user.recommended=localStorage.getItem('recommended')
      }
      if(localStorage.getItem('star_rating')!=null){
        console.log("if");
      this.Selectedrating=JSON.parse(localStorage.getItem('star_rating_array'))
      }
      
    this.CoachAPI();
  },
  components: {
    Header,
    Footer,
  },
  methods:{
      async CoachAPI() {
      var param = "lang=" + "0";
      let res = await apiServices.makeAPICall(
        apiServices.postMethod,
        apiServices.URL + apiServices.coach_category_listAPI,
        param,
        () => {}
      );
      this.category = res.data.data;
    },
    next(){
    localStorage.setItem("SelectedItems_array",JSON.stringify(this.SelectedItems));
    localStorage.setItem("star_rating_array",JSON.stringify(this.Selectedrating));
      this.arraydata=[];
      Object.keys(this.SelectedItems).map((key) => {
         if(this.SelectedItems[key]==true){
            this.arraydata.push(key)
         }
      })
      if(this.user.sate==null){
        this.user.sate='';
      }
      if(this.user.recommended==null){
        this.user.recommended='0';
      }
      localStorage.setItem('category_id',this.arraydata)
      localStorage.setItem('state',this.user.sate)
      localStorage.setItem('recommended',this.user.recommended)
      this.arraydataratting=[];
      Object.keys(this.Selectedrating).map((key) => {
         if(this.Selectedrating[key]==true){
            this.arraydataratting.push(key)
         }
      })
      localStorage.setItem('star_rating',this.arraydataratting)
      this.$router.push("/coachlist").catch(()=>{});
    },
    coachlist(){
      console.log("clicke");
      if(localStorage.getItem('filterpage')!=null){
        if(localStorage.getItem('filterpage')=='home'){
          this.$router.push("/home").catch(()=>{});
        }
        else
        {
           this.$router.push("/coachlist").catch(()=>{});
        }
      }
    }
  }
};
</script>
<style>
 @import "../../assets/css/custom.css";
</style>