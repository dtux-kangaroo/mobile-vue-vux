import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/index'
import MainTpl from '@/tpls/mainTpl'
import Auth from '@/pages/auth/index'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
     path:'/',component:MainTpl,
     children:[
      {path: '/',name: 'home',component: Home},
      {path: '/auth',name: 'auth',component: Auth}
     ]
    }
  ]
})
