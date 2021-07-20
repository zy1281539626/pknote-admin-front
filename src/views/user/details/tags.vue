<template>
  <div class="user-tags">
    <el-tag
      v-for="tag in dynamicTags"
      :key="tag"
      closable
      :disable-transitions="false"
      @close="handleClose(tag)"
    >
      {{ tag }}
    </el-tag>

    <el-input
      v-if="inputVisible"
      ref="saveTagInput"
      v-model="inputValue"
      class="input-new-tag"
      @keyup.enter="handleInputConfirm"
      @blur="handleInputConfirm"
    >
    </el-input>

    <el-button
      v-else
      class="button-new-tag"
      icon="el-icon-plus"
      circle
      @click="showInput"
    ></el-button>
  </div>
</template>

<script lang="ts">
  export default {
    name: 'UserTags',
    data() {
      return {
        dynamicTags: ['前端大牛', '技术狂'],
        inputVisible: false,
        inputValue: ''
      }
    },
    methods: {
      handleClose(tag: string) {
        this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1)
      },
      showInput() {
        this.inputVisible = true
        this.$nextTick(() => {
          ;(this.$refs.saveTagInput as HTMLElement).focus()
        })
      },
      handleInputConfirm() {
        let inputValue = this.inputValue
        if (inputValue) {
          this.dynamicTags.push(inputValue)
        }
        this.inputVisible = false
        this.inputValue = ''
      }
    }
  }
</script>

<style lang="scss" scoped>
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

    :deep(.el-icon-close) {
      position: absolute;
      top: -6px;
      right: -8px;
      width: 24px;
      height: 24px;
      background-color: #c0c0c0;
      color: #fff;
      line-height: 24px;
      font-size: 14px;
    }
  }
  .input-new-tag {
    width: 90px;
    margin-left: 10px;
    vertical-align: bottom;
  }
</style>
