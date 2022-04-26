<template>
  <div :class="styleTitle">
    <p :style="{ color, fontFamily : font }"> {{ text }}</p>
  </div>
</template>

<script>
export default {
  name: 'Text',
  props: {
    styleTitle: {
      type: String,
      default: 'title'
    },
    color: {
      type: String,
      default: '#333333'
    },
    font: {
      type: String,
      default: 'monospace'
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
