<template>
  <div class="user-container">
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
      }
    }
  }
</script>

<style lang="scss" scoped>
  .user-container {
    margin-top: 48px 114px 64px 64px;
    background-color: #fff;

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
