<template>
  <div this-component-is-responsible-to-allow-custom-classes-on-aem></div>
</template>

<script>
export default {
  name: 'CustomClasses',
  mounted () {
    const containerLeft = document.querySelector('[cqpath="/content/vue/vue/login-component/jcr:content/root/responsivegrid"] div')
    containerLeft.classList.add('bg-gray')
    const containerRight = document.querySelector('[cqpath="/content/vue/vue/login-component/jcr:content/root/responsivegrid/container_1372446987"] div')
    containerRight.classList.add('bg-image')
    const imgLogo = document.querySelector('[cqpath="/content/vue/vue/login-component/jcr:content/root/responsivegrid/container_1372446987"] img')
    imgLogo.classList.add('img-logo')
  }
}
</script>

<style lang="scss">
.bg-gray {
  background: linear-gradient(to right top, #26292c, #2e3032, #363739, #3e3e3f, #464646);
  min-height: 1024px;
}

@media(min-height: 947px) { //evita barra de rolagem
  .bg-gray {
    min-height: 947px;
  }
}

.bg-image {
  background: url('/content/dam/vue/banner.png') center;
  position: fixed;
  background-size: cover;
  width: 50vw;
  height: 1000px;
}
.img-logo {
  text-align: center;
  padding: 5%;
  width: 15vw
}

@media(max-width: 960px) { //tela mobile esconde a imagem
  .bg-image {
    display: none;
  }
  .img-logo {
    display: none;
  }
}

</style>
