<template>
 	<div id="mainTpl">
		 <drawer
			width="200px;"
			:show.sync="drawerVisibility">
			<div slot="drawer">
				drawer的content
				<x-button type="primary" @click.native="drawerClose">收起</x-button>
			</div>
			<router-view/>
			<x-button type="primary" @click.native="drawerOpen">弹出抽屉</x-button>
			<tabbar>
				<tabbar-item link="/auth">
					<img slot="icon" src="/public/assets/img/logo.png">
					<span slot="label">Wechat</span>
				</tabbar-item>
				<tabbar-item link="/" selected>
					<img slot="icon" src="/public/assets/img/logo.png">
					<span slot="label">Message</span>
				</tabbar-item>
				<tabbar-item>
					<img slot="icon" src="/public/assets/img/logo.png">
					<span slot="label">Explore</span>
				</tabbar-item>
				<tabbar-item>
					<img slot="icon" src="/public/assets/img/logo.png">
					<span slot="label">News</span>
				</tabbar-item>
			</tabbar>
		</drawer>
 	</div>
</template>
<script>
import {Drawer,Tabbar, TabbarItem,  XButton} from "vux";
export default {
  components: {
		Drawer,
    Tabbar,
    TabbarItem,
    XButton
  },
  data() {
    return {
      msg: "layout",
      drawerVisibility: false
    };
  },
  mounted() {
    this.$store.dispatch("getUserData", {});
  },
  methods: {
    drawerOpen() {
		this.drawerVisibility = true
	},
	drawerClose() {
		this.drawerVisibility = false
	}
  }
};
</script>

<style lang="scss" scoped>
.flex-demo {
  text-align: center;
}
#mainTpl {
  height: 100%;
}
</style>
