<template>
  <div :class="style">
    <p>{{ text }}</p>
  </div>
</template>

<script>
export default {
  name: 'Text',
  props: {
    style: {
      type: String,
      default: 'title'
    },
    text: {
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>
