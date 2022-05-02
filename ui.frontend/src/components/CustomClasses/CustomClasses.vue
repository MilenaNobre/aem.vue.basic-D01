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

<style lang="scss" scoped>
@import "./index.scss";
</style>
