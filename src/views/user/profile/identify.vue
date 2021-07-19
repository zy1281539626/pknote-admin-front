<template>
  <div class="identify-tags">
    <el-tag v-for="tag in tags" :key="tag">{{ tag }}</el-tag>
  </div>
</template>

<script lang="ts">
  export default {
    name: 'IdentifyTags',
    data() {
      return {
        tags: ['普通会员', '系统管理员']
      }
    }
  }
</script>

<style lang="scss" scoped>
  .identify-tags {
    padding-top: 24px;
    padding-bottom: 24px;

    .el-tag {
      position: relative;
      padding: 12px 16px;
      margin-right: 32px;
      color: #666;
      font-size: 16px;
      background-color: #f5f5f5;
      border-radius: 23px;
      border: none;
      height: auto;
      line-height: normal;
      cursor: default;
    }
  }
</style>
