<template>
  <div>
    <Header />
    <div class="container-fluid header-top myplan-section p-5">
      <div class="container myplans content-section">
        <div class="row border-bottom p-3">
          <div class="col-md font-weight-bold my-auto">
            <img
              src="../../assets/img/ic_reviews_right_black_arrow.png"
              class="img img-responsive w-20"
            />
            Back
          </div>
          <div class="col-md font-weight-bold text-center my-auto">
            Book Session
          </div>
          <div class="col-md font-weight-bold text-right"></div>
        </div>

        <div class="row mx-5 my-4">
          <div class="row rounded" style="width: 100%">
            <h1 class="px-5 text-center text-color-green">
              How Would you like to Connect?
            </h1>
          </div>
        </div>

        <div class="row px-3 mx-5 my-3 call-types mb-4">
          <div class="col-md-11 font-weight-bold">Phone</div>
          <div class="col-md-1">
            <img
              src="../../assets/img/ic_redio_button_big_select.png"
              class="img img-responsive w-20"
            />
          </div>
        </div>

        <div class="row px-3 mx-5 my-3 call-types mb-4">
          <div class="col-md-11 font-weight-bold">Video Call</div>
          <div class="col-md-1">
            <img
              src="../../assets/img/ic_check_big_book_session_unselect.png"
              class="img img-responsive w-20"
            />
          </div>
        </div>

        <div class="row px-3 mx-5 my-3 call-types mb-4">
          <div class="col-md-11 font-weight-bold">Text Chat</div>
          <div class="col-md-1">
            <img
              src="../../assets/img/ic_check_big_book_session_unselect.png"
              class="img img-responsive w-20"
            />
          </div>
        </div>

        <div class="row px-5 mb-5 mx-1">
          <h4>Video calls recommended over a WiFi</h4>
          <h4>Connection.Cellular connection may be slower.</h4>
        </div>

        <div class="row card-buttons p-3">
          <div class="w-100">
            <button
              class="btn btn-lg btn-block btn-filter text-white add-card-button"
              type="button"
            >
              <strong>BOOK</strong>
            </button>
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
  name: "VideoSession",
  data() {
    return {};
  },
  components: {
    Header,
    Footer,
  },
};
</script>
<style>
h1.exp-date.text-white {
  margin-top: 37px;
}
button.btn.btn-lg.btn-block.btn-filter.text-white.add-card-button {
  border-right: 0px solid #ffffff;
}
.call-types {
  padding: 1rem;
  border: 2px solid #36a103;
  border-radius: 10px;
}
.text-color-green {
  color: #36a103;
}
@import "../../assets/css/custom.css";
</style>