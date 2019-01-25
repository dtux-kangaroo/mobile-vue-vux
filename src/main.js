// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from '@/router/router'
import vuexI18n from 'vuex-i18n';
import store from '@/store'
// import FastClick from 'fastclick'
import App from './app'

Vue.use(vuexI18n.plugin, store);

Vue.i18n.set('en');
new Vue({
  el:"#app-box",
  router,
  store,
  render: h => h(App)
});
