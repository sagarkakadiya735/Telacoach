<template>
  <div>
    <img src="../assets/img/ic_about_telacoach_logo.png" alt="Telacoach" />
    <h1 class="font-title text-green mt-4">
      SIGN<span class="text-danger"> UP</span>
    </h1>
    <div class="mx-auto">
      <router-link class="text-white font-weight-bold" to="/signup">
      <div
        class="mx-auto w-50 p-3 bg-success text-center rounded btn-green text-white my-3 mt-5"
      >
        SIGN UP AS CLIENT
      </div>
      </router-link>
      <h5 class="text-center font-weight-bold">Or</h5>
      <router-link class="text-white font-weight-bold" to="/SignupCoach">
      <div
        class="mx-auto w-50 p-3 bg-success text-center rounded btn-green text-white my-3 mb-5"
      >
        SIGN UP AS COACH
      </div>
      </router-link>
    </div>

    <!-- <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in rephenderit in voluptate velit
      esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </p> -->

    <div>
      <router-link class="" to="/login">
      <button class="bg-green-light px-2 border-green text-green float-right">
        <img
          class="width-back-icon pr-2"
          src="../assets/img/ic_green_back.png"
          alt=""
        />Back
      </button>
      </router-link>
    </div>
  </div>
</template>
  
<script>
export default {
  props: {},
  name: "Leftsidetwo",
  data() {
    return {};
  },
};
</script>
<style></style>