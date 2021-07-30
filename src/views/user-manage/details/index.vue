<template>
  <div class="user-info">
    <div class="info-title">基本信息</div>
    <div class="user-basic-wrap">
      <div class="user-basic">
        <div class="user-profile">
          <div class="avatar">
            <img src="https://z3.ax1x.com/2021/07/29/WHLceH.png" />
          </div>
          <div class="content">
            <div class="name">白玉汤</div>
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
    <el-tabs v-model="activeTab" @tab-click="changeTab">
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
      </el-tab-pane> </el-tabs
    >·
  </div>

  <el-dialog
    v-model="dialogUserEdit"
    custom-class="user-edit-form"
    :width="716"
    :show-close="false"
    title="用户信息"
  >
    <el-form>
      <el-form-item label="昵称：">
        <el-input size="small" placeholder="请输入用户昵称"></el-input>
      </el-form-item>
      <el-form-item label="真实姓名：">
        <el-input size="small" placeholder="请输入真实姓名"></el-input>
      </el-form-item>
      <el-form-item label="身份证号：">
        <el-input size="small" placeholder="请输入身份证号"></el-input>
      </el-form-item>
      <el-form-item label="性别：">
        <el-input size="small" placeholder="请输入性别"></el-input>
      </el-form-item>
      <el-form-item label="年龄：">
        <el-input size="small" placeholder="请输入年龄"></el-input>
      </el-form-item>
      <el-form-item label="生日：">
        <el-input size="small" placeholder="请输入生日"></el-input>
      </el-form-item>
      <el-form-item label="邮箱：">
        <el-input size="small" placeholder="请输入邮箱"></el-input>
      </el-form-item>
      <el-form-item label="地址：" class="address-info">
        <el-select v-model="userInfo.address.province" placeholder="请选择">
          <el-option label="湖北省" value="hubei"></el-option>
          <el-option label="广东省" value="guangdong"></el-option>
        </el-select>
        <el-select v-model="userInfo.address.city" placeholder="请选择">
          <el-option label="武汉市" value="wuhan"></el-option>
          <el-option label="深圳市" value="shenzhen"></el-option>
        </el-select>
        <el-select v-model="userInfo.address.area" placeholder="请选择">
          <el-option label="洪山区" value="hongshan"></el-option>
          <el-option label="南山区" value="nanshan"></el-option>
        </el-select>
        <el-input
          v-model="userInfo.address.detail"
          size="small"
          class="address-detail"
          placeholder="请输入详细地址"
        ></el-input>
      </el-form-item>
      <el-form-item label="用户身份：">
        <el-input size="small" placeholder="请输入用户昵称"></el-input>
      </el-form-item>
      <el-form-item label="用户学分：">
        <el-input size="small" placeholder="请输入用户昵称"></el-input>
      </el-form-item>
      <el-form-item label="用户标签：">
        <el-input size="small" placeholder="请输入用户昵称"></el-input>
      </el-form-item>
      <el-form-item label="用户状态：">
        <el-select v-model="userInfo.status" placeholder="请选择">
          <el-option label="正常" :value="1"></el-option>
          <el-option label="禁用" :value="0"></el-option>
        </el-select>
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button type="primary">保存</el-button>
        <el-button>关闭</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script lang="ts">
  import { defineComponent, reactive, ref, toRefs, nextTick } from 'vue'
  import UserTags from './tags.vue'
  import IdentifyTags from './identify.vue'
  import PurchaseRecords from './tabs/PurchaseRecords.vue'
  import StudyRecords from './tabs/StudyRecords.vue'
  import CommentRecords from './tabs/CommentRecords.vue'
  import ScoreRecords from './tabs/ScoreRecords.vue'
  export default defineComponent({
    name: 'UserProfile',
    components: {
      UserTags,
      IdentifyTags,
      PurchaseRecords,
      StudyRecords,
      CommentRecords,
      ScoreRecords
    },
    setup() {
      const flag = ref(false)
      const dialogUserEdit = ref(true)
      const datas = reactive({
        activeTab: 'purchase',
        profileItems: [
          { label: '真实姓名', value: '老白' },
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
      })

      const userInfo = reactive({
        address: {
          province: '',
          city: '',
          area: '',
          detail: ''
        },
        status: 1
      })

      const changeTab = (tab: any) => {
        nextTick(() => {
          flag.value = tab.props.name === 'study'
        })
      }

      return {
        flag,
        dialogUserEdit,
        ...toRefs(datas),
        changeTab,
        userInfo
      }
    }
  })
</script>

<style lang="scss">
  .user-edit-form {
    margin: 42px auto !important;
    border-radius: 10px !important;
    overflow: hidden;

    .el-dialog__header {
      height: 40px;
      line-height: 40px;
      padding: 0;
      padding-left: 24px;
      border-top: 5px solid #2590f9;
      border-bottom: 1px solid #e5e5e5;
      .el-dialog__title {
        font-size: 16px;
        color: #666;
      }
    }
    .el-dialog__body {
      padding: 24px;
      .el-form-item:not(:last-child) {
        margin-bottom: 16px;
      }
      .el-form-item:last-child {
        margin-bottom: 0px;
      }
      .el-form-item__label {
        width: 92px;
        text-align: center;
      }
      .el-input__inner {
        height: 40px;
      }
      .address-info {
        .el-select {
          width: 120px;
          margin-right: 16px;
        }
        .address-detail {
          width: 168px;
        }
      }
    }
    .el-dialog__footer {
      padding: 24px;
      text-align: center;
      border-top: 1px solid #e5e5e5;
      .el-button + .el-button {
        margin-left: 24px;
      }
    }
  }
</style>

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
