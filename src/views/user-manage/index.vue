<template>
  <div class="user-container">
    <div class="info-title">数据统计</div>
    <div class="statistics-card">
      <div class="card">
        <div class="card-title">新增用户</div>
        <div class="card-value">100</div>
      </div>
      <div class="card" style="margin-left: 16px">
        <div class="card-title">用户总数</div>
        <div class="card-value">100</div>
      </div>
    </div>

    <div class="info-title">用户列表</div>
    <el-form :inline="true" :model="formInline">
      <el-form-item label="用户搜索">
        <el-input
          v-model="formInline.user"
          size="small"
          style="width: 240px"
          placeholder="请输入用户昵称/手机号"
        ></el-input>
      </el-form-item>
      <el-form-item label="标签名称">
        <el-select
          v-model="formInline.tag"
          size="small"
          placeholder="请选择标签"
          style="width: 200px"
        >
          <el-option label="前端大牛" value="前端大牛"></el-option>
          <el-option label="技术狂" value="技术狂"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="用户身份">
        <el-select
          v-model="formInline.identity"
          size="small"
          placeholder="请选择用户身份"
          style="width: 200px"
        >
          <el-option label="普通会员" value="普通会员"></el-option>
          <el-option label="VIP" value="VIP"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="注册时间">
        <el-date-picker
          v-model="formInline.regTimeStart"
          size="small"
          type="date"
          style="width: 200px"
          placeholder="开始时间"
        >
        </el-date-picker>
        -
        <el-date-picker
          v-model="formInline.regTimeEnd"
          size="small"
          type="date"
          style="width: 200px"
          placeholder="结束时间"
        >
        </el-date-picker>
      </el-form-item>
      <el-form-item label="消费金额">
        <el-input v-model="formInline.amtFrom" size="small" style="width: 120px"></el-input>
        -
        <el-input v-model="formInline.amtTo" size="small" style="width: 120px"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" size="small" @click="handleSearch">筛选</el-button>
        <el-button size="small" style="margin-left: 8px">重置</el-button>
      </el-form-item>
      <el-button type="primary" size="small" class="export-user-btn">导出用户</el-button>
    </el-form>

    <el-table ref="userTable" :data="tableData" border class="user-table">
      <el-table-column type="selection" width="48"> </el-table-column>
      <el-table-column type="index" label="序列" width="80"> </el-table-column>
      <el-table-column label="用户" width="400">
        <template #default="scope">
          <div class="user-detail-scope">
            <img :src="scope.row.user.avatar" class="user-avatar" />
            <div class="info">
              <div class="tags">
                <span class="username">{{ scope.row.user.name }}</span>
                <el-tag v-for="tag in scope.row.user.identify" :key="tag" class="identify-tag">{{
                  tag
                }}</el-tag>
                <el-tag v-for="tag in scope.row.user.tags" :key="tag">{{ tag }}</el-tag>
              </div>
              <div class="membership-time">会员到期：{{ scope.row.user.membershipExpiration }}</div>
            </div>
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="telephone" label="手机号" width="174"> </el-table-column>
      <el-table-column prop="socre" label="可用学分" width="120"> </el-table-column>
      <el-table-column prop="loginTime" label="登录时间" width="240"> </el-table-column>
      <el-table-column prop="consume" label="消费金额(元)" width="212"> </el-table-column>
      <el-table-column fixed="right" label="操作" width="214">
        <template #default="scope">
          <div class="action-btns">
            <el-button type="text" size="small" @click="handleGoDetail(scope.row)">详情</el-button>
            <el-button type="text" size="small">发消息</el-button>
            <el-button type="text" size="small">拉黑</el-button>
            <el-button type="text" size="small">贴标签</el-button>
          </div>
        </template>
      </el-table-column>
    </el-table>

    <div class="batch-actions">
      <el-checkbox v-model="selectAll" class="select-all-btn" @change="handleToggleSelect"
        >全选</el-checkbox
      >
      <el-button size="mini">发消息</el-button>
      <el-button size="mini">贴标签</el-button>
      <el-button size="mini">拉黑</el-button>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, reactive, toRefs } from 'vue'
  import { useRouter } from 'vue-router'
  export default defineComponent({
    name: 'User',
    setup() {
      const router = useRouter()

      /**
       * data 搜索条件
       */
      const datas = reactive({
        // 搜索条件
        formInline: {
          user: '', // 用户名 input
          tag: '', // 标签名称 select
          identity: '', // 用户身份 select
          regTimeStart: '', // 注册开始时间 datepicker
          regTimeEnd: '', // 注册结束时间 datepicker
          amtFrom: '', // 消费金额最小 input
          amtTo: '' // 消费金额最大 input
        },
        // 表格数据
        tableData: [
          {
            order: 1,
            user: {
              name: '酱酱',
              avatar: 'https://z3.ax1x.com/2021/07/29/WHLceH.png',
              identify: ['管理员'],
              tags: ['前端大牛', '技术狂'],
              membershipExpiration: '2020/04/20 22:30:00'
            },
            telephone: '18812345678',
            socre: 1000,
            loginTime: '2022/04/20 22:33:00',
            consume: 100
          },
          {
            order: 2,
            user: {
              name: '酱酱',
              avatar: 'https://z3.ax1x.com/2021/07/29/WHLceH.png',
              identify: ['普通会员'],
              tags: ['前端大牛', '技术狂'],
              membershipExpiration: '2020/04/20 22:30:00'
            },
            telephone: '18812345678',
            socre: 1000,
            loginTime: '2022/04/20 22:33:00',
            consume: 100
          }
        ],
        // 是否全选
        selectAll: false
      })

      /**
       * handles
       */
      const handles = reactive({
        // 跳转到用户详情页
        handleGoDetail(row: Object) {
          console.log(row)
          router.push('/user-detail')
        },
        // 搜索
        handleSearch() {
          console.log('submit!')
        },
        // 表格当页数据全选
        handleToggleSelect() {
          console.log(111)
          // TODO: 全选联动
          // userTable.value.toggleAllSelection()
        }
      })

      return {
        ...toRefs(datas),
        ...toRefs(handles)
      }
    }
  })
</script>

<style lang="scss" scoped>
  @import './user-main.scss';
</style>
