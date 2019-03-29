// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import httpPlugin from '@/assets/js/http'
import 'element-ui/lib/theme-chalk/index.css'

import '@/assets/css/main.less'
Vue.use(httpPlugin)
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
