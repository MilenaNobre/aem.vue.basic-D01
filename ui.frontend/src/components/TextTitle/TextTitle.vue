<template>
 <div>
   <div v-if="StyleList.includes(styleTitle)" class="div-home" :class="styleTitle">
     <p :style="{ color, fontFamily : font }"> {{ text }}</p>
   </div>
   <div v-else class="div-title" :class="styleTitle">
     <p :style="{ color, fontFamily : font }"> {{ text }}</p>
   </div>
 </div>
</template>

<script>
export default {
  name: 'TextTitle',
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
  },
  data () {
    return {
      StyleList: ['page-home-title', 'page-home-subtitle']
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>
