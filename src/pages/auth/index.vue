<template>
  <div>
    <div class="vux-auth">
      微信授权{{msg}}
  </div>
  </div>
</template>

<script>
import api from "@/api";
export default {
  data () {
    return {
      msg: 'Hello World!'
    }
  },
  mounted() {
    api.getHomeData({}).then(ret=>{
      console.log(ret,'home');
      //this.$router.push({ name: "home", params: { id: ret.data } });
    }) //getUserData
    api.getUserData({}).then(ret=>{
      console.log(ret,'user');
      //this.$router.push({ name: "home", params: { id: ret.data } });
    })
  }
}
</script>

<style>
.vux-auth {
  text-align: center;
}
</style>
