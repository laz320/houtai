<template>
  <div>
    <!-- Breadcrumb 面包屑 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <!-- <el-breadcrumb-item :to="{ path: '/home/welcome' }">首页</el-breadcrumb-item> -->
      <el-breadcrumb-item :to="{ name: 'welcome' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>商品管理</el-breadcrumb-item>
      <el-breadcrumb-item>添加商品</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- Card 卡片 -->
    <el-card class="box-card">
      <el-tag type="warning" class="tip_title">
        <i class="el-icon-warning"></i>
        <span>注意：只允许为第三级分类设置相关参数！</span>
      </el-tag>
      <!-- Cascader 级联选择器 -->
      <div class="block">
        <span class="demonstration">选择商品分类：</span>
        <el-cascader
          v-model="value"
          :options="options"
          :props="{ expandTrigger: 'hover' }"
          @change="handleChange"
        >
        </el-cascader>
      </div>
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
        <el-tab-pane label="配置管理" name="second">用户列表</el-tab-pane>
      </el-tabs>
    </el-card>
  </div>
</template>

<script>
export default {
  created () { },
  data () {
    return {
      value: [],
      options: [{
        value: 'zhinan',
        label: '指南',
        children: [{
          value: 'shejiyuanze',
          label: '设计原则',
          children: [{
            value: 'yizhi',
            label: '一致'
          }]
        }
        ]
      }
      ],
      activeName: 'second'
    }
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event)
    }
  },
  computed: {},
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang='less'>
.box-card {
  margin-top: 20px;
}
.tip_title {
  width: 100%;
}
.block {
  margin-top: 10px;
}
</style>
