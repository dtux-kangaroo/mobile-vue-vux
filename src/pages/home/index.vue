<template>
  <div>
    <div class="vux-home vux-1px">
      home--主页{{msg}}
      <Percent></Percent>
  </div>
  </div>
</template>

<script>
import {API} from "@/api/index.js";
import {Percent} from "@/components/chart/index"
export default {
  components:{
    Percent
  },
  data () {
    return {
      msg: 'Hello World!home'
    }
  },
  mounted() {
    API.getHomeData({}).then(ret=>{
      console.log(then);
      this.$router.push({ name: "home", params: { id: ret.data } });
    })
  }
}
</script>

<style>
.vux-home {
  text-align: center;
}
</style>
