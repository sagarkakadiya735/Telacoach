<template>
<div>

            <img src="../assets/img/ic_about_telacoach_logo.png" alt="Telacoach" />
            <h1 class="font-title text-green mt-4">WELCOME<span class="text-danger"> BACK!</span></h1>
            <!-- <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in rephenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
              non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p> -->
            <router-link class="text-dark font-weight-bold" to="/privacy">
            <span class="font-weight-bold">Privacy Policy</span>
            </router-link>  
            <router-link class="text-dark font-weight-bold" to="/teamsandconditions">
            <span class="font-weight-bold">  Terms & Conditions</span>
            </router-link>
      
</div>    
</template>
  
<script>
export default {
  name: "Leftside",
  data() {
    return {};
  },
};
</script>
<style></style>