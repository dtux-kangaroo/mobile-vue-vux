// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import App from './app'
import router from './router/router'
import store from './store'
import { WechatPlugin,AjaxPlugin } from 'vux'
Vue.use(WechatPlugin)
Vue.use(AjaxPlugin)

FastClick.attach(document.body)
console.log(Vue.wechat,'WechatPlugin');
// Vue.http.get('/api', ({data}) => {
//   Vue.wechat.config(data.data)
// }) 这里引入微信js-sdk-配置信息

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app-box')
