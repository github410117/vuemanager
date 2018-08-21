<template>
  <div class="login-bg">


    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm"
             class="demo-ruleForm login-form">
      <h1>后台管理系统</h1>
      <el-form-item prop="phone">
        <el-input type="text" v-model="ruleForm.phone" auto-complete="off" placeholder="请输入手机号"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input type="password" v-model="ruleForm.password" auto-complete="off" placeholder="请输入密码"></el-input>
      </el-form-item>

      <el-button type="primary" @click="submitForm('ruleForm')" class="login-btn">登录</el-button>
    </el-form>

  </div>
</template>

<script>

  import {mapActions} from 'vuex'

  export default {
    name: 'login',
    data() {
      return {
        ruleForm: {
          phone: '',
          password: '',
        },
        rules: {
          phone: [
            {required: true, message: '用户名不能为空', trigger: 'blur'}
          ],
          password: [
            {required: true, message: '密码不能为空', trigger: 'blur'}
          ],
        }
      };
    },
    methods: {
      ...mapActions([
        'userToken'
      ]),
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$api.userLogin(this.ruleForm).then(res => {
              this.userToken(res.data)
              this.$message({
                type:'success',
                message:'登录成功'
              })
              this.$router.push({name:'home'})
            })
          }
        });
      },
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import "../../style/login/login";
</style>
