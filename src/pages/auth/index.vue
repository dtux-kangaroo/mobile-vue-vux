<template>
  <div>
    <div class="vux-auth">
      微信授权{{msg}}
  </div>
  </div>
</template>

<script>
import {API} from "@/api/index.js";
export default {
  data () {
    return {
      msg: 'Hello World!'
    }
  },
  mounted() {
    API.getHomeData({}).then(ret=>{
      console.log(ret,'home');
      //this.$router.push({ name: "home", params: { id: ret.data } });
    }) //getUserData
    API.getUserData({}).then(ret=>{
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
