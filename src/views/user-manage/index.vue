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
        <el-button type="primary" size="small" @click="onSubmit">筛选</el-button>
        <el-button size="small" style="margin-left: 8px">重置</el-button>
      </el-form-item>
      <el-button type="primary" size="small" class="export-user-btn">导出用户</el-button>
    </el-form>

    <el-table :data="tableData" border class="user-table">
      <el-table-column type="selection" width="48"> </el-table-column>
      <el-table-column type="index" label="序列" width="80"> </el-table-column>
      <el-table-column label="用户" width="400">
        <template #default="scope">
          <div class="user-detail-scope">
            <img :src="scope.row.user.avatar" class="user-avatar" />
            <div class="info">
              <div class="tags">
                <span class="username">{{ scope.row.user.name }}</span>
                <el-tag v-if="scope.row.user.identify" class="identify-tag">{{
                  scope.row.user.identify
                }}</el-tag>
                <el-tag v-for="tag in scope.row.user.tags" :key="tag">{{ tag }}</el-tag>
              </div>
              <div class="membership-time">
                会员到期：{{ scope.row.user.membershipExpiration }}
              </div>
            </div>
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="telephone" label="手机号" width="174"> </el-table-column>
      <el-table-column prop="socre" label="可用学分" width="120"> </el-table-column>
      <el-table-column prop="loginTime" label="登录时间" width="240"> </el-table-column>
      <el-table-column prop="consume" label="消费金额(元)"> </el-table-column>
      <el-table-column fixed="right" label="操作" width="214">
        <template #default="scope" class="action-btns">
          <el-button type="text" size="small" @click="handleClick(scope.row)">详情 | </el-button>
          <el-button type="text" size="small">发消息 | </el-button>
          <el-button type="text" size="small">拉黑 | </el-button>
          <el-button type="text" size="small">贴标签</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts">
  export default {
    name: 'User',
    data() {
      return {
        formInline: {
          user: '',
          tag: '',
          identity: '',
          regTimeStart: '',
          regTimeEnd: '',
          amtFrom: '',
          amtTo: ''
        },
        tableData: [
          {
            order: 1,
            user: {
              name: '酱酱',
              avatar: 'https://z3.ax1x.com/2021/07/29/WHLceH.png',
              identify: '普通会员',
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
              identify: '普通会员',
              tags: ['前端大牛', '技术狂'],
              membershipExpiration: '2020/04/20 22:30:00'
            },
            telephone: '18812345678',
            socre: 1000,
            loginTime: '2022/04/20 22:33:00',
            consume: 100
          }
        ]
      }
    },
    methods: {
      handleClick(row: Object) {
        console.log(row)
        this.$router.push('/user-detail')
      },
      onSubmit() {
        console.log('submit!')
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import './user-main.scss';
</style>
