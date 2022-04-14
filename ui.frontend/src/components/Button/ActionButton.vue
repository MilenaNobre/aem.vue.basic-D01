<template>
  <div>
    <button id='btn' ><span> {{ titleButton }} </span></button>
  </div>
</template>

<script>
export default {
  name: 'ActionButton',
  props: {
    titleButton: {
      type: String,
      default: 'back to homepage'
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>
