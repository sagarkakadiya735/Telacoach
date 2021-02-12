<template>
  <div>
    <Header />
    <div class="bg-light-grew pt-5">
      <div class="container py-5">
        <div
          class="container box-shadow rounded mt-5 p-0 bg-white border-radius inner-container"
        >
          <div class="">
            <div class="px-4 pt-4 font-weight-bold">
              <router-link class="text-dark font-weight-bold" to="/booksession">
                <div class="float-left">
                  <img
                    src="../../assets/img/ic_back_arrow.png"
                    width="25"
                    class="mr-3"
                  />Back
                </div>
              </router-link>
            </div>
            <div
              class="text-center h3 text-center font-weight-bold border-bottom pr-100 pb-2 user-plan-title"
            >
              My Plan
            </div>
            <!-- <router-link class="text-green font-weight-bold" to="/cards"> -->
            <div
              class="pl-3 text-green h4 font-weight-bold border-bottom pr-100 pb-2 plan-name"
            >
              {{ plan_name }}
            </div>
            <div
              class="p-4"
              v-for="(item, index) in subscriptiondata"
              :key="index"
            >
              <table
                style="width: 100%"
                class="box-shadow rouded"
                v-on:click="cardData(item)"
              >
                <tr>
                  <td>
                    <div class="p-3">
                      <h1 class="text-green">{{ item.price }}</h1>
                      <div>{{ item.time }}</div>
                      <div>{{ item.session }}</div>
                    </div>
                  </td>
                  <td>
                    <i class="icon ion-ios-telephone">
                      <img src="../../assets/img/ic_left_arrow_green.png" />
                    </i>
                  </td>
                </tr>
              </table>
            </div>
            <!-- </router-link> -->
          </div>
          <!-- <router-link class="text-white font-weight-bold" to="/reportcoach">
          <button class="mx-auto w-100 border-0 p-3 mt-3 bg-success text-center btn-green text-white border-r-bx">NEXT</button>
           </router-link> -->
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
  name: "Myplan",
  data() {
    return {
      coachdata: {},
      subscriptiondata: [],
      plan_name: "",
    };
  },
  mounted() {
    this.coachdata = JSON.parse(localStorage.getItem("coach_data"));
    this.subscriptionAPI();
  },
  components: {
    Header,
    Footer,
  },
  methods: {
    async subscriptionAPI() {
      var param =
        "lang=" +
        "0" +
        "&user_id=" +
        "" +
        "&coach_id=" +
        this.coachdata.coach_id +
        "&timezone=" +
        constants.timezone;
      let res = await apiServices.makeAPICall(
        apiServices.postMethod,
        apiServices.URL + apiServices.subscription_listAPI,
        param,
        () => {}
      );
      if (res.data.flag == 1) {
        this.subscriptiondata = res.data.data[0].subscription_data;
        this.plan_name = res.data.data[0].plan_name;
        localStorage.setItem("plan_id", res.data.data[0].plan_id);
      } else {
        this.ToastAlert("error", res.data.msg);
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
    cardData(item) {
      console.log(item, "item");
      localStorage.setItem("my_plan", JSON.stringify(item));
      this.$router.push("/cards").catch(() => {});
    },
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
.custom-select {
  background: #fff url("../../assets/img/ic_drop_down_green_arrow.png")
    no-repeat right 0.75rem center/15px 10px;
}
</style>