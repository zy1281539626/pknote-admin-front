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

    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="用户搜索">
        <el-input
          v-model="formInline.user"
          size="small"
          placeholder="请输入用户昵称/手机号"
        ></el-input>
      </el-form-item>
      <el-form-item label="标签名称">
        <el-select v-model="formInline.region" size="small" placeholder="请选择标签">
          <el-option label="前端大牛" value="前端大牛"></el-option>
          <el-option label="技术狂" value="技术狂"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="用户身份">
        <el-select v-model="formInline.region" size="small" placeholder="请选择用户身份">
          <el-option label="普通会员" value="普通会员"></el-option>
          <el-option label="VIP" value="VIP"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" size="small" @click="onSubmit">查询</el-button>
      </el-form-item>
    </el-form>

    <el-table :data="tableData" border style="width: 100%">
      <el-table-column type="selection" width="55"> </el-table-column>
      <el-table-column type="index" label="序列" width="55"> </el-table-column>
      <el-table-column label="用户" width="180">
        <template #default="scope">
          {{ scope.row.user.name }}
        </template>
      </el-table-column>
      <el-table-column prop="telephone" label="手机号"> </el-table-column>
      <el-table-column prop="socre" label="可用学分"> </el-table-column>
      <el-table-column prop="loginTime" label="登录时间"> </el-table-column>
      <el-table-column prop="consume" label="消费金额(元)"> </el-table-column>
      <el-table-column fixed="right" label="操作" width="214">
        <template #default="scope" class="action-btns">
          <el-button type="text" size="small" @click="handleClick(scope.row)">编辑 | </el-button>
          <el-button type="text" size="small">上架 | </el-button>
          <el-button type="text" size="small">分享 | </el-button>
          <el-button type="text" size="small">更多</el-button>
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
          region: ''
        },
        tableData: [
          {
            order: 1,
            user: {
              name: '酱酱',
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
              membershipExpiration: '2020/04/20 22:30:00'
            },
            telephone: '18812345678',
            socre: 1000,
            loginTime: '2022/04/20 22:33:00',
            consume: 100
          },
          {
            order: 3,
            user: {
              name: '酱酱',
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
      },
      onSubmit() {
        console.log('submit!')
      }
    }
  }
</script>

<style lang="scss" scoped>
  .user-container {
    padding: 24px;
    margin-top: 48px 114px 64px 64px;
    background-color: #fff;
    font-family: 'Microsoft YaHei, Microsoft YaHei-Regular';

    .info-title {
      display: flex;
      align-items: center;
      font-size: 22px;

      &::before {
        content: '';
        width: 4px;
        height: 16px;
        margin-right: 12px;
        background: #2590f9;
        border-radius: 2px;
      }
    }

    .statistics-card {
      display: flex;
      margin-top: 24px;
      margin-bottom: 30px;
      .card {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 172px;
        text-align: center;
        background-color: #f8f9fb;
        .card-title {
          color: #999;
          font-size: 24px;
          font-family: PingFang, PingFang-SC-Medium;
          font-weight: SC-Medium;
          margin-bottom: 20px;
        }
        .card-value {
          font-size: 40px;
          font-family: PingFang, PingFang-SC-Bold;
          font-weight: SC-Bold;
          color: #333333;
        }
      }
    }

    :deep(.el-table__header tr th) {
      height: 48px;
      padding: 0;
      text-align: center;
    }
    :deep(.el-table__body tr td) {
      height: 120px;
      padding: 0;
      text-align: center;
    }
    :deep(.el-button + .el-button) {
      margin-left: 0;
    }
  }
</style>
