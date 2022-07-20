<template>
  <!-- Container 布局容器 -->
  <el-container class="container">
    <el-header>
      <div><span>xx后台管理系统</span></div>
      <el-button @click="$router.push('/login')">退出</el-button>
    </el-header>
    <el-container>
      <el-aside :width="isCollapse ? 'width:64px' : 'wigth:200px'">
        <!-- <el-radio-group v-model="isCollapse">
          <el-radio-button :label="false">|||</el-radio-button>
          <el-radio-button :label="true">|||</el-radio-button>
        </el-radio-group> -->
        <el-button
          type="danger"
          @click="foo"
          style="width: 64px; text-align: center"
          v-if="isCollapse"
          >| | |</el-button
        >
        <el-button type="danger" @click="foo" style="width: 200px" v-else
          >| | |</el-button
        >

        <el-menu
          background-color="#576777"
          text-color="#fff"
          unique-opened
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          :collapse="isCollapse"
          router
        >
          <!-- <div>|||</div> -->
          <el-submenu
            :index="item.order + ''"
            v-for="item in list"
            :key="item.id"
          >
            <template #title>
              <i class="el-icon-location"></i
              ><span>{{ item.authName }}</span></template
            >
            <!-- v-for循环遍历  -->
            <el-menu-item
              :index="`/home/${el.path}`"
              v-for="el in item.children"
              :key="el.id"
              ><i class="el-icon-location"></i>{{ el.authName }}</el-menu-item
            >
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import { getMenus } from '@/api/menus'
export default {
  created () {
    this.getMenu()
  },
  data () {
    return {
      list: [],
      isCollapse: false
    }
  },
  methods: {
    async getMenu () {
      const res = await getMenus()
      // console.log(res)
      this.list = res.data.data
      console.log(this.list)
    },
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    },
    foo () {
      this.isCollapse = !this.isCollapse
    }
  },
  computed: {},
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang='less'>
.container {
  height: 100vh;
  .el-header {
    background-color: #576777;
    display: flex;
    justify-content: space-between;
    align-items: center;
    span {
      color: #fff;
      font-size: 22px;
      margin-left: 10px;
    }
    /deep/.el-button {
      color: #606266;
      font-size: 14px;
    }
  }
  .el-aside {
    background-color: #576777;
  }
  .el-main {
    background-color: #eaedf1;
  }
}
.el-menu {
  border-right: none;
  font-size: 14px;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
/deep/.el-button--danger {
  color: #fff;
  background-color: #8f969a;
  border-color: #8f969a;
}
</style>
