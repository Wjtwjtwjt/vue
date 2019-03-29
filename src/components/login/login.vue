<template>
<div class="login-wrap">
  <!--
    el-form 会生成 form 标签
    我们自己增加的 class 会和它生成的结果 class 合并到一起
   -->
   <h5>众富期贷后台管理系统</h5>
  <el-form class="login-from" label-position="top" ref="form" :model="userForm" label-width="80px">
    <h2 class="heading">用户登陆</h2>
    <el-form-item label="用户名">
      <el-input
        v-model="userForm.username"></el-input>
    </el-form-item>
    <el-form-item label="密码">
      <el-input
        type="password"
        v-model="userForm.password"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button class="login-btn" type="primary" >立即登陆</el-button>
    </el-form-item>
  </el-form>
</div>
</template>
<script>
export default {
  data () {
    return {
      userForm: {
        username: '',
        password: ''
      }
    }
  }
}
</script>

<style>
.login-wrap {
  background-image: url(http://8.su.bdimg.com/skin/105.jpg);
  background-size: cover;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
.login-wrap h5 {
    font-size: 40px;
    color:#fff;
    position: absolute;
    top: 200px;
}
.login-from {
  background-color: #fff;
  width: 400px;
  padding: 30px;
  border-radius: 5px;
}

.login-from .login-btn {
  width: 100%;
}
</style>
