<template>
  <div this-component-is-responsible-to-allow-custom-classes-on-aem></div>
</template>

<script>
export default {
  name: 'CustomClasses',
  created () {
    const bodyLogin = document.querySelector('[cqpath="/content/vue/vue/login/jcr:content/root/responsivegrid"] div')
    bodyLogin.classList.add('bg-gray')

    const containerLeft = document.querySelector('[cqpath="/content/vue/vue/login/jcr:content/root/responsivegrid/container"] div')
    containerLeft.classList.add('container-center')

    const containerImgLogoMobile = document.querySelector('[cqpath="/content/vue/vue/login/jcr:content/root/responsivegrid/image"] ')
    containerImgLogoMobile.classList.add('img-mobile-logo')

    const ImgLogoMobile = document.querySelector('[cqpath="/content/vue/vue/login/jcr:content/root/responsivegrid/image"] img')
    ImgLogoMobile.classList.add('img-logo-hidden')
  }
}
</script>

<style lang="scss">
@import "./index.scss";
</style>
