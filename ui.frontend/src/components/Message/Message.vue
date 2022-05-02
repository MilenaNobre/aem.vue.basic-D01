<template>
  <div>
    <p v-if="this.$store.getters.hasErrorMessage">
      {{ this.$store.getters.errorMessage }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'Message'
}
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>
