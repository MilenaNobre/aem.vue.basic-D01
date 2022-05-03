<template>
  <footer :class="styleFooter">
    <div v-if="text" class="mode-desktop">
      <div class="text-footer-hidden">
        <p class="p-home-text">
          {{ text }}
        </p>
        <span class="barra"></span>
        <p class="p-home-temp">
          Application refresh in
        </p>
        <p class="container-temp">
          <span class="seconds"> {{ seconds }} </span>
          seconds
        </p>
      </div>
      <div class="buttons buttons-change">
        <button class="button-continue" @click="reload">Continuar navegando</button>
        <button class="button-logout" @click="logout">Logout</button>
      </div>
    </div>
    <div v-else>
      <p>created by <span>{{ author }}</span> - devChallenges.io</p>
    </div>

  </footer>
</template>

<script>
export default {
  name: 'Footer',
  props: {
    author: {
      type: String,
      default: 'username'
    },
    text: { String }
  },
  data () {
    return {
      seconds: 600,
      interval: null
    }
  },
  computed: {
    styleFooter () {
      return this.text !== '' ? 'footer-home' : 'footer-simple'
    }
  },
  watch: {
    seconds () {
      if (this.seconds === 0) {
        clearInterval(this.interval)
        this.logout()
      }
    }
  },
  methods: {
    logout () {
      this.$store.commit('setResetUserLogado')
      window.location = '/content/vue/vue/login.html'
    },
    reload () {
      clearInterval(this.interval)
      this.seconds = 600
      this.initSession()
    },
    initSession () {
      this.interval = setInterval(() => { this.seconds-- }, 1000)
    }
  },
  mounted () {
    this.initSession()

    const hiddenTextHome = document.querySelector('[cqpath="/content/vue/vue/home/jcr:content/root/responsivegrid/container_456793718"] div')
    hiddenTextHome.classList.add('hidden-text')
  }
}
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>
