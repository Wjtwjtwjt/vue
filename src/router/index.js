import Vue from 'vue'
import Router from 'vue-router'
// import {getUserInfo} from '@/assets/js/auth'
// import Home from './views/Home.vue'
import Login from '@/components/login/login'
import Home from '@/components/home/home'

Vue.use(Router)

const router = new Router({
  // mode: 'history',
  // base: process.env.BASE_URL,
  routes: [{
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/',
    name: 'home',
    component: Home
  }
  ]
})
//  1. 添加路由拦截器（导航钩子、守卫）
//    to 我要去哪里
//    from 我从哪儿来的
//    next 用来放行的
// router.beforeEach((to, from, next) => {
//   // 2.
//   // 拿到当前请求的视图路径标识
//   if (to.name === 'login') {
//     next()
//   } else {
//     // 检查是否具有当前登陆的用户信息状态
//     if (!getUserInfo()) { // 无令牌，则让其登陆去
//       next({
//         name: 'login'
//       })
//     } else { // 有令牌就允许通过
//       next()
//     }
//   }
// })
export default router
