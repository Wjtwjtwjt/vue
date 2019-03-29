// 引入axios
import axios from 'axios'
// 引入环境配置
import config from '@/config/index' // 路径配置
import router from '@/router/index'
import {
  getToken
} from '@/assets/js/auth'
// 创建axios 实例
export const http = axios.create({
  baseURL: config.baseURL, // api的base_url
  timeout: 10000 // 请求超时时间
})
// http 拦截器
http.interceptors.request.use(
  config => {
    // 这里可以自定义一些config 配置
    // 如果本次请求的不是 /login 接口，加入请求头
    if (config.url !== '/login') {
      config.headers['Authorization'] = getToken()
    }
    return config
  },
  error => {
    //  这里处理一些请求出错的情况

    Promise.reject(error)
  }
)

// http 拦截器
http.interceptors.response.use(
  response => {
    const res = response.data
    // 这里处理一些response 正常放回时的逻辑
    const {
      meta
    } = response.data
    if (meta.status === 403) {
      window.alert('你没有权限执行该操作！')
    } else if (meta.status === 401) {
      router.push({
        name: 'login',
        query: {
          redirect: window.location.hash
        }
      })
    }
    return res
  },
  error => {
    // 这里处理一些response 出错时的逻辑

    return Promise.reject(error)
  }
)
// 1. 定义一个插件对象
const httpPlugin = {}
httpPlugin.install = function (Vue) {
  //  添加实例方法
  Vue.prototype.$http = http
}
export default httpPlugin
