
<template>
  <div>
    <Header />
    <div class="text-center bg-img-header py-5 header-top">
      <h2 class="font-weight-bold pt-4">Setting</h2>
      <div class="mx-auto border-lines mb-4"></div>
    </div>
    <div class="bg-grew-dark ">
      <div class="container py-5">
        <div
          class="container box-shadow rounded mt-5 p-0 bg-white border-radius"
          style="width: 750px"
        >
          <div class="">
           <div class="px-4 pt-4  font-weight-bold">
               <div class="float-left">
                   <img
                src="../../assets/img/ic_back_arrow.png"
                width="25"
                class="mr-3 "
              />Back
               </div>
           </div>
            <div class="text-center h3 text-center font-weight-bold border-bottom pr-100 pb-2">Report a Problem</div>
          
            <div class="px-4">
                <div class="font-weight-bold mt-4">Comment</div>
            <textarea name="Comment" id="" placeholder="Enter comment here.." class="rounded boder-1 w-100 bg-blue-light p-3" rows="10"></textarea>
            </div>
          
          </div>
          <button class="mx-auto w-100 border-0 p-3 mt-3 bg-success text-center btn-green text-white border-r-bx">SUBMIT</button>
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
  name: "Setting",
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
.nav-tabs .nav-item.show .nav-link,
.nav-tabs .nav-link.active {
  color: #369f04 !important;
  background-color: #f7f7f7;
  border-color: #f7f7f7 #ccc #369f04 #f7f7f7;
}
</style>