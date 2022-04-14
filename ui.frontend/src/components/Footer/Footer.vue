<template>
  <footer>
    <p>created by <span>{{ author }}</span> - devChallenges.io</p>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  props: {
    author: {
      type: String,
      default: 'username'
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>
