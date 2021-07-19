<template>
  <div class="user-details">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="购买记录" name="first">
        <purchase-records></purchase-records>
      </el-tab-pane>
      <el-tab-pane label="学习情况" name="second">配置管理</el-tab-pane>
      <el-tab-pane label="用户评论" name="third">角色管理</el-tab-pane>
      <el-tab-pane label="学分收支" name="fourth">定时任务补偿</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script lang="ts">
  import PurchaseRecords from './PurchaseRecords.vue'
  export default {
    name: 'UserDetails',
    components: {
      PurchaseRecords
    },
    data() {
      return {
        activeName: 'first'
      }
    },
    methods: {
      handleClick(tab: Object, event: Object) {
        console.log(tab, event)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .user-details {
    padding: 24px;

    :deep(.el-tabs__item) {
      font-size: 18px;
      color: #666;
    }
    :deep(.el-tabs__nav-wrap::after) {
      display: none;
    }
    // :deep(.el-tabs__active-bar) {
    //   width: 32px !important;
    // }
  }
</style>
