<template>
  <div class="comment-records">
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column type="index" label="序号" width="80"> </el-table-column>
      <el-table-column prop="content" label="评论内容"> </el-table-column>
      <el-table-column prop="likes" label="点赞数"> </el-table-column>
      <el-table-column prop="isChoice" label="是否精选"> </el-table-column>
      <el-table-column prop="productName" label="商品名称"> </el-table-column>
      <el-table-column prop="time" label="评论时间"> </el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts">
  export default {
    name: 'CommentRecords',
    data() {
      return {
        tableData: [
          {
            id: 1,
            content: '内容讲的不错',
            likes: '100',
            isChoice: '是',
            productName: 'ES6-10全特性讲解',
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
  .comment-records {
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
  }
</style>
