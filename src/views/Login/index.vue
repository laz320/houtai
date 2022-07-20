<template>
  <div class="login-container">
    <div class="form-box">
      <!-- 2配置 -->
      <!-- 绑定model属性/rules规则 -->
      <!-- 通过属性ref获取表单对象=id -->
      <el-form :model="loginForm" :rules="rules" ref="loginFormRef">
        <!-- 设置prop属性 -->
        <el-form-item prop="username">
          <!--  v-model 绑定属性-->
          <!-- prefix-icon 添加图标 -->
          <el-input
            v-model="loginForm.username"
            prefix-icon="el-icon-user-solid"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            type="password"
            v-model="loginForm.password"
            prefix-icon="el-icon-lock"
          ></el-input>
        </el-form-item>
        <el-form-item class="btn-item">
          <!-- 给按钮绑定点击事件 -->
          <el-button type="primary" @click="login">登录</el-button>
          <!-- 给重置添加点击事件 -->
          <el-button type="info" @click="reset">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
// 导入接口
import { login } from '@/api/user'
export default {
  created () { },
  data () {
    return {
      loginForm: {
        // 字段名都是和接口文档保持一致的
        username: 'admin',
        password: '123456'
      },
      rules: {
        username: [
          // trigger表单验证 blur失去焦点
          { required: true, message: '用户名不能为空', trigger: 'blur' },
          { min: 3, max: 8, message: '长度在3到8之间', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '密码不能为空', trigger: 'blur' },
          { min: 3, max: 8, message: '长度在3到8之间', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    reset () {
      // 重置步骤 获取表单组件实现对象
      // 通过 resetFields() 方法 对整个表单进行重置 将所有字段值重置为初始值并移除校验结果
      this.$refs.loginFormRef.resetFields()
    },
    async login () {
      try {
        // validate 对整个表单进行校验的方法，参数为一个回调函数。
        await this.$refs.loginFormRef.validate()
        // 发送ajax请求
        // try {
        try {
          const res = await login(this.loginForm)
          console.log(res)
          // todo 把token存到vuex中，并且持久化 localStorage
          this.$store.commit('login/setUser', res.data.data.token)
          this.$message.success('登录成功')

          // 页面跳转
          this.$router.push({ name: 'welcome' })
        } catch (err) {
          console.log(err)
        }
        // } catch (err) {
        //   console.log(err)
        // }
        //
      } catch (err) {
        // console.log(err)
        this.$message.error('登录表单验证失败')
      }
    }
  },
  computed: {},
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang='less'>
.login-container {
  width: 100vw;
  height: 100vh;
  background-color: #2b4b6b;
  display: flex;
  justify-content: center;
  align-items: center;
  .form-box {
    width: 450px;
    height: 240px;
    background-color: #fff;
    padding: 30px 15px;
    box-sizing: border-box;
  }
  .btn-item {
    text-align: right;
  }
}
</style>
