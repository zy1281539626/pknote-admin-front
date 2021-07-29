<template>
  <div class="user-info">
    <div class="info-title">基本信息</div>
    <div class="user-basic-wrap">
      <div class="user-basic">
        <div class="user-profile">
          <div class="avatar">
            <img src="https://img2.baidu.com/it/u=1678948314,1083480950&fm=26&fmt=auto&gp=0.jpg" />
          </div>
          <div class="content">
            <div class="name">老中医</div>
            <div class="location">湖北武汉</div>
            <div class="last-login-time">最近登录时间：2020-05-10 12:07:22</div>
          </div>
        </div>
        <div class="action-btns">
          <el-button type="primary">编辑</el-button>
          <el-button type="primary">发消息</el-button>
        </div>
      </div>
      <div class="profile-items">
        <el-row>
          <el-col v-for="item of profileItems" :key="item.label" :sm="12" :md="8">
            <div class="label">{{ item.label }}：</div>
            <div class="value">{{ item.value }}</div>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="info-title">用户标签</div>
    <div class="user-tags-wrap">
      <user-tags></user-tags>
    </div>
    <div class="info-title">用户身份</div>
    <div class="user-identity-wrap">
      <identify-tags></identify-tags>
    </div>
  </div>
  <div class="user-details">
    <el-tabs v-model="activeTab" @tab-click="changeState">
      <el-tab-pane label="购买记录" name="purchase">
        <purchase-records></purchase-records>
      </el-tab-pane>
      <el-tab-pane label="学习情况" name="study">
        <study-records v-if="flag"></study-records>
      </el-tab-pane>
      <el-tab-pane label="用户评论" name="comment">
        <comment-records></comment-records>
      </el-tab-pane>
      <el-tab-pane label="学分收支" name="score">
        <score-records></score-records>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script lang="ts">
  import UserTags from './tags.vue'
  import IdentifyTags from './identify.vue'
  import PurchaseRecords from './tabs/PurchaseRecords.vue'
  import StudyRecords from './tabs/StudyRecords.vue'
  import CommentRecords from './tabs/CommentRecords.vue'
  import ScoreRecords from './tabs/ScoreRecords.vue'
  export default {
    name: 'UserProfile',
    components: {
      UserTags,
      IdentifyTags,
      PurchaseRecords,
      StudyRecords,
      CommentRecords,
      ScoreRecords
    },
    data() {
      return {
        activeTab: 'purchase',
        flag: false,
        profileItems: [
          { label: '真实姓名', value: '老中医' },
          { label: '身份证号', value: '422130156023546551' },
          { label: '微信', value: 'zy1281539626' },
          { label: '性别', value: '男' },
          { label: '年龄', value: '22' },
          { label: '会员有效期', value: '2020-04-20 16:45:00' },
          { label: '生日', value: '1997-06-15' },
          { label: '注册时间', value: '2020-04-20 16:45:00' },
          { label: '地址', value: '湖北省武汉市' },
          { label: '手机号码', value: '13971766123' },
          { label: '邮箱', value: '1098456465@qq.com' }
        ]
      }
    },
    methods: {
      changeState: function (tab: any) {
        this.$nextTick(() => {
          this.flag = tab.props.name === 'study'
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .user-info {
    padding: 24px;
    margin-bottom: 16px;
    color: #333;
    font-size: 20px;
    font-family: Microsoft YaHei, Microsoft YaHei-Regular;
    background: #fff;

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
    .user-basic {
      display: flex;
      justify-content: space-between;
      margin: 40px 0;
      .user-profile {
        display: flex;
        .avatar {
          width: 87px;
          height: 87px;
          margin-right: 16px;
          img {
            width: 100%;
            height: 100%;
            border-radius: 50%;
          }
        }
        .content {
          display: flex;
          flex-flow: column nowrap;
          justify-content: space-around;
          .name {
            font-size: 18px;
          }
          .location {
            font-size: 16px;
            color: #666;
          }
          .last-login-time {
            font-size: 14px;
            color: #999;
          }
        }
      }
      .action-btns {
        display: flex;
        align-items: center;
        .el-button + .el-button {
          margin-left: 16px;
        }
      }
    }
    .profile-items {
      width: 100%;
      font-size: 20px;
      color: #333;
      margin-bottom: 30px;
      .el-col {
        display: flex;
        margin-bottom: 32px;
        .label {
          white-space: nowrap;
        }
      }
    }

    .user-tags-wrap {
      padding-top: 24px;
      padding-bottom: 32px;
    }
  }
  .user-details {
    padding: 24px;
    font-family: Microsoft YaHei, Microsoft YaHei-Regular;
    background: #fff;

    :deep(.el-tabs__item) {
      font-size: 18px;
      color: #666;
    }
    :deep(.el-tabs__nav-wrap::after) {
      display: none;
    }
  }
</style>
