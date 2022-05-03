<template>
  <img :src="src" class="scarecrow"/>
</template>

<script>
export default {
  name: 'Image',
  props: {
    src: {
      type: String
    }
  },
  mounted () {
    const containerLeft = document.querySelector('[cqpath="/content/vue/vue/home/jcr:content/root/responsivegrid/container"] div')
    const img = document.querySelector('[cqpath="/content/vue/vue/home/jcr:content/root/responsivegrid/container/image"] img')

    if (containerLeft) {
      img.classList.remove('scarecrow')
      img.classList.add('bg-img')
    }
  }
}
</script>

<style lang="scss">
@import "./index.scss";
</style>
