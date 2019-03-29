// 一些全局的config配置
const modeUrlObj = {
  // 生产环境
  'production': {
    baseURL: 'http://172.17.71.40:9091/pro/',
    authBaseURL: ''
  },
  // 开发环境
  'development': {
    baseURL: 'http://172.17.71.40:9091/dev/',
    authBaseURL: ''
  },
  // 测试环境
  'test': {
    baseURL: 'http://172.17.71.40:9091/test/',
    authBaseURL: ''
  }
}
export default modeUrlObj[process.env.NODE_ENV]

//   引用的方法
//   import config from '../config/index' // 路径配置

// config.baseURL  // 对应环境api
// .运行命令行

// npm run dev // 开发环境

// npm run test // 测试环境

// npm run build // 正式环境打包

// npm run build:test // 测试环境打包
