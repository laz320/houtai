<template>
  <div>
    <!-- Breadcrumb 面包屑 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <!-- <el-breadcrumb-item :to="{ path: '/home/welcome' }">首页</el-breadcrumb-item> -->
      <el-breadcrumb-item :to="{ name: 'welcome' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>权限管理</el-breadcrumb-item>
      <el-breadcrumb-item>角色列表</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- Card 卡片 -->
    <el-card>
      <el-button type="primary">添加角色</el-button>
      <!-- Table 表格 -->
      <el-table :data="list" border>
        <el-table-column prop="" label="#" width="50px"> </el-table-column>
        <el-table-column prop="index" label="#"> </el-table-column>
        <el-table-column prop="roleName" label="角色名称"> </el-table-column>
        <el-table-column prop="roleDesc" label="角色描述"> </el-table-column>

        <el-table-column label="操作">
          <!-- Button 按钮 -->
          <el-row>
            <el-button type="primary" size="mini" icon="el-icon-edit">
            </el-button>
            <el-button type="danger" size="mini" icon="el-icon-delete">
            </el-button>

            <el-button type="warning" size="mini" icon="el-icon-setting"></el-button>
          </el-row>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
import { getRoleList } from '@/api/roles'
export default {
  created () {
    this.getRoleList()
  },
  data () {
    return {
      list: []
    }
  },
  methods: {
    async getRoleList () {
      try {
        const res = await getRoleList()
        this.list = res.data.data
        console.log(res)
      } catch (err) {
        console.log(err)
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
.el-card {
  margin-top: 20px;
}

.el-table {
  margin-top: 20px;
}
</style>
