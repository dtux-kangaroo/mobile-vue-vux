import api from "@/api";


const app = {
  state: {
    userData:[]
  },
  mutations: {
    GET_USER_DATA: (state, userData) => {
      state.userData = userData
    }
  },
  actions: {
    getUserData({ commit }, params,cb) {
        api.getUserData({}).then(ret=>{
          console.log(ret);
          commit('GET_USER_DATA', ret.data||[]);
        })
     }
  }
}

export default app
