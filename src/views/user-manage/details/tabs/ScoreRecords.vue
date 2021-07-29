<template>
  <div class="score-records">
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column type="index" label="序号" width="80"> </el-table-column>
      <el-table-column prop="content" label="内容"> </el-table-column>
      <el-table-column prop="type" label="类型"> </el-table-column>
      <el-table-column prop="score" label="学分"> </el-table-column>
      <el-table-column prop="source" label="学分来源"> </el-table-column>
      <el-table-column prop="time" label="收入/支出时间"> </el-table-column>
    </el-table>
    <el-pagination
      v-model:currentPage="currentPage2"
      class="pagination-bar"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      layout="sizes, prev, pager, next"
      :total="1000"
      background
      prev-text="上一页"
      next-text="下一页"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    >
    </el-pagination>
  </div>
</template>

<script lang="ts">
  export default {
    name: 'ScoreRecords',
    data() {
      return {
        tableData: [
          {
            id: 1,
            content: 'ES6-10全特性讲解',
            type: '收入',
            score: '+100',
            source: '学习',
            time: '2022/04/20 22:33:00'
          }
        ]
      }
    },
    methods: {
      openOrderDetail(row: Object) {
        console.log(row)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .score-records {
    font-family: 'Microsoft YaHei, Microsoft YaHei-Regular';
    :deep(.el-table__header tr th) {
      height: 48px;
      padding: 0;
      text-align: center;
      font-weight: 400;
      color: #333333;
    }
    :deep(.el-table__body tr td) {
      height: 120px;
      padding: 0;
      text-align: center;
      color: #333;
    }

    .pagination-bar {
      margin-top: 32px;
      float: right;
    }
    :deep(.el-pagination) {
      font-weight: normal;
    }
    :deep(.el-pagination.is-background .btn-prev),
    :deep(.el-pagination.is-background .btn-next) {
      padding-left: 10px;
      padding-right: 10px;
    }
  }
</style>
