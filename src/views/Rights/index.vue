<template>
  <div>
    <!-- Breadcrumb 面包屑 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <!-- <el-breadcrumb-item :to="{ path: '/home/welcome' }">首页</el-breadcrumb-item> -->
      <el-breadcrumb-item :to="{ name: 'welcome' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>用户管理</el-breadcrumb-item>
      <el-breadcrumb-item>用户列表</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- Card 卡片 -->
    <el-card class="box-card">
      <!-- Table 表格 -->
      <el-table :data="rightList" border>
        <el-table-column prop="index" label="#" width="50px"> </el-table-column>
        <el-table-column prop="authName" label="权限名称"> </el-table-column>
        <el-table-column prop="path" label="路径"> </el-table-column>
        <el-table-column label="权限等级">
          <template slot-scope="scope">
            <!-- <el-tag v-if="scope.row.level == 0">等级一</el-tag>
            <el-tag type="success" v-else-if="scope.row.level == 1">等级二</el-tag>
            <el-tag type="warning" v-else-if="scope.row.level == 2">等级三</el-tag> -->
            <el-tag :type="scope.row.level==0?'':scope.row.level==1?'success':'warning'">{{scope.row.level==0?'等级一':scope.row.level==1?'等级二':'等级三'}}</el-tag>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  created () {
    this.$store.dispatch('rights/getRightsList', 'list')
    console.log(this.rightList)
  },
  data () {
    return {}
  },
  methods: {},
  computed: {
    ...mapGetters(['rightList'])
  },
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang='less'>
.box-card {
  margin-top: 20px;
}
</style>
