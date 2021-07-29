<template>
  <div class="user-container">
    <div class="info-title">用户私信</div>
    <el-form :inline="true" :model="formInline">
      <el-form-item label="发送人">
        <el-input
          v-model="formInline.senderName"
          size="small"
          style="width: 240px"
          placeholder="请输入发送人昵称"
        ></el-input>
      </el-form-item>
      <el-form-item label="私信标题">
        <el-input
          v-model="formInline.messageTitle"
          size="small"
          style="width: 240px"
          placeholder="请输入私信标题"
        ></el-input>
      </el-form-item>
      <el-form-item label="状态">
        <el-select
          v-model="formInline.status"
          size="small"
          placeholder="请选择装填"
          style="width: 200px"
        >
          <el-option label="已发送" value="已发送"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="发送时间">
        <el-date-picker
          v-model="formInline.sendTimeStart"
          size="small"
          type="date"
          style="width: 200px"
          placeholder="开始时间"
        >
        </el-date-picker>
        -
        <el-date-picker
          v-model="formInline.sendTimeEnd"
          size="small"
          type="date"
          style="width: 200px"
          placeholder="结束时间"
        >
        </el-date-picker>
      </el-form-item>
      <el-form-item label="是否回复">
        <el-select
          v-model="formInline.isReply"
          size="small"
          placeholder="请选择"
          style="width: 200px"
        >
          <el-option label="是" value="是"></el-option>
          <el-option label="否" value="否"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" size="small" @click="onSubmit">筛选</el-button>
        <el-button size="small" style="margin-left: 8px">重置</el-button>
      </el-form-item>
    </el-form>

    <el-table :data="tableData" border class="user-table">
      <el-table-column type="selection" width="48"> </el-table-column>
      <el-table-column type="index" label="序列" width="80"> </el-table-column>
      <el-table-column prop="content" label="私信内容" width="374" align="left"> </el-table-column>
      <el-table-column prop="sender" label="发送人" width="175"> </el-table-column>
      <el-table-column prop="status" label="私信状态" width="95"> </el-table-column>
      <el-table-column prop="sendTime" label="发送时间" width="175"> </el-table-column>
      <el-table-column prop="isReply" label="是否回复"> </el-table-column>
      <el-table-column fixed="right" label="操作" width="214">
        <template #default="scope" class="action-btns">
          <el-button type="text" size="small" @click="handleClick(scope.row)">回复 | </el-button>
          <el-button type="text" size="small">屏蔽该用户信息 </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts">
  export default {
    name: 'UserMessages',
    data() {
      return {
        formInline: {
          senderName: '',
          messageTitle: '',
          status: '',
          sendTimeStart: '',
          sendTimeEnd: '',
          isReply: ''
        },
        tableData: [
          {
            order: 1,
            content:
              '音乐亲子教学中的音乐符号顺口溜 ,换气记号,小尖角,头朝地,遇见它,换口气. 2.顿音记号 :小小黑三角,尖尖朝着地,短促跳跃,顿音别忘记. 3.延长记号 4.反复记号',
            sender: '白玉堂',
            status: '已发送',
            sendTime: '2021/07/29 16:20:30',
            isReply: '是'
          },
          {
            order: 2,
            content:
              '音乐亲子教学中的音乐符号顺口溜 ,换气记号,小尖角,头朝地,遇见它,换口气. 2.顿音记号 :小小黑三角,尖尖朝着地,短促跳跃,顿音别忘记. 3.延长记号 4.反复记号',
            sender: '白玉堂',
            status: '已发送',
            sendTime: '2021/07/29 16:20:30',
            isReply: '是'
          },
          {
            order: 3,
            content:
              '音乐亲子教学中的音乐符号顺口溜 ,换气记号,小尖角,头朝地,遇见它,换口气. 2.顿音记号 :小小黑三角,尖尖朝着地,短促跳跃,顿音别忘记. 3.延长记号 4.反复记号',
            sender: '白玉堂',
            status: '已发送',
            sendTime: '2021/07/29 16:20:30',
            isReply: '是'
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
