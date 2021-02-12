  
<script>
export default {
      name: "Comman",
  data() {
    return {

    };
  },
    methods:{
      loginorNot(){
        console.log("hi");
        if(localStorage.getItem("Login_data")!=null){
        if(JSON.parse(localStorage.getItem("Login_data")).is_login==0){
           this.$router.push("/home");
        }
        else
        {
           this.$router.push("/requests");
        }
      }
      else
      {
        this.$router.push("/login");
      }
    },
  }
};
</script>