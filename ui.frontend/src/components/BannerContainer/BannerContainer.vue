<template>
  <div class="container-right">
    <img src="/content/dam/vue/Logo-Compasso.png" />
  </div>
</template>

<script>
export default {
  name: 'BannerContainer'
}
</script>

<style scoped>
.container-right {
  width: 50vw;
  height: 1080px;
  background: url('/content/dam/vue/banner.png') center;
  background-size: cover;

  display: grid;
  justify-content: center;
  padding-top: 5%;
}
img {
  width: 20vw;
}

@media(max-width: 960px) {
  .container-right {
    display: none;
  }
}

</style>
