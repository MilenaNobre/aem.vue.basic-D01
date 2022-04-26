<template>
  <div>
    <button :class='typeButton' ><span> {{ titleButton }} </span></button>
  </div>
</template>

<script>
export default {
  name: 'ActionButton',
  props: {
    titleButton: {
      type: String,
      default: 'back to homepage'
    },
    typeButton: { String }
  }
}
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>
