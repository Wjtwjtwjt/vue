// 授权相关模块
// 把所有 token 操作都放到这里
// auth.getToken()
// auth.isLogin
// auth.saveToken()

const tokenNameKey = 'ceyu-token'
// 保存登陆用户信息到本地存储
export function saveUserInfo (tokenName = {}) {
  window.localStorage.setItem(tokenNameKey, JSON.stringify(tokenName))
}
// 从本地存储中获取当前登陆用户信息
export function getUserInfo () {
  return window.localStorage.getItem(tokenNameKey)
}
// 获取本地存储中用户信息的 Token 令牌
export function getToken () {
  // 本地存储中的 ceyu-token 可能不是一个有效的 JSON 格式字符串
  // 所以我们这里为了避免程序出错，使用了 try-catcher 来捕获转换失败的异常
  try {
    return JSON.parse(getUserInfo()).token
  } catch (err) {
    return ''
  }
}
// 删除本地存储中的用户登陆信息
export function removeUserInfo () {
  window.localStorage.removeItem(tokenNameKey)
}
