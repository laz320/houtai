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
      <!-- 标签 -->
      <el-tag type="info" class="add_title"
        ><i class="el-icon-info"></i> <span>添加商品信息</span></el-tag
      >
      <el-steps :active="active - 0" finish-status="success">
        <el-step title="步骤 1"></el-step>
        <el-step title="步骤 2"></el-step>
        <el-step title="步骤 3"></el-step>
        <el-step title="步骤 4"></el-step>
        <el-step title="步骤 5"></el-step>
        <el-step title="步骤 6"></el-step>
      </el-steps>

      <!-- <el-button style="margin-top: 12px" @click="next">下一步</el-button> -->
      <!-- Tabs 标签页 -->
      <el-tabs :tab-position="tabPosition" style="" v-model="active">
        <el-tab-pane label="基本信息"
          ><div v-if="active == 0">
            <h1>
              <!-- <el-radio-button label="top">顶部对齐</el-radio-button> -->
              <div style="margin: 20px"></div>
              <el-form
                :label-position="labelPosition"
                label-width="80px"
                :model="formLabelAlign"
              >
                <el-form-item label="商品名称">
                  <el-input v-model="formLabelAlign.name"></el-input>
                </el-form-item>
                <el-form-item label="商品价格">
                  <el-input-number
                    v-model="num"
                    style="width: 100%"
                    controls-position="right"
                    @change="handleChange"
                    :min="0"
                    :max="10"
                  ></el-input-number>
                </el-form-item>
                <el-form-item label="商品重量">
                  <el-input v-model="formLabelAlign.type"></el-input>
                </el-form-item>
                <el-form-item label="商品数量">
                  <el-input v-model="formLabelAlign.type"></el-input>
                </el-form-item>
                <el-form-item label="商品分类">
                  <el-input v-model="formLabelAlign.type"></el-input>
                </el-form-item>
              </el-form>
            </h1></div
        ></el-tab-pane>
        <el-tab-pane label="商品参数"
          ><div v-if="active == 1">
            <h1>
              <div style="margin: 20px"></div>
              <el-form
                :label-position="labelPosition"
                label-width="80px"
                :model="formLabelAlign"
              >
                <el-form-item label="1312312">
                  <div>
                    <el-checkbox
                      v-model="checked1"
                      label="备选项1"
                      border
                    ></el-checkbox>
                    <el-checkbox
                      v-model="checked2"
                      label="备选项2"
                      border
                    ></el-checkbox>
                    <el-checkbox
                      v-model="checked2"
                      label="备选项3"
                      border
                    ></el-checkbox>
                  </div>
                </el-form-item>
                <el-form-item label="商品价格"> </el-form-item>
                <el-form-item label="商品重量"> </el-form-item>
                <el-form-item label="商品数量"> </el-form-item>
                <el-form-item label="商品分类"> </el-form-item>
              </el-form>
            </h1></div
        ></el-tab-pane>
        <el-tab-pane label="商品属性">
          <div v-if="active == 2">
            <h1>
              <div style="margin: 20px"></div>
              <el-form
                :label-position="labelPosition"
                label-width="80px"
                :model="formLabelAlign"
              >
                <el-form-item label="端口—模拟RF接口">
                  <el-input v-model="formLabelAlign.name"></el-input>
                </el-form-item>
                <el-form-item label="商品价格">
                  <el-input v-model="formLabelAlign.region"></el-input>
                </el-form-item>
                <el-form-item label="商品重量">
                  <el-input v-model="formLabelAlign.type"></el-input>
                </el-form-item>
                <el-form-item label="商品数量">
                  <el-input v-model="formLabelAlign.type"></el-input>
                </el-form-item>
                <el-form-item label="商品分类">
                  <el-input v-model="formLabelAlign.type"></el-input>
                </el-form-item>
              </el-form>
            </h1></div
        ></el-tab-pane>
        <el-tab-pane label="商品图片"
          ><div v-if="active == 3">
            <h1><el-button type="primary">主要按钮</el-button></h1>
          </div></el-tab-pane
        >
        <el-tab-pane label="商品内容"
          ><div v-if="active == 4">
            <h1><el-button type="primary">主要按钮</el-button></h1>
            <h1></h1></div
        ></el-tab-pane>
      </el-tabs>
    </el-card>
  </div>
</template>

<script>
export default {
  created () { },
  data () {
    return {
      active: 0,
      labelPosition: 'top',
      tabPosition: 'left',
      formLabelAlign: {
        name: '',
        region: '',
        type: '',
        num: 0
      }
    }
  },
  methods: {
    next () {
      if (this.active++ > 4) this.active = 0
    },
    handleChange (value) {
      console.log(value)
    }
  },
  computed: {},
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang="less">
.box-card {
  margin-top: 20px;
}
.add_title {
  width: 100%;
  text-align: center;
  margin-bottom: 20px;
}
</style>
