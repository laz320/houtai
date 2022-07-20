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
      <!-- 复合型输入框 -->
      <div style="display: flex">
        <div class="demo-input-size">
          <el-input placeholder="请输入内容" v-model="input" class="input-with-select" ref="inputRef"
            @keyup.enter.native="onSearch">
            <i slot="suffix" class="el-input__icon el-icon-circle-close" v-if="input.length !== 0"
              @click="delInput"></i>
            <el-button slot="append" icon="el-icon-search" @click="onSearch"></el-button>
          </el-input>
        </div>
        <div>
          <el-button type="primary" @click="dialogVisible = true">添加用户</el-button>
          <el-dialog title="添加用户对话框" :visible.sync="dialogVisible" width="50%">
            <!-- <span>这是一段信息</span> -->
            <el-form :model="ruleForm" ref="ruleForm" label-width="100px" class="demo-ruleForm">
              <el-form-item label="用户名" prop="username" :rules="[
                {
                  required: true,
                  message: '请输入用户名',
                  trigger: 'blur',
                },
                {
                  min: 3,
                  max: 5,
                  message: '长度在 2 到 7 个字符',
                  trigger: 'blur',
                },
              ]">
                <el-input v-model="ruleForm.username"></el-input>
              </el-form-item>
              <el-form-item label="密码" prop="password" :rules="[
                {
                  required: true,
                  message: '请输入密码',
                  trigger: 'blur',
                },
                {
                  min: 2,
                  max: 7,
                  message: '长度在 2 到 7 个字符',
                  trigger: 'blur',
                },
              ]">
                <el-input v-model="ruleForm.password"></el-input>
              </el-form-item>
              <el-form-item prop="email" label="邮箱" :rules="[
                {
                  required: true,
                  message: '请输入邮箱地址',
                  trigger: 'blur',
                },
              ]">
                <el-input v-model="ruleForm.email"></el-input>
              </el-form-item>
              <el-form-item label="手机号" prop="mobile" :rules="[
                {
                  required: true,
                  message: '请输入手机号',
                  trigger: 'blur',
                },
                {
                  pattern: /^(?:(?:\+|00)86)?1\d{10}$/,
                  message: '请输入正确格式的手机号',
                  trigger: 'blur',
                },
              ]">
                <el-input v-model="ruleForm.mobile"></el-input>
              </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
              <el-button @click="dialogVisible = false">取 消</el-button>
              <el-button type="primary" @click="addUser">确 定</el-button>
            </span>
          </el-dialog>
        </div>
      </div>
      <!-- Table 表格 -->
      <el-table :data="userList" border>
        <el-table-column prop="index" label="#" width="50px"> </el-table-column>
        <el-table-column prop="username" label="姓名"> </el-table-column>
        <el-table-column prop="mobile" label="电话"> </el-table-column>
        <el-table-column prop="role_name" label="角色"> </el-table-column>
        <el-table-column prop="mg_state" label="状态">
          <!-- switch 开关 -->
          <template v-slot="scope">
            <el-switch v-model="scope.row.mg_state" @change="updateState(scope.row.id, scope.row.mg_state)">
            </el-switch>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <!-- Button 按钮 -->
          <template v-slot="scope">
            <el-row>
              <el-button type="primary" size="mini" icon="el-icon-edit" @click="editVisible = true">
              </el-button>
              <el-button type="danger" size="mini" icon="el-icon-delete" @click="open(scope.row.id)">
              </el-button>
              <el-button type="warning" size="mini" icon="el-icon-setting" @click="rolesVisible = true"></el-button>
            </el-row>
          </template>
        </el-table-column>
      </el-table>
      <!-- Pagination 分页 -->
      <div class="block">
        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
          :current-page="currentPage4" :page-sizes="[1, 2, 5, 10]" layout="total, sizes, prev, pager, next, jumper"
          :total="total">
        </el-pagination>
      </div>
    </el-card>
    <el-dialog title="编辑用户" :visible.sync="editVisible" width="50%">
      <el-form :model="ruleForm" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="用户名称" prop="username" :rules="[
          {
            required: true,
            message: '请输入用户名称',
            trigger: 'blur',
          },
          {
            min: 3,
            max: 5,
            message: '长度在 2 到 7 个字符',
            trigger: 'blur',
          },
        ]">
          <el-input v-model="ruleForm.username"></el-input>
        </el-form-item>
        <el-form-item prop="email" label="邮箱" :rules="[
          {
            required: true,
            message: '请输入邮箱地址',
            trigger: 'blur',
          },
        ]">
          <el-input v-model="ruleForm.email"></el-input>
        </el-form-item>
        <el-form-item label="手机号" prop="mobile" :rules="[
          {
            required: true,
            message: '请输入手机号',
            trigger: 'blur',
          },
          {
            pattern: /^(?:(?:\+|00)86)?1\d{10}$/,
            message: '请输入正确格式的手机号',
            trigger: 'blur',
          },
        ]">
          <el-input v-model="ruleForm.mobile"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="editVisible = false">取 消</el-button>
        <el-button type="primary" @click="addUser">确 定</el-button>
      </span>
    </el-dialog>
    <el-dialog title="分配角色" :visible.sync="rolesVisible" width="50%">
      <span slot="footer" class="dialog-footer">
        <el-button @click="rolesVisible = false">取 消</el-button>
        <el-button type="primary" @click="assignRolers">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { updateState, addUsers, deleteUser } from '@/api/user'
import { mapGetters } from 'vuex'
export default {
  created () {
    this.$store.dispatch('users/getUserList', this.obj)
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
      editVisible: false,
      rolesVisible: false
      // total: ''
    }
  },
  methods: {
    delInput () {
      this.input = ''
      this.obj.query = ''
      this.$store.dispatch('users/getUserList', this.obj)
    },
    handleSizeChange (val) {
      this.obj.pagesize = val
      this.$store.dispatch('users/getUserList', this.obj)
    },
    handleCurrentChange (val) {
      this.obj.pagenum = val
      this.$store.dispatch('users/getUserList', this.obj)
    },
    // 发送ajax 修改用户状态
    async updateState (uId, type) {
      try {
        const res = await updateState(uId, type)
        this.$message.success('修改用户状态成功')
        console.log(res)
      } catch (err) {
        console.log(err)
      }
    },
    // 添加用户
    async addUser () {
      try {
        const res = await addUsers(this.ruleForm)
        console.log(res)
      } catch (err) {
        console.log(err)
      }
      this.$store.dispatch('users/getUserList', this.obj)
      this.dialogVisible = false
      this.editVisible = false
    },
    // 编辑用户
    // async getEdituserList () {
    //   try {
    //     const res = await getEdituserList()
    //     console.log(res)
    //   } catch (err) {
    //     console.log(err)
    //   }
    // },

    // 点击搜索
    onSearch () {
      // console.log(this.input)
      this.obj.query = this.input
      this.$store.dispatch('users/getUserList', this.obj)
    },
    // 删除用户
    open (id) {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '删除成功!'
        })
        deleteUser(id)
        this.$store.dispatch('users/getUserList', this.obj)
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    },
    assignRolers (done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done()
        })
        .catch(_ => { })
    }

  },
  computed: {
    ...mapGetters(['userList', 'total'])
  },
  watch: {
    input () {
      if (this.input === '') {
        this.$store.dispatch('users/getUserList', this.obj)
      }
    }
  },
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

  .el-button {
    width: 44px;
  }
}

.block {
  margin-top: 20px;
}
</style>
