<template>
  <div this-component-is-responsible-to-allow-custom-classes-on-aem></div>
</template>

<script>
export default {
  name: 'CustomClasses',
  mounted () {
    const body = document.querySelector('[cqpath="/content/vue/vue/login/jcr:content/root/responsivegrid"] div')
    body.classList.add('bg-gray')

    const containerLeft = document.querySelector('[cqpath="/content/vue/vue/login/jcr:content/root/responsivegrid/container"] div')
    containerLeft.classList.add('container-center')

    // const logoMobile = document.querySelector('.aem-container .container-center [cqpath="/content/vue/vue/login/jcr:content/root/responsivegrid/container/image"] ')
    // logoMobile.classList.add('logo-mobile')
  }
}
</script>

<style lang="scss">
.bg-gray {
  height: 1080px;
  background: linear-gradient(to right top, #26292c, #2e3032, #363739, #3e3e3f, #464646);
}

.img-mobile {
  background: url('/content/dam/vue/Logo-Compasso.png');
}
.container-center {
  display: grid;
  justify-content: center;
}
.logo-mobile {
  display: none;
}

@media(max-width: 960px) {
  .container-right {
    display: none;
  }
  .logo-mobile {
     width: 20vw;
  }
}
</style>
