<template>
  <el-container class="container-bg">

    <el-header>
      <h1>后台管理系统</h1>
    </el-header>
    <el-container>
      <el-aside width="200px">

        <el-menu router>
          <el-menu-item index="/"><i class="el-icon-menu"></i>首页</el-menu-item>
          <el-submenu index="2">
            <template slot="title"><i class="el-icon-document"></i>数据管理</template>
            <el-menu-item index="userlist">用户列表</el-menu-item>
            <el-menu-item index="changepwd">网站信息修改</el-menu-item>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title"><i class="el-icon-plus"></i>设置</template>
            <el-menu-item index="setwx">修改密码</el-menu-item>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title"><i class="el-icon-plus"></i>用户反馈</template>
            <el-menu-item index="collectphone">手机号收集</el-menu-item>
            <el-menu-item index="">内容反馈</el-menu-item>
          </el-submenu>
        </el-menu>
        <!--<el-menu class="el-menu-vertical-demo" default-active="/" router>-->
          <!--<el-submenu index="1">-->
            <!--<template slot="title">-->
              <!--<i class="el-icon-location"></i>-->
              <!--<span slot="title">首页</span>-->
            <!--</template>-->
            <!--<el-menu-item index="1-1">logo管理</el-menu-item>-->
            <!--<el-menu-item index="1-2">列表管理</el-menu-item>-->
          <!--</el-submenu>-->

          <!--<el-submenu index="2">-->
            <!--<template slot="title">-->
              <!--<i class="el-icon-location"></i>-->
              <!--<span slot="title">设置</span>-->
            <!--</template>-->
            <!--<el-menu-item index="changepwd">修改密码</el-menu-item>-->
            <!--<el-menu-item index="1-3">logo管理</el-menu-item>-->
          <!--</el-submenu>-->

        <!--</el-menu>-->

      </el-aside>
      <el-main>
        <el-breadcrumb separator="/" class="breadcrumb-bg">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item v-for="(item,index5) in $route.meta" :key="index5">{{item}}</el-breadcrumb-item>
        </el-breadcrumb>
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
  export default {
    name: "Home",
    data() {
      return {
        isCollapse: false
      }
    },
    computed:{
      defaultActive(){

      }
    },
    created() {
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }

    },
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>

  li {
    text-align: left;
  }

  h1 {
    float: left;
    line-height: 60px;
    font-size: 28px;
  }

  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    /*display: block;*/
    text-align: center;
    /*line-height: 160px;*/
    padding: 0;
  }

  body > .el-container {
    margin-bottom: 40px;

  }

  .container-bg {
    height: calc(100vh);
    background-color: red;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }

  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    /*min-height: 400px;*/
  }

  .breadcrumb-bg {
    background-color: #fff;
    height: 60px;
    line-height: 60px;
    padding-left: 20px;
  }
</style>
