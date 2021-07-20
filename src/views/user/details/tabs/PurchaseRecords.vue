<template>
  <div class="purchase-records">
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column type="index" label="序号" width="80"> </el-table-column>
      <el-table-column prop="productName" label="商品名称"> </el-table-column>
      <el-table-column prop="productType" label="商品类型"> </el-table-column>
      <el-table-column prop="unit" label="单价"> </el-table-column>
      <el-table-column prop="quantity" label="数量"> </el-table-column>
      <el-table-column prop="amount" label="实付金额(元)"> </el-table-column>
      <el-table-column prop="time" label="订单完成时间" width="320"> </el-table-column>
      <el-table-column fixed="right" label="操作" width="160">
        <template #default="scope" class="action-btns">
          <el-button type="text" size="small" @click="openOrderDetail(scope.row)"
            >订单详情</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts">
  export default {
    name: 'PurchaseRecords',
    data() {
      return {
        tableData: [
          {
            id: 1,
            productName: 'ES6-10全特性讲解',
            productType: '专栏',
            unit: '99.00',
            quantity: 1,
            amount: '99.00',
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
  .purchase-records {
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
    :deep(.el-button + .el-button) {
      margin-left: 0;
    }
    :deep(.el-button--text) {
      font-size: 16px;
      color: #2b9afa;
    }
  }
</style>
