<template>
  <img :src="src" />
</template>

<script>
export default {
  name: 'Image',
  props: {
    src: {
      type: String
    }
  }
}
</script>

<style scoped>
img {
  width: 40vw;
}

@media (max-width: 650px) {
  img {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
}

</style>
