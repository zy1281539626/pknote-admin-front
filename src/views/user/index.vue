<template>
  <div class="user-container">
    <user-profile></user-profile>
    <user-details></user-details>
  </div>
</template>

<script lang="ts">
  import UserProfile from './profile/index.vue'
  import UserDetails from './details/index.vue'
  export default {
    name: 'User',
    components: {
      UserProfile,
      UserDetails
    }
  }
</script>

<style lang="scss" scoped>
  .user-container {
    margin-top: 48px 114px 64px 64px;
    background-color: #fff;
  }
</style>
