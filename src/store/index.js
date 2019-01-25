import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import getters from './getters'
import vuexI18n from 'vuex-i18n';

Vue.use(Vuex)
const store = new Vuex.Store({
  modules: {
    app,
    i18n: vuexI18n.store
  },
  getters
})

export default store
