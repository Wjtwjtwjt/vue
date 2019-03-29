<template>
  <!-- <el-container>
  <el-header>Header</el-header>
  <el-container>
    <el-aside width="200px">Aside</el-aside>
    <el-main>Main</el-main>
  </el-container>
  </el-container>-->
  <el-container class="container">
    <el-header class="header">
      <el-row>
        <el-col :span="4">
          <div class="grid-content bg-purple header-l">众富期贷</div>
        </el-col>
        <el-col :offset="16" :span="4">
          <div class="grid-content bg-purple header-r">
            <li>
              <a href="javascript:;">
                通知
                <span class="badge">8</span>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <i class="fa fa-user"></i>
                超级管理员
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <i class="fa fa-sign-out"></i>
                退出
              </a>
            </li>
          </div>
        </el-col>
      </el-row>
    </el-header>
    <el-container class="container">
      <el-aside class="aside" width="200px">
        <el-menu
          class="el-menu-vertical-demo aside-menu"
          @open="handleOpen"
          @close="handleClose"
          background-color="#393d49"
          text-color="#fff"
        >
          <el-submenu index="1">
            <template slot="title">
              <span>首页</span>
            </template>
              <el-menu-item index="1-1">系统首页</el-menu-item>
          </el-submenu>
           <el-submenu index="2">
            <template slot="title">
              <span>系统设置</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="2-1">参数设置</el-menu-item>
              <el-menu-item index="2-2">协议类型管理</el-menu-item>
              <el-menu-item index="2-3">协议管理</el-menu-item>
              <el-menu-item index="2-4">公告管理</el-menu-item>
              <el-menu-item index="2-5">客服设置</el-menu-item>
              <el-menu-item index="2-6">短信设置</el-menu-item>
              <el-menu-item index="2-7">管理员管理</el-menu-item>
              <el-menu-item index="2-8">权限管理</el-menu-item>
              <el-menu-item index="2-9">管理员操作日志</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <span>合约管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="3-1">合约列表</el-menu-item>
              <el-menu-item index="3-2">合约分组列表</el-menu-item>
              <el-menu-item index="3-3">交易所管理</el-menu-item>
              <el-menu-item index="3-4">币种管理</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">
              <span>用户管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="4-1">用户列表</el-menu-item>
              <el-menu-item index="4-2">实名认证</el-menu-item>
              <el-menu-item index="4-3">用户事件管理</el-menu-item>
              <el-menu-item index="4-4">意见反馈管理</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="5">
            <template slot="title">
              <span>代理管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="5-1">代理列表</el-menu-item>
              <el-menu-item index="5-2">客户列表</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="6">
            <template slot="title">
              <span>交易管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="6-1">持仓列表</el-menu-item>
              <el-menu-item index="6-2">手动平仓报价审核列表</el-menu-item>
              <el-menu-item index="6-3">成交历史</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="7">
            <template slot="title">
              <span>资金管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="7-1">后台入金记录</el-menu-item>
              <el-menu-item index="7-2">第三方入金记录</el-menu-item>
              <el-menu-item index="7-3">出金审核</el-menu-item>
              <el-menu-item index="7-4">出金记录</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="8">
            <template slot="title">
              <span>营销管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="8-1">资讯管理</el-menu-item>
              <el-menu-item index="8-2">Banner管理</el-menu-item>
              <el-menu-item index="8-3">品牌管理</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="9">
            <template slot="title">
              <span>其他设置</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="9-1">新手指引</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main class="main">
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
export default {
  methods: {
    handleOpen (key, keyPath) {
    //   console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      //   console.log(key, keyPath)
    }
  }
}
</script>
<style>
.container,
.aside .aside-menu {
  height: 100%;
}

.header {
  background-color: #23262e;
  line-height: 60px;
}
.header .header-l {
    color:#D53E35;
    margin-left: 48px;
    font-size: 16px;
}
.header .header-r li{
    float: left;
}
.aside {
  background-color: #23262e;
}
.aside .el-submenu .el-menu-item {
  height: 50px;
  line-height: 50px;
  padding: 0 20px;
  max-width: 200px;
  padding-left: 20px !important;

}
.main {
  /* background-color: #E9EEF3; */
  height: 100%;
}
</style>
