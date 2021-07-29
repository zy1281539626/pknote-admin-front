<template>
  <div class="user-container">
    <div class="info-title">数据统计</div>
    <div class="statistics-card">
      <div class="card">
        <div class="card-title">新增评论</div>
        <div class="card-value">100</div>
      </div>
      <div class="card" style="margin-left: 16px">
        <div class="card-title">评论总数</div>
        <div class="card-value">100</div>
      </div>
    </div>
    <div class="info-title">评论列表</div>
    <el-form :inline="true" :model="formInline">
      <el-form-item label="课程名称">
        <el-input
          v-model="formInline.courseName"
          size="small"
          style="width: 240px"
          placeholder="请输入课程名称"
        ></el-input>
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
      <el-form-item label="是否精选">
        <el-select
          v-model="formInline.isDistilled"
          size="small"
          placeholder="请选择"
          style="width: 200px"
        >
          <el-option label="是" value="是"></el-option>
          <el-option label="否" value="否"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="评论时间">
        <el-date-picker
          v-model="formInline.commentTimeStart"
          size="small"
          type="date"
          style="width: 200px"
          placeholder="开始时间"
        >
        </el-date-picker>
        -
        <el-date-picker
          v-model="formInline.commentTimeEnd"
          size="small"
          type="date"
          style="width: 200px"
          placeholder="结束时间"
        >
        </el-date-picker>
      </el-form-item>
      <el-form-item label="用户">
        <el-input
          v-model="formInline.username"
          size="small"
          style="width: 240px"
          placeholder="请输入用户昵称"
        ></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" size="small" @click="onSubmit">筛选</el-button>
        <el-button size="small" style="margin-left: 8px">重置</el-button>
      </el-form-item>
      <el-button type="primary" size="small" class="export-user-btn">导出评论</el-button>
    </el-form>

    <el-table :data="tableData" border class="user-table">
      <el-table-column type="selection" width="48"> </el-table-column>
      <el-table-column type="index" label="序列" width="80"> </el-table-column>
      <el-table-column label="用户" width="200">
        <template #default="scope">
          <div class="user-detail-scope" style="justify-content: center">
            <img :src="scope.row.user.avatar" class="user-avatar" />
            <div class="info">{{ scope.row.user.name }}</div>
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="comment" label="评论内容" width="374" align="left"> </el-table-column>
      <el-table-column prop="commentTime" label="评论时间" width="175"> </el-table-column>
      <el-table-column prop="support" label="点赞" width="95"> </el-table-column>
      <el-table-column prop="reply" label="回复内容" width="277" align="left"> </el-table-column>
      <el-table-column prop="replyTime" label="回复时间" width="175"> </el-table-column>
      <el-table-column prop="isDistilled" label="是否精选"> </el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts">
  export default {
    name: 'UserComments',
    data() {
      return {
        formInline: {
          courseName: '',
          isReply: '',
          isDistilled: '',
          commentTimeStart: '',
          commentTimeEnd: '',
          username: ''
        },
        tableData: [
          {
            order: 1,
            user: {
              name: '酱酱',
              avatar: 'https://z3.ax1x.com/2021/07/29/WHLceH.png'
            },
            comment:
              '音乐亲子教学中的音乐符号顺口溜 ,换气记号,小尖角,头朝地,遇见它,换口气. 2.顿音记号 :小小黑三角,尖尖朝着地,短促跳跃,顿音别忘记. 3.延长记号 4.反复记号',
            commentTime: '2022/04/20 22:33:00',
            support: '20',
            reply: '为什么诸多品牌都青睐动物logo设计？',
            replyTime: '2022/04/20 22:33:00',
            isDistilled: '是'
          },
          {
            order: 2,
            user: {
              name: '酱酱',
              avatar: 'https://z3.ax1x.com/2021/07/29/WHLceH.png'
            },
            comment:
              '音乐亲子教学中的音乐符号顺口溜 ,换气记号,小尖角,头朝地,遇见它,换口气. 2.顿音记号 :小小黑三角,尖尖朝着地,短促跳跃,顿音别忘记. 3.延长记号 4.反复记号',
            commentTime: '2022/04/20 22:33:00',
            support: '20',
            reply: '为什么诸多品牌都青睐动物logo设计？',
            replyTime: '2022/04/20 22:33:00',
            isDistilled: '是'
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
