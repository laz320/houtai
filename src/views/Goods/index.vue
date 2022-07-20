<template>
  <div v-if="$route.path === '/home/goods'">
    <!-- Breadcrumb 面包屑 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <!-- <el-breadcrumb-item :to="{ path: '/home/welcome' }">首页</el-breadcrumb-item> -->
      <el-breadcrumb-item :to="{ name: 'welcome' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>商品管理</el-breadcrumb-item>
      <el-breadcrumb-item>商品列表</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- Card 卡片 -->
    <el-card class="box-card">
      <!-- 复合型输入框 -->
      <div>
        <div style="display: flex">
          <div class="demo-input-size">
            <el-input
              placeholder="请输入内容"
              v-model="input"
              class="input-with-select"
              ref="inputRef"
              @keyup.enter.native="searchEnter"
            >
              <i
                slot="suffix"
                class="el-input__icon el-icon-circle-close"
                v-if="input.length !== 0"
                @click="delInput"
              ></i>
              <el-button
                slot="append"
                icon="el-icon-search"
                @click="onSearch"
              ></el-button>
            </el-input>
          </div>
          <div>
            <el-button type="primary" @click="$router.push('/home/goods/add')"
              >添加用户</el-button
            >
          </div>
        </div>
        <!-- Table 表格 -->
        <!-- 9 进行数据的渲染 -->
        <el-table :data="goodsList" border>
          <el-table-column prop="index" label="#" width="50px">
          </el-table-column>
          <el-table-column prop="goods_name" label="商品名称">
          </el-table-column>
          <el-table-column prop="goods_price" label="商品价格(元)">
          </el-table-column>
          <el-table-column prop="goods_weight" label="商品重量">
          </el-table-column>
          <el-table-column prop="upd_time" label="创建时间"> </el-table-column>
          <el-table-column label="操作">
            <!-- Button 按钮 -->
            <el-row>
              <el-button
                type="primary"
                size="mini"
                icon="el-icon-edit"
                @click="editVisible = true"
                >编辑
              </el-button>
              <el-button type="danger" size="mini" icon="el-icon-delete"
                >删除
              </el-button>
            </el-row>
          </el-table-column>
        </el-table>
        <!-- Pagination 分页 -->
        <div class="block">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage4"
            :page-sizes="[1, 2, 5, 10]"
            layout="total, sizes, prev, pager, next, jumper"
            :total="total1"
          >
          </el-pagination>
        </div>
      </div>
    </el-card>
  </div>
  <router-view v-else></router-view>
</template>

<script>
// 8
import { mapGetters } from 'vuex'
export default {
  created () {
    console.log(this.$route)
    // 2通过dispatch 调用getGoodsList()方法 拿取数据
    this.$store.dispatch('goods/getGoodsList', this.obj)
    console.log(this.goodsList)
    console.log(this.total1)
  },
  data () {
    return {
      dynamicValidateForm: {},
      ruleForm: {
        username: '',
        password: '',
        email: '',
        mobile: ''
      },
      input: '',
      // show: false,
      obj: {
        query: '',
        pagenum: 1,
        pagesize: 10
      },
      pageSize: [1, 2, 5, 10],
      currentPage4: 1,
      dialogVisible: false,
      editVisible: false
      // total: ''
    }
  },
  methods: {
    delInput () {
      this.input = ''
    }
  },
  computed: {
    // 8 辅助函数映射数据
    ...mapGetters(['goodsList', 'total1'])
  },
  watch: {},
  filters: {},
  components: {}
}
</script>

<style scoped lang='less'>
.demo-input-size {
  width: 33%;
  margin-right: 20px;
}
.box-card {
  margin-top: 20px;
}
.el-button--danger {
  background-color: #f56c6c;
  border-color: unset;
}
.el-table {
  margin-top: 20px;
}
.block {
  margin-top: 20px;
}
</style>
