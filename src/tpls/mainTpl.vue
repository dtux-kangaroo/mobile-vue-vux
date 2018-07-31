<template>
 <div>
    <divider>顶部</divider>
    <flexbox>
      <flexbox-item><div class="flex-demo">1</div></flexbox-item>
      <flexbox-item><div class="flex-demo">2</div></flexbox-item>
    </flexbox>
    <router-view/>
     <flexbox>
      <flexbox-item><div class="flex-demo">1</div></flexbox-item>
      <flexbox-item><div class="flex-demo">2</div></flexbox-item>
    </flexbox>
    <divider>底部</divider>
 </div>
</template>
<script>
import { Flexbox, FlexboxItem, Divider } from 'vux'
export default {
   components: {
    Flexbox,
    FlexboxItem,
    Divider
  },
  data(){
    return{
      msg:"layout"
    }
  },
  mounted(){
    this.$store.dispatch('getUserData', {});
  },
  methods: {

    }
};
</script>

<style lang="scss">
.flex-demo{
  text-align: center;
}
</style>
